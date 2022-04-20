<<<<<<< HEAD
(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),d=t(667),c=t.n(d),s=new URL(t(503),t.b),l=i()(o()),p=c()(s);l.push([e.id,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    background: url("+p+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\nul {\n    padding: 0px;\n}\n\nli {\n    list-style: none;\n    padding: 5px;      \n}\n\na {\n    color: black;\n    padding: 10px;\n    background-color: blanchedalmond;\n    border-radius: 20px;\n}\n\nbutton {\n   border: none;\n}\n\n.tabsContainer {\n    display: flex;\n    justify-content: center;\n}\n\n.tab {\n    background-color: blanchedalmond;\n    padding: 15px;\n    width: 95px;\n    margin-top: 15px;\n    margin-left: 15px;\n    margin-right: 15px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: solid 1px black;\n}\n\n.tab:active {\n    border-bottom: none;\n}\n\n.container {\n    display: flex;\n    justify-content: center;\n    width: 750px;\n    height: 925px;\n    margin: auto;\n    background-color: blanchedalmond;\n    border-radius: 20px;\n    overflow: auto;\n}\n\n.mainPage {\n    font-size: 22px;\n}\n\n.mainPageBox1 {\n    padding: 30px;\n    text-align: center;\n    font-size: 2rem;\n    border: solid 2px black;\n    width: 450px;\n    margin-top: 45px;    \n    background-color: floralwhite;\n    border-radius: 10px;\n}\n\n.mainPageBox2 {\n    font-size: 1rem;\n    margin-top: 65px;    \n}\n\n.mainPageBox3 {\n    padding: 40px;\n    font-size: 1.25rem;\n    margin-top: 35px;    \n}\n\n.mainPageBox4 {\n    padding: 40px;\n    font-size: 1.25rem;\n    margin-top: 35px;\n    margin-bottom: 20px;    \n}\n\n.footer {\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    height: 50px; \n    margin-top: 20px;\n}\n\n.smallBox {\n    padding: 15px;\n    text-align: center;\n    font-size: 1.25rem;\n    border: solid 2px black;\n    width: 450px;\n    margin-top: 45px;    \n    background-color: floralwhite;\n    border-radius: 10px;\n}\n\n.bigBox {\n    padding: 40px;\n    font-size: 1rem;\n    height: 200px;\n    margin-top: 30px;  \n    margin-bottom: 35px;  \n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var x=o(m,a);a.byIndex=d,n.splice(d,0,{identifier:p,updater:x,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var d=t(r[i]);n[d].references--}for(var c=a(e,o),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},503:(e,n,t)=>{e.exports=t.p+"7ef6f50e4de45a641ddb.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),x={};function f(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("tabsContainer"),e.appendChild(n);for(let e=0;e<3;e++){const t=["Home","Menu","Contact"],a=document.createElement("button");a.setAttribute("type","button"),a.id="tab",a.classList.add("tab"),n.appendChild(a),a.textContent=t[e]}}function g(){const e=document.getElementById("content"),n=document.createElement("div");n.id="container",n.classList.add("container"),e.appendChild(n);const t=document.createElement("div");t.classList.add("mainPage"),n.appendChild(t);const a=document.createElement("div");a.classList.add("mainPageBox1"),t.appendChild(a),a.textContent="Ristorante Rustica";const o=document.createElement("div");o.classList.add("mainPageBox2","mainPageBox1"),t.appendChild(o),o.textContent="Sophisticated yet casual. Ristorante Rustica serves fresh, homemade Italian food. Whether you are celebrating a special occasion or just want to grab a quick bite to eat, Ristorante Rustica will satisfy your senses on every level.";const r=document.createElement("div");r.classList.add("mainPageBox3","mainPageBox1"),t.appendChild(r),r.textContent="Hours of Operation";const i=document.createElement("div");i.classList.add("mainPageBox4","mainPageBox1"),t.appendChild(i),i.textContent="Location";const d=document.createElement("ul");d.classList.add("hoursBox"),r.appendChild(d);for(let e=0;e<7;e++){const n=["Monday: 1pm - 10pm","Tuesday: 1pm - 10pm","Wednesday: 1pm - 10pm","Thurday: 1pm - 10pm","Friday: 1pm - 10pm","Saturday: 1pm - 10pm","Sunday: 1pm - 10pm"],t=document.createElement("li");t.classList.add("li"),d.appendChild(t),t.textContent=n[e]}}function h(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("footer"),e.appendChild(n);for(let e=0;e<3;e++){const t=["click me","click me","click me"],a=document.createElement("a");a.setAttribute("href","yourlink.here"),n.appendChild(a),a.textContent=t[e]}}function v(){document.getElementById("content").replaceChildren()}x.styleTagTransform=u(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),n()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,f(),function e(){const n=document.querySelectorAll("button");n[0].addEventListener("click",(()=>{v(),f(),e(),g(),h()})),n[1].addEventListener("click",(()=>{v(),f(),e(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("container"),e.appendChild(n);const t=document.createElement("div");t.classList.add("mainPage"),n.appendChild(t);const a=document.createElement("div");a.classList.add("mainPageBox1"),t.appendChild(a),a.textContent="Menu";const o=document.createElement("div");o.classList.add("smallBox"),t.appendChild(o),o.textContent="Appetizers";const r=document.createElement("div");r.classList.add("bigBox","smallBox"),t.appendChild(r),r.textContent="Oysters ala fornio";const i=document.createElement("div");i.classList.add("smallBox"),t.appendChild(i),i.textContent="Salads";const d=document.createElement("div");d.classList.add("bigBox","smallBox"),t.appendChild(d),d.textContent="Insalata Caprese";const c=document.createElement("div");c.classList.add("smallBox"),t.appendChild(c),c.textContent="Entrees";const s=document.createElement("div");s.classList.add("bigBox","smallBox"),t.appendChild(s),s.textContent="Osso Bucco";const l=document.createElement("div");l.classList.add("smallBox"),t.appendChild(l),l.textContent="Desserts";const p=document.createElement("div");p.classList.add("bigBox","smallBox"),t.appendChild(p),p.textContent="Tira Misu";const u=document.createElement("div");u.classList.add("smallBox"),t.appendChild(u),u.textContent="Beverages";const m=document.createElement("div");m.classList.add("bigBox","smallBox"),t.appendChild(m),m.textContent="Wine"}(),h()})),n[2].addEventListener("click",(()=>{v(),f(),e(),function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("container"),e.appendChild(n);const t=document.createElement("div");t.classList.add("mainPage"),n.appendChild(t);const a=document.createElement("div");a.classList.add("mainPageBox1"),t.appendChild(a),a.textContent="Contact Us";const o=document.createElement("div");o.classList.add("bigBox","smallBox"),t.appendChild(o),o.textContent="Contact 1";const r=document.createElement("div");r.classList.add("bigBox","smallBox"),t.appendChild(r),r.textContent="Contact 2";const i=document.createElement("div");i.classList.add("bigBox","smallBox"),t.appendChild(i),i.textContent="Contact 3"}(),h()}))}(),g(),h()})()})();
=======
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background-image.jpg */ \"./src/background-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --font-color: aliceblue;\\n    --border-color: rgb(231, 227, 227);\\n    --background-light: rgba(0, 0, 0, 0.6);\\n    --background-dark: rgba(0, 0, 0, 0.8);\\n}\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nbody {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    background-attachment: fixed;\\n}\\n\\n.header {\\n    background-color: var(--background-dark);\\n    text-align: center;\\n    padding-top: .5em;\\n   \\n}\\n\\n.name {\\n    margin-top: 1em;\\n    color:var(--font-color);\\n}\\n\\na {\\n    color: var(--font-color);\\n    text-decoration: none;\\n}\\n\\n.navBar {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.tab {\\n    background-color: transparent;\\n    color: var(--font-color);\\n    padding: 1em;\\n    border-style: none;\\n    margin-right: 2em;\\n    margin-bottom: 2em;\\n}\\n\\n.tab.active {\\n    border-bottom: solid 2px aliceblue;\\n}\\n\\n.main {\\n    min-height: calc(100vh - 70px);\\n    border: 1px solid var(--border-color);\\n}\\n\\n.home {\\n    padding: 2em;\\n    text-align: center;\\n    font-size: 1.5em;\\n    border: solid 2px black;\\n    width: 40vw;\\n    margin-top: 3em;  \\n    background-color: var(--background-dark);\\n    color: var(--font-color);\\n    margin-left: auto;\\n    margin-right: auto;\\n    border: 1px solid var(--border-color);\\n}\\n\\n.home img {\\n    width: 40%;\\n    border-radius: 50%;\\n    margin-top: 2em;\\n    margin-bottom: 2em;\\n}\\n\\n.footer {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    width: 100%;\\n    background-color: var(--background-light);\\n    padding: 1rem;\\n    height: 50px;\\n}\\n\\n.card {\\n    padding: 2em;\\n    font-size: 1rem;\\n    margin-top: 2em;  \\n    margin-bottom: 2em;\\n    margin-left: auto;\\n    margin-right: auto;\\n    text-align: center;\\n    background-color: var(--background-dark);\\n    color: var(--font-color);\\n    width: 35vw;\\n    border: 1px solid var(--border-color);\\n}\\n\\n.card img {\\n    width: 40%;\\n    border-radius: 50%;\\n    margin-bottom: 2em;\\n    margin-top: 2em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaraunt/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaraunt/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaraunt/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaraunt/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaraunt/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaraunt/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaraunt/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaraunt/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaraunt/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaraunt/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaraunt/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction createContactPage() {\n\n    const contact = document.createElement('div');\n    contact.classList.add('card');\n    contact.textContent = 'Contact us for reservations.'\n\n    const phoneNum = document.createElement('p');\n    phoneNum.textContent = 'Phone 900 867 5309';\n\n    const address = document.createElement('p');\n    address.textContent = '101 Main Street, Anytown, USA';\n\n    const location = document.createElement('img');\n    location.src = 'https://previews.123rf.com/images/vadmary/vadmary1302/vadmary130200032/17960630-street-map-with-gps-icons-navigation.jpg';\n    location.alt = '';\n\n    contact.appendChild(phoneNum);\n    contact.appendChild(address);\n    contact.appendChild(location);\n\n    return contact;\n}\n\nfunction loadContactPage() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createContactPage());\n}\n\n\n\n//# sourceURL=webpack://restaraunt/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction createHomePage() {\n\n    const homePage = document.createElement('div');\n    homePage.classList.add('home');\n\n    const image = document.createElement('img');\n    image.src = 'https://images.freeimages.com/images/large-previews/015/pasta-1327648.jpg';\n    image.alt = '';\n\n    \n    homePage.appendChild(createParagraph('Sophisticated, yet casual.'));\n    homePage.appendChild(createParagraph('Ristorante Rustica serves fresh, homemade Italian food.'));\n    homePage.appendChild(image);\n    homePage.appendChild(createParagraph('Whether you are celebrating a special occasion or just want to grab a quick bite to eat, Ristorante Rustica will satisfy your senses on every level.'));\n    \n    return homePage;\n}\n\nfunction createParagraph(text) {\n    const para = document.createElement('p');\n    para.textContent = text;\n    return para;\n}\n\nfunction loadHomePage() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHomePage());\n}\n\n\n\n//# sourceURL=webpack://restaraunt/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ \"./src/site.js\");\n\n\n(0,_site__WEBPACK_IMPORTED_MODULE_0__.initSite)();\n\n//# sourceURL=webpack://restaraunt/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction createMenuPage() {\n    const menu = document.createElement('div');\n    menu.classList.add('menuPage');\n    \n    menu.appendChild(\n        createItem(\n            'Campofiloni alle Cozze',\n            'Mussels with black pasta, sea fruits and little tomatoes.',\n            'https://images.freeimages.com/images/large-previews/fb6/campofiloni-alle-cozze-1544984.jpg'\n        )\n    );\n    menu.appendChild(\n        createItem(\n            'Insalata Caprese',\n            'Slices of fresh tomato layered with Basil and house-made fresh mozzerella.',\n            'https://images.freeimages.com/images/large-previews/df3/fine-italian-food-gallery-1-1519673.jpg'\n        )\n    );\n    menu.appendChild(\n        createItem(\n            'Pizza Rustica',\n            'Classic homemade pizza topped with fresh tomatoes, feta cheese, and arugala.',\n            'https://images.freeimages.com/images/large-previews/22e/pizza-1-1326545.jpg'\n        )\n    );\n    menu.appendChild(\n        createItem(\n            'Tira Misu',\n            'Ladyfingers dipped in expresso, layered with marscepone cheese, whipped cream, and dusted with chocolate.',\n            'https://images.freeimages.com/images/large-previews/9d8/sweet-7-1321782.jpg'\n        )\n    );\n    menu.appendChild(\n        createItem(\n            'Beverages',\n            'Espresso, Beer, Wine, Soda',\n            'https://images.freeimages.com/images/small-previews/3bc/cappucino-1329298.jpg'\n        )\n    );\n    return menu;\n}\n\nfunction createItem(name, description, img) {\n\n    const item = document.createElement('div');\n    item.classList.add('card');\n\n    const itemName = document.createElement('h2');\n    itemName.textContent = name;\n\n    const itemDescription = document.createElement('p');\n    itemDescription.textContent = description;\n\n    const itemImage = document.createElement('img')\n    itemImage.src = img;\n    itemImage.alt = name;\n    \n    item.appendChild(itemImage);\n    item.appendChild(itemName);\n    item.appendChild(itemDescription);\n\n    return item;\n}\n\nfunction loadMenuPage() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createMenuPage())\n}\n\n\n\n//# sourceURL=webpack://restaraunt/./src/menu.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSite\": () => (/* binding */ initSite)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('div');\n    header.classList.add('header');\n    \n    const name = document.createElement('h1');\n    name.classList.add('name');\n    name.textContent = 'Ristorante Rustica';\n\n    header.appendChild(name);\n    header.appendChild(createNavbar());\n\n    return header;\n\n}\n\nfunction createNavbar() {\n    const navBar = document.createElement('div');\n    navBar.classList.add('navBar');\n    \n    const homeBtn = document.createElement('button');\n    homeBtn.classList.add('tab');\n    homeBtn.textContent = 'Home';\n    homeBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActive(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n    });\n\n    const menuBtn = document.createElement('button');\n    menuBtn.classList.add('tab');\n    menuBtn.textContent = 'Menu';\n    menuBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActive(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n    });\n\n    const contactBtn = document.createElement('button');\n    contactBtn.classList.add('tab');\n    contactBtn.textContent = 'Contact';\n    contactBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActive(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)();\n    });\n\n    navBar.appendChild(homeBtn);\n    navBar.appendChild(menuBtn);\n    navBar.appendChild(contactBtn);\n\n    return navBar;\n}\n\nfunction setActive(button) {\n    const buttons = document.querySelectorAll('.tab');\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove('active');\n        }\n    });\n    button.classList.add('active');\n}\n\nfunction createMain() {\n    const main = document.createElement('div');\n    main.classList.add('main');\n    main.id = ('main');\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    \n    const footerLink = document.createElement('a');\n    footerLink.href = 'https://github.com/treymorris';\n\n    const footerIcon = document.createElement('i');\n    footerIcon.classList.add('fa-brands');\n    footerIcon.classList.add('fa-github');\n    footerIcon.classList.add('fa-lg');\n\n    footer.appendChild(footerLink);\n    footerLink.appendChild(footerIcon);\n\n    return footer;\n\n}\n\nfunction initSite() {\n    const content = document.getElementById('content');\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n    setActive(document.querySelector('.tab'));\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n}\n\n\n\n\n//# sourceURL=webpack://restaraunt/./src/site.js?");

/***/ }),

/***/ "./src/background-image.jpg":
/*!**********************************!*\
  !*** ./src/background-image.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ef6f50e4de45a641ddb.jpg\";\n\n//# sourceURL=webpack://restaraunt/./src/background-image.jpg?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
>>>>>>> feature
