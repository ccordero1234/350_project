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

/***/ "./static/js/functions.js":
/*!********************************!*\
  !*** ./static/js/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dayToNumber: () => (/* binding */ dayToNumber),\n/* harmony export */   getCurrentDateRange: () => (/* binding */ getCurrentDateRange),\n/* harmony export */   getCurrentDay: () => (/* binding */ getCurrentDay),\n/* harmony export */   redirectTo: () => (/* binding */ redirectTo)\n/* harmony export */ });\nfunction redirectTo(page, route) {\n    // Send a GET request to the router on the server\n    fetch(route + \"/\" + page)\n        .then(response => {\n            // Check if the response status is OK (200)\n            if (response.ok) {\n                // Redirect to the page\n                window.location.href = route + \"/\" + page;\n            } else {\n                // Handle errors if any\n                try {\n                    window.location.href = page;\n                } catch {\n                    console.error('Failed to fetch ', response.status);\n                }\n            }\n        })\n        .catch(error => {\n            console.error('Error fetching ', error);\n        });\n}\n// Function to get the current date range\nfunction getCurrentDateRange(startOfWeek) {\n    const today = new Date();\n    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Get the start of the current week\n\n    const startDate = startOfWeek.getDate();\n\n    const endOfWeek = new Date(today);\n    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay())); // Get the end of the current week\n    const endMonth = endOfWeek.toLocaleString('default', { month: 'long' });\n\n    const startMonth = startOfWeek.toLocaleString('default', { month: 'long' });\n\n    return `${startMonth} ${startDate}-${endMonth} ${endOfWeek.getDate()}`;\n}\n\n// Function to get the current day in the format MM-DD\nfunction getCurrentDay(now) {\n    const month = now.toLocaleString('default', { month: 'long' });\n    const day = now.getDate().toString();\n    return `${month}-${day}`;\n}\n\n// days to number\nfunction dayToNumber(day) {\n    const days = {\n        'Monday': 0,\n        'Tuesday': 1,\n        'Wednesday': 2,\n        'Thursday': 3,\n        'Friday': 4,\n        'Saturday': 5,\n        'Sunday': 6\n    };\n    return days[day] !== undefined ? days[day] : null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvZnVuY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBLHVFQUF1RTs7QUFFdkU7O0FBRUE7QUFDQSx1RUFBdUU7QUFDdkUsMkRBQTJELGVBQWU7O0FBRTFFLCtEQUErRCxlQUFlOztBQUU5RSxjQUFjLFlBQVksRUFBRSxVQUFVLEdBQUcsVUFBVSxFQUFFLG9CQUFvQjtBQUN6RTs7QUFFQTtBQUNPO0FBQ1Asa0RBQWtELGVBQWU7QUFDakU7QUFDQSxjQUFjLE1BQU0sR0FBRyxJQUFJO0FBQzNCOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2Z1bmN0aW9ucy5qcz8yN2YxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvKHBhZ2UsIHJvdXRlKSB7XG4gICAgLy8gU2VuZCBhIEdFVCByZXF1ZXN0IHRvIHRoZSByb3V0ZXIgb24gdGhlIHNlcnZlclxuICAgIGZldGNoKHJvdXRlICsgXCIvXCIgKyBwYWdlKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3RhdHVzIGlzIE9LICgyMDApXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcm91dGUgKyBcIi9cIiArIHBhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgaWYgYW55XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYWdlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggJywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyAnLCBlcnJvcik7XG4gICAgICAgIH0pO1xufVxuLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IGRhdGUgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZVJhbmdlKHN0YXJ0T2ZXZWVrKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHN0YXJ0T2ZXZWVrLnNldERhdGUoc3RhcnRPZldlZWsuZ2V0RGF0ZSgpIC0gc3RhcnRPZldlZWsuZ2V0RGF5KCkpOyAvLyBHZXQgdGhlIHN0YXJ0IG9mIHRoZSBjdXJyZW50IHdlZWtcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHN0YXJ0T2ZXZWVrLmdldERhdGUoKTtcblxuICAgIGNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICBlbmRPZldlZWsuc2V0RGF0ZShlbmRPZldlZWsuZ2V0RGF0ZSgpICsgKDYgLSBlbmRPZldlZWsuZ2V0RGF5KCkpKTsgLy8gR2V0IHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgd2Vla1xuICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kT2ZXZWVrLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pO1xuXG4gICAgY29uc3Qgc3RhcnRNb250aCA9IHN0YXJ0T2ZXZWVrLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pO1xuXG4gICAgcmV0dXJuIGAke3N0YXJ0TW9udGh9ICR7c3RhcnREYXRlfS0ke2VuZE1vbnRofSAke2VuZE9mV2Vlay5nZXREYXRlKCl9YDtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IGRheSBpbiB0aGUgZm9ybWF0IE1NLUREXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERheShub3cpIHtcbiAgICBjb25zdCBtb250aCA9IG5vdy50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICBjb25zdCBkYXkgPSBub3cuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke21vbnRofS0ke2RheX1gO1xufVxuXG4vLyBkYXlzIHRvIG51bWJlclxuZXhwb3J0IGZ1bmN0aW9uIGRheVRvTnVtYmVyKGRheSkge1xuICAgIGNvbnN0IGRheXMgPSB7XG4gICAgICAgICdNb25kYXknOiAwLFxuICAgICAgICAnVHVlc2RheSc6IDEsXG4gICAgICAgICdXZWRuZXNkYXknOiAyLFxuICAgICAgICAnVGh1cnNkYXknOiAzLFxuICAgICAgICAnRnJpZGF5JzogNCxcbiAgICAgICAgJ1NhdHVyZGF5JzogNSxcbiAgICAgICAgJ1N1bmRheSc6IDZcbiAgICB9O1xuICAgIHJldHVybiBkYXlzW2RheV0gIT09IHVuZGVmaW5lZCA/IGRheXNbZGF5XSA6IG51bGw7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/js/functions.js\n");

/***/ }),

/***/ "./static/js/index.js":
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./static/js/functions.js\");\nconst signUpButton = document.getElementById('sign-up-btn');\nconst signInButton = document.getElementById('sign-in-btn');\nconst aboutUsButton = document.getElementById('aboutUs');\n\n\nsignUpButton.addEventListener('click', () =>\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.redirectTo)(\"signIn.html\", \"templates\"));\nsignInButton.addEventListener('click', () =>\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.redirectTo)(\"signIn.html\", \"templates\"));\naboutUsButton.addEventListener('click', () =>\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.redirectTo)(\"aboutUs.html\", \"templates\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDNEM7O0FBRTVDO0FBQ0EsSUFBSSx5REFBVTtBQUNkO0FBQ0EsSUFBSSx5REFBVTtBQUNkO0FBQ0EsSUFBSSx5REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9qcy9pbmRleC5qcz83OTNkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xuY29uc3Qgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tYnRuJyk7XG5jb25zdCBhYm91dFVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0VXMnKTtcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgcmVkaXJlY3RUbyhcInNpZ25Jbi5odG1sXCIsIFwidGVtcGxhdGVzXCIpKTtcbnNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgcmVkaXJlY3RUbyhcInNpZ25Jbi5odG1sXCIsIFwidGVtcGxhdGVzXCIpKTtcbmFib3V0VXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHJlZGlyZWN0VG8oXCJhYm91dFVzLmh0bWxcIiwgXCJ0ZW1wbGF0ZXNcIikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/js/index.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/index.js");
/******/ 	
/******/ })()
;