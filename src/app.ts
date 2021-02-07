import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

import { MONGODB_URI } from './util/secrets';

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUri = MONGODB_URI as string;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  })
  .then(() => console.log('✅ MongoDB connected...'))
  .catch((err) => console.log('❌ MongoDB connection error...', err));

// Express configuration
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '../views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
});

export default app;