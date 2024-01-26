/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8466:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/header_menu.scss
var header_menu = __webpack_require__(7382);
;// CONCATENATED MODULE: ./coffee-house/src/styles/header_menu.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(header_menu/* default */.Z, options);




       /* harmony default export */ const styles_header_menu = (header_menu/* default */.Z && header_menu/* default */.Z.locals ? header_menu/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./coffee-house/src/components/Header.js + 2 modules
var Header = __webpack_require__(3219);
// EXTERNAL MODULE: ./coffee-house/src/styles/button.scss
var styles_button = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/menu_main.scss
var menu_main = __webpack_require__(6438);
;// CONCATENATED MODULE: ./coffee-house/src/styles/menu_main.scss

      
      
      
      
      
      
      
      
      

var menu_main_options = {};

menu_main_options.styleTagTransform = (styleTagTransform_default());
menu_main_options.setAttributes = (setAttributesWithoutAttributes_default());

      menu_main_options.insert = insertBySelector_default().bind(null, "head");
    
menu_main_options.domAPI = (styleDomAPI_default());
menu_main_options.insertStyleElement = (insertStyleElement_default());

var menu_main_update = injectStylesIntoStyleTag_default()(menu_main/* default */.Z, menu_main_options);




       /* harmony default export */ const styles_menu_main = (menu_main/* default */.Z && menu_main/* default */.Z.locals ? menu_main/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./coffee-house/src/assets/icons/cup-menu-icon.png
const cup_menu_icon_namespaceObject = __webpack_require__.p + "assets/cup-menu-icon.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/icons/tea-menu-icon.png
const tea_menu_icon_namespaceObject = __webpack_require__.p + "assets/tea-menu-icon.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/icons/dessert-menu-icon.png
const dessert_menu_icon_namespaceObject = __webpack_require__.p + "assets/dessert-menu-icon.png";
;// CONCATENATED MODULE: ./coffee-house/src/components/Menu_main.js






const MenuMain = element => {
  const menu = document.createElement('main');
  menu.classList.add('menu_main');
  menu.innerHTML = `
<h1 class = "menu_main-header">Behind each of our cups hides an <span>amazing</span><span>surprise</span> </h1>
<div class="buttons">
<button class = "coffee menu_main-coffee it active">
 <img class="coffee it" src=${cup_menu_icon_namespaceObject} alt="coffee-button">
 <span class="coffee it">Coffee</span>
</button>
<button class = "tea menu_main-tea it">
 <img class="tea it" src=${tea_menu_icon_namespaceObject} alt="tea-button">
 <span class="tea it">Tea</span>
</button>
<button class = "dessert menu_main-dessert it">
 <img class="dessert it" src =${dessert_menu_icon_namespaceObject} alt="dessert-button">
 <span class="dessert it">Dessert</span>
 </button>
 </div>
<div class = "menu_main-cards">
</div>
<div class= "menu_main-refresh">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
`;
  element.append(menu);
};
/* harmony default export */ const Menu_main = (MenuMain);
// EXTERNAL MODULE: ./coffee-house/src/components/Footer.js + 1 modules
var Footer = __webpack_require__(9937);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./coffee-house/src/styles/card.scss
var card = __webpack_require__(664);
;// CONCATENATED MODULE: ./coffee-house/src/styles/card.scss

      
      
      
      
      
      
      
      
      

var card_options = {};

card_options.styleTagTransform = (styleTagTransform_default());
card_options.setAttributes = (setAttributesWithoutAttributes_default());

      card_options.insert = insertBySelector_default().bind(null, "head");
    
card_options.domAPI = (styleDomAPI_default());
card_options.insertStyleElement = (insertStyleElement_default());

var card_update = injectStylesIntoStyleTag_default()(card/* default */.Z, card_options);




       /* harmony default export */ const styles_card = (card/* default */.Z && card/* default */.Z.locals ? card/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./coffee-house/src/styles/tab.scss
var tab = __webpack_require__(7986);
;// CONCATENATED MODULE: ./coffee-house/src/components/Button.js


const Button = (elem, info, icon, buttonName, addPrice) => {
  const button = document.createElement('div');
  button.setAttribute('data-price', addPrice);
  button.classList.add(`btn`, `${buttonName}`);
  if (icon == 'S') {
    button.classList.add('active');
  }
  button.innerHTML = `
    <div data-price ="${addPrice}" class="btn-icon ${buttonName}">${icon}</div>
    <span data-price ="${addPrice}"<div data-price ="${addPrice}" class="btn-span ${buttonName}">${info}</span>
    `;
  elem.append(button);
  button.addEventListener('click', event => {
    const buttons = elem.querySelectorAll('.btn');
    if (event.target.classList[1] == 's' || event.target.classList[1] == 'm' || event.target.classList[1] == 'l') {
      buttons.forEach(btn => {
        btn.classList.remove('active');
        if (event.target.classList[1] == btn.classList[1]) {
          btn.classList.add('active');
        }
      });
    }
    if (event.target.classList[1] == '0' || event.target.classList[1] == '1' || event.target.classList[1] == '2') {
      buttons.forEach(btn => {
        if (event.target.classList[1] == btn.classList[1]) {
          btn.classList.toggle('active');
        }
      });
    }
  });
};
/* harmony default export */ const components_Button = (Button);
;// CONCATENATED MODULE: ./coffee-house/src/js/getTab.js


const createTab = (elem, picture, header, text, price, sizes, array) => {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.innerHTML = `
    <div class="tab-pic" style="background-image:url('${picture}')"></div>
    <div class="tab-info">
    <h3>${header}</h3>
    <p>${text}</p>
    <span class="tab-info-buttonsName">Size</span>
    <div class="tab-buttons-size"></div>
    <span class="tab-info-buttonsName">Additives</span>
    <div class="tab-buttons-additives"></div>
    <section>
    <h4>Total:</h4>
    <h4 id='price'>$${price}</h4>
    </section> 
    <hr/>  
    <section>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_268_12877)">
    <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_268_12877">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    <h5>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and 
    enjoy your favorite coffee with up to 20% discount.</h5>
    </section> 
    <button class="tab-close">Close</button>
    </div>
    `;
  elem.append(tab);

  //create buttons sizes and additives
  const blockBody = document.querySelector('body');
  const bigBlock = document.querySelector('.background');
  const buttonsBlockSizes = document.querySelector('.tab-buttons-size');
  const buttonsBlockAdditiv = document.querySelector('.tab-buttons-additives');
  const cont = document.querySelector('.container');
  const arrKeys = ['s', 'm', 'l'];
  arrKeys.forEach(key => {
    components_Button(buttonsBlockSizes, sizes[key].size, key.toUpperCase(), key, sizes[key]["add-price"]);
  });
  array.forEach((additive, index) => {
    components_Button(buttonsBlockAdditiv, additive.name, index + 1, index, additive["add-price"]);
  });

  //sumOrders
  let priceAdd = 0;
  tab.addEventListener('click', event => {
    const activeButtons = tab.querySelectorAll('.active');
    console.log(activeButtons);
    priceAdd = 0;
    if (event.target.hasAttribute('data-price')) {
      console.log('has');
      activeButtons.forEach(button => {
        console.log(button.dataset.price + 'price');
        priceAdd += Number(button.dataset.price);
      });
    }
    const summ = (+price + priceAdd).toFixed(2);
    const blockPrice = tab.querySelector('#price');
    blockPrice.innerHTML = `$${summ}`;
  });

  //hideTab
  const hideTab = () => {
    bigBlock.remove();
    blockBody.classList.remove('back');
    tab.remove();
  };
  document.addEventListener('click', event => {
    if (event.target.classList.contains('tab-close') || event.target.classList.contains('background')) {
      hideTab();
    }
  });
};
/* harmony default export */ const getTab = (createTab);
;// CONCATENATED MODULE: ./coffee-house/src/components/Card.js




const Card = (elem, info, index) => {
  const card = document.createElement('article');
  card.classList.add(`card`, `${index}`);
  card.innerHTML = `   
    <div style="background-image:url('${info.image}')"></div>
    <h3>${info.name}</h3>
    <p>${info.description}</p>
    <span>$ ${info.price}</span>
    `;
  const cont = document.querySelector('.container');
  card.addEventListener('click', () => {
    const blockBody = document.querySelector('body');
    const bigBlock = document.createElement('div');
    blockBody.prepend(bigBlock);
    blockBody.classList.add('back');
    bigBlock.classList.add('background');
    getTab(blockBody, `${info.image}`, `${info.name}`, `${info.description}`, `${info.price}`, info.sizes, info.additives);
  });
  elem.append(card);
};
/* harmony default export */ const components_Card = (Card);
;// CONCATENATED MODULE: ./coffee-house/src/js/getSetCards.js



const createSetCards = (parent, menu, category) => {
  menu.forEach((item, index) => {
    if (item.category == category) {
      components_Card(parent, item, index);
    }
  });
};
/* harmony default export */ const getSetCards = (createSetCards);
;// CONCATENATED MODULE: ./coffee-house/src/json/menu.json
const menu_namespaceObject = JSON.parse('[{"name":"Irish coffee","description":"Fragrant black coffee with Jameson Irish whiskey and whipped milk","price":"7.00","category":"coffee","image":"./assets/coffee-1.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Kahlua coffee","description":"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk","price":"7.00","category":"coffee","image":"./assets/coffee-2.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Honey raf","description":"Espresso with frothed milk, cream and aromatic honey","price":"5.50","category":"coffee","image":"./assets/coffee-3.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Ice cappuccino","description":"Cappuccino with soft thick foam in summer version with ice","price":"5.00","category":"coffee","image":"./assets/coffee-4.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Espresso","description":"Classic black coffee","price":"4.50","category":"coffee","image":"./assets/coffee-5.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Latte","description":"Espresso coffee with the addition of steamed milk and dense milk foam","price":"5.50","category":"coffee","image":"./assets/coffee-6.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Latte macchiato","description":"Espresso with frothed milk and chocolate","price":"5.50","category":"coffee","image":"./assets/coffee-7.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Coffee with cognac","description":"Fragrant black coffee with cognac and whipped cream","price":"6.50","category":"coffee","image":"./assets/coffee-8.jpg","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Cinnamon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Moroccan","description":"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint","price":"4.50","category":"tea","image":"./assets/tea-1.png","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Ginger","description":"Original black tea with fresh ginger, lemon and honey","price":"5.00","category":"tea","image":"./assets/tea-2.png","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Cranberry","description":"Invigorating black tea with cranberry and honey","price":"5.00","category":"tea","image":"./assets/tea-3.png","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Sea buckthorn","description":"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon","price":"5.50","category":"tea","image":"./assets/tea-4.png","sizes":{"s":{"size":"200 ml","add-price":"0.00"},"m":{"size":"300 ml","add-price":"0.50"},"l":{"size":"400 ml","add-price":"1.00"}},"additives":[{"name":"Sugar","add-price":"0.50"},{"name":"Lemon","add-price":"0.50"},{"name":"Syrup","add-price":"0.50"}]},{"name":"Marble cheesecake","description":"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam","price":"3.50","category":"dessert","image":"./assets/dessert-1.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Red velvet","description":"Layer cake with cream cheese frosting","price":"4.00","category":"dessert","image":"./assets/dessert-2.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Cheesecakes","description":"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar","price":"4.50","category":"dessert","image":"./assets/dessert-3.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Creme brulee","description":"Delicate creamy dessert in a caramel basket with wild berries","price":"4.00","category":"dessert","image":"./assets/dessert-4.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Pancakes","description":"Tender pancakes with strawberry jam and fresh strawberries","price":"4.50","category":"dessert","image":"./assets/dessert-5.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Honey cake","description":"Classic honey cake with delicate custard","price":"4.50","category":"dessert","image":"./assets/dessert-6.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Chocolate cake","description":"Cake with hot chocolate filling and nuts with dried apricots","price":"5.50","category":"dessert","image":"./assets/dessert-7.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]},{"name":"Black forest","description":"A combination of thin sponge cake with cherry jam and light chocolate mousse","price":"6.50","category":"dessert","image":"./assets/dessert-8.png","sizes":{"s":{"size":"50 g","add-price":"0.00"},"m":{"size":"100 g","add-price":"0.50"},"l":{"size":"200 g","add-price":"1.00"}},"additives":[{"name":"Berries","add-price":"0.50"},{"name":"Nuts","add-price":"0.50"},{"name":"Jam","add-price":"0.50"}]}]');
// EXTERNAL MODULE: ./coffee-house/src/js/changeBurger.js
var changeBurger = __webpack_require__(7471);
;// CONCATENATED MODULE: ./coffee-house/src/assets/icons/coffee-cup.png
const coffee_cup_namespaceObject = __webpack_require__.p + "assets/coffee-cup.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-1.jpg
const coffee_1_namespaceObject = __webpack_require__.p + "assets/coffee-1.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-2.jpg
const coffee_2_namespaceObject = __webpack_require__.p + "assets/coffee-2.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-3.jpg
const coffee_3_namespaceObject = __webpack_require__.p + "assets/coffee-3.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-4.jpg
const coffee_4_namespaceObject = __webpack_require__.p + "assets/coffee-4.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-5.jpg
const coffee_5_namespaceObject = __webpack_require__.p + "assets/coffee-5.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-6.jpg
const coffee_6_namespaceObject = __webpack_require__.p + "assets/coffee-6.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-7.jpg
const coffee_7_namespaceObject = __webpack_require__.p + "assets/coffee-7.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/coffee-8.jpg
const coffee_8_namespaceObject = __webpack_require__.p + "assets/coffee-8.jpg";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/tea-1.png
const tea_1_namespaceObject = __webpack_require__.p + "assets/tea-1.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/tea-2.png
const tea_2_namespaceObject = __webpack_require__.p + "assets/tea-2.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/tea-3.png
const tea_3_namespaceObject = __webpack_require__.p + "assets/tea-3.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/tea-4.png
const tea_4_namespaceObject = __webpack_require__.p + "assets/tea-4.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-1.png
const dessert_1_namespaceObject = __webpack_require__.p + "assets/dessert-1.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-2.png
const dessert_2_namespaceObject = __webpack_require__.p + "assets/dessert-2.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-3.png
const dessert_3_namespaceObject = __webpack_require__.p + "assets/dessert-3.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-4.png
const dessert_4_namespaceObject = __webpack_require__.p + "assets/dessert-4.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-5.png
const dessert_5_namespaceObject = __webpack_require__.p + "assets/dessert-5.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-6.png
const dessert_6_namespaceObject = __webpack_require__.p + "assets/dessert-6.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-7.png
const dessert_7_namespaceObject = __webpack_require__.p + "assets/dessert-7.png";
;// CONCATENATED MODULE: ./coffee-house/src/assets/images/dessert-8.png
const dessert_8_namespaceObject = __webpack_require__.p + "assets/dessert-8.png";
;// CONCATENATED MODULE: ./coffee-house/src/menu.js






























const container = document.querySelector('.container');
(0,Header/* default */.Z)(container);
Menu_main(container);
(0,Footer/* default */.Z)(container);
const burger = document.querySelector('.menu-burger');
const spans = burger.querySelectorAll('span');
const menu = document.querySelector('.menu');
const buttonsBlock = document.querySelector('.buttons');
const buttons = buttonsBlock.querySelectorAll('button');
const boxCards = document.querySelector('.menu_main-cards');
const buttonMore = document.querySelector('.menu_main-refresh');
let set = 'coffee';
getSetCards(boxCards, menu_namespaceObject, set);
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
buttonsBlock.addEventListener('click', event => {
  if (event.target.classList.contains('it')) {
    set = event.target.classList[0];
    buttons.forEach(button => {
      button.classList.contains(set) ? button.classList.add('active') : button.classList.remove('active');
    });
  }
  boxCards.innerHTML = '';
  getSetCards(boxCards, menu_namespaceObject, set);
  boxCards.children.length == 4 ? buttonMore.classList.add('host') : buttonMore.classList.remove('host');
});
buttonMore.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style = 'display:flex';
  });
  buttonMore.classList.add('host');
});
/* harmony default export */ const src_menu = ((/* unused pure expression or super */ null && (container)));

