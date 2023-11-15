/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header(headerSelector, navbarSelector){
    const header = document.querySelector(headerSelector),
        height = window.innerHeight,
        navbar = document.querySelector(navbarSelector)
    if (height > 800) {
        navbar.style.top = 10 + 'vh'
    }
    window.addEventListener('scroll', ()=>{

        header.classList.toggle('active', scrollY > 0)
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader(loaderSeletor) {
  const loader = document.querySelector(loaderSeletor);
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loader.style.opacity = 0;
    document.body.style.overflow = "";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navbar({navbarSelector, burgerSelector, navbarItemSelector}){
    const navbar = document.querySelector(navbarSelector),
        burger = document.querySelector(burgerSelector),
        navbarItems = document.querySelectorAll(navbarItemSelector)
    burger.addEventListener('click', ()=>{
        navbar.classList.toggle('active')
    })
    navbarItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            document.querySelectorAll('.nav_item').forEach(item => item.classList.remove('active'))
            item.classList.add('active')
            navbar.classList.toggle('active')
        })
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
  wrapperSlider,
  carouselSlider,
  cardSelector,
  arrowBtnSelector,
}) {
  const wrapper = document.querySelector(wrapperSlider),
    carousel = document.querySelector(carouselSlider),
    firstCardWidth = document.querySelector(cardSelector).offsetWidth,
    arrowBtn = document.querySelectorAll(arrowBtnSelector),
    carouselChildren = [...carousel.children];
  let isDragging = false,
    isAutoPlay = true,
    startX,
    startScrollLeft,
    timeroutId;

  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  carouselChildren
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildren.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });
  // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");
  // Add event listener for the arrow buttons to scroll the carousel left and right
  arrowBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id == "left") {
        carousel.scrollLeft += -firstCardWidth;
      } else {
        carousel.scrollLeft += firstCardWidth;
      }
    });
  });
  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };
  const infiniteScroll = () => {
    // If the carousel is at the beginning scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  };
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/loader */ "./src/modules/loader.js");
/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/navbar */ "./src/modules/navbar.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js");





window.addEventListener('DOMContentLoaded', ()=>{
    (0,_modules_loader__WEBPACK_IMPORTED_MODULE_1__["default"])('.loader')
    ;(0,_modules_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])({
        navbarSelector: '.navigation',
        burgerSelector: ".burger",
        navbarItemSelector: '.nav_item',
    })
    ;(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__["default"])('.header', '.navigation')
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
        wrapperSlider: '.mens .slider-wrapper',
        carouselSlider: '.mens .slider-inner',
        cardSelector: '.mens .slide',
        arrowBtnSelector: '.mens .btn'
    })
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
        wrapperSlider: '.womens .slider-wrapper',
        carouselSlider: '.womens .slider-inner',
        cardSelector: '.womens .slide',
        arrowBtnSelector: '.womens .btn'
    })
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
        wrapperSlider: '.kids .slider-wrapper',
        carouselSlider: '.kids .slider-inner',
        cardSelector: '.kids .slide',
        arrowBtnSelector: '.kids .btn'
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map