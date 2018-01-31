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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.getElementById('root');

var renderContent = function renderContent() {
  var path = location.hash.slice(2);
  switch (path) {
    case "about":
      (0, _about2.default)(root);
      break;
    case "projects":
      (0, _projects2.default)(root);
      break;
    case "contact":
      (0, _contact2.default)(root);
      break;
    case "gallery":
      (0, _gallery2.default)(root);
      break;
    default:
  }
};

window.addEventListener('hashchange', renderContent);
window.addEventListener('load', renderContent);

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
          <li><i class="devicon-postgresql-plain-wordmark colored"></i></li>\
          <li><i class="devicon-javascript-plain colored"></i></li>\
          <li><i class="devicon-git-plain-wordmark colored"></i></li>\
        </div>\
        <div id=skills1>\
          <li><i class="devicon-css3-plain-wordmark colored"></i></li>\
          <li><i class="devicon-d3js-plain colored"></i></li>\
          <li><i class="devicon-python-plain-wordmark colored"></i></li>\
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
      <div class=\'p1 animated fadeIn\'>\
        <aside>\
          <img src=\'assets\\images\\seaside.png\'>\
        </aside>\
        <content>\
          <h3>Seaside</h3>\
          <p>An AirBnB inspired full stack application\
           using Ruby on Rails, React and Redux</p>\
           <ul>\
             <li><a href=\'seaside.bryanfowler.io\'>Live</a></li>\
             <li>|</li> \
             <li><a href=\'#\'>Repo</a></li>\
           </ul>\
         </content>\
      </div>\
      <div class=\'p2 animated fadeIn\'>\
        <content>\
          <h3>gitBuckets</h3>\
          <p>An interactive data visualization using JavaScript</p>\
          <ul>\
            <li><a href=\'bryanfowler.io\\gitBuckets\'>Live</a></li> \
            <li>|</li> \
            <li><a href=\'www.github.com\\cbfowler4\\gitbuckets\'>Repo</a></li>\
          </ul>\
        </content>\
        <aside>\
        <img src=\'assets\\images\\gitBuckets.png\'>\
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
        <li><a href=\'https://github.com/cbfowler4\'><i class="fab fa-github fa-2x"></i><a>\
          <a class="text-link" href=\'https://github.com/cbfowler4\'>/cbfowler4</a></li>\
        <li><a href=\'https://www.linkedin.com/in/bryanfowlerme/\'><i class="fab fa-linkedin fa-2x"></i></a>\
          <a class="text-link" href=\'https://www.linkedin.com/in/bryanfowlerme/\'>/bryanfowlerme</a></li>\
        <li><a href=\'https://angel.co/bryan-fowler-1\'><i class="fab fa-angellist fa-2x"></i></a>\
          <a class="text-link" href=\'https://angel.co/bryan-fowler-1\'>/bryan-fowler-1</a></li>\
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

exports.default = function (root) {
  root.innerHTML = "this is gallery";
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map