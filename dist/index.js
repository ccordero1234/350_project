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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dayToNumber: () => (/* binding */ dayToNumber),\n/* harmony export */   getCurrentDateRange: () => (/* binding */ getCurrentDateRange),\n/* harmony export */   getCurrentDay: () => (/* binding */ getCurrentDay),\n/* harmony export */   redirectTo: () => (/* binding */ redirectTo)\n/* harmony export */ });\nfunction redirectTo(page, route) {\n    // Send a GET request to the router on the server\n    fetch(route + \"/\" + page)\n        .then(response => {\n            // Check if the response status is OK (200)\n            if (response.ok) {\n                // Redirect to the page\n                window.location.href = route + \"/\" + page;\n            } else {\n                // Handle errors if any\n                try {\n                    window.location.href = page;\n                } catch {\n                    console.error('Failed to fetch ', response.status);\n                }\n            }\n        })\n        .catch(error => {\n            console.error('Error fetching ', error);\n        });\n}\n// Function to get the current date range\nfunction getCurrentDateRange(startOfWeek) {\n    const today = new Date();\n    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()+1); // Get the start of the current week\n    const startDate = startOfWeek.getDate();\n\n    const endOfWeek = new Date(today);\n    endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay())); // Get the end of the current week\n    const endMonth = endOfWeek.toLocaleString('default', { month: 'long' });\n\n    const startMonth = startOfWeek.toLocaleString('default', { month: 'long' });\n\n    return `${startMonth} ${startDate}-${endMonth} ${endOfWeek.getDate()}`;\n}\n\n// Function to get the current day in the format MM-DD\nfunction getCurrentDay(now) {\n    const month = now.toLocaleString('default', { month: 'long' });\n    const day = now.getDate().toString();\n    return `${month}-${day}`;\n}\n\n// days to number\nfunction dayToNumber(day) {\n    const days = {\n        'Monday': 0,\n        'Tuesday': 1,\n        'Wednesday': 2,\n        'Thursday': 3,\n        'Friday': 4,\n        'Saturday': 5,\n        'Sunday': 6\n    };\n    return days[day] !== undefined ? days[day] : null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvZnVuY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLHVFQUF1RTtBQUN2RSwyREFBMkQsZUFBZTs7QUFFMUUsK0RBQStELGVBQWU7O0FBRTlFLGNBQWMsWUFBWSxFQUFFLFVBQVUsR0FBRyxVQUFVLEVBQUUsb0JBQW9CO0FBQ3pFOztBQUVBO0FBQ087QUFDUCxrREFBa0QsZUFBZTtBQUNqRTtBQUNBLGNBQWMsTUFBTSxHQUFHLElBQUk7QUFDM0I7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvZnVuY3Rpb25zLmpzPzI3ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0VG8ocGFnZSwgcm91dGUpIHtcbiAgICAvLyBTZW5kIGEgR0VUIHJlcXVlc3QgdG8gdGhlIHJvdXRlciBvbiB0aGUgc2VydmVyXG4gICAgZmV0Y2gocm91dGUgKyBcIi9cIiArIHBhZ2UpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSBzdGF0dXMgaXMgT0sgKDIwMClcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByb3V0ZSArIFwiL1wiICsgcGFnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBpZiBhbnlcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCAnLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nICcsIGVycm9yKTtcbiAgICAgICAgfSk7XG59XG4vLyBGdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlUmFuZ2Uoc3RhcnRPZldlZWspIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgc3RhcnRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgLSBzdGFydE9mV2Vlay5nZXREYXkoKSsxKTsgLy8gR2V0IHRoZSBzdGFydCBvZiB0aGUgY3VycmVudCB3ZWVrXG4gICAgY29uc3Qgc3RhcnREYXRlID0gc3RhcnRPZldlZWsuZ2V0RGF0ZSgpO1xuXG4gICAgY29uc3QgZW5kT2ZXZWVrID0gbmV3IERhdGUodG9kYXkpO1xuICAgIGVuZE9mV2Vlay5zZXREYXRlKGVuZE9mV2Vlay5nZXREYXRlKCkgKyAoNyAtIGVuZE9mV2Vlay5nZXREYXkoKSkpOyAvLyBHZXQgdGhlIGVuZCBvZiB0aGUgY3VycmVudCB3ZWVrXG4gICAgY29uc3QgZW5kTW9udGggPSBlbmRPZldlZWsudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSk7XG5cbiAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnRPZldlZWsudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSk7XG5cbiAgICByZXR1cm4gYCR7c3RhcnRNb250aH0gJHtzdGFydERhdGV9LSR7ZW5kTW9udGh9ICR7ZW5kT2ZXZWVrLmdldERhdGUoKX1gO1xufVxuXG4vLyBGdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgZGF5IGluIHRoZSBmb3JtYXQgTU0tRERcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RGF5KG5vdykge1xuICAgIGNvbnN0IG1vbnRoID0gbm93LnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pO1xuICAgIGNvbnN0IGRheSA9IG5vdy5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gYCR7bW9udGh9LSR7ZGF5fWA7XG59XG5cbi8vIGRheXMgdG8gbnVtYmVyXG5leHBvcnQgZnVuY3Rpb24gZGF5VG9OdW1iZXIoZGF5KSB7XG4gICAgY29uc3QgZGF5cyA9IHtcbiAgICAgICAgJ01vbmRheSc6IDAsXG4gICAgICAgICdUdWVzZGF5JzogMSxcbiAgICAgICAgJ1dlZG5lc2RheSc6IDIsXG4gICAgICAgICdUaHVyc2RheSc6IDMsXG4gICAgICAgICdGcmlkYXknOiA0LFxuICAgICAgICAnU2F0dXJkYXknOiA1LFxuICAgICAgICAnU3VuZGF5JzogNlxuICAgIH07XG4gICAgcmV0dXJuIGRheXNbZGF5XSAhPT0gdW5kZWZpbmVkID8gZGF5c1tkYXldIDogbnVsbDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/js/functions.js\n");

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