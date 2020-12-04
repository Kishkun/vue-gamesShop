const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const {routes} = require('./src/routes');

// settings connection to db
mongoose.connect(
    'mongodb://localhost:27017/gamesShop',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

// init app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});

// declare our routes
const PORT = 3000;
http.createServer({}, app).listen(PORT);
console.log(`server running at ${PORT}`);
