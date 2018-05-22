
module.exports = (summary, campaign, comments, community) => `
  <div id="application">
    <div id="Summary">${summary}</div>
    <div id="Campaign">${campaign}</div>
    <div id="Comments">${comments}</div>
    <div id="Community">${community}</div>
  </div>
`;
