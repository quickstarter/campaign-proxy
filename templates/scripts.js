
module.exports = (items, projectId) => `
  <script crossorigin src="https://unpkg.com/react@16.3.2/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16.3.2/umd/react-dom.development.js"></script>

  ${items.map(item => `<script src="/services/${item}.js"></script>`).join('\n')}

  <script>
    ${items.map(item => `
      ReactDOM.hydrate(
        React.createElement(${item}, {projectId: ${projectId}, userId: 777}),
        document.getElementById('${item}')
      );`).join('\n')}
  </script>
`;
