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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _about = __webpack_require__(1);

var _about2 = _interopRequireDefault(_about);

var _projects = __webpack_require__(2);

var _projects2 = _interopRequireDefault(_projects);

var _contact = __webpack_require__(3);

var _contact2 = _interopRequireDefault(_contact);

var _gallery = __webpack_require__(4);

var _gallery2 = _interopRequireDefault(_gallery);

var _home = __webpack_require__(5);

var _home2 = _interopRequireDefault(_home);

var _transitions_util = __webpack_require__(6);

var transitionsUtil = _interopRequireWildcard(_transitions_util);

var _overflow_util = __webpack_require__(7);

var overflowUtil = _interopRequireWildcard(_overflow_util);

var _photos_loader = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.getElementById('root');
var images = [];

var getImages = function getImages() {
  images = (0, _photos_loader.loadImages)();
  if (location.hash.slice(2) === 'gallery') {
    renderContent();
  }
};

var renderContent = function renderContent() {
  var path = location.hash.slice(2);
  switch (path) {
    case "about":
      overflowUtil.showOverflow();
      (0, _about2.default)(root);
      break;
    case "projects":
      overflowUtil.showOverflow();
      (0, _projects2.default)(root);
      break;
    case "contact":
      overflowUtil.hideOverflow();
      (0, _contact2.default)(root);
      break;
    case "gallery":
      overflowUtil.showOverflow();
      (0, _gallery2.default)(root, images);
      break;
    default:
      overflowUtil.hideOverflow();
      (0, _home2.default)(root);
  }

  switch (path) {
    case '':
      transitionsUtil.moveTitleDown();
      break;
    default:
      transitionsUtil.moveTitleUp();
  }
};

window.addEventListener('hashchange', renderContent);
window.addEventListener('load', renderContent);

