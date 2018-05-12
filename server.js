require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
// const requestPromise = require('request-promise');

const app = express();
const port = process.env.PORT || 7070;

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const template = require('./htmlRender.js');


app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));


const renderComponents = (components, props = {}) => Object.keys(components).map((item) => {
  const component = React.createElement(components[item], props);
  return ReactDom.renderToString(component);
});

app.get('/:id', (req, res) => {
  let components = renderComponents(services, { projectId: req.params.id });
  res.end(template(req.params.id, components));
});

                  
// // sending module to proxy server
// router.get('/campaign', (req, res) => {
//   const campaign = renderToString(<Campaign/>);
//   res.send(campaign);
// });


// app.get('/', (req, res) => {
//   // render campaign module
//   requestPromise('http://localhost:7777/campaign')
//     .then((htmlString) => {
//       const campaignBundle = htmlString;
//       res.send(template(campaignBundle));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

