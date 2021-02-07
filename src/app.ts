import express from 'express';
import cors from 'cors';
import path from 'path';

// Create Express server
const app = express();

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