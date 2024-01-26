"use strict";
(self["webpackChunkaleksa013_jsfe2023q4"] = self["webpackChunkaleksa013_jsfe2023q4"] || []).push([[823],{

/***/ 9937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: ./coffee-house/src/styles/vars.scss
var vars = __webpack_require__(1206);
// EXTERNAL MODULE: ./coffee-house/src/styles/style.scss
var style = __webpack_require__(8351);
// EXTERNAL MODULE: ./coffee-house/src/styles/button.scss
var styles_button = __webpack_require__(1038);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/footer.scss
var footer = __webpack_require__(7710);
;// CONCATENATED MODULE: ./coffee-house/src/styles/footer.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(footer/* default */.Z, options);




       /* harmony default export */ const styles_footer = (footer/* default */.Z && footer/* default */.Z.locals ? footer/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/components/Footer.js




const Footer = element => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
<div class = "footer-socia">
<p class="footer-socia-text">
<span class = "footer-socia-header">Sip, Savor, Smile.</span>
It’s coffee time!</p>
<div class = "footer-socia-twitter">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 
3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 
4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 
7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 
19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 
5.67355 23 3.01006 23 3.01006Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div class = "footer-socia-instagram">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 
9.79086 16 12 16Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 
21 3 18.7614 3 16Z" stroke="#E1D4C9"/>
<path d="M17.5 6.51L17.51 6.49889" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class = "footer-socia-facebook">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 
7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 
6 14 6H17V2Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
</div>
<div  id = "contacts" class = "footer-contacts">
<h3 >Contact us</h3>
<span>
<a href='https://maps.app.goo.gl/fp36238FCG7fhDCh6' target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z" stroke="#E1D4C9" stroke-width="1.5"/>
  <path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="#E1D4C9" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
8558 Green Rd.,  LA
</a>
</span>
<span>
<a href="tel:+1(603)555-0123">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
+1 (603) 555-0123
</a>
</span>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_217_1736)">
    <path d="M10 5L10 10L15 10" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_217_1736">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
Mon-Sat: 9:00 AM – 23:00 PM
</span>
</div>
`;
  const buttonsContainer = footer.querySelector('.footer-socia');
  element.append(footer);
};
/* harmony default export */ const components_Footer = (Footer);

/***/ }),

/***/ 3219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./coffee-house/src/styles/vars.scss
var vars = __webpack_require__(1206);
// EXTERNAL MODULE: ./coffee-house/src/styles/style.scss
var style = __webpack_require__(8351);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/header.scss
var header = __webpack_require__(2473);
;// CONCATENATED MODULE: ./coffee-house/src/styles/header.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(header/* default */.Z, options);




       /* harmony default export */ const styles_header = (header/* default */.Z && header/* default */.Z.locals ? header/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/assets/icons/logo.png
const logo_namespaceObject = __webpack_require__.p + "assets/logo.png";
;// CONCATENATED MODULE: ./coffee-house/src/components/Header.js




const Header = elem => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
<div class="logo">
<a href= './home.html'><img src=${logo_namespaceObject} alt="logo"></a> 
</div>
<div class = "menu">
    <ul class="menu-list">
        <li class="menu-list-item"><a class="menu-list-link " href="./home.html#favorite">Favorite coffee</a></li>
        <li class="menu-list-item"><a class="menu-list-link " href="./home.html#about">About</a></li>
        <li class="menu-list-item"><a class="menu-list-link " href="./home.html#app">Mobile app</a></li>
        <li class="menu-list-item"><a class="menu-list-link " href="#contacts">Contact us</a></li> 
        </ul>   
    <div class="menu-item"><a class="menu-link" href='./menu.html'>Menu 
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </a>
    </div>
    </div>
    <div class="menu-burger">
    <span class="burger-one"></span>
    <span class="burger-two"></span>
    </div>
`;
  elem.appendChild(header);
};
/* harmony default export */ const components_Header = (Header);

/***/ }),

/***/ 7471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ showMenu),
/* harmony export */   S: () => (/* binding */ hideMenu)
/* harmony export */ });
const showMenu = (button, arrayEl, tagName) => {
  button.classList.add('burger-active');
  tagName.classList.add('show');
  arrayEl.forEach(element => {
    element.classList.add('span-active');
  });
};
const hideMenu = (button, arrayEl, tagName) => {
  button.classList.remove('burger-active');
  tagName.classList.remove('show');
  arrayEl.forEach(element => {
    element.classList.remove('span-active');
  });
};


/***/ }),

