const express = require('express');
const app = express();

const connection = require('./db/connection.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

connection.once('open', () => {
  console.log('connected to database');

  const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Listenning on ${process.env.PORT || 5000}`);
  });
});

const router = require('./routes/index.js');
app.use('/api/v1', router);
