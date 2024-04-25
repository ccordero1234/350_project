/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/aboutUs.js":
/*!******************************!*\
  !*** ./static/js/aboutUs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./static/js/functions.js\");\nconst homeButton = document.getElementById('homeButton');\nconst signInButton = document.getElementById('sign-in-btn');\n\n\nhomeButton.addEventListener('click', () =>\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.redirectTo)(\"index.html\", \"templates\"));\nsignInButton.addEventListener('click', () =>\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.redirectTo)(\"signIn.html\", \"templates\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvYWJvdXRVcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDNEM7O0FBRTVDO0FBQ0EsSUFBSSx5REFBVTtBQUNkO0FBQ0EsSUFBSSx5REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9qcy9hYm91dFVzLmpzP2NjY2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnV0dG9uJyk7XG5jb25zdCBzaWduSW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1idG4nKTtcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHJlZGlyZWN0VG8oXCJpbmRleC5odG1sXCIsIFwidGVtcGxhdGVzXCIpKTtcbnNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgcmVkaXJlY3RUbyhcInNpZ25Jbi5odG1sXCIsIFwidGVtcGxhdGVzXCIpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/js/aboutUs.js\n");

/***/ }),

/***/ "./static/js/functions.js":
/*!********************************!*\
  !*** ./static/js/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   redirectTo: () => (/* binding */ redirectTo)\n/* harmony export */ });\nfunction redirectTo(page, route) {\n    // Send a GET request to the router on the server\n    fetch(route + \"/\" + page)\n        .then(response => {\n            // Check if the response status is OK (200)\n            if (response.ok) {\n                // Redirect to the page\n                window.location.href = route + \"/\" + page;\n            } else {\n                // Handle errors if any\n                try {\n                    window.location.href = page;\n                } catch {\n                    console.error('Failed to fetch ', response.status);\n                }\n            }\n        })\n        .catch(error => {\n            console.error('Error fetching ', error);\n        });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvZnVuY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9qcy9mdW5jdGlvbnMuanM/MjdmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RUbyhwYWdlLCByb3V0ZSkge1xuICAgIC8vIFNlbmQgYSBHRVQgcmVxdWVzdCB0byB0aGUgcm91dGVyIG9uIHRoZSBzZXJ2ZXJcbiAgICBmZXRjaChyb3V0ZSArIFwiL1wiICsgcGFnZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHN0YXR1cyBpcyBPSyAoMjAwKVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJvdXRlICsgXCIvXCIgKyBwYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGlmIGFueVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGFnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoICcsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgJywgZXJyb3IpO1xuICAgICAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/js/functions.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/aboutUs.js");
/******/ 	
/******/ })()
;