/***/ 9757:
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
___CSS_LOADER_EXPORT___.push([module.id, `.btn{display:flex;padding:2% 3% 2% 2%;margin:0 2% 0 0;align-items:center;border:1px solid #c1b6ad;background-color:#e1d4c9;border-radius:100px;font-family:"Inter",sans-serif;font-weight:600;font-size:16px;transition:.5s}.btn-icon{display:flex;align-items:center;justify-content:center;margin:0 10% 0 0;width:40px;height:30px;border:1px solid #c1b6ad;border-radius:100px;background-color:#c1b6ad;color:#403f3d}.btn-span{display:block;width:92%;font-size:16px;color:#403f3d}.active{background-color:#665f55;transition:.5s;color:#e1d4c9}.active-icon{background-color:#e1d4c9}.active span{color:#e1d4c9}.btn:hover{cursor:pointer;background-color:#665f55;transition:.5s;color:#e1d4c9}.btn:hover-icon{background-color:#e1d4c9}.btn:hover span{color:#e1d4c9}@media only screen and (max-width: 768px)and (min-width: 381px){.btn{padding:2.3% 4% 2.3% 3%;margin:0 2% 3% 0}}@media screen and (max-width: 380px){.btn{padding:2.3% 4% 2.3% 3%;margin:0 2% 3% 0}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/button.scss"],"names":[],"mappings":"AAwBA,KACI,YAAA,CACA,mBAAA,CACA,eAAA,CACA,kBAAA,CACA,wBAAA,CACA,wBA3BmB,CA4BnB,mBAAA,CAVA,8BAAA,CACA,eAAA,CAWA,cAAA,CACA,cAAA,CACA,UACI,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,mBAAA,CACA,wBAtCY,CAuCZ,aA7CS,CA+Cb,UACI,aAAA,CACA,SAAA,CACA,cAAA,CACA,aAnDS,CAsDjB,QACI,wBAnDwB,CAoDxB,cAAA,CACA,aAxDc,CAyDd,aACI,wBA1DU,CA4Dd,aACI,aA7DU,CAgElB,WACI,cAAA,CACA,wBA/DwB,CAgExB,cAAA,CACA,aApEc,CAqEd,gBACI,wBAtEU,CAwEd,gBACI,aAzEU,CA4ElB,gEACI,KACI,uBAAA,CACA,gBAAA,CAAA,CAGR,qCACI,KACI,uBAAA,CACA,gBAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.btn{\r\n    display: flex;\r\n    padding: 2% 3% 2% 2%;\r\n    margin: 0 2% 0 0;\r\n    align-items: center;\r\n    border:1px solid $color-border-light;\r\n    background-color: $color-background-body;\r\n    border-radius: 100px;\r\n    @include inter_600;\r\n    font-size: 16px;\r\n    transition: 0.5s;\r\n    &-icon{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin:0 10% 0 0;\r\n        width: 40px;\r\n        height: 30px;\r\n        border:1px solid $color-border-light;\r\n        border-radius: 100px;\r\n        background-color: $color-border-light;\r\n        color:$color-text-dark;\r\n    }\r\n    &-span{\r\n        display: block;\r\n        width: 92%;\r\n        font-size: 16px;        \r\n        color:$color-text-dark;\r\n    }\r\n}\r\n.active{\r\n    background-color: $color-background-container;\r\n    transition: 0.5s;\r\n    color:$color-text-light;\r\n    &-icon{\r\n        background-color: $color-text-light;\r\n    }\r\n    span{       \r\n        color:$color-text-light;\r\n    }\r\n}\r\n.btn:hover{\r\n    cursor: pointer;\r\n    background-color: $color-background-container;\r\n    transition: 0.5s;\r\n    color:$color-text-light;\r\n    &-icon{\r\n        background-color: $color-text-light;\r\n    }\r\n    span{       \r\n        color:$color-text-light;\r\n    }\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .btn{\r\n        padding: 2.3% 4% 2.3% 3%;\r\n        margin: 0 2% 3% 0;\r\n    }\r\n}\r\n@media screen and (max-width: 380px){\r\n    .btn{\r\n        padding: 2.3% 4% 2.3% 3%;\r\n        margin: 0 2% 3% 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7710:
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
___CSS_LOADER_EXPORT___.push([module.id, `.footer{max-width:94.4444444444%;padding:0 .4%;margin:2.2% auto 3.1%;display:flex;align-items:flex-start;justify-content:center;background-color:#665f55;border-radius:40px}.footer-socia{width:40%;margin:7.5% 0 0 6.6%;display:flex;flex-wrap:wrap;font-family:"Inter",sans-serif;font-weight:600;line-height:125%;font-size:clamp(32px,370%,64px);letter-spacing:.005em}.footer-socia p{width:100%;font-style:italic;transform:skewX(6deg);margin:0% 0 7.2% -0.5%;font-size:clamp(40px,100%,61px);line-height:125%;color:#b0907a}.footer-socia p span{display:inline-block;margin:0% 0 0 2.5%;color:#e1d4c9;font-style:normal;transform:skewX(-6deg)}.footer-socia div{width:clamp(55px,4.2vw,60px);height:clamp(55px,4.2vw,60px);border:1px solid #c1b6ad;border-radius:100px;display:flex;align-items:center;padding:3.5% 2% 3.2%;margin:.8% .9% 19.6% 1.2%;transition:.5s}.footer-contacts{width:58%;margin:10% 0% 5% 0%;display:flex;flex-direction:column;align-items:flex-start;color:#e1d4c9;font-family:"Inter",sans-serif;font-weight:600}.footer-contacts h3{margin:0% 0 4.5% 16.2%;font-size:135%;letter-spacing:.06em;line-height:125%}.footer-contacts svg{margin:0 3% 0 0}.footer-contacts span{margin:1.1% 4% 2% 16.3%;font-size:clamp(86%,1.1vw,115%);letter-spacing:.01em;display:flex;width:clamp(202px,14vw,37%);line-height:133%}.footer-contacts span a{width:94%;display:flex;margin:0 0 0 -2%;align-items:center;justify-content:space-around;color:#e1d4c9;line-height:125%;border-bottom:2px solid rgba(0,0,0,0);transition:.5s}.footer-contacts span a svg{margin:0}.footer-contacts span:last-of-type{width:clamp(235px,19vw,47%);margin:.9% 4% 2% 16.3%}@media(hover: hover){.footer-socia div:hover{cursor:pointer;background-color:#e1d4c9;transition:.5s}.footer-socia div:hover svg{width:24px}.footer-socia div:hover svg path{stroke:#403f3d}.footer-contacts span{width:clamp(202px,14vw,37%)}.footer-contacts span a:hover{width:94%;transition:.5s;cursor:pointer;border-bottom:2px solid #e1d4c9}.footer-contacts span:last-of-type{pointer-events:none}}@media only screen and (min-width: 1441px){.footer-socia{margin:7.5% 0 1% 6.4%}.footer-socia p{margin:0% 0 7.1% 0%;font-size:98%;letter-spacing:.015em}.footer-socia p span{margin:0% 0 1% 2.5%}.footer-socia div{width:1em;height:1em;margin:0% 1.4% 17.3% 1.3%}.footer-contacts{margin:9.5% 0% 5% 0%}.footer-contacts h3{margin:.3% 0 4.5% 16.5%}.footer-contacts svg{margin:0 3% 0 0}.footer-contacts span{margin:1.1% 4% 2% 16.3%;font-size:100%;width:27%}.footer-contacts span:last-of-type{width:36%;margin:.8% 4% 2% 16.3%}}@media only screen and (max-width: 768px)and (min-width: 381px){.footer{width:89.5%;flex-direction:column}.footer-socia{width:100%;margin:15% 0 0 7.2%}.footer-socia p{margin:0% 12% 6% 0%;line-height:130%;font-size:clamp(40px,97%,57px);letter-spacing:.02em}.footer-socia p span{font-style:normal;transform:skewX(-6deg);margin:0% 3% 0 2%;letter-spacing:.025em}.footer-socia div{width:clamp(55px,8.2vw,60px);height:clamp(55px,8.2vw,60px);padding:2.5% 2%;margin:.1% .5% 5% 1.2%}.footer-contacts{width:100%}.footer-contacts h3{margin:0% 0 4.3% 8.3%}.footer-contacts span{width:clamp(100px,30vw,205px);margin:1% 4% 1.5% 8.3%}.footer-contacts span a{margin:2% 12% 0 0%;justify-content:space-between;font-size:2.1vw}.footer-contacts span a svg{margin:0 0 0 0}.footer-contacts span:last-of-type{width:40%;margin:1.8% 0 10.6% 8.2%;font-size:2vw;align-items:flex-end}.footer-contacts span:last-of-type svg{margin:0 3% 0 0}}@media only screen and (max-width: 380px){.footer{width:91.5789473684%;flex-direction:column}.footer-socia{width:100%;margin:18.5% 0 0 3.2%;font-size:165%;line-height:117%;letter-spacing:.018em}.footer-socia p{margin:-1.2% 0 11.8% 0%;line-height:128%;font-size:117%}.footer-socia p span{font-style:normal;transform:skewX(-6deg);margin:.3% -1% 0 1.9%}.footer-socia div{width:16vw;height:16vw;padding:5% 2%;margin:0% 2.2% 5% 1%}.footer-contacts{width:100%;margin:7% 0}.footer-contacts h3{margin:0% 0 10.5% 4.2%;font-size:6vw;letter-spacing:.03em}.footer-contacts span{width:54.5977011494%;margin:1% 0 6% 4%}.footer-contacts span a{width:95%;margin:1% 0 0 1%;justify-content:space-between;font-size:4.2vw}.footer-contacts span:nth-of-type(2){margin:0% 0 6% 4%}.footer-contacts span:nth-of-type(2) a{width:94%;margin:1% 0 0 1%;justify-content:space-between;font-size:4.2vw}.footer-contacts span:last-of-type{width:76.1494252874%;margin:0% 0 12.5% 4.2%;justify-content:space-between;font-size:4.2vw}.footer-contacts span:last-of-type svg{margin:0}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/footer.scss"],"names":[],"mappings":"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","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.footer{\r\n    max-width: calc(1360/1440*100%);\r\n    padding: 0 0.4%;\r\n    margin: 2.2% auto 3.1%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    background-color: $color-background-container;\r\n    border-radius: 40px;\r\n    &-socia{\r\n        width: 40%;\r\n        margin: 7.5% 0 0 6.6%;\r\n        display: flex;\r\n        flex-wrap: wrap; \r\n        @include inter_600;\r\n        line-height: 125%;\r\n        font-size: clamp(32px,370%,64px);\r\n        letter-spacing: 0.005em;          \r\n       p{\r\n            span{\r\n                display: inline-block;\r\n                margin: 0% 0 0 2.5%;\r\n                color:$color-text-light; \r\n                font-style: normal;\r\n                transform: skewX(-6deg);\r\n            }\r\n            width: 100%;\r\n            font-style: italic;\r\n            transform: skewX(6deg);\r\n            margin: 0% 0 7.2% -0.5%;\r\n            font-size: clamp(40px,100%,61px);\r\n            line-height: 125%;\r\n            color:$color-text-accent; \r\n        }\r\n        div{\r\n            width: clamp(55px, 4.2vw, 60px);\r\n            height: clamp(55px, 4.2vw, 60px);\r\n            border: 1px solid $color-border-light;\r\n            border-radius: 100px;\r\n            display: flex;\r\n            align-items: center;          \r\n            padding: 3.5% 2% 3.2%;\r\n            margin: 0.8% 0.9% 19.6% 1.2%;     \r\n            transition: 0.5s;\r\n        }\r\n        \r\n    }\r\n    &-contacts{\r\n        width: 58%;\r\n        margin: 10% 0% 5% 0%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        color: $color-text-light;\r\n        @include inter_600;\r\n        h3{\r\n            margin: 0% 0 4.5% 16.2%;\r\n            font-size: 135%;\r\n            letter-spacing: 0.06em;\r\n            line-height: 125%;            \r\n        }\r\n        svg{\r\n            margin: 0 3% 0 0;\r\n        }\r\n        span{\r\n            margin: 1.1% 4% 2% 16.3%;\r\n            font-size: clamp(86%,1.1vw,115%);\r\n            letter-spacing: 0.01em;\r\n            display: flex;\r\n            width: clamp(202px, 14vw, 37%);\r\n            line-height: 133%;\r\n            a{\r\n                width: 94%;\r\n                display: flex;\r\n                margin: 0 0 0 -2%;\r\n                align-items: center;\r\n                justify-content: space-around;\r\n                color:$color-text-light;\r\n                line-height: 125%;\r\n                border-bottom: 2px solid transparent;  \r\n                transition: 0.5s; \r\n                svg{\r\n                    margin: 0 ;\r\n                }\r\n            }\r\n            \r\n        }\r\n        span:last-of-type{\r\n            width: clamp(235px, 19vw, 47%);\r\n            margin: 0.9% 4% 2% 16.3%;\r\n                  \r\n        }      \r\n    }\r\n}\r\n@media(hover:hover){\r\n.footer-socia{\r\n    div:hover{\r\n        cursor:pointer;\r\n        background-color: $color-background-body;\r\n        transition: 0.5s;\r\n        svg{\r\n            width: 24px;\r\n            path{\r\n                stroke: $color-text-dark;\r\n            }\r\n        }\r\n    }\r\n}\r\n.footer-contacts{\r\n    span{\r\n        width: clamp(202px, 14vw, 37%);\r\n        a:hover{\r\n            width: 94%;\r\n            transition: 0.5s;\r\n            cursor:pointer;\r\n            border-bottom: 2px solid $color-text-light;\r\n    }\r\n    }\r\n    span:last-of-type{\r\n        pointer-events: none;\r\n    }\r\n}\r\n}\r\n@media only screen and (min-width:1441px){\r\n    .footer-socia{ \r\n        margin: 7.5% 0 1% 6.4%;          \r\n        p{\r\n            margin: 0% 0 7.1% 0%;\r\n            font-size: 98%;\r\n            letter-spacing: 0.015em;\r\n            span{\r\n                margin: 0% 0 1% 2.5%;\r\n            }          \r\n        }\r\n        div{\r\n            width: 1em;\r\n            height: 1em;         \r\n            margin: 0% 1.4% 17.3% 1.3%;\r\n          \r\n        }\r\n    }\r\n    .footer-contacts{\r\n        margin: 9.5% 0% 5% 0%;\r\n        h3{\r\n            margin: 0.3% 0 4.5% 16.5%;           \r\n        }\r\n        svg{\r\n            margin: 0 3% 0 0;\r\n        }\r\n        span{\r\n            margin: 1.1% 4% 2% 16.3%;\r\n            font-size: 100%;\r\n            width: 27%;\r\n        }\r\n        span:last-of-type{\r\n            width: 36%;\r\n            margin: 0.8% 4% 2% 16.3%;                  \r\n        }\r\n       \r\n\r\n    }\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .footer{\r\n        width: 89.5%;\r\n        flex-direction: column;\r\n        &-socia{\r\n            width: 100%;\r\n            margin: 15% 0 0 7.2%;\r\n            p{\r\n                margin: 0% 12% 6% 0%;\r\n                line-height: 130%;\r\n                font-size: clamp(40px, 97%, 57px);\r\n                letter-spacing: 0.02em;\r\n                span{\r\n                    font-style: normal;\r\n                    transform: skewX(-6deg);\r\n                    margin: 0% 3% 0 2%;\r\n                    letter-spacing: 0.025em;\r\n                }\r\n            }\r\n            div{\r\n                width: clamp(55px, 8.2vw, 60px);\r\n                height: clamp(55px, 8.2vw, 60px);\r\n                padding: 2.5% 2% ;\r\n                margin: 0.1% 0.5% 5% 1.2%;\r\n            }\r\n        }\r\n        &-contacts{\r\n            width: 100%;\r\n            h3{\r\n                margin: 0% 0 4.3% 8.3%;\r\n            }\r\n            span{\r\n                width: clamp(100px, 30vw, 205px);\r\n                margin: 1% 4% 1.5% 8.3%;\r\n                a{\r\n                    margin: 2% 12% 0 0%;\r\n                    justify-content: space-between;\r\n                    font-size: 2.1vw;\r\n                    svg{\r\n                        margin:0 0 0 0;\r\n                    }\r\n                }\r\n            }\r\n            span:last-of-type{\r\n                width: 40%;\r\n                margin: 1.8% 0 10.6% 8.2%;\r\n                font-size: 2vw;\r\n                align-items: flex-end;\r\n                svg{\r\n                    margin: 0 3% 0 0;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n@media only screen and (max-width:380px){\r\n  .footer{\r\n    width: calc(348/380*100%);\r\n    flex-direction: column;\r\n    &-socia{\r\n        width: 100%;\r\n        margin: 18.5% 0 0 3.2%;\r\n        font-size: 165%;\r\n        line-height: 117%;\r\n        letter-spacing: 0.018em;\r\n        p{\r\n            margin: -1.2% 0 11.8% 0%;\r\n            line-height: 128%;\r\n            font-size: 117%;\r\n            span{\r\n                \r\n                font-style: normal;\r\n                transform: skewX(-6deg);\r\n                margin: 0.3% -1% 0 1.9%;\r\n            }\r\n        }\r\n        div{\r\n            width: 16vw;\r\n            height: 16vw;\r\n            padding: 5% 2%;\r\n            margin: 0% 2.2% 5% 1%;\r\n        }\r\n    }\r\n    &-contacts{\r\n        width: 100%;\r\n        margin: 7% 0;\r\n        h3{\r\n            margin: 0% 0 10.5% 4.2%;\r\n            font-size: 6vw;\r\n            letter-spacing: 0.03em;\r\n        }\r\n        span{\r\n            width: calc(190/348*100%);\r\n            margin: 1% 0 6% 4%;\r\n            a{\r\n                width: 95%;\r\n                margin: 1% 0 0 1%;\r\n                justify-content: space-between;\r\n                font-size: 4.2vw;\r\n            }\r\n        }\r\n        span:nth-of-type(2){\r\n            margin: 0% 0 6% 4%;\r\n            a{\r\n                width: 94%;\r\n                margin: 1% 0 0 1%;\r\n                justify-content: space-between;\r\n                font-size: 4.2vw;\r\n            }\r\n        }\r\n        span:last-of-type{\r\n            width: calc(265/348*100%);\r\n            margin: 0% 0 12.5% 4.2%;\r\n            justify-content: space-between;\r\n            font-size: 4.2vw;\r\n               svg{\r\n                margin: 0;\r\n               }\r\n            \r\n        }\r\n       \r\n    }\r\n  }  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2473:
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
___CSS_LOADER_EXPORT___.push([module.id, `.header{max-width:94.4444444444%;display:flex;justify-content:space-between;align-items:center;background-color:#e1d4c9}.logo{max-width:7.3529411765%;margin:1.35% 0 0 0%}.logo img{width:100%}.menu{display:flex;justify-content:space-between;width:87.5%;margin:0}.menu-list{margin:1% 0 0 20.5%;display:flex;justify-content:flex-start;border:none}.menu-list-item{margin:0 8% 0 4%;border:none}.menu-list-link{display:block;width:max-content;font-family:"Inter",sans-serif;font-weight:600;font-size:1.1vw;line-height:150%;letter-spacing:.006em;color:#403f3d;border-bottom:2px solid rgba(0,0,0,0);transition:.5s}.menu-item{width:clamp(7%,82px,15%);margin:1% 0% 0 18%;display:flex}.menu-item svg{margin:0% 0% 2% 11%;width:33.3333333333%}.menu-link{margin:0 0 0 12%;display:flex;align-items:center;justify-content:space-between;width:100%;color:#403f3d;font-family:"Inter",sans-serif;font-weight:600;font-size:99%;letter-spacing:.01em;border-bottom:2px solid rgba(0,0,0,0);transition:.5s}.menu-burger{display:none}@media only screen and (min-width: 1441px){.menu-list-link{font-size:99%}}@media only screen and (max-width: 768px)and (min-width: 381px){.header{width:100%;padding:0 2.4%;position:relative}.logo{max-width:14.5348837209%;margin:3% 0 1% 0%}.menu{position:absolute;top:100%;left:103%;width:100%;height:100vh;padding:0 0 19%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-color:#e1d4c9;transition:1s;z-index:2}.menu-list{margin:9.5% 0 0;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:100%}.menu-list-item{width:33%;margin:0 0 8%}.menu-list-item a{margin:0 auto;line-height:125%;font-size:198%}.menu-item{display:flex;margin:0 0 0 2%;width:22%}.menu-item a{font-size:198%;margin:0}.menu-item a svg{width:50%;height:50%;margin:0}.menu-burger{position:absolute;right:2.5%;top:31%;padding:2.5% 1.9%;display:flex;justify-content:center;flex-direction:column;align-items:center;border-radius:40px;border:1px solid #665f55;z-index:999}.menu-burger span{width:1em;border:1px solid #403f3d;transition:1s}.menu-burger .burger-one{margin-bottom:35%}.burger-active .span-active{transform:rotate(45deg);transition:1s}.burger-active .span-active:last-of-type{transform:rotate(312deg);position:absolute;top:43%;transition:1s}.show{position:absolute;top:100%;left:0;width:100%;height:100vh;padding:0 0 19%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-color:#e1d4c9;transition:1s;z-index:2}}@media only screen and (max-width: 380px){.header{max-width:91.5789473684%;position:relative}.header .logo{max-width:28.7356321839%;margin:6% 0 4.1% 0%}.header .menu{position:absolute;top:100%;left:105%;width:100%;height:100vh;padding:0 0 19%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-color:#e1d4c9;transition:1s;z-index:2}.header .menu-list{margin:15% 0 0;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:100%}.header .menu-list-item{width:69%;margin:2% 0 15%}.header .menu-list-item a{margin:0 auto;width:fit-content;line-height:125%;font-size:198%}.header .menu-item{display:flex;margin:0 0 20% 3%;width:45%}.header .menu-item a{font-size:198%;margin:0}.header .menu-item a svg{width:50%;height:59%;margin:0}.header .menu-burger{position:absolute;right:0%;padding:5% 4%;display:flex;justify-content:center;flex-direction:column;align-items:center;border-radius:40px;border:1px solid #665f55}.header .menu-burger span{width:1em;border:1px solid #403f3d}.header .menu-burger .burger-one{margin-bottom:35%}.header .burger-active .span-active{transform:rotate(45deg);transition:1s}.header .burger-active .span-active:last-of-type{transform:rotate(312deg);position:absolute;top:43%;transition:1s}.header .show{position:absolute;top:100%;left:0;width:100%;height:100vh;padding:0 0 19%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-color:#e1d4c9;transition:1s;z-index:2}}@media(hover: hover){.menu:hover{border:none}.menu-list-link:hover{border-bottom:2px solid #403f3d;transition:.5s}.menu-list:hover{border:none}.menu-item:hover{border-bottom:2px solid #403f3d;transition:.5s}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/header.scss"],"names":[],"mappings":"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","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.header{\r\n    max-width: calc(1360/1440*100%);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: $color-background-body;\r\n}\r\n.logo{\r\n    max-width: calc(100/1360*100% );\r\n    margin: 1.35% 0 0 0%;\r\n    img{\r\n        width: 100%;        \r\n    }\r\n}\r\n.menu{ \r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: calc(1260/1440*100%);\r\n    margin: 0;\r\n    &-list{\r\n        margin:  1% 0 0 20.5%;\r\n        display: flex;\r\n        justify-content: flex-start;       \r\n        border: none;\r\n        &-item{\r\n            margin: 0 8% 0 4%;\r\n            border: none;\r\n            \r\n        }\r\n        &-link{\r\n            display: block;\r\n            width: max-content;\r\n            @include inter_600;            \r\n            font-size: 1.1vw;\r\n            line-height: 150%;\r\n            letter-spacing: 0.006em;\r\n            color:$color-text-dark;\r\n            border-bottom: 2px solid transparent;\r\n            transition: 0.5s;\r\n        }      \r\n    }\r\n    \r\n    &-item{\r\n        width: clamp(7%, 82px, 15%);\r\n        margin: 1% 0% 0 18%;\r\n        display: flex;       \r\n       svg{\r\n        margin: 0% 0% 2% 11%;\r\n        width: calc(20/60*100%);\r\n       }\r\n    }\r\n    &-link{\r\n        margin: 0 0 0 12%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 100%;   \r\n        color:$color-text-dark;\r\n        @include inter_600;            \r\n        font-size: 99%;\r\n        letter-spacing: 0.01em;\r\n        border-bottom: 2px solid transparent;\r\n        transition: 0.5s;\r\n    }\r\n    &-burger{\r\n        display:none;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (min-width:1441px){\r\n    .menu-list-link{            \r\n        font-size: 99%;       \r\n    } \r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n .header{\r\n    width: 100%;\r\n    padding: 0 2.4%;\r\n    position: relative;\r\n}\r\n.logo{\r\n    max-width: calc(100/688*100%);\r\n    margin: 3% 0 1% 0%;\r\n    \r\n}\r\n.menu{\r\n    position: absolute;\r\n    top:100%;\r\n    left:103%;\r\n    width:100%;\r\n    height: 100vh;\r\n    padding: 0 0 19%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: $color-background-body;\r\n    transition: 1s;\r\n    z-index: 2;\r\n        &-list{   \r\n            margin:9.5% 0 0; \r\n            padding: 0;\r\n            display:flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            width: 100%;          \r\n            &-item{\r\n            width: 33%;\r\n            margin: 0 0 8%;\r\n            a{\r\n                margin:0 auto;  \r\n                line-height: 125%;\r\n                font-size: 198%;\r\n            \r\n            }\r\n        \r\n        }\r\n    \r\n   }\r\n   &-item{\r\n    display: flex;\r\n    margin: 0 0 0 2%;\r\n    width: 22%;\r\n    a{\r\n        font-size: 198%;\r\n        margin: 0;\r\n        svg{\r\n            width: 50%;\r\n            height: 50%;\r\n            margin: 0;\r\n        }\r\n    }\r\n   }\r\n   &-burger{\r\n    position: absolute;\r\n    right:2.5%;\r\n    top: 31%;\r\n    padding: 2.5% 1.9%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-radius: 40px;\r\n    border:1px solid $color-border-dark;\r\n    z-index: 999;\r\n    \r\n    span{\r\n        width: 1em;\r\n        border: 1px solid $color-text-dark;\r\n        transition: 1s;\r\n    }\r\n    .burger-one{\r\n        margin-bottom: 35%;\r\n    }\r\n   }\r\n}\r\n.burger-active{    \r\n    .span-active{\r\n        transform: rotate(45deg);\r\n        transition: 1s;\r\n    }\r\n    .span-active:last-of-type{\r\n        transform: rotate(312deg);\r\n        position: absolute;\r\n        top:43%;\r\n        transition: 1s;\r\n    }\r\n}\r\n.show{\r\n    position: absolute;\r\n    top:100%;\r\n    left:0;\r\n    width:100%;\r\n    height: 100vh;\r\n    padding: 0 0 19%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: $color-background-body;\r\n    transition: 1s;\r\n    z-index: 2;\r\n}\r\n}\r\n\r\n@media only screen and (max-width:380px){\r\n   .header{\r\n    max-width: calc(348/380*100%);\r\n    position: relative;\r\n    .logo{\r\n        max-width: calc(100/348*100%);\r\n        margin: 6% 0 4.1% 0%;\r\n    }\r\n    .menu{\r\n        position: absolute;\r\n        top:100%;\r\n        left:105%;\r\n        width:100%;\r\n        height: 100vh;\r\n        padding: 0 0 19%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        background-color: $color-background-body;\r\n        transition: 1s;\r\n        z-index: 2;\r\n        &-list{   \r\n            margin:15% 0 0; \r\n            padding: 0;\r\n            display:flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            width: 100%;          \r\n            &-item{\r\n                width: 69%;\r\n                margin: 2% 0 15%;            \r\n                a{\r\n                    margin:0 auto;  \r\n                    width: fit-content;\r\n                    line-height: 125%;\r\n                    font-size: 198%;                \r\n                }\r\n            \r\n            }\r\n        }\r\n        &-item{\r\n            display: flex;\r\n            margin: 0 0 20% 3%;\r\n            width: 45%;\r\n            a{\r\n                font-size: 198%;\r\n                margin: 0;\r\n                svg{\r\n                    width: 50%;\r\n                    height: 59%;\r\n                    margin: 0;\r\n                }\r\n            }\r\n        }\r\n        &-burger{\r\n            position: absolute;\r\n            right: 0%;\r\n            padding: 5% 4%;\r\n            display: flex;\r\n            justify-content: center;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            border-radius: 40px;\r\n            border:1px solid $color-border-dark;\r\n            span{\r\n                width: 1em;\r\n                border: 1px solid $color-text-dark;\r\n            }\r\n            .burger-one{\r\n                margin-bottom: 35%;\r\n            }\r\n        }\r\n      \r\n    }\r\n    .burger-active{    \r\n        .span-active{\r\n            transform: rotate(45deg);\r\n            transition: 1s;\r\n        }\r\n        .span-active:last-of-type{\r\n            transform: rotate(312deg);\r\n            position: absolute;\r\n            top:43%;\r\n            transition: 1s;\r\n        }\r\n    }\r\n    .show{\r\n        position: absolute;\r\n        top:100%;\r\n        left:0;\r\n        width:100%;\r\n        height: 100vh;\r\n        padding: 0 0 19%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        background-color: $color-background-body;\r\n        transition: 1s;\r\n        z-index: 2;\r\n    }\r\n   \r\n   } \r\n}\r\n\r\n@media(hover:hover){\r\n.menu:hover{\r\n        border:none;\r\n    }\r\n.menu{\r\n    &-list{\r\n       \r\n        &-link:hover{\r\n            border-bottom: 2px solid #403F3D;\r\n            transition: 0.5s;\r\n        }\r\n    }\r\n    &-list:hover{\r\n        border:none;\r\n    }\r\n    &-item:hover{\r\n        border-bottom: 2px solid #403F3D;\r\n        transition: 0.5s;\r\n    }\r\n}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7143:
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
___CSS_LOADER_EXPORT___.push([module.id, `html{scroll-behavior:smooth}html::-webkit-scrollbar{width:0px}body{background-color:#e1d4c9}*{margin:0 auto;box-sizing:border-box}a{margin:0;text-decoration:none}li{list-style-type:none}.back{position:relative;overflow:hidden}.background{position:absolute;z-index:1;filter:opacity(0.5);background-color:rgba(64,63,61,.8);width:100%;height:100%}@media screen and (min-width: 1441px){.container{width:1440px;padding:0 0 3% 0;overflow-x:hidden}main{max-width:94.4444444444%}}@media only screen and (max-width: 1440px)and (min-width: 769px){.container{width:100%;padding:0 0 3% 0;overflow-x:hidden}main{max-width:94.4444444444%}}@media only screen and (max-width: 768px)and (min-width: 381px){.container{width:100%;padding:0 0 3% 0;overflow-x:hidden}main{max-width:89.5833333333%}}@media only screen and (max-width: 380px){.container{width:100%;overflow-x:hidden}main{max-width:91.5789473684%}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/style.scss"],"names":[],"mappings":"AAwBA,KACI,sBAAA,CAEJ,wBACI,SAAA,CAIJ,KAEI,wBA/BmB,CAmCvB,EACI,aAAA,CACA,qBAAA,CAEJ,EACG,QAAA,CACA,oBAAA,CAEH,GACI,oBAAA,CAEJ,MACI,iBAAA,CACA,eAAA,CAEJ,YACI,iBAAA,CACA,SAAA,CACA,mBAAA,CACA,kCAAA,CACA,UAAA,CACA,WAAA,CAGJ,sCACI,WACI,YAAA,CACA,gBAAA,CACA,iBAAA,CAEJ,KACI,wBAAA,CAAA,CAGR,iEACI,WACI,UAAA,CACA,gBAAA,CACA,iBAAA,CAEJ,KACI,wBAAA,CAAA,CAKR,gEACI,WACI,UAAA,CACA,gBAAA,CACA,iBAAA,CAGJ,KACI,wBAAA,CAAA,CAIR,0CACI,WACI,UAAA,CACA,iBAAA,CAGL,KACC,wBAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\nhtml{\r\n    scroll-behavior: smooth;  \r\n}\r\nhtml::-webkit-scrollbar {\r\n    width: 0px;\r\n    \r\n}   \r\n           \r\nbody{\r\n   \r\n    background-color: $color-background-body;  \r\n}\r\n\r\n\r\n*{\r\n    margin: 0 auto;\r\n    box-sizing: border-box;\r\n}\r\na{\r\n   margin: 0;\r\n   text-decoration: none;\r\n}\r\nli{\r\n    list-style-type: none;\r\n}\r\n.back{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.background{\r\n    position: absolute;\r\n    z-index: 1;\r\n    filter: opacity(0.5);\r\n    background-color: #403F3DCC;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n@media screen and (min-width:1441px) {\r\n    .container{       \r\n        width: 1440px;   \r\n        padding: 0 0 3% 0;\r\n        overflow-x: hidden;\r\n    }\r\n    main{\r\n        max-width: calc(1360/1440*100%);\r\n    }\r\n}\r\n@media only screen and (max-width:1440px) and (min-width:769px){\r\n    .container{\r\n        width: 100%;   \r\n        padding: 0 0 3% 0;\r\n        overflow-x: hidden;\r\n    }\r\n    main{\r\n        max-width: calc(1360/1440*100%);\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .container{\r\n        width: 100%;\r\n        padding: 0 0 3% 0;\r\n        overflow-x: hidden;\r\n    \r\n    }\r\n    main{\r\n        max-width: calc(688/768*100%);\r\n    }\r\n    \r\n}\r\n@media only screen and (max-width:380px){\r\n    .container{\r\n        width: 100%;\r\n        overflow-x: hidden;\r\n        \r\n    }\r\n   main{\r\n    max-width: calc(348/380*100%);\r\n   } \r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3052:
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
___CSS_LOADER_EXPORT___.push([module.id, `.tab{z-index:3;position:fixed;top:21vh;left:26.5vw;display:flex;width:47%;height:fit-content;padding:1%;background-color:#e1d4c9;border-radius:40px}.tab-pic{margin:0 2% 0 0;width:70%;height:19.5em;border-radius:41px;background-size:110%;background-position:50% 50%}.tab-info{width:100%;color:#403f3d;display:flex;flex-direction:column;flex-wrap:nowrap}.tab-info h3{font-family:"Inter",sans-serif;font-weight:600;font-size:152%;margin:0 0 3% 1%}.tab-info p{font-family:"Inter",sans-serif;font-weight:400;font-size:106%;line-height:140%;letter-spacing:-0.03em;margin:0 0 5% 1%}.tab-info-buttonsName{font-family:"Inter",sans-serif;font-weight:400;font-size:106%;line-height:140%;letter-spacing:-0.03em;margin:0 0 0 1%}.tab-info .tab-buttons-size{display:flex;margin:1.5% 1% 4%}.tab-info .tab-buttons-additives{display:flex;margin:2% 0 4% 1%}.tab-info section{width:95%;margin:0 1% 7%;display:flex;justify-content:space-between}.tab-info section h4{font-family:"Inter",sans-serif;font-weight:600;font-size:24px;color:#403f3d;width:11%;margin:0}.tab-info svg{margin:0 1% 0 0;width:4%}.tab-info h5{width:94%;letter-spacing:-0.005em;margin:0;font-family:"Inter",sans-serif;font-weight:600;font-size:10px;color:#403f3d}.tab-info .tab-close{width:100%;padding:3%;border-radius:100px;border:1px solid #665f55;background-color:#e1d4c9;text-align:center;font-family:"Inter",sans-serif;font-weight:600;font-size:16px;transition:.5s}.tab-info .tab-close:hover{background-color:#665f55;color:#e1d4c9;cursor:pointer;transition:.5s}@media only screen and (max-width: 768px)and (min-width: 381px){.tab{top:12vh;width:89.5%;left:5vw;padding:1% 2%}.tab-pic{margin:1% 1% 0 0%;width:96%;height:19.5em;border-radius:41px;background-size:110%;background-position:50% 50%}.tab-info{margin:0% 1%}.tab-info h3{margin:2% 0 4% 2%}.tab-info p{margin:0 0 6% 2%}.tab-info-buttonsName{margin:1% 0 0 2%}.tab-info .tab-buttons-size{flex-wrap:wrap;justify-content:flex-start;margin:2%}.tab-info .tab-buttons-additives{flex-wrap:wrap;justify-content:flex-start;margin:2% 0 3.4% 2%}.tab-info section{width:90%;margin:0 2% 10%}.tab-info section:last-of-type{width:99%;margin:0 1% 11%}.tab-info svg{margin:0 3% 0 0;width:6%}.tab-info h5{width:94%;letter-spacing:-0.005em;margin:0;font-family:"Inter",sans-serif;font-weight:600;font-size:10px;color:#403f3d}.tab-info .tab-close{margin:0 0 4% 2%}}@media screen and (max-width: 380px){.tab{top:14vh;width:89.5%;left:5vw;padding:3% 4%}.tab-pic{display:none}.tab-info{margin:0% 1%}.tab-info h3{margin:2% 0 4% 1%}.tab-info p{margin:0 0 6% 0%}.tab-info-buttonsName{margin:1% 0 0 0%}.tab-info .tab-buttons-size{flex-wrap:wrap;justify-content:flex-start;margin:2% 0 3%}.tab-info .tab-buttons-additives{flex-wrap:wrap;justify-content:flex-start;margin:2% 0 3.4% 0%}.tab-info section{width:90%;margin:1% 0% 11%}.tab-info section:last-of-type{width:100%;margin:0 0% 11%}.tab-info svg{margin:0 3% 0 0;width:6%}.tab-info h5{width:94%;letter-spacing:-0.005em;margin:0;font-family:"Inter",sans-serif;font-weight:600;font-size:10px;color:#403f3d}.tab-info .tab-close{margin:0 0 3% 0%;padding:4%}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/tab.scss"],"names":[],"mappings":"AAwBA,KACI,SAAA,CACA,cAAA,CACA,QAAA,CACA,WAAA,CACA,YAAA,CACA,SAAA,CACA,kBAAA,CACA,UAAA,CACA,wBA9BmB,CA+BnB,kBAAA,CACA,SACI,eAAA,CACA,SAAA,CACA,aAAA,CACA,kBAAA,CACA,oBAAA,CACA,2BAAA,CAEJ,UACI,UAAA,CACA,aA7CS,CA8CT,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,aA5BJ,8BAAA,CACA,eAAA,CA6BQ,cAAA,CACA,gBAAA,CAGJ,YAvCJ,8BAAA,CACA,eAAA,CAwCQ,cAAA,CACA,gBAAA,CACA,sBAAA,CACA,gBAAA,CAEJ,sBA9CJ,8BAAA,CACA,eAAA,CA+CQ,cAAA,CACA,gBAAA,CACA,sBAAA,CACA,eAAA,CAEJ,4BACI,YAAA,CACA,iBAAA,CAEJ,iCACI,YAAA,CACA,iBAAA,CAEJ,kBACI,SAAA,CACA,cAAA,CACA,YAAA,CACA,6BAAA,CACA,qBA7DR,8BAAA,CACA,eAAA,CA8DY,cAAA,CACA,aArFC,CAsFD,SAAA,CACA,QAAA,CAGT,cACC,eAAA,CACA,QAAA,CAED,aACC,SAAA,CACA,uBAAA,CACA,QAAA,CA5EJ,8BAAA,CACA,eAAA,CA6EI,cAAA,CACA,aApGS,CAsGV,qBACC,UAAA,CACA,UAAA,CACA,mBAAA,CACA,wBAAA,CACA,wBA1GU,CA2GV,iBAAA,CAvFJ,8BAAA,CACA,eAAA,CAwFI,cAAA,CACA,cAAA,CAED,2BACC,wBA9GoB,CA+GpB,aAlHU,CAmHV,cAAA,CACA,cAAA,CAKR,gEACI,KACI,QAAA,CACA,WAAA,CACA,QAAA,CACA,aAAA,CACA,SACI,iBAAA,CACA,SAAA,CACA,aAAA,CACA,kBAAA,CACA,oBAAA,CACA,2BAAA,CAEJ,UACI,YAAA,CACA,aACI,iBAAA,CAEJ,YACI,gBAAA,CAEJ,sBACI,gBAAA,CAEJ,4BACI,cAAA,CACA,0BAAA,CACA,SAAA,CAEJ,iCACI,cAAA,CACA,0BAAA,CACA,mBAAA,CAEJ,kBACI,SAAA,CACA,eAAA,CAEJ,+BACI,SAAA,CACA,eAAA,CAEL,cACC,eAAA,CACA,QAAA,CAED,aACC,SAAA,CACA,uBAAA,CACA,QAAA,CAvJR,8BAAA,CACA,eAAA,CAwJQ,cAAA,CACA,aA/KK,CAiLN,qBACC,gBAAA,CAAA,CAMZ,qCACI,KACI,QAAA,CACA,WAAA,CACA,QAAA,CACA,aAAA,CACA,SACI,YAAA,CAEJ,UACI,YAAA,CACA,aACI,iBAAA,CAEJ,YACI,gBAAA,CAEJ,sBACI,gBAAA,CAEJ,4BACI,cAAA,CACA,0BAAA,CACA,cAAA,CAEJ,iCACI,cAAA,CACA,0BAAA,CACA,mBAAA,CAEJ,kBACI,SAAA,CACA,gBAAA,CAEJ,+BACI,UAAA,CACA,eAAA,CAEL,cACC,eAAA,CACA,QAAA,CAED,aACC,SAAA,CACA,uBAAA,CACA,QAAA,CAhNR,8BAAA,CACA,eAAA,CAiNQ,cAAA,CACA,aAxOK,CA0ON,qBACC,gBAAA,CACA,UAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.tab{\r\n    z-index: 3;\r\n    position: fixed;\r\n    top: 21vh;\r\n    left: 26.5vw;\r\n    display: flex;\r\n    width: 47%;\r\n    height: fit-content;\r\n    padding: 1%;\r\n    background-color: $color-background-body;\r\n    border-radius: 40px;\r\n    &-pic{\r\n        margin: 0 2% 0 0;\r\n        width: 70%;\r\n        height: 19.5em;\r\n        border-radius: 41px;\r\n        background-size: 110%;\r\n        background-position: 50% 50%;\r\n    }\r\n    &-info{\r\n        width: 100%;\r\n        color:$color-text-dark;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap: nowrap;\r\n        h3{\r\n            @include inter_600;\r\n            font-size: 152%;\r\n            margin: 0 0 3% 1%;\r\n            \r\n        }\r\n        p{\r\n            @include inter_400;\r\n            font-size: 106%;\r\n            line-height: 140%;\r\n            letter-spacing: -0.03em;\r\n            margin: 0 0 5% 1%;\r\n        }\r\n        &-buttonsName{\r\n            @include inter_400;\r\n            font-size: 106%;\r\n            line-height: 140%;\r\n            letter-spacing: -0.03em;\r\n            margin: 0 0 0 1%; \r\n        }\r\n        .tab-buttons-size{\r\n            display: flex;\r\n            margin: 1.5% 1% 4%;\r\n        }\r\n        .tab-buttons-additives{\r\n            display: flex;\r\n            margin: 2% 0 4% 1%;\r\n        }\r\n        section{\r\n            width: 95%;\r\n            margin: 0 1% 7%;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            h4{\r\n                @include inter_600;\r\n                font-size: 24px;\r\n                color:$color-text-dark;\r\n                width: 11%;\r\n                margin: 0;\r\n               }\r\n        }\r\n       svg{\r\n        margin: 0 1% 0 0 ;\r\n        width: 4%;\r\n       }\r\n       h5{\r\n        width: 94%;\r\n        letter-spacing: -0.005em;\r\n        margin: 0;\r\n        @include inter_600;\r\n        font-size: 10px;\r\n        color:$color-text-dark;\r\n       }\r\n       .tab-close{\r\n        width: 100%;\r\n        padding: 3%;\r\n        border-radius: 100px;\r\n        border: 1px solid $color-border-dark;\r\n        background-color:$color-text-light;\r\n        text-align: center;\r\n        @include inter_600;\r\n        font-size: 16px;   \r\n        transition: 0.5s;     \r\n       }\r\n       .tab-close:hover{\r\n        background-color: $color-background-container;\r\n        color:$color-text-light;\r\n        cursor: pointer;\r\n        transition: 0.5s;\r\n       }\r\n    }\r\n\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .tab{\r\n        top: 12vh;\r\n        width: 89.5%;\r\n        left: 5vw;\r\n        padding: 1% 2%; \r\n        &-pic{\r\n            margin: 1% 1% 0 0%;\r\n            width: 96%;\r\n            height: 19.5em;\r\n            border-radius: 41px;\r\n            background-size: 110%;\r\n            background-position: 50% 50%;\r\n        }\r\n        &-info{\r\n            margin: 0% 1%;\r\n            h3{\r\n                margin: 2% 0 4% 2%               \r\n            }\r\n            p{\r\n                margin: 0 0 6% 2%;\r\n            }\r\n            &-buttonsName{\r\n                margin: 1% 0 0 2%;\r\n            }\r\n            .tab-buttons-size{\r\n                flex-wrap: wrap;\r\n                justify-content: flex-start;\r\n                margin: 2%;\r\n            }\r\n            .tab-buttons-additives{\r\n                flex-wrap: wrap;\r\n                justify-content: flex-start;\r\n                margin: 2% 0 3.4% 2%;\r\n            }\r\n            section{\r\n                width: 90%;\r\n                margin: 0 2% 10%;\r\n            }\r\n            section:last-of-type{\r\n                width: 99%;\r\n                margin:0 1% 11%;\r\n            }\r\n           svg{\r\n            margin: 0 3% 0 0;\r\n            width: 6%;\r\n           }\r\n           h5{\r\n            width: 94%;\r\n            letter-spacing: -0.005em;\r\n            margin: 0;\r\n            @include inter_600;\r\n            font-size: 10px;\r\n            color:$color-text-dark;\r\n           }\r\n           .tab-close{\r\n            margin: 0 0 4% 2%;    \r\n           }\r\n        }\r\n    \r\n    }  \r\n}\r\n@media screen and (max-width: 380px){\r\n    .tab{\r\n        top: 14vh;\r\n        width: 89.5%;\r\n        left: 5vw;\r\n        padding: 3% 4%;\r\n        &-pic{\r\n            display: none;\r\n        }\r\n        &-info{\r\n            margin: 0% 1%;\r\n            h3{\r\n                margin: 2% 0 4% 1%               \r\n            }\r\n            p{\r\n                margin: 0 0 6% 0%;\r\n            }\r\n            &-buttonsName{\r\n                margin: 1% 0 0 0%;\r\n            }\r\n            .tab-buttons-size{\r\n                flex-wrap: wrap;\r\n                justify-content: flex-start;\r\n                margin: 2% 0 3%;\r\n            }\r\n            .tab-buttons-additives{\r\n                flex-wrap: wrap;\r\n                justify-content: flex-start;\r\n                margin: 2% 0 3.4% 0%;\r\n            }\r\n            section{\r\n                width: 90%;\r\n                margin: 1% 0% 11%;\r\n            }\r\n            section:last-of-type{\r\n                width: 100%;\r\n                margin: 0 0% 11%\r\n            }\r\n           svg{\r\n            margin: 0 3% 0 0;\r\n            width: 6%;\r\n           }\r\n           h5{\r\n            width: 94%;\r\n            letter-spacing: -0.005em;\r\n            margin: 0;\r\n            @include inter_600;\r\n            font-size: 10px;\r\n            color:$color-text-dark;\r\n           }\r\n           .tab-close{\r\n            margin: 0 0 3% 0%; \r\n            padding: 4%; \r\n           }\r\n        }\r\n    \r\n    } \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1607:
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 352:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 1864:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 5701:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 6080:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 7182:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 6850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 8236:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 9213:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 1038:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5701);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8236);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6080);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6850);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7182);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9213);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9757);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5701);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8236);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6080);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6850);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7182);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9213);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7143);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 7986:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5701);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8236);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6080);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6850);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7182);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9213);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_tab_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3052);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_tab_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_tab_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_tab_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_tab_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 1206:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5701);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8236);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6080);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6850);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7182);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9213);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_vars_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1607);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_vars_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_vars_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_vars_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_vars_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=823.js.map