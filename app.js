const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db/connection.js');

const router = require('./routes/index.js');
const path = require('path');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));
app.use(express.json());

connection.once('open', () => {
  console.log('connected to database');

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Listenning on ${process.env.PORT || 3000}`);
  });
});

app.use('/api/v1', router);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
