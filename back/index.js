const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const {routes} = require('./src/routes');

const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  throw result.error
}

// settings connection to db
mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

// init app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});

// declare our routes
const PORT = 3000;
http.createServer({}, app).listen(PORT);
console.log(`server running at ${PORT}`);