window.addEventListener('load', getImages);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (root) {
  root.innerHTML = '\
  <div class="about-section animated fadeIn">\
    <main>\
      <h1>About Me</h1>\
      I\'m a software engineer living in New York City. \
      I build applications using SQL, Ruby on Rails, JavaScript\
      and React. After starting my career as a software engineer\
      for jet engines I said sayonara and became a full stack \
      developer! I am living and loving life creating for the web.\
      I am currently looking for a software engineering role in the New York area\
      feel free to reach out!\
    </main>\
    <div class=skills>\
      <h1>Skills</h1>\
      <ul>\
        <div id=skills1>\
          <li><i class="devicon-rails-plain-wordmark colored"></i></li>\
          <li><i class="devicon-ruby-plain-wordmark colored"></i></li>\
          <li><i class="devicon-react-original-wordmark colored"></i></li>\
        </div>\
        <div id=skills1>\
          <li><i class="devicon-nodejs-plain colored"></i></li>\
          <li><i class="devicon-javascript-plain colored"></i></li>\
          <li><i class="devicon-mongodb-plain-wordmark colored"></i></li>\
        </div>\
        <div id=skills1>\
          <li><i class="devicon-express-original colored"></i></li>\
          <li><i class="devicon-postgresql-plain-wordmark colored"></i></li>\
          <li><i class="devicon-python-plain-wordmark colored"></i></li>\
        </div>\
        <div id=skills1>\
          <li><i class="devicon-css3-plain-wordmark colored"></i></li>\
          <li><i class="devicon-git-plain-wordmark colored"></i></li>\
          <li><i class="devicon-d3js-plain colored"></i></li>\
        </div>\
      </ul>\
    </div>\
  </div>';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (root) {
  root.innerHTML = '\
    <main class=\'projects\'>\
      <div class=\'p2 animated fadeIn darkimg\'>\
        <content>\
          <h3>Blockstreet</h3>\
          <p>An end to end learning and development platform for blockchain technologies</p>\
           <ul>\
             <li><a target="_blank" href=\'https://www.youtube.com/watch?v=og-7jC1UYxE\'>Demo</a></li>\
             <li>|</li> \
             <li><a target="_blank" href=\'https://github.com/blockstreetboys/blockstreet\'>Repo</a></li>\
           </ul>\
         </content>\
         <aside>\
           <a target="_blank" href=\'https://devpost.com/software/blockstreet\'><img src=\'assets\\images\\blockstreet.png\'></a>\
         </aside>\
      </div>\
      <div class=\'p1 animated fadeIn\'>\
        <aside>\
          <a target="_blank" href=\'http://seaside.bryanfowler.io\'><img src=\'assets\\images\\seaside.png\'></a>\
        </aside>\
        <content>\
          <h3>Seaside</h3>\
          <p>An AirBnB inspired full stack application\
           using Ruby on Rails, React and Redux</p>\
           <ul>\
             <li><a target="_blank" href=\'http://seaside.bryanfowler.io\'>Live</a></li>\
             <li>|</li> \
             <li><a target="_blank" href=\'http://www.github.com/cbfowler4/seaside\'>Repo</a></li>\
           </ul>\
         </content>\
      </div>\
      <div class=\'p2 animated fadeIn\'>\
        <content>\
          <h3>GitBuckets</h3>\
          <p>An interactive data visualization using JavaScript and the D3 library</p>\
          <ul>\
            <li><a target="_blank" href=\'http://bryanfowler.io/gitBuckets\'>Live</a></li> \
            <li>|</li> \
            <li><a target="_blank" href=\'http://www.github.com/cbfowler4/gitbuckets\'>Repo</a></li>\
          </ul>\
        </content>\
        <aside>\
          <a target="_blank" href=\'http://bryanfowler.io/gitBuckets\'><img src=\'assets\\images\\gitBuckets.png\'></a>\
        </aside>\
      </div>\
    </main>';
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (root) {
  root.innerHTML = '\
  <div class=\'contact animated fadeIn\'>\
    <main>\
      <p>\
        Questions, comments or just want to say hi?\
        Feel free to get in touch!\
      </p>\
      <ul>\
        <li><a href=\'mailto:cbfowler4@gmail.com\'>cbfowler4@gmail.com</a></li>\
        <li><div class="link-container">\
          <a href=\'https://github.com/cbfowler4\'><i class="fab fa-github fa-2x"></i></a>\
          <a class="text-link" href=\'https://github.com/cbfowler4\'>/cbfowler4</a></div></li>\
        <li><div class="link-container">\
          <a href=\'https://www.linkedin.com/in/bryanfowlerme/\'><i class="fab fa-linkedin fa-2x"></i></a>\
          <a class="text-link" href=\'https://www.linkedin.com/in/bryanfowlerme/\'>/bryanfowlerme</a></div></li>\
        <li><div class="link-container">\
          <a href=\'https://angel.co/bryan-fowler-1\'><i class="fab fa-angellist fa-2x"></i></a>\
          <a class="text-link" href=\'https://angel.co/bryan-fowler-1\'>/bryan-fowler-1</a></div></li>\
      </ul>\
    </main>\
  </div>\
  ';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (root, images) {
  root.innerHTML = '\
  <div class=gallery>\
    <h1>I\'m getting into photography, take a look at some of my recent pictures!</h1>\
    <ul id=gallery-list>\
    </ul>\
  </div>\
  ';

  var galleryList = document.getElementById('gallery-list');
  images.forEach(function (image) {
    var listItem = document.createElement('li');
    listItem.appendChild(image);
    galleryList.appendChild(listItem);
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (root) {
  root.innerHTML = '\
    <div class=\'welcome animated fadeIn\'>\
      <div class=\'intro\'>\
        <h1 id=\'intro-header\'>Hi. I make things for the web.</h1>\
        <p id=\'intro-paragraph\'>\
          I build full stack web applications. My goal is to continue to \
          learn and grow as a developer. Lately I\'ve grown interested in \
          UX design and block chain technology.\
        </p>\
      </div>\
      <div class=\'image\'>\
        <img  src="assets/images/avatar.jpeg" alt="" />\
      </div>\
    </div>\
  ';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveTitleUp = exports.moveTitleUp = function moveTitleUp() {
  var title = document.getElementById('title');
  if (title.classList.contains('welcome-header')) {
    title.classList.remove('welcome-header');
    title.classList.add('main-header');
  }
};

var moveTitleDown = exports.moveTitleDown = function moveTitleDown() {
  var title = document.getElementById('title');
  title.classList.add('welcome-header');
  title.classList.remove('main-header');
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hideOverflow = exports.hideOverflow = function hideOverflow() {
  var body = document.getElementsByTagName('body')[0];
  if (!body.classList.contains("single-page")) {
    body.classList.add('single-page');
  }
};

var showOverflow = exports.showOverflow = function showOverflow() {
  var body = document.getElementsByTagName('body')[0];
  if (body.classList.contains("single-page")) {
    body.classList.remove('single-page');
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadImages = exports.loadImages = function loadImages() {

  var imageUrls = ["assets/images/109.JPG", "assets/images/145.JPG", "assets/images/282.JPG", "assets/images/DSC_0181.JPG", "assets/images/yakomoto.jpg"];

  var images = [];

  imageUrls.forEach(function (imageUrl) {
    var image = new Image();
    image.src = imageUrl;
    images.push(image);
  });

  return images;
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map