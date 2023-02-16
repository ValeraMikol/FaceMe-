/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n\r\n// accordion\r\n\r\nconst accordionHeader = document.querySelectorAll(\".accordion__header\")\r\n\r\naccordionHeader.forEach((item) => {\r\n  item.addEventListener(\"click\", (e) => {\r\n    let content = item.nextElementSibling\r\n    let accordion = item.closest(\".accordion\")\r\n    accordion.classList.toggle(\"active\")\r\n    item.querySelector(\".accordion__button\").classList.toggle(\"active\")\r\n    if (content.style.maxHeight) {\r\n      content.style.maxHeight = null\r\n    } else {\r\n      content.style.maxHeight = content.scrollHeight + \"px\"\r\n    }\r\n  })\r\n})\r\n\r\n// languages\r\n\r\nconst langBtn = document.querySelectorAll(\".top-footer__lang\")\r\n\r\nlangBtn.forEach((item) => {\r\n  item.addEventListener(\"click\", (e) => {\r\n    if (e.currentTarget.classList.contains(\"active\")) {\r\n      e.currentTarget.classList.remove(\"active\")\r\n    } else {\r\n      e.currentTarget.classList.add(\"active\")\r\n      let nextEl = e.currentTarget.nextElementSibling\r\n      let prevEl = e.currentTarget.previousElementSibling\r\n      if (nextEl) {\r\n        nextEl.classList.remove(\"active\")\r\n      } else {\r\n        prevEl.classList.remove(\"active\")\r\n      }\r\n    }\r\n  })\r\n})\r\n\r\n//circles\r\n\r\nvar element = document.querySelectorAll(\"[data-circle]\")\r\n\r\nvar Visible = function (target) {\r\n  // Все позиции элемента\r\n  var targetPosition = {\r\n      top: window.pageYOffset + target.getBoundingClientRect().top,\r\n      left: window.pageXOffset + target.getBoundingClientRect().left,\r\n      right: window.pageXOffset + target.getBoundingClientRect().right,\r\n      bottom: window.pageYOffset + target.getBoundingClientRect().bottom,\r\n    },\r\n    // Получаем позиции окна\r\n    windowPosition = {\r\n      top: window.pageYOffset,\r\n      left: window.pageXOffset,\r\n      right: window.pageXOffset + document.documentElement.clientWidth,\r\n      bottom: window.pageYOffset + document.documentElement.clientHeight,\r\n    }\r\n\r\n  if (\r\n    targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху\r\n    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу\r\n    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева\r\n    targetPosition.left < windowPosition.right\r\n  ) {\r\n    // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа\r\n    // Если элемент полностью видно, то запускаем следующий код\r\n    console.clear()\r\n    console.log(\"Вы видите элемент :)\")\r\n\r\n    target.classList.add(\"active\")\r\n  } else {\r\n    // Если элемент не видно, то запускаем этот код\r\n    console.clear()\r\n    target.classList.remove(\"active\")\r\n  }\r\n}\r\n\r\n// Запускаем функцию при прокрутке страницы\r\nwindow.addEventListener(\"scroll\", function () {\r\n  element.forEach((item) => {\r\n    Visible(item)\r\n  })\r\n})\r\n\r\n// А также запустим функцию сразу. А то вдруг, элемент изначально видно\r\n// Visible(element)\r\n\r\nconst bubbles = document.querySelectorAll(\".circle\")\r\nconsole.log(bubbles)\r\n\r\nsetTimeout(() => {\r\n  bubbles.forEach((e) => {\r\n    e.classList.add(\"active\")\r\n  })\r\n}, 2000)\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;