/***/ }),

/***/ 664:
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
___CSS_LOADER_EXPORT___.push([module.id, `.card{margin:0 0 3.2%;width:clamp(150px,24%,310px);display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;color:#403f3d;border:1px solid #c1b6ad;border-radius:40px;transition:.5s}.card div{height:clamp(150px,21.4vw,340px);width:100%;margin:0;border-radius:40px;background-size:110%;background-position:50% 50%}.card h3{font-family:"Inter",sans-serif;font-weight:600;font-size:clamp(15px,1.7vw,24px);line-height:125%;margin:6.5% 6% 4%}.card p{font-family:"Inter",sans-serif;font-weight:400;font-size:clamp(10px,1.11vw,16px);line-height:150%;width:87%;height:4.5em;margin:0 6% 3%}.card span{font-family:"Inter",sans-serif;font-weight:600;font-size:clamp(15px,1.7vw,24px);line-height:125%;margin:1% 6% 6%}@media only screen and (min-width: 1441px){.card div{height:310px}}@media(hover: hover){.card:hover{cursor:pointer}.card:hover div{background-size:100%;transition:.5s}}@media only screen and (max-width: 768px)and (min-width: 381px){.card{width:clamp(150px,45%,310px);margin:0 0 6% 1%}.card div{height:clamp(150px,40.3vw,310px)}.card h3{font-size:clamp(15px,3.7vw,24px)}.card p{font-size:clamp(10px,2.11vw,16px)}.card span{margin:1% 6% 6%;font-size:clamp(15px,3.7vw,24px)}.card:nth-of-type(5),.card:nth-of-type(6),.card:nth-of-type(7),.card:nth-of-type(8){display:none}.card{margin:0 1% 6% 0}}@media only screen and (max-width: 380px){.card{width:clamp(150px,90%,310px);margin:0 0 11.8% 0%}.card div{height:clamp(150px,80.8vw,310px)}.card h3{font-size:24px}.card p{font-size:16px}.card span{margin:1% 6% 6.5%;font-size:24px}.card:nth-of-type(5),.card:nth-of-type(6),.card:nth-of-type(7),.card:nth-of-type(8){display:none}.non-host{display:flex}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/card.scss"],"names":[],"mappings":"AAwBA,MACI,eAAA,CACA,4BAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,6BAAA,CACA,aA/Ba,CAgCb,wBAAA,CACA,kBAAA,CACA,cAAA,CACA,UACI,gCAAA,CACA,UAAA,CACA,QAAA,CACA,kBAAA,CACA,oBAAA,CACA,2BAAA,CAEJ,SAtBA,8BAAA,CACA,eAAA,CAuBI,gCAAA,CACA,gBAAA,CACA,iBAAA,CAEJ,QAjCA,8BAAA,CACA,eAAA,CAkCI,iCAAA,CACA,gBAAA,CACA,SAAA,CACA,YAAA,CACA,cAAA,CAEJ,WApCA,8BAAA,CACA,eAAA,CAqCI,gCAAA,CACA,gBAAA,CACA,eAAA,CAIR,2CAEQ,UACI,YAAA,CAAA,CAIZ,qBACI,YACI,cAAA,CACA,gBACI,oBAAA,CACA,cAAA,CAAA,CAUZ,gEACI,MACI,4BAAA,CACA,gBAAA,CACA,UACI,gCAAA,CAEJ,SACI,gCAAA,CAEJ,QACI,iCAAA,CAEJ,WACI,eAAA,CACA,gCAAA,CAGR,oFAII,YAAA,CAEJ,MACI,gBAAA,CAAA,CAIR,0CACI,MACI,4BAAA,CACA,mBAAA,CACA,UACI,gCAAA,CAEJ,SACI,cAAA,CAEJ,QACI,cAAA,CAEJ,WACI,iBAAA,CACA,cAAA,CAGR,oFAII,YAAA,CAEJ,UACI,YAAA,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.card{\r\n    margin: 0 0 3.2%;\r\n    width: clamp(150px ,24%, 310px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    color:$color-text-dark;\r\n    border:1px solid $color-border-light;\r\n    border-radius: 40px;\r\n    transition: 0.5s;\r\n    div{\r\n        height: clamp(150px, 21.4vw, 340px);\r\n        width: 100%;\r\n        margin: 0;\r\n        border-radius: 40px;\r\n        background-size: 110%;\r\n        background-position: 50% 50%;\r\n    }\r\n    h3{\r\n        @include inter_600;\r\n        font-size: clamp(15px, 1.7vw, 24px);\r\n        line-height: 125%;\r\n        margin: 6.5% 6% 4%;\r\n    }\r\n    p{\r\n        @include inter_400;\r\n        font-size:clamp(10px, 1.11vw, 16px);\r\n        line-height: 150%;\r\n        width: 87%;\r\n        height: 4.5em;\r\n        margin: 0 6% 3%;\r\n    }\r\n    span{\r\n        @include inter_600;\r\n        font-size: clamp(15px, 1.7vw, 24px);\r\n        line-height: 125%;\r\n        margin: 1% 6% 6%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:1441px){\r\n    .card{       \r\n        div{\r\n            height: 310px;\r\n        }\r\n    }\r\n}\r\n@media (hover:hover){\r\n    .card:hover{\r\n        cursor: pointer;       \r\n        div{\r\n            background-size: 100%; \r\n            transition: 0.5s;\r\n         \r\n        }\r\n    }\r\n    // .card:nth-of-type(2):hover{\r\n    //     div{\r\n    //         background-size: 110%;\r\n    //     }\r\n    // }\r\n}\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .card{\r\n        width:clamp(150px ,45%, 310px);\r\n        margin: 0 0 6% 1%; \r\n        div{\r\n            height: clamp(150px, 40.3vw, 310px);\r\n        }\r\n        h3{\r\n            font-size: clamp(15px, 3.7vw, 24px);\r\n        }\r\n        p{\r\n            font-size:clamp(10px, 2.11vw, 16px);\r\n        }\r\n        span{\r\n            margin: 1% 6% 6%;\r\n            font-size: clamp(15px, 3.7vw, 24px);\r\n        }\r\n    }\r\n    .card:nth-of-type(5),\r\n    .card:nth-of-type(6),\r\n    .card:nth-of-type(7),\r\n    .card:nth-of-type(8){\r\n        display: none;\r\n    }\r\n    .card{\r\n        margin: 0 1% 6% 0; \r\n    }\r\n   \r\n}\r\n@media only screen and (max-width:380px){\r\n    .card{\r\n        width:clamp(150px ,90%, 310px);\r\n        margin: 0 0 11.8% 0%; \r\n        div{\r\n            height: clamp(150px, 80.8vw, 310px);\r\n        }\r\n        h3{\r\n            font-size: 24px;\r\n        }\r\n        p{\r\n            font-size: 16px;\r\n        }\r\n        span{\r\n            margin: 1% 6% 6.5%;\r\n            font-size:  24px;\r\n        }\r\n    }\r\n    .card:nth-of-type(5),\r\n    .card:nth-of-type(6),\r\n    .card:nth-of-type(7),\r\n    .card:nth-of-type(8){\r\n        display: none;\r\n    }\r\n    .non-host{\r\n        display: flex;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7382:
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
___CSS_LOADER_EXPORT___.push([module.id, `.menu-item{border-bottom:2px solid #403f3d;pointer-events:none}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/header_menu.scss"],"names":[],"mappings":"AAwBA,WACI,+BAAA,CACA,mBAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.menu-item{\r\n    border-bottom: 2px solid $color-text-dark;\r\n    pointer-events: none;\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6438:
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
___CSS_LOADER_EXPORT___.push([module.id, `.menu_main{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.menu_main-header{width:60%;margin:1.2% 19%;text-align:center;font-family:"Inter",sans-serif;font-weight:600;color:#403f3d;font-size:60px;line-height:125%}.menu_main-header span{margin:0 1.8% 0 -0.7%;display:inline-block;color:#b0907a;font-style:italic;transform:skewX(6deg)}.menu_main-header :last-of-type{margin:0 .7% 0 0}.menu_main .buttons{display:flex;width:27%;margin:0 auto 3%}.menu_main .buttons button{margin:6.6% 1.9% 0px 1%;padding:2% 4.5%;border:1px solid #000;border-radius:35px;display:flex;background-color:#e1d4c9;border:1px solid #c1b6ad;color:#403f3d;font-family:"Inter",sans-serif;font-weight:600;font-size:16px;line-height:150%;transition:.5s}.menu_main .buttons button img{margin:0% 4% 0 -9%}.menu_main .buttons button span{margin:4% 0% 0 4%}.menu_main .buttons .active{background-color:#665f55;color:#e1d4c9}.menu_main-cards{width:100%;margin:0 0 1.8%;padding:0 .1% 0 0%;display:flex;flex-wrap:wrap;justify-content:space-between}.menu_main-refresh{display:none}.menu_main .host{display:none}.menu_main .non-host{display:flex}@media only screen and (max-width: 768px)and (min-width: 381px){.menu_main-header{width:100%;margin:1.3% 0}.menu_main-header span{margin:0 .8% 0 -0.7%}.menu_main-header :last-of-type{margin:0 1.1% 3% 0}.menu_main .buttons{width:51%}.menu_main .buttons button{margin:2.6% 1.3% 3% 1.5%;padding:2.3% 4.5%}.menu_main-cards{justify-content:space-around;align-content:space-around;padding:0;margin:0}.menu_main-refresh{display:block;width:3.8em;height:3.8em;margin-bottom:11.6%;border:1px solid #403f3d;border-radius:30px}.menu_main-refresh svg{margin:29% 0 0 29%}}@media only screen and (max-width: 380px){.menu_main{justify-content:space-between}.menu_main h1{width:86.2068965517%;margin:0 auto;font-size:195%;letter-spacing:.01em}.menu_main h1 span{margin:1% 4% 12.5% 0}.menu_main .buttons{width:100%;margin:0 auto;justify-content:space-between}.menu_main .buttons button:first-of-type{width:34.4827586207%;margin:0 0 11.5%;padding:2.5% 4%}.menu_main .buttons button:nth-of-type(2){width:25.8620689655%;margin:0 0 11.5%;padding:2.5% 4%}.menu_main .buttons button:last-of-type{width:35.632183908%;margin:0 0 11.5%;padding:2.5% 4%}.menu_main-cards{width:100%;flex-direction:column;align-items:center}.menu_main-refresh{display:block;width:3.8em;height:3.8em;border:1px solid #403f3d;border-radius:30px;margin:-1.5% auto 26%}.menu_main-refresh svg{margin:29% 0 0 29%}}@media(hover: hover){.menu_main button:hover{cursor:pointer;background-color:#665f55;color:#e1d4c9;transition:.5s}.menu_main-refresh:hover{cursor:pointer;background-color:#665f55;transition:.5s}.menu_main-refresh:hover svg path{stroke:#e1d4c9}}`, "",{"version":3,"sources":["webpack://./coffee-house/src/styles/menu_main.scss"],"names":[],"mappings":"AAwBA,WACI,YAAA,CACA,kBAAA,CACA,cAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBACI,SAAA,CACA,eAAA,CACA,iBAAA,CAZJ,8BAAA,CACA,eAAA,CAaI,aAnCS,CAoCT,cAAA,CACA,gBAAA,CACA,uBACI,qBAAA,CACA,oBAAA,CACA,aAvCO,CAwCP,iBAAA,CACA,qBAAA,CACH,gCACG,gBAAA,CAGR,oBACI,YAAA,CACA,SAAA,CACA,gBAAA,CACA,2BACI,uBAAA,CACA,eAAA,CACA,qBAAA,CACA,kBAAA,CACA,YAAA,CACA,wBAzDM,CA0DN,wBAAA,CACA,aA5DK,CAqBb,8BAAA,CACA,eAAA,CAwCQ,cAAA,CACA,gBAAA,CACA,cAAA,CACA,+BACI,kBAAA,CAEJ,gCACI,iBAAA,CAGR,4BACI,wBArEgB,CAsEhB,aAzEM,CAgFd,iBACI,UAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CACA,cAAA,CACA,6BAAA,CAEJ,mBACI,YAAA,CAEJ,iBACI,YAAA,CAEJ,qBACI,YAAA,CAIR,gEAEQ,kBACI,UAAA,CACA,aAAA,CACA,uBACI,oBAAA,CACH,gCACG,kBAAA,CAGR,oBACI,SAAA,CACA,2BACI,wBAAA,CACA,iBAAA,CAIR,iBACI,4BAAA,CACA,0BAAA,CACA,SAAA,CACA,QAAA,CAEJ,mBACI,aAAA,CACA,WAAA,CACA,YAAA,CACA,mBAAA,CACA,wBAAA,CACA,kBAAA,CACA,uBACI,kBAAA,CAAA,CAMhB,0CACI,WACI,6BAAA,CACA,cACI,oBAAA,CACA,aAAA,CACA,cAAA,CACA,oBAAA,CACA,mBACI,oBAAA,CAGR,oBACI,UAAA,CACA,aAAA,CACA,6BAAA,CACA,yCACI,oBAAA,CACA,gBAAA,CACA,eAAA,CAEJ,0CACI,oBAAA,CACA,gBAAA,CACA,eAAA,CAEJ,wCACI,mBAAA,CACA,gBAAA,CACA,eAAA,CAIR,iBACI,UAAA,CACA,qBAAA,CACA,kBAAA,CAEJ,mBACI,aAAA,CACA,WAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,qBAAA,CAEA,uBACI,kBAAA,CAAA,CAKhB,qBAEQ,wBACI,cAAA,CACA,wBA/LgB,CAgMhB,aAnMM,CAoMN,cAAA,CAEJ,yBACI,cAAA,CACA,wBArMgB,CAsMhB,cAAA,CAEI,kCACI,cA5MF,CAAA","sourcesContent":["$color-text-dark:#403F3D;\r\n$color-text-light:#E1D4C9;\r\n$color-text-accent:#B0907A;\r\n$color-background-body:#E1D4C9;\r\n$color-background-container:#665F55;\r\n$color-background-backdrop:#403F3DCC;\r\n$color-border-light:#C1B6AD;\r\n$color-border-dark:#665F55;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@mixin inter_400{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 400;\r\n    \r\n}\r\n@mixin inter_600{\r\n    font-family: 'Inter', sans-serif;   \r\n    font-weight: 600;\r\n}\n.menu_main{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    &-header{\r\n        width: 60%;\r\n        margin: 1.2% 19%;\r\n        text-align: center;\r\n        @include inter_600;\r\n        color:$color-text-dark;\r\n        font-size: 60px;\r\n        line-height: 125%;\r\n        span{\r\n            margin: 0 1.8% 0 -0.7%;\r\n            display: inline-block;\r\n            color:$color-text-accent; \r\n            font-style: italic;\r\n            transform: skewX(6deg);\r\n        }:last-of-type{\r\n            margin: 0 0.7% 0 0;\r\n        }\r\n    }\r\n    .buttons{\r\n        display: flex;\r\n        width: 27%;\r\n        margin: 0 auto 3%;\r\n        button{\r\n            margin: 6.6% 1.9% 0px 1%;\r\n            padding: 2% 4.5%;\r\n            border: 1px solid black;\r\n            border-radius: 35px;\r\n            display: flex;\r\n            background-color:$color-text-light;\r\n            border: 1px solid $color-border-light; \r\n            color:$color-text-dark;\r\n            @include inter_600;\r\n            font-size: 16px;\r\n            line-height: 150%;\r\n            transition: 0.5s;\r\n            img{\r\n                margin: 0% 4% 0 -9%;\r\n            }\r\n            span{\r\n                margin:4% 0% 0 4%;\r\n            }\r\n        }\r\n        .active{\r\n            background-color: $color-background-container;\r\n            color:$color-text-light;\r\n        }\r\n    }\r\n \r\n  \r\n\r\n  \r\n    &-cards{\r\n        width: 100%;\r\n        margin: 0 0 1.8%;\r\n        padding: 0 .1% 0 0%;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;       \r\n    }\r\n    &-refresh{\r\n        display: none;\r\n    }\r\n    .host{\r\n        display: none;\r\n    }\r\n    .non-host{\r\n        display: flex;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (min-width:381px){\r\n    .menu_main{\r\n        &-header{\r\n            width: 100%;\r\n            margin: 1.3% 0 ;\r\n            span{\r\n                margin: 0 0.8% 0 -0.7%;\r\n            }:last-of-type{\r\n                margin: 0 1.1% 3% 0;\r\n            }\r\n        }\r\n        .buttons{\r\n            width: 51%;\r\n            button{\r\n                margin: 2.6% 1.3% 3% 1.5%;\r\n                padding: 2.3% 4.5%;\r\n            }\r\n        }\r\n      \r\n        &-cards{\r\n            justify-content: space-around;\r\n            align-content: space-around;\r\n            padding: 0;\r\n            margin: 0;\r\n        }\r\n        &-refresh{\r\n            display: block;\r\n            width: 3.8em;\r\n            height: 3.8em;\r\n            margin-bottom: 11.6%;\r\n            border: 1px solid $color-text-dark;\r\n            border-radius: 30px;\r\n            svg{\r\n                margin: 29% 0 0 29%;\r\n            }\r\n        }\r\n        \r\n    }\r\n}\r\n@media only screen and (max-width:380px){\r\n    .menu_main{\r\n        justify-content: space-between;\r\n        h1{\r\n            width: calc(300/348*100%);\r\n            margin: 0 auto;\r\n            font-size: 195%;\r\n            letter-spacing: 0.01em;\r\n            span{\r\n                margin: 1% 4% 12.5% 0;\r\n            }\r\n        }\r\n        .buttons{\r\n            width: 100%;\r\n            margin: 0 auto;\r\n            justify-content: space-between;\r\n            button:first-of-type{\r\n                width: calc(120/348*100%);\r\n                margin: 0 0 11.5%;\r\n                padding: 2.5% 4%;\r\n            }\r\n            button:nth-of-type(2){\r\n                width: calc(90/348*100%);\r\n                margin:0 0 11.5%;\r\n                padding: 2.5% 4%;\r\n            }\r\n            button:last-of-type{\r\n                width: calc(124/348*100%);\r\n                margin: 0 0 11.5%;\r\n                padding: 2.5% 4%;\r\n            }\r\n        }\r\n       \r\n        &-cards{\r\n            width: 100%;\r\n            flex-direction: column;\r\n            align-items: center;\r\n        }\r\n        &-refresh{\r\n            display: block;\r\n            width: 3.8em;\r\n            height: 3.8em;\r\n            border: 1px solid $color-text-dark;\r\n            border-radius: 30px;\r\n            margin: -1.5% auto 26%;\r\n\r\n            svg{\r\n                margin: 29% 0 0 29%;\r\n            }\r\n        }\r\n    }\r\n}\r\n@media(hover:hover){\r\n    .menu_main{\r\n        button:hover{\r\n            cursor: pointer;\r\n            background-color: $color-background-container;\r\n            color:$color-text-light;\r\n            transition: 0.5s;\r\n        }\r\n        &-refresh:hover{\r\n            cursor: pointer;\r\n            background-color: $color-background-container ;\r\n            transition: 0.5s;\r\n            svg{\r\n                path{\r\n                    stroke: $color-text-light;\r\n                }               \r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			860: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [823], () => (__webpack_require__(8466)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=menu.js.map