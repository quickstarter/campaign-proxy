/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./htmlRender.js":
/*!***********************!*\
  !*** ./htmlRender.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar proxyHtml = function proxyHtml(markup, campaignBundle, summaryBundle, navbarBundle, updateBundle, commentBundle, communityBundle) {\n  return \"<!DOCTYPE html>\\n                    <html lang=\\\"en\\\">\\n                      <head>\\n                        <meta charset=\\\"UTF-8\\\">\\n                        <link href=\\\"https://fonts.googleapis.com/css?family=Karla:400,700\\\" rel=\\\"stylesheet\\\">\\n                        <link href=\\\"https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2\\\" rel=\\\"icon\\\" type=\\\"image/png\\\">\\n                        <link rel=\\\"stylesheet\\\" href=\\\"./styles.css\\\">\\n                        <link rel=\\\"stylesheet\\\" href=\\\"http://www.samgetlan.com/navbar/styles.css\\\">\\n                        <link rel=\\\"stylesheet\\\" href=\\\"http://s3-us-west-1.amazonaws.com/fec-kickstarter-campaign-module/styles.css\\\">\\n                        <link rel=\\\"stylesheet\\\" href=\\\"https://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/styles.css\\\">\\n                        <link rel=\\\"stylesheet\\\" href=\\\"http://www.samgetlan.com/community/styles.css\\\">\\n                        <title>QuickStarter</title>\\n                      </head>\\n                      <body>\\n                        <div id=\\\"app\\\">\" + markup + \"</div>\\n                        <div id=\\\"application\\\">\\n                          <div id=\\\"Summary\\\">\" + summaryBundle + \"</div>\\n                          <div id=\\\"Navbar\\\">\" + navbarBundle + \"</div>\\n                          <div id=\\\"Campaign\\\">\" + campaignBundle + \"</div>\\n                          <div id=\\\"Updates\\\" class=\\\"hidden\\\">\" + updateBundle + \"</div>\\n                          <div id=\\\"Comments\\\" class=\\\"hidden\\\">\" + commentBundle + \"</div>\\n                          <div id=\\\"Community\\\" class=\\\"hidden\\\">\" + communityBundle + \"</div>\\n                        </div>\\n                        <script crossorigin src=\\\"https://unpkg.com/react@16/umd/react.development.js\\\"></script>\\n                        <script crossorigin src=\\\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\\\"></script>\\n                        <script>\\n                          const project = window.location.href.split('?')[1] || 0;\\n                          ReactDOM.hydrate(\\n                            React.createElement(Navbar, {projectId: project}),\\n                            document.getElementById('Navbar')\\n                          );\\n                          ReactDOM.hydrate(\\n                            React.createElement(Community, {projectId: project}),\\n                            document.getElementById('Community')\\n                          );\\n                          ReactDOM.hydrate(\\n                            React.createElement(Campaign, {projectId: project, username: \\\"Saige99\\\"}),\\n                            document.getElementById('Campaign')\\n                          );\\n                          ReactDOM.hydrate(\\n                            React.createElement(App, {projectId: project}),\\n                            document.getElementById('Summary')\\n                          );\\n                          ReactDOM.hydrate(\\n                            React.createElement(Updates, {projectId: project}),\\n                            document.getElementById('Updates')\\n                          );\\n                          ReactDOM.hydrate(\\n                            React.createElement(Comments, {projectId: project}),\\n                            document.getElementById('Comments')\\n                          );\\n                        </script>\\n                        <script src=\\\"http://www.samgetlan.com/navbar/navbarControl.js\\\"></script>\\n                      </body>\\n                    </html>\";\n};\n\nmodule.exports.proxyHtml = proxyHtml;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9odG1sUmVuZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2h0bWxSZW5kZXIuanM/ZmRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm94eUh0bWwgPSBmdW5jdGlvbiAobWFya3VwLCBjYW1wYWlnbkJ1bmRsZSwgc3VtbWFyeUJ1bmRsZSwgbmF2YmFyQnVuZGxlLCB1cGRhdGVCdW5kbGUsIGNvbW1lbnRCdW5kbGUsIGNvbW11bml0eUJ1bmRsZSkge1xuICByZXR1cm4gYDwhRE9DVFlQRSBodG1sPlxuICAgICAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYTo0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZDNtbGZ5eWdyZmRpMmkuY2xvdWRmcm9udC5uZXQvZmF2aWNvbi5wbmc/dj0yXCIgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9zdHlsZXMuY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly93d3cuc2FtZ2V0bGFuLmNvbS9uYXZiYXIvc3R5bGVzLmNzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vZmVjLWtpY2tzdGFydGVyLWNhbXBhaWduLW1vZHVsZS9zdHlsZXMuY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vdXBkYXRlcy1hbmQtY29tbWVudHMvVXBkYXRlcy9zdHlsZXMuY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly93d3cuc2FtZ2V0bGFuLmNvbS9jb21tdW5pdHkvc3R5bGVzLmNzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlF1aWNrU3RhcnRlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPiR7bWFya3VwfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFwcGxpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJTdW1tYXJ5XCI+JHtzdW1tYXJ5QnVuZGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTmF2YmFyXCI+JHtuYXZiYXJCdW5kbGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJDYW1wYWlnblwiPiR7Y2FtcGFpZ25CdW5kbGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJVcGRhdGVzXCIgY2xhc3M9XCJoaWRkZW5cIj4ke3VwZGF0ZUJ1bmRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkNvbW1lbnRzXCIgY2xhc3M9XCJoaWRkZW5cIj4ke2NvbW1lbnRCdW5kbGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJDb21tdW5pdHlcIiBjbGFzcz1cImhpZGRlblwiPiR7Y29tbXVuaXR5QnVuZGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0QDE2L3VtZC9yZWFjdC5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBjcm9zc29yaWdpbiBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTYvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMV0gfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RET00uaHlkcmF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmJhciwge3Byb2plY3RJZDogcHJvamVjdH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYXZiYXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdERPTS5oeWRyYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbXVuaXR5LCB7cHJvamVjdElkOiBwcm9qZWN0fSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbW11bml0eScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0RE9NLmh5ZHJhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYW1wYWlnbiwge3Byb2plY3RJZDogcHJvamVjdCwgdXNlcm5hbWU6IFwiU2FpZ2U5OVwifSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NhbXBhaWduJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RET00uaHlkcmF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwge3Byb2plY3RJZDogcHJvamVjdH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTdW1tYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RET00uaHlkcmF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFVwZGF0ZXMsIHtwcm9qZWN0SWQ6IHByb2plY3R9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVXBkYXRlcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0RE9NLmh5ZHJhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50cywge3Byb2plY3RJZDogcHJvamVjdH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb21tZW50cycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cDovL3d3dy5zYW1nZXRsYW4uY29tL25hdmJhci9uYXZiYXJDb250cm9sLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L2h0bWw+YDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLnByb3h5SHRtbCA9IHByb3h5SHRtbDtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBdURBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./htmlRender.js\n");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar request = __webpack_require__(/*! request */ \"request\");\nvar requestPromise = __webpack_require__(/*! request-promise */ \"request-promise\");\n// const campaign = require('../public/lib/campaignBundle');\n\nvar app = express();\nvar port = process.env.PORT || 7070;\nvar proxyHtml = __webpack_require__(/*! ../htmlRender.js */ \"./htmlRender.js\");\n\napp.use(morgan('dev'));\napp.use(cors());\napp.use(express.static('public'));\nconsole.log(express.static('public'));\n\napp.get('/', function (req, res) {\n  // render campaign module\n  requestPromise('http://localhost:7777/campaign').then(function (htmlString) {\n    var campaignBundle = htmlString;\n    res.send(proxyHtml.proxyHtml(campaignBundle));\n  }).catch(function (err) {\n    console.log(err);\n  });\n});\n\napp.listen(port, function () {\n  console.log('server running at: http://localhost:' + port);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL2luZGV4LmpzPzRiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG5jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuY29uc3QgcmVxdWVzdFByb21pc2UgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbi8vIGNvbnN0IGNhbXBhaWduID0gcmVxdWlyZSgnLi4vcHVibGljL2xpYi9jYW1wYWlnbkJ1bmRsZScpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA3MDcwO1xuY29uc3QgcHJveHlIdG1sID0gcmVxdWlyZSgnLi4vaHRtbFJlbmRlci5qcycpO1xuXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuY29uc29sZS5sb2coZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcblxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICAvLyByZW5kZXIgY2FtcGFpZ24gbW9kdWxlXG4gIHJlcXVlc3RQcm9taXNlKCdodHRwOi8vbG9jYWxob3N0Ojc3NzcvY2FtcGFpZ24nKVxuICAgIC50aGVuKChodG1sU3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBjYW1wYWlnbkJ1bmRsZSA9IGh0bWxTdHJpbmc7XG4gICAgICByZXMuc2VuZChwcm94eUh0bWwucHJveHlIdG1sKGNhbXBhaWduQnVuZGxlKSk7IFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBzZXJ2ZXIgcnVubmluZyBhdDogaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG59KTtcblxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZ2FuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCI/MzIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///morgan\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlcXVlc3RcIj8wZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlcXVlc3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///request\n");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1wcm9taXNlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVxdWVzdC1wcm9taXNlXCI/N2JhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0LXByb21pc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///request-promise\n");

/***/ })

/******/ });