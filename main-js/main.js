/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/plugins/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/plugins/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  observer = new MutationObserver(handleMutation);\n\n  const observeTarget = document.querySelector('.number');\n  observer.observe(observeTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://audi/./js/plugins/anima-numeros.js?");

/***/ }),

/***/ "./js/plugins/animacao.js":
/*!********************************!*\
  !*** ./js/plugins/animacao.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacao)\n/* harmony export */ });\n// animação\r\nfunction initAnimacao() {\r\n  if (window.SimpleAnime) {\r\n    new SimpleAnime();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://audi/./js/plugins/animacao.js?");

/***/ }),

/***/ "./js/plugins/navbar.js":
/*!******************************!*\
  !*** ./js/plugins/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNavBar)\n/* harmony export */ });\nfunction initNavBar() {\n  const hamburger = document.querySelector('.hamburger');\n  const headerMenu = document.querySelector('.header-menu');\n  let ultimoScroll = 0;\n\n  hamburger.addEventListener('click', () => {\n    hamburger.classList.toggle('active');\n    headerMenu.classList.toggle('active');\n  });\n\n  document.querySelectorAll('.nav-link').forEach((n) =>\n    n.addEventListener('click', () => {\n      hamburger.classList.remove('active');\n      headerMenu.classList.remove('active');\n    })\n  );\n\n  window.addEventListener('scroll', () => {\n    const atualScroll = window.pageYOffset || document.documentElement.scrollTop;\n\n    if (atualScroll > ultimoScroll) {\n      if (headerMenu.classList.contains('active')) {\n        headerMenu.classList.remove('active');\n        hamburger.classList.remove('active');\n      }\n    }\n\n    ultimoScroll = atualScroll;\n  });\n}\n\n\n//# sourceURL=webpack://audi/./js/plugins/navbar.js?");

/***/ }),

/***/ "./js/plugins/performace.js":
/*!**********************************!*\
  !*** ./js/plugins/performace.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initPerformace)\n/* harmony export */ });\nfunction initPerformace() {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const elementos = document.querySelectorAll('.performace'); // Substitua '.seu-elemento' pelo seletor dos elementos desejados\r\n    function verificarVisibilidade() {\r\n      for (let i = 0; i < elementos.length; i += 1) {\r\n        const elemento = elementos[i];\r\n        const rect = elemento.getBoundingClientRect();\r\n\r\n        if (rect.top < window.innerHeight && rect.bottom >= 0) {\r\n          elemento.classList.add('ativo');\r\n        } else if (elemento.classList.contains('ativo')) {\r\n          elemento.classList.remove('ativo');\r\n        }\r\n      }\r\n    }\r\n\r\n    window.addEventListener('scroll', verificarVisibilidade);\r\n    verificarVisibilidade();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://audi/./js/plugins/performace.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugins_animacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/animacao.js */ \"./js/plugins/animacao.js\");\n/* harmony import */ var _plugins_anima_numeros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/anima-numeros.js */ \"./js/plugins/anima-numeros.js\");\n/* harmony import */ var _plugins_performace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/performace.js */ \"./js/plugins/performace.js\");\n/* harmony import */ var _plugins_navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/navbar.js */ \"./js/plugins/navbar.js\");\n\n\n\n\n\n(0,_plugins_animacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_plugins_anima_numeros_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_plugins_performace_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_plugins_navbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://audi/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;