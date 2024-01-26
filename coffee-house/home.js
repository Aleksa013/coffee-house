/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2279:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./coffee-house/src/styles/style.scss
var style = __webpack_require__(8351);
// EXTERNAL MODULE: ./coffee-house/src/styles/vars.scss
var vars = __webpack_require__(1206);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5701);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(8236);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(6080);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(6850);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(7182);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(9213);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/header_home.scss
var header_home = __webpack_require__(5917);
;// CONCATENATED MODULE: ./coffee-house/src/styles/header_home.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(header_home/* default */.Z, options);




       /* harmony default export */ const styles_header_home = (header_home/* default */.Z && header_home/* default */.Z.locals ? header_home/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./coffee-house/src/styles/tab.scss
var tab = __webpack_require__(7986);
// EXTERNAL MODULE: ./coffee-house/src/components/Header.js + 2 modules
var Header = __webpack_require__(3219);
// EXTERNAL MODULE: ./coffee-house/src/styles/button.scss
var styles_button = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/enjoy.scss
var enjoy = __webpack_require__(321);
;// CONCATENATED MODULE: ./coffee-house/src/styles/enjoy.scss

      
      
      
      
      
      
      
      
      

var enjoy_options = {};

enjoy_options.styleTagTransform = (styleTagTransform_default());
enjoy_options.setAttributes = (setAttributesWithoutAttributes_default());

      enjoy_options.insert = insertBySelector_default().bind(null, "head");
    
enjoy_options.domAPI = (styleDomAPI_default());
enjoy_options.insertStyleElement = (insertStyleElement_default());

var enjoy_update = injectStylesIntoStyleTag_default()(enjoy/* default */.Z, enjoy_options);




       /* harmony default export */ const styles_enjoy = (enjoy/* default */.Z && enjoy/* default */.Z.locals ? enjoy/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/assets/images/video.mp4
const video_namespaceObject = __webpack_require__.p + "video/video.mp4";
;// CONCATENATED MODULE: ./coffee-house/src/components/Enjoy.js





const Enjoy = elem => {
  const enjoy = document.createElement('section');
  enjoy.classList.add('enjoy');
  enjoy.innerHTML = `
    <video id="background-video" autoplay muted loop >
    <source src=${video_namespaceObject} type="video/mp4">
    </video>
    <h1 class="enjoy-header"><span>Enjoy</span> premium coffee at our charming cafe</h1>
    <p class="enjoy-text">With its inviting atmosphere and delicious coffee options, 
    the Coffee House Resource is a popular destination for coffee lovers and those 
    seeking a warm and inviting space to enjoy their favorite beverage.</p>
    <a class='enjoy-btn' href= './menu.html'>Menu
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.166 9.76667V11.6667C14.166 14.8883 11.5543 17.5 8.33268 17.5C5.11102 17.5 2.49935 14.8883 2.49935 11.6667V9.76667C2.49935 9.4353 2.76798 9.16667 3.09935 9.16667H13.566C13.8974 9.16667 14.166 9.4353 14.166 9.76667Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.99935 7.49996C9.99935 6.66663 10.5946 5.83329 11.7851 5.83329V5.83329C13.1 5.83329 14.166 4.7673 14.166 3.45234V2.91663" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66732 7.5V7.08333C6.66732 5.70262 7.78661 4.58333 9.16732 4.58333V4.58333C10.0878 4.58333 10.834 3.83714 10.834 2.91667V2.5" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.334 9.16663H15.4173C16.5679 9.16663 17.5007 10.0994 17.5007 11.25C17.5007 12.4006 16.5679 13.3333 15.4173 13.3333H14.1673" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </a>
    `;
  elem.appendChild(enjoy);
};
/* harmony default export */ const components_Enjoy = (Enjoy);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/favorite.scss
var favorite = __webpack_require__(1062);
;// CONCATENATED MODULE: ./coffee-house/src/styles/favorite.scss

      
      
      
      
      
      
      
      
      

var favorite_options = {};

favorite_options.styleTagTransform = (styleTagTransform_default());
favorite_options.setAttributes = (setAttributesWithoutAttributes_default());

      favorite_options.insert = insertBySelector_default().bind(null, "head");
    
favorite_options.domAPI = (styleDomAPI_default());
favorite_options.insertStyleElement = (insertStyleElement_default());

var favorite_update = injectStylesIntoStyleTag_default()(favorite/* default */.Z, favorite_options);




       /* harmony default export */ const styles_favorite = (favorite/* default */.Z && favorite/* default */.Z.locals ? favorite/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/json/slider.json
const slider_namespaceObject = JSON.parse('[{"item":1,"image":"./assets/frappuchino.png","name":"S’mores Frappuccino","description":"This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.","price":"$5.50"},{"item":2,"image":"./assets/latte.png","name":"Caramel Macchiato","description":"Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.","price":"$5.00"},{"item":3,"image":"./assets/tea-with-ice.png","name":"Ice coffee","description":"A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.","price":"$4.50"}]');
;// CONCATENATED MODULE: ./coffee-house/src/js/animation.js
const animeSpaceToCenter = [{
  marginLeft: '35%'
}, {
  marginLeft: '0'
}];
const animeSpaceToEnd = [{
  marginLeft: '0%'
}, {
  marginLeft: '-35%'
}];
const animeSpaceFromEnd = [{
  marginLeft: '-35%'
}, {
  marginLeft: '0'
}];
const animeSpaceFromCenter = [{
  marginLeft: '0%'
}, {
  marginLeft: '35%'
}];
const toOpacity = [{
  opacity: '0'
}, {
  opacity: '1'
}];
const toNonOpacity = [{
  opacity: '1'
}, {
  opacity: '0'
}];
const animeSetting = {
  duration: 1000
};

;// CONCATENATED MODULE: ./coffee-house/src/components/Slide.js


const Slide = (elem, pic, name, description, price, anSpace, anOpacity) => {
  elem.removeChild(elem.firstChild);
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `
    <img src=${pic} alt="${name}">
    <h3>${name}</h3>
    <p>${description}</p>
    <span class="favorite-slide-price">${price}</span>
    `;
  elem.prepend(slide);
  slide.animate(anSpace, animeSetting);
  slide.animate(anOpacity, animeSetting);
};
/* harmony default export */ const components_Slide = (Slide);
;// CONCATENATED MODULE: ./coffee-house/src/components/Favorite_coffe.js





const Favorite_Coffe = elem => {
  const favoriteCofe = document.createElement('section');
  favoriteCofe.classList.add('favorite');
  favoriteCofe.innerHTML = `
    <h2  id="favorite" class="favorite-header">Choose your <span> favorite</span> coffee</h2>
    <article>
    <div class ="left-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>    
    <div class="favorite-slide">
    <nav>
    <div class="favorite-nav"><span></span></div>
    <div class="favorite-nav"><span></span></div>
    <div class="favorite-nav"><span></span></div>
    </nav>
    </div>
    <div class ="right-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>     
    </article>    
    `;
  elem.appendChild(favoriteCofe);
};
/* harmony default export */ const Favorite_coffe = (Favorite_Coffe);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/about.scss
var about = __webpack_require__(2251);
;// CONCATENATED MODULE: ./coffee-house/src/styles/about.scss

      
      
      
      
      
      
      
      
      

var about_options = {};

about_options.styleTagTransform = (styleTagTransform_default());
about_options.setAttributes = (setAttributesWithoutAttributes_default());

      about_options.insert = insertBySelector_default().bind(null, "head");
    
about_options.domAPI = (styleDomAPI_default());
about_options.insertStyleElement = (insertStyleElement_default());

var about_update = injectStylesIntoStyleTag_default()(about/* default */.Z, about_options);




       /* harmony default export */ const styles_about = (about/* default */.Z && about/* default */.Z.locals ? about/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/components/About.js



const About = elem => {
  const about = document.createElement('div');
  about.classList.add('about');
  about.innerHTML = `
    <p id = "about" class = "about-header">Resource is <span>the</span><span>perfect and cozy</span><span> place </span> 
    where you can enjoy a variety of hot beverages, relax, 
    catch up with friends, or get some work done.</p>
    <div class = "about-girl"></div>
    <div class = "about-man" ></div>
    <div class = "about-cup" ></div>
    <div class = "about-couple">
    </div>
    `;
  elem.appendChild(about);
};
/* harmony default export */ const components_About = (About);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/app.scss
var app = __webpack_require__(2819);
;// CONCATENATED MODULE: ./coffee-house/src/styles/app.scss

      
      
      
      
      
      
      
      
      

var app_options = {};

app_options.styleTagTransform = (styleTagTransform_default());
app_options.setAttributes = (setAttributesWithoutAttributes_default());

      app_options.insert = insertBySelector_default().bind(null, "head");
    
app_options.domAPI = (styleDomAPI_default());
app_options.insertStyleElement = (insertStyleElement_default());

var app_update = injectStylesIntoStyleTag_default()(app/* default */.Z, app_options);




       /* harmony default export */ const styles_app = (app/* default */.Z && app/* default */.Z.locals ? app/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/components/App.js


const App = elem => {
  const app = document.createElement('section');
  app.classList.add('app');
  app.innerHTML = `
    <h2 id = "app" class = "app-header">
    <span>Download</span> our apps to start ordering
    </h2>
    <p class="app-text">
    Download the Resource app today and experience 
    the comfort of ordering your favorite coffee from 
    wherever you are</p>  
    <div class="app-btn-group">
     <div class="app-btn-apple">
     <a href='#'>
     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M26.7063 18.6307C26.6694 14.6324 30.0641 12.6872 30.2193 12.5966C28.2967 9.86366 25.3169 9.49026 24.2697 9.46048C21.767 9.20369 19.3393 10.9206 18.0644 10.9206C16.764 10.9206 14.8008 9.48529 12.6848 9.52747C9.96196 9.56841 7.41468 11.1055 6.01762 13.4923C3.13444 18.359 5.28474 25.5108 8.04705 29.4446C9.42884 31.3712 11.0435 33.5223 13.1569 33.4466C15.2245 33.3635 15.9968 32.1614 18.4919 32.1614C20.9641 32.1614 21.6893 33.4466 23.8447 33.3983C26.0637 33.3635 27.4608 31.463 28.7942 29.519C30.3911 27.3108 31.0323 25.1362 31.0578 25.0245C31.0056 25.0071 26.7483 23.4229 26.7063 18.6307Z" fill="#403F3D"/>
    <path d="M22.6347 6.87268C23.7468 5.51675 24.5076 3.67205 24.2964 1.80005C22.6869 1.86952 20.674 2.88554 19.5149 4.21169C18.4893 5.38029 17.5732 7.29571 17.8099 9.097C19.6179 9.2285 21.4743 8.20752 22.6347 6.87268Z" fill="#403F3D"/>
    </svg>
    <p>
    Available on the
    <span>App Store</span>
    </p>
     </a>
     </div>
     <div class="app-btn-google">
     <a href='#'>
     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
     <path d="M3.7558 3.20309C3.39335 3.57302 3.18359 4.14896 3.18359 4.89483V31.4995C3.18359 32.2454 3.39335 32.8213 3.7558 33.1913L3.84525 33.2725L19.1359 18.3701V18.0182L3.84525 3.11587L3.7558 3.20309Z" fill="#403F3D"/>
     <path d="M26.0776 23.34L20.9863 18.3701V18.0182L26.0837 13.0482L26.1979 13.1129L32.2345 16.4618C33.9573 17.4122 33.9573 18.9761 32.2345 19.9325L26.1979 23.2754L26.0776 23.34Z" fill="#403F3D"/>
     <path d="M25.2733 24.2008L20.0617 19.1196L4.68164 34.1167C5.25384 34.7031 6.18695 34.7738 7.24807 34.1873L25.2733 24.2008Z" fill="#403F3D"/>
     <path d="M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z" fill="#403F3D"/>
   </svg>
    <p>Available on 
    <span>Google Play</span>
    </p>
     </a>
     </div>
     </div>
    `;
  elem.appendChild(app);
};
/* harmony default export */ const components_App = (App);
// EXTERNAL MODULE: ./coffee-house/src/components/Footer.js + 1 modules
var Footer = __webpack_require__(9937);
;// CONCATENATED MODULE: ./coffee-house/src/components/favi.js
const fav = (elem, fav) => {
  const link = document.createElement('link');
  link.innerHTML = `
     rel="icon" type="image/x-icon" href=${fav}
    `;
  elem.append(link);
};
/* harmony default export */ const favi = (fav);
// EXTERNAL MODULE: ./coffee-house/src/js/changeBurger.js
var changeBurger = __webpack_require__(7471);
;// CONCATENATED MODULE: ./coffee-house/src/js/getCarousel.js

const getCarousel = (elem, variable, arrItems, db, ...arr) => {
  variable == 0 ? variable = 2 : variable -= 1;
  components_Slide(elem, db[variable].image, db[variable].name, db[variable].description, db[variable].price, ...arr);
  arrItems.forEach((item, index) => {
    index == variable ? item.firstElementChild.classList.add('anime') : item.firstElementChild.classList.remove('anime');
  });
};
/* harmony default export */ const js_getCarousel = (getCarousel);
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/frappuchino.png
const frappuchino_namespaceObject = __webpack_require__.p + "assets/frappuchino.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/tea-with-ice.png
const tea_with_ice_namespaceObject = __webpack_require__.p + "assets/tea-with-ice.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/latte.png
const latte_namespaceObject = __webpack_require__.p + "assets/latte.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/icons/coffee-cup.png
const coffee_cup_namespaceObject = __webpack_require__.p + "assets/coffee-cup.png";
;// CONCATENATED MODULE: ./coffee-house/src/home.js





















const head = document.querySelector('head');
const container = document.querySelector('.container');
const main = document.createElement('main');
favi(head, coffee_cup_namespaceObject);
(0,Header/* default */.Z)(container);
container.append(main);
components_Enjoy(main);
Favorite_coffe(main);
components_About(main);
components_App(main);
(0,Footer/* default */.Z)(container);
const burger = document.querySelector('.menu-burger');
const spans = burger.querySelectorAll('span');
const menu = document.querySelector('.menu');
const itemSlide = document.querySelector('.favorite-slide');
const leftButtonSlide = document.querySelector('.left-btn');
const rightButtonSlide = document.querySelector('.right-btn');
const navs = document.querySelectorAll('.favorite-nav');
window.onload = () => {
  nowInterval();
};
burger.addEventListener('click', event => {
  event.target.classList.contains('burger-active') || event.target.classList.contains('span-active') ? (0,changeBurger/* hideMenu */.S)(burger, spans, menu) : (0,changeBurger/* showMenu */.A)(burger, spans, menu);
});
menu.addEventListener('click', event => {
  if (event.target.classList.contains('menu-link') || event.target.classList.contains('menu-list-link')) {
    event.preventDefault();
    (0,changeBurger/* hideMenu */.S)(burger, spans, menu);
    setTimeout(() => {
      window.location = event.target.href;
    }, 500);
  }
});

// slider

let number = 1;
js_getCarousel(itemSlide, number, navs, slider_namespaceObject);
number = 2;
let interval;
let pauseInterval = false;
const nowInterval = function () {
  clearInterval(interval);
  interval = setInterval(() => {
    if (!pauseInterval) {
      number == 0 ? number = 2 : number -= 1;
      itemSlide.firstChild.animate(animeSpaceFromCenter, animeSetting);
      itemSlide.firstChild.animate(toNonOpacity, animeSetting);
      setTimeout(components_Slide, 950, itemSlide, slider_namespaceObject[`${number}`].image, slider_namespaceObject[`${number}`].name, slider_namespaceObject[`${number}`].description, slider_namespaceObject[`${number}`].price, animeSpaceFromEnd, toOpacity);
      navs.forEach((nav, index) => {
        index == number ? nav.firstElementChild.classList.add('anime') : nav.firstElementChild.classList.remove('anime');
      });
    }
  }, 7000);
};

// nowInterval(); 

leftButtonSlide.addEventListener('click', () => {
  number == 0 ? number = 2 : number -= 1;
  itemSlide.firstChild.animate(animeSpaceFromCenter, animeSetting);
  itemSlide.firstChild.animate(toNonOpacity, animeSetting);
  setTimeout(components_Slide, 950, itemSlide, slider_namespaceObject[`${number}`].image, slider_namespaceObject[`${number}`].name, slider_namespaceObject[`${number}`].description, slider_namespaceObject[`${number}`].price, animeSpaceFromEnd, toOpacity);
  navs.forEach((nav, index) => {
    index == number ? nav.firstElementChild.classList.add('anime') : nav.firstElementChild.classList.remove('anime');
  });
  clearInterval(interval);
  nowInterval();
});
rightButtonSlide.addEventListener('click', () => {
  number == 2 ? number = 0 : number += 1;
  itemSlide.firstChild.animate(animeSpaceToEnd, animeSetting);
  itemSlide.firstChild.animate(toNonOpacity, animeSetting);
  setTimeout(components_Slide, 950, itemSlide, slider_namespaceObject[`${number}`].image, slider_namespaceObject[`${number}`].name, slider_namespaceObject[`${number}`].description, slider_namespaceObject[`${number}`].price, animeSpaceToCenter, toOpacity);
  navs.forEach((nav, index) => {
    index == number ? nav.firstElementChild.classList.add('anime') : nav.firstElementChild.classList.remove('anime');
  });
  clearInterval(interval);
  nowInterval();
});
navs.forEach((nav, index) => {
  nav.addEventListener('click', event => {
    if (event.target == nav) {
      number = index;
      itemSlide.firstChild.animate(animeSpaceFromCenter, animeSetting);
      itemSlide.firstChild.animate(toNonOpacity, animeSetting);
      setTimeout(components_Slide, 1950, itemSlide, slider_namespaceObject[`${number}`].image, slider_namespaceObject[`${number}`].name, slider_namespaceObject[`${number}`].description, slider_namespaceObject[`${number}`].price, animeSpaceFromEnd, toOpacity);
      navs.forEach((nav, index) => {
        index == number ? nav.firstElementChild.classList.add('anime') : nav.firstElementChild.classList.remove('anime');
      });
      clearInterval(interval);
      nowInterval();
    }
  });
});
itemSlide.addEventListener('mouseover', () => {
  pauseInterval = true;
  console.log('true');
  // clearInterval(interval);
  console.log(navs[number]);
  navs[number].firstChild.classList.add("pause-anime");
});
itemSlide.addEventListener('mouseout', () => {
  pauseInterval = false;
  // nowInterval();
  console.log('false');
  console.log(navs[number]);
  navs[number].firstChild.classList.remove("pause-anime");
});
console.log(itemSlide.children);
let touchPoint;
itemSlide.addEventListener('touchstart', event => {
  touchPoint = event.changedTouches[0].clientX;
});
itemSlide.addEventListener('touchend', event => {
  if (event.changedTouches[0].clientX > touchPoint) {
    number == 0 ? number = 2 : number -= 1;
    itemSlide.firstChild.animate(animeSpaceFromCenter, animeSetting);
    itemSlide.firstChild.animate(toNonOpacity, animeSetting);
    setTimeout(components_Slide, 950, itemSlide, slider_namespaceObject[`${number}`].image, slider_namespaceObject[`${number}`].name, slider_namespaceObject[`${number}`].description, slider_namespaceObject[`${number}`].price, animeSpaceFromEnd, toOpacity);
    navs.forEach((nav, index) => {
      index == number ? nav.firstElementChild.classList.add('anime') : nav.firstElementChild.classList.remove('anime');
    });
    clearInterval(interval);
    nowInterval();
  }
  if (event.changedTouches[0].clientX < touchPoint) {
    number == 2 ? number = 0 : number += 1;
    itemSlide.firstChild.animate(animeSpaceToEnd, animeSetting);
    itemSlide.firstChild.animate(toNonOpacity, animeSetting);
    setTimeout(components_Slide, 950, itemSlide, slider_namespaceObject[`${number}`].image, slider_namespaceObject[`${number}`].name, slider_namespaceObject[`${number}`].description, slider_namespaceObject[`${number}`].price, animeSpaceToCenter, toOpacity);
    navs.forEach((nav, index) => {
      index == number ? nav.firstElementChild.classList.add('anime') : nav.firstElementChild.classList.remove('anime');
    });
    clearInterval(interval);
    nowInterval();
  }
});

/***/ }),

/***/ 2251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1864);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8393);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(4027), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(6533), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(8203), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(9540), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about{width:100%;display:flex;align-items:flex-start;flex-wrap:wrap}.about-header{margin:2.4% 0 3% 0%;font-family:"Inter",sans-serif;font-weight:600;line-height:125%;font-size:375%;color:#403f3d}.about-header span{display:inline-block;transform:skewX(6deg);margin:0 1.5% 0 -0.3%;font-style:italic;color:#b0907a}.about-header span:last-of-type{margin:0 0 0 -0.3%}.about div{width:48.5%;border-radius:20px;transition:.5s}.about-girl{margin:0;height:36.9em;display:block;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-position:50% 50%;background-size:110%;background-repeat:no-repeat}.about-man{height:26.9em;margin:0% 0% 0 3%;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_1___});background-position:50% 50%;background-size:110%}.about-cup{height:26.8em;margin:2.8% 3% 5% 0%;display:block;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_2___});background-position:50% 50%;background-size:110%}.about-couple{margin:-9% 0;height:36.9em;display:block;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___});background-position:51% 49%;background-size:110%;background-repeat:no-repeat}@media only screen and (max-width: 1160px)and (min-width: 769px){.about div{background-size:cover;transition:.5s}}@media(hover: hover){.about div:hover{background-size:850px;transition:.5s}.about div:last-of-type:hover,.about div:first-of-type:hover{background-size:850px;transition:.5s}}@media only screen and (max-width: 768px)and (min-width: 381px){.about-header{margin:9.4% 0 5.7% 0%;word-spacing:-0.01em}.about-header span{display:inline;margin:0 1% 0 -0.2%}.about-header span:nth-of-type(2){margin:0 0 0 .8%}.about-header span:last-of-type{margin:0}.about div{width:100%;transition:.5s}.about-girl{margin:0 0 5.5%;height:37em;background-position:48% 50%;background-size:105%}.about-man{display:none}.about-cup{display:none}.about-couple{margin:0;background-position:51% 49%;background-size:105%}}@media only screen and (max-width: 620px)and (min-width: 381px){.about div{background-size:cover;transition:.5s}}@media screen and (max-width: 380px){.about{align-items:center;flex-wrap:nowrap;flex-direction:column}.about-header{margin:1.4% 0% 0% -1%;max-width:99.1379310345%;font-size:195%;letter-spacing:.015em;line-height:128%}.about-header span{display:inline-block}.about div:last-of-type,.about div:first-of-type{display:block;margin:11.5% 0 0%;height:36.9em;width:100%;background-position:50% 50%;background-size:209%;transition:.5s}.about div{display:none}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/about.scss"],"names":[],"mappings":"AAwBA,OACI,UAAA,CACA,YAAA,CACA,sBAAA,CACA,cAAA,CACA,cACI,mBAAA,CATJ,8BAAA,CACA,eAAA,CAUI,gBAAA,CACA,cAAA,CACA,aAlCS,CAmCT,mBACI,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,iBAAA,CACA,aAtCO,CAwCX,gCACI,kBAAA,CAGT,WACK,WAAA,CACA,kBAAA,CACA,cAAA,CAIJ,YACI,QAAA,CACA,aAAA,CACA,aAAA,CACA,wDAAA,CACA,2BAAA,CACA,oBAAA,CACA,2BAAA,CAEJ,WACI,aAAA,CACA,iBAAA,CACA,wDAAA,CACA,2BAAA,CACA,oBAAA,CAEJ,WACI,aAAA,CACA,oBAAA,CACA,aAAA,CACA,wDAAA,CACA,2BAAA,CACA,oBAAA,CAEJ,cACI,YAAA,CACA,aAAA,CACA,aAAA,CACA,wDAAA,CACA,2BAAA,CACA,oBAAA,CACA,2BAAA,CAGR,iEAEQ,WACA,qBAAA,CACA,cAAA,CAAA,CAKR,qBAEI,iBACI,qBAAA,CACA,cAAA,CAEJ,6DAEI,qBAAA,CACA,cAAA,CAAA,CAIR,gEAEQ,cACI,qBAAA,CACA,oBAAA,CACF,mBACE,cAAA,CACA,mBAAA,CAED,kCACC,gBAAA,CAED,gCACC,QAAA,CAGJ,WACI,UAAA,CACA,cAAA,CAEJ,YACI,eAAA,CACA,WAAA,CACA,2BAAA,CACA,oBAAA,CAEJ,WACI,YAAA,CAEJ,WACI,YAAA,CAEJ,cACI,QAAA,CACA,2BAAA,CACA,oBAAA,CAAA,CAKZ,gEAEQ,WACA,qBAAA,CACA,cAAA,CAAA,CAIR,qCACI,OACI,kBAAA,CACA,gBAAA,CACA,qBAAA,CACA,cACI,qBAAA,CACA,wBAAA,CACA,cAAA,CACA,qBAAA,CACA,gBAAA,CACA,mBACI,oBAAA,CAGR,iDAEI,aAAA,CACA,iBAAA,CACA,aAAA,CACA,UAAA,CACA,2BAAA,CACA,oBAAA,CACA,cAAA,CAEJ,WACI,YAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.about{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-wrap:wrap;\r\n    &-header{\r\n        margin: 2.4% 0 3% 0%;\r\n        @include inter_600;\r\n        line-height: 125%;\r\n        font-size: 375%;\r\n        color:$color-text-dark;\r\n        span{\r\n            display: inline-block;\r\n            transform: skewX(6deg);\r\n            margin: 0 1.5% 0 -0.3%;\r\n            font-style: italic;\r\n            color:$color-text-accent;\r\n        }\r\n        span:last-of-type{\r\n            margin: 0 0 0 -0.3%; \r\n        }\r\n    }\r\n   div{\r\n        width: 48.5%;\r\n        border-radius: 20px;\r\n        transition: 0.5s;\r\n    }\r\n   \r\n    \r\n    &-girl{\r\n        margin: 0;\r\n        height: 36.9em;\r\n        display: block;\r\n        background-image: url(./../assets/images/about-girl.jpg);\r\n        background-position: 50% 50%;\r\n        background-size: 110%;\r\n        background-repeat: no-repeat;\r\n    }\r\n    &-man{\r\n        height: 26.9em;\r\n        margin: 0% 0% 0 3%;\r\n        background-image: url(./../assets/images/about-man.jpg);\r\n        background-position: 50% 50%;\r\n        background-size: 110%;\r\n    }\r\n    &-cup{\r\n        height: 26.8em;\r\n        margin: 2.8% 3% 5% 0%;\r\n        display: block;\r\n        background-image: url(./../assets/images/about-cup.jpg);\r\n        background-position: 50% 50%;\r\n        background-size: 110%;\r\n    }\r\n    &-couple{\r\n        margin: -9% 0;\r\n        height: 36.9em;\r\n        display: block;\r\n        background-image: url(./../assets/images/about-couple.jpg);\r\n        background-position: 51% 49%;\r\n        background-size: 110%;\r\n        background-repeat: no-repeat;\r\n    }\r\n}\r\n@media only screen and (max-width:1160px) and (min-width:769px){\r\n    .about{\r\n        div{\r\n        background-size: cover;\r\n        transition: 0.5s;\r\n        }\r\n    }\r\n}\r\n\r\n@media (hover:hover){\r\n  .about{\r\n    div:hover{\r\n        background-size: 850px;\r\n        transition: 0.5s;\r\n    }\r\n    div:last-of-type:hover,\r\n    div:first-of-type:hover{\r\n        background-size: 850px;\r\n        transition: 0.5s;\r\n    }\r\n  }\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .about{\r\n        &-header{\r\n            margin: 9.4% 0 5.7% 0%;\r\n            word-spacing: -0.01em;\r\n          span{\r\n            display: inline;\r\n            margin: 0 1% 0 -0.2%;\r\n           }\r\n           span:nth-of-type(2){\r\n            margin: 0 0 0 0.8%;\r\n           }\r\n           span:last-of-type{\r\n            margin: 0;\r\n           }\r\n        }\r\n        div{\r\n            width: 100%;\r\n            transition: 0.5s;\r\n        }\r\n        &-girl{\r\n            margin: 0 0 5.5%;\r\n            height: 37em;\r\n            background-position: 48% 50%;\r\n            background-size: 105%;\r\n        }\r\n        &-man{\r\n            display: none;\r\n        }\r\n        &-cup{\r\n            display: none;\r\n        }\r\n        &-couple{\r\n            margin: 0;\r\n            background-position: 51% 49%;\r\n            background-size: 105%;\r\n        }\r\n    }\r\n \r\n}\r\n@media only screen and (max-width: 620px) and (min-width:381px){\r\n    .about{\r\n        div{\r\n        background-size: cover;\r\n        transition: 0.5s;\r\n        }\r\n    }\r\n}\r\n@media screen and (max-width: 380px){\r\n    .about{\r\n        align-items: center;\r\n        flex-wrap: nowrap;\r\n        flex-direction: column;\r\n        &-header{\r\n            margin: 1.4% 0% 0% -1%;\r\n            max-width: calc(345/348*100%);\r\n            font-size: 195%;\r\n            letter-spacing: 0.015em;\r\n            line-height: 128%;\r\n            span{\r\n                display: inline-block;\r\n            }\r\n        }\r\n        div:last-of-type,\r\n        div:first-of-type{\r\n            display: block;\r\n            margin: 11.5% 0 0%;\r\n            height: 36.9em;\r\n            width: 100%;\r\n            background-position: 50% 50%;\r\n            background-size: 209%;\r\n            transition: 0.5s;\r\n        }\r\n        div{\r\n            display: none;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1864);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8393);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(6655), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.app{width:100%;display:flex;flex-direction:column;align-items:flex-start;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-repeat:no-repeat;background-position:100.3% 34%;background-size:46.5%}.app-header{margin:13% 0 0 0%;width:46%;font-family:"Inter",sans-serif;font-weight:600;font-size:375%;line-height:127%;color:#403f3d}.app-header span{display:inline-block;transform:skewX(-8deg);font-family:"Inter",sans-serif;font-weight:600;line-height:125%;color:#b0907a}.app-text{margin:3% 0 2% 0%;width:47%;font-family:"Inter",sans-serif;font-weight:400;font-size:100%;line-height:150%;color:#403f3d}.app-btn-group{display:flex;width:31%;margin:1% 0% 15.5%;justify-content:space-between}.app-btn-group .app-btn-apple{margin:0;padding:3% .8%;border-radius:100px;border:1px solid #665f55;transition:.5s}.app-btn-group .app-btn-apple a{display:flex;font-family:"Inter",sans-serif;font-weight:600;font-size:.7vw;line-height:140%;color:#403f3d}.app-btn-group .app-btn-apple a svg{width:18%;margin:0 0 0 9%;fill:none}.app-btn-group .app-btn-apple a p{width:48%;margin:0 0% 0 3.7%}.app-btn-group .app-btn-apple a p span{font-size:1vw;display:inline-block;margin:6% 0 0 0;letter-spacing:.08em}.app-btn-group .app-btn-google{margin:0 0 0 4%;padding:3% .5%;width:48%;border-radius:100px;border:1px solid #665f55;transition:.5s}.app-btn-group .app-btn-google a{display:flex;font-family:"Inter",sans-serif;font-weight:600;font-size:.7vw;line-height:140%;color:#403f3d}.app-btn-group .app-btn-google a svg{width:18%;margin:0 0 0 9%;color:#665f55}.app-btn-group .app-btn-google a p{width:48%;margin:0 0% 0 3.7%}.app-btn-group .app-btn-google a p span{font-size:1vw;display:inline-block;margin:6% 0 0 0;letter-spacing:.07em}@media only screen and (min-width: 1441px){.app-btn-group{display:flex;width:31%;margin:1% 0% 15.5%;justify-content:space-between}.app-btn-group .app-btn-apple{margin:0;padding:3% .8%;width:48%;border-radius:100px;border:1px solid #665f55;transition:.5s}.app-btn-group .app-btn-apple a{display:flex;font-family:"Inter",sans-serif;font-weight:600;font-size:68%;line-height:140%;color:#403f3d}.app-btn-group .app-btn-apple a svg{width:18%;margin:0 0 0 9%;fill:none}.app-btn-group .app-btn-apple a p{width:48%;margin:0 0% 0 3.7%}.app-btn-group .app-btn-apple a p span{font-size:136%;display:inline-block;margin:6% 0 0 0;letter-spacing:.08em}.app-btn-group .app-btn-google{margin:0 0 0 4%;padding:3% .5%;width:48%;border-radius:100px;border:1px solid #665f55;transition:.5s}.app-btn-group .app-btn-google a{display:flex;font-family:"Inter",sans-serif;font-weight:600;font-size:68%;line-height:140%;color:#403f3d}.app-btn-group .app-btn-google a svg{width:18%;margin:0 0 0 9%;color:#665f55}.app-btn-group .app-btn-google a p{width:48%;margin:0 0% 0 3.7%}.app-btn-group .app-btn-google a p span{font-size:129%;display:inline-block;margin:3% 0 0 0;letter-spacing:.07em}.app-btn-group div:hover{background-color:#665f55;cursor:pointer;transition:.5s}.app-btn-group div:hover a svg path{fill:#e1d4c9}.app-btn-group div:hover a p{color:#e1d4c9}}@media only screen and (max-width: 1440px)and (min-width: 769px){.app-btn-group{display:flex;width:31%;margin:1% 0% 15.5%;justify-content:space-between}.app-btn-group .app-btn-apple{margin:0;padding:3% .8%;border-radius:100px;border:1px solid #665f55;transition:.5s}.app-btn-group .app-btn-apple a{display:flex;font-family:"Inter",sans-serif;font-weight:600;font-size:.7vw;line-height:140%;color:#403f3d}.app-btn-group .app-btn-apple a svg{width:18%;margin:0 0 0 9%;fill:none}.app-btn-group .app-btn-apple a p{width:48%;margin:0 0% 0 3.7%}.app-btn-group .app-btn-apple a p span{font-size:1vw;display:inline-block;margin:6% 0 0 0;letter-spacing:.08em}.app-btn-group .app-btn-google{margin:0 0 0 4%;padding:3% .5%;width:48%;border-radius:100px;border:1px solid #665f55;transition:.5s}.app-btn-group .app-btn-google a{display:flex;font-family:"Inter",sans-serif;font-weight:600;font-size:.7vw;line-height:140%;color:#403f3d}.app-btn-group .app-btn-google a svg{width:18%;margin:0 0 0 9%;color:#665f55}.app-btn-group .app-btn-google a p{width:48%;margin:0 0% 0 3.7%}.app-btn-group .app-btn-google a p span{font-size:1vw;display:inline-block;margin:6% 0 0 0;letter-spacing:.07em}.app-btn-group div:hover{background-color:#665f55;cursor:pointer;transition:.5s}.app-btn-group div:hover a svg path{fill:#e1d4c9}.app-btn-group div:hover a p{color:#e1d4c9}}@media(hover: hover){.app-btn-group div:hover{background-color:#665f55;cursor:pointer;transition:.5s}.app-btn-group div:hover a svg path{fill:#e1d4c9}.app-btn-group div:hover a p{color:#e1d4c9}}@media only screen and (max-width: 768px)and (min-width: 381px){.app{background-size:91%;background-position:50% 86.5%}.app-header{margin:14.7% 0 0 .1%;width:100%}.app-text{margin:5.8% 0 4.7% .1%;width:100%}.app-btn-group{width:61.0465116279%;margin:.9% 0% 118.2% -0.3%}.app-btn-group .app-btn-apple{width:47.619047619%;padding:2.9% .5%}.app-btn-group .app-btn-apple a{font-size:clamp(5px,50%,10px)}.app-btn-group .app-btn-apple a svg{width:18%}.app-btn-group .app-btn-apple a p{margin:0 0% 0 5.7%;font-size:1.3vw}.app-btn-group .app-btn-apple a p span{font-size:1.8vw}.app-btn-group .app-btn-google{width:47.619047619%;padding:2.9% .5%}.app-btn-group .app-btn-google a{font-size:clamp(5px,50%,10px)}.app-btn-group .app-btn-google a svg{width:18%}.app-btn-group .app-btn-google a p{margin:0 0% 0 5.7%;font-size:1.3vw}.app-btn-group .app-btn-google a p span{font-size:1.8vw}}@media only screen and (max-width: 620px)and (min-width: 381px){.app-btn-group{width:80%}.app-btn-group .app-btn-apple a p{margin:0 0% 0 3.7%;padding:3% 0 0 0}.app-btn-group .app-btn-apple a p span{font-size:166%;margin:13% 0 0 0}.app-btn-group .app-btn-google a p{margin:0 0% 0 3.7%;padding:3% 0 0 0}.app-btn-group .app-btn-google a p span{font-size:166%;margin:13% 0 0 0}}@media screen and (max-width: 380px){.app{background-position:50% 85%;background-size:100%}.app-header{width:98%;margin:28.3% 0 0;font-size:192%;letter-spacing:.02em;line-height:131%}.app-header span{margin:0 .3% 0 0;font-size:107%;letter-spacing:-0.02em}.app-text{width:98%;margin:11.8% 0 10.7% .1%}.app-btn-group{width:57.4712643678%;margin:0% 0% 137.5% 0%;flex-direction:column}.app-btn-group .app-btn-apple{width:100%;padding:7% .8%;margin:0 0 10%}.app-btn-group .app-btn-apple a p{margin:2% 0 0 5%;font-size:10px}.app-btn-group .app-btn-apple a p span{font-size:3.7vw;margin:18% 0 0}.app-btn-group .app-btn-google{padding:6.5% .8%;width:100%;margin:0}.app-btn-group .app-btn-google a p{margin:3% 0 0 5%;font-size:10px}.app-btn-group .app-btn-google a p span{font-size:14px;margin:18% 0 0}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/app.scss"],"names":[],"mappings":"AAyBA,KACI,UAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,wDAAA,CACA,2BAAA,CACA,8BAAA,CACA,qBAAA,CACA,YACI,iBAAA,CACA,SAAA,CAfJ,8BAAA,CACA,eAAA,CAgBI,cAAA,CACA,gBAAA,CACA,aAxCS,CAyCT,iBACI,oBAAA,CACA,sBAAA,CAtBR,8BAAA,CACA,eAAA,CAuBQ,gBAAA,CACA,aA5CO,CA+Cf,UACI,iBAAA,CACA,SAAA,CAnCJ,8BAAA,CACA,eAAA,CAoCI,cAAA,CACA,gBAAA,CACA,aAvDS,CAyDb,eACI,YAAA,CACA,SAAA,CACA,kBAAA,CACA,6BAAA,CACA,8BACI,QAAA,CACA,cAAA,CACA,mBAAA,CACA,wBAAA,CACA,cAAA,CACA,gCACI,YAAA,CAhDZ,8BAAA,CACA,eAAA,CAiDY,cAAA,CACA,gBAAA,CACA,aAzEC,CA0ED,oCACI,SAAA,CACA,eAAA,CACA,SAAA,CAEJ,kCACI,SAAA,CACA,kBAAA,CACA,uCACI,aAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CAMhB,+BACI,eAAA,CACA,cAAA,CACA,SAAA,CACA,mBAAA,CACA,wBAAA,CACA,cAAA,CACA,iCACI,YAAA,CA/EZ,8BAAA,CACA,eAAA,CAgFY,cAAA,CACA,gBAAA,CACA,aAxGC,CAyGD,qCACI,SAAA,CACA,eAAA,CACA,aArGD,CAuGH,mCACI,SAAA,CACA,kBAAA,CACA,wCACI,aAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CASxB,2CACI,eACI,YAAA,CACA,SAAA,CACA,kBAAA,CACA,6BAAA,CACA,8BACI,QAAA,CACA,cAAA,CACA,SAAA,CACA,mBAAA,CACA,wBAAA,CACA,cAAA,CACA,gCACI,YAAA,CAvHZ,8BAAA,CACA,eAAA,CAwHY,aAAA,CACA,gBAAA,CACA,aAhJC,CAiJD,oCACI,SAAA,CACA,eAAA,CACA,SAAA,CAEJ,kCACI,SAAA,CACA,kBAAA,CACA,uCACI,cAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CAMhB,+BACI,eAAA,CACA,cAAA,CACA,SAAA,CACA,mBAAA,CACA,wBAAA,CACA,cAAA,CACA,iCACI,YAAA,CAtJZ,8BAAA,CACA,eAAA,CAuJY,aAAA,CACA,gBAAA,CACA,aA/KC,CAgLD,qCACI,SAAA,CACA,eAAA,CACA,aA5KD,CA8KH,mCACI,SAAA,CACA,kBAAA,CACA,wCACI,cAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CAMhB,yBACI,wBA/LgB,CAgMhB,cAAA,CACA,cAAA,CAGQ,oCACI,YAxMN,CA4MF,6BACI,aA7MF,CAAA,CAoNlB,iEACI,eACI,YAAA,CACA,SAAA,CACA,kBAAA,CACA,6BAAA,CACA,8BACI,QAAA,CACA,cAAA,CACA,mBAAA,CACA,wBAAA,CACA,cAAA,CACA,gCACI,YAAA,CA7MZ,8BAAA,CACA,eAAA,CA8MY,cAAA,CACA,gBAAA,CACA,aAtOC,CAuOD,oCACI,SAAA,CACA,eAAA,CACA,SAAA,CAEJ,kCACI,SAAA,CACA,kBAAA,CACA,uCACI,aAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CAMhB,+BACI,eAAA,CACA,cAAA,CACA,SAAA,CACA,mBAAA,CACA,wBAAA,CACA,cAAA,CACA,iCACI,YAAA,CA5OZ,8BAAA,CACA,eAAA,CA6OY,cAAA,CACA,gBAAA,CACA,aArQC,CAsQD,qCACI,SAAA,CACA,eAAA,CACA,aAlQD,CAoQH,mCACI,SAAA,CACA,kBAAA,CACA,wCACI,aAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CAMhB,yBACI,wBArRgB,CAsRhB,cAAA,CACA,cAAA,CAGQ,oCACI,YA9RN,CAkSF,6BACI,aAnSF,CAAA,CA0SlB,qBAEQ,yBACA,wBA1SoB,CA2SpB,cAAA,CACA,cAAA,CAGQ,oCACI,YAnTF,CAuTN,6BACI,aAxTE,CAAA,CA8TlB,gEACI,KACI,mBAAA,CACA,6BAAA,CACA,YACI,oBAAA,CACA,UAAA,CAEJ,UACI,sBAAA,CACA,UAAA,CAEJ,eACI,oBAAA,CACA,0BAAA,CACA,8BACI,mBAAA,CACA,gBAAA,CACA,gCACI,6BAAA,CACA,oCACI,SAAA,CAGJ,kCACI,kBAAA,CACA,eAAA,CACA,uCACI,eAAA,CAOhB,+BACI,mBAAA,CACA,gBAAA,CACA,iCACI,6BAAA,CACA,qCACI,SAAA,CAGJ,mCACI,kBAAA,CACA,eAAA,CACA,wCACI,eAAA,CAAA,CAS5B,gEACI,eACI,SAAA,CAGQ,kCACI,kBAAA,CACA,gBAAA,CACA,uCACI,cAAA,CACA,gBAAA,CAOR,mCACI,kBAAA,CACA,gBAAA,CACA,wCACI,cAAA,CACA,gBAAA,CAAA,CAQxB,qCACI,KACI,2BAAA,CACA,oBAAA,CACA,YACI,SAAA,CACA,gBAAA,CACA,cAAA,CACA,oBAAA,CACA,gBAAA,CACA,iBACI,gBAAA,CACA,cAAA,CACA,sBAAA,CAGR,UACI,SAAA,CACA,wBAAA,CAEJ,eACI,oBAAA,CACA,sBAAA,CACA,qBAAA,CACA,8BACI,UAAA,CACA,cAAA,CACA,cAAA,CAEI,kCACI,gBAAA,CACA,cAAA,CACA,uCACI,eAAA,CACA,cAAA,CAKhB,+BACI,gBAAA,CACA,UAAA,CACA,QAAA,CAEA,mCACI,gBAAA,CACA,cAAA,CACA,wCACI,cAAA,CACA,cAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n\r\n.app{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    background-image: url('./../assets/images/mobile-screens.png');\r\n    background-repeat: no-repeat;\r\n    background-position: 100.3% 34%;\r\n    background-size: 46.5%;\r\n    &-header{\r\n        margin: 13% 0 0 0%;\r\n        width: 46%;\r\n        @include inter_600;\r\n        font-size: 375%;\r\n        line-height: 127%;\r\n        color:$color-text-dark;\r\n        span{\r\n            display: inline-block;\r\n            transform: skewX(-8deg);\r\n            @include inter_600;\r\n            line-height: 125%;\r\n            color:$color-text-accent;\r\n        }\r\n    }\r\n    &-text{\r\n        margin: 3% 0 2% 0%;\r\n        width: 47%;\r\n        @include inter_400;\r\n        font-size: 100%;\r\n        line-height: 150%;\r\n        color:$color-text-dark;\r\n    }\r\n    &-btn-group{\r\n        display: flex;\r\n        width: 31%;\r\n        margin: 1% 0% 15.5%;\r\n        justify-content: space-between;\r\n        .app-btn-apple{\r\n            margin: 0;\r\n            padding: 3% 0.8%;\r\n            border-radius: 100px;\r\n            border: 1px solid $color-border-dark;\r\n            transition: 0.5s;\r\n            a{\r\n                display: flex;\r\n                @include inter_600;\r\n                font-size: 0.7vw;\r\n                line-height: 140%;\r\n                color: $color-text-dark;\r\n                svg{\r\n                    width: calc(36/200*100%);\r\n                    margin: 0 0 0 9%;\r\n                    fill:none;\r\n                }\r\n                p{\r\n                    width: 48%;\r\n                    margin: 0 0% 0 3.7%;\r\n                    span{\r\n                        font-size: 1vw;\r\n                        display: inline-block;\r\n                        margin: 6% 0 0 0;\r\n                        letter-spacing: 0.08em;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n        .app-btn-google{\r\n            margin: 0 0 0 4%;\r\n            padding: 3% 0.5%;\r\n            width: 48%;\r\n            border-radius: 100px;\r\n            border: 1px solid $color-border-dark;\r\n            transition: 0.5s;\r\n            a{\r\n                display: flex;\r\n                @include inter_600;\r\n                font-size: 0.7vw;\r\n                line-height: 140%;\r\n                color: $color-text-dark;\r\n                svg{\r\n                    width: calc(36/200*100%);\r\n                    margin: 0 0 0 9%;\r\n                    color:$color-border-dark; \r\n                }\r\n                p{\r\n                    width: 48%;\r\n                    margin: 0 0% 0 3.7%;\r\n                    span{\r\n                        font-size: 1vw;\r\n                        display: inline-block;\r\n                        margin: 6% 0 0 0;\r\n                        letter-spacing: 0.07em;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:1441px){\r\n    .app-btn-group{\r\n        display: flex;\r\n        width: 31%;\r\n        margin: 1% 0% 15.5%;\r\n        justify-content: space-between;\r\n        .app-btn-apple{\r\n            margin: 0;\r\n            padding: 3% 0.8%;\r\n            width: 48%;\r\n            border-radius: 100px;\r\n            border: 1px solid $color-border-dark;\r\n            transition: 0.5s;\r\n            a{\r\n                display: flex;\r\n                @include inter_600;\r\n                font-size: 68%;\r\n                line-height: 140%;\r\n                color: $color-text-dark;\r\n                svg{\r\n                    width: calc(36/200*100%);\r\n                    margin: 0 0 0 9%;\r\n                    fill:none;\r\n                }\r\n                p{\r\n                    width: 48%;\r\n                    margin: 0 0% 0 3.7%;\r\n                    span{\r\n                        font-size:136%;\r\n                        display: inline-block;\r\n                        margin: 6% 0 0 0;\r\n                        letter-spacing: 0.08em;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n        .app-btn-google{\r\n            margin: 0 0 0 4%;\r\n            padding: 3% 0.5%;\r\n            width: 48%;\r\n            border-radius: 100px;\r\n            border: 1px solid $color-border-dark;\r\n            transition: 0.5s;\r\n            a{\r\n                display: flex;\r\n                @include inter_600;\r\n                font-size: 68%;\r\n                line-height: 140%;\r\n                color: $color-text-dark;\r\n                svg{\r\n                    width: calc(36/200*100%);\r\n                    margin: 0 0 0 9%;\r\n                    color:$color-border-dark; \r\n                }\r\n                p{\r\n                    width: 48%;\r\n                    margin: 0 0% 0 3.7%;\r\n                    span{\r\n                        font-size: 129%;\r\n                        display: inline-block;\r\n                        margin: 3% 0 0 0;\r\n                        letter-spacing: 0.07em;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n        div:hover{\r\n            background-color: $color-background-container;\r\n            cursor: pointer;\r\n            transition: 0.5s;\r\n            a{\r\n                svg{\r\n                    path{\r\n                        fill:$color-text-light;\r\n                    }\r\n                    \r\n                }\r\n                p{\r\n                    color:$color-text-light;\r\n                }\r\n            }\r\n           \r\n        }\r\n    }\r\n} \r\n@media only screen and (max-width: 1440px) and (min-width:769px){\r\n    .app-btn-group{\r\n        display: flex;\r\n        width: 31%;\r\n        margin: 1% 0% 15.5%;\r\n        justify-content: space-between;\r\n        .app-btn-apple{\r\n            margin: 0;\r\n            padding: 3% 0.8%;\r\n            border-radius: 100px;\r\n            border: 1px solid $color-border-dark;\r\n            transition: 0.5s;\r\n            a{\r\n                display: flex;\r\n                @include inter_600;\r\n                font-size: 0.7vw;\r\n                line-height: 140%;\r\n                color: $color-text-dark;\r\n                svg{\r\n                    width: calc(36/200*100%);\r\n                    margin: 0 0 0 9%;\r\n                    fill:none;\r\n                }\r\n                p{\r\n                    width: 48%;\r\n                    margin: 0 0% 0 3.7%;\r\n                    span{\r\n                        font-size: 1vw;\r\n                        display: inline-block;\r\n                        margin: 6% 0 0 0;\r\n                        letter-spacing: 0.08em;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n        .app-btn-google{\r\n            margin: 0 0 0 4%;\r\n            padding: 3% 0.5%;\r\n            width: 48%;\r\n            border-radius: 100px;\r\n            border: 1px solid $color-border-dark;\r\n            transition: 0.5s;\r\n            a{\r\n                display: flex;\r\n                @include inter_600;\r\n                font-size: 0.7vw;\r\n                line-height: 140%;\r\n                color: $color-text-dark;\r\n                svg{\r\n                    width: calc(36/200*100%);\r\n                    margin: 0 0 0 9%;\r\n                    color:$color-border-dark; \r\n                }\r\n                p{\r\n                    width: 48%;\r\n                    margin: 0 0% 0 3.7%;\r\n                    span{\r\n                        font-size: 1vw;\r\n                        display: inline-block;\r\n                        margin: 6% 0 0 0;\r\n                        letter-spacing: 0.07em;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n        div:hover{\r\n            background-color: $color-background-container;\r\n            cursor: pointer;\r\n            transition: 0.5s;\r\n            a{\r\n                svg{\r\n                    path{\r\n                        fill:$color-text-light;\r\n                    }\r\n                    \r\n                }\r\n                p{\r\n                    color:$color-text-light;\r\n                }\r\n            }\r\n           \r\n        }\r\n}\r\n}\r\n@media (hover:hover){\r\n    .app-btn-group{\r\n        div:hover{\r\n        background-color: $color-background-container;\r\n        cursor: pointer;\r\n        transition: 0.5s;\r\n        a{\r\n            svg{\r\n                path{\r\n                    fill:$color-text-light;\r\n                }\r\n                \r\n            }\r\n            p{\r\n                color:$color-text-light;\r\n            }\r\n        }\r\n    }\r\n    }\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .app{\r\n        background-size: 91%;\r\n        background-position: 50% 86.5%;\r\n        &-header{\r\n            margin: 14.7% 0 0 0.1%;\r\n            width: 100%;\r\n        }\r\n        &-text{\r\n            margin: 5.8% 0 4.7% 0.1%;\r\n            width: 100%;\r\n        }\r\n        &-btn-group{\r\n            width: calc(420/688*100%);\r\n            margin: 0.9% 0% 118.2% -0.3%;\r\n            .app-btn-apple{\r\n                width: calc(200/420*100%);\r\n                padding: 2.9% 0.5%;\r\n                a{\r\n                    font-size: clamp(5px, 50%, 10px);\r\n                    svg{\r\n                        width: calc(36/200*100%);\r\n                    }\r\n                    \r\n                    p{\r\n                        margin: 0 0% 0 5.7%;\r\n                        font-size: 1.3vw;\r\n                        span{\r\n                            font-size: 1.8vw;\r\n                        }\r\n                        \r\n                    }\r\n                }\r\n              \r\n            }\r\n            .app-btn-google{\r\n                width: calc(200/420*100%);\r\n                padding: 2.9% 0.5%;\r\n                a{\r\n                    font-size: clamp(5px, 50%, 10px);\r\n                    svg{\r\n                        width: calc(36/200*100%);\r\n                    }\r\n                    \r\n                    p{\r\n                        margin: 0 0% 0 5.7%;\r\n                        font-size: 1.3vw;\r\n                        span{\r\n                            font-size: 1.8vw;\r\n                        }\r\n                        \r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n@media only screen and (max-width: 620px) and (min-width:381px){\r\n    .app-btn-group{\r\n        width: 80%;\r\n        .app-btn-apple{\r\n            a{\r\n                p{\r\n                    margin: 0 0% 0 3.7%;\r\n                    padding: 3% 0 0 0;\r\n                    span{\r\n                        font-size: 166%;\r\n                        margin: 13% 0 0 0;\r\n                    }\r\n                }               \r\n            }\r\n        }\r\n        .app-btn-google{\r\n            a{\r\n                p{\r\n                    margin: 0 0% 0 3.7%;\r\n                    padding: 3% 0 0 0;\r\n                    span{\r\n                        font-size: 166%;\r\n                        margin: 13% 0 0 0;\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n    }\r\n}\r\n@media screen and (max-width: 380px){\r\n    .app{\r\n        background-position: 50% 85%;\r\n        background-size: 100%;\r\n        &-header{\r\n            width: 98%;\r\n            margin: 28.3% 0 0;\r\n            font-size: 192%;\r\n            letter-spacing: 0.02em;\r\n            line-height: 131%;\r\n            span{\r\n                margin: 0 0.3% 0 0;\r\n                font-size: 107%;\r\n                letter-spacing: -0.02em;\r\n            }\r\n        }\r\n        &-text{\r\n            width: 98%;\r\n            margin: 11.8% 0 10.7% 0.1%;\r\n        }\r\n        &-btn-group{\r\n            width: calc(200/348*100%);\r\n            margin: 0% 0% 137.5% 0%;\r\n            flex-direction: column;\r\n            .app-btn-apple{\r\n                width: 100%;\r\n                padding: 7% 0.8%;\r\n                margin: 0 0 10%;\r\n                a{\r\n                    p{\r\n                        margin: 2% 0 0 5%;\r\n                        font-size: 10px;\r\n                        span{\r\n                            font-size: 3.7vw;\r\n                            margin: 18% 0 0;\r\n                    }\r\n                } \r\n            }           \r\n            }\r\n            .app-btn-google{\r\n                padding: 6.5% 0.8%;\r\n                width: 100%;\r\n                margin: 0;\r\n               a{\r\n                p{\r\n                    margin: 3% 0 0 5%;\r\n                    font-size: 10px;\r\n                    span{\r\n                        font-size: 14px;\r\n                        margin: 18% 0 0;\r\n                    }\r\n                }\r\n              \r\n               }\r\n\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1864);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.enjoy{position:relative;width:100%;margin:1.15% auto;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;border-radius:40px}.enjoy #background-video{position:absolute;width:100%;object-fit:cover;height:40.2em;border-radius:40px;z-index:0}.enjoy-header{position:relative;z-index:1;max-width:38.9705882353%;margin:7.5% 39% 3% 7.3%;color:#e1d4c9;font-family:"Inter",sans-serif;font-weight:600;font-style:normal;line-height:110%;font-size:425%;display:block;word-spacing:0;letter-spacing:.03em}.enjoy-header span{display:inline-block;color:#b0907a;font-family:"Inter",sans-serif;font-weight:600;font-style:italic;line-height:105%;font-size:105%;transform:skew(6deg);margin:-1% 1.5% 0 -1%;letter-spacing:.01em}.enjoy-text{position:relative;z-index:1;max-width:38.9705882353%;margin:0% 0 .7% 7.3%;color:#e1d4c9;font-family:"Inter",sans-serif;font-weight:400;font-size:100%;line-height:152%}.enjoy a{position:relative;z-index:1;width:clamp(100px,15%,200px);display:flex;justify-content:center;padding-top:1.6%;padding-right:5.5%;padding-bottom:1.6%;padding-left:5.5%;margin:2.2% 0% 7.45% 7.35%;border-radius:35px;background-color:#e1d4c9;border:1px solid #e1d4c9;transition:.5s;align-items:center;font-family:"Inter",sans-serif;font-weight:600;font-size:clamp(15px,95%,32px);font-style:normal;color:#403f3d;transition:.5s}.enjoy a svg{margin:0% 0 0 4%}.enjoy a svg path{transition:.5s}@media(hover: hover){.enjoy a:hover{padding-right:0;padding-left:0;cursor:pointer;transition:.5s}.enjoy a:hover svg{transition:.5s;width:clamp(1.5vw,20px,4vw)}.enjoy a:hover svg path{stroke:#403f3d}}@media only screen and (max-width: 768px)and (min-width: 381px){.enjoy{background-position:50% 69%;margin:1.2% auto}.enjoy #background-video{height:clamp(380px,38em,470px)}.enjoy-header{max-width:75.5208333333%;margin:14.8% 1% 6% 8.6%;font-size:8.9vw}.enjoy-header span{margin:-1% .8% 0 -1%}.enjoy-text{max-width:75.5208333333%;margin:.2% 0 .7% 8.8%}.enjoy a{width:clamp(100px,29%,200px);padding:3.2% 0;margin:4.9% 0% 14.4% 8.8%;font-size:clamp(9px,2.5vw,16px)}.enjoy a svg{width:clamp(20px,1.3vw,25px);margin:0% 0 0 4%}.enjoy a svg path{stroke:#403f3d}}@media screen and (max-width: 380px){.enjoy{margin:0}.enjoy #background-video{height:34.5em}.enjoy-header{max-width:90.8045977011%;margin:17.5% 0 12% 4.5%;font-size:245%;line-height:122%;word-spacing:1px;letter-spacing:.035em}.enjoy-text{max-width:90.8045977011%;margin:0% 0 6.2% 4.8%;line-height:150%}.enjoy a{width:57.4712643678%;padding:5.9% 63px;margin:5% 0% 17.5% 4.6%;font-size:4.3vw}.enjoy a svg{width:2.5em;margin:0% 0 0 4%}.enjoy a svg path{stroke:#403f3d}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/enjoy.scss"],"names":[],"mappings":"AAwBA,OACI,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yBACI,iBAAA,CACA,UAAA,CACA,gBAAA,CACA,aAAA,CACA,kBAAA,CACA,SAAA,CAEJ,cAYI,iBAAA,CACA,SAAA,CACA,wBAAA,CACA,uBAAA,CACA,aAxDU,CAoBd,8BAAA,CACA,eAAA,CAqCI,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,aAAA,CACA,cAAA,CACA,oBAAA,CAtBA,mBACI,oBAAA,CACA,aA1CO,CAmBf,8BAAA,CACA,eAAA,CAwBQ,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,oBAAA,CACA,qBAAA,CACA,oBAAA,CAeR,YACI,iBAAA,CACA,SAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAtEU,CAed,8BAAA,CACA,eAAA,CAwDI,cAAA,CACA,gBAAA,CAEJ,SACI,iBAAA,CACA,SAAA,CACA,4BAAA,CACA,YAAA,CACA,sBAAA,CACA,gBAAA,CACA,kBAAA,CACA,mBAAA,CACA,iBAAA,CACA,0BAAA,CACA,kBAAA,CACA,wBAvFU,CAwFV,wBAAA,CACA,cAAA,CACA,kBAAA,CAtEJ,8BAAA,CACA,eAAA,CAuEI,8BAAA,CACA,iBAAA,CACA,aA/FS,CAgGT,cAAA,CACI,aACI,gBAAA,CAEA,kBACI,cAAA,CAMpB,qBAEI,eACI,eAAA,CACA,cAAA,CACA,cAAA,CACA,cAAA,CACA,mBACI,cAAA,CACA,2BAAA,CACA,wBACA,cAAA,CAAA,CAOZ,gEACI,OACI,2BAAA,CACA,gBAAA,CACA,yBACI,8BAAA,CAEJ,cACI,wBAAA,CACA,uBAAA,CACA,eAAA,CACA,mBACI,oBAAA,CAGR,YACI,wBAAA,CACA,qBAAA,CAEL,SACK,4BAAA,CACA,cAAA,CACA,yBAAA,CACA,+BAAA,CACI,aACI,4BAAA,CACA,gBAAA,CACA,kBACA,cAAA,CAAA,CAQpB,qCACI,OACI,QAAA,CACA,yBACI,aAAA,CAEJ,cACI,wBAAA,CACA,uBAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,qBAAA,CAEJ,YACI,wBAAA,CACA,qBAAA,CACA,gBAAA,CAEJ,SACI,oBAAA,CACA,iBAAA,CACA,uBAAA,CACA,eAAA,CACI,aACI,WAAA,CACA,gBAAA,CACA,kBACI,cAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.enjoy{\r\n    position: relative;\r\n    width:100%;\r\n    margin: 1.15% auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;    \r\n    border-radius: 40px;  \r\n    #background-video{\r\n        position: absolute;\r\n        width: 100%;\r\n        object-fit: cover;\r\n        height: 40.2em;\r\n        border-radius: 40px;\r\n        z-index: 0;\r\n    }   \r\n    &-header{\r\n        span{\r\n            display: inline-block;\r\n            color:$color-text-accent;\r\n            @include inter_600;\r\n            font-style: italic;\r\n            line-height: 105%;\r\n            font-size: 105%;\r\n            transform: skew(6deg);\r\n            margin: -1% 1.5% 0 -1%;\r\n            letter-spacing: .01em;\r\n        }\r\n        position: relative;\r\n        z-index: 1;\r\n        max-width: calc(530/1360*100%);\r\n        margin: 7.5% 39% 3% 7.3%;\r\n        color:$color-text-light;\r\n        @include inter_600;\r\n        font-style: normal;\r\n        line-height: 110%;\r\n        font-size: 425%;\r\n        display: block;\r\n        word-spacing: 0;\r\n        letter-spacing: .03em;\r\n    }\r\n    &-text{\r\n        position: relative;\r\n        z-index: 1;\r\n        max-width: calc(530/1360*100%);\r\n        margin: 0% 0 0.7% 7.3%;\r\n        color:$color-text-light;\r\n        @include inter_400;\r\n        font-size: 100%;\r\n        line-height: 152%;\r\n    }\r\n    a{\r\n        position: relative;\r\n        z-index: 1;\r\n        width: clamp(100px ,15% , 200px);\r\n        display: flex;\r\n        justify-content: center;\r\n        padding-top: 1.6% ;\r\n        padding-right: 5.5%;\r\n        padding-bottom: 1.6%;\r\n        padding-left: 5.5%;\r\n        margin: 2.2% 0% 7.45% 7.35%;\r\n        border-radius: 35px;\r\n        background-color: $color-text-light;\r\n        border:1px solid $color-text-light;\r\n        transition: 0.5s;          \r\n        align-items: center;\r\n        @include inter_600;\r\n        font-size: clamp(15px,95%,32px);\r\n        font-style: normal;\r\n        color:$color-text-dark;\r\n        transition: 0.5s;\r\n            svg {\r\n                margin: 0% 0 0 4%;\r\n               \r\n                path{\r\n                    transition: 0.5s;\r\n                }\r\n            }           \r\n    }        \r\n \r\n}\r\n@media (hover:hover){\r\n    .enjoy{\r\n    a:hover{     \r\n        padding-right:  0;    \r\n        padding-left:0;\r\n        cursor: pointer;        \r\n        transition: 0.5s;\r\n        svg {\r\n            transition: 0.5s;\r\n            width: clamp(1.5vw, 20px, 4vw);\r\n            path{            \r\n            stroke:#403F3D;           \r\n            \r\n        }\r\n    }\r\n    }\r\n}\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .enjoy{\r\n        background-position: 50% 69%;\r\n        margin: 1.2% auto;\r\n        #background-video{\r\n            height: clamp(380px, 38em, 470px);\r\n        }\r\n        &-header{\r\n            max-width: calc(580/768*100%);\r\n            margin: 14.8% 1% 6% 8.6%;\r\n            font-size: 8.9vw;\r\n            span{\r\n                margin: -1% 0.8% 0 -1%;\r\n            }\r\n        }\r\n        &-text{\r\n            max-width: calc(580/768*100%);\r\n            margin: 0.2% 0 0.7% 8.8%;\r\n        }\r\n       a{\r\n            width: clamp(100px ,29% , 200px);\r\n            padding: 3.2% 0;\r\n            margin: 4.9% 0% 14.4% 8.8%;\r\n            font-size: clamp(9px,2.5vw, 16px);\r\n                svg{ \r\n                    width: clamp(20px, 1.3vw, 25px);\r\n                    margin:0% 0 0 4%;\r\n                    path{\r\n                    stroke:#403F3D;\r\n                }\r\n            \r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .enjoy{\r\n        margin: 0;\r\n        #background-video{\r\n            height: 34.5em;\r\n        }\r\n        &-header{\r\n            max-width: calc(316/348*100%);\r\n            margin: 17.5% 0 12% 4.5%;\r\n            font-size: 245%;\r\n            line-height: 122%;\r\n            word-spacing: 1px;\r\n            letter-spacing: 0.035em;\r\n        }\r\n        &-text{\r\n            max-width: calc(316/348*100%);\r\n            margin: 0% 0 6.2% 4.8%;\r\n            line-height: 150%;\r\n        }\r\n        a{\r\n            width: calc(200/348*100%);\r\n            padding: 5.9% 63px;\r\n            margin: 5% 0% 17.5% 4.6%;\r\n            font-size: 4.3vw;\r\n                svg{\r\n                    width: 2.5em;\r\n                    margin: 0% 0 0 4%;\r\n                    path{\r\n                        stroke:#403F3D;\r\n                    }\r\n                }\r\n            \r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1864);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes fulling{from{width:0;margin-right:100%}50%{width:50%;margin-right:50%}to{width:100%;margin-right:0%}}.favorite{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin-bottom:4%}.favorite-header{width:66.1764705882%;margin:6.8% 0 0;word-spacing:1px;letter-spacing:-0.005em;text-align:center;font-family:"Inter",sans-serif;font-weight:600;font-size:382%;font-style:normal;color:#403f3d;line-height:100%}.favorite-header span{margin:0 0 0 -1%;display:inline-block;font-style:italic;color:#b0907a;transform:skew(5deg);letter-spacing:-0.005em}.favorite article{padding:3.5% 0 2%;width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}.favorite article .left-btn,.favorite article .right-btn{border:1px solid #665f55;border-radius:31px;padding:1.2% 1.3%;transition:.5s}.favorite article .left-btn{margin:21.2% 0% 0 .3%}.favorite article .right-btn{margin:21.2% .3% 0 0}.favorite article .favorite-slide{width:47.7941176471%;height:42em;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}.favorite article .slide{display:flex;flex-direction:column;margin:0 0 2%;width:77%;margin-left:0%;transition:.1s}.favorite article .slide img{width:95%;margin:0 auto}.favorite article .slide h3{width:100%;text-align:center;margin:10% 0 1.5%;font-family:"Inter",sans-serif;font-weight:600;font-size:150%;line-height:125%}.favorite article .slide p{font-family:"Inter",sans-serif;font-weight:400;width:87%;margin:1.3% auto .5%;text-align:center;font-size:100%;line-height:150%}.favorite article .slide span{width:100%;text-align:center;margin:2.7% 0 0 0%;font-family:"Inter",sans-serif;font-weight:600;font-size:150%;line-height:125%;color:#403f3d}.favorite article nav{width:23.5%;display:flex;align-items:center;justify-content:space-between;margin:4.7% 0 -2%}.favorite article nav div{width:27%;height:4px;background-color:#c1b6ad;border-radius:50px;transition:.2s;display:flex;justify-content:flex-start}.favorite article nav div span{display:block;background-color:#665f55;height:4px;border-radius:2px}.favorite article nav div .anime{animation-name:fulling;animation-duration:5s;animation-play-state:running;animation-delay:2s}.favorite article nav div .pause-anime{animation-play-state:paused}@media(hover: hover){.right-btn:hover,.left-btn:hover{cursor:pointer;background-color:#665f55;transition:.5s}.right-btn:hover svg path,.left-btn:hover svg path{stroke:#e1d4c9}nav div:hover{cursor:pointer;background-color:#665f55;transition:.5s}nav div:hover span:hover{animation-play-state:paused}}@media only screen and (max-width: 768px)and (min-width: 381px){.favorite{margin-bottom:1%}.favorite-header{width:88%;margin:13.4% 0% 0 -0.6%;word-spacing:0px;letter-spacing:-0.008em;line-height:121%}.favorite article{padding:6% 0 4%}.favorite article .left-btn{padding:2.3% 2.5% 2%;margin:42.2% 0% 0 0%}.favorite article .right-btn{padding:2.3% 2.5% 2%;margin:42.2% 0% 0 0%}.favorite article h3{margin:3.3% 0 1.9%}.favorite article p{width:69.7674418605%;margin:0% auto 1.1%}.favorite article .favorite-slide{width:69.7674418605%}.favorite article .favorite-slide .slide{width:100%;margin:0 0 4%}.favorite article .favorite-slide .slide h3{margin:3.7% 0 3%}.favorite article .favorite-slide .slide p{width:91%}.favorite article .favorite-slide .slide span{margin-top:3%}.favorite article .favorite-slide nav{margin:4% 0 0%;width:32%}}@media screen and (max-width: 380px){.favorite-header{width:auto;margin:29% 0 12% 0%;font-size:8.4vw;letter-spacing:.005em;word-spacing:2px;line-height:125%}.favorite-header span{margin:0 1% 0 -2%}.favorite article{width:100%;padding:0}.favorite article .left-btn{display:none}.favorite article .right-btn{display:none}.favorite article .favorite-slide{justify-content:start}.favorite article .favorite-slide .slide{width:122%}.favorite article .favorite-slide .slide img{margin:0;width:100%}.favorite article .favorite-slide .slide h3{margin:6.3% 0 4.4%}.favorite article .favorite-slide .slide p{width:100%;margin:0}.favorite article .favorite-slide .slide span{margin:4.5% 0 9% 0%}.favorite article .favorite-slide nav{width:57.4712643678%;margin:0% 0 17%}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/favorite.scss"],"names":[],"mappings":"AAwBA,mBACI,KACI,OAAA,CACA,iBAAA,CAEJ,IACI,SAAA,CACA,gBAAA,CAEJ,GACI,UAAA,CACA,eAAA,CAAA,CAuBR,UACI,UAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CACA,iBACI,oBAAA,CACA,eAAA,CACA,gBAAA,CACA,uBAAA,CACA,iBAAA,CAjDJ,8BAAA,CACA,eAAA,CAkDI,cAAA,CACA,iBAAA,CACA,aA1ES,CA2ET,gBAAA,CACA,sBACI,gBAAA,CACA,oBAAA,CACA,iBAAA,CACA,aA9EO,CA+EP,oBAAA,CACA,uBAAA,CAGR,kBACI,iBAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CACA,6BAAA,CACA,sBAAA,CACA,yDAEI,wBAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CAEJ,4BACI,qBAAA,CAGJ,6BACI,oBAAA,CAEJ,kCACI,oBAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,wBAAA,CAEA,yBACI,YAAA,CACA,qBAAA,CACA,aAAA,CACA,SAAA,CACA,cAAA,CACA,cAAA,CAEA,6BACI,SAAA,CACA,aAAA,CAER,4BACI,UAAA,CACA,iBAAA,CACA,iBAAA,CA5GZ,8BAAA,CACA,eAAA,CA6GY,cAAA,CACA,gBAAA,CAGJ,2BAvHR,8BAAA,CACA,eAAA,CAwHY,SAAA,CACA,oBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CAEJ,8BACI,UAAA,CACA,iBAAA,CACA,kBAAA,CA7HZ,8BAAA,CACA,eAAA,CA8HY,cAAA,CACA,gBAAA,CACA,aAtJC,CA0JT,sBACI,WAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iBAAA,CACA,0BACI,SAAA,CACA,UAAA,CACA,wBAAA,CACA,kBAAA,CACA,cAAA,CACA,YAAA,CACA,0BAAA,CACA,+BACI,aAAA,CACA,wBAtKQ,CAuKR,UAAA,CACA,iBAAA,CAEJ,iCACI,sBAAA,CACA,qBAAA,CACA,4BAAA,CACA,kBAAA,CAEJ,uCACI,2BAAA,CAOpB,qBACI,iCAEI,cAAA,CACC,wBA5LmB,CA6LnB,cAAA,CAEI,mDACI,cAnMC,CAwMV,cACI,cAAA,CACA,wBAAA,CACA,cAAA,CACA,yBACI,2BAAA,CAAA,CAKhB,gEACI,UACI,gBAAA,CACA,iBACI,SAAA,CACA,uBAAA,CACA,gBAAA,CACA,uBAAA,CACA,gBAAA,CAEJ,kBACI,eAAA,CACA,4BACI,oBAAA,CACA,oBAAA,CAEJ,6BACI,oBAAA,CACA,oBAAA,CAEJ,qBACI,kBAAA,CAEJ,oBACI,oBAAA,CACA,mBAAA,CAEJ,kCACI,oBAAA,CACA,yCACI,UAAA,CACA,aAAA,CACA,4CACI,gBAAA,CAEJ,2CACI,SAAA,CAEJ,8CACI,aAAA,CAGR,sCACI,cAAA,CACA,SAAA,CAAA,CAOpB,qCAEI,iBACI,UAAA,CACA,mBAAA,CACA,eAAA,CACA,qBAAA,CACA,gBAAA,CACA,gBAAA,CACA,sBACI,iBAAA,CAGR,kBACI,UAAA,CACA,SAAA,CACA,4BACI,YAAA,CAEJ,6BACI,YAAA,CAGJ,kCACI,qBAAA,CACA,yCACI,UAAA,CACA,6CACI,QAAA,CACA,UAAA,CAEJ,4CACI,kBAAA,CAGJ,2CACI,UAAA,CACA,QAAA,CAEJ,8CACI,mBAAA,CAGR,sCACI,oBAAA,CACA,eAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n@keyframes fulling {\r\n    from{\r\n        width: 0;\r\n        margin-right: 100%;\r\n    }\r\n    50%{\r\n        width: 50%;\r\n        margin-right: 50%;\r\n    }\r\n    to{\r\n        width: 100%;\r\n        margin-right: 0%;\r\n    }\r\n}\r\n// @keyframes carouselAnimeStart {\r\n//     from{\r\n//         opacity:0;\r\n//         margin-left:25%;\r\n//     }\r\n//     to{\r\n//         opacity: 1;\r\n//         margin-left:0%;\r\n//     }\r\n// }\r\n// @keyframes carouselAnimeEnd {\r\n//     from{\r\n//         opacity: 1;\r\n//         margin-left:0;\r\n//     }\r\n//     to{\r\n//         opacity: 0;\r\n//         margin-left:-25%;\r\n//     }\r\n// }\r\n.favorite{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;  \r\n    margin-bottom: 4%;\r\n    &-header{\r\n        width: calc(900/1360*100%);\r\n        margin: 6.8% 0 0;\r\n        word-spacing: 1px;\r\n        letter-spacing: -0.005em;\r\n        text-align: center;\r\n        @include inter_600;\r\n        font-size: 382%;\r\n        font-style: normal;\r\n        color:$color-text-dark;\r\n        line-height: 100%;\r\n        span{\r\n            margin: 0 0 0 -1%;\r\n            display: inline-block;\r\n            font-style: italic;\r\n            color:$color-text-accent; \r\n            transform: skew(5deg);\r\n            letter-spacing: -0.005em;  \r\n        }       \r\n    } \r\n    article{\r\n        padding: 3.5% 0 2%;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        align-items: flex-start;\r\n        .left-btn,\r\n        .right-btn{\r\n            border:1px solid $color-background-container;\r\n            border-radius: 31px;\r\n            padding: 1.2% 1.3%;  \r\n            transition: 0.5s;      \r\n        }\r\n        .left-btn{\r\n            margin: 21.2% 0% 0 0.3%;\r\n         \r\n        }\r\n        .right-btn{\r\n            margin: 21.2% 0.3% 0 0 ;\r\n        }\r\n        .favorite-slide{            \r\n            width: calc(650/1360*100%);\r\n            height: 42em;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: flex-end;               \r\n            }\r\n            .slide{              \r\n                display:flex;\r\n                flex-direction: column;\r\n                margin:0 0 2%;\r\n                width: 77%;\r\n                margin-left: 0%;\r\n                transition: 0.1s;\r\n\r\n                img{\r\n                    width: 95%;\r\n                    margin: 0 auto;\r\n                }\r\n            h3{\r\n                width: 100%;\r\n                text-align: center;\r\n                margin: 10% 0 1.5%;\r\n                @include inter_600;\r\n                font-size: 150%;\r\n                line-height: 125%;\r\n                            \r\n            }\r\n            p{\r\n                @include inter_400;\r\n                width: 87%;\r\n                margin: 1.3% auto 0.5%;\r\n                text-align: center;\r\n                font-size: 100%;\r\n                line-height: 150%;                    \r\n            }\r\n            span{\r\n                width: 100%;\r\n                text-align: center;\r\n                margin: 2.7% 0 0 0%;\r\n                @include inter_600;\r\n                font-size: 150%;\r\n                line-height: 125%;\r\n                color:$color-text-dark;\r\n            }\r\n\r\n        }\r\n        nav{\r\n            width: 23.5%;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            margin: 4.7% 0 -2%;\r\n            div{\r\n                width: 27%;\r\n                height: 4px;\r\n                background-color: #C1B6AD;\r\n                border-radius: 50px;\r\n                transition: 0.2s;\r\n                display:flex;\r\n                justify-content: flex-start;\r\n                span{\r\n                    display: block;\r\n                    background-color: $color-background-container;\r\n                    height: 4px;  \r\n                    border-radius: 2px;        \r\n                }\r\n                .anime{\r\n                    animation-name: fulling;\r\n                    animation-duration: 5s; \r\n                    animation-play-state: running; \r\n                    animation-delay: 2s;\r\n                }\r\n                .pause-anime{\r\n                    animation-play-state: paused;\r\n                }\r\n            }\r\n            \r\n        }\r\n    }\r\n}  \r\n@media(hover:hover){\r\n    .right-btn:hover,\r\n    .left-btn:hover{\r\n        cursor: pointer;\r\n         background-color: $color-background-container ;\r\n         transition: 0.5s;\r\n         svg{\r\n             path{\r\n                 stroke: $color-text-light;\r\n             }               \r\n         }\r\n     }\r\n     nav{\r\n        div:hover{\r\n            cursor: pointer;\r\n            background-color: #665F55;\r\n            transition: 0.5s;\r\n            span:hover{\r\n                animation-play-state: paused;\r\n            }\r\n        }\r\n     }\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .favorite{\r\n        margin-bottom: 1%;\r\n        &-header{\r\n            width: 88%;\r\n            margin: 13.4% 0% 0 -0.6%;\r\n            word-spacing: 0px;\r\n            letter-spacing: -0.008em;\r\n            line-height: 121%;\r\n        }\r\n        article{\r\n            padding: 6% 0 4%;\r\n            .left-btn{\r\n                padding: 2.3% 2.5% 2%;\r\n                margin: 42.2% 0% 0 0%;\r\n            }\r\n            .right-btn{\r\n                padding:2.3% 2.5% 2%;\r\n                margin:42.2% 0% 0 0%;\r\n            }\r\n            h3{\r\n                margin: 3.3% 0 1.9%;\r\n            }\r\n            p{\r\n                width: calc(480/688*100%);  \r\n                margin: 0% auto 1.1%;\r\n            }\r\n            .favorite-slide{\r\n                width: calc(480/688*100%);\r\n                .slide{\r\n                    width: 100%;\r\n                    margin: 0 0 4%;\r\n                    h3{\r\n                        margin: 3.7% 0 3%;\r\n                    }\r\n                    p{\r\n                        width:91%;\r\n                    }\r\n                    span{\r\n                        margin-top: 3%;\r\n                    }\r\n                }      \r\n                nav{\r\n                    margin: 4% 0 0%;\r\n                    width: 32%;\r\n                }       \r\n            }\r\n        }\r\n       \r\n    }\r\n}\r\n@media screen and (max-width: 380px) {\r\n  .favorite{\r\n    &-header{\r\n        width: auto;\r\n        margin: 29% 0 12% 0%;\r\n        font-size: 8.4vw;\r\n        letter-spacing: 0.005em;\r\n        word-spacing: 2px;\r\n        line-height: 125%;\r\n        span{\r\n            margin: 0 1% 0 -2%;\r\n        }\r\n    }\r\n    article{\r\n        width: 100%;\r\n        padding: 0;\r\n        .left-btn{\r\n            display: none;\r\n        }\r\n        .right-btn{\r\n            display: none;\r\n        }\r\n      \r\n        .favorite-slide{\r\n            justify-content: start;\r\n            .slide{\r\n                width: 122%;\r\n                img{\r\n                    margin: 0;\r\n                    width: 100%;\r\n                }\r\n                h3{\r\n                    margin: 6.3% 0 4.4%;\r\n        \r\n                }\r\n                p{\r\n                    width: 100%;\r\n                    margin: 0;\r\n                }\r\n                span{\r\n                    margin: 4.5% 0 9% 0%;\r\n                }\r\n            }\r\n            nav{\r\n                width: calc(200/348*100%);\r\n                margin: 0% 0 17%;\r\n            }\r\n        }\r\n    }\r\n   \r\n  \r\n  }\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1864);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu-item{border-bottom:2px solid rgba(0,0,0,0)}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/header_home.scss"],"names":[],"mappings":"AAwBA,WACI,qCAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.menu-item{\r\n    border-bottom: 2px solid transparent;   \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8393:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 9540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about-couple.jpg";

/***/ }),

/***/ 8203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about-cup.jpg";

/***/ }),

/***/ 4027:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about-girl.jpg";

/***/ }),

/***/ 6533:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about-man.jpg";

/***/ }),

/***/ 6655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mobile-screens.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			177: 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkaleksa013_jsfe2023q4"] = self["webpackChunkaleksa013_jsfe2023q4"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [823], () => (__webpack_require__(2279)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=home.js.map