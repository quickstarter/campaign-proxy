module.exports = (projectId, campaignBundle, summaryBundle, commentBundle, communityBundle, navbarBundle, updateBundle) => `
        <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
                <link href="https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2" rel="icon" type="image/png">
                <link rel="stylesheet" href="./styles.css">
                <link rel="stylesheet" href="http://www.samgetlan.com/navbar/styles.css">
                <link rel="stylesheet" href="http://s3-us-west-1.amazonaws.com/fec-kickstarter-campaign-module/styles.css">
                <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/styles.css">
                <link rel="stylesheet" href="http://www.samgetlan.com/community/styles.css">
                <title>QuickStarter</title>
              </head>
              <body>
                <div id="application">
                  <div id="Summary">${summaryBundle}</div>
                  <div id="Navbar">${navbarBundle}</div>
                  <div id="Campaign">${campaignBundle}</div>
                  <div id="Updates" class="hidden">${updateBundle}</div>
                  <div id="Comments" class="hidden">${commentBundle}</div>
                  <div id="Community" class="hidden">${communityBundle}</div>
                </div>
                <script crossorigin src="./lib/react-development.js"></script>
                <script crossorigin src="./lib/react-dom.development.js"></script>
                <script src="http://www.samgetlan.com/navbar/navbarControl.js"></script>
                <script src="/services/Campaign.js"></script>
                <script>
                  ReactDOM.hydrate(
                    React.createElement(Campaign, {projectId: ${projectId}, userId: 777}),
                    document.getElementById('Campaign')
                  );
                </script>
              </body>
            </html>
`;
