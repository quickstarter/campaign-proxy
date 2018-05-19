require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 7070;

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

// For server-side rendering

// const clientBundles = './public/services';
// const serverBundles = './templates/services';
// const serviceConfig = require('./service-config.json');
// const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

// const React = require('react');
// const ReactDom = require('react-dom/server');
// const template = require('./htmlRender.js');


// const renderComponents = (components, props = {}) => Object.keys(components).map((item) => {
//   const component = React.createElement(components[item], props);
//   console.log('component', component);
//   return ReactDom.renderToString(component);
// });

// app.get('/:id', (req, res) => {
  // const components = renderComponents(services, { projectId: req.params.id });
  // res.end(template(req.params.id, ...components));
// });             

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

