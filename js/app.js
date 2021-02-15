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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/src/Slider.js":
/*!******************************!*\
  !*** ./app/js/src/Slider.js ***!
  \******************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\nfunction Slider() {\n  this.slider = document.getElementsByClassName('slider')[0];\n  this.imagesList = document.getElementsByTagName('img');\n  this.imagesSrc = [];\n  this.prevImage = null;\n  this.currentImage = null;\n  this.nextImage = null;\n  this.isClick = false;\n\n  function getStartImage() {\n    this.numCurrentImage = 0;\n    this.numPrevImage = this.imagesSrc.length - 1;\n    this.numNextImage = 1;\n  }\n\n  function getImage() {\n    for (var i = 0; i < this.imagesList.length; i++) {\n      this.imagesSrc.push(this.imagesList[i].src);\n    }\n  }\n\n  function drawImage() {\n    if (this.prevImage) this.prevImage.remove();\n    if (this.currentImage) this.currentImage.remove();\n    if (this.nextImage) this.nextImage.remove();\n    if (this.counter) this.counter.remove();\n    this.prevImage = document.createElement('img');\n    this.prevImage.classList.add('slider__item');\n    this.prevImage.src = this.imagesSrc[this.numPrevImage];\n    this.prevImage.style.left = -100 + 'vw';\n    this.slider.append(this.prevImage);\n    this.currentImage = document.createElement('img');\n    this.currentImage.classList.add('slider__item');\n    this.currentImage.src = this.imagesSrc[this.numCurrentImage];\n    this.currentImage.style.left = 0 + 'vw';\n    this.slider.append(this.currentImage);\n    this.nextImage = document.createElement('img');\n    this.nextImage.classList.add('slider__item');\n    this.nextImage.src = this.imagesSrc[this.numNextImage];\n    this.nextImage.style.left = 100 + 'vw';\n    this.slider.append(this.nextImage);\n    this.counter = document.createElement('span');\n    this.counter.classList.add('slider__counter');\n    this.counter.textContent = \"\".concat(this.numCurrentImage + 1, \" \\u0438\\u0437 \").concat(this.imagesSrc.length);\n    this.slider.append(this.counter);\n  }\n\n  function drawButtons() {\n    var _this = this;\n\n    this.buttonsPanel = document.createElement('div');\n    this.buttonsPanel.classList.add('buttons-panel');\n    this.slider.append(this.buttonsPanel);\n    this.buttonLeft = document.createElement('a');\n    this.buttonLeft.classList.add('buttons-panel__left');\n    this.buttonLeft.textContent = String.fromCharCode(10094);\n    this.buttonsPanel.append(this.buttonLeft);\n    this.buttonLeft.addEventListener('click', function () {\n      if (!_this.isClick) leftButtonClick.call(_this);\n    });\n    this.buttonRight = document.createElement('a');\n    this.buttonRight.classList.add('buttons-panel__right');\n    this.buttonRight.textContent = String.fromCharCode(10095);\n    this.buttonsPanel.append(this.buttonRight);\n    this.buttonRight.addEventListener('click', function () {\n      if (!_this.isClick) rightButtonClick.call(_this);\n    });\n  }\n\n  function getNumImages() {\n    this.numPrevImage = this.numPrevImage < 0 ? this.imagesSrc.length - 1 : this.numPrevImage > this.imagesSrc.length - 1 ? 0 : this.numPrevImage;\n    this.numCurrentImage = this.numCurrentImage < 0 ? this.imagesSrc.length - 1 : this.numCurrentImage > this.imagesSrc.length - 1 ? 0 : this.numCurrentImage;\n    this.numNextImage = this.numNextImage < 0 ? this.imagesSrc.length - 1 : this.numNextImage > this.imagesSrc.length - 1 ? 0 : this.numNextImage;\n  }\n\n  function leftButtonClick() {\n    var _this2 = this;\n\n    this.isClick = true;\n    this.prevImage.style.left = 0;\n    this.currentImage.style.left = 100 + 'vw';\n    this.numPrevImage--;\n    this.numCurrentImage--;\n    this.numNextImage--;\n    getNumImages.call(this);\n    setTimeout(function () {\n      drawImage.call(_this2);\n      _this2.isClick = false;\n    }, 1000);\n  }\n\n  function rightButtonClick() {\n    var _this3 = this;\n\n    this.isClick = true;\n    this.nextImage.style.left = 0;\n    this.currentImage.style.left = -100 + 'vw';\n    this.numPrevImage++;\n    this.numCurrentImage++;\n    this.numNextImage++;\n    getNumImages.call(this);\n    setTimeout(function () {\n      drawImage.call(_this3);\n      _this3.isClick = false;\n    }, 1000);\n  }\n\n  this.createSlider = function () {\n    getImage.call(this);\n    getStartImage.call(this);\n    drawImage.call(this);\n    drawButtons.call(this);\n  };\n}\n\n\n\n//# sourceURL=webpack:///./app/js/src/Slider.js?");

/***/ }),

/***/ "./app/js/src/app.js":
/*!***************************!*\
  !*** ./app/js/src/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./app/js/src/Slider.js\");\n\nvar mySlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__[\"Slider\"]();\nmySlider.createSlider();\n\n//# sourceURL=webpack:///./app/js/src/app.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./app/js/src/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! M:\\Projects\\WebDeveloper\\Learning\\Sliders\\MySlider\\app\\js\\src\\app.js */\"./app/js/src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./app/js/src/app.js?");

/***/ })

/******/ });