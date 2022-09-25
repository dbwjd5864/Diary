const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db/connection.js');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));
app.use(express.json());

connection.once('open', () => {
  console.log('connected to database');

  const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listenning on ${process.env.PORT || 3000}`);
  });
});

const router = require('./routes/index.js');
app.use('/api/v1', router);
