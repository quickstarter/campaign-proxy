const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const request = require('request');
const requestPromise = require('request-promise');

const app = express();
const port = process.env.PORT || 7070;
const { proxyHtml } = require('../htmlRender.js');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
console.log(express.static('public'));

app.get('/', (req, res) => {
  // render campaign module
  requestPromise('http://localhost:7777/campaign')
    .then((htmlString) => {
      const campaignBundle = htmlString;
      res.send(proxyHtml(campaignBundle));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

