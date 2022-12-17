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

/***/ "./resources/ts/app.ts":
/*!*****************************!*\
  !*** ./resources/ts/app.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// @ts-ignore\n__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './bootstrap'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n// own query selector\nvar $f = function $f(object) {\n  return document.querySelector(object);\n};\nvar DARKMODE;\n// apply mode\nvar setClassToBody = function setClassToBody() {\n  if (DARKMODE) {\n    $f('body').classList.remove('light');\n    $f('body').classList.add('dark');\n  } else {\n    $f('body').classList.remove('dark');\n    $f('body').classList.add('light');\n  }\n  //console.log(\"darkmode = \" + DARKMODE)\n};\n// settings from locale storage available ?\nswitch (localStorage.getItem('darkmode')) {\n  case null:\n    // First Visit = unavailable\n    DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    localStorage.setItem('darkmode', String(DARKMODE));\n    break;\n  case 'true':\n    DARKMODE = true;\n    break;\n  case 'false':\n    DARKMODE = false;\n    break;\n  default:\n    console.log(\"INFO: Unable to read theme preference from system\");\n    DARKMODE = false;\n    break;\n}\nsetClassToBody();\n// implement Theme-Button to switch Theme\nvar switchMode = function switchMode() {\n  DARKMODE = !DARKMODE;\n  localStorage.setItem('darkmode', String(DARKMODE));\n  setClassToBody();\n  var input = document.getElementById('switch');\n  if (DARKMODE == true) {\n    // @ts-ignore\n    input === null || input === void 0 ? void 0 : input.innerText = \"Lightmode\";\n  }\n  if (DARKMODE == false) {\n    // @ts-ignore\n    input === null || input === void 0 ? void 0 : input.innerText = \"Darkmode\";\n  }\n};\nif (document.getElementById('switch') == null) console.log(\"INFO: no Theme Button found\");else {\n  // @ts-ignore\n  var input = document.getElementById('switch');\n  // @ts-ignore\n  input.addEventListener('click', switchMode);\n  setClassToBody();\n}\n//console.log(\"function js fin\")//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdHMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUNiO0FBQ0FBLG1CQUFPLENBQUMsMElBQWEsQ0FBQztBQUN0QjtBQUNBLElBQUlDLEVBQUUsR0FBRyxTQUFMQSxFQUFFLENBQWFDLE1BQU0sRUFBRTtFQUN2QixPQUFPQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3pDLENBQUM7QUFDRCxJQUFJRyxRQUFRO0FBQ1o7QUFDQSxJQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBZTtFQUM3QixJQUFJRCxRQUFRLEVBQUU7SUFDVkosRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDTSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDcENQLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQ00sU0FBUyxDQUFDRSxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQ3BDLENBQUMsTUFDSTtJQUNEUixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUNNLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuQ1AsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDTSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDckM7RUFDQTtBQUNKLENBQUM7QUFDRDtBQUNBLFFBQVFDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztFQUNwQyxLQUFLLElBQUk7SUFDTDtJQUNBTixRQUFRLEdBQUdPLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87SUFDcEVKLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFVBQVUsRUFBRUMsTUFBTSxDQUFDWCxRQUFRLENBQUMsQ0FBQztJQUNsRDtFQUNKLEtBQUssTUFBTTtJQUNQQSxRQUFRLEdBQUcsSUFBSTtJQUNmO0VBQ0osS0FBSyxPQUFPO0lBQ1JBLFFBQVEsR0FBRyxLQUFLO0lBQ2hCO0VBQ0o7SUFDSVksT0FBTyxDQUFDQyxHQUFHLENBQUMsbURBQW1ELENBQUM7SUFDaEViLFFBQVEsR0FBRyxLQUFLO0lBQ2hCO0FBQU07QUFFZEMsY0FBYyxFQUFFO0FBQ2hCO0FBQ0EsSUFBSWEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBZTtFQUN6QmQsUUFBUSxHQUFHLENBQUNBLFFBQVE7RUFDcEJLLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFVBQVUsRUFBRUMsTUFBTSxDQUFDWCxRQUFRLENBQUMsQ0FBQztFQUNsREMsY0FBYyxFQUFFO0VBQ2hCLElBQUljLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDN0MsSUFBSWhCLFFBQVEsSUFBSSxJQUFJLEVBQUU7SUFBRTtJQUNwQmUsS0FBSyxLQUFLLElBQUksSUFBSUEsS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxLQUFLLENBQUNFLFNBQVMsR0FBRyxXQUFXO0VBQy9FO0VBQ0EsSUFBSWpCLFFBQVEsSUFBSSxLQUFLLEVBQUU7SUFBRTtJQUNyQmUsS0FBSyxLQUFLLElBQUksSUFBSUEsS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxLQUFLLENBQUNFLFNBQVMsR0FBRyxVQUFVO0VBQzlFO0FBQ0osQ0FBQztBQUNELElBQUluQixRQUFRLENBQUNrQixjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUN6Q0osT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxLQUMxQztFQUFFO0VBQ0gsSUFBSUUsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUM3QztFQUNBRCxLQUFLLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRUosVUFBVSxDQUFDO0VBQzNDYixjQUFjLEVBQUU7QUFDcEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy90cy9hcHAudHM/MDNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xyXG4vLyBvd24gcXVlcnkgc2VsZWN0b3JcclxudmFyICRmID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqZWN0KTtcclxufTtcclxudmFyIERBUktNT0RFO1xyXG4vLyBhcHBseSBtb2RlXHJcbnZhciBzZXRDbGFzc1RvQm9keSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChEQVJLTU9ERSkge1xyXG4gICAgICAgICRmKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQnKTtcclxuICAgICAgICAkZignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICRmKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgICRmKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJkYXJrbW9kZSA9IFwiICsgREFSS01PREUpXHJcbn07XHJcbi8vIHNldHRpbmdzIGZyb20gbG9jYWxlIHN0b3JhZ2UgYXZhaWxhYmxlID9cclxuc3dpdGNoIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSkge1xyXG4gICAgY2FzZSBudWxsOlxyXG4gICAgICAgIC8vIEZpcnN0IFZpc2l0ID0gdW5hdmFpbGFibGVcclxuICAgICAgICBEQVJLTU9ERSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCBTdHJpbmcoREFSS01PREUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJ3RydWUnOlxyXG4gICAgICAgIERBUktNT0RFID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJ2ZhbHNlJzpcclxuICAgICAgICBEQVJLTU9ERSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklORk86IFVuYWJsZSB0byByZWFkIHRoZW1lIHByZWZlcmVuY2UgZnJvbSBzeXN0ZW1cIik7XHJcbiAgICAgICAgREFSS01PREUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxufVxyXG5zZXRDbGFzc1RvQm9keSgpO1xyXG4vLyBpbXBsZW1lbnQgVGhlbWUtQnV0dG9uIHRvIHN3aXRjaCBUaGVtZVxyXG52YXIgc3dpdGNoTW9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIERBUktNT0RFID0gIURBUktNT0RFO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhcmttb2RlJywgU3RyaW5nKERBUktNT0RFKSk7XHJcbiAgICBzZXRDbGFzc1RvQm9keSgpO1xyXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaCcpO1xyXG4gICAgaWYgKERBUktNT0RFID09IHRydWUpIHsgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dC5pbm5lclRleHQgPSBcIkxpZ2h0bW9kZVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKERBUktNT0RFID09IGZhbHNlKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuaW5uZXJUZXh0ID0gXCJEYXJrbW9kZVwiO1xyXG4gICAgfVxyXG59O1xyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaCcpID09IG51bGwpXHJcbiAgICBjb25zb2xlLmxvZyhcIklORk86IG5vIFRoZW1lIEJ1dHRvbiBmb3VuZFwiKTtcclxuZWxzZSB7IC8vIEB0cy1pZ25vcmVcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gnKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoTW9kZSk7XHJcbiAgICBzZXRDbGFzc1RvQm9keSgpO1xyXG59XHJcbi8vY29uc29sZS5sb2coXCJmdW5jdGlvbiBqcyBmaW5cIilcclxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkZiIsIm9iamVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkRBUktNT0RFIiwic2V0Q2xhc3NUb0JvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzZXRJdGVtIiwiU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInN3aXRjaE1vZGUiLCJpbnB1dCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/ts/app.ts\n");

/***/ }),

/***/ "./resources/sass/app.sass":
/*!*********************************!*\
  !*** ./resources/sass/app.sass ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Fzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Fzcz85NjZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.sass\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./resources/ts/app.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./resources/sass/app.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;