# Node.js + TypeScript Template

## Why?

While going through freeCodeCamp's APIs and Microservices Projects and I found myself 
repeatedly setting up each project in a very similar way. I thought that this template 
might save some time in the future.

## What's included?

* `typescript`
* `express`
* `dotenv`
* `cors`
* `nodemon`
* `mongodb`|`mongoose`

## Installation

### MongoDB Atlas
Use your existing account or create a new one. If you don't know how to do that, you can 
follow [step by step tutorial by freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/).

Once you have connected to your cluster, use `.env.example` to create your `.env` file.

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster#-dbname>.mongodb.net/test

MONGODB_URI_LOCAL=mongodb://localhost:27017/<db_name>
```

### Install dependencies
```bash
$ npm install
```

### Start the server
```bash
$ npm run dev
```
