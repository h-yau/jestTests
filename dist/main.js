/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   reverseString: () => (/* binding */ reverseString)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var reverseString = function reverseString(str) {
  var strArray = _toConsumableArray(str);
  var l = 0;
  var r = str.length - 1;
  while (l < r) {
    var _ref = [strArray[r], strArray[l]];
    strArray[l] = _ref[0];
    strArray[r] = _ref[1];
    l++;
    r--;
  }
  return strArray.join('');
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUMsR0FBRztFQUFBLE9BQUtBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFBQTtBQUV0RSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlKLEdBQUcsRUFBSztFQUM3QixJQUFNSyxRQUFRLEdBQUFDLGtCQUFBLENBQU9OLEdBQUcsQ0FBQztFQUN6QixJQUFJTyxDQUFDLEdBQUcsQ0FBQztFQUNULElBQUlDLENBQUMsR0FBR1IsR0FBRyxDQUFDUyxNQUFNLEdBQUcsQ0FBQztFQUV0QixPQUFPRixDQUFDLEdBQUdDLENBQUMsRUFBRTtJQUFBLElBQUFFLElBQUEsR0FDaUIsQ0FBQ0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsRUFBRUgsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQztJQUF0REYsUUFBUSxDQUFDRSxDQUFDLENBQUMsR0FBQUcsSUFBQTtJQUFFTCxRQUFRLENBQUNHLENBQUMsQ0FBQyxHQUFBRSxJQUFBO0lBQ3pCSCxDQUFDLEVBQUU7SUFDSEMsQ0FBQyxFQUFFO0VBQ0w7RUFDQSxPQUFPSCxRQUFRLENBQUNNLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblxuY29uc3QgcmV2ZXJzZVN0cmluZyA9IChzdHIpID0+IHtcbiAgY29uc3Qgc3RyQXJyYXkgPSBbLi4uc3RyXTtcbiAgbGV0IGwgPSAwO1xuICBsZXQgciA9IHN0ci5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChsIDwgcikge1xuICAgIFtzdHJBcnJheVtsXSwgc3RyQXJyYXlbcl1dID0gW3N0ckFycmF5W3JdLCBzdHJBcnJheVtsXV07XG4gICAgbCsrO1xuICAgIHItLTtcbiAgfVxuICByZXR1cm4gc3RyQXJyYXkuam9pbignJyk7XG59O1xuXG5leHBvcnQgeyBjYXBpdGFsaXplLCByZXZlcnNlU3RyaW5nIH07XG4iXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXZlcnNlU3RyaW5nIiwic3RyQXJyYXkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJsIiwiciIsImxlbmd0aCIsIl9yZWYiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==