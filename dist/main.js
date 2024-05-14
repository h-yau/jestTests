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
/* harmony export */   analyzeArray: () => (/* binding */ analyzeArray),
/* harmony export */   caesarCipher: () => (/* binding */ caesarCipher),
/* harmony export */   calculator: () => (/* binding */ calculator),
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
var calculator = function calculator() {
  var add = function add(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');
    return a + b;
  };
  var subtract = function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');
    return a - b;
  };
  var multiply = function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');
    return a * b;
  };
  var divide = function divide(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');
    if (b == 0) throw new Error('Zero division is illegal');
    return a / b;
  };
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };
};
var caesarCipher = function caesarCipher(str, key) {
  var zCode = 'z'.charCodeAt(0);
  var aCode = 'a'.charCodeAt(0);
  var ZCode = 'Z'.charCodeAt(0);
  var ACode = 'A'.charCodeAt(0);
  return _toConsumableArray(str).map(function (_char) {
    var code = _char.charCodeAt(0);
    if (code <= zCode && code >= aCode) {
      code += key % 26;
      code = code > zCode ? code - 26 : code;
      code = code < aCode ? code + 26 : code;
      return String.fromCharCode(code);
    }
    if (code <= ZCode && code >= ACode) {
      code += key % 26;
      code = code > ZCode ? code - 26 : code;
      code = code < ACode ? code + 26 : code;
      return String.fromCharCode(code);
    }
    return _char;
  }).join('');
};
var analyzeArray = function analyzeArray(arr) {
  if (arr.length === 0) throw new Error('This is an empty array!');
  var min = Infinity;
  var max = -Infinity;
  var average = arr.reduce(function (accumulator, item) {
    if (typeof item !== 'number' || Number.isNaN(item)) throw new Error('The items need to be a number');
    min = Math.min(min, item);
    max = Math.max(max, item);
    return accumulator + item;
  }, 0) / arr.length;
  var length = arr.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length
  };
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsR0FBR00sSUFBSSxDQUFDTixHQUFHLENBQUNBLEdBQUcsRUFBRUksSUFBSSxDQUFDO0lBRXpCLE9BQU9ELFdBQVcsR0FBR0MsSUFBSTtFQUMzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUdQLEdBQUcsQ0FBQ3pCLE1BQU07RUFFcEIsSUFBUUEsTUFBTSxHQUFLeUIsR0FBRyxDQUFkekIsTUFBTTtFQUVkLE9BQU87SUFBRTZCLE9BQU8sRUFBUEEsT0FBTztJQUFFSCxHQUFHLEVBQUhBLEdBQUc7SUFBRUUsR0FBRyxFQUFIQSxHQUFHO0lBQUU1QixNQUFNLEVBQU5BO0VBQU8sQ0FBQztBQUN0QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXG5jb25zdCByZXZlcnNlU3RyaW5nID0gKHN0cikgPT4ge1xuICBjb25zdCBzdHJBcnJheSA9IFsuLi5zdHJdO1xuICBsZXQgbCA9IDA7XG4gIGxldCByID0gc3RyLmxlbmd0aCAtIDE7XG5cbiAgd2hpbGUgKGwgPCByKSB7XG4gICAgW3N0ckFycmF5W2xdLCBzdHJBcnJheVtyXV0gPSBbc3RyQXJyYXlbcl0sIHN0ckFycmF5W2xdXTtcbiAgICBsKys7XG4gICAgci0tO1xuICB9XG4gIHJldHVybiBzdHJBcnJheS5qb2luKCcnKTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZCA9IChhLCBiKSA9PiB7XG4gICAgaWYgKGlzTmFOKGEpIHx8IGlzTmFOKGIpKSB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIG51bWJlciEnKTtcbiAgICBpZiAoYSA9PSAnJyB8fCBiID09ICcnKSB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IHN0cmluZ3MgYXJlIG5vdCB2YWxpZCEnKTtcbiAgICByZXR1cm4gYSArIGI7XG4gIH07XG5cbiAgY29uc3Qgc3VidHJhY3QgPSAoYSwgYikgPT4ge1xuICAgIGlmIChpc05hTihhKSB8fCBpc05hTihiKSkgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBudW1iZXIhJyk7XG4gICAgaWYgKGEgPT0gJycgfHwgYiA9PSAnJykgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSBzdHJpbmdzIGFyZSBub3QgdmFsaWQhJyk7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH07XG5cbiAgY29uc3QgbXVsdGlwbHkgPSAoYSwgYikgPT4ge1xuICAgIGlmIChpc05hTihhKSB8fCBpc05hTihiKSkgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBudW1iZXIhJyk7XG4gICAgaWYgKGEgPT0gJycgfHwgYiA9PSAnJykgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSBzdHJpbmdzIGFyZSBub3QgdmFsaWQhJyk7XG5cbiAgICByZXR1cm4gYSAqIGI7XG4gIH07XG5cbiAgY29uc3QgZGl2aWRlID0gKGEsIGIpID0+IHtcbiAgICBpZiAoaXNOYU4oYSkgfHwgaXNOYU4oYikpIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgbnVtYmVyIScpO1xuICAgIGlmIChhID09ICcnIHx8IGIgPT0gJycpIHRocm93IG5ldyBFcnJvcignRW1wdHkgc3RyaW5ncyBhcmUgbm90IHZhbGlkIScpO1xuICAgIGlmIChiID09IDApIHRocm93IG5ldyBFcnJvcignWmVybyBkaXZpc2lvbiBpcyBpbGxlZ2FsJyk7XG5cbiAgICByZXR1cm4gYSAvIGI7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkLCBzdWJ0cmFjdCwgbXVsdGlwbHksIGRpdmlkZSB9O1xufTtcblxuY29uc3QgY2Flc2FyQ2lwaGVyID0gKHN0ciwga2V5KSA9PiB7XG4gIGNvbnN0IHpDb2RlID0gJ3onLmNoYXJDb2RlQXQoMCk7XG4gIGNvbnN0IGFDb2RlID0gJ2EnLmNoYXJDb2RlQXQoMCk7XG5cbiAgY29uc3QgWkNvZGUgPSAnWicuY2hhckNvZGVBdCgwKTtcbiAgY29uc3QgQUNvZGUgPSAnQScuY2hhckNvZGVBdCgwKTtcblxuICByZXR1cm4gWy4uLnN0cl1cbiAgICAubWFwKChjaGFyKSA9PiB7XG4gICAgICBsZXQgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjb2RlIDw9IHpDb2RlICYmIGNvZGUgPj0gYUNvZGUpIHtcbiAgICAgICAgY29kZSArPSBrZXkgJSAyNjtcbiAgICAgICAgY29kZSA9IGNvZGUgPiB6Q29kZSA/IGNvZGUgLSAyNiA6IGNvZGU7XG4gICAgICAgIGNvZGUgPSBjb2RlIDwgYUNvZGUgPyBjb2RlICsgMjYgOiBjb2RlO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlIDw9IFpDb2RlICYmIGNvZGUgPj0gQUNvZGUpIHtcbiAgICAgICAgY29kZSArPSBrZXkgJSAyNjtcbiAgICAgICAgY29kZSA9IGNvZGUgPiBaQ29kZSA/IGNvZGUgLSAyNiA6IGNvZGU7XG4gICAgICAgIGNvZGUgPSBjb2RlIDwgQUNvZGUgPyBjb2RlICsgMjYgOiBjb2RlO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFyO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufTtcblxuY29uc3QgYW5hbHl6ZUFycmF5ID0gKGFycikgPT4ge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGlzIGFuIGVtcHR5IGFycmF5IScpO1xuXG4gIGxldCBtaW4gPSBJbmZpbml0eTtcbiAgbGV0IG1heCA9IC1JbmZpbml0eTtcblxuICBjb25zdCBhdmVyYWdlID1cbiAgICBhcnIucmVkdWNlKChhY2N1bXVsYXRvciwgaXRlbSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnbnVtYmVyJyB8fCBOdW1iZXIuaXNOYU4oaXRlbSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGl0ZW1zIG5lZWQgdG8gYmUgYSBudW1iZXInKTtcblxuICAgICAgbWluID0gTWF0aC5taW4obWluLCBpdGVtKTtcbiAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgaXRlbSk7XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGl0ZW07XG4gICAgfSwgMCkgLyBhcnIubGVuZ3RoO1xuXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBhcnI7XG5cbiAgcmV0dXJuIHsgYXZlcmFnZSwgbWluLCBtYXgsIGxlbmd0aCB9O1xufTtcbmV4cG9ydCB7IGNhcGl0YWxpemUsIHJldmVyc2VTdHJpbmcsIGNhbGN1bGF0b3IsIGNhZXNhckNpcGhlciwgYW5hbHl6ZUFycmF5IH07XG4iXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXZlcnNlU3RyaW5nIiwic3RyQXJyYXkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJsIiwiciIsImxlbmd0aCIsIl9yZWYiLCJqb2luIiwiY2FsY3VsYXRvciIsImFkZCIsImEiLCJiIiwiaXNOYU4iLCJFcnJvciIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJkaXZpZGUiLCJjYWVzYXJDaXBoZXIiLCJrZXkiLCJ6Q29kZSIsImNoYXJDb2RlQXQiLCJhQ29kZSIsIlpDb2RlIiwiQUNvZGUiLCJtYXAiLCJjaGFyIiwiY29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFuYWx5emVBcnJheSIsImFyciIsIm1pbiIsIkluZmluaXR5IiwibWF4IiwiYXZlcmFnZSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsIk51bWJlciIsIk1hdGgiXSwic291cmNlUm9vdCI6IiJ9