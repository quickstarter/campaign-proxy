module.exports = (projectId, campaignBundle, communityBundle, summaryBundle, commentBundle, navbarBundle, updateBundle) => `
        <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
                <link href="https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2" rel="icon" type="image/png">
                <link rel="stylesheet" href="http://www.samgetlan.com/navbar/styles.css">
                <link rel="stylesheet" href="https://s3.amazonaws.com/quickstarter-mo/styles.css">
                <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/styles.css">
                <link rel="stylesheet" href="http://www.samgetlan.com/community/styles.css">
                <title>QuickStarter</title>
              </head>
              <body>
                <div id="application">
                  <div id="Summary">${summaryBundle}</div>
                  <div id="Navbar">${navbarBundle}</div>
                  <div id="Campaign">${campaignBundle}</div>
                  <div id="Updates">${updateBundle}</div>
                  <div id="Comments">${commentBundle}</div>
                  <div id="Community">${communityBundle}</div>
                </div>
                <script crossorigin src="https://unpkg.com/react@16.3.2/umd/react.development.js"></script>
                <script crossorigin src="https://unpkg.com/react-dom@16.3.2/umd/react-dom.development.js"></script>
                <script src="/services/Campaign.js"></script>
                <script src="/services/Community.js"></script>
                <script>
                  console.log(Campaign)
                  console.log(Community);
                  ReactDOM.hydrate(
                    React.createElement(Campaign, {projectId: ${projectId}, userId: 777}),
                    document.getElementById('Campaign')
                  );
                  ReactDOM.hydrate(
                    React.createElement(Community, {projectId: ${projectId}}),
                    document.getElementById('Community')
                  );
                </script>
              </body>
            </html>
`;
