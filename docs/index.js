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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n // Input\n\nvar inputResult = document.querySelector('.result');\nvar inputValue = document.querySelector('.values'); // Max Length\n\nvar valueMaxLength = inputValue.getAttribute('maxlength'); // Variables\n\nvar lastOperator = \"\";\nvar result = 0; // Events to numeric buttons\n\ndocument.querySelector('#btnOne').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"1\" : inputValue.value + \"1\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnTwo').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"2\" : inputValue.value + \"2\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnThree').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"3\" : inputValue.value + \"3\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnFour').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"4\" : inputValue.value + \"4\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnFive').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"5\" : inputValue.value + \"5\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnSix').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"6\" : inputValue.value + \"6\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnSeven').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"7\" : inputValue.value + \"7\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnEight').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"8\" : inputValue.value + \"8\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnNine').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"9\" : inputValue.value + \"9\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n});\ndocument.querySelector('#btnZero').addEventListener('click', function () {\n  var currentValue = inputValue.value === \"0\" ? \"0\" : inputValue.value + \"0\";\n\n  if (currentValue.length <= Number(valueMaxLength)) {\n    inputValue.value = currentValue;\n  }\n}); // Backspace event\n\ndocument.querySelector('#btnBackspace').addEventListener('click', function () {\n  var currentValue = inputValue.value;\n  currentValue = currentValue.substring(0, currentValue.length - 1);\n  inputValue.value = currentValue.length === 0 ? \"0\" : currentValue;\n}); // Events to mathematic buttons\n\ndocument.querySelector('#btnPlus').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n\n  if (lastOperator === '') {\n    result = currentValue === 0 && result === 0 ? 0 : inputResult.value === '' ? currentValue : result + currentValue;\n  } else {\n    result = getResultByOperator(lastOperator, result, currentValue);\n  }\n\n  inputResult.value = String(result) + \"+\";\n  inputValue.value = \"0\";\n  lastOperator = 'plus';\n});\ndocument.querySelector('#btnMinus').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n\n  if (lastOperator === '') {\n    result = currentValue === 0 && result === 0 ? 0 : inputResult.value === '' ? currentValue : result - currentValue;\n  } else {\n    result = getResultByOperator(lastOperator, result, currentValue);\n  }\n\n  inputResult.value = String(result) + \"-\";\n  inputValue.value = \"0\";\n  lastOperator = 'minus';\n});\ndocument.querySelector('#btnMultiply').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n\n  if (lastOperator === '') {\n    result = currentValue === 0 && result === 0 ? 0 : inputResult.value === '' ? currentValue : result * currentValue;\n  } else {\n    result = getResultByOperator(lastOperator, result, currentValue);\n  }\n\n  inputResult.value = String(result) + \"x\";\n  inputValue.value = \"0\";\n  lastOperator = 'multiply';\n});\ndocument.querySelector('#btnDivide').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n\n  if (lastOperator === '') {\n    result = currentValue === 0 && result === 0 ? 0 : inputResult.value === '' ? currentValue : result / currentValue;\n  } else {\n    if (currentValue !== 0) {\n      result = getResultByOperator(lastOperator, result, currentValue);\n    }\n  }\n\n  inputResult.value = String(result) + \"÷\";\n  inputValue.value = \"0\";\n  lastOperator = 'divide';\n}); // Percentage event\n\ndocument.querySelector('#btnPercentage').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n\n  if (lastOperator === 'plus' || localStorage === 'minus') {\n    currentValue = result * currentValue / 100;\n    result = getResultByOperator(lastOperator, result, currentValue);\n  } else if (lastOperator === 'multiply' || lastOperator === 'divide') {\n    result = getResultByOperator(lastOperator, result, currentValue / 100);\n  }\n\n  inputResult.value = String(result);\n  inputValue.value = \"0\";\n}); // Invert event\n\ndocument.querySelector('#btnInvert').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n\n  if (currentValue !== 0) {\n    result = 1 / currentValue;\n  }\n\n  inputResult.value = String(result);\n  inputValue.value = \"0\";\n}); // Exponent event\n\ndocument.querySelector('#btnExponent').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n  result = Math.pow(currentValue, 2);\n  inputResult.value = String(result);\n  inputValue.value = \"0\";\n}); // Square event\n\ndocument.querySelector('#btnSquare').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n  result = Math.sqrt(currentValue, 2);\n  inputResult.value = String(result);\n  inputValue.value = \"0\";\n}); // Clear event\n\ndocument.querySelector('#btnCE').addEventListener('click', function () {\n  inputResult.value = '';\n  inputValue.value = '0';\n  lastOperator = '';\n  result = 0;\n});\ndocument.querySelector('#btnC').addEventListener('click', function () {\n  inputResult.value = '';\n  inputValue.value = '0';\n  lastOperator = '';\n  result = 0;\n}); // Equal event\n\ndocument.querySelector('#btnEqual').addEventListener('click', function () {\n  var currentValue = Number(inputValue.value);\n  result = currentValue === 0 ? result : getResultByOperator(lastOperator, result, currentValue);\n  inputResult.value = String(result);\n  inputValue.value = \"0\";\n});\n/**\r\n * Function to determine the result by the operation\r\n * @param {Number} paramOperator \r\n * @param {Number} paramResult \r\n * @param {Number} paramCurrentValue \r\n * @returns \r\n */\n\nvar getResultByOperator = function getResultByOperator(paramOperator, paramResult, paramCurrentValue) {\n  var currentResult = 0;\n\n  switch (paramOperator) {\n    case 'plus':\n      currentResult = paramResult + paramCurrentValue;\n      break;\n\n    case 'minus':\n      currentResult = paramResult - paramCurrentValue;\n      break;\n\n    case 'multiply':\n      currentResult = paramResult * paramCurrentValue;\n      break;\n\n    case 'divide':\n      currentResult = paramResult / paramCurrentValue;\n      break;\n  }\n\n  return currentResult;\n};\n\n//# sourceURL=webpack://002_calculator/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://002_calculator/./src/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;