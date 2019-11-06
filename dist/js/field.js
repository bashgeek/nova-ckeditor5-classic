/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@bashgeek/ckeditor5-build-classic/build/ckeditor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bashgeek/ckeditor5-build-classic/build/ckeditor.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t){t.en=Object.assign(t.en||{},{a:"Cannot upload file:",b:"Image toolbar",c:"Table toolbar",d:"Block quote",e:"Choose heading",f:"Heading",g:"image widget",h:"Insert image",i:"Numbered List",j:"Bulleted List",k:"Underline",l:"Full size image",m:"Side image",n:"Left aligned image",o:"Centered image",p:"Right aligned image",q:"Bold",r:"Increase indent",s:"Decrease indent",t:"Align left",u:"Align right",v:"Align center",w:"Justify",x:"Text alignment",y:"Text alignment toolbar",z:"Italic",aa:"Insert table",ab:"Header column",ac:"Insert column left",ad:"Insert column right",ae:"Delete column",af:"Column",ag:"Header row",ah:"Insert row below",ai:"Insert row above",aj:"Delete row",ak:"Row",al:"Merge cell up",am:"Merge cell right",an:"Merge cell down",ao:"Merge cell left",ap:"Split cell vertically",aq:"Split cell horizontally",ar:"Merge cells",as:"Upload failed",at:"Enter image caption",au:"Insert media",av:"The URL must not be empty.",aw:"This media URL is not supported.",ax:"media widget",ay:"Link",az:"Widget toolbar",ba:"Upload in progress",bb:"Paragraph",bc:"Heading 1",bd:"Heading 2",be:"Heading 3",bf:"Heading 4",bg:"Heading 5",bh:"Heading 6",bi:"Change image text alternative",bj:"Rich Text Editor",bk:"Unlink",bl:"Edit link",bm:"Open link in new tab",bn:"This link has no URL",bo:"Dropdown toolbar",bp:"Undo",bq:"Redo",br:"Save",bs:"Cancel",bt:"Link URL",bu:"Editor toolbar",bv:"Show more items",bw:"Open in a new tab",bx:"Downloadable",by:"%0 of %1",bz:"Previous",ca:"Next",cb:"Text alternative",cc:"Rich Text Editor, %0",cd:"Paste the media URL in the input.",ce:"Tip: Paste the URL into the content to embed faster.",cf:"Media URL"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=91)}([function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});const i="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";class o extends Error{constructor(t,e,n){t=r(t),n&&(t+=" "+JSON.stringify(n)),super(t),this.name="CKEditorError",this.context=e,this.data=n}is(t){return"CKEditorError"===t}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;throw new o("unexpected-error",e,{originalError:{message:t.message,stack:t.stack,name:t.name}})}}function r(t){const e=t.match(/^([^:]+):/);return e?t+` Read more: ${i}#error-${e[1]}\n`:t}},function(t,e,n){"use strict";var i={},o=function(){var t;return function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t}}(),r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function a(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(f(o.parts[s],e))}else{for(var a=[];s<o.parts.length;s++)a.push(f(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function d(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}var h=null,u=0;function f(t,e){var n,i,o;if(e.singleton){var r=u++;n=h||(h=c(e)),i=d.bind(null,n,r,!1),o=d.bind(null,n,r,!0)}else n=c(e),i=function(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o&&t.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return a(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var c=n[r],l=i[c.id];l&&(l.refs--,o.push(l))}t&&a(s(t,e),e);for(var d=0;d<o.length;d++){var h=o[d];if(0===h.refs){for(var u=0;u<h.parts.length;u++)h.parts[u]();delete i[h.id]}}}}},,function(t,e,n){"use strict";var i=n(7),o="object"==typeof self&&self&&self.Object===Object&&self,r=i.a||o||Function("return this")();e.a=r},function(t,e,n){"use strict";(function(t){var i=n(7),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o&&i.a.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();e.a=a}).call(this,n(8)(t))},function(t,e,n){"use strict";(function(t){var i=n(3),o=n(11),r= true&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===r?i.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||o.a;e.a=c}).call(this,n(8)(t))},function(t,e,n){"use strict";(function(t){var e=n(13),i=n(0);const o="object"==typeof window?window:t;if(o.CKEDITOR_VERSION)throw new i.b("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.",null);o.CKEDITOR_VERSION=e.a}).call(this,n(9))},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(9))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i=n(68);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";e.a=function(){return!1}},function(t,e,n){"use strict";(function(t){var i=n(3),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o?i.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,i=a?a(n):new t.constructor(n);return t.copy(i),i}}).call(this,n(8)(t))},function(t){t.exports=JSON.parse('{"a":"15.0.0"}')},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(t,e,n){var i=n(17);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"},function(t,e,n){var i=n(19);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(t,e,n){var i=n(21);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(t,e,n){var i=n(23);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(25);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"},function(t,e,n){var i=n(27);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"},function(t,e,n){var i=n(29);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'},function(t,e,n){var i=n(31);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(t,e,n){var i=n(33);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(t,e,n){var i=n(35);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:1.3846153847em}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}"},function(t,e,n){var i=n(37);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-toolbar-dropdown .ck.ck-toolbar .ck.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(t,e,n){var i=n(39);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(41);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>.ck-toolbar__items>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>.ck-toolbar__items>*,.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__grouped-dropdown,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{padding-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__items>:last-child,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__items>:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__grouped-dropdown,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{padding-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__items>*,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__items>*{margin-left:var(--ck-spacing-small);margin-right:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__items>:last-child,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__items>:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{margin-left:var(--ck-spacing-small)}"},function(t,e,n){var i=n(43);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(t,e,n){var i=n(45);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"},function(t,e,n){var i=n(47);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{visibility:visible}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handle,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handle:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handle,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}"},function(t,e,n){var i=n(49);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}"},function(t,e,n){var i=n(51);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(t,e,n){var i=n(53);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(55);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}'},function(t,e,n){var i=n(57);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"},function(t,e,n){var i=n(59);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"},function(t,e,n){var i=n(61);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}"},function(t,e,n){var i=n(63);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(t,e,n){var i=n(65);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(t,e,n){var i=n(67);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(t,e){t.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(t,e,n){var i=n(70);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(t,e,n){var i=n(72);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(t,e,n){var i=n(74);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"},function(t,e,n){var i=n(76);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"},function(t,e,n){var i=n(78);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(80);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports='.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(t,e,n){var i=n(82);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(84);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"},function(t,e,n){var i=n(86);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(t,e,n){var i=n(88);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"},function(t,e,n){var i=n(90);"string"==typeof i&&(i=[[t.i,i,""]]);var o={injectType:"singletonStyleTag",insert:"head",singleton:!0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e){t.exports=".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"},function(t,e,n){"use strict";n.r(e);var i=n(3),o=i.a.Symbol,r=Object.prototype,s=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;var l=function(t){var e=s.call(t,c),n=t[c];try{t[c]=void 0;var i=!0}catch(t){}var o=a.call(t);return i&&(e?t[c]=n:delete t[c]),o},d=Object.prototype.toString;var h=function(t){return d.call(t)},u="[object Null]",f="[object Undefined]",g=o?o.toStringTag:void 0;var m=function(t){return null==t?void 0===t?f:u:g&&g in Object(t)?l(t):h(t)};var p=function(t,e){return function(n){return t(e(n))}},b=p(Object.getPrototypeOf,Object);var w=function(t){return null!=t&&"object"==typeof t},k="[object Object]",_=Function.prototype,v=Object.prototype,y=_.toString,x=v.hasOwnProperty,A=y.call(Object);var T=function(t){if(!w(t)||m(t)!=k)return!1;var e=b(t);if(null===e)return!0;var n=x.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==A};var C=function(){this.__data__=[],this.size=0};var P=function(t,e){return t===e||t!=t&&e!=e};var S=function(t,e){for(var n=t.length;n--;)if(P(t[n][0],e))return n;return-1},M=Array.prototype.splice;var E=function(t){var e=this.__data__,n=S(e,t);return!(n<0||(n==e.length-1?e.pop():M.call(e,n,1),--this.size,0))};var I=function(t){var e=this.__data__,n=S(e,t);return n<0?void 0:e[n][1]};var N=function(t){return S(this.__data__,t)>-1};var O=function(t,e){var n=this.__data__,i=S(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function R(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}R.prototype.clear=C,R.prototype.delete=E,R.prototype.get=I,R.prototype.has=N,R.prototype.set=O;var D=R;var L=function(){this.__data__=new D,this.size=0};var j=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var V=function(t){return this.__data__.get(t)};var z=function(t){return this.__data__.has(t)};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},F="[object AsyncFunction]",U="[object Function]",H="[object GeneratorFunction]",q="[object Proxy]";var W=function(t){if(!B(t))return!1;var e=m(t);return e==U||e==H||e==F||e==q},Y=i.a["__core-js_shared__"],$=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var G=function(t){return!!$&&$ in t},Q=Function.prototype.toString;var J=function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},K=/^\[object .+?Constructor\]$/,Z=Function.prototype,X=Object.prototype,tt=Z.toString,et=X.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!B(t)||G(t))&&(W(t)?nt:K).test(J(t))};var ot=function(t,e){return null==t?void 0:t[e]};var rt=function(t,e){var n=ot(t,e);return it(n)?n:void 0},st=rt(i.a,"Map"),at=rt(Object,"create");var ct=function(){this.__data__=at?at(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",ht=Object.prototype.hasOwnProperty;var ut=function(t){var e=this.__data__;if(at){var n=e[t];return n===dt?void 0:n}return ht.call(e,t)?e[t]:void 0},ft=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;return at?void 0!==e[t]:ft.call(e,t)},mt="__lodash_hash_undefined__";var pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=at&&void 0===e?mt:e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}bt.prototype.clear=ct,bt.prototype.delete=lt,bt.prototype.get=ut,bt.prototype.has=gt,bt.prototype.set=pt;var wt=bt;var kt=function(){this.size=0,this.__data__={hash:new wt,map:new(st||D),string:new wt}};var _t=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var vt=function(t,e){var n=t.__data__;return _t(e)?n["string"==typeof e?"string":"hash"]:n.map};var yt=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e};var xt=function(t){return vt(this,t).get(t)};var At=function(t){return vt(this,t).has(t)};var Tt=function(t,e){var n=vt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ct.prototype.clear=kt,Ct.prototype.delete=yt,Ct.prototype.get=xt,Ct.prototype.has=At,Ct.prototype.set=Tt;var Pt=Ct,St=200;var Mt=function(t,e){var n=this.__data__;if(n instanceof D){var i=n.__data__;if(!st||i.length<St-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Pt(i)}return n.set(t,e),this.size=n.size,this};function Et(t){var e=this.__data__=new D(t);this.size=e.size}Et.prototype.clear=L,Et.prototype.delete=j,Et.prototype.get=V,Et.prototype.has=z,Et.prototype.set=Mt;var It=Et;var Nt=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t},Ot=function(){try{var t=rt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Rt=function(t,e,n){"__proto__"==e&&Ot?Ot(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Dt=Object.prototype.hasOwnProperty;var Lt=function(t,e,n){var i=t[e];Dt.call(t,e)&&P(i,n)&&(void 0!==n||e in t)||Rt(t,e,n)};var jt=function(t,e,n,i){var o=!n;n||(n={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=i?i(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?Rt(n,a,c):Lt(n,a,c)}return n};var Vt=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},zt="[object Arguments]";var Bt=function(t){return w(t)&&m(t)==zt},Ft=Object.prototype,Ut=Ft.hasOwnProperty,Ht=Ft.propertyIsEnumerable,qt=Bt(function(){return arguments}())?Bt:function(t){return w(t)&&Ut.call(t,"callee")&&!Ht.call(t,"callee")},Wt=Array.isArray,Yt=n(5),$t=9007199254740991,Gt=/^(?:0|[1-9]\d*)$/;var Qt=function(t,e){var n=typeof t;return!!(e=null==e?$t:e)&&("number"==n||"symbol"!=n&&Gt.test(t))&&t>-1&&t%1==0&&t<e},Jt=9007199254740991;var Kt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Jt},Zt={};Zt["[object Float32Array]"]=Zt["[object Float64Array]"]=Zt["[object Int8Array]"]=Zt["[object Int16Array]"]=Zt["[object Int32Array]"]=Zt["[object Uint8Array]"]=Zt["[object Uint8ClampedArray]"]=Zt["[object Uint16Array]"]=Zt["[object Uint32Array]"]=!0,Zt["[object Arguments]"]=Zt["[object Array]"]=Zt["[object ArrayBuffer]"]=Zt["[object Boolean]"]=Zt["[object DataView]"]=Zt["[object Date]"]=Zt["[object Error]"]=Zt["[object Function]"]=Zt["[object Map]"]=Zt["[object Number]"]=Zt["[object Object]"]=Zt["[object RegExp]"]=Zt["[object Set]"]=Zt["[object String]"]=Zt["[object WeakMap]"]=!1;var Xt=function(t){return w(t)&&Kt(t.length)&&!!Zt[m(t)]};var te=function(t){return function(e){return t(e)}},ee=n(4),ne=ee.a&&ee.a.isTypedArray,ie=ne?te(ne):Xt,oe=Object.prototype.hasOwnProperty;var re=function(t,e){var n=Wt(t),i=!n&&qt(t),o=!n&&!i&&Object(Yt.a)(t),r=!n&&!i&&!o&&ie(t),s=n||i||o||r,a=s?Vt(t.length,String):[],c=a.length;for(var l in t)!e&&!oe.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Qt(l,c))||a.push(l);return a},se=Object.prototype;var ae=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||se)},ce=p(Object.keys,Object),le=Object.prototype.hasOwnProperty;var de=function(t){if(!ae(t))return ce(t);var e=[];for(var n in Object(t))le.call(t,n)&&"constructor"!=n&&e.push(n);return e};var he=function(t){return null!=t&&Kt(t.length)&&!W(t)};var ue=function(t){return he(t)?re(t):de(t)};var fe=function(t,e){return t&&jt(e,ue(e),t)};var ge=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},me=Object.prototype.hasOwnProperty;var pe=function(t){if(!B(t))return ge(t);var e=ae(t),n=[];for(var i in t)("constructor"!=i||!e&&me.call(t,i))&&n.push(i);return n};var be=function(t){return he(t)?re(t,!0):pe(t)};var we=function(t,e){return t&&jt(e,be(e),t)},ke=n(12);var _e=function(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e};var ve=function(t,e){for(var n=-1,i=null==t?0:t.length,o=0,r=[];++n<i;){var s=t[n];e(s,n,t)&&(r[o++]=s)}return r};var ye=function(){return[]},xe=Object.prototype.propertyIsEnumerable,Ae=Object.getOwnPropertySymbols,Te=Ae?function(t){return null==t?[]:(t=Object(t),ve(Ae(t),function(e){return xe.call(t,e)}))}:ye;var Ce=function(t,e){return jt(t,Te(t),e)};var Pe=function(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t},Se=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Pe(e,Te(t)),t=b(t);return e}:ye;var Me=function(t,e){return jt(t,Se(t),e)};var Ee=function(t,e,n){var i=e(t);return Wt(t)?i:Pe(i,n(t))};var Ie=function(t){return Ee(t,ue,Te)};var Ne=function(t){return Ee(t,be,Se)},Oe=rt(i.a,"DataView"),Re=rt(i.a,"Promise"),De=rt(i.a,"Set"),Le=rt(i.a,"WeakMap"),je=J(Oe),Ve=J(st),ze=J(Re),Be=J(De),Fe=J(Le),Ue=m;(Oe&&"[object DataView]"!=Ue(new Oe(new ArrayBuffer(1)))||st&&"[object Map]"!=Ue(new st)||Re&&"[object Promise]"!=Ue(Re.resolve())||De&&"[object Set]"!=Ue(new De)||Le&&"[object WeakMap]"!=Ue(new Le))&&(Ue=function(t){var e=m(t),n="[object Object]"==e?t.constructor:void 0,i=n?J(n):"";if(i)switch(i){case je:return"[object DataView]";case Ve:return"[object Map]";case ze:return"[object Promise]";case Be:return"[object Set]";case Fe:return"[object WeakMap]"}return e});var He=Ue,qe=Object.prototype.hasOwnProperty;var We=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&qe.call(t,"index")&&(n.index=t.index,n.input=t.input),n},Ye=i.a.Uint8Array;var $e=function(t){var e=new t.constructor(t.byteLength);return new Ye(e).set(new Ye(t)),e};var Ge=function(t,e){var n=e?$e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},Qe=/\w*$/;var Je=function(t){var e=new t.constructor(t.source,Qe.exec(t));return e.lastIndex=t.lastIndex,e},Ke=o?o.prototype:void 0,Ze=Ke?Ke.valueOf:void 0;var Xe=function(t){return Ze?Object(Ze.call(t)):{}};var tn=function(t,e){var n=e?$e(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},en="[object Boolean]",nn="[object Date]",on="[object Map]",rn="[object Number]",sn="[object RegExp]",an="[object Set]",cn="[object String]",ln="[object Symbol]",dn="[object ArrayBuffer]",hn="[object DataView]",un="[object Float32Array]",fn="[object Float64Array]",gn="[object Int8Array]",mn="[object Int16Array]",pn="[object Int32Array]",bn="[object Uint8Array]",wn="[object Uint8ClampedArray]",kn="[object Uint16Array]",_n="[object Uint32Array]";var vn=function(t,e,n){var i=t.constructor;switch(e){case dn:return $e(t);case en:case nn:return new i(+t);case hn:return Ge(t,n);case un:case fn:case gn:case mn:case pn:case bn:case wn:case kn:case _n:return tn(t,n);case on:return new i;case rn:case cn:return new i(t);case sn:return Je(t);case an:return new i;case ln:return Xe(t)}},yn=Object.create,xn=function(){function t(){}return function(e){if(!B(e))return{};if(yn)return yn(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var An=function(t){return"function"!=typeof t.constructor||ae(t)?{}:xn(b(t))},Tn="[object Map]";var Cn=function(t){return w(t)&&He(t)==Tn},Pn=ee.a&&ee.a.isMap,Sn=Pn?te(Pn):Cn,Mn="[object Set]";var En=function(t){return w(t)&&He(t)==Mn},In=ee.a&&ee.a.isSet,Nn=In?te(In):En,On=1,Rn=2,Dn=4,Ln="[object Arguments]",jn="[object Function]",Vn="[object GeneratorFunction]",zn="[object Object]",Bn={};Bn[Ln]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn[zn]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=!0,Bn["[object Error]"]=Bn[jn]=Bn["[object WeakMap]"]=!1;var Fn=function t(e,n,i,o,r,s){var a,c=n&On,l=n&Rn,d=n&Dn;if(i&&(a=r?i(e,o,r,s):i(e)),void 0!==a)return a;if(!B(e))return e;var h=Wt(e);if(h){if(a=We(e),!c)return _e(e,a)}else{var u=He(e),f=u==jn||u==Vn;if(Object(Yt.a)(e))return Object(ke.a)(e,c);if(u==zn||u==Ln||f&&!r){if(a=l||f?{}:An(e),!c)return l?Me(e,we(a,e)):Ce(e,fe(a,e))}else{if(!Bn[u])return r?e:{};a=vn(e,u,c)}}s||(s=new It);var g=s.get(e);if(g)return g;s.set(e,a),Nn(e)?e.forEach(function(o){a.add(t(o,n,i,o,e,s))}):Sn(e)&&e.forEach(function(o,r){a.set(r,t(o,n,i,r,e,s))});var m=d?l?Ne:Ie:l?keysIn:ue,p=h?void 0:m(e);return Nt(p||e,function(o,r){p&&(o=e[r=o]),Lt(a,r,t(o,n,i,r,e,s))}),a},Un=1,Hn=4;var qn=function(t,e){return Fn(t,Un|Hn,e="function"==typeof e?e:void 0)};var Wn=function(t){return w(t)&&1===t.nodeType&&!T(t)};class Yn{constructor(t,e){this._config={},e&&this.define(e),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}_setToTarget(t,e,n,i=!1){if(T(e))return void this._setObjectToTarget(t,e,i);const o=e.split(".");e=o.pop();for(const e of o)T(t[e])||(t[e]={}),t=t[e];if(T(n))return T(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&void 0!==t[e]||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const e of n){if(!T(t[e])){t=null;break}t=t[e]}return t?function(t){return qn(t,$n)}(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function $n(t){return Wn(t)?t:void 0}var Gn=n(0);var Qn=function(){return function t(){t.called=!0}};class Jn{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=Qn(),this.off=Qn()}}function Kn(){let t="e";for(let e=0;e<8;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t}var Zn={get(t){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};n(6);const Xn=Symbol("listeningTo"),ti=Symbol("emitterId");var ei={on(t,e,n={}){this.listenTo(this,t,e,n)},once(t,e,n){let i=!1;this.listenTo(this,t,function(t,...n){i||(i=!0,t.off(),e.call(this,t,...n))},n)},off(t,e){this.stopListening(this,t,e)},listenTo(t,e,n,i={}){let o,r;this[Xn]||(this[Xn]={});const s=this[Xn];ii(t)||ni(t);const a=ii(t);(o=s[a])||(o=s[a]={emitter:t,callbacks:{}}),(r=o.callbacks[e])||(r=o.callbacks[e]=[]),r.push(n),function(t,e){const n=oi(t);if(n[e])return;let i=e,o=null;const r=[];for(;""!==i&&!n[i];)n[i]={callbacks:[],childEvents:[]},r.push(n[i]),o&&n[i].childEvents.push(o),o=i,i=i.substr(0,i.lastIndexOf(":"));if(""!==i){for(const t of r)t.callbacks=n[i].callbacks.slice();n[i].childEvents.push(o)}}(t,e);const c=ri(t,e),l=Zn.get(i.priority),d={callback:n,priority:l};for(const t of c){let e=!1;for(let n=0;n<t.length;n++)if(t[n].priority<l){t.splice(n,0,d),e=!0;break}e||t.push(d)}},stopListening(t,e,n){const i=this[Xn];let o=t&&ii(t);const r=i&&o&&i[o],s=r&&e&&r.callbacks[e];if(!(!i||t&&!r||e&&!s))if(n)ai(t,e,n);else if(s){for(;n=s.pop();)ai(t,e,n);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(t,e);delete i[o]}else{for(o in i)this.stopListening(i[o].emitter);delete this[Xn]}},fire(t,...e){try{const n=t instanceof Jn?t:new Jn(this,t),i=n.name;let o=function t(e,n){let i;if(!e._events||!(i=e._events[n])||!i.callbacks.length)return n.indexOf(":")>-1?t(e,n.substr(0,n.lastIndexOf(":"))):null;return i.callbacks}(this,i);if(n.path.push(this),o){const t=[n,...e];o=Array.from(o);for(let e=0;e<o.length&&(o[e].callback.apply(this,t),n.off.called&&(delete n.off.called,ai(this,i,o[e].callback)),!n.stop.called);e++);}if(this._delegations){const t=this._delegations.get(i),o=this._delegations.get("*");t&&si(t,n,e),o&&si(o,n,e)}return n.return}catch(t){Gn.b.rethrowUnexpectedError(t,this)}},delegate(...t){return{to:(e,n)=>{this._delegations||(this._delegations=new Map),t.forEach(t=>{const i=this._delegations.get(t);i?i.set(e,n):this._delegations.set(t,new Map([[e,n]]))})}}},stopDelegating(t,e){if(this._delegations)if(t)if(e){const n=this._delegations.get(t);n&&n.delete(e)}else this._delegations.delete(t);else this._delegations.clear()}};function ni(t,e){t[ti]||(t[ti]=e||Kn())}function ii(t){return t[ti]}function oi(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function ri(t,e){const n=oi(t)[e];if(!n)return[];let i=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const o=ri(t,n.childEvents[e]);i=i.concat(o)}return i}function si(t,e,n){for(let[i,o]of t){o?"function"==typeof o&&(o=o(e.name)):o=e.name;const t=new Jn(e.source,o);t.path=[...e.path],i.fire(t,...n)}}function ai(t,e,n){const i=ri(t,e);for(const t of i)for(let e=0;e<t.length;e++)t[e].callback==n&&(t.splice(e,1),e--)}function ci(t,...e){e.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in t.prototype)return;const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable=!1,Object.defineProperty(t.prototype,n,i)})})}function li(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++)if(t[i]!=e[i])return i;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}var di=4;var hi=function(t){return Fn(t,di)};class ui{constructor(){this.parent=null}get index(){let t;if(!this.parent)return null;if(-1==(t=this.parent.getChildIndex(this)))throw new Gn.b("view-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.parent instanceof ui?this.parent.document:null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=li(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=hi(this);return delete t.parent,t}is(t){return"node"==t||"view:node"==t}}ci(ui,ei);class fi extends ui{constructor(t){super(),this._textData=t}is(t){return"text"==t||"view:text"==t||super.is(t)}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof fi&&(this===t||this.data===t.data)}_clone(){return new fi(this.data)}}class gi{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new Gn.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.",this);if(n<0||e+n>t.data.length)throw new Gn.b("view-textproxy-wrong-length: Given length value is incorrect.",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t||"view:textProxy"==t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;null!==n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function mi(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}function pi(t){return!(!t||!t[Symbol.iterator])}class bi{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)("string"==typeof e||e instanceof RegExp)&&(e={name:e}),e.classes&&("string"==typeof e.classes||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(const e of t)for(const t of this._patterns){const n=wi(e,t);if(n)return{element:e,pattern:t,match:n}}return null}matchAll(...t){const e=[];for(const n of t)for(const t of this._patterns){const i=wi(n,t);i&&e.push({element:n,pattern:t,match:i})}return e.length>0?e:null}getElementName(){if(1!==this._patterns.length)return null;const t=this._patterns[0],e=t.name;return"function"==typeof t||!e||e instanceof RegExp?null:e}}function wi(t,e){if("function"==typeof e)return e(t);const n={};return e.name&&(n.name=function(t,e){if(t instanceof RegExp)return t.test(e);return t===e}(e.name,t.name),!n.name)?null:e.attributes&&(n.attributes=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasAttribute(i))return null;{const t=e.getAttribute(i);if(!0===o)n.push(i);else if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.attributes,t),!n.attributes)?null:!(e.classes&&(n.classes=function(t,e){const n=[];for(const i of t)if(i instanceof RegExp){const t=e.getClassNames();for(const e of t)i.test(e)&&n.push(e);if(0===n.length)return null}else{if(!e.hasClass(i))return null;n.push(i)}return n}(e.classes,t),!n.classes))&&(!(e.styles&&(n.styles=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasStyle(i))return null;{const t=e.getStyle(i);if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.styles,t),!n.styles))&&n)}class ki extends ui{constructor(t,e,n){if(super(),this.name=t,this._attrs=function(t){t=T(t)?mi(t):new Map(t);for(const[e,n]of t)null===n?t.delete(e):"string"!=typeof n&&t.set(e,String(n));return t}(e),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const t=this._attrs.get("class");vi(this._classes,t),this._attrs.delete("class")}this._styles=new Map,this._attrs.has("style")&&(_i(this._styles,this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(t,e=null){const n=t.replace(/^view:/,"");return e?"element"==n&&e==this.name:"element"==n||n==this.name||super.is(t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.size>0&&(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.size>0&&(yield["style",this.getAttribute("style")])}getAttribute(t){if("class"==t)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"!=t)return this._attrs.get(t);if(this._styles.size>0){let t="";for(const[e,n]of this._styles)t+=`${e}:${n};`;return t}}hasAttribute(t){return"class"==t?this._classes.size>0:"style"==t?this._styles.size>0:this._attrs.has(t)}isSimilar(t){if(!(t instanceof ki))return!1;if(this===t)return!0;if(this.name!=t.name)return!1;if(this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const[e,n]of this._styles)if(!t._styles.has(e)||t._styles.get(e)!==n)return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.get(t)}getStyleNames(){return this._styles.keys()}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new bi(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=Array.from(this._styles).map(t=>`${t[0]}:${t[1]}`).sort().join(";"),n=Array.from(this._attrs).map(t=>`${t[0]}="${t[1]}"`).sort().join(" ");return this.name+(""==t?"":` class="${t}"`)+(""==e?"":` style="${e}"`)+(""==n?"":` ${n}`)}_clone(t=!1){const e=[];if(t)for(const n of this.getChildren())e.push(n._clone(t));const n=new this.constructor(this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles=new Map(this._styles),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t){if("string"==typeof t)return[new fi(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new fi(t):t instanceof gi?new fi(t.data):t)}(e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),"class"==t?vi(this._classes,e):"style"==t?_i(this._styles,e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),"class"==t?this._classes.size>0&&(this._classes.clear(),!0):"style"==t?this._styles.size>0&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.add(t))}_removeClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.delete(t))}_setStyle(t,e){if(this._fireChange("attributes",this),T(t)){const e=Object.keys(t);for(const n of e)this._styles.set(n,t[n])}else this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._styles.delete(t))}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function _i(t,e){let n=null,i=0,o=0,r=null;if(t.clear(),""!==e){";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===n)switch(a){case":":r||(r=e.substr(i,s-i),o=s+1);break;case'"':case"'":n=a;break;case";":{const n=e.substr(o,s-o);r&&t.set(r.trim(),n.trim()),r=null,i=s+1;break}}else a===n&&(n=null)}}}function vi(t,e){const n=e.split(/\s+/);t.clear(),n.forEach(e=>t.add(e))}class yi extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=xi}is(t,e=null){const n=t&&t.replace(/^view:/,"");return e?"containerElement"==n&&e==this.name||super.is(t,e):"containerElement"==n||super.is(t)}}function xi(){const t=[...this.getChildren()],e=t[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const e of t)if(!e.is("uiElement"))return null;return this.childCount}var Ai=function(t){return t};var Ti=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Ci=Math.max;var Pi=function(t,e,n){return e=Ci(void 0===e?t.length-1:e,0),function(){for(var i=arguments,o=-1,r=Ci(i.length-e,0),s=Array(r);++o<r;)s[o]=i[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=i[o];return a[e]=n(s),Ti(t,this,a)}};var Si=function(t){return function(){return t}},Mi=Ot?function(t,e){return Ot(t,"toString",{configurable:!0,enumerable:!1,value:Si(e),writable:!0})}:Ai,Ei=800,Ii=16,Ni=Date.now;var Oi=function(t){var e=0,n=0;return function(){var i=Ni(),o=Ii-(i-n);if(n=i,o>0){if(++e>=Ei)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Mi);var Ri=function(t,e){return Oi(Pi(t,e,Ai),t+"")};var Di=function(t,e,n){if(!B(n))return!1;var i=typeof e;return!!("number"==i?he(n)&&Qt(e,n.length):"string"==i&&e in n)&&P(n[e],t)};var Li=function(t){return Ri(function(e,n){var i=-1,o=n.length,r=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(o--,r):void 0,s&&Di(n[0],n[1],s)&&(r=o<3?void 0:r,o=1),e=Object(e);++i<o;){var a=n[i];a&&t(e,a,i,r)}return e})}(function(t,e){jt(e,be(e),t)});const ji=Symbol("observableProperties"),Vi=Symbol("boundObservables"),zi=Symbol("boundProperties"),Bi={set(t,e){if(B(t))return void Object.keys(t).forEach(e=>{this.set(e,t[e])},this);Ui(this);const n=this[ji];if(t in this&&!n.has(t))throw new Gn.b("observable-set-cannot-override: Cannot override an existing property.",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(e){const i=n.get(t);let o=this.fire("set:"+t,t,e,i);void 0===o&&(o=e),i===o&&n.has(t)||(n.set(t,o),this.fire("change:"+t,t,o,i))}}),this[t]=e},bind(...t){if(!t.length||!Wi(t))throw new Gn.b("observable-bind-wrong-properties: All properties must be strings.",this);if(new Set(t).size!==t.length)throw new Gn.b("observable-bind-duplicate-properties: Properties must be unique.",this);Ui(this);const e=this[zi];t.forEach(t=>{if(e.has(t))throw new Gn.b("observable-bind-rebind: Cannot bind the same property more that once.",this)});const n=new Map;return t.forEach(t=>{const i={property:t,to:[]};e.set(t,i),n.set(t,i)}),{to:Hi,toMany:qi,_observable:this,_bindProperties:t,_to:[],_bindings:n}},unbind(...t){if(!(ji in this))return;const e=this[zi],n=this[Vi];if(t.length){if(!Wi(t))throw new Gn.b("observable-unbind-wrong-properties: Properties must be strings.",this);t.forEach(t=>{const i=e.get(t);if(!i)return;let o,r,s,a;i.to.forEach(t=>{o=t[0],r=t[1],s=n.get(o),(a=s[r]).delete(i),a.size||delete s[r],Object.keys(s).length||(n.delete(o),this.stopListening(o,"change"))}),e.delete(t)})}else n.forEach((t,e)=>{this.stopListening(e,"change")}),n.clear(),e.clear()},decorate(t){const e=this[t];if(!e)throw new Gn.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",this,{object:this,methodName:t});this.on(t,(t,n)=>{t.return=e.apply(this,n)}),this[t]=function(...e){return this.fire(t,e)}}};Li(Bi,ei);var Fi=Bi;function Ui(t){ji in t||(Object.defineProperty(t,ji,{value:new Map}),Object.defineProperty(t,Vi,{value:new Map}),Object.defineProperty(t,zi,{value:new Map}))}function Hi(...t){const e=function(...t){if(!t.length)throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.",null);const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach(t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new Gn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.",null);n={observable:t,properties:[]},e.to.push(n)}}),e}(...t),n=Array.from(this._bindings.keys()),i=n.length;if(!e.callback&&e.to.length>1)throw new Gn.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.",this);if(i>1&&e.callback)throw new Gn.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.",this);e.to.forEach(t=>{if(t.properties.length&&t.properties.length!==i)throw new Gn.b("observable-bind-to-properties-length: The number of properties must match.",this);t.properties.length||(t.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),function(t,e){e.forEach(e=>{const n=t[Vi];let i;n.get(e.observable)||t.listenTo(e.observable,"change",(o,r)=>{(i=n.get(e.observable)[r])&&i.forEach(e=>{Yi(t,e.property)})})})}(this._observable,this._to),function(t){let e;t._bindings.forEach((n,i)=>{t._to.forEach(o=>{e=o.properties[n.callback?0:t._bindProperties.indexOf(i)],n.to.push([o.observable,e]),function(t,e,n,i){const o=t[Vi],r=o.get(n),s=r||{};s[i]||(s[i]=new Set);s[i].add(e),r||o.set(n,s)}(t._observable,n,o.observable,e)})})}(this),this._bindProperties.forEach(t=>{Yi(this._observable,t)})}function qi(t,e,n){if(this._bindings.size>1)throw new Gn.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().",this);this.to(...function(t,e){const n=t.map(t=>[t,e]);return Array.prototype.concat.apply([],n)}(t,e),n)}function Wi(t){return t.every(t=>"string"==typeof t)}function Yi(t,e){const n=t[zi].get(e);let i;i=n.callback?n.callback.apply(t,n.to.map(t=>t[0][t[1]])):(i=n.to[0])[0][i[1]],t.hasOwnProperty(e)?t[e]=i:t.set(e,i)}const $i=Symbol("document");class Gi extends yi{constructor(t,e,n){super(t,e,n),this.set("isReadOnly",!1),this.set("isFocused",!1)}is(t,e=null){const n=t&&t.replace(/^view:/,"");return e?"editableElement"==n&&e==this.name||super.is(t,e):"editableElement"==n||super.is(t)}destroy(){this.stopListening()}get document(){return this.getCustomProperty($i)}set _document(t){if(this.getCustomProperty($i))throw new Gn.b("view-editableelement-document-already-set: View document is already set.",this);this._setCustomProperty($i,t),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",e=>e&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}}ci(Gi,Fi);const Qi=Symbol("rootName");class Ji extends Gi{constructor(t){super(t),this.rootName="main"}is(t,e=null){const n=t.replace(/^view:/,"");return e?"rootElement"==n&&e==this.name||super.is(t,e):"rootElement"==n||super.is(t)}get rootName(){return this.getCustomProperty(Qi)}set rootName(t){this._setCustomProperty(Qi,t)}set _name(t){this.name=t}}class Ki{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new Gn.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.",null);if(t.direction&&"forward"!=t.direction&&"backward"!=t.direction)throw new Gn.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=Zi._createAt(t.startPosition):this.position=Zi._createAt(t.boundaries["backward"==t.direction?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,i;do{i=this.position,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof fi){if(t.isAtEnd)return this.position=Zi._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof ki)return this.shallow?t.offset++:t=new Zi(i,0),this.position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof fi){if(this.singleCharacters)return t=new Zi(i,0),this.position=t,this._next();{let n,o=i.data.length;return i==this._boundaryEndParent?(o=this.boundaries.end.offset,n=new gi(i,0,o),t=Zi._createAfter(n)):(n=new gi(i,0,i.data.length),t.offset++),this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{i=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset}const o=new gi(n,t.offset,i);return t.offset+=i,this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&0===t.offset)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof fi){if(t.isAtStart)return this.position=Zi._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof ki)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new Zi(i,i.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof fi){if(this.singleCharacters)return t=new Zi(i,i.data.length),this.position=t,this._previous();{let n,o=i.data.length;if(i==this._boundaryStartParent){const e=this.boundaries.start.offset;o=(n=new gi(i,e,i.data.length-e)).data.length,t=Zi._createBefore(n)}else n=new gi(i,0,i.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{const e=n===this._boundaryStartParent?this.boundaries.start.offset:0;i=t.offset-e}t.offset-=i;const o=new gi(n,t.offset,i);return this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,o){return e instanceof gi&&(e.offsetInText+e.data.length==e.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Zi._createAfter(e.textNode):(i=Zi._createAfter(e.textNode),this.position=i)),0===e.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Zi._createBefore(e.textNode):(i=Zi._createBefore(e.textNode),this.position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}}class Zi{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const t=this.parent.is("text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Gi);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Zi._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Ki(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}is(t){return"position"==t||"view:position"==t}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return"before"==this.compareWith(t)}isAfter(t){return"after"==this.compareWith(t)}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=li(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Ki(t)}clone(){return new Zi(this.parent,this.offset)}static _createAt(t,e){if(t instanceof Zi)return new this(t.parent,t.offset);{const n=t;if("end"==e)e=n.is("text")?n.data.length:n.childCount;else{if("before"==e)return this._createBefore(n);if("after"==e)return this._createAfter(n);if(0!==e&&!e)throw new Gn.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.",n)}return new Zi(n,e)}}static _createAfter(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new Gn.b("view-position-after-root: You can not make position after root.",t,{root:t});return new Zi(t.parent,t.index+1)}static _createBefore(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText);if(!t.parent)throw new Gn.b("view-position-before-root: You can not make position before root.",t,{root:t});return new Zi(t.parent,t.index)}}class Xi{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Ki({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(to,{direction:"backward"}),e=this.end.getLastMatchingPosition(to);return t.parent.is("text")&&t.isAtStart&&(t=Zi._createBefore(t.parent)),e.parent.is("text")&&e.isAtEnd&&(e=Zi._createAfter(e.parent)),new Xi(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(to);if(t.isAfter(this.end)||t.isEqual(this.end))return new Xi(t,t);let e=this.end.getLastMatchingPosition(to,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("text")&&(t=new Zi(n,0)),i&&i.is("text")&&(e=new Zi(i,i.data.length)),new Xi(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Xi(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Xi(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Xi(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Ki(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}clone(){return new Xi(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Ki(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Ki(t);yield e.position;for(const t of e)yield t.nextPosition}is(t){return"range"==t||"view:range"==t}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new Zi(t,e),new Zi(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(Zi._createBefore(t),e)}}function to(t){return!(!t.item.is("attributeElement")&&!t.item.is("uiElement"))}function eo(t){let e=0;for(const n of t)e++;return e}class no{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel)return!1;if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=eo(this.getRanges());if(e!=eo(t.getRanges()))return!1;if(0==e)return!0;for(let e of this.getRanges()){e=e.getTrimmed();let n=!1;for(let i of t.getRanges())if(i=i.getTrimmed(),e.start.isEqual(i.start)&&e.end.isEqual(i.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange();let e=t.start.nodeAfter,n=t.end.nodeBefore;return t.start.parent.is("text")&&t.start.isAtEnd&&t.start.parent.nextSibling&&(e=t.start.parent.nextSibling),t.end.parent.is("text")&&t.end.isAtStart&&t.end.parent.previousSibling&&(n=t.end.parent.previousSibling),e instanceof ki&&e==n?e:null}setTo(t,e,n){if(null===t)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof no||t instanceof io)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Xi)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof Zi)this._setRanges([new Xi(t)]),this._setFakeOptions(e);else if(t instanceof ui){const i=!!n&&!!n.backward;let o;if(void 0===e)throw new Gn.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",this);o="in"==e?Xi._createIn(t):"on"==e?Xi._createOn(t):new Xi(Zi._createAt(t,e)),this._setRanges([o],i),this._setFakeOptions(n)}else{if(!pi(t))throw new Gn.b("view-selection-setTo-not-selectable: Cannot set selection to given place.",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(null===this.anchor)throw new Gn.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.",this);const n=Zi._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.pop(),"before"==n.compareWith(i)?this._addRange(new Xi(n,i),!0):this._addRange(new Xi(i,n)),this.fire("change")}is(t){return"selection"==t||"view:selection"==t}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const e of t)this._addRange(e);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Xi))throw new Gn.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new Gn.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Xi(t.start,t.end))}}ci(no,ei);class io{constructor(t=null,e,n){this._selection=new no,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return"selection"==t||"documentSelection"==t||"view:selection"==t||"view:documentSelection"==t}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}ci(io,ei);class oo{constructor(t={}){this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[]}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){let n;const i=this._idProperty;if(i in t){if("string"!=typeof(n=t[i]))throw new Gn.b("collection-add-invalid-id",this);if(this.get(n))throw new Gn.b("collection-add-item-already-exists",this)}else t[i]=n=Kn();if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new Gn.b("collection-add-item-invalid-index",this);return this._items.splice(e,0,t),this._itemMap.set(n,t),this.fire("add",t,e),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new Gn.b("collection-get-invalid-arg: Index or id must be given.",this);e=this._items[t]}return e||null}has(t){if("string"==typeof t)return this._itemMap.has(t);{const e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let e,n,i,o=!1;const r=this._idProperty;if("string"==typeof t?(n=t,o=!(i=this._itemMap.get(n)),i&&(e=this._items.indexOf(i))):"number"==typeof t?(e=t,o=!(i=this._items[e]),i&&(n=i[r])):(n=(i=t)[r],o=-1==(e=this._items.indexOf(i))||!this._itemMap.get(n)),o)throw new Gn.b("collection-remove-404: Item not found.",this);this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(s),this.fire("remove",i,e),i}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(t){if(this._bindToCollection)throw new Gn.b("collection-bind-to-rebind: The collection cannot be bound more than once.",this);return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding(e=>new t(e))},using:t=>{"function"==typeof t?this._setUpBindToBinding(e=>t(e)):this._setUpBindToBinding(e=>e[t])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,i,o)=>{const r=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(i);if(r&&s)this._bindToExternalToInternalMap.set(i,s),this._bindToInternalToExternalMap.set(s,i);else{const n=t(i);if(!n)return void this._skippedIndexesFromExternal.push(o);let r=o;for(const t of this._skippedIndexesFromExternal)o>t&&r--;for(const t of e._skippedIndexesFromExternal)r>=t&&r++;this._bindToExternalToInternalMap.set(i,n),this._bindToInternalToExternalMap.set(n,i),this.add(n,r);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)r<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",(t,e,n)=>{const i=this._bindToExternalToInternalMap.get(e);i&&this.remove(i),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t),[])})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}ci(oo,ei);class ro{constructor(){this.selection=new io,this.roots=new oo({idProperty:"rootName"}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}ci(ro,Fi);const so=10;class ao extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=co,this._priority=so,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new Gn.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.",this);return new Set(this._clonesGroup)}is(t,e=null){const n=t&&t.replace(/^view:/,"");return e?"attributeElement"==n&&e==this.name||super.is(t,e):"attributeElement"==n||super.is(t)}isSimilar(t){return null!==this.id||null!==t.id?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function co(){if(lo(this))return null;let t=this.parent;for(;t&&t.is("attributeElement");){if(lo(t)>1)return null;t=t.parent}return!t||lo(t)>1?null:this.childCount}function lo(t){return Array.from(t.getChildren()).filter(t=>!t.is("uiElement")).length}ao.DEFAULT_PRIORITY=so;class ho extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=uo}is(t,e=null){const n=t.replace(/^view:/,"");return e?"emptyElement"==n&&e==this.name||super.is(t,e):"emptyElement"==n||super.is(t)}_insertChild(t,e){if(e&&(e instanceof ui||Array.from(e).length>0))throw new Gn.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.",[this,e])}}function uo(){return null}const fo=navigator.userAgent.toLowerCase();var go={isMac:function(t){return t.indexOf("macintosh")>-1}(fo),isEdge:function(t){return!!t.match(/edge\/(\d+.?\d*)/)}(fo),isGecko:function(t){return!!t.match(/gecko\/\d+/)}(fo),isSafari:function(t){return t.indexOf(" applewebkit/")>-1&&-1===t.indexOf("chrome")}(fo),isAndroid:function(t){return t.indexOf("android")>-1}(fo),features:{isRegExpUnicodePropertySupported:function(){let t=!1;try{t=0==="ć".search(new RegExp("[\\p{L}]","u"))}catch(t){}return t}()}};const mo={"⌘":"ctrl","⇧":"shift","⌥":"alt"},po={ctrl:"⌘",shift:"⇧",alt:"⌥"},bo=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let e=65;e<=90;e++){const n=String.fromCharCode(e);t[n.toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;return t}();function wo(t){let e;if("string"==typeof t){if(!(e=bo[t.toLowerCase()]))throw new Gn.b("keyboard-unknown-key: Unknown key name.",null,{key:t})}else e=t.keyCode+(t.altKey?bo.alt:0)+(t.ctrlKey?bo.ctrl:0)+(t.shiftKey?bo.shift:0);return e}function ko(t){return"string"==typeof t&&(t=_o(t)),t.map(t=>"string"==typeof t?wo(t):t).reduce((t,e)=>e+t,0)}function _o(t){return t.split(/\s*\+\s*/)}class vo extends ki{constructor(t,e,n){super(t,e,n),this.getFillerOffset=xo}is(t,e=null){const n=t.replace(/^view:/,"");return e?"uiElement"==n&&e==this.name||super.is(t,e):"uiElement"==n||super.is(t)}_insertChild(t,e){if(e&&(e instanceof ui||Array.from(e).length>0))throw new Gn.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.",this)}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const t of this.getAttributeKeys())e.setAttribute(t,this.getAttribute(t));return e}}function yo(t){t.document.on("keydown",(e,n)=>(function(t,e,n){if(e.keyCode==bo.arrowright){const t=e.domTarget.ownerDocument.defaultView.getSelection(),i=1==t.rangeCount&&t.getRangeAt(0).collapsed;if(i||e.shiftKey){const e=t.focusNode,o=t.focusOffset,r=n.domPositionToView(e,o);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(t=>(t.item.is("uiElement")&&(s=!0),!(!t.item.is("uiElement")&&!t.item.is("attributeElement"))));if(s){const e=n.viewPositionToDom(a);i?t.collapse(e.parent,e.offset):t.extend(e.parent,e.offset)}}}})(0,n,t.domConverter))}function xo(){return null}class Ao{constructor(t){this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t||"view:documentFragment"==t}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t){if("string"==typeof t)return[new fi(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new fi(t):t instanceof gi?new fi(t.data):t)}(e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}ci(Ao,ei);class To{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createText(t){return new fi(t)}createAttributeElement(t,e,n={}){const i=new ao(t,e);return n.priority&&(i._priority=n.priority),n.id&&(i._id=n.id),i}createContainerElement(t,e){return new yi(t,e)}createEditableElement(t,e){const n=new Gi(t,e);return n._document=this.document,n}createEmptyElement(t,e){return new ho(t,e)}createUIElement(t,e,n){const i=new vo(t,e);return n&&(i.render=n),i}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){T(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Zi?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new Gn.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.",this.document);if(!e.parent)throw new Gn.b("view-writer-break-root: Trying to break root element.",this.document);if(t.isAtStart)return Zi._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Zi._createAfter(e),n);const i=new Xi(t,Zi._createAt(e,"end")),o=new Zi(n,0);this.move(i,o)}return Zi._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("text"))return t;if(n.is("attributeElement")&&0===n.childCount){const t=n.parent,e=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Zi(t,e))}const i=n.getChild(e-1),o=n.getChild(e);if(!i||!o)return t;if(i.is("text")&&o.is("text"))return Eo(i,o);if(i.is("attributeElement")&&o.is("attributeElement")&&i.isSimilar(o)){const t=i.childCount;return i._appendChild(o.getChildren()),o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Zi(i,t))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new Gn.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.",this.document);const i=e.getChild(e.childCount-1),o=i instanceof fi?Zi._createAt(i,"end"):Zi._createAt(e,"end");return this.move(Xi._createIn(n),Zi._createAt(e,"end")),this.remove(Xi._createOn(n)),o}insert(t,e){(function t(e,n){for(const i of e){if(!Io.some(t=>i instanceof t))throw new Gn.b("view-writer-insert-invalid-node",n);i.is("text")||t(i.getChildren(),n)}})(e=pi(e)?[...e]:[e],this.document);const n=Co(t);if(!n)throw new Gn.b("view-writer-invalid-position-container",this.document);const i=this._breakAttributes(t,!0),o=n._insertChild(i.offset,e);for(const t of e)this._addToClonedElementsGroup(t);const r=i.getShiftedBy(o),s=this.mergeAttributes(i);if(0===o)return new Xi(s,s);{s.isEqual(i)||r.offset--;const t=this.mergeAttributes(r);return new Xi(s,t)}}remove(t){const e=t instanceof Xi?t:Xi._createOn(t);if(Oo(e,this.document),e.isCollapsed)return new Ao;const{start:n,end:i}=this._breakAttributesRange(e,!0),o=n.parent,r=i.offset-n.offset,s=o._removeChildren(n.offset,r);for(const t of s)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(n);return e.start=a,e.end=a.clone(),new Ao(s)}clear(t,e){Oo(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const n=i.item;let o;if(n.is("element")&&e.isSimilar(n))o=Xi._createOn(n);else if(!i.nextPosition.isAfter(t.start)&&n.is("textProxy")){const t=n.getAncestors().find(t=>t.is("element")&&e.isSimilar(t));t&&(o=Xi._createIn(t))}o&&(o.end.isAfter(t.end)&&(o.end=t.end),o.start.isBefore(t.start)&&(o.start=t.start),this.remove(o))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,o=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-o}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof ao))throw new Gn.b("view-writer-wrap-invalid-attribute",this.document);if(Oo(t,this.document),t.isCollapsed){let n=t.start;n.parent.is("element")&&!function(t){return Array.from(t.getChildren()).some(t=>!t.is("uiElement"))}(n.parent)&&(n=n.getLastMatchingPosition(t=>t.item.is("uiElement"))),n=this._wrapPosition(n,e);const i=this.document.selection;return i.isCollapsed&&i.getFirstPosition().isEqual(t.start)&&this.setSelection(n),new Xi(n)}return this._wrapRange(t,e)}unwrap(t,e){if(!(e instanceof ao))throw new Gn.b("view-writer-unwrap-invalid-attribute",this.document);if(Oo(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._unwrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}rename(t,e){const n=new yi(t,e.getAttributes());return this.insert(Zi._createAfter(e),n),this.move(Xi._createIn(e),Zi._createAt(n,0)),this.remove(Xi._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_wrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o),n=e.is("text"),s=e.is("attributeElement"),a=e.is("emptyElement"),c=e.is("uiElement");if(s&&this._wrapAttributeElement(i,e))r.push(new Zi(t,o));else if(n||a||c||s&&Po(i,e)){const n=i._clone();e._remove(),n._appendChild(e),t._insertChild(o,n),this._addToClonedElementsGroup(n),r.push(new Zi(t,o))}else s&&this._wrapChildren(e,0,e.childCount,i);o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o);if(e.is("attributeElement"))if(e.isSimilar(i)){const i=e.getChildren(),s=e.childCount;e._remove(),t._insertChild(o,i),this._removeFromClonedElementsGroup(e),r.push(new Zi(t,o),new Zi(t,o+s)),o+=s,n+=s-1}else this._unwrapAttributeElement(i,e)?(r.push(new Zi(t,o),new Zi(t,o+1)),o++):(this._unwrapChildren(e,0,e.childCount,i),o++);else o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e||t.offset==n)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._wrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return So(t.clone());t.parent.is("text")&&(t=Mo(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=(()=>!1),t.parent._insertChild(t.offset,n);const i=new Xi(t,t.getShiftedBy(1));this.wrap(i,e);const o=new Zi(n.parent,n.index);n._remove();const r=o.nodeBefore,s=o.nodeAfter;return r instanceof fi&&s instanceof fi?Eo(r,s):So(o)}_wrapAttributeElement(t,e){if(!Ro(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Ro(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Oo(t,this.document),t.isCollapsed){const n=this._breakAttributes(t.start,e);return new Xi(n,n)}const o=this._breakAttributes(i,e),r=o.parent.childCount,s=this._breakAttributes(n,e);return o.offset+=o.parent.childCount-r,new Xi(s,o)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new Gn.b("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new Gn.b("view-writer-cannot-break-ui-element",this.document);if(!e&&i.is("text")&&No(i.parent))return t.clone();if(No(i))return t.clone();if(i.is("text"))return this._breakAttributes(Mo(t),e);if(n==i.childCount){const t=new Zi(i.parent,i.index+1);return this._breakAttributes(t,e)}if(0===n){const t=new Zi(i.parent,i.index);return this._breakAttributes(t,e)}{const t=i.index+1,o=i._clone();i.parent._insertChild(t,o),this._addToClonedElementsGroup(o);const r=i.childCount-n,s=i._removeChildren(n,r);o._appendChild(s);const a=new Zi(i.parent,t);return this._breakAttributes(a,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const e of t.getChildren())this._addToClonedElementsGroup(e);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const e of t.getChildren())this._removeFromClonedElementsGroup(e);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function Co(t){let e=t.parent;for(;!No(e);){if(!e)return;e=e.parent}return e}function Po(t,e){return t.priority<e.priority||!(t.priority>e.priority)&&t.getIdentity()<e.getIdentity()}function So(t){const e=t.nodeBefore;if(e&&e.is("text"))return new Zi(e,e.data.length);const n=t.nodeAfter;return n&&n.is("text")?new Zi(n,0):t}function Mo(t){if(t.offset==t.parent.data.length)return new Zi(t.parent.parent,t.parent.index+1);if(0===t.offset)return new Zi(t.parent.parent,t.parent.index);const e=t.parent.data.slice(t.offset);return t.parent._data=t.parent.data.slice(0,t.offset),t.parent.parent._insertChild(t.parent.index+1,new fi(e)),new Zi(t.parent.parent,t.parent.index+1)}function Eo(t,e){const n=t.data.length;return t._data+=e.data,e._remove(),new Zi(t,n)}const Io=[fi,ao,yi,ho,vo];function No(t){return t&&(t.is("containerElement")||t.is("documentFragment"))}function Oo(t,e){const n=Co(t.start),i=Co(t.end);if(!n||!i||n!==i)throw new Gn.b("view-writer-invalid-range-container",e)}function Ro(t,e){return null===t.id&&null===e.id}function Do(t){return"[object Text]"==Object.prototype.toString.call(t)}const Lo=t=>t.createTextNode(" "),jo=t=>{const e=t.createElement("br");return e.dataset.ckeFiller=!0,e},Vo=7,zo=(()=>{let t="";for(let e=0;e<Vo;e++)t+="​";return t})();function Bo(t){return Do(t)&&t.data.substr(0,Vo)===zo}function Fo(t){return t.data.length==Vo&&Bo(t)}function Uo(t){return Bo(t)?t.data.slice(Vo):t.data}function Ho(t,e){if(e.keyCode==bo.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(1==t.rangeCount&&t.getRangeAt(0).collapsed){const e=t.getRangeAt(0).startContainer,n=t.getRangeAt(0).startOffset;Bo(e)&&n<=Vo&&t.collapse(e,0)}}}function qo(t,e,n,i=!1){n=n||function(t,e){return t===e},Array.isArray(t)||(t=Array.from(t)),Array.isArray(e)||(e=Array.from(e));const o=function(t,e,n){const i=Wo(t,e,n);if(-1===i)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=Yo(t,i),r=Yo(e,i),s=Wo(o,r,n),a=t.length-s,c=e.length-s;return{firstIndex:i,lastIndexOld:a,lastIndexNew:c}}(t,e,n);return i?function(t,e){const{firstIndex:n,lastIndexOld:i,lastIndexNew:o}=t;if(-1===n)return Array(e).fill("equal");let r=[];n>0&&(r=r.concat(Array(n).fill("equal")));o-n>0&&(r=r.concat(Array(o-n).fill("insert")));i-n>0&&(r=r.concat(Array(i-n).fill("delete")));o<e&&(r=r.concat(Array(e-o).fill("equal")));return r}(o,e.length):function(t,e){const n=[],{firstIndex:i,lastIndexOld:o,lastIndexNew:r}=e;r-i>0&&n.push({index:i,type:"insert",values:t.slice(i,r)});o-i>0&&n.push({index:i+(r-i),type:"delete",howMany:o-i});return n}(e,o)}function Wo(t,e,n){for(let i=0;i<Math.max(t.length,e.length);i++)if(void 0===t[i]||void 0===e[i]||!n(t[i],e[i]))return i;return-1}function Yo(t,e){return t.slice(e).reverse()}function $o(t,e,n){n=n||function(t,e){return t===e};const i=t.length,o=e.length;if(i>200||o>200||i+o>300)return $o.fastDiff(t,e,n,!0);let r,s;if(o<i){const n=t;t=e,e=n,r="delete",s="insert"}else r="insert",s="delete";const a=t.length,c=e.length,l=c-a,d={},h={};function u(i){const o=(void 0!==h[i-1]?h[i-1]:-1)+1,l=void 0!==h[i+1]?h[i+1]:-1,u=o>l?-1:1;d[i+u]&&(d[i]=d[i+u].slice(0)),d[i]||(d[i]=[]),d[i].push(o>l?r:s);let f=Math.max(o,l),g=f-i;for(;g<a&&f<c&&n(t[g],e[f]);)g++,f++,d[i].push("equal");return f}let f,g=0;do{for(f=-g;f<l;f++)h[f]=u(f);for(f=l+g;f>l;f--)h[f]=u(f);h[l]=u(l),g++}while(h[l]!==c);return d[l].slice(1)}function Go(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}function Qo(t){const e=t.parentNode;e&&e.removeChild(t)}function Jo(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}$o.fastDiff=qo;class Ko{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if("text"===t)this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if("attributes"===t)this.markedAttributes.add(e);else{if("children"!==t)throw new Gn.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.",this);this.markedChildren.add(e)}}}render(){let t;for(const t of this.markedChildren)this._updateChildrenMappings(t);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(const t of this.markedAttributes)this._updateAttrs(t);for(const e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(const e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){const e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;Bo(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=Zo(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=this.domConverter.mapViewToDom(t).childNodes,i=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),o=this._diffNodeLists(n,i),r=this._findReplaceActions(o,n,i);if(-1!==r.indexOf("replace")){const e={equal:0,insert:0,delete:0};for(const o of r)if("replace"===o){const o=e.equal+e.insert,r=e.equal+e.delete,s=t.getChild(o);s&&!s.is("uiElement")&&this._updateElementMappings(s,n[r]),Qo(i[o]),e.equal++}else e[o]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("text")?Zi._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Do(e.parent)&&Bo(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Bo(t))throw new Gn.b("view-renderer-filler-was-lost: The inline filler node was lost.",this);Fo(t)?t.parentNode.removeChild(t):t.data=t.data.substr(Vo),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root))return!1;if(!e.is("element"))return!1;if(!function(t){if("false"==t.getAttribute("contenteditable"))return!1;const e=t.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||"true"==e.getAttribute("contenteditable")}(e))return!1;if(n===e.getFillerOffset())return!1;const i=t.nodeBefore,o=t.nodeAfter;return!(i instanceof fi||o instanceof fi)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),i=this.domConverter.viewToDom(t,n.ownerDocument),o=n.data;let r=i.data;const s=e.inlineFillerPosition;if(s&&s.parent==t.parent&&s.offset==t.index&&(r=zo+r),o!=r){const t=qo(o,r);for(const e of t)"insert"===e.type?n.insertData(e.index,e.values.join("")):n.deleteData(e.index,e.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(t=>t.name),i=t.getAttributeKeys();for(const n of i)e.setAttribute(n,t.getAttribute(n));for(const i of n)t.hasAttribute(i)||e.removeAttribute(i)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const i=e.inlineFillerPosition,o=this.domConverter.mapViewToDom(t).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:i}));i&&i.parent===t&&Zo(n.ownerDocument,r,i.offset);const s=this._diffNodeLists(o,r);let a=0;const c=new Set;for(const t of s)"insert"===t?(Go(n,a,r[a]),a++):"delete"===t?(c.add(o[a]),Qo(o[a])):(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const t of c)t.parentNode||this.domConverter.unbindDomElement(t)}_diffNodeLists(t,e){return $o(t=function(t,e){const n=Array.from(t);if(0==n.length||!e)return n;n[n.length-1]==e&&n.pop();return n}(t,this._fakeSelectionContainer),e,function(t,e,n){if(e===n)return!0;if(Do(e)&&Do(n))return e.data===n.data;if(t.isBlockFiller(e)&&t.isBlockFiller(n))return!0;return!1}.bind(null,this.domConverter))}_findReplaceActions(t,e,n){if(-1===t.indexOf("insert")||-1===t.indexOf("delete"))return t;let i=[],o=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of t)"insert"===a?r.push(n[s.equal+s.insert]):"delete"===a?o.push(e[s.equal+s.delete]):((i=i.concat($o(o,r,Xo).map(t=>"equal"===t?"replace":t))).push("equal"),o=[],r=[]),s[a]++;return i.concat($o(o,r,Xo).map(t=>"equal"===t?"replace":t))}_markDescendantTextToSync(t){if(t)if(t.is("text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(t){const e=t.createElement("div");return Object.assign(e.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),e.textContent=" ",e}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),o=e.createRange();i.removeAllRanges(),o.selectNodeContents(n),i.addRange(o)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.focus(),e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),go.isGecko&&function(t,e){const n=t.parent;if(n.nodeType!=Node.ELEMENT_NODE||t.offset!=n.childNodes.length-1)return;const i=n.childNodes[t.offset];i&&"BR"==i.tagName&&e.addRange(e.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||(n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel)}_removeDomSelection(){for(const t of this.domDocuments){if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Zo(t,e,n){const i=e instanceof Array?e:e.childNodes,o=i[n];if(Do(o))return o.data=zo+o.data,o;{const o=t.createTextNode(zo);return Array.isArray(e)?i.splice(n,0,o):Go(e,n,o),o}}function Xo(t,e){return Jo(t)&&Jo(e)&&!Do(t)&&!Do(e)&&t.tagName.toLowerCase()===e.tagName.toLowerCase()}ci(Ko,Fi);var tr={window:window,document:document};function er(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}function nr(t){const e=[];for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const ir=jo(document);class or{constructor(t={}){this.blockFillerMode=t.blockFillerMode||"br",this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6","li","dd","dt","figcaption"],this._blockFiller="br"==this.blockFillerMode?jo:Lo,this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new no(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const e of Array.from(t.childNodes))this.unbindDomElement(e)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("text")){const n=this._processDataFromViewText(t);return e.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let i;if(t.is("documentFragment"))i=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(i,t);else{if(t.is("uiElement"))return i=t.render(e),n.bind&&this.bindElements(i,t),i;i=t.hasAttribute("xmlns")?e.createElementNS(t.getAttribute("xmlns"),t.name):e.createElement(t.name),n.bind&&this.bindElements(i,t);for(const e of t.getAttributeKeys())i.setAttribute(e,t.getAttribute(e))}if(n.withChildren||void 0===n.withChildren)for(const o of this.viewChildrenToDom(t,e,n))i.appendChild(o);return i}}*viewChildrenToDom(t,e,n={}){const i=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const r of t.getChildren())i===o&&(yield this._blockFiller(e)),yield this.viewToDom(r,e,n),o++;i===o&&(yield this._blockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=document.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Bo(n)&&(i+=Vo),{parent:n,offset:i}}{let n,i,o;if(0===t.offset){if(!(n=this.mapViewToDom(e)))return null;o=n.childNodes[0]}else{const e=t.nodeBefore;if(!(i=e.is("text")?this.findCorrespondingDomText(e):this.mapViewToDom(t.nodeBefore)))return null;n=i.parentNode,o=i.nextSibling}if(Do(o)&&Bo(o))return{parent:o,offset:Vo};return{parent:n,offset:i?er(i)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t,this.blockFillerMode))return null;const n=this.getParentUIElement(t,this._domToViewMapping);if(n)return n;if(Do(t)){if(Fo(t))return null;{const e=this._processDataFromDomText(t);return""===e?null:new fi(e)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let n;if(this.isDocumentFragment(t))n=new Ao,e.bind&&this.bindDocumentFragments(t,n);else{const i=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();n=new ki(i),e.bind&&this.bindElements(t,n);const o=t.attributes;for(let t=o.length-1;t>=0;t--)n._setAttribute(o[t].name,o[t].value)}if(e.withChildren||void 0===e.withChildren)for(const i of this.domChildrenToView(t,e))n._appendChild(i);return n}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n],o=this.domToView(i,e);null!==o&&(yield o)}}domSelectionToView(t){if(1===t.rangeCount){let e=t.getRangeAt(0).startContainer;Do(e)&&(e=e.parentNode);const n=this.fakeSelectionToView(e);if(n)return n}const e=this.isDomSelectionBackward(t),n=[];for(let e=0;e<t.rangeCount;e++){const i=t.getRangeAt(e),o=this.domRangeToView(i);o&&n.push(o)}return new no(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Xi(e,n):null}domPositionToView(t,e){if(this.isBlockFiller(t,this.blockFillerMode))return this.domPositionToView(t.parentNode,er(t));const n=this.mapDomToView(t);if(n&&n.is("uiElement"))return Zi._createBefore(n);if(Do(t)){if(Fo(t))return this.domPositionToView(t.parentNode,er(t));const n=this.findCorrespondingViewText(t);let i=e;return n?(Bo(t)&&(i=(i-=Vo)<0?0:i),new Zi(n,i)):null}if(0===e){const e=this.mapDomToView(t);if(e)return new Zi(e,0)}else{const n=t.childNodes[e-1],i=Do(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(i&&i.parent)return new Zi(i.parent,i.index+1)}return null}mapDomToView(t){return this.getParentUIElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Fo(t))return null;const e=this.getParentUIElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const t=this.mapDomToView(n);if(t){return t.nextSibling instanceof fi?t.nextSibling:null}}else{const e=this.mapDomToView(t.parentNode);if(e){const t=e.getChild(0);return t instanceof fi?t:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:t,scrollY:n}=tr.window,i=[];sr(e,t=>{const{scrollLeft:e,scrollTop:n}=t;i.push([e,n])}),e.focus(),sr(e,t=>{const[e,n]=i.shift();t.scrollLeft=e,t.scrollTop=n}),tr.window.scrollTo(t,n)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isBlockFiller(t){return"br"==this.blockFillerMode?t.isEqualNode(ir):function(t,e){return Do(t)&&" "==t.data&&function(t,e){const n=t.parentNode;return n&&n.tagName&&e.includes(n.tagName.toLowerCase())}(t,e)&&1===t.parentNode.childNodes.length}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getParentUIElement(t){const e=nr(t);for(e.pop();e.length;){const t=e.pop(),n=this._domToViewMapping.get(t);if(n&&n.is("uiElement"))return n}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}_isDomSelectionPositionCorrect(t,e){if(Do(t)&&Bo(t)&&e<Vo)return!1;if(this.isElement(t)&&Bo(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return e;if(" "==e.charAt(0)){const n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(" "==e.charAt(e.length-1)){const n=this._getTouchingViewTextNode(t,!0);" "!=e.charAt(e.length-2)&&n&&" "!=n.data.charAt(0)||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return!1;const e=this._processDataFromViewText(t);return" "==e.charAt(e.length-1)}_processDataFromDomText(t){let e=t.data;if(rr(t,this.preElements))return Uo(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),o=this._checkShouldLeftTrimDomText(n),r=this._checkShouldRightTrimDomText(t,i);return o&&(e=e.replace(/^ /,"")),r&&(e=e.replace(/ $/,"")),e=(e=Uo(new Text(e))).replace(/ \u00A0/g,"  "),(/( |\u00A0)\u00A0$/.test(e)||!i||i.data&&" "==i.data.charAt(0))&&(e=e.replace(/\u00A0$/," ")),o&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t){return!t||(!!Wn(t)||/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Bo(t)}_getTouchingViewTextNode(t,e){const n=new Ki({startPosition:e?Zi._createAfter(t):Zi._createBefore(t),direction:e?"forward":"backward"});for(const t of n){if(t.item.is("containerElement"))return null;if(t.item.is("br"))return null;if(t.item.is("textProxy"))return t.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"nextNode":"previousNode",i=t.ownerDocument,o=nr(t)[0],r=i.createTreeWalker(o,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:t=>Do(t)?NodeFilter.FILTER_ACCEPT:"BR"==t.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=t;const s=r[n]();if(null!==s){const e=function(t,e){const n=nr(t),i=nr(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}(t,s);if(e&&!rr(t,this.blockElements,e)&&!rr(s,this.blockElements,e))return s}return null}}function rr(t,e,n){let i=nr(t);return n&&(i=i.slice(i.indexOf(n)+1)),i.some(t=>t.tagName&&e.includes(t.tagName.toLowerCase()))}function sr(t,e){for(;t&&t!=tr.document;)e(t),t=t.parentNode}function ar(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}var cr=Li({},ei,{listenTo(t,...e){if(Jo(t)||ar(t)){const n=this._getProxyEmitter(t)||new lr(t);n.attach(...e),t=n}ei.listenTo.call(this,t,...e)},stopListening(t,e,n){if(Jo(t)||ar(t)){const e=this._getProxyEmitter(t);if(!e)return;t=e}ei.stopListening.call(this,t,e,n),t instanceof lr&&t.detach(e)},_getProxyEmitter(t){return function(t,e){return t[Xn]&&t[Xn][e]?t[Xn][e].emitter:null}(this,dr(t))}});class lr{constructor(t){ni(this,dr(t)),this._domNode=t}}function dr(t){return t["data-ck-expando"]||(t["data-ck-expando"]=Kn())}Li(lr.prototype,ei,{attach(t,e,n={}){if(this._domListeners&&this._domListeners[t])return;const i=this._createDomListener(t,!!n.useCapture);this._domNode.addEventListener(t,i,!!n.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[t]=i},detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()},_createDomListener(t,e){const n=e=>{this.fire(t,e)};return n.removeListener=(()=>{this._domNode.removeEventListener(t,n,e),delete this._domListeners[t]}),n}});class hr{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}ci(hr,cr);var ur="__lodash_hash_undefined__";var fr=function(t){return this.__data__.set(t,ur),this};var gr=function(t){return this.__data__.has(t)};function mr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Pt;++e<n;)this.add(t[e])}mr.prototype.add=mr.prototype.push=fr,mr.prototype.has=gr;var pr=mr;var br=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1};var wr=function(t,e){return t.has(e)},kr=1,_r=2;var vr=function(t,e,n,i,o,r){var s=n&kr,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(t);if(l&&r.get(e))return l==e;var d=-1,h=!0,u=n&_r?new pr:void 0;for(r.set(t,e),r.set(e,t);++d<a;){var f=t[d],g=e[d];if(i)var m=s?i(g,f,d,e,t,r):i(f,g,d,t,e,r);if(void 0!==m){if(m)continue;h=!1;break}if(u){if(!br(e,function(t,e){if(!wr(u,e)&&(f===t||o(f,t,n,i,r)))return u.push(e)})){h=!1;break}}else if(f!==g&&!o(f,g,n,i,r)){h=!1;break}}return r.delete(t),r.delete(e),h};var yr=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,i){n[++e]=[i,t]}),n};var xr=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n},Ar=1,Tr=2,Cr="[object Boolean]",Pr="[object Date]",Sr="[object Error]",Mr="[object Map]",Er="[object Number]",Ir="[object RegExp]",Nr="[object Set]",Or="[object String]",Rr="[object Symbol]",Dr="[object ArrayBuffer]",Lr="[object DataView]",jr=o?o.prototype:void 0,Vr=jr?jr.valueOf:void 0;var zr=function(t,e,n,i,o,r,s){switch(n){case Lr:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Dr:return!(t.byteLength!=e.byteLength||!r(new Ye(t),new Ye(e)));case Cr:case Pr:case Er:return P(+t,+e);case Sr:return t.name==e.name&&t.message==e.message;case Ir:case Or:return t==e+"";case Mr:var a=yr;case Nr:var c=i&Ar;if(a||(a=xr),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;i|=Tr,s.set(t,e);var d=vr(a(t),a(e),i,o,r,s);return s.delete(t),d;case Rr:if(Vr)return Vr.call(t)==Vr.call(e)}return!1},Br=1,Fr=Object.prototype.hasOwnProperty;var Ur=function(t,e,n,i,o,r){var s=n&Br,a=Ie(t),c=a.length;if(c!=Ie(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:Fr.call(e,d)))return!1}var h=r.get(t);if(h&&r.get(e))return h==e;var u=!0;r.set(t,e),r.set(e,t);for(var f=s;++l<c;){var g=t[d=a[l]],m=e[d];if(i)var p=s?i(m,g,d,e,t,r):i(g,m,d,t,e,r);if(!(void 0===p?g===m||o(g,m,n,i,r):p)){u=!1;break}f||(f="constructor"==d)}if(u&&!f){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(u=!1)}return r.delete(t),r.delete(e),u},Hr=1,qr="[object Arguments]",Wr="[object Array]",Yr="[object Object]",$r=Object.prototype.hasOwnProperty;var Gr=function(t,e,n,i,o,r){var s=Wt(t),a=Wt(e),c=s?Wr:He(t),l=a?Wr:He(e),d=(c=c==qr?Yr:c)==Yr,h=(l=l==qr?Yr:l)==Yr,u=c==l;if(u&&Object(Yt.a)(t)){if(!Object(Yt.a)(e))return!1;s=!0,d=!1}if(u&&!d)return r||(r=new It),s||ie(t)?vr(t,e,n,i,o,r):zr(t,e,c,n,i,o,r);if(!(n&Hr)){var f=d&&$r.call(t,"__wrapped__"),g=h&&$r.call(e,"__wrapped__");if(f||g){var m=f?t.value():t,p=g?e.value():e;return r||(r=new It),o(m,p,n,i,r)}}return!!u&&(r||(r=new It),Ur(t,e,n,i,o,r))};var Qr=function t(e,n,i,o,r){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:Gr(e,n,i,o,t,r))};var Jr=function(t,e,n){var i=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===i?Qr(t,e,void 0,n):!!i};class Kr extends hr{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(0===t.length)return;const e=this.domConverter,n=new Map,i=new Set;for(const n of t)if("childList"===n.type){const t=e.mapDomToView(n.target);if(t&&t.is("uiElement"))continue;t&&!this._isBogusBrMutation(n)&&i.add(t)}for(const o of t){const t=e.mapDomToView(o.target);if((!t||!t.is("uiElement"))&&"characterData"===o.type){const t=e.findCorrespondingViewText(o.target);t&&!i.has(t.parent)?n.set(t,{type:"text",oldText:t.data,newText:Uo(o.target),node:t}):!t&&Bo(o.target)&&i.add(e.mapDomToView(o.target.parentNode))}}const o=[];for(const t of n.values())this.renderer.markToSync("text",t.node),o.push(t);for(const t of i){const n=e.mapViewToDom(t),i=Array.from(t.getChildren()),r=Array.from(e.domChildrenToView(n,{withChildren:!1}));Jr(i,r,a)||(this.renderer.markToSync("children",t),o.push({type:"children",oldChildren:i,newChildren:r,node:t}))}const r=t[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const t=e.domPositionToView(r.anchorNode,r.anchorOffset),n=e.domPositionToView(r.focusNode,r.focusOffset);t&&n&&(s=new no(t)).setFocus(n)}function a(t,e){if(!Array.isArray(t))return t===e||!(!t.is("text")||!e.is("text"))&&t.data===e.data}this.document.fire("mutations",o,s),this.view.forceRender()}_isBogusBrMutation(t){let e=null;return null===t.nextSibling&&0===t.removedNodes.length&&1==t.addedNodes.length&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Zr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Li(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Xr extends hr{constructor(t){super(t),this.useCapture=!1}observe(t){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(t,e)=>{this.isEnabled&&this.onDomEvent(e)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Zr(this.view,e,n))}}class ts extends Xr{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey||t.metaKey,shiftKey:t.shiftKey,get keystroke(){return wo(this)}})}}var es=function(){return i.a.Date.now()},ns="[object Symbol]";var is=function(t){return"symbol"==typeof t||w(t)&&m(t)==ns},os=NaN,rs=/^\s+|\s+$/g,ss=/^[-+]0x[0-9a-f]+$/i,as=/^0b[01]+$/i,cs=/^0o[0-7]+$/i,ls=parseInt;var ds=function(t){if("number"==typeof t)return t;if(is(t))return os;if(B(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=B(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(rs,"");var n=as.test(t);return n||cs.test(t)?ls(t.slice(2),n?2:8):ss.test(t)?os:+t},hs="Expected a function",us=Math.max,fs=Math.min;var gs=function(t,e,n){var i,o,r,s,a,c,l=0,d=!1,h=!1,u=!0;if("function"!=typeof t)throw new TypeError(hs);function f(e){var n=i,r=o;return i=o=void 0,l=e,s=t.apply(r,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-l>=r}function m(){var t=es();if(g(t))return p(t);a=setTimeout(m,function(t){var n=e-(t-c);return h?fs(n,r-(t-l)):n}(t))}function p(t){return a=void 0,u&&i?f(t):(i=o=void 0,s)}function b(){var t=es(),n=g(t);if(i=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(m,e),d?f(t):s}(c);if(h)return clearTimeout(a),a=setTimeout(m,e),f(c)}return void 0===a&&(a=setTimeout(m,e)),s}return e=ds(e)||0,B(n)&&(d=!!n.leading,r=(h="maxWait"in n)?us(ds(n.maxWait)||0,e):r,u="trailing"in n?!!n.trailing:u),b.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},b.flush=function(){return void 0===a?s:p(es())},b};class ms extends hr{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=gs(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const t=this.document;t.on("keydown",(e,n)=>{t.selection.isFake&&function(t){return t==bo.arrowright||t==bo.arrowleft||t==bo.arrowup||t==bo.arrowdown}(n.keyCode)&&this.isEnabled&&(n.preventDefault(),this._handleSelectionMove(n.keyCode))},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new no(e.getRanges(),{backward:e.isBackward,fake:!1});t!=bo.arrowleft&&t!=bo.arrowup||n.setTo(n.getFirstPosition()),t!=bo.arrowright&&t!=bo.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}class ps extends hr{constructor(t){super(t),this.mutationObserver=t.getObserver(Kr),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=gs(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",()=>{this._handleSelectionChange(e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t){if(!this.isEnabled||!this.document.isFocused&&!this.document.isReadOnly)return;this.mutationObserver.flush();const e=t.defaultView.getSelection(),n=this.domConverter.domSelectionToView(e);if(!(this.selection.isEqual(n)&&this.domConverter.isDomSelectionCorrect(e)||++this._loopbackCounter>60))if(this.selection.isSimilar(n))this.view.forceRender();else{const t={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",t),this._fireSelectionChangeDoneDebounced(t)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class bs extends Xr{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.forceRender(),50)}),e.on("blur",(n,i)=>{const o=e.selection.editableElement;null!==o&&o!==i.target||(e.isFocused=!1,t.forceRender())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ws extends Xr{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class ks extends Xr{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}function _s(t){return"[object Range]"==Object.prototype.toString.apply(t)}function vs(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const ys=["top","right","bottom","left","width","height"];class xs{constructor(t){const e=_s(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Wn(t)||e)As(this,e?xs.getDomRangeRects(t)[0]:t.getBoundingClientRect());else if(ar(t)){const{innerWidth:e,innerHeight:n}=t;As(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else As(this,t)}clone(){return new xs(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new xs(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!Ts(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!Ts(n);){const t=new xs(n),i=e.getIntersection(t);if(!i)return null;i.getArea()<e.getArea()&&(e=i),n=n.parentNode}}return e}isEqual(t){for(const e of ys)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(ar(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const o=vs(this._source);e=t.offsetWidth-t.clientWidth-o.left-o.right,n=t.offsetHeight-t.clientHeight-o.top-o.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=o.left,this.top+=o.top,this.right-=o.right,this.bottom-=o.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,"ltr"===i?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new xs(t));else{let n=t.startContainer;Do(n)&&(n=n.parentNode);const i=new xs(n.getBoundingClientRect());i.right=i.left,i.width=0,e.push(i)}return e}}function As(t,e){for(const n of ys)t[n]=e[n]}function Ts(t){return!!Wn(t)&&t===t.ownerDocument.body}function Cs({target:t,viewportOffset:e=0}){const n=Os(t);let i=n,o=null;for(;i;){let r;Ss(r=Rs(i==n?t:o),()=>Ds(t,i));const s=Ds(t,i);if(Ps(i,s,e),i.parent!=i){if(o=i.frameElement,i=i.parent,!o)return}else i=null}}function Ps(t,e,n){const i=e.clone().moveBy(0,n),o=e.clone().moveBy(0,-n),r=new xs(t).excludeScrollbarsAndBorders();if(![o,i].every(t=>r.contains(t))){let{scrollX:s,scrollY:a}=t;Es(o,r)?a-=r.top-e.top+n:Ms(i,r)&&(a+=e.bottom-r.bottom+n),Is(e,r)?s-=r.left-e.left+n:Ns(e,r)&&(s+=e.right-r.right+n),t.scrollTo(s,a)}}function Ss(t,e){const n=Os(t);let i,o;for(;t!=n.document.body;)o=e(),(i=new xs(t).excludeScrollbarsAndBorders()).contains(o)||(Es(o,i)?t.scrollTop-=i.top-o.top:Ms(o,i)&&(t.scrollTop+=o.bottom-i.bottom),Is(o,i)?t.scrollLeft-=i.left-o.left:Ns(o,i)&&(t.scrollLeft+=o.right-i.right)),t=t.parentNode}function Ms(t,e){return t.bottom>e.bottom}function Es(t,e){return t.top<e.top}function Is(t,e){return t.left<e.left}function Ns(t,e){return t.right>e.right}function Os(t){return _s(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function Rs(t){if(_s(t)){let e=t.commonAncestorContainer;return Do(e)&&(e=e.parentNode),e}return t.parentNode}function Ds(t,e){const n=Os(t),i=new xs(t);if(n===e)return i;{let t=n;for(;t!=e;){const e=t.frameElement,n=new xs(e).excludeScrollbarsAndBorders();i.moveBy(n.left,n.top),t=t.parent}}return i}Object.assign({},{scrollViewportToShowTarget:Cs,scrollAncestorsToShowTarget:function(t){Ss(Rs(t),()=>new xs(t))}});class Ls{constructor(){this.document=new ro,this.domConverter=new or,this.domRoots=new Map,this.set("isRenderingInProgress",!1),this._renderer=new Ko(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new To(this.document),this.addObserver(Kr),this.addObserver(ps),this.addObserver(bs),this.addObserver(ts),this.addObserver(ms),this.addObserver(ws),go.isAndroid&&this.addObserver(ks),function(t){t.document.on("keydown",Ho)}(this),yo(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:e,value:o}of Array.from(t.attributes))i[e]=o,"class"===e?this._writer.addClass(o.split(" "),n):this._writer.setAttribute(e,o,n);this._initialDomRootAttributes.set(t,i);const o=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};o(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(t,e)=>this._renderer.markToSync("children",e)),n.on("change:attributes",(t,e)=>this._renderer.markToSync("attributes",e)),n.on("change:text",(t,e)=>this._renderer.markToSync("text",e)),n.on("change:isReadOnly",()=>this.change(o)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const n of this._observers.values())n.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:t})=>e.removeAttribute(t));const n=this._initialDomRootAttributes.get(e);for(const t in n)e.setAttribute(t,n[t]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[t,n]of this.domRoots)e.observe(n,t);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&Cs({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new Gn.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(t){Gn.b.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_disableRendering(t){this._renderingDisabled=t,0==t&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}function js(t){return T(t)?mi(t):new Map(t)}ci(Ls,Fi);class Vs{constructor(t){this.parent=null,this._attrs=js(t)}get index(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildIndex(this)))throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get startOffset(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildStartOffset(this)))throw new Gn.b("model-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.root==this?null:this.root.document||null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=li(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((t,e)=>(t[e[0]]=e[1],t),{})),t}is(t){return"node"==t||"model:node"==t}_clone(){return new Vs(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=js(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class zs extends Vs{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return"text"==t||"model:text"==t||super.is(t)}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new zs(this.data,this.getAttributes())}static fromJSON(t){return new zs(t.data,t.attributes)}}class Bs{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new Gn.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.",this);if(n<0||e+n>t.offsetSize)throw new Gn.b("model-textproxy-wrong-length: Given length value is incorrect.",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t||"model:textProxy"==t}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Fs{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return-1==e?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return null===e?null:this._nodes.slice(0,e).reduce((t,e)=>t+e.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new Gn.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new Gn.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const t of e)if(!(t instanceof Vs))throw new Gn.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Us extends Vs{constructor(t,e,n){super(e),this.name=t,this._children=new Fs,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(t,e=null){const n=t.replace(/^model:/,"");return e?"element"==n&&e==this.name:"element"==n||n==this.name||super.is(t)}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(t=>t._clone(!0)):null;return new Us(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new zs(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new zs(t):t instanceof Bs?new zs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(Us.fromJSON(n)):e.push(zs.fromJSON(n))}return new Us(t.name,t.attributes,e)}}class Hs{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new Gn.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.",null);const e=t.direction||"forward";if("forward"!=e&&"backward"!=e)throw new Gn.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=Ys._createAt(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,i,o;do{i=this.position,o=this._visitedParent,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i,this._visitedParent=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const i=e.textNode?e.textNode:e.nodeAfter;if(i instanceof Us)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=i),this.position=e,qs("elementStart",i,t,e,1);if(i instanceof zs){let o;if(this.singleCharacters)o=1;else{let t=i.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<t&&(t=this.boundaries.end.offset),o=t-e.offset}const r=e.offset-i.startOffset,s=new Bs(i,r,o);return e.offset+=o,this.position=e,qs("text",s,t,e,o)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():qs("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&0===e.offset)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const i=e.textNode?e.textNode:e.nodeBefore;if(i instanceof Us)return e.offset--,this.shallow?(this.position=e,qs("elementStart",i,t,e,1)):(e.path.push(i.maxOffset),this.position=e,this._visitedParent=i,this.ignoreElementEnd?this._previous():qs("elementEnd",i,t,e));if(i instanceof zs){let o;if(this.singleCharacters)o=1;else{let t=i.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>t&&(t=this.boundaries.start.offset),o=e.offset-t}const r=e.offset-i.startOffset,s=new Bs(i,r-o,o);return e.offset-=o,this.position=e,qs("text",s,t,e,o)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,qs("elementStart",n,t,e,1)}}function qs(t,e,n,i,o){return{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}var Ws=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0};class Ys{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new Gn.b("model-position-root-invalid: Position root invalid.",t);if(!(e instanceof Array)||0===e.length)throw new Gn.b("model-position-path-incorrect-format: Position path must be an array with at least one item.",t,{path:e});e=t.getPath().concat(e),t=t.root,this.root=t,this.path=e,this.stickiness=n}get offset(){return Ws(this.path)}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(!(t=t.getChild(t.offsetToIndex(this.path[e]))))throw new Gn.b("model-position-path-incorrect: The position's path is incorrect.",this,{position:this});if(t.is("text"))throw new Gn.b("model-position-path-incorrect: The position's path is incorrect.",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const t=this.parent.getChild(this.index);return t instanceof zs&&t.startOffset<this.offset?t:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=li(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Hs(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(t){if(this.root!=t.root)return[];const e=li(this.path,t.path),n="string"==typeof e?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return"after"==this.compareWith(t)}isBefore(t){return"before"==this.compareWith(t)}isEqual(t){return"same"==this.compareWith(t)}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=Ys._createAt(this),n=Ys._createAt(t);break;case"after":e=Ys._createAt(t),n=Ys._createAt(this);break;default:return!1}let i=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==i.maxOffset)return!1;e.path=e.path.slice(0,-1),i=i.parent,e.offset++}else{if(0!==n.offset)return!1;n.path=n.path.slice(0,-1)}}}is(t){return"position"==t||"model:position"==t}hasSameParentAs(t){if(this.root!==t.root)return!1;return"same"==li(this.getParentPath(),t.getParentPath())}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=Ys._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?Ys._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=Ys._createAt(this);if(this.root!=t.root)return n;if("same"==li(t.getParentPath(),this.getParentPath())){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if("prefix"==li(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=Ys._createAt(this);if(this.root!=t.root)return n;if("same"==li(t.getParentPath(),this.getParentPath()))(t.offset<this.offset||t.offset==this.offset&&"toPrevious"!=this.stickiness)&&(n.offset+=e);else if("prefix"==li(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return Ys._createAt(this);const i=this._getTransformedByDeletion(t,n);return null===i||t.isEqual(this)&&"toNext"==this.stickiness||t.getShiftedBy(n).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=Ys._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=i.path.concat(this.path.slice(n+1)),i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof Ys)return new Ys(t.root,t.path,t.stickiness);{const i=t;if("end"==e)e=i.maxOffset;else{if("before"==e)return this._createBefore(i,n);if("after"==e)return this._createAfter(i,n);if(0!==e&&!e)throw new Gn.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new Gn.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.",[this,t]);const o=i.getPath();return o.push(e),new this(i.root,o,n)}}static _createAfter(t,e){if(!t.parent)throw new Gn.b("model-position-after-root: You cannot make a position after root.",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new Gn.b("model-position-before-root: You cannot make a position before root.",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if("$graveyard"===t.root){const n=new Ys(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new Gn.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",e,{rootName:t.root});return new Ys(e.getRoot(t.root),t.path,t.stickiness)}}class $s{constructor(t,e=null){this.start=Ys._createAt(t),this.end=e?Ys._createAt(e):Ys._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Hs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==li(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=Ys._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return"range"==t||"model:range"==t}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new $s(this.start,t.start)),this.containsPosition(t.end)&&e.push(new $s(t.end,this.end))):e.push(new $s(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new $s(e,n)}return null}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=Ys._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const e=i.maxOffset-n.offset;0!==e&&t.push(new $s(n,n.getShiftedBy(e))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const e=this.end.path[n.path.length-1],i=e-n.offset;0!==i&&t.push(new $s(n,n.getShiftedBy(i))),n.offset=e,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new Hs(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Hs(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Hs(t);yield e.position;for(const t of e)yield t.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new $s(this.start,this.end)]}getTransformedByOperations(t){const e=[new $s(this.start,this.end)];for(const n of t)for(let t=0;t<e.length;t++){const i=e[t].getTransformedByOperation(n);e.splice(t,1,...i),t+=i.length-1}for(let t=0;t<e.length;t++){const n=e[t];for(let i=t+1;i<e.length;i++){const t=e[i];(n.containsRange(t)||t.containsRange(n)||n.isEqual(t))&&e.splice(i,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,o=t.targetPosition;return this._getTransformedByMove(n,o,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new $s(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new $s(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=Ys._createAt(n)).offset=0:(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new $s(e,n)):new $s(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new $s(this.start,t),new $s(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const n=new $s(this.start,this.end);return n.start=n.start._getTransformedByInsertion(t,e),n.end=n.end._getTransformedByInsertion(t,e),[n]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const i=this.start._getTransformedByMove(t,e,n);return[new $s(i)]}const o=$s._createFromPositionAndShift(t,n),r=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(o.containsPosition(this.start)||o.containsPosition(this.end))){const i=this.start._getTransformedByMove(t,e,n),o=this.end._getTransformedByMove(t,e,n);return[new $s(i,o)]}let s;const a=this.getDifference(o);let c=null;const l=this.getIntersection(o);if(1==a.length?c=new $s(a[0].start._getTransformedByDeletion(t,n),a[0].end._getTransformedByDeletion(t,n)):2==a.length&&(c=new $s(this.start,this.end._getTransformedByDeletion(t,n))),s=c?c._getTransformedByInsertion(r,n,null!==l||i):[],l){const t=new $s(l.start._getCombined(o.start,r),l.end._getCombined(o.start,r));2==s.length?s.splice(1,0,t):s.push(t)}return s}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return null==n&&null==i?null:(null==n&&(n=t),null==i&&(i=t),new $s(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this(Ys._createAt(t,0),Ys._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(Ys._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(0===t.length)throw new Gn.b("range-create-from-ranges-empty-array: At least one range has to be passed.",null);if(1==t.length)return t[0].clone();const e=t[0];t.sort((t,e)=>t.start.isAfter(e.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let e=n-1;t[e].end.isEqual(i.start);e++)i.start=Ys._createAt(t[e].start);for(let e=n+1;e<t.length&&t[e].start.isEqual(i.end);e++)i.end=Ys._createAt(t[e].end);return i}static fromJSON(t,e){return new this(Ys.fromJSON(t.start,e),Ys.fromJSON(t.end,e))}}class Gs{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this._findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),o=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=Ys._createAt(i,o)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){const e=this.toModelElement(t);if(this._viewToModelMapping.delete(t),this._elementToMarkerNames.has(t))for(const e of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(e);this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),0==n.size&&this._markerNameToElements.delete(e));const i=this._elementToMarkerNames.get(t);i&&(i.delete(e),0==i.size&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new $s(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Xi(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const t of e)if(t.is("attributeElement"))for(const e of t.getElementsWithSameId())n.add(e);else n.add(t);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t){return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t)}if(t.is("text"))return e;let i=0;for(let n=0;n<e;n++)i+=this.getModelLength(t.getChild(n));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name)){return this._viewToModelLengthCallbacks.get(t.name)(t)}if(this._viewToModelMapping.has(t))return 1;if(t.is("text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}_findPositionIn(t,e){let n,i=0,o=0,r=0;if(t.is("text"))return new Zi(t,e);for(;o<e;)n=t.getChild(r),o+=i=this.getModelLength(n),r++;return o==e?this._moveViewPositionToTextNode(new Zi(t,r)):this._findPositionIn(n,e-(o-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof fi?new Zi(e,e.data.length):n instanceof fi?new Zi(n,0):t}}ci(Gs,ei);class Qs{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Js(e),t instanceof Bs&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Js(e),t instanceof Bs&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Js(e),t instanceof Bs&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(void 0===n)return null;const i=n.get(e);return void 0===i?null:i}revert(t,e){e=Js(e),t instanceof Bs&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return!1===n?(this._consumable.get(t).set(e,!0),!0):!0!==n&&null}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){const i=Symbol("textProxySymbol");let o,r;return(o=this._textProxyRegistry.get(t))||(o=new Map,this._textProxyRegistry.set(t,o)),(r=o.get(e))||(r=new Map,o.set(e,r)),r.set(n,i),i}}function Js(t){const e=t.split(":");return e.length>1?e[0]+":"+e[1]:e[0]}class Ks{constructor(t){this.conversionApi=Li({dispatcher:this},t)}convertChanges(t,e,n){for(const e of t.getMarkersToRemove())this.convertMarkerRemove(e.name,e.range,n);for(const e of t.getChanges())"insert"==e.type?this.convertInsert($s._createFromPositionAndShift(e.position,e.length),n):"remove"==e.type?this.convertRemove(e.position,e.length,e.name,n):this.convertAttribute(e.range,e.attributeKey,e.attributeOldValue,e.attributeNewValue,n);for(const t of this.conversionApi.mapper.flushUnboundMarkerNames()){const i=e.get(t).getRange();this.convertMarkerRemove(t,i,n),this.convertMarkerAdd(t,i,n)}for(const e of t.getMarkersToAdd())this.convertMarkerAdd(e.name,e.range,n)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(const e of t){const t=e.item,n={item:t,range:$s._createFromPositionAndShift(e.previousPosition,e.length)};this._testAndFire("insert",n);for(const e of t.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=t.getAttribute(e),this._testAndFire(`attribute:${e}`,n)}this._clearConversionApi()}convertRemove(t,e,n,i){this.conversionApi.writer=i,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,i,o){this.conversionApi.writer=o,this.conversionApi.consumable=this._createConsumableForRange(t,`attribute:${e}`);for(const o of t){const t={item:o.item,range:$s._createFromPositionAndShift(o.previousPosition,o.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,t)}this._clearConversionApi()}convertSelection(t,e,n){const i=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,i),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(const e of i){const n=e.getRange();if(!Zs(t.getFirstPosition(),e,this.conversionApi.mapper))continue;const i={item:t,markerName:e.name,markerRange:n};this.conversionApi.consumable.test(t,"addMarker:"+e.name)&&this.fire("addMarker:"+e.name,i,this.conversionApi)}for(const e of t.getAttributeKeys()){const n={item:t,range:t.getFirstRange(),attributeKey:e,attributeOldValue:null,attributeNewValue:t.getAttribute(e)};this.conversionApi.consumable.test(t,"attribute:"+n.attributeKey)&&this.fire("attribute:"+n.attributeKey+":$text",n,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(!e.root.document||"$graveyard"==e.root.rootName)return;this.conversionApi.writer=n;const i="addMarker:"+t,o=new Qs;if(o.add(e,i),this.conversionApi.consumable=o,this.fire(i,{markerName:t,markerRange:e},this.conversionApi),o.test(e,i)){this.conversionApi.consumable=this._createConsumableForRange(e,i);for(const n of e.getItems()){if(!this.conversionApi.consumable.test(n,i))continue;const o={item:n,range:$s._createOn(n),markerName:t,markerRange:e};this.fire(i,o,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(t,e,n){e.root.document&&"$graveyard"!=e.root.rootName&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(t){const e=new Qs;for(const n of t){const t=n.item;e.add(t,"insert");for(const n of t.getAttributeKeys())e.add(t,"attribute:"+n)}return e}_createConsumableForRange(t,e){const n=new Qs;for(const i of t.getItems())n.add(i,e);return n}_createSelectionConsumable(t,e){const n=new Qs;n.add(t,"selection");for(const i of e)n.add(t,"addMarker:"+i.name);for(const e of t.getAttributeKeys())n.add(t,"attribute:"+e);return n}_testAndFire(t,e){if(!this.conversionApi.consumable.test(e.item,t))return;const n=e.item.name||"$text";this.fire(t+":"+n,e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}function Zs(t,e,n){const i=e.getRange(),o=Array.from(t.getAncestors());return o.shift(),o.reverse(),!o.some(t=>{if(i.containsItem(t)){return!!n.toViewElement(t).getCustomProperty("addHighlight")}})}ci(Ks,ei);class Xs{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new $s(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new $s(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new $s(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(null===t)this._setRanges([]);else if(t instanceof Xs)this._setRanges(t.getRanges(),t.isBackward);else if(t&&"function"==typeof t.getRanges)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof $s)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof Ys)this._setRanges([new $s(t)]);else if(t instanceof Vs){const i=!!n&&!!n.backward;let o;if("in"==e)o=$s._createIn(t);else if("on"==e)o=$s._createOn(t);else{if(void 0===e)throw new Gn.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",[this,t]);o=new $s(Ys._createAt(t,e))}this._setRanges([o],i)}else{if(!pi(t))throw new Gn.b("model-selection-setTo-not-selectable: Cannot set the selection to the given place.",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(e=>{if(!(e instanceof $s))throw new Gn.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.",[this,t]);return this._ranges.every(t=>!t.isEqual(e))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const e of t)this._pushRange(e);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(null===this.anchor)throw new Gn.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.",[this,t]);const n=Ys._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.length&&this._popRange(),"before"==n.compareWith(i)?(this._pushRange(new $s(n,i)),this._lastRangeBackward=!0):(this._pushRange(new $s(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof Us&&e==n?e:null}is(t){return"selection"==t||"model:selection"==t}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=na(e.start,t);n&&ia(n,e)&&(yield n);for(const n of e.getWalker()){const i=n.item;"elementEnd"==n.type&&ea(i,t,e)&&(yield i)}const i=na(e.end,t);i&&!e.end.isTouching(Ys._createAt(i,0))&&ia(i,e)&&(yield i)}}containsEntireContent(t=this.anchor.root){const e=Ys._createAt(t,0),n=Ys._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new $s(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new Gn.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ta(t,e){return!e.has(t)&&(e.add(t),t.document.model.schema.isBlock(t)&&t.parent)}function ea(t,e,n){return ta(t,e)&&ia(t,n)}function na(t,e){const n=t.parent.document.model.schema,i=t.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=i.find(t=>!o&&(!(o=n.isLimit(t))&&ta(t,e)));return i.forEach(t=>e.add(t)),r}function ia(t,e){const n=function(t){const e=t.document.model.schema;let n=t.parent;for(;n;){if(e.isBlock(n))return n;n=n.parent}}(t);return!n||!e.containsRange($s._createOn(n),!0)}ci(Xs,ei);class oa extends $s{constructor(t,e){super(t,e),function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t),n=$s._createFromRanges(e),i=!n.isEqual(this),o=function(t,e){switch(e.type){case"insert":return t.containsPosition(e.position);case"move":case"remove":case"reinsert":case"merge":return t.containsPosition(e.sourcePosition)||t.start.isEqual(e.sourcePosition)||t.containsPosition(e.targetPosition);case"split":return t.containsPosition(e.splitPosition)||t.containsPosition(e.insertionPosition)}return!1}(this,t);let r=null;if(i){"$graveyard"==n.root.rootName&&(r="remove"==t.type?t.sourcePosition:t.deletionPosition);const e=this.toRange();this.start=n.start,this.end=n.end,this.fire("change:range",e,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}.call(this,n)},{priority:"low"})}.call(this)}detach(){this.stopListening()}is(t){return"liveRange"==t||"model:liveRange"==t||super.is(t)}toRange(){return new $s(this.start,this.end)}static fromRange(t){return new oa(t.start,t.end)}}ci(oa,ei);const ra="selection:";class sa{constructor(t){this._selection=new aa(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}is(t){return"selection"==t||"model:selection"==t||"documentSelection"==t||"model:documentSelection"==t}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return ra+t}static _isStoreAttributeKey(t){return t.startsWith(ra)}}ci(sa,ei);class aa extends Xs{constructor(t){super(),this.markers=new oo({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.listenTo(this._model,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&"marker"!=n.type&&"rename"!=n.type&&"noop"!=n.type){for(;this._fixGraveyardRangesData.length;){const{liveRange:t,sourcePosition:e}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(t,e)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1}))}},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new Gn.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",this,{range:t})}),this.listenTo(this._model.markers,"update",()=>this._updateMarkers()),this.listenTo(this._document,"change",(t,e)=>{!function(t,e){const n=t.document.differ;for(const i of n.getChanges()){if("insert"!=i.type)continue;const n=i.position.parent,o=i.length===n.maxOffset;o&&t.enqueueChange(e,t=>{const e=Array.from(n.getAttributeKeys()).filter(t=>t.startsWith(ra));for(const i of e)t.removeAttribute(i,n)})}}(this._model,e)})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0)}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0)}setAttribute(t,e){if(this._setAttribute(t,e)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=Kn();return this._overriddenGravityRegister.add(t),1===this._overriddenGravityRegister.size&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new Gn.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=oa.fromRange(t);return e.on("change:range",(t,n,i)=>{this._hasChangedRange=!0,e.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:e,sourcePosition:i.deletionPosition})}),e}_updateMarkers(){const t=[];for(const e of this._model.markers){const n=e.getRange();for(const i of this.getRanges())n.containsRange(i,!i.isCollapsed)&&t.push(e)}for(const e of t)this.markers.has(e)||this.markers.add(e);for(const e of Array.from(this.markers))t.includes(e)||this.markers.remove(e)}_updateAttributes(t){const e=js(this._getSurroundingAttributes()),n=js(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[t,e]of this._attributePriority)"low"==e&&(this._attrs.delete(t),this._attributePriority.delete(t));this._setAttributesTo(e);const i=[];for(const[t,e]of this.getAttributes())n.has(t)&&n.get(t)===e||i.push(t);for(const[t]of n)this.hasAttribute(t)||i.push(t);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";return("low"!=i||"normal"!=this._attributePriority.get(t))&&(super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0))}_removeAttribute(t,e=!0){const n=e?"normal":"low";return("low"!=n||"normal"!=this._attributePriority.get(t))&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[e,n]of this.getAttributes())t.get(e)!==n&&this._removeAttribute(e,!1);for(const[n,i]of t){this._setAttribute(n,i,!1)&&e.add(n)}return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())if(e.startsWith(ra)){yield[e.substr(ra.length),t.getAttribute(e)]}}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const e=t.textNode?t.textNode:t.nodeBefore,i=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=ca(e)),n||(n=ca(i)),!this.isGravityOverridden&&!n){let t=e;for(;t&&!n;)n=ca(t=t.previousSibling)}if(!n){let t=i;for(;t&&!n;)n=ca(t=t.nextSibling)}n||(n=this._getStoredAttributes())}else{const t=this.getFirstRange();for(const i of t){if(i.item.is("element")&&e.isObject(i.item))break;if("text"==i.type){n=i.item.getAttributes();break}}}return n}_fixGraveyardSelection(t,e){const n=e.clone(),i=this._model.schema.getNearestSelectionRange(n),o=this._ranges.indexOf(t);if(this._ranges.splice(o,1),t.detach(),i){const t=this._prepareRange(i);this._ranges.splice(o,0,t)}}}function ca(t){return t instanceof Bs||t instanceof zs?t.getAttributes():null}class la{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}var da=1,ha=4;var ua=function(t){return Fn(t,da|ha)};class fa extends la{elementToElement(t){return this.add(function(t){return(t=ua(t)).view=ma(t.view,"container"),e=>{e.on("insert:"+t.model,function(t){return(e,n,i)=>{const o=t(n.item,i.writer);if(!o)return;if(!i.consumable.consume(n.item,"insert"))return;const r=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(n.item,o),i.writer.insert(r,o)}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}attributeToElement(t){return this.add(function(t){let e="attribute:"+((t=ua(t)).model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=ma(t.view[e],"attribute");else t.view=ma(t.view,"attribute");const n=pa(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,i.writer),r=t(n.attributeNewValue,i.writer);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.writer,a=s.document.selection;if(n.item instanceof Xs||n.item instanceof sa)s.wrap(a.getFirstRange(),r);else{let t=i.mapper.toViewRange(n.range);null!==n.attributeOldValue&&o&&(t=s.unwrap(t,o)),null!==n.attributeNewValue&&r&&s.wrap(t,r)}}}(n),{priority:t.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(t){let e="attribute:"+((t=ua(t)).model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=ba(t.view[e]);else t.view=ba(t.view);const n=pa(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,n),r=t(n.attributeNewValue,n);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.mapper.toViewElement(n.item),a=i.writer;if(!s)throw new Gn.b("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.",[n,i]);if(null!==n.attributeOldValue&&o)if("class"==o.key){const t=Array.isArray(o.value)?o.value:[o.value];for(const e of t)a.removeClass(e,s)}else if("style"==o.key){const t=Object.keys(o.value);for(const e of t)a.removeStyle(e,s)}else a.removeAttribute(o.key,s);if(null!==n.attributeNewValue&&r)if("class"==r.key){const t=Array.isArray(r.value)?r.value:[r.value];for(const e of t)a.addClass(e,s)}else if("style"==r.key){const t=Object.keys(r.value);for(const e of t)a.setStyle(e,r.value[e],s)}else a.setAttribute(r.key,r.value,s)}}(n),{priority:t.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(t){return(t=ua(t)).view=ma(t.view,"ui"),e=>{e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{n.isOpening=!0;const o=t(n,i.writer);n.isOpening=!1;const r=t(n,i.writer);if(!o||!r)return;const s=n.markerRange;if(s.isCollapsed&&!i.consumable.consume(s,e.name))return;for(const t of s)if(!i.consumable.consume(t.item,e.name))return;const a=i.mapper,c=i.writer;c.insert(a.toViewPosition(s.start),o),i.mapper.bindElementToMarker(o,n.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),i.mapper.bindElementToMarker(r,n.markerName)),e.stop()}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,(t.view,(t,e,n)=>{const i=n.mapper.markerNameToElements(e.markerName);if(i){for(const t of i)n.mapper.unbindElementFromMarkerName(t,e.markerName),n.writer.clear(n.writer.createRangeOn(t),t);n.writer.clearClonedElementsGroup(e.markerName),t.stop()}}),{priority:t.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(t){return e=>{e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof Xs||n.item instanceof sa||n.item.is("textProxy")))return;const o=wa(t,n,i);if(!o)return;if(!i.consumable.consume(n.item,e.name))return;const r=ga(o),s=i.writer,a=s.document.selection;if(n.item instanceof Xs||n.item instanceof sa)s.wrap(a.getFirstRange(),r,a);else{const t=i.mapper.toViewRange(n.range),e=s.wrap(t,r);for(const t of e.getItems())if(t.is("attributeElement")&&t.isSimilar(r)){i.mapper.bindElementToMarker(t,n.markerName);break}}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof Us))return;const o=wa(t,n,i);if(!o)return;if(!i.consumable.test(n.item,e.name))return;const r=i.mapper.toViewElement(n.item);if(r&&r.getCustomProperty("addHighlight")){i.consumable.consume(n.item,e.name);for(const t of $s._createIn(n.item))i.consumable.consume(t.item,e.name);r.getCustomProperty("addHighlight")(r,o,i.writer),i.mapper.bindElementToMarker(r,n.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,function(t){return(e,n,i)=>{if(n.markerRange.isCollapsed)return;const o=wa(t,n,i);if(!o)return;const r=ga(o),s=i.mapper.markerNameToElements(n.markerName);if(s){for(const t of s)i.mapper.unbindElementFromMarkerName(t,n.markerName),t.is("attributeElement")?i.writer.unwrap(i.writer.createRangeOn(t),r):t.getCustomProperty("removeHighlight")(t,o.id,i.writer);i.writer.clearClonedElementsGroup(n.markerName),e.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}}function ga(t){const e=new ao("span",t.attributes);return t.classes&&e._addClass(t.classes),t.priority&&(e._priority=t.priority),e._id=t.id,e}function ma(t,e){return"function"==typeof t?t:(n,i)=>(function(t,e,n){"string"==typeof t&&(t={name:t});let i;const o=Object.assign({},t.attributes);if("container"==n)i=e.createContainerElement(t.name,o);else if("attribute"==n){const n={priority:t.priority||ao.DEFAULT_PRIORITY};i=e.createAttributeElement(t.name,o,n)}else i=e.createUIElement(t.name,o);if(t.styles){const n=Object.keys(t.styles);for(const o of n)e.setStyle(o,t.styles[o],i)}if(t.classes){const n=t.classes;if("string"==typeof n)e.addClass(n,i);else for(const t of n)e.addClass(t,i)}return i})(t,i,e)}function pa(t){return t.model.values?(e,n)=>{const i=t.view[e];return i?i(e,n):null}:t.view}function ba(t){return"string"==typeof t?e=>({key:t,value:e}):"object"==typeof t?t.value?()=>t:e=>({key:t.key,value:e}):t}function wa(t,e,n){const i="function"==typeof t?t(e,n):t;return i?(i.priority||(i.priority=10),i.id||(i.id=e.markerName),i):null}class ka extends la{elementToElement(t){return this.add(_a(t))}elementToAttribute(t){return this.add(function(t){ya(t=ua(t));const e=xa(t,!1),n=va(t.view),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(t){let e=null;("string"==typeof(t=ua(t)).view||t.view.key)&&(e=function(t){"string"==typeof t.view&&(t.view={key:t.view});const e=t.view.key;let n;if("class"==e||"style"==e){const i="class"==e?"classes":"styles";n={[i]:t.view.value}}else{const i=void 0===t.view.value?/[\s\S]*/:t.view.value;n={attributes:{[e]:i}}}t.view.name&&(n.name=t.view.name);return t.view=n,e}(t));ya(t,e);const n=xa(t,!0);return e=>{e.on("element",n,{priority:t.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(t){return function(t){const e=t.model;t.model=((t,n)=>{const i="string"==typeof e?e:e(t);return n.createElement("$marker",{"data-name":i})})}(t=ua(t)),_a(t)}(t))}}function _a(t){const e=function(t){const e=t.view?new bi(t.view):null;return(n,i,o)=>{let r={};if(e){const t=e.match(i.viewItem);if(!t)return;r=t.match}r.name=!0;const s=function(t,e,n){return t instanceof Function?t(e,n):n.createElement(t)}(t.model,i.viewItem,o.writer);if(!s)return;if(!o.consumable.test(i.viewItem,r))return;const a=o.splitToAllowedParent(s,i.modelCursor);if(!a)return;o.writer.insert(s,a.position),o.convertChildren(i.viewItem,o.writer.createPositionAt(s,0)),o.consumable.consume(i.viewItem,r);const c=o.getSplitParts(s);i.modelRange=new $s(o.writer.createPositionBefore(s),o.writer.createPositionAfter(c[c.length-1])),a.cursorParent?i.modelCursor=o.writer.createPositionAt(a.cursorParent,0):i.modelCursor=i.modelRange.end}}(t=ua(t)),n=va(t.view),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"normal"})}}function va(t){return"string"==typeof t?t:"object"==typeof t&&"string"==typeof t.name?t.name:null}function ya(t,e=null){const n=null===e||(t=>t.getAttribute(e)),i="object"!=typeof t.model?t.model:t.model.key,o="object"!=typeof t.model||void 0===t.model.value?n:t.model.value;t.model={key:i,value:o}}function xa(t,e){const n=new bi(t.view);return(i,o,r)=>{const s=n.match(o.viewItem);if(!s)return;const a=t.model.key,c="function"==typeof t.model.value?t.model.value(o.viewItem):t.model.value;null!==c&&(!function(t,e){const n="function"==typeof t?t(e):t;if("object"==typeof n&&!va(n))return!1;return!n.classes&&!n.attributes&&!n.styles}(t.view,o.viewItem)?delete s.match.name:s.match.name=!0,r.consumable.test(o.viewItem,s.match)&&(o.modelRange||(o=Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor))),function(t,e,n,i){let o=!1;for(const r of Array.from(t.getItems({shallow:n})))i.schema.checkAttribute(r,e.key)&&(i.writer.setAttribute(e.key,e.value,r),o=!0);return o}(o.modelRange,{key:a,value:c},e,r)&&r.consumable.consume(o.viewItem,s.match)))}}class Aa{constructor(t){this.model=t,this.view=new Ls,this.mapper=new Gs,this.downcastDispatcher=new Ks({mapper:this.mapper});const e=this.model.document,n=e.selection,i=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(e,"change",()=>{this.view.change(t=>{this.downcastDispatcher.convertChanges(e.differ,i,t),this.downcastDispatcher.convertSelection(n,i,t)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(t,e){return(n,i)=>{const o=i.newSelection,r=new Xs,s=[];for(const t of o.getRanges())s.push(e.toModelRange(t));r.setTo(s,{backward:o.isBackward}),r.isEqual(t.document.selection)||t.change(t=>{t.setSelection(r)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(t,e,n)=>{const i=n.mapper.toViewPosition(e.position),o=e.position.getShiftedBy(e.length),r=n.mapper.toViewPosition(o,{isPhantom:!0}),s=n.writer.createRange(i,r),a=n.writer.remove(s.getTrimmed());for(const t of n.writer.createRangeIn(a).getItems())n.mapper.unbindViewElement(t)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=n.writer,o=i.document.selection;for(const t of o.getRanges())t.isCollapsed&&t.end.parent.document&&n.writer.mergeAttributes(t.start);i.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=[];for(const t of i.getRanges()){const e=n.mapper.toViewRange(t);o.push(e)}n.writer.setSelection(o,{backward:i.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(!i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=n.writer,r=i.getFirstPosition(),s=n.mapper.toViewPosition(r),a=o.breakAttributes(s);o.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(t=>{if("$graveyard"==t.rootName)return null;const e=new Ji(t.name);return e.rootName=t.rootName,e._document=this.view.document,this.mapper.bindElements(t,e),e})}destroy(){this.view.destroy(),this.stopListening()}}ci(Aa,Fi);class Ta{constructor(t,e=[]){this._editor=t,this._availablePlugins=new Map,this._plugins=new Map;for(const t of e)this._availablePlugins.set(t,t),t.pluginName&&this._availablePlugins.set(t.pluginName,t)}*[Symbol.iterator](){for(const t of this._plugins)"function"==typeof t[0]&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){const e="plugincollection-plugin-not-loaded: The requested plugin is not loaded.";let n=t;throw"function"==typeof t&&(n=t.pluginName||t.name),new Gn.b(e,this._editor,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[]){const n=this,i=this._editor,o=new Set,r=[],s=u(t),a=u(e),c=function(t){const e=[];for(const n of t)h(n)||e.push(n);return e.length?e:null}(t);if(c){const t="plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";return console.error(Object(Gn.a)(t),{plugins:c}),Promise.reject(new Gn.b(t,this._editor,{plugins:c}))}return Promise.all(s.map(l)).then(()=>d(r,"init")).then(()=>d(r,"afterInit")).then(()=>r);function l(t){if(!a.includes(t)&&!n._plugins.has(t)&&!o.has(t))return function(t){return new Promise(s=>{o.add(t),t.requires&&t.requires.forEach(n=>{const o=h(n);if(e.includes(o))throw new Gn.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",i,{plugin:o,requiredBy:t});l(o)});const a=new t(i);n._add(t,a),r.push(a),s()})}(t).catch(e=>{throw console.error(Object(Gn.a)("plugincollection-load: It was not possible to load the plugin."),{plugin:t}),e})}function d(t,e){return t.reduce((t,n)=>n[e]?t.then(n[e].bind(n)):t,Promise.resolve())}function h(t){return"function"==typeof t?t:n._availablePlugins.get(t)}function u(t){return t.map(t=>h(t)).filter(t=>!!t)}}destroy(){const t=Array.from(this).map(([,t])=>t).filter(t=>"function"==typeof t.destroy).map(t=>t.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new Gn.b("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}ci(Ta,ei);class Ca{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new Gn.b("commandcollection-command-not-found: Command does not exist.",this,{commandName:t});n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}function Pa(t,e){const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;return 1===n&&(t=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0!==n&&function(t,e){return t in window.CKEDITOR_TRANSLATIONS&&e in window.CKEDITOR_TRANSLATIONS[t]}(t,e)?window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/,""):e.replace(/ \[context: [^\]]+\]$/,"")}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Sa=["ar","fa","he","ku","ug"];class Ma{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Ea(this.uiLanguage),this.contentLanguageDirection=Ea(this.contentLanguage),this.t=((...t)=>this._t(...t))}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e){let n=Pa(this.uiLanguage,t);return e&&(n=n.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)),n}}function Ea(t){return Sa.includes(t)?"rtl":"ltr"}class Ia{constructor(){this._consumables=new Map}add(t,e){let n;t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Na,this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return void 0===n?null:t.is("text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);void 0!==n&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const t of n)"style"!=t&&"class"!=t&&e.attributes.push(t);const i=t.getClassNames();for(const t of i)e.classes.push(t);const o=t.getStyleNames();for(const t of o)e.styles.push(t);return e}static createFrom(t,e){if(e||(e=new Ia),t.is("text"))return e.add(t),e;t.is("element")&&e.add(t,Ia.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=Ia.createFrom(n,e);return e}}class Na{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(!0!==n)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n){if("attributes"===t&&("class"===e||"style"===e))throw new Gn.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.",this);i.set(e,!0)}}_test(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){const t=i.get(e);if(void 0===t)return null;if(!t)return!1}else{const t="class"==e?"classes":"styles",n=this._test(t,[...this._consumables[t].keys()]);if(!0!==n)return n}return!0}_consume(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e)i.set(e,!1);else{const t="class"==e?"classes":"styles";this._consume(t,[...this._consumables[t].keys()])}}_revert(t,e){const n=Wt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){!1===i.get(e)&&i.set(e,!0)}else{const t="class"==e?"classes":"styles";this._revert(t,[...this._consumables[t].keys()])}}}class Oa{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new Ra(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new Ra(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new Gn.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new Gn.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e="string"==typeof t?t:t.is&&(t.is("text")||t.is("textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!(!e||!e.isObject)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof Ys){const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof Us))throw new Gn.b("schema-check-merge-no-element-before: The node before the merge position must be an element.",this);if(!(n instanceof Us))throw new Gn.b("schema-check-merge-no-element-after: The node after the merge position must be an element.",this);return this.checkMerge(e,n)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;if(t instanceof Ys)e=t.parent;else{e=(t instanceof $s?[t]:Array.from(t.getRanges())).reduce((t,e)=>{const n=e.getCommonAncestor();return t?t.getCommonAncestor(n,{includeSelf:!0}):n},null)}for(;!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new zs("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const t of n)for(const n of t)if(this.checkAttribute(n.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(t){for(const e of t)yield*e.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new $s(t);let n,i;"both"!=e&&"backward"!=e||(n=new Hs({startPosition:t,direction:"backward"})),"both"!=e&&"forward"!=e||(i=new Hs({startPosition:t}));for(const t of function*(t,e){let n=!1;for(;!n;){if(n=!0,t){const e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}if(e){const t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}}}(n,i)){const e=t.walker==n?"elementEnd":"elementStart",i=t.value;if(i.type==e&&this.isObject(i.item))return $s._createOn(i.item);if(this.checkChild(i.nextPosition,"$text"))return new $s(i.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("text"))Wa(this,n,e);else{const t=$s._createIn(n).getPositions();for(const n of t){Wa(this,n.nodeBefore||n.parent,e)}}}createContext(t){return new Ra(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=Da(e[i],i);for(const e of n)La(t,e);for(const e of n)ja(t,e);for(const e of n)Va(t,e),za(t,e);for(const e of n)Ba(t,e),Fa(t,e);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(0==n)return!0;{const t=this.getDefinition(i);return this._checkContextMatch(t,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const o of t.getItems({shallow:!0}))o.is("element")&&(yield*this._getValidRangesForRange($s._createIn(o),e)),this.checkAttribute(o,e)||(n.isEqual(i)||(yield new $s(n,i)),n=Ys._createAfter(o)),i=Ys._createAfter(o);n.isEqual(i)||(yield new $s(n,i))}}ci(Oa,Fi);class Ra{constructor(t){if(t instanceof Ra)return t;"string"==typeof t?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),t[0]&&"string"!=typeof t[0]&&t[0].is("documentFragment")&&t.shift(),this._items=t.map(qa)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new Ra([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}}function Da(t,e){const n={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(t,e){for(const n of t){const t=Object.keys(n).filter(t=>t.startsWith("is"));for(const i of t)e[i]=n[i]}}(t,n),Ua(t,n,"allowIn"),Ua(t,n,"allowContentOf"),Ua(t,n,"allowWhere"),Ua(t,n,"allowAttributes"),Ua(t,n,"allowAttributesOf"),Ua(t,n,"inheritTypesFrom"),function(t,e){for(const n of t){const t=n.inheritAllFrom;t&&(e.allowContentOf.push(t),e.allowWhere.push(t),e.allowAttributesOf.push(t),e.inheritTypesFrom.push(t))}}(t,n),n}function La(t,e){for(const n of t[e].allowContentOf)if(t[n]){Ha(t,n).forEach(t=>{t.allowIn.push(e)})}delete t[e].allowContentOf}function ja(t,e){for(const n of t[e].allowWhere){const i=t[n];if(i){const n=i.allowIn;t[e].allowIn.push(...n)}}delete t[e].allowWhere}function Va(t,e){for(const n of t[e].allowAttributesOf){const i=t[n];if(i){const n=i.allowAttributes;t[e].allowAttributes.push(...n)}}delete t[e].allowAttributesOf}function za(t,e){const n=t[e];for(const e of n.inheritTypesFrom){const i=t[e];if(i){const t=Object.keys(i).filter(t=>t.startsWith("is"));for(const e of t)e in n||(n[e]=i[e])}}delete n.inheritTypesFrom}function Ba(t,e){const n=t[e],i=n.allowIn.filter(e=>t[e]);n.allowIn=Array.from(new Set(i))}function Fa(t,e){const n=t[e];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function Ua(t,e,n){for(const i of t)"string"==typeof i[n]?e[n].push(i[n]):Array.isArray(i[n])&&e[n].push(...i[n])}function Ha(t,e){const n=t[e];return function(t){return Object.keys(t).map(e=>t[e])}(t).filter(t=>t.allowIn.includes(n.name))}function qa(t){return"string"==typeof t?{name:t,*getAttributeKeys(){},getAttribute(){}}:{name:t.is("element")?t.name:"$text",*getAttributeKeys(){yield*t.getAttributeKeys()},getAttribute:e=>t.getAttribute(e)}}function Wa(t,e,n){for(const i of e.getAttributeKeys())t.checkAttribute(e,i)||n.removeAttribute(i,e)}class Ya{constructor(t={}){this._splitParts=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(t,e){let n;for(const i of new Ra(t)){const t={};for(const e of i.getAttributeKeys())t[e]=i.getAttribute(e);const o=e.createElement(i.name,t);n&&e.append(o,n),n=Ys._createAt(o,0)}return n}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=Ia.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),o=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const t of Array.from(this._modelCursor.parent.getChildren()))e.append(t,o);o.markers=function(t,e){const n=new Set,i=new Map,o=$s._createIn(t).getItems();for(const t of o)"$marker"==t.name&&n.add(t);for(const t of n){const n=t.getAttribute("data-name"),o=e.createPositionBefore(t);i.has(n)?i.get(n).end=o.clone():i.set(n,new $s(o.clone())),e.remove(t)}return i}(o,e)}return this._modelCursor=null,this._splitParts.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,o}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof $s))throw new Gn.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){const n=new $s(e);let i=e;for(const e of Array.from(t.getChildren())){const t=this._convertItem(e,i);t.modelRange instanceof $s&&(n.end=t.modelRange.end,i=t.modelCursor)}return{modelRange:n,modelCursor:i}}_splitToAllowedParent(t,e){const n=this.conversionApi.schema.findAllowedParent(e,t);if(!n)return null;if(n===e.parent)return{position:e};if(this._modelCursor.parent.getAncestors().includes(n))return null;const i=this.conversionApi.writer.split(e,n),o=[];for(const t of i.range.getWalker())if("elementEnd"==t.type)o.push(t.item);else{const e=o.pop(),n=t.item;this._registerSplitPair(e,n)}return{position:i.position,cursorParent:i.range.end.parent}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t]}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}ci(Ya,ei);class $a{constructor(t,e){this.model=t,this.processor=e,this.mapper=new Gs,this.downcastDispatcher=new Ks({mapper:this.mapper}),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.upcastDispatcher=new Ya({schema:t.schema}),this.upcastDispatcher.on("text",(t,e,n)=>{if(n.schema.checkChild(e.modelCursor,"$text")&&n.consumable.consume(e.viewItem)){const t=n.writer.createText(e.viewItem.data);n.writer.insert(t,e.modelCursor),e.modelRange=$s._createFromPositionAndShift(e.modelCursor,t.offsetSize),e.modelCursor=e.modelRange.end}},{priority:"lowest"}),this.upcastDispatcher.on("element",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.decorate("init"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"})}get(t){const{rootName:e="main",trim:n="empty"}=t||{};if(!this._checkIfRootsExists([e]))throw new Gn.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.",this);const i=this.model.document.getRoot(e);return"empty"!==n||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i):""}stringify(t){const e=this.toView(t);return this.processor.toData(e)}toView(t){this.mapper.clearBindings();const e=$s._createIn(t),n=new Ao,i=new To(new ro);if(this.mapper.bindElements(t,n),this.downcastDispatcher.convertInsert(e,i),!t.is("documentFragment")){const e=function(t){const e=[],n=t.root.document;if(!n)return[];const i=$s._createIn(t);for(const t of n.model.markers){const n=i.getIntersection(t.getRange());n&&e.push([t.name,n])}return e}(t);for(const[t,n]of e)this.downcastDispatcher.convertMarkerAdd(t,n,i)}return n}init(t){if(this.model.document.version)throw new Gn.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.",this);let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new Gn.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.",this);return this.model.enqueueChange("transparent",t=>{for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.insert(this.parse(e[n],i),i,0)}}),Promise.resolve()}set(t){let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new Gn.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.",this);this.model.enqueueChange("transparent",t=>{t.setSelection(null),t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.remove(t.createRangeIn(i)),t.insert(this.parse(e[n],i),i,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}ci($a,Fi);class Ga{constructor(t,e){this._helpers=new Map,this._downcast=Array.isArray(t)?t:[t],this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Array.isArray(e)?e:[e],this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new Gn.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new Gn.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Qa(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Qa(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Qa(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new Gn.b("conversion-group-exists: Trying to register a group name that has already been registered.",this);const i=n?new fa(e):new ka(e);this._helpers.set(t,i)}}function*Qa(t){if(t.model.values)for(const e of t.model.values){yield*Ja({key:t.model.key,value:e},t.view[e],t.upcastAlso?t.upcastAlso[e]:void 0)}else yield*Ja(t.model,t.view,t.upcastAlso)}function*Ja(t,e,n){if(yield{model:t,view:e},n){n=Array.isArray(n)?n:[n];for(const e of n)yield{model:t,view:e}}}class Ka{constructor(t="default"){this.operations=[],this.type=t}get baseVersion(){for(const t of this.operations)if(null!==t.baseVersion)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Za{constructor(t){this.baseVersion=t,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Xa{constructor(t){this.markers=new Map,this._children=new Fs,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t||"model:documentFragment"==t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(Us.fromJSON(n)):e.push(zs.fromJSON(n));return new Xa(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new zs(t)];pi(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new zs(t):t instanceof Bs?new zs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}}function tc(t,e){const n=(e=ic(e)).reduce((t,e)=>t+e.offsetSize,0),i=t.parent;rc(t);const o=t.index;return i._insertChild(o,e),oc(i,o+e.length),oc(i,o),new $s(t,t.getShiftedBy(n))}function ec(t){if(!t.isFlat)throw new Gn.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.",this);const e=t.start.parent;rc(t.start),rc(t.end);const n=e._removeChildren(t.start.index,t.end.index-t.start.index);return oc(e,t.start.index),n}function nc(t,e){if(!t.isFlat)throw new Gn.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.",this);const n=ec(t);return tc(e=e._getTransformedByDeletion(t.start,t.end.offset-t.start.offset),n)}function ic(t){const e=[];t instanceof Array||(t=[t]);for(let n=0;n<t.length;n++)if("string"==typeof t[n])e.push(new zs(t[n]));else if(t[n]instanceof Bs)e.push(new zs(t[n].data,t[n].getAttributes()));else if(t[n]instanceof Xa||t[n]instanceof Fs)for(const i of t[n])e.push(i);else t[n]instanceof Vs&&e.push(t[n]);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof zs&&i instanceof zs&&sc(n,i)&&(e.splice(t-1,2,new zs(i.data+n.data,i.getAttributes())),t--)}return e}function oc(t,e){const n=t.getChild(e-1),i=t.getChild(e);if(n&&i&&n.is("text")&&i.is("text")&&sc(n,i)){const o=new zs(n.data+i.data,n.getAttributes());t._removeChildren(e-1,2),t._insertChild(e-1,o)}}function rc(t){const e=t.textNode,n=t.parent;if(e){const i=t.offset-e.startOffset,o=e.index;n._removeChildren(o,1);const r=new zs(e.data.substr(0,i),e.getAttributes()),s=new zs(e.data.substr(i),e.getAttributes());n._insertChild(o,[r,s])}}function sc(t,e){const n=t.getAttributes(),i=e.getAttributes();for(const t of n){if(t[1]!==e.getAttribute(t[0]))return!1;i.next()}return i.next().done}var ac=function(t,e){return Qr(t,e)};class cc extends Za{constructor(t,e,n,i,o){super(o),this.range=t.clone(),this.key=e,this.oldValue=void 0===n?null:n,this.newValue=void 0===i?null:i}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new cc(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new cc(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new Gn.b("attribute-operation-range-not-flat: The range to change is not flat.",this);for(const t of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!ac(t.getAttribute(this.key),this.oldValue))throw new Gn.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",this,{item:t,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&t.hasAttribute(this.key))throw new Gn.b("attribute-operation-attribute-exists: The attribute with given key already exists.",this,{node:t,key:this.key})}}_execute(){ac(this.oldValue,this.newValue)||function(t,e,n){rc(t.start),rc(t.end);for(const i of t.getItems({shallow:!0})){const t=i.is("textProxy")?i.textNode:i;null!==n?t._setAttribute(e,n):t._removeAttribute(e),oc(t.parent,t.index)}oc(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new cc($s.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class lc extends Za{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new Gn.b("detach-operation-on-document-node: Cannot detach document node.",this)}_execute(){ec($s._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class dc extends Za{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new Gn.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.",this);if(t===e&&n<i&&i<n+this.howMany)throw new Gn.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.",this);if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==li(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const t=this.sourcePosition.path.length-1;if(this.targetPosition.path[t]>=n&&this.targetPosition.path[t]<n+this.howMany)throw new Gn.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.",this)}}_execute(){nc($s._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=Ys.fromJSON(t.sourcePosition,e),i=Ys.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class hc extends Za{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Fs(ic(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new Fs([...this.nodes].map(t=>t._clone(!0))),e=new hc(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new Ys(t,[0]);return new dc(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new Gn.b("insert-operation-position-invalid: Insertion position is invalid.",this)}_execute(){const t=this.nodes;this.nodes=new Fs([...t].map(t=>t._clone(!0))),tc(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const e of t.nodes)e.name?n.push(Us.fromJSON(e)):n.push(zs.fromJSON(e));const i=new hc(Ys.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class uc extends Za{constructor(t,e,n,i,o,r){super(r),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=o,this._markers=i}get type(){return"marker"}clone(){return new uc(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new uc(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new uc(t.name,t.oldRange?$s.fromJSON(t.oldRange,e):null,t.newRange?$s.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class fc extends Za{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new fc(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new fc(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof Us))throw new Gn.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.",this);if(t.name!==this.oldName)throw new Gn.b("rename-operation-wrong-name: Element to change has different name than operation's old name.",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new fc(Ys.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class gc extends Za{constructor(t,e,n,i,o){super(o),this.root=t,this.key=e,this.oldValue=n,this.newValue=i}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new gc(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new gc(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new Gn.b("rootattribute-operation-not-a-root: The element to change is not a root element.",this,{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new Gn.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",this,{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new Gn.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.",this,{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new Gn.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",this,{rootName:t.root});return new gc(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class mc extends Za{constructor(t,e,n,i,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new Ys(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new $s(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new Ys(this.sourcePosition.root,e)._getTransformedByMergeOperation(this),i=new pc(t,this.howMany,this.graveyardPosition,this.baseVersion+1);return i.insertionPosition=n,i}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new Gn.b("merge-operation-source-position-invalid: Merge source position is invalid.",this);if(!e.parent)throw new Gn.b("merge-operation-target-position-invalid: Merge target position is invalid.",this);if(this.howMany!=t.maxOffset)throw new Gn.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.",this)}_execute(){const t=this.sourcePosition.parent;nc($s._createIn(t),this.targetPosition),nc($s._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=Ys.fromJSON(t.sourcePosition,e),i=Ys.fromJSON(t.targetPosition,e),o=Ys.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,o,t.baseVersion)}}class pc extends Za{constructor(t,e,n,i){super(i),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=pc.getInsertionPosition(t),this.insertionPosition.stickiness="toNone",this.graveyardPosition=n?n.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new Ys(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new $s(this.splitPosition,t)}clone(){const t=new this.constructor(this.splitPosition,this.howMany,this.graveyardPosition,this.baseVersion);return t.insertionPosition=this.insertionPosition,t}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new Ys(t,[0]);return new mc(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new Gn.b("split-operation-position-invalid: Split position is invalid.",this);if(!t.parent)throw new Gn.b("split-operation-split-in-root: Cannot split root element.",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new Gn.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new Gn.b("split-operation-graveyard-position-invalid: Graveyard position invalid.",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)nc($s._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();tc(this.insertionPosition,e)}nc(new $s(Ys._createAt(t,this.splitPosition.offset),Ys._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new Ys(t.root,e)}static fromJSON(t,e){const n=Ys.fromJSON(t.splitPosition,e),i=Ys.fromJSON(t.insertionPosition,e),o=t.graveyardPosition?Ys.fromJSON(t.graveyardPosition,e):null,r=new this(n,t.howMany,o,t.baseVersion);return r.insertionPosition=i,r}}class bc extends Us{constructor(t,e,n="main"){super(e),this._doc=t,this.rootName=n}get document(){return this._doc}is(t,e){const n=t.replace("model:","");return e?"rootElement"==n&&e==this.name||super.is(t,e):"rootElement"==n||super.is(t)}toJSON(){return this.rootName}}class wc{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new zs(t,e)}createElement(t,e){return new Us(t,e)}createDocumentFragment(){return new Xa}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof zs&&""==t.data)return;const i=Ys._createAt(e,n);if(t.parent){if(xc(t.root,i.root))return void this.move($s._createOn(t),i);if(t.root.document)throw new Gn.b("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree. It is forbidden to move a node that was already in a document outside of it.",this);this.remove(t)}const o=i.root.document?i.root.document.version:null,r=new hc(i,t,o);if(t instanceof zs&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),t instanceof Xa)for(const[e,n]of t.markers){const t=Ys._createAt(n.root,0),o={range:new $s(n.start._getCombined(t,i),n.end._getCombined(t,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(e)?this.updateMarker(e,o):this.addMarker(e,o)}}insertText(t,e,n,i){e instanceof Xa||e instanceof Us||e instanceof Ys?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof Xa||e instanceof Us||e instanceof Ys?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Xa||e instanceof Us?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Xa||e instanceof Us?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof $s){const i=n.getMinimalFlatRanges();for(const n of i)kc(this,t,e,n)}else _c(this,t,e,n)}setAttributes(t,e){for(const[n,i]of js(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof $s){const n=e.getMinimalFlatRanges();for(const e of n)kc(this,t,null,e)}else _c(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=t=>{for(const e of t.getAttributeKeys())this.removeAttribute(e,t)};if(t instanceof $s)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof $s))throw new Gn.b("writer-move-invalid-range: Invalid range to move.",this);if(!t.isFlat)throw new Gn.b("writer-move-range-not-flat: Range to move is not flat.",this);const i=Ys._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!xc(t.root,i.root))throw new Gn.b("writer-move-different-document: Range is going to be moved between different documents.",this);const o=t.root.document?t.root.document.version:null,r=new dc(t.start,t.end.offset-t.start.offset,i,o);this.batch.addOperation(r),this.model.applyOperation(r)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof $s?t:$s._createOn(t)).getMinimalFlatRanges().reverse();for(const t of e)this._addOperationForAffectedMarkers("move",t),yc(t.start,t.end.offset-t.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof Us))throw new Gn.b("writer-merge-no-element-before: Node before merge position must be an element.",this);if(!(n instanceof Us))throw new Gn.b("writer-merge-no-element-after: Node after merge position must be an element.",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move($s._createIn(n),Ys._createAt(e,"end")),this.remove(n)}_merge(t){const e=Ys._createAt(t.nodeBefore,"end"),n=Ys._createAt(t.nodeAfter,0),i=t.root.document.graveyard,o=new Ys(i,[0]),r=t.root.document.version,s=new mc(n,t.nodeAfter.maxOffset,e,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Us))throw new Gn.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.",this);const n=t.root.document?t.root.document.version:null,i=new fc(Ys._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,o=t.parent;if(!o.parent)throw new Gn.b("writer-split-element-no-parent: Element with no parent can not be split.",this);if(e||(e=o.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new Gn.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.",this);do{const e=o.root.document?o.root.document.version:null,r=o.maxOffset-t.offset,s=new pc(t,r,null,e);this.batch.addOperation(s),this.model.applyOperation(s),n||i||(n=o,i=t.parent.nextSibling),o=(t=this.createPositionAfter(t.parent)).parent}while(o!==e);return{position:t,range:new $s(Ys._createAt(n,"end"),Ys._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new Gn.b("writer-wrap-range-not-flat: Range to wrap is not flat.",this);const n=e instanceof Us?e:new Us(e);if(n.childCount>0)throw new Gn.b("writer-wrap-element-not-empty: Element to wrap with is not empty.",this);if(null!==n.parent)throw new Gn.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.",this);this.insert(n,t.start);const i=new $s(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,Ys._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),null===t.parent)throw new Gn.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.",this);this.move($s._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||"boolean"!=typeof e.usingOperation)throw new Gn.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.",this);const n=e.usingOperation,i=e.range,o=void 0!==e.affectsData&&e.affectsData;if(this.model.markers.has(t))throw new Gn.b("writer-addMarker-marker-exists: Marker with provided name already exists.",this);if(!i)throw new Gn.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.",this);return n?(vc(this,t,null,i,o),this.model.markers.get(t)):this.model.markers._set(t,i,n,o)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n="string"==typeof t?t:t.name,i=this.model.markers.get(n);if(!i)throw new Gn.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.",this);if(!e)return void this.model.markers._refresh(i);const o="boolean"==typeof e.usingOperation,r="boolean"==typeof e.affectsData,s=r?e.affectsData:i.affectsData;if(!o&&!e.range&&!r)throw new Gn.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.",this);const a=i.getRange(),c=e.range?e.range:a;o&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?vc(this,n,null,c,s):(vc(this,n,a,null,s),this.model.markers._set(n,c,void 0,s)):i.managedUsingOperations?vc(this,n,a,c,s):this.model.markers._set(n,c,void 0,s)}removeMarker(t){this._assertWriterUsedCorrectly();const e="string"==typeof t?t:t.name;if(!this.model.markers.has(e))throw new Gn.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.",this);const n=this.model.markers.get(e);n.managedUsingOperations?vc(this,e,n.getRange(),null,n.affectsData):this.model.markers._remove(e)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._setSelectionAttribute(t,e);else for(const[e,n]of js(t))this._setSelectionAttribute(e,n)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=sa._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=sa._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new Gn.b("writer-incorrect-use: Trying to use a writer outside the change() block.",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let o=!1;if("move"==t)o=e.containsPosition(i.start)||e.start.isEqual(i.start)||e.containsPosition(i.end)||e.end.isEqual(i.end);else{const t=e.nodeBefore,n=e.nodeAfter,r=i.start.parent==t&&i.start.isAtEnd,s=i.end.parent==n&&0==i.end.offset,a=i.end.nodeAfter==n,c=i.start.nodeAfter==n;o=r||s||a||c}o&&this.updateMarker(n.name,{range:i})}}}function kc(t,e,n,i){const o=t.model,r=o.document;let s,a,c,l=i.start;for(const t of i.getWalker({shallow:!0}))c=t.item.getAttribute(e),s&&a!=c&&(a!=n&&d(),l=s),s=t.nextPosition,a=c;function d(){const i=new $s(l,s),c=i.root.document?r.version:null,d=new cc(i,e,a,n,c);t.batch.addOperation(d),o.applyOperation(d)}s instanceof Ys&&s!=l&&a!=n&&d()}function _c(t,e,n,i){const o=t.model,r=o.document,s=i.getAttribute(e);let a,c;if(s!=n){if(i.root===i){const t=i.document?r.version:null;c=new gc(i,e,s,n,t)}else{const o=(a=new $s(Ys._createBefore(i),t.createPositionAfter(i))).root.document?r.version:null;c=new cc(a,e,s,n,o)}t.batch.addOperation(c),o.applyOperation(c)}}function vc(t,e,n,i,o){const r=t.model,s=r.document,a=new uc(e,n,i,r.markers,o,s.version);t.batch.addOperation(a),r.applyOperation(a)}function yc(t,e,n,i){let o;if(t.root.document){const n=i.document,r=new Ys(n.graveyard,[0]);o=new dc(t,e,r,n.version)}else o=new lc(t,e);n.addOperation(o),i.applyOperation(o)}function xc(t,e){return t===e||t instanceof bc&&e instanceof bc}class Ac{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize);const e=$s._createOn(t);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}this._cachedChanges=null}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=$s._createFromPositionAndShift(t.position,1);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const i=t.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,i){const o=this._changedMarkers.get(t);o?(o.newRange=n,o.affectsData=i,null==o.oldRange&&null==o.newRange&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:i})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.oldRange&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.newRange&&t.push({name:e,range:n.newRange});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(t=>({name:t[0],data:{oldRange:t[1].oldRange,newRange:t[1].newRange}}))}hasDataChanges(){for(const[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const e=[];for(const t of this._changesInElement.keys()){const n=this._changesInElement.get(t).sort((t,e)=>t.offset===e.offset?t.type!=e.type?"remove"==t.type?-1:1:0:t.offset<e.offset?-1:1),i=this._elementSnapshots.get(t),o=Tc(t.getChildren()),r=Cc(i.length,n);let s=0,a=0;for(const n of r)if("i"===n)e.push(this._getInsertDiff(t,s,o[s].name)),s++;else if("r"===n)e.push(this._getRemoveDiff(t,s,i[a].name)),a++;else if("a"===n){const n=o[s].attributes,r=i[a].attributes;let c;if("$text"==o[s].name)c=new $s(Ys._createAt(t,s),Ys._createAt(t,s+1));else{const e=t.offsetToIndex(s);c=new $s(Ys._createAt(t,s),Ys._createAt(t.getChild(e),0))}e.push(...this._getAttributesDiff(c,r,n)),s++,a++}else s++,a++}e.sort((t,e)=>t.position.root!=e.position.root?t.position.root.rootName<e.position.root.rootName?-1:1:t.position.isEqual(e.position)?t.changeCount-e.changeCount:t.position.isBefore(e.position)?-1:1);for(let t=1;t<e.length;t++){const n=e[t-1],i=e[t],o="remove"==n.type&&"remove"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.isEqual(i.position),r="insert"==n.type&&"insert"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.parent==i.position.parent&&n.position.offset+n.length==i.position.offset,s="attribute"==n.type&&"attribute"==i.type&&n.position.parent==i.position.parent&&n.range.isFlat&&i.range.isFlat&&n.position.offset+n.length==i.position.offset&&n.attributeKey==i.attributeKey&&n.attributeOldValue==i.attributeOldValue&&n.attributeNewValue==i.attributeNewValue;(o||r||s)&&(e[t-1].length++,s&&(e[t-1].range.end=e[t-1].range.end.getShiftedBy(1)),e.splice(t,1),t--)}for(const t of e)delete t.changeCount,"attribute"==t.type&&(delete t.position,delete t.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.slice().filter(Pc),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let t=0;t<n.length;t++)n[t].howMany<1&&(n.splice(t,1),t--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,Tc(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,o=n.offset+n.howMany;if("insert"==t.type&&("insert"==n.type&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<o&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),"remove"==n.type&&t.offset<n.offset&&(n.offset+=t.howMany),"attribute"==n.type))if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<o){const o=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:o-n.howMany,count:this._changeCount++})}if("remove"==t.type){if("insert"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(i<=o)if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e,t.nodesToHandle-=e}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<o){const e=o-t.offset;n.howMany-=e,t.nodesToHandle-=e}if("remove"==n.type&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),"attribute"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e}else if(t.offset<o)if(i<=o){const i=n.howMany;n.howMany=t.offset-n.offset;const o=i-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:o,count:this._changeCount++})}else n.howMany-=o-t.offset}if("attribute"==t.type){if("insert"==n.type)if(t.offset<n.offset&&i>n.offset){if(i>o){const t={type:"attribute",offset:o,howMany:i-o,count:this._changeCount++};this._handleChange(t,e),e.push(t)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<o&&(i>o?(t.nodesToHandle=i-o,t.offset=o):t.nodesToHandle=0);if("remove"==n.type&&t.offset<n.offset&&i>n.offset){const o={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(o,e),e.push(o),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}"attribute"==n.type&&(t.offset>=n.offset&&i<=o?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=o&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:Ys._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:Ys._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[o,r]of e){const e=n.has(o)?n.get(o):null;e!==r&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:o,attributeOldValue:r,attributeNewValue:e,changeCount:this._changeCount++}),n.delete(o)}for(const[e,o]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:e,attributeOldValue:null,attributeNewValue:o,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n)for(const t of n)if("insert"==t.type&&i>=t.offset&&i<t.offset+t.howMany)return!0;return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new $s(Ys._createAt(t,e),Ys._createAt(t,e+n));for(const t of i.getItems({shallow:!0}))t.is("element")&&(this._elementSnapshots.delete(t),this._changesInElement.delete(t),this._removeAllNestedChanges(t,0,t.maxOffset))}}function Tc(t){const e=[];for(const n of t)if(n.is("text"))for(let t=0;t<n.data.length;t++)e.push({name:"$text",attributes:new Map(n.getAttributes())});else e.push({name:n.name,attributes:new Map(n.getAttributes())});return e}function Cc(t,e){const n=[];let i=0,o=0;for(const t of e){if(t.offset>i){for(let e=0;e<t.offset-i;e++)n.push("e");o+=t.offset-i}if("insert"==t.type){for(let e=0;e<t.howMany;e++)n.push("i");i=t.offset+t.howMany}else if("remove"==t.type){for(let e=0;e<t.howMany;e++)n.push("r");i=t.offset,o+=t.howMany}else n.push(..."a".repeat(t.howMany).split("")),i=t.offset+t.howMany,o+=t.howMany}if(o<t)for(let e=0;e<t-o-i;e++)n.push("e");return n}function Pc(t){const e=t.position&&"$graveyard"==t.position.root.rootName,n=t.range&&"$graveyard"==t.range.root.rootName;return!e&&!n}class Sc{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=0,e=Number.POSITIVE_INFINITY){return t<0?[]:this._operations.slice(t,e)}getOperation(t){return this._operations[t]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function Mc(t,e){return function(t){return!!t&&1==t.length&&/[\ud800-\udbff]/.test(t)}(t.charAt(e-1))&&function(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}(t.charAt(e))}function Ec(t,e){return function(t){return!!t&&1==t.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)}(t.charAt(e))}const Ic="$graveyard";class Nc{constructor(t){this.model=t,this.version=0,this.history=new Sc(this),this.selection=new sa(this),this.roots=new oo({idProperty:"rootName"}),this.differ=new Ac(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Ic),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&n.baseVersion!==this.version)throw new Gn.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",this,{operation:n})},{priority:"highest"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&this.differ.bufferOperation(n)},{priority:"high"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&(this.version++,this.history.addOperation(n))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(t,e,n,i)=>{this.differ.bufferMarkerChange(e.name,n,i,e.affectsData),null===n&&e.on("change",(t,n)=>{this.differ.bufferMarkerChange(e.name,n,e.getRange(),e.affectsData)})})}get graveyard(){return this.getRoot(Ic)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new Gn.b("model-document-createRoot-name-exists: Root with specified name already exists.",this,{name:e});const n=new bc(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Ic)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=hi(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return Oc(t.start)&&Oc(t.end)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(this.selection.refresh(),e=n(t))break}while(e)}}function Oc(t){const e=t.textNode;if(e){const n=e.data,i=t.offset-e.startOffset;return!Mc(n,i)&&!Ec(n,i)}return!0}ci(Nc,ei);class Rc{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const o=t instanceof Dc?t.name:t,r=this._markers.get(o);if(r){const t=r.getRange();let s=!1;return t.isEqual(e)||(r._attachLiveRange(oa.fromRange(e)),s=!0),n!=r.managedUsingOperations&&(r._managedUsingOperations=n,s=!0),"boolean"==typeof i&&i!=r.affectsData&&(r._affectsData=i,s=!0),s&&this.fire("update:"+o,r,t,e),r}const s=oa.fromRange(e),a=new Dc(o,s,n,i);return this._markers.set(o,a),this.fire("update:"+o,a,null,e),a}_remove(t){const e=t instanceof Dc?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Dc?t.name:t,n=this._markers.get(e);if(!n)throw new Gn.b("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.",this);const i=n.getRange();this.fire("update:"+e,n,i,i,n.managedUsingOperations,n.affectsData)}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)null!==e.getRange().getIntersection(t)&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}ci(Rc,ei);class Dc{constructor(t,e,n,i){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._affectsData}getStart(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new Gn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.toRange()}is(t){return"marker"==t||"model:marker"==t}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}ci(Dc,ei);class Lc extends Ys{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new Gn.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.",t);(function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}.call(this,n)},{priority:"low"})}).call(this)}detach(){this.stopListening()}is(t){return"livePosition"==t||"model:livePosition"==t||super.is(t)}toPosition(){return new Ys(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}ci(Lc,ei);class jc{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t,e){t=Array.from(t);for(let n=0;n<t.length;n++){const i=t[n];this._handleNode(i,{isFirst:0===n&&e.isFirst,isLast:n===t.length-1&&e.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?$s._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new $s(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t,e){if(this.schema.isObject(t))return void this._handleObject(t,e);this._checkAndSplitToAllowedPosition(t,e)?(this._insert(t),this._mergeSiblingsOf(t,e)):this._handleDisallowedNode(t,e)}_handleObject(t,e){this._checkAndSplitToAllowedPosition(t)?this._insert(t):this._tryAutoparagraphing(t,e)}_handleDisallowedNode(t,e){t.is("element")?this.handleNodes(t.getChildren(),e):this._tryAutoparagraphing(t,e)}_insert(t){if(!this.schema.checkChild(this.position,t))throw new Gn.b("insertcontent-wrong-position: Given node cannot be inserted on the given position.",this,{node:t,position:this.position});const e=Lc.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this.writer.insert(t,this.position),this.position=e.toPosition(),e.detach(),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Lc.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Lc.fromPosition(t,"toNext"))}_mergeSiblingsOf(t,e){if(!(t instanceof Us))return;const n=this._canMergeLeft(t,e),i=this._canMergeRight(t,e),o=Lc._createBefore(t);o.stickiness="toNext";const r=Lc._createAfter(t);if(r.stickiness="toNext",n){const t=Lc.fromPosition(this.position);t.stickiness="toNext",this._affectedStart.isEqual(o)&&(this._affectedStart.detach(),this._affectedStart=Lc._createAt(o.nodeBefore,"end","toPrevious")),this.writer.merge(o),o.isEqual(this._affectedEnd)&&e.isLast&&(this._affectedEnd.detach(),this._affectedEnd=Lc._createAt(o.nodeBefore,"end","toNext")),this.position=t.toPosition(),t.detach()}if(i){if(!this.position.isEqual(r))throw new Gn.b("insertcontent-invalid-insertion-position",this);this.position=Ys._createAt(r.nodeBefore,"end");const t=Lc.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(r)&&(this._affectedEnd.detach(),this._affectedEnd=Lc._createAt(r.nodeBefore,"end","toNext")),this.writer.merge(r),r.getShiftedBy(-1).isEqual(this._affectedStart)&&e.isFirst&&(this._affectedStart.detach(),this._affectedStart=Lc._createAt(r.nodeBefore,0,"toPrevious")),this.position=t.toPosition(),t.detach()}(n||i)&&this._filterAttributesOf.push(this.position.parent),o.detach(),r.detach()}_canMergeLeft(t,e){const n=t.previousSibling;return e.isFirst&&n instanceof Us&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(n,t)}_canMergeRight(t,e){const n=t.nextSibling;return e.isLast&&n instanceof Us&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(t,n)}_tryAutoparagraphing(t,e){const n=this.writer.createElement("paragraph");this._getAllowedIn(n,this.position.parent)&&this.schema.checkChild(n,t)&&(n._appendChild(t),this._handleNode(n,e))}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(;e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const t=this.position.parent;this.position=this.writer.createPositionBefore(t),t.isEmpty&&t.parent===e&&this.writer.remove(t)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const t=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=t,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function Vc(t,e,n={}){if(e.isCollapsed)return;const i=e.getFirstRange();if("$graveyard"==i.root.rootName)return;const o=t.schema;t.change(t=>{if(!n.doNotResetEntireContent&&function(t,e){const n=t.getLimitElement(e);if(!e.containsEntireContent(n))return!1;const i=e.getFirstRange();if(i.start.parent==i.end.parent)return!1;return t.checkChild(n,"paragraph")}(o,e))return void function(t,e){const n=t.model.schema.getLimitElement(e);t.remove(t.createRangeIn(n)),zc(t,t.createPositionAt(n,0),e)}(t,e);const r=i.start,s=Lc.fromPosition(i.end,"toNext");if(i.start.isTouching(i.end)||t.remove(i),n.leaveUnmerged||(!function t(e,n,i){const o=n.parent;const r=i.parent;if(o==r)return;if(e.model.schema.isLimit(o)||e.model.schema.isLimit(r))return;if(!function(t,e,n){const i=new $s(t,e);for(const t of i.getWalker())if(n.isLimit(t.item))return!1;return!0}(n,i,e.model.schema))return;n=e.createPositionAfter(o);i=e.createPositionBefore(r);i.isEqual(n)||e.insert(r,n);e.merge(n);for(;i.parent.isEmpty;){const t=i.parent;i=e.createPositionBefore(t),e.remove(t)}t(e,n,i)}(t,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),t)),Bc(t,e,r),function(t,e){const n=t.checkChild(e,"$text"),i=t.checkChild(e,"paragraph");return!n&&i}(o,r)){const i=o.getNearestSelectionRange(r);n.doNotAutoparagraph&&i?Bc(t,e,i):zc(t,r,e)}s.detach()})}function zc(t,e,n){const i=t.createElement("paragraph");t.insert(i,e),Bc(t,n,t.createPositionAt(i,0))}function Bc(t,e,n){e instanceof sa?t.setSelection(n):e.setTo(n)}const Fc=' ,.?!:;"-()';function Uc(t,e,n={}){const i=t.schema,o="backward"!=n.direction,r=n.unit?n.unit:"character",s=e.focus,a=new Hs({boundaries:function(t,e){const n=t.root,i=Ys._createAt(n,e?"end":0);return e?new $s(t,i):new $s(i,t)}(s,o),singleCharacters:!0,direction:o?"forward":"backward"}),c={walker:a,schema:i,isForward:o,unit:r};let l;for(;l=a.next();){if(l.done)return;const n=Hc(c,l.value);if(n)return void(e instanceof sa?t.change(t=>{t.setSelectionFocus(n)}):e.setFocus(n))}}function Hc(t,e){if("text"==e.type)return"word"===t.unit?function(t,e){let n=t.position.textNode;if(n){let i=t.position.offset-n.startOffset;for(;!qc(n.data,i,e)&&!Wc(n,i,e);){t.next();const o=e?t.position.nodeAfter:t.position.nodeBefore;if(o&&o.is("text")){const i=o.data.charAt(e?0:o.data.length-1);Fc.includes(i)||(t.next(),n=t.position.textNode)}i=t.position.offset-n.startOffset}}return t.position}(t.walker,t.isForward):function(t,e){const n=t.position.textNode;if(n){const i=n.data;let o=t.position.offset-n.startOffset;for(;Mc(i,o)||"character"==e&&Ec(i,o);)t.next(),o=t.position.offset-n.startOffset}return t.position}(t.walker,t.unit,t.isForward);if(e.type==(t.isForward?"elementStart":"elementEnd")){if(t.schema.isObject(e.item))return Ys._createAt(e.item,t.isForward?"after":"before");if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}else{if(t.schema.isLimit(e.item))return void t.walker.skip(()=>!0);if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}}function qc(t,e,n){const i=e+(n?0:-1);return Fc.includes(t.charAt(i))}function Wc(t,e,n){return e===(n?t.endOffset:0)}function Yc(t,e){const n=[];Array.from(t.getItems({direction:"backward"})).map(t=>e.createRangeOn(t)).filter(e=>{return(e.start.isAfter(t.start)||e.start.isEqual(t.start))&&(e.end.isBefore(t.end)||e.end.isEqual(t.end))}).forEach(t=>{n.push(t.start.parent),e.remove(t)}),n.forEach(t=>{let n=t;for(;n.parent&&n.isEmpty;){const t=e.createRangeOn(n);n=n.parent,e.remove(t)}})}function $c(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.selection,i=e.schema,o=[];let r=!1;for(const t of n.getRanges()){const e=Gc(t,i);e?(o.push(e),r=!0):o.push(t)}if(r){let e=o;if(o.length>1){const t=o[0].start,n=o[o.length-1].end;e=[new $s(t,n)]}t.setSelection(e,{backward:n.isBackward})}})(e,t))}function Gc(t,e){return t.isCollapsed?function(t,e){const n=t.start,i=e.getNearestSelectionRange(n);if(!i)return null;const o=i.start;if(n.isEqual(o))return null;if(o.nodeAfter&&e.isLimit(o.nodeAfter))return new $s(o,Ys._createAfter(o.nodeAfter));return new $s(o)}(t,e):function(t,e){const n=t.start,i=t.end,o=e.checkChild(n,"$text"),r=e.checkChild(i,"$text"),s=e.getLimitElement(n),a=e.getLimitElement(i);if(s===a){if(o&&r)return null;if(function(t,e,n){const i=t.nodeAfter&&!n.isLimit(t.nodeAfter)||n.checkChild(t,"$text"),o=e.nodeBefore&&!n.isLimit(e.nodeBefore)||n.checkChild(e,"$text");return i||o}(n,i,e)){const t=n.nodeAfter&&e.isObject(n.nodeAfter),o=t?null:e.getNearestSelectionRange(n,"forward"),r=i.nodeBefore&&e.isObject(i.nodeBefore),s=r?null:e.getNearestSelectionRange(i,"backward"),a=o?o.start:n,c=s?s.start:i;return new $s(a,c)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const t=n.nodeAfter&&i.nodeBefore&&n.nodeAfter.parent===i.nodeBefore.parent,o=c&&(!t||!Jc(n.nodeAfter,e)),r=l&&(!t||!Jc(i.nodeBefore,e));let d=n,h=i;return o&&(d=Ys._createBefore(Qc(s,e))),r&&(h=Ys._createAfter(Qc(a,e))),new $s(d,h)}return null}(t,e)}function Qc(t,e){let n=t,i=n;for(;e.isLimit(i)&&i.parent;)n=i,i=i.parent;return n}function Jc(t,e){return t&&e.isObject(t)}class Kc{constructor(){this.markers=new Rc,this.document=new Nc(this),this.schema=new Oa,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if("$marker"===e.name)return!0}),$c(this)}change(t){try{return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new Ka,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(t){Gn.b.rethrowUnexpectedError(t,this)}}enqueueChange(t,e){try{"string"==typeof t?t=new Ka(t):"function"==typeof t&&(e=t,t=new Ka),this._pendingChanges.push({batch:t,callback:e}),1==this._pendingChanges.length&&this._runPendingChanges()}catch(t){Gn.b.rethrowUnexpectedError(t,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(t,e,n,i){return t.change(o=>{let r;const s=(r=n?n instanceof Xs||n instanceof sa?n:o.createSelection(n,i):t.document.selection).getFirstPosition();r.isCollapsed||t.deleteContent(r,{doNotAutoparagraph:!0});const a=new jc(t,o,s);let c;c=e.is("documentFragment")?e.getChildren():[e],a.handleNodes(c,{isFirst:!0,isLast:!0});const l=a.getSelectionRange();l&&(r instanceof sa?o.setSelection(l):r.setTo(l));const d=a.getAffectedRange()||t.createRange(s);return a.destroy(),d})}(this,t,e,n)}deleteContent(t,e){Vc(this,t,e)}modifySelection(t,e){Uc(this,t,e)}getSelectedContent(t){return function(t,e){return t.change(t=>{const n=t.createDocumentFragment(),i=e.getFirstRange();if(!i||i.isCollapsed)return n;const o=i.start.root,r=i.start.getCommonPath(i.end),s=o.getNodeByPath(r);let a;const c=(a=i.start.parent==i.end.parent?i:t.createRange(t.createPositionAt(s,i.start.path[r.length]),t.createPositionAt(s,i.end.path[r.length]+1))).end.offset-a.start.offset;for(const e of a.getItems({shallow:!0}))e.is("textProxy")?t.appendText(e.data,e.getAttributes(),n):t.append(e._clone(!0),n);if(a!=i){const e=i._getTransformedByMove(a.start,t.createPositionAt(n,0),c)[0],o=t.createRange(t.createPositionAt(n,0),e.start);Yc(t.createRange(e.end,t.createPositionAt(n,"end")),t),Yc(o,t)}return n})}(this,t)}hasContent(t,e){const n=t instanceof Us?$s._createIn(t):t;if(n.isCollapsed)return!1;for(const t of this.markers.getMarkersIntersectingRange(n))if(t.affectsData)return!0;const{ignoreWhitespaces:i=!1}=e||{};for(const t of n.getItems())if(t.is("textProxy")){if(!i)return!0;if(-1!==t.data.search(/\S/))return!0}else if(this.schema.isObject(t))return!0;return!1}createPositionFromPath(t,e,n){return new Ys(t,e,n)}createPositionAt(t,e){return Ys._createAt(t,e)}createPositionAfter(t){return Ys._createAfter(t)}createPositionBefore(t){return Ys._createBefore(t)}createRange(t,e){return new $s(t,e)}createRangeIn(t){return $s._createIn(t)}createRangeOn(t){return $s._createOn(t)}createSelection(t,e,n){return new Xs(t,e,n)}createBatch(t){return new Ka(t)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new wc(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}ci(Kc,Fi);class Zc{constructor(){this._listener=Object.create(cr)}listenTo(t){this._listener.listenTo(t,"keydown",(t,e)=>{this._listener.fire("_keydown:"+wo(e),e)})}set(t,e,n={}){const i=ko(t),o=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(t,n)=>{e(n,()=>{n.preventDefault(),n.stopPropagation(),t.stop()}),t.return=!0},{priority:o})}press(t){return!!this._listener.fire("_keydown:"+wo(t),t)}destroy(){this._listener.stopListening()}}class Xc extends Zc{constructor(t){super(),this.editor=t}set(t,e,n={}){if("string"==typeof e){const t=e;e=((e,n)=>{this.editor.execute(t),n()})}super.set(t,e,n)}}class tl{constructor(t){const e=this.constructor.builtinPlugins;this.config=new Yn(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.plugins=new Ta(this,e),this.commands=new Ca;const n=this.config.get("language")||{};this.locale=new Ma({uiLanguage:"string"==typeof n?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Kc,this.data=new $a(this.model),this.editing=new Aa(this.model),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Ga([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Xc(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this.config,e=t.get("plugins")||[],n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[];return this.plugins.init(e.concat(i),n)}destroy(){let t=Promise.resolve();return"initializing"==this.state&&(t=new Promise(t=>this.once("ready",t))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})}execute(...t){try{this.commands.execute(...t)}catch(t){Gn.b.rethrowUnexpectedError(t,this)}}}ci(tl,Fi);var el={setData(t){this.data.set(t)},getData(t){return this.data.get(t)}};var nl={updateSourceElement(){if(!this.sourceElement)throw new Gn.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.",this);!function(t,e){t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}(this.sourceElement,this.data.get())}};class il{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class ol{constructor(){this._domParser=new DOMParser,this._domConverter=new or({blockFillerMode:"nbsp"}),this._htmlWriter=new il}toData(t){const e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this._domConverter.domToView(e)}_toDom(t){const e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class rl{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){if(this.has(t))throw new Gn.b("componentfactory-item-exists: The item already exists in the component factory.",this,{name:t});this._components.set(sl(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new Gn.b("componentfactory-item-missing: The required component is not registered in the factory.",this,{name:t});return this._components.get(sl(t)).callback(this.editor.locale)}has(t){return this._components.has(sl(t))}}function sl(t){return String(t).toLowerCase()}class al{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new Gn.b("focusTracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}ci(al,cr),ci(al,Fi);class cl{constructor(t){this.editor=t,this.componentFactory=new rl(t),this.focusTracker=new al,this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}}ci(cl,ei);n(14);const ll=new WeakMap;function dl(t){const{view:e,element:n,text:i,isDirectHost:o=!0}=t,r=e.document;ll.has(r)||(ll.set(r,new Map),r.registerPostFixer(t=>ul(r,t))),ll.get(r).set(n,{text:i,isDirectHost:o}),e.change(t=>ul(r,t))}function hl(t,e){return!!e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),!0)}function ul(t,e){const n=ll.get(t);let i=!1;for(const[t,o]of n)fl(e,t,o)&&(i=!0);return i}function fl(t,e,n){const{text:i,isDirectHost:o}=n,r=o?e:function(t){if(1===t.childCount){const e=t.getChild(0);if(e.is("element")&&!e.is("uiElement"))return e}return null}(e);let s=!1;return!!r&&(n.hostElement=r,r.getAttribute("data-placeholder")!==i&&(t.setAttribute("data-placeholder",i,r),s=!0),!function(t){const e=t.document;if(!e)return!1;const n=!Array.from(t.getChildren()).some(t=>!t.is("uiElement"));if(!e.isFocused&&n)return!0;const i=e.selection.anchor;return!(!n||!i||i.parent===t)}(r)?hl(t,r)&&(s=!0):function(t,e){return!e.hasClass("ck-placeholder")&&(t.addClass("ck-placeholder",e),!0)}(t,r)&&(s=!0),s)}class gl{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}class ml extends cl{constructor(t,e){super(t),this.view=e,this._toolbarConfig=function(t){return Array.isArray(t)?{items:t}:t?Object.assign({items:[]},t):{items:[]}}(t.config.get("toolbar")),this._elementReplacer=new gl}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,o=n.editable,r=i.document.getRoot();o.name=r.rootName,n.render();const s=o.element;this.setEditableElement(o.name,s),this.focusTracker.add(s),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(s),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),e.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),function({origin:t,originKeystrokeHandler:e,originFocusTracker:n,toolbar:i,beforeFocus:o,afterBlur:r}){n.add(i.element),e.set("Alt+F10",(t,e)=>{n.isFocused&&!i.focusTracker.isFocused&&(o&&o(),i.focus(),e())}),i.keystrokes.set("Esc",(e,n)=>{i.focusTracker.isFocused&&(t.focus(),r&&r(),n())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement,o=t.config.get("placeholder")||i&&"textarea"===i.tagName.toLowerCase()&&i.getAttribute("placeholder");o&&dl({view:e,element:n,text:o,isDirectHost:!1})}}class pl extends oo{constructor(t){super({idProperty:"viewUid"}),this.on("add",(t,e,n)=>{e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[n])}),this.on("remove",(t,e)=>{e.element&&this._parentElement&&e.element.remove()}),this.locale=t,this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t}delegate(...t){if(!t.length||!function(t){return t.every(t=>"string"==typeof t)}(t))throw new Gn.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const n of t)i.delegate(n).to(e)}),this.on("remove",(n,i)=>{for(const n of t)i.stopDelegating(n,e)})}}}}const bl="http://www.w3.org/1999/xhtml";class wl{constructor(t){Object.assign(this,Pl(Cl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new Gn.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Nl(n)?yield n:Ol(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new _l({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,o)=>new vl({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:o})}}static extend(t,e){if(t._isRendered)throw new Gn.b("template-extend-render: Attempting to extend a template which has already been rendered.",[this,t]);!function t(e,n){n.attributes&&(e.attributes||(e.attributes={}),El(e.attributes,n.attributes));n.eventListeners&&(e.eventListeners||(e.eventListeners={}),El(e.eventListeners,n.eventListeners));n.text&&e.text.push(...n.text);if(n.children&&n.children.length){if(e.children.length!=n.children.length)throw new Gn.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.",e);let i=0;for(const o of n.children)t(e.children[i++],o)}}(t,Pl(Cl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text)throw new Gn.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.',this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||bl,this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),yl(this.text)?this._bindToObservable({schema:this.text,updater:function(t){return{set(e){t.textContent=e},remove(){t.textContent=""}}}(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,i,o;if(!this.attributes)return;const r=t.node,s=t.revertData;for(e in this.attributes)if(i=r.getAttribute(e),n=this.attributes[e],s&&(s.attributes[e]=i),o=B(n[0])&&n[0].ns?n[0].ns:null,yl(n)){const a=o?n[0].value:n;s&&Dl(e)&&a.unshift(i),this._bindToObservable({schema:a,updater:Al(r,e,o),data:t})}else"style"==e&&"string"!=typeof n[0]?this._renderStyleAttribute(n[0],t):(s&&i&&Dl(e)&&n.unshift(i),Il(n=n.map(t=>t&&t.value||t).reduce((t,e)=>t.concat(e),[]).reduce(Ml,""))||r.setAttributeNS(o,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const o=t[i];yl(o)?this._bindToObservable({schema:[o],updater:Tl(n,i),data:e}):n.style[i]=o}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let o=0;for(const r of this.children)if(Rl(r)){if(!i){r.setParent(e);for(const t of r)n.appendChild(t.element)}}else if(Nl(r))i||(r.isRendered||r.render(),n.appendChild(r.element));else if(Jo(r))n.appendChild(r);else if(i){const e={children:[],bindings:[],attributes:{}};t.revertData.children.push(e),r._renderNode({node:n.childNodes[o++],isApplying:!0,revertData:e})}else n.appendChild(r.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(n=>{const[i,o]=e.split("@");return n.activateDomEventListener(i,o,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;xl(t,e,n);const o=t.filter(t=>!Il(t)).filter(t=>t.observable).map(i=>i.activateAttributeListener(t,e,n));i&&i.bindings.push(o)}_revertTemplateFromNode(t,e){for(const t of e.bindings)for(const e of t)e();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const i=e.attributes[n];null===i?t.removeAttribute(n):t.setAttribute(n,i)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}ci(wl,ei);class kl{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>xl(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class _l extends kl{activateDomEventListener(t,e,n){const i=(t,n)=>{e&&!n.target.matches(e)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class vl extends kl{getValue(t){return!Il(super.getValue(t))&&(this.valueIfTrue||!0)}}function yl(t){return!!t&&(t.value&&(t=t.value),Array.isArray(t)?t.some(yl):t instanceof kl)}function xl(t,e,{node:n}){let i=function(t,e){return t.map(t=>t instanceof kl?t.getValue(e):t)}(t,n);Il(i=1==t.length&&t[0]instanceof vl?i[0]:i.reduce(Ml,""))?e.remove():e.set(i)}function Al(t,e,n){return{set(i){t.setAttributeNS(n,e,i)},remove(){t.removeAttributeNS(n,e)}}}function Tl(t,e){return{set(n){t.style[e]=n},remove(){t.style[e]=null}}}function Cl(t){return qn(t,t=>{if(t&&(t instanceof kl||Ol(t)||Nl(t)||Rl(t)))return t})}function Pl(t){if("string"==typeof t?t=function(t){return{text:[t]}}(t):t.text&&function(t){Array.isArray(t.text)||(t.text=[t.text])}(t),t.on&&(t.eventListeners=function(t){for(const e in t)Sl(t,e);return t}(t.on),delete t.on),!t.text){t.attributes&&function(t){for(const e in t)t[e].value&&(t[e].value=[].concat(t[e].value)),Sl(t,e)}(t.attributes);const e=[];if(t.children)if(Rl(t.children))e.push(t.children);else for(const n of t.children)Ol(n)||Nl(n)||Jo(n)?e.push(n):e.push(new wl(n));t.children=e}return t}function Sl(t,e){Array.isArray(t[e])||(t[e]=[t[e]])}function Ml(t,e){return Il(e)?t:Il(t)?e:`${t} ${e}`}function El(t,e){for(const n in e)t[n]?t[n].push(...e[n]):t[n]=e[n]}function Il(t){return!t&&0!==t}function Nl(t){return t instanceof Ll}function Ol(t){return t instanceof wl}function Rl(t){return t instanceof pl}function Dl(t){return"class"==t||"style"==t}n(16);class Ll{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new oo,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=wl.bind(this,this)}createCollection(){const t=new pl;return this._viewCollections.add(t),t}registerChild(t){pi(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){pi(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new wl(t)}extendTemplate(t){wl.extend(this.template,t)}render(){if(this.isRendered)throw new Gn.b("ui-view-render-already-rendered: This View has already been rendered.",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}ci(Ll,cr),ci(Ll,Fi);n(18);class jl extends Ll{constructor(t){super(t),this.body=this.createCollection()}render(){super.render(),this._renderBodyCollection()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const t=this.locale,e=this._bodyCollectionContainer=new wl({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:t.uiLanguageDirection},children:this.body}).render();document.body.appendChild(e)}}n(20);class Vl extends Ll{constructor(t){super(t),this.set("text"),this.set("for");const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],for:e.to("for")},children:[{text:e.to("text")}]})}}class zl extends jl{constructor(t){super(t);const e=Kn();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":`ck-editor__aria-label_${e}`},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(t){const e=this.t,n=new Vl;return n.text=e("bj"),n.extendTemplate({attributes:{id:`ck-editor__aria-label_${t}`,class:"ck-voice-label"}}),n}}class Bl extends Ll{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(e){t.change(n=>{const i=t.document.getRoot(e.name);n.addClass(e.isFocused?"ck-focused":"ck-blurred",i),n.removeClass(e.isFocused?"ck-blurred":"ck-focused",i)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(t,o,r)=>{r?n(i):e(i)})}(this):e(this)}}class Fl extends Bl{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView,e=this.t;t.change(n=>{const i=t.document.getRoot(this.name);n.setAttribute("aria-label",e("cc",[this.name]),i)})}}function Ul(t){return e=>e+t}n(22);const Hl=Ul("px");class ql extends Ll{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new wl({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",t=>t?"block":"none"),height:e.to("isSticky",t=>t?Hl(this._panelRect.height):null)}}}).render(),this._contentPanel=new wl({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",t=>t?Hl(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",t=>t?Hl(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",t=>t?Hl(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(tr.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Hl(-tr.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class Wl{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];"string"==typeof n&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(t,n)=>{this[e](),n()})}}get first(){return this.focusables.find(Yl)||null}get last(){return this.focusables.filter(Yl).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(null===e)return this[1===t?"first":"last"];let i=(e+n+t)%n;do{const e=this.focusables.get(i);if(Yl(e))return e;i=(i+n+t)%n}while(i!==e);return null}}function Yl(t){return!(!t.focus||"none"==tr.window.getComputedStyle(t.element).display)}class $l extends Ll{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}const Gl=100;class Ql{constructor(t){this._callback=t,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(t){this._elements.add(t),1===this._elements.size&&this._startPeriodicCheck()}unobserve(t){this._elements.delete(t),this._previousRects.delete(t),this._elements.size||this._stopPeriodicCheck()}disconnect(){this._elements.forEach(t=>this.unobserve(t))}_startPeriodicCheck(){const t=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(t,Gl)};this.listenTo(tr.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),t()}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const t=[];for(const e of this._elements)this._hasRectChanged(e)&&t.push({target:e,contentRect:this._previousRects.get(e)});t.length&&this._callback(t)}_hasRectChanged(t){if(!t.ownerDocument.body.contains(t))return!1;const e=new xs(t),n=this._previousRects.get(t),i=!n||!n.isEqual(e);return this._previousRects.set(t,e),i}}ci(Ql,cr);class Jl extends Ll{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",t=>`ck-dropdown__panel_${t}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(t=>t.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;"function"==typeof t.focusLast?t.focusLast():t.focus()}}}n(24);function Kl({element:t,target:e,positions:n,limiter:i,fitInViewport:o}){W(e)&&(e=e()),W(i)&&(i=i());const r=function(t){for(;t&&"html"!=t.tagName.toLowerCase();){if("static"!=tr.window.getComputedStyle(t).position)return t;t=t.parentElement}return null}(t.parentElement),s=new xs(t),a=new xs(e);let c,l;if(i||o){const t=i&&new xs(i).getVisible(),e=o&&new xs(tr.window);[l,c]=function(t,e,n,i,o){let r,s,a=0,c=0;const l=n.getArea();return t.some(t=>{const[d,h]=Zl(t,e,n);let u,f;if(i)if(o){const t=i.getIntersection(o);u=t?t.getIntersectionArea(h):0}else u=i.getIntersectionArea(h);function g(){c=f,a=u,r=h,s=d}return o&&(f=o.getIntersectionArea(h)),o&&!i?f>c&&g():!o&&i?u>a&&g():f>c&&u>=a?g():f>=c&&u>a&&g(),u===l}),r?[s,r]:null}(n,a,s,t,e)||Zl(n[0],a,s)}else[l,c]=Zl(n[0],a,s);let{left:d,top:h}=Xl(c);if(r){const t=Xl(new xs(r)),e=vs(r);d-=t.left,h-=t.top,d+=r.scrollLeft,h+=r.scrollTop,d-=e.left,h-=e.top}return{left:d,top:h,name:l}}function Zl(t,e,n){const{left:i,top:o,name:r}=t(e,n);return[r,n.clone().moveTo(i,o)]}function Xl({left:t,top:e}){const{scrollX:n,scrollY:i}=tr.window;return{left:t+n,top:e+i}}class td extends Ll{constructor(t,e,n){super(t);const i=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("panelPosition","auto"),this.focusTracker=new al,this.keystrokes=new Zc,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",t=>!t)]},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&("auto"===this.panelPosition?this.panelView.position=td._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const t=(t,e)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:t,southWest:e,northEast:n,northWest:i}=td.defaultPanelPositions;return"ltr"===this.locale.uiLanguageDirection?[t,e,n,i]:[e,t,i,n]}}td.defaultPanelPositions={southEast:t=>({top:t.bottom,left:t.left,name:"se"}),southWest:(t,e)=>({top:t.bottom,left:t.left-e.width+t.width,name:"sw"}),northEast:(t,e)=>({top:t.top-e.height,left:t.left,name:"ne"}),northWest:(t,e)=>({top:t.bottom-e.height,left:t.left-e.width+t.width,name:"nw"})},td._getOptimalPosition=Kl;n(26);class ed extends Ll{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}n(28);class nd extends Ll{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",t=>"ck-tooltip_"+t),e.if("text","ck-hidden",t=>!t.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}n(30);class id extends Ll{constructor(t){super(t);const e=this.bindTemplate,n=Kn();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new ed,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("isVisible","ck-hidden",t=>!t),e.to("isOn",t=>t?"ck-on":"ck-off"),e.if("withText","ck-button_with-text")],type:e.to("type",t=>t||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,t=>!t),"aria-pressed":e.to("isOn",t=>!!this.isToggleable&&String(t))},children:this.children,on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(t=>{this.isEnabled?this.fire("execute"):t.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView)}focus(){this.element.focus()}_createTooltipView(){const t=new nd;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new Ll,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_getTooltipString(t,e,n){return t?"string"==typeof t?t:(n&&(n=function(t){return go.isMac?_o(t).map(t=>po[t.toLowerCase()]||t).reduce((t,e)=>t.slice(-1)in mo?t+e:t+"+"+e):t}(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var od='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class rd extends id{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new ed;return t.content=od,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}n(32);class sd extends Ll{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new al,this.keystrokes=new Zc,this._focusCycler=new Wl({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class ad extends Ll{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class cd extends Ll{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}n(34);class ld extends id{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Ll;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}function dd({emitter:t,activator:e,callback:n,contextElements:i}){t.listenTo(document,"mousedown",(t,{target:o})=>{if(e()){for(const t of i)if(t.contains(o))return;n()}})}n(36),n(38);function hd(t,e=rd){const n=new e(t),i=new Jl(t),o=new td(t,n,i);return n.bind("isEnabled").to(o),n instanceof rd?n.bind("isOn").to(o,"isOpen"):n.arrowView.bind("isOn").to(o,"isOpen"),function(t){(function(t){t.on("render",()=>{dd({emitter:t,activator:()=>t.isOpen,callback:()=>{t.isOpen=!1},contextElements:[t.element]})})})(t),function(t){t.on("execute",e=>{e.source instanceof ld||(t.isOpen=!1)})}(t),function(t){t.keystrokes.set("arrowdown",(e,n)=>{t.isOpen&&(t.panelView.focus(),n())}),t.keystrokes.set("arrowup",(e,n)=>{t.isOpen&&(t.panelView.focusLast(),n())})}(t)}(o),o}function ud(t,e){const n=t.locale,i=n.t,o=t.toolbarView=new md(n);o.set("ariaLabel",i("bo")),t.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(t=>o.items.add(t)),t.panelView.children.add(o),o.items.delegate("execute").to(t)}function fd(t,e){const n=t.locale,i=t.listView=new sd(n);i.items.bindTo(e).using(({type:t,model:e})=>{if("separator"===t)return new cd(n);if("button"===t||"switchbutton"===t){const i=new ad(n);let o;return(o="button"===t?new id(n):new ld(n)).bind(...Object.keys(e)).to(e),o.delegate("execute").to(i),i.children.add(o),i}}),t.panelView.children.add(i),i.items.delegate("execute").to(t)}var gd='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>\n';n(40);class md extends Ll{constructor(t,e){super(t);const n=this.bindTemplate,i=this.t;this.options=e||{},this.set("ariaLabel",i("bu")),this.items=this.createCollection(),this.focusTracker=new al,this.keystrokes=new Zc,this.set("class"),this.itemsView=new pd(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection(),this._focusCycler=new Wl({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar",n.to("class")],role:"toolbar","aria-label":n.to("ariaLabel")},children:this.children,on:{mousedown:function(t){return t.bindTemplate.to(e=>{e.target===t.element&&e.preventDefault()})}(this)}}),this._behavior=this.options.shouldGroupWhenFull?new wd(this):new bd(this)}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){t.map(t=>{"|"==t?this.items.add(new $l):e.has(t)?this.items.add(e.create(t)):console.warn(Object(Gn.a)("toolbarview-item-unavailable: The requested toolbar item is unavailable."),{name:t})})}}class pd extends Ll{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class bd{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(t=>t),t.focusables.bindTo(t.items).using(t=>t),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class wd{constructor(t){this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,t.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),t.children.on("add",this._updateFocusCycleableItems.bind(this)),t.children.on("remove",this._updateFocusCycleableItems.bind(this)),t.items.on("add",(t,e,n)=>{n>this.ungroupedItems.length?this.groupedItems.add(e,n-this.ungroupedItems.length):this.ungroupedItems.add(e,n),this._updateGrouping()}),t.items.on("remove",(t,e,n)=>{n>this.ungroupedItems.length?this.groupedItems.remove(e):this.ungroupedItems.remove(e),this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize()}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.disconnect()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new xs(t.lastChild),i=new xs(t);if(!this.cachedPadding){const n=tr.window.getComputedStyle(t),i="ltr"===e?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(n[i])}return"ltr"===e?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=function(t){return"function"==typeof tr.window.ResizeObserver?new tr.window.ResizeObserver(t):new Ql(t)}(([e])=>{t&&t===e.contentRect.width||(this._updateGrouping(),t=e.contentRect.width)}),this.resizeObserver.observe(this.viewElement),this._updateGrouping()}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new $l),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=hd(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition="ltr"===t.uiLanguageDirection?"sw":"se",ud(n,[]),n.buttonView.set({label:e("bv"),tooltip:!0,icon:gd}),n.toolbarView.items.bindTo(this.groupedItems).using(t=>t),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}n(42);class kd extends zl{constructor(t,e){super(t),this.stickyPanel=new ql(t),this.toolbar=new md(t,{shouldGroupWhenFull:!0}),this.editable=new Fl(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class _d extends tl{constructor(t,e){super(e),Wn(t)&&(this.sourceElement=t),this.data.processor=new ol,this.model.document.createRoot(),this.ui=new ml(this,new kd(this.locale,this.editing.view)),function(t){if(!W(t.updateSourceElement))throw new Gn.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.",t);const e=t.sourceElement;if(e&&"textarea"===e.tagName.toLowerCase()&&e.form){let n;const i=e.form,o=()=>t.updateSourceElement();W(i.submit)&&(n=i.submit,i.submit=(()=>{o(),n.apply(i)})),i.addEventListener("submit",o),t.on("destroy",()=>{i.removeEventListener("submit",o),n&&(i.submit=n)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(Wn(t)?t:null)).then(()=>{if(!Wn(t)&&e.initialData)throw new Gn.b("editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().",null);const n=e.initialData||function(t){return Wn(t)?function(t){return t instanceof HTMLTextAreaElement?t.value:t.innerHTML}(t):t}(t);return i.data.init(n)}).then(()=>i.fire("ready")).then(()=>i))})}}ci(_d,el),ci(_d,nl);class vd{constructor(t){this.editor=t}destroy(){this.stopListening()}}ci(vd,Fi);class yd{constructor(t){this.files=function(t){const e=t.files?Array.from(t.files):[],n=t.items?Array.from(t.items):[];if(e.length)return e;return n.filter(t=>"file"===t.kind).map(t=>t.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}}class xd extends Xr{constructor(t){super(t);const e=this.document;function n(t,n){n.preventDefault();const i=n.dropRange?[n.dropRange]:Array.from(e.selection.getRanges()),o=new Jn(e,"clipboardInput");e.fire(o,{dataTransfer:n.dataTransfer,targetRanges:i}),o.stop.called&&n.stopPropagation()}this.domEventType=["paste","copy","cut","drop","dragover"],this.listenTo(e,"paste",n,{priority:"low"}),this.listenTo(e,"drop",n,{priority:"low"})}onDomEvent(t){const e={dataTransfer:new yd(t.clipboardData?t.clipboardData:t.dataTransfer)};"drop"==t.type&&(e.dropRange=function(t,e){const n=e.target.ownerDocument,i=e.clientX,o=e.clientY;let r;n.caretRangeFromPoint&&n.caretRangeFromPoint(i,o)?r=n.caretRangeFromPoint(i,o):e.rangeParent&&((r=n.createRange()).setStart(e.rangeParent,e.rangeOffset),r.collapse(!0));return r?t.domConverter.domRangeToView(r):t.document.selection.getFirstRange()}(this.view,t)),this.fire(t.type,t,e)}}const Ad=["figcaption","li"];class Td extends vd{static get pluginName(){return"Clipboard"}init(){const t=this.editor,e=t.model.document,n=t.editing.view,i=n.document;function o(n,o){const r=o.dataTransfer;o.preventDefault();const s=t.data.toView(t.model.getSelectedContent(e.selection));i.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this._htmlDataProcessor=new ol,n.addObserver(xd),this.listenTo(i,"clipboardInput",e=>{t.isReadOnly&&e.stop()},{priority:"highest"}),this.listenTo(i,"clipboardInput",(t,e)=>{const i=e.dataTransfer;let o="";i.getData("text/html")?o=function(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1==e.length?" ":e)}(i.getData("text/html")):i.getData("text/plain")&&(o=function(t){return(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"</p><p>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).indexOf("</p><p>")>-1&&(t=`<p>${t}</p>`),t}(i.getData("text/plain"))),o=this._htmlDataProcessor.toView(o),this.fire("inputTransformation",{content:o,dataTransfer:i}),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(t,e)=>{if(!e.content.isEmpty){const t=this.editor.data,n=this.editor.model,i=t.toModel(e.content,"$clipboardHolder");if(0==i.childCount)return;n.insertContent(i)}},{priority:"low"}),this.listenTo(i,"copy",o,{priority:"low"}),this.listenTo(i,"cut",(e,n)=>{t.isReadOnly?n.preventDefault():o(e,n)},{priority:"low"}),this.listenTo(i,"clipboardOutput",(n,i)=>{i.content.isEmpty||(i.dataTransfer.setData("text/html",this._htmlDataProcessor.toData(i.content)),i.dataTransfer.setData("text/plain",function t(e){let n="";if(e.is("text")||e.is("textProxy"))n=e.data;else if(e.is("img")&&e.hasAttribute("alt"))n=e.getAttribute("alt");else{let i=null;for(const o of e.getChildren()){const e=t(o);i&&(i.is("containerElement")||o.is("containerElement"))&&(Ad.includes(i.name)||Ad.includes(o.name)?n+="\n":n+="\n\n"),n+=e,i=o}}return n}(i.content))),"cut"==i.method&&t.model.deleteContent(e.selection)},{priority:"low"})}}class Cd{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(t,e,n)=>{n?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),1==this._disableStack.size&&(this.on("set:isEnabled",Pd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),0==this._disableStack.size&&(this.off("set:isEnabled",Pd),this.refresh())}execute(){}destroy(){this.stopListening()}}function Pd(t){t.return=!1,t.stop()}function*Sd(t,e){for(const n of e)n&&t.getAttributeProperties(n[0]).copyOnEnter&&(yield n)}ci(Cd,Fi);class Md extends Cd{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n,i){const o=n.isCollapsed,r=n.getFirstRange(),s=r.start.parent,a=r.end.parent;if(i.isLimit(s)||i.isLimit(a))return void(o||s!=a||t.deleteContent(n));if(o){const t=Sd(e.model.schema,n.getAttributes());Ed(e,r.start),e.setSelectionAttribute(t)}else{const i=!(r.start.isAtStart&&r.end.isAtEnd),o=s==a;t.deleteContent(n,{leaveUnmerged:i}),i&&(o?Ed(e,n.focus):e.setSelection(a,0))}}(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function Ed(t,e){t.split(e),t.setSelection(e.parent.nextSibling,0)}class Id extends hr{constructor(t){super(t);const e=this.document;e.on("keydown",(t,n)=>{if(this.isEnabled&&n.keyCode==bo.enter){let i;e.once("enter",t=>i=t,{priority:"highest"}),e.fire("enter",new Zr(e,n.domEvent,{isSoft:n.shiftKey})),i&&i.stop.called&&t.stop()}})}observe(){}}class Nd extends vd{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(Id),t.commands.add("enter",new Md(t)),this.listenTo(n,"enter",(n,i)=>{i.preventDefault(),i.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class Od extends Cd{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n){const i=n.isCollapsed,o=n.getFirstRange(),r=o.start.parent,s=o.end.parent,a=r==s;if(i){const i=Sd(t.schema,n.getAttributes());Rd(e,o.end),e.removeSelectionAttribute(n.getAttributeKeys()),e.setSelectionAttribute(i)}else{const i=!(o.start.isAtStart&&o.end.isAtEnd);t.deleteContent(n,{leaveUnmerged:i}),a?Rd(e,n.focus):i&&e.setSelection(s,0)}}(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(t,e){if(e.rangeCount>1)return!1;const n=e.anchor;if(!n||!t.checkChild(n,"softBreak"))return!1;const i=e.getFirstRange(),o=i.start.parent,r=i.end.parent;if((Dd(o,t)||Dd(r,t))&&o!==r)return!1;return!0}(t.schema,e.selection)}}function Rd(t,e){const n=t.createElement("softBreak");t.insert(n,e),t.setSelection(n,"after")}function Dd(t,e){return!t.is("rootElement")&&(e.isLimit(t)||Dd(t.parent,e))}class Ld extends vd{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,i=t.editing.view,o=i.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(t,e)=>e.createEmptyElement("br")}),i.addObserver(Id),t.commands.add("shiftEnter",new Od(t)),this.listenTo(o,"enter",(e,n)=>{n.preventDefault(),n.isSoft&&(t.execute("shiftEnter"),i.scrollToTheSelection())},{priority:"low"})}}class jd{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=((t,e)=>{"transparent"!=e.type&&e!==this._batch&&this._reset(!0)}),this._selectionChangeCallback=(()=>{this._reset()}),this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class Vd extends Cd{constructor(t,e){super(t),this._buffer=new jd(t.model,e),this._batches=new WeakSet}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,i=t.text||"",o=i.length,r=t.range||n.selection.getFirstRange(),s=t.resultRange;e.enqueueChange(this._buffer.batch,t=>{const a=r.isCollapsed;this._buffer.lock(),e.deleteContent(e.createSelection(r)),i&&e.insertContent(t.createText(i,n.selection.getAttributes()),r.start),s?t.setSelection(s):a&&t.setSelection(r.start.getShiftedBy(o)),this._buffer.unlock(),this._buffer.input(o),this._batches.add(this._buffer.batch)})}}function zd(t){let e=null;const n=t.model,i=t.editing.view,o=t.commands.get("input");function r(t){const r=n.document,a=i.document.isComposing,c=e&&e.isEqual(r.selection);e=null,o.isEnabled&&(function(t){if(t.ctrlKey)return!0;return Bd.includes(t.keyCode)}(t)||r.selection.isCollapsed||a&&229===t.keyCode||!a&&229===t.keyCode&&c||s())}function s(){const t=o.buffer;t.lock(),n.enqueueChange(t.batch,()=>{n.deleteContent(n.document.selection)}),t.unlock()}go.isAndroid?i.document.on("beforeinput",(t,e)=>r(e),{priority:"lowest"}):i.document.on("keydown",(t,e)=>r(e),{priority:"lowest"}),i.document.on("compositionstart",function(){const t=n.document,e=1!==t.selection.rangeCount||t.selection.getFirstRange().isFlat;if(t.selection.isCollapsed||e)return;s()},{priority:"lowest"}),i.document.on("compositionend",()=>{e=n.createSelection(n.document.selection)},{priority:"lowest"})}const Bd=[wo("arrowUp"),wo("arrowRight"),wo("arrowDown"),wo("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let t=112;t<=135;t++)Bd.push(t);function Fd(t){if(t.newChildren.length-t.oldChildren.length!=1)return;const e=function(t,e){const n=[];let i,o=0;return t.forEach(t=>{"equal"==t?(r(),o++):"insert"==t?(s("insert")?i.values.push(e[o]):(r(),i={type:"insert",index:o,values:[e[o]]}),o++):s("delete")?i.howMany++:(r(),i={type:"delete",index:o,howMany:1})}),r(),n;function r(){i&&(n.push(i),i=null)}function s(t){return i&&i.type==t}}($o(t.oldChildren,t.newChildren,Ud),t.newChildren);if(e.length>1)return;const n=e[0];return n.values[0]&&n.values[0].is("text")?n:void 0}function Ud(t,e){return t&&t.is("text")&&e&&e.is("text")?t.data===e.data:t===e}class Hd{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(function(t){if(0==t.length)return!1;for(const e of t)if("children"===e.type&&!Fd(e))return!0;return!1}(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(t){const e=t.map(t=>t.node).reduce((t,e)=>t.getCommonAncestor(e,{includeSelf:!0}));if(!e)return;return e.getAncestors({includeSelf:!0,parentFirst:!0}).find(t=>t.is("containerElement")||t.is("rootElement"))}(t);if(!n)return;const i=this.editor.editing.view.domConverter.mapViewToDom(n),o=new or,r=this.editor.data.toModel(o.domToView(i)).getChild(0),s=this.editor.editing.mapper.toModelElement(n);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1];l&&l.is("softBreak")&&d&&!d.is("softBreak")&&a.pop();const h=this.editor.model.schema;if(!qd(a,h)||!qd(c,h))return;const u=a.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," "),f=c.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," ");if(f===u)return;const g=$o(f,u),{firstChangeAt:m,insertions:p,deletions:b}=Wd(g);let w=null;e&&(w=this.editing.mapper.toModelRange(e.getFirstRange()));const k=u.substr(m,p),_=this.editor.model.createRange(this.editor.model.createPositionAt(s,m),this.editor.model.createPositionAt(s,m+b));this.editor.execute("input",{text:k,range:_,resultRange:w})}_handleTextMutation(t,e){if("text"!=t.type)return;const n=t.newText.replace(/\u00A0/g," "),i=t.oldText.replace(/\u00A0/g," ");if(i===n)return;const o=$o(i,n),{firstChangeAt:r,insertions:s,deletions:a}=Wd(o);let c=null;e&&(c=this.editing.mapper.toModelRange(e.getFirstRange()));const l=this.editing.view.createPositionAt(t.node,r),d=this.editing.mapper.toModelPosition(l),h=this.editor.model.createRange(d,d.getShiftedBy(a)),u=n.substr(r,s);this.editor.execute("input",{text:u,range:h,resultRange:c})}_handleTextNodeInsertion(t){if("children"!=t.type)return;const e=Fd(t),n=this.editing.view.createPositionAt(t.node,e.index),i=this.editing.mapper.toModelPosition(n),o=e.values[0].data;this.editor.execute("input",{text:o.replace(/\u00A0/g," "),range:this.editor.model.createRange(i)})}}function qd(t,e){return t.every(t=>e.isInline(t))}function Wd(t){let e=null,n=null;for(let i=0;i<t.length;i++){"equal"!=t[i]&&(e=null===e?i:e,n=i)}let i=0,o=0;for(let r=e;r<=n;r++)"insert"!=t[r]&&i++,"delete"!=t[r]&&o++;return{insertions:o,deletions:i,firstChangeAt:e}}class Yd extends vd{static get pluginName(){return"Input"}init(){const t=this.editor,e=new Vd(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),zd(t),function(t){t.editing.view.document.on("mutations",(e,n,i)=>{new Hd(t).handle(n,i)})}(t)}isInput(t){return this.editor.commands.get("input")._batches.has(t)}}class $d extends Cd{constructor(t,e){super(t),this.direction=e,this._buffer=new jd(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,i=>{this._buffer.lock();const o=i.createSelection(t.selection||n.selection),r=o.isCollapsed;if(o.isCollapsed&&e.modifySelection(o,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(t.sequence||1))return void this._replaceEntireContentWithParagraph(i);if(o.isCollapsed)return;let s=0;o.getFirstRange().getMinimalFlatRanges().forEach(t=>{s+=eo(t.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(o,{doNotResetEntireContent:r}),this._buffer.input(s),i.setSelection(o),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(i)))return!1;if(!e.schema.checkChild(i,"paragraph"))return!1;const o=i.getChild(0);return!o||"paragraph"!==o.name}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n),o=t.createElement("paragraph");t.remove(t.createRangeIn(i)),t.insert(o,i),t.setSelection(o,0)}}class Gd extends hr{constructor(t){super(t);const e=t.document;let n=0;function i(t,n,i){let o;e.once("delete",t=>o=t,{priority:Number.POSITIVE_INFINITY}),e.fire("delete",new Zr(e,n,i)),o&&o.stop.called&&t.stop()}e.on("keyup",(t,e)=>{e.keyCode!=bo.delete&&e.keyCode!=bo.backspace||(n=0)}),e.on("keydown",(t,e)=>{const o={};if(e.keyCode==bo.delete)o.direction="forward",o.unit="character";else{if(e.keyCode!=bo.backspace)return;o.direction="backward",o.unit="codePoint"}const r=go.isMac?e.altKey:e.ctrlKey;o.unit=r?"word":o.unit,o.sequence=++n,i(t,e.domEvent,o)}),go.isAndroid&&e.on("beforeinput",(e,n)=>{if("deleteContentBackward"!=n.domEvent.inputType)return;const o={unit:"codepoint",direction:"backward",sequence:1},r=n.domTarget.ownerDocument.defaultView.getSelection();r.anchorNode==r.focusNode&&r.anchorOffset+1!=r.focusOffset&&(o.selectionToRemove=t.domConverter.domSelectionToView(r)),i(e,n.domEvent,o)})}observe(){}}class Qd extends vd{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document;if(e.addObserver(Gd),t.commands.add("forwardDelete",new $d(t,"forward")),t.commands.add("delete",new $d(t,"backward")),this.listenTo(n,"delete",(n,i)=>{const o={unit:i.unit,sequence:i.sequence};if(i.selectionToRemove){const e=t.model.createSelection(),n=[];for(const e of i.selectionToRemove.getRanges())n.push(t.editing.mapper.toModelRange(e));e.setTo(n),o.selection=e}t.execute("forward"==i.direction?"forwardDelete":"delete",o),i.preventDefault(),e.scrollToTheSelection()}),go.isAndroid){let t=null;this.listenTo(n,"delete",(e,n)=>{const i=n.domTarget.ownerDocument.defaultView.getSelection();t={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}},{priority:"lowest"}),this.listenTo(n,"keyup",(e,n)=>{if(t){const e=n.domTarget.ownerDocument.defaultView.getSelection();e.collapse(t.anchorNode,t.anchorOffset),e.extend(t.focusNode,t.focusOffset),t=null}})}}}class Jd extends vd{static get requires(){return[Yd,Qd]}static get pluginName(){return"Typing"}}class Kd extends Za{get type(){return"noop"}clone(){return new Kd(this.baseVersion)}getReversed(){return new Kd(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Zd=new Map;function Xd(t,e,n){let i=Zd.get(t);i||(i=new Map,Zd.set(t,i)),i.set(e,n)}function th(t){return[t]}function eh(t,e,n={}){const i=function(t,e){const n=Zd.get(t);return n&&n.has(e)?n.get(e):th}(t.constructor,e.constructor);try{return i(t=t.clone(),e,n)}catch(t){throw t}}function nh(t,e,n){t=t.slice(),e=e.slice();const i=new ih(n.document,n.useRelations,n.forceWeakRemove);i.setOriginalOperations(t),i.setOriginalOperations(e);const o=i.originalOperations;if(0==t.length||0==e.length)return{operationsA:t,operationsB:e,originalOperations:o};const r=new WeakMap;for(const e of t)r.set(e,0);const s={nextBaseVersionA:t[t.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:t.length,originalOperationsBCount:e.length};let a=0;for(;a<t.length;){const n=t[a],o=r.get(n);if(o==e.length){a++;continue}const s=e[o],c=eh(n,s,i.getContext(n,s,!0)),l=eh(s,n,i.getContext(s,n,!1));i.updateRelation(n,s),i.setOriginalOperations(c,n),i.setOriginalOperations(l,s);for(const t of c)r.set(t,o+l.length);t.splice(a,1,...c),e.splice(o,1,...l)}if(n.padWithNoOps){const n=t.length-s.originalOperationsACount,i=e.length-s.originalOperationsBCount;rh(t,i-n),rh(e,n-i)}return oh(t,s.nextBaseVersionB),oh(e,s.nextBaseVersionA),{operationsA:t,operationsB:e,originalOperations:o}}class ih{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const e of t)this.originalOperations.set(e,n||e)}updateRelation(t,e){switch(t.constructor){case dc:switch(e.constructor){case mc:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case dc:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case pc:switch(e.constructor){case mc:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case dc:(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))&&this._setRelation(t,e,"splitBefore")}break;case mc:switch(e.constructor){case mc:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case pc:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case uc:{const n=t.newRange;if(!n)return;switch(e.constructor){case dc:{const i=$s._createFromPositionAndShift(e.sourcePosition,e.howMany),o=i.containsPosition(n.start)||i.start.isEqual(n.start),r=i.containsPosition(n.end)||i.end.isEqual(n.end);!o&&!r||i.containsRange(n)||this._setRelation(t,e,{side:o?"left":"right",path:o?n.start.path.slice():n.end.path.slice()});break}case mc:{const i=n.start.isEqual(e.targetPosition),o=n.start.isEqual(e.deletionPosition),r=n.end.isEqual(e.deletionPosition),s=n.end.isEqual(e.sourcePosition);(i||o||r||s)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:o,wasEndBeforeMergedElement:r,wasInRightElement:s});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const o=this.originalOperations.get(t),r=this._relations.get(o);return r&&r.get(i)||null}_setRelation(t,e,n){const i=this.originalOperations.get(t),o=this.originalOperations.get(e);let r=this._relations.get(i);r||(r=new Map,this._relations.set(i,r)),r.set(o,n)}}function oh(t,e){for(const n of t)n.baseVersion=e++}function rh(t,e){for(let n=0;n<e;n++)t.push(new Kd(0))}function sh(t,e,n){const i=t.nodes.getNode(0).getAttribute(e);if(i==n)return null;const o=new $s(t.position,t.position.getShiftedBy(t.howMany));return new cc(o,e,i,n,0)}function ah(t,e){return null===t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)}function ch(t,e){const n=[];for(let i=0;i<t.length;i++){const o=t[i],r=new dc(o.start,o.end.offset-o.start.offset,e,0);n.push(r);for(let e=i+1;e<t.length;e++)t[e]=t[e]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return n}Xd(cc,cc,(t,e,n)=>{if(t.key===e.key){const i=t.range.getDifference(e.range).map(e=>new cc(e,t.key,t.oldValue,t.newValue,0)),o=t.range.getIntersection(e.range);return o&&n.aIsStrong&&i.push(new cc(o,e.key,e.newValue,t.newValue,0)),0==i.length?[new Kd(0)]:i}return[t]}),Xd(cc,hc,(t,e)=>{if(t.range.start.hasSameParentAs(e.position)&&t.range.containsPosition(e.position)){const n=t.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(e=>new cc(e,t.key,t.oldValue,t.newValue,t.baseVersion));if(e.shouldReceiveAttributes){const i=sh(e,t.key,t.oldValue);i&&n.unshift(i)}return n}return t.range=t.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[t]}),Xd(cc,mc,(t,e)=>{const n=[];t.range.start.hasSameParentAs(e.deletionPosition)&&(t.range.containsPosition(e.deletionPosition)||t.range.start.isEqual(e.deletionPosition))&&n.push($s._createFromPositionAndShift(e.graveyardPosition,1));const i=t.range._getTransformedByMergeOperation(e);return i.isCollapsed||n.push(i),n.map(e=>new cc(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Xd(cc,dc,(t,e)=>{return function(t,e){const n=$s._createFromPositionAndShift(e.sourcePosition,e.howMany);let i=null,o=[];n.containsRange(t,!0)?i=t:t.start.hasSameParentAs(n.start)?(o=t.getDifference(n),i=t.getIntersection(n)):o=[t];const r=[];for(let t of o){t=t._getTransformedByDeletion(e.sourcePosition,e.howMany);const n=e.getMovedRangeStart(),i=t.start.hasSameParentAs(n);t=t._getTransformedByInsertion(n,e.howMany,i),r.push(...t)}i&&r.push(i._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!1)[0]);return r}(t.range,e).map(e=>new cc(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Xd(cc,pc,(t,e)=>{if(t.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.range.end.offset++,[t];if(t.range.start.hasSameParentAs(e.splitPosition)&&t.range.containsPosition(e.splitPosition)){const n=t.clone();return n.range=new $s(e.moveTargetPosition.clone(),t.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),t.range.end=e.splitPosition.clone(),t.range.end.stickiness="toPrevious",[t,n]}return t.range=t.range._getTransformedBySplitOperation(e),[t]}),Xd(hc,cc,(t,e)=>{const n=[t];if(t.shouldReceiveAttributes&&t.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(t.position)){const i=sh(t,e.key,e.newValue);i&&n.push(i)}return n}),Xd(hc,hc,(t,e,n)=>t.position.isEqual(e.position)&&n.aIsStrong?[t]:(t.position=t.position._getTransformedByInsertOperation(e),[t])),Xd(hc,dc,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Xd(hc,pc,(t,e)=>(t.position=t.position._getTransformedBySplitOperation(e),[t])),Xd(hc,mc,(t,e)=>(t.position=t.position._getTransformedByMergeOperation(e),[t])),Xd(uc,hc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByInsertOperation(e)[0]),t.newRange&&(t.newRange=t.newRange._getTransformedByInsertOperation(e)[0]),[t])),Xd(uc,uc,(t,e,n)=>{if(t.name==e.name){if(!n.aIsStrong)return[new Kd(0)];t.oldRange=e.newRange?e.newRange.clone():null}return[t]}),Xd(uc,mc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByMergeOperation(e)),t.newRange&&(t.newRange=t.newRange._getTransformedByMergeOperation(e)),[t])),Xd(uc,dc,(t,e,n)=>{if(t.oldRange&&(t.oldRange=$s._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))),t.newRange){if(n.abRelation){const i=$s._createFromRanges(t.newRange._getTransformedByMoveOperation(e));if("left"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.start))return t.newRange.start.path=n.abRelation.path,t.newRange.end=i.end,[t];if("right"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.end))return t.newRange.start=i.start,t.newRange.end.path=n.abRelation.path,[t]}t.newRange=$s._createFromRanges(t.newRange._getTransformedByMoveOperation(e))}return[t]}),Xd(uc,pc,(t,e,n)=>{if(t.oldRange&&(t.oldRange=t.oldRange._getTransformedBySplitOperation(e)),t.newRange){if(n.abRelation){const i=t.newRange._getTransformedBySplitOperation(e);return t.newRange.start.isEqual(e.splitPosition)&&n.abRelation.wasStartBeforeMergedElement?t.newRange.start=Ys._createAt(e.insertionPosition):t.newRange.start.isEqual(e.splitPosition)&&!n.abRelation.wasInLeftElement&&(t.newRange.start=Ys._createAt(e.moveTargetPosition)),t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasInRightElement?t.newRange.end=Ys._createAt(e.moveTargetPosition):t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasEndBeforeMergedElement?t.newRange.end=Ys._createAt(e.insertionPosition):t.newRange.end=i.end,[t]}t.newRange=t.newRange._getTransformedBySplitOperation(e)}return[t]}),Xd(mc,hc,(t,e)=>(t.sourcePosition.hasSameParentAs(e.position)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByInsertOperation(e),t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e),[t])),Xd(mc,mc,(t,e,n)=>{if(t.sourcePosition.isEqual(e.sourcePosition)&&t.targetPosition.isEqual(e.targetPosition)){if(n.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),t.sourcePosition=new Ys(e.graveyardPosition.root,n),t.howMany=0,[t]}return[new Kd(0)]}if(t.sourcePosition.isEqual(e.sourcePosition)&&!t.targetPosition.isEqual(e.targetPosition)&&!n.bWasUndone&&"splitAtSource"!=n.abRelation){const i="$graveyard"==t.targetPosition.root.rootName,o="$graveyard"==e.targetPosition.root.rootName;if(o&&!i||!(i&&!o)&&n.aIsStrong){const n=e.targetPosition._getTransformedByMergeOperation(e),i=t.targetPosition._getTransformedByMergeOperation(e);return[new dc(n,t.howMany,i,0)]}return[new Kd(0)]}return t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMergeOperation(e),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),t.graveyardPosition.isEqual(e.graveyardPosition)&&n.aIsStrong||(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Xd(mc,dc,(t,e,n)=>{const i=$s._createFromPositionAndShift(e.sourcePosition,e.howMany);return"remove"==e.type&&!n.bWasUndone&&!n.forceWeakRemove&&t.deletionPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.sourcePosition)?[new Kd(0)]:(t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition.hasSameParentAs(e.sourcePosition)&&(t.howMany-=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMoveOperation(e),t.targetPosition=t.targetPosition._getTransformedByMoveOperation(e),t.graveyardPosition.isEqual(e.targetPosition)||(t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)),[t])}),Xd(mc,pc,(t,e,n)=>{if(e.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),t.deletionPosition.isEqual(e.graveyardPosition)&&(t.howMany=e.howMany)),t.targetPosition.isEqual(e.splitPosition)){const i=0!=e.howMany,o=e.graveyardPosition&&t.deletionPosition.isEqual(e.graveyardPosition);if(i||o||"mergeTargetNotMoved"==n.abRelation)return t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),[t]}if(t.sourcePosition.isEqual(e.splitPosition)){if("mergeSourceNotMoved"==n.abRelation)return t.howMany=0,t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t];if("mergeSameElement"==n.abRelation||t.sourcePosition.offset>0)return t.sourcePosition=e.moveTargetPosition.clone(),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}return t.sourcePosition.hasSameParentAs(e.splitPosition)&&(t.howMany=e.splitPosition.offset),t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}),Xd(dc,hc,(t,e)=>{const n=$s._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByInsertOperation(e,!1)[0];return t.sourcePosition=n.start,t.howMany=n.end.offset-n.start.offset,t.targetPosition.isEqual(e.position)||(t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e)),[t]}),Xd(dc,dc,(t,e,n)=>{const i=$s._createFromPositionAndShift(t.sourcePosition,t.howMany),o=$s._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=n.aIsStrong,a=!n.aIsStrong;if("insertBefore"==n.abRelation||"insertAfter"==n.baRelation?a=!0:"insertAfter"!=n.abRelation&&"insertBefore"!=n.baRelation||(a=!1),r=t.targetPosition.isEqual(e.targetPosition)&&a?t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):t.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ah(t,e)&&ah(e,t))return[e.getReversed()];if(i.containsPosition(e.targetPosition)&&i.containsRange(o,!0))return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ch([i],r);if(o.containsPosition(t.targetPosition)&&o.containsRange(i,!0))return i.start=i.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),i.end=i.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),ch([i],r);const c=li(t.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ch([i],r);"remove"!=t.type||"remove"==e.type||n.aWasUndone||n.forceWeakRemove?"remove"==t.type||"remove"!=e.type||n.bWasUndone||n.forceWeakRemove||(s=!1):s=!0;const l=[],d=i.getDifference(o);for(const t of d){t.start=t.start._getTransformedByDeletion(e.sourcePosition,e.howMany),t.end=t.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const n="same"==li(t.start.getParentPath(),e.getMovedRangeStart().getParentPath()),i=t._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,n);l.push(...i)}const h=i.getIntersection(o);return null!==h&&s&&(h.start=h.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),h.end=h.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),0===l.length?l.push(h):1==l.length?o.start.isBefore(i.start)||o.start.isEqual(i.start)?l.unshift(h):l.push(h):l.splice(1,0,h)),0===l.length?[new Kd(t.baseVersion)]:ch(l,r)}),Xd(dc,pc,(t,e,n)=>{let i=t.targetPosition.clone();t.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&"moveTargetAfter"!=n.abRelation||(i=t.targetPosition._getTransformedBySplitOperation(e));const o=$s._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.howMany++,t.targetPosition=i,[t];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let t=new $s(e.splitPosition,o.end);return t=t._getTransformedBySplitOperation(e),ch([new $s(o.start,e.splitPosition),t],i)}t.targetPosition.isEqual(e.splitPosition)&&"insertAtSource"==n.abRelation&&(i=e.moveTargetPosition),t.targetPosition.isEqual(e.insertionPosition)&&"insertBetween"==n.abRelation&&(i=t.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const i=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);t.howMany>1&&i&&!n.aWasUndone&&r.push($s._createFromPositionAndShift(e.insertionPosition,1))}return ch(r,i)}),Xd(dc,mc,(t,e,n)=>{const i=$s._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.deletionPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(e.sourcePosition))if("remove"!=t.type||n.forceWeakRemove){if(1==t.howMany)return n.bWasUndone?(t.sourcePosition=e.graveyardPosition.clone(),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]):[new Kd(0)]}else if(!n.aWasUndone){const n=[];let i=e.graveyardPosition.clone(),o=e.targetPosition._getTransformedByMergeOperation(e);t.howMany>1&&(n.push(new dc(t.sourcePosition,t.howMany-1,t.targetPosition,0)),i=i._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1),o=o._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1));const r=e.deletionPosition._getCombined(t.sourcePosition,t.targetPosition),s=new dc(i,1,r,0),a=s.getMovedRangeStart().path.slice();a.push(0);const c=new Ys(s.targetPosition.root,a);o=o._getTransformedByMove(i,r,1);const l=new dc(o,e.howMany,c,0);return n.push(s),n.push(l),n}const o=$s._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByMergeOperation(e);return t.sourcePosition=o.start,t.howMany=o.end.offset-o.start.offset,t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]}),Xd(fc,hc,(t,e)=>(t.position=t.position._getTransformedByInsertOperation(e),[t])),Xd(fc,mc,(t,e)=>t.position.isEqual(e.deletionPosition)?(t.position=e.graveyardPosition.clone(),t.position.stickiness="toNext",[t]):(t.position=t.position._getTransformedByMergeOperation(e),[t])),Xd(fc,dc,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Xd(fc,fc,(t,e,n)=>{if(t.position.isEqual(e.position)){if(!n.aIsStrong)return[new Kd(0)];t.oldName=e.newName}return[t]}),Xd(fc,pc,(t,e)=>{if("same"==li(t.position.path,e.splitPosition.getParentPath())&&!e.graveyardPosition){return[t,new fc(t.position.getShiftedBy(1),t.oldName,t.newName,0)]}return t.position=t.position._getTransformedBySplitOperation(e),[t]}),Xd(gc,gc,(t,e,n)=>{if(t.root===e.root&&t.key===e.key){if(!n.aIsStrong||t.newValue===e.newValue)return[new Kd(0)];t.oldValue=e.newValue}return[t]}),Xd(pc,hc,(t,e)=>(t.splitPosition.hasSameParentAs(e.position)&&t.splitPosition.offset<e.position.offset&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByInsertOperation(e),t.insertionPosition=pc.getInsertionPosition(t.splitPosition),[t])),Xd(pc,mc,(t,e,n)=>{if(!t.graveyardPosition&&!n.bWasUndone&&t.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new Ys(e.graveyardPosition.root,n),o=pc.getInsertionPosition(new Ys(e.graveyardPosition.root,n)),r=new pc(i,0,null,0);return r.insertionPosition=o,t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=pc.getInsertionPosition(t.splitPosition),t.graveyardPosition=r.insertionPosition.clone(),t.graveyardPosition.stickiness="toNext",[r,t]}return t.splitPosition.hasSameParentAs(e.deletionPosition)&&!t.splitPosition.isAfter(e.deletionPosition)&&t.howMany--,t.splitPosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=pc.getInsertionPosition(t.splitPosition),t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Xd(pc,dc,(t,e,n)=>{const i=$s._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.graveyardPosition){const o=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);if(!n.bWasUndone&&o){const n=t.splitPosition._getTransformedByMoveOperation(e),i=t.graveyardPosition._getTransformedByMoveOperation(e),o=i.path.slice();o.push(0);const r=new Ys(i.root,o);return[new dc(n,t.howMany,r,0)]}t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)}if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.splitPosition)){const n=e.howMany-(t.splitPosition.offset-e.sourcePosition.offset);return t.howMany-=n,t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany),t.splitPosition=e.sourcePosition.clone(),t.insertionPosition=pc.getInsertionPosition(t.splitPosition),[t]}return!t.splitPosition.isEqual(e.targetPosition)||"insertAtSource"!=n.baRelation&&"splitBefore"!=n.abRelation?(e.sourcePosition.isEqual(e.targetPosition)||(t.splitPosition.hasSameParentAs(e.sourcePosition)&&t.splitPosition.offset<=e.sourcePosition.offset&&(t.howMany-=e.howMany),t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany)),t.splitPosition.stickiness="toNone",t.splitPosition=t.splitPosition._getTransformedByMoveOperation(e),t.splitPosition.stickiness="toNext",t.graveyardPosition?t.insertionPosition=t.insertionPosition._getTransformedByMoveOperation(e):t.insertionPosition=pc.getInsertionPosition(t.splitPosition),[t]):(t.howMany+=e.howMany,t.splitPosition=t.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),t.insertionPosition=pc.getInsertionPosition(t.splitPosition),[t])}),Xd(pc,pc,(t,e,n)=>{if(t.splitPosition.isEqual(e.splitPosition)){if(!t.graveyardPosition&&!e.graveyardPosition)return[new Kd(0)];if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition))return[new Kd(0)];if("splitBefore"==n.abRelation)return t.howMany=0,t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e),[t]}if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition)){const i="$graveyard"==t.splitPosition.root.rootName,o="$graveyard"==e.splitPosition.root.rootName;if(o&&!i||!(i&&!o)&&n.aIsStrong){const n=[];return e.howMany&&n.push(new dc(e.moveTargetPosition,e.howMany,e.splitPosition,0)),t.howMany&&n.push(new dc(t.splitPosition,t.howMany,t.moveTargetPosition,0)),n}return[new Kd(0)]}if(t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e)),t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==n.abRelation)return t.howMany++,[t];if(e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==n.baRelation){const n=e.insertionPosition.path.slice();n.push(0);const i=new Ys(e.insertionPosition.root,n);return[t,new dc(t.insertionPosition,1,i,0)]}return t.splitPosition.hasSameParentAs(e.splitPosition)&&t.splitPosition.offset<e.splitPosition.offset&&(t.howMany-=e.howMany),t.splitPosition=t.splitPosition._getTransformedBySplitOperation(e),t.insertionPosition=pc.getInsertionPosition(t.splitPosition),[t]});class lh extends Cd{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const i=this.editor.model,o=i.document,r=[];for(const e of t){const t=dh(e,n).find(t=>t.start.root!=o.graveyard);t&&r.push(t)}r.length&&i.change(t=>{t.setSelection(r,{backward:e})})}_undo(t,e){const n=this.editor.model,i=n.document;this._createdBatches.add(e);const o=t.operations.slice().filter(t=>t.isDocumentOperation);o.reverse();for(const t of o){const o=t.baseVersion+1,r=Array.from(i.history.getOperations(o)),s=nh([t.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const o of s)e.addOperation(o),n.applyOperation(o),i.history.setOperationAsUndone(t,o)}}}function dh(t,e){const n=t.getTransformedByOperations(e);n.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<n.length;t++){const e=n[t-1],i=n[t];e.end.isTouching(i.start)&&(e.end=i.end,n.splice(t,1),t--)}return n}class hh extends lh{execute(t=null){const e=t?this._stack.findIndex(e=>e.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],i=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(i,()=>{this._undo(n.batch,i);const t=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,t),this.fire("revert",n.batch,i)}),this.refresh()}}class uh extends lh{execute(){const t=this._stack.pop(),e=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(e,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,i=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,i),this._undo(t.batch,e)}),this.refresh()}}class fh extends vd{static get pluginName(){return"UndoEditing"}constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new hh(t),this._redoCommand=new uh(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(t,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const i=n.batch,o=this._redoCommand._createdBatches.has(i),r=this._undoCommand._createdBatches.has(i);this._batchRegistry.has(i)||"transparent"==i.type&&!o&&!r||(o?this._undoCommand.addBatch(i):r||(this._undoCommand.addBatch(i),this._redoCommand.clearStack()),this._batchRegistry.add(i))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}var gh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',mh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class ph extends vd{init(){const t=this.editor,e=t.locale,n=t.t,i="ltr"==e.uiLanguageDirection?gh:mh,o="ltr"==e.uiLanguageDirection?mh:gh;this._addButton("undo",n("bp"),"CTRL+Z",i),this._addButton("redo",n("bq"),"CTRL+Y",o)}_addButton(t,e,n,i){const o=this.editor;o.ui.componentFactory.add(t,r=>{const s=o.commands.get(t),a=new id(r);return a.set({label:e,icon:i,keystroke:n,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>o.execute(t)),a})}}class bh extends vd{static get requires(){return[fh,ph]}static get pluginName(){return"Undo"}}class wh extends vd{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new oo({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if("string"!=typeof t)throw new Gn.b("pendingactions-add-invalid-message: The message must be a string.",this);const e=Object.create(Fi);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class kh{constructor(){const t=new window.FileReader;this._reader=t,this._data=void 0,this.set("loaded",0),t.onprogress=(t=>{this.loaded=t.loaded})}get error(){return this._reader.error}get data(){return this._data}read(t){const e=this._reader;return this.total=t.size,new Promise((n,i)=>{e.onload=(()=>{const t=e.result;this._data=t,n(t)}),e.onerror=(()=>{i("error")}),e.onabort=(()=>{i("aborted")}),this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}ci(kh,Fi);class _h extends vd{static get pluginName(){return"FileRepository"}static get requires(){return[wh]}init(){this.loaders=new oo,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return console.warn(Object(Gn.a)("filerepository-no-upload-adapter: Upload adapter is not defined.")),null;const e=new vh(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(t=>{this._loadersMap.set(t,e)}).catch(()=>{}),e.on("change:uploaded",()=>{let t=0;for(const e of this.loaders)t+=e.uploaded;this.uploaded=t}),e.on("change:uploadTotal",()=>{let t=0;for(const e of this.loaders)e.uploadTotal&&(t+=e.uploadTotal);this.uploadTotal=t}),e}destroyLoader(t){const e=t instanceof vh?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((t,n)=>{t===e&&this._loadersMap.delete(n)})}_updatePendingAction(){const t=this.editor.plugins.get(wh);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=t=>`${e("ba")} ${parseInt(t)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}ci(_h,Fi);class vh{constructor(t,e){this.id=Kn(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new kh,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if("idle"!=this.status)throw new Gn.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.",this);return this.status="reading",this.file.then(t=>this._reader.read(t)).then(t=>{if("reading"!==this.status)throw this.status;return this.status="idle",t}).catch(t=>{if("aborted"===t)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:t})}upload(){if("idle"!=this.status)throw new Gn.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{if("aborted"===this.status)throw"aborted";throw this.status="error",t})}abort(){const t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==t?this._reader.abort():"uploading"==t&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){const e={};return e.promise=new Promise((n,i)=>{e.rejecter=i,e.isFulfilled=!1,t.then(t=>{e.isFulfilled=!0,n(t)}).catch(t=>{e.isFulfilled=!0,i(t)})}),e}}ci(vh,Fi);const yh="ckCsrfToken",xh=40,Ah="abcdefghijklmnopqrstuvwxyz0123456789";function Th(){let t=function(t){t=t.toLowerCase();const e=document.cookie.split(";");for(const n of e){const e=n.split("="),i=decodeURIComponent(e[0].trim().toLowerCase());if(i===t)return decodeURIComponent(e[1])}return null}(yh);return t&&t.length==xh||(t=function(t){let e="";const n=new Uint8Array(t);window.crypto.getRandomValues(n);for(let t=0;t<n.length;t++){const i=Ah.charAt(n[t]%Ah.length);e+=Math.random()>.5?i.toUpperCase():i}return e}(xh),function(t,e){document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"}(yh,t)),t}class Ch{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return this.loader.file.then(t=>new Promise((e,n)=>{this._initRequest(),this._initListeners(e,n,t),this._sendRequest(t)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e,n){const i=this.xhr,o=this.loader,r=(0,this.t)("a")+` ${n.name}.`;i.addEventListener("error",()=>e(r)),i.addEventListener("abort",()=>e()),i.addEventListener("load",()=>{const n=i.response;if(!n||!n.uploaded)return e(n&&n.error&&n.error.message?n.error.message:r);t({default:n.url})}),i.upload&&i.upload.addEventListener("progress",t=>{t.lengthComputable&&(o.uploadTotal=t.total,o.uploaded=t.loaded)})}_sendRequest(t){const e=new FormData;e.append("upload",t),e.append("ckCsrfToken",Th()),this.xhr.send(e)}}class Ph{static get pluginName(){return"BlockAutoformatEditing"}constructor(t,e,n){let i,o=null;"function"==typeof n?i=n:(o=t.commands.get(n),i=(()=>{t.execute(n)})),t.model.document.on("change",(n,r)=>{if(o&&!o.isEnabled)return;if("transparent"==r.type)return;const s=Array.from(t.model.document.differ.getChanges()),a=s[0];if(1!=s.length||"insert"!==a.type||"$text"!=a.name||1!=a.length)return;const c=a.position.textNode||a.position.nodeAfter;if(!c.parent.is("paragraph"))return;const l=e.exec(c.data);l&&t.model.enqueueChange(t=>{const e=t.createPositionAt(c.parent,0),n=t.createPositionAt(c.parent,l[0].length),o=new oa(e,n);!1!==i({match:l})&&t.remove(o),o.detach()})})}}class Sh{static get pluginName(){return"InlineAutoformatEditing"}constructor(t,e,n){let i,o,r,s;e instanceof RegExp?i=e:r=e,"string"==typeof n?o=n:s=n,r=r||(t=>{let e;const n=[],o=[];for(;null!==(e=i.exec(t))&&!(e&&e.length<4);){let{index:t,1:i,2:r,3:s}=e;const a=i+r+s,c=[t+=e[0].length-a.length,t+i.length],l=[t+i.length+r.length,t+i.length+r.length+s.length];n.push(c),n.push(l),o.push([t+i.length,t+i.length+r.length])}return{remove:n,format:o}}),s=s||((e,n)=>{const i=t.model.schema.getValidRanges(n,o);for(const t of i)e.setAttribute(o,!0,t);e.removeSelectionAttribute(o)}),t.model.document.on("change",(e,n)=>{if("transparent"==n.type)return;const i=t.model,o=i.document.selection;if(!o.isCollapsed)return;const a=Array.from(i.document.differ.getChanges()),c=a[0];if(1!=a.length||"insert"!==c.type||"$text"!=c.name||1!=c.length)return;const l=o.focus,d=l.parent,{text:h,range:u}=function(t,e){let n=t.start;return{text:Array.from(t.getItems()).reduce((t,i)=>i.is("text")||i.is("textProxy")?t+i.data:(n=e.createPositionAfter(i),""),""),range:e.createRange(n,t.end)}}(i.createRange(i.createPositionAt(d,0),l),i),f=r(h),g=Mh(u.start,f.format,i),m=Mh(u.start,f.remove,i);g.length&&m.length&&i.enqueueChange(t=>{if(!1!==s(t,g))for(const e of m.reverse())t.remove(e)})})}}function Mh(t,e,n){return e.filter(t=>void 0!==t[0]&&void 0!==t[1]).map(e=>n.createRange(t.getShiftedBy(e[0]),t.getShiftedBy(e[1])))}function Eh(t,e){return(n,i)=>{if(!t.commands.get(e).isEnabled)return!1;const o=t.model.schema.getValidRanges(i,e);for(const t of o)n.setAttribute(e,!0,t);n.removeSelectionAttribute(e)}}class Ih extends Cd{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(n.isCollapsed)i?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const o=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of o)i?t.setAttribute(this.attributeKey,i,e):t.removeAttribute(this.attributeKey,e)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const t of n.getRanges())for(const n of t.getItems())if(e.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}const Nh="bold";class Oh extends vd{static get pluginName(){return"BoldEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:Nh}),t.model.schema.setAttributeProperties(Nh,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Nh,view:"strong",upcastAlso:["b",t=>{const e=t.getStyle("font-weight");return e?"bold"==e||Number(e)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(Nh,new Ih(t,Nh)),t.keystrokes.set("CTRL+B",Nh)}}var Rh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>';const Dh="bold";class Lh extends vd{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(Dh,n=>{const i=t.commands.get(Dh),o=new id(n);return o.set({label:e("q"),icon:Rh,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(Dh)),o})}}const jh="italic";class Vh extends vd{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:jh}),t.model.schema.setAttributeProperties(jh,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:jh,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(jh,new Ih(t,jh)),t.keystrokes.set("CTRL+I",jh)}}var zh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>';const Bh="italic";class Fh extends vd{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(Bh,n=>{const i=t.commands.get(Bh),o=new id(n);return o.set({label:e("z"),icon:zh,keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(Bh)),o})}}const Uh="underline";class Hh extends vd{static get pluginName(){return"UnderlineEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:Uh}),t.model.schema.setAttributeProperties(Uh,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Uh,view:"u",upcastAlso:{styles:{"text-decoration":"underline"}}}),t.commands.add(Uh,new Ih(t,Uh)),t.keystrokes.set("CTRL+U","underline")}}var qh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zM5.2 10V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>';const Wh="underline";class Yh extends vd{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(Wh,n=>{const i=t.commands.get(Wh),o=new id(n);return o.set({label:e("k"),icon:qh,keystroke:"CTRL+U",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute(Wh)),o})}}function $h(t){const e=t.next();return e.done?null:e.value}class Gh extends Cd{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,n=e.schema,i=e.document.selection,o=Array.from(i.getSelectedBlocks()),r=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(r){const e=o.filter(t=>Qh(t)||Kh(n,t));this._applyQuote(t,e)}else this._removeQuote(t,o.filter(Qh))})}_getValue(){const t=$h(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!Qh(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=$h(t.getSelectedBlocks());return!!n&&Kh(e,n)}_removeQuote(t,e){Jh(t,e).reverse().forEach(e=>{if(e.start.isAtStart&&e.end.isAtEnd)return void t.unwrap(e.start.parent);if(e.start.isAtStart){const n=t.createPositionBefore(e.start.parent);return void t.move(e,n)}e.end.isAtEnd||t.split(e.end);const n=t.createPositionAfter(e.end.parent);t.move(e,n)})}_applyQuote(t,e){const n=[];Jh(t,e).reverse().forEach(e=>{let i=Qh(e.start);i||(i=t.createElement("blockQuote"),t.wrap(e,i)),n.push(i)}),n.reverse().reduce((e,n)=>e.nextSibling==n?(t.merge(t.createPositionAfter(e)),e):n)}}function Qh(t){return"blockQuote"==t.parent.name?t.parent:null}function Jh(t,e){let n,i=0;const o=[];for(;i<e.length;){const r=e[i],s=e[i+1];n||(n=t.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(t.createRange(n,t.createPositionAfter(r))),n=null),i++}return o}function Kh(t,e){const n=t.checkChild(e.parent,"blockQuote"),i=t.checkChild(["$root","blockQuote"],e);return n&&i}class Zh extends vd{static get pluginName(){return"BlockQuoteEditing"}init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new Gh(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.addChildCheck((t,e)=>{if(t.endsWith("blockQuote")&&"blockQuote"==e.name)return!1}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(n=>{const i=t.model.document.differ.getChanges();for(const t of i)if("insert"==t.type){const i=t.position.nodeAfter;if(!i)continue;if(i.is("blockQuote")&&i.isEmpty)return n.remove(i),!0;if(i.is("blockQuote")&&!e.checkChild(t.position,i))return n.unwrap(i),!0;if(i.is("element")){const t=n.createRangeIn(i);for(const i of t.getItems())if(i.is("blockQuote")&&!e.checkChild(n.createPositionBefore(i),i))return n.unwrap(i),!0}}else if("remove"==t.type){const e=t.position.parent;if(e.is("blockQuote")&&e.isEmpty)return n.remove(e),!0}return!1})}afterInit(){const t=this.editor.commands.get("blockQuote");this.listenTo(this.editor.editing.view.document,"enter",(e,n)=>{const i=this.editor.model.document,o=i.selection.getLastPosition().parent;i.selection.isCollapsed&&o.isEmpty&&t.value&&(this.editor.execute("blockQuote"),this.editor.editing.view.scrollToTheSelection(),n.preventDefault(),e.stop())})}}var Xh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>';n(44);class tu extends vd{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const i=t.commands.get("blockQuote"),o=new id(n);return o.set({label:e("d"),icon:Xh,tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>t.execute("blockQuote")),o})}}const eu=/^data:(\S*?);base64,/;class nu{constructor(t,e,n){if(!t)throw new Gn.b("fileuploader-missing-file: File must be provided as the first argument",null);if(!e)throw new Gn.b("fileuploader-missing-token: Token must be provided as the second argument.",null);if(!n)throw new Gn.b("fileuploader-missing-api-address: Api address must be provided as the third argument.",null);this.file=function(t){if("string"!=typeof t)return!1;const e=t.match(eu);return!(!e||!e.length)}(t)?function(t,e=512){try{const n=t.match(eu)[1],i=atob(t.replace(eu,"")),o=[];for(let t=0;t<i.length;t+=e){const n=i.slice(t,t+e),r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);o.push(new Uint8Array(r))}return new Blob(o,{type:n})}catch(t){throw new Gn.b("fileuploader-decoding-image-data-error: Problem with decoding Base64 image data.",null)}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(e){return()=>t.fire("error",e)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",t=>{t.lengthComputable&&this.fire("progress",{total:t.total,uploaded:t.loaded})}),e.addEventListener("load",()=>{const t=e.status,n=e.response;if(t<200||t>299)return this.fire("error",n.message||n.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,i)=>{e.addEventListener("load",()=>{const t=e.status,o=e.response;return t<200||t>299?o.message?i(new Gn.b("fileuploader-uploading-data-failed: Uploading file failed.",this,{message:o.message})):i(o.error):n(o)}),e.addEventListener("error",()=>i(new Error("Network Error"))),e.addEventListener("abort",()=>i(new Error("Abort"))),e.send(t)})}}ci(nu,ei);const iu={refreshInterval:36e5,autoRefresh:!0};class ou{constructor(t,e=iu){if(!t)throw new Gn.b("token-missing-token-url: A `tokenUrl` must be provided as the first constructor argument.",this);this.set("value",e.initValue),this._refresh="function"==typeof t?t:()=>(function(t){return new Promise((e,n)=>{const i=new XMLHttpRequest;i.open("GET",t),i.addEventListener("load",()=>{const t=i.status,o=i.response;return t<200||t>299?n(new Gn.b("token-cannot-download-new-token: Cannot download new token from the provided url.",null)):e(o)}),i.addEventListener("error",()=>n(new Error("Network Error"))),i.addEventListener("abort",()=>n(new Error("Abort"))),i.send()})})(t),this._options=Object.assign({},iu,e)}init(){return new Promise((t,e)=>{this._options.autoRefresh&&this._startRefreshing(),this.value?t(this):this._refreshToken().then(t).catch(e)})}_refreshToken(){return this._refresh().then(t=>this.set("value",t)).then(()=>this)}destroy(){this._stopRefreshing()}_startRefreshing(){this._refreshInterval=setInterval(()=>this._refreshToken(),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(t,e=iu){return new ou(t,e).init()}}ci(ou,Fi);var ru=ou;class su extends vd{static get pluginName(){return"CloudServices"}init(){const t=this.editor.config.get("cloudServices")||{};for(const e in t)this[e]=t[e];if(this.tokenUrl)return this.token=new su.Token(this.tokenUrl),this.token.init();this.token=null}}su.Token=ru;class au extends vd{static get requires(){return[_h,su]}init(){const t=this.editor,e=t.plugins.get(su),n=e.token,i=e.uploadUrl;n&&(this._uploadGateway=new au._UploadGateway(n,i),t.plugins.get(_h).createUploadAdapter=(t=>new cu(this._uploadGateway,t)))}}class cu{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.loader.file.then(t=>(this.fileUploader=this.uploadGateway.upload(t),this.fileUploader.on("progress",(t,e)=>{this.loader.uploadTotal=e.total,this.loader.uploaded=e.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}au._UploadGateway=class{constructor(t,e){if(!t)throw new Gn.b("uploadgateway-missing-token: Token must be provided.",null);if(!e)throw new Gn.b("uploadgateway-missing-api-address: Api address must be provided.",null);this._token=t,this._apiAddress=e}upload(t){return new nu(t,this._token,this._apiAddress)}};class lu extends hr{constructor(t){super(t),this._observedElements=new Set}observe(t,e){this.document.getRoot(e).on("change:children",(e,n)=>{this.view.once("render",()=>this._updateObservedElements(t,n))})}_updateObservedElements(t,e){if(!e.is("element")||e.is("attributeElement"))return;const n=this.view.domConverter.mapViewToDom(e);if(n){for(const t of n.querySelectorAll("img"))this._observedElements.has(t)||(this.listenTo(t,"load",(t,e)=>this._fireEvents(e)),this._observedElements.add(t));for(const e of this._observedElements)t.contains(e)||(this.stopListening(e),this._observedElements.delete(e))}}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}destroy(){this._observedElements.clear(),super.destroy()}}function du(t){return n=>{n.on(`attribute:${t}:image`,e)};function e(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=n.mapper.toViewElement(e.item).getChild(0);null!==e.attributeNewValue?i.setAttribute(e.attributeKey,e.attributeNewValue,o):i.removeAttribute(e.attributeKey,o)}}class hu{constructor(){this._stack=[]}add(t,e){const n=this._stack,i=n[0];this._insertDescriptor(t);const o=n[0];i===o||uu(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}remove(t,e){const n=this._stack,i=n[0];this._removeDescriptor(t);const o=n[0];i===o||uu(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t.id);if(uu(t,e[n]))return;n>-1&&e.splice(n,1);let i=0;for(;e[i]&&fu(e[i],t);)i++;e.splice(i,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t);n>-1&&e.splice(n,1)}}function uu(t,e){return t&&e&&t.priority==e.priority&&gu(t.classes)==gu(e.classes)}function fu(t,e){return t.priority>e.priority||!(t.priority<e.priority)&&gu(t.classes)>gu(e.classes)}function gu(t){return Array.isArray(t)?t.sort().join(","):t}ci(hu,ei);var mu='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>';const pu="ck-widget",bu="ck-widget_selected";function wu(t){return!!t.is("element")&&!!t.getCustomProperty("widget")}function ku(t,e,n={}){return go.isEdge||e.setAttribute("contenteditable","false",t),e.addClass(pu,t),e.setCustomProperty("widget",!0,t),t.getFillerOffset=xu,n.label&&function(t,e,n){n.setCustomProperty("widgetLabel",e,t)}(t,n.label,e),n.hasSelectionHandle&&function(t,e){const n=e.createUIElement("div",{class:"ck ck-widget__selection-handle"},function(t){const e=this.toDomElement(t),n=new ed;return n.set("content",mu),n.render(),e.appendChild(n.element),e});e.insert(e.createPositionAt(t,0),n),e.addClass(["ck-widget_with-selection-handle"],t)}(t,e),function(t,e,n,i){const o=new hu;o.on("change:top",(e,o)=>{o.oldDescriptor&&i(t,o.oldDescriptor,o.writer),o.newDescriptor&&n(t,o.newDescriptor,o.writer)}),e.setCustomProperty("addHighlight",(t,e,n)=>o.add(e,n),t),e.setCustomProperty("removeHighlight",(t,e,n)=>o.remove(e,n),t)}(t,e,(t,e,n)=>n.addClass(i(e.classes),t),(t,e,n)=>n.removeClass(i(e.classes),t)),t;function i(t){return Array.isArray(t)?t:[t]}}function _u(t){const e=t.getCustomProperty("widgetLabel");return e?"function"==typeof e?e():e:""}function vu(t,e){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],t),go.isEdge||(e.setAttribute("contenteditable",t.isReadOnly?"false":"true",t),t.on("change:isReadOnly",(n,i,o)=>{e.setAttribute("contenteditable",o?"false":"true",t)})),t.on("change:isFocused",(n,i,o)=>{o?e.addClass("ck-editor__nested-editable_focused",t):e.removeClass("ck-editor__nested-editable_focused",t)}),t}function yu(t,e){const n=t.getSelectedElement();if(n&&e.schema.isBlock(n))return e.createPositionAfter(n);const i=t.getSelectedBlocks().next().value;if(i){if(i.isEmpty)return e.createPositionAt(i,0);const n=e.createPositionAfter(i);return t.focus.isTouching(n)?n:e.createPositionBefore(i)}return t.focus}function xu(){return null}function Au(t){const e=t.getSelectedElement();return e&&function(t){return!!t.getCustomProperty("image")&&wu(t)}(e)?e:null}function Tu(t){return!!t&&t.is("image")}function Cu(t,e,n={}){const i=t.createElement("image",n),o=yu(e.document.selection,e);e.insertContent(i,o),i.parent&&t.setSelection(i,"on")}function Pu(t){const e=t.schema,n=t.document.selection;return function(t,e,n){const i=function(t,e){const n=yu(t,e).parent;if(n.isEmpty&&!n.is("$root"))return n.parent;return n}(t,n);return e.checkChild(i,"image")}(n,e,t)&&!function(t,e){const n=t.getSelectedElement();return n&&e.isObject(n)}(n,e)&&function(t){return[...t.focus.getAncestors()].every(t=>!t.is("image"))}(n)}class Su extends Cd{refresh(){this.isEnabled=Pu(this.editor.model)}execute(t){const e=this.editor.model;e.change(n=>{const i=Array.isArray(t.source)?t.source:[t.source];for(const t of i)Cu(n,e,{src:t})})}}class Mu extends vd{static get pluginName(){return"ImageEditing"}init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion;t.editing.view.addObserver(lu),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),i.for("dataDowncast").elementToElement({model:"image",view:(t,e)=>Eu(e)}),i.for("editingDowncast").elementToElement({model:"image",view:(t,e)=>(function(t,e,n){return e.setCustomProperty("image",!0,t),ku(t,e,{label:function(){const e=t.getChild(0).getAttribute("alt");return e?`${e} ${n}`:n}})})(Eu(e),e,n("g"))}),i.for("downcast").add(du("src")).add(du("alt")).add(function(){return e=>{e.on("attribute:srcset:image",t)};function t(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=n.mapper.toViewElement(e.item).getChild(0);if(null===e.attributeNewValue){const t=e.attributeOldValue;t.data&&(i.removeAttribute("srcset",o),i.removeAttribute("sizes",o),t.width&&i.removeAttribute("width",o))}else{const t=e.attributeNewValue;t.data&&(i.setAttribute("srcset",t.data,o),i.setAttribute("sizes","100vw",o),t.width&&i.setAttribute("width",t.width,o))}}}()),i.for("upcast").elementToElement({view:{name:"img",attributes:{src:!0}},model:(t,e)=>e.createElement("image",{src:t.getAttribute("src")})}).attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:t=>{const e={data:t.getAttribute("srcset")};return t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}}}).add(function(){return e=>{e.on("element:figure",t)};function t(t,e,n){if(!n.consumable.test(e.viewItem,{name:!0,classes:"image"}))return;const i=Array.from(e.viewItem.getChildren()).find(t=>t.is("img"));if(!i||!i.hasAttribute("src")||!n.consumable.test(i,{name:!0}))return;const o=n.convertItem(i,e.modelCursor),r=$h(o.modelRange.getItems());r&&(n.convertChildren(e.viewItem,n.writer.createPositionAt(r,0)),e.modelRange=o.modelRange,e.modelCursor=o.modelCursor)}}()),t.commands.add("imageInsert",new Su(t))}}function Eu(t){const e=t.createEmptyElement("img"),n=t.createContainerElement("figure",{class:"image"});return t.insert(t.createPositionAt(n,0),e),n}class Iu extends Xr{constructor(t){super(t),this.domEventType="mousedown"}onDomEvent(t){this.fire(t.type,t)}}n(46);const Nu=ko("Ctrl+A");class Ou extends vd{static get pluginName(){return"Widget"}init(){const t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,e,n)=>{this._clearPreviouslySelectedWidgets(n.writer);const i=n.writer,o=i.document.selection,r=o.getSelectedElement();let s=null;for(const t of o.getRanges())for(const e of t){const t=e.item;wu(t)&&!Ru(t,s)&&(i.addClass(bu,t),this._previouslySelected.add(t),s=t,t==r&&i.setSelection(o.getRanges(),{fake:!0,label:_u(r)}))}},{priority:"low"}),t.addObserver(Iu),this.listenTo(e,"mousedown",(...t)=>this._onMousedown(...t)),this.listenTo(e,"keydown",(...t)=>this._onKeydown(...t),{priority:"high"}),this.listenTo(e,"delete",(t,e)=>{this._handleDelete("forward"==e.direction)&&(e.preventDefault(),t.stop())},{priority:"high"})}_onMousedown(t,e){const n=this.editor,i=n.editing.view,o=i.document;let r=e.target;if(function(t){for(;t;){if(t.is("editableElement")&&!t.is("rootElement"))return!0;if(wu(t))return!1;t=t.parent}return!1}(r)){if(go.isSafari&&e.domEvent.detail>=3){const t=n.editing.mapper.toModelElement(r);this.editor.model.change(n=>{e.preventDefault(),n.setSelection(t,"in")})}return}if(!wu(r)&&!(r=r.findAncestor(wu)))return;e.preventDefault(),o.isFocused||i.focus();const s=n.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_onKeydown(t,e){const n=e.keyCode,i="ltr"===this.editor.locale.contentLanguageDirection,o=n==bo.arrowdown||n==bo[i?"arrowright":"arrowleft"];let r=!1;!function(t){return t==bo.arrowright||t==bo.arrowleft||t==bo.arrowup||t==bo.arrowdown}(n)?!function(t){return wo(t)==Nu}(e)?n===bo.enter&&(r=this._handleEnterKey(e.shiftKey)):r=this._selectAllNestedEditableContent()||this._selectAllContent():r=this._handleArrowKeys(o),r&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(t=>{let i=e.anchor.parent;for(;i.isEmpty;){const e=i;i=e.parent,t.remove(e)}this._setSelectionOverElement(n)}),!0):void 0}_handleArrowKeys(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=i.getSelectedElement();if(o&&n.isObject(o)){const o=t?i.getLastPosition():i.getFirstPosition(),r=n.getNearestSelectionRange(o,t?"forward":"backward");return r&&e.change(t=>{t.setSelection(r)}),!0}if(!i.isCollapsed)return;const r=this._getObjectElementNextToSelection(t);return r&&n.isObject(r)?(this._setSelectionOverElement(r),!0):void 0}_handleEnterKey(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();if(function(t,e){return t&&e.isObject(t)&&!e.isInline(t)}(n,e.schema))return e.change(i=>{let o=i.createPositionAt(n,t?"before":"after");const r=i.createElement("paragraph");if(e.schema.isBlock(n.parent)){const t=e.schema.findAllowedParent(o,r);o=i.split(o,t).position}i.insert(r,o),i.setSelection(r,"in")}),!0}_selectAllNestedEditableContent(){const t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);return e.getFirstRange().root!=n&&(t.change(t=>{t.setSelection(t.createRangeIn(n))}),!0)}_selectAllContent(){const t=this.editor.model,e=this.editor.editing,n=e.view.document.selection.getSelectedElement();if(n&&wu(n)){const i=e.mapper.toModelElement(n.parent);return t.change(t=>{t.setSelection(t.createRangeIn(i))}),!0}return!1}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=e.createSelection(i);e.modifySelection(o,{direction:t?"forward":"backward"});const r=t?o.focus.nodeBefore:o.focus.nodeAfter;return r&&n.isObject(r)?r:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass(bu,e);this._previouslySelected.clear()}}function Ru(t,e){return!!e&&Array.from(t.getAncestors()).includes(e)}class Du extends Cd{refresh(){const t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Tu(t),Tu(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(e=>{e.setAttribute("alt",t.newValue,n)})}}class Lu extends vd{static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new Du(this.editor))}}n(48);class ju extends Ll{constructor(t,e){super(t);const n=`ck-input-${Kn()}`,i=`ck-status-${Kn()}`;this.set("label"),this.set("value"),this.set("isReadOnly",!1),this.set("errorText",null),this.set("infoText",null),this.labelView=this._createLabelView(n),this.inputView=this._createInputView(e,n,i),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(t,e)=>t||e);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input",o.if("isReadOnly","ck-disabled")]},children:[this.labelView,this.inputView,this.statusView]})}_createLabelView(t){const e=new Vl(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createInputView(t,e,n){const i=new t(this.locale,n);return i.id=e,i.ariaDescribedById=n,i.bind("value").to(this),i.bind("isReadOnly").to(this),i.bind("hasError").to(this,"errorText",t=>!!t),i.on("input",()=>{this.errorText=null}),i}_createStatusView(t){const e=new Ll(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input__status",n.if("errorText","ck-labeled-input__status_error"),n.if("_statusText","ck-hidden",t=>!t)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}select(){this.inputView.select()}focus(){this.inputView.focus()}}n(50);class Vu extends Ll{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to("input")}})}render(){super.render();const t=t=>{this.element.value=t||0===t?t:""};t(this.value),this.on("change:value",(e,n,i)=>{t(i)})}select(){this.element.select()}focus(){this.element.focus()}}function zu({view:t}){t.listenTo(t.element,"submit",(e,n)=>{n.preventDefault(),t.fire("submit")},{useCapture:!0})}var Bu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',Fu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>';n(52);class Uu extends Ll{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new al,this.keystrokes=new Zc,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("br"),Bu,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("bs"),Fu,"ck-button-cancel","cancel"),this._focusables=new pl,this._focusCycler=new Wl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),zu({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,i){const o=new id(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createLabeledInputView(){const t=this.locale.t,e=new ju(this.locale,Vu);return e.label=t("cb"),e.inputView.placeholder=t("cb"),e}}n(54);const Hu=Ul("px"),qu=tr.document.body;class Wu extends Ll{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",t=>`ck-balloon-panel_${t}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",Hu),left:e.to("left",Hu)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=Wu.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast],limiter:qu,fitInViewport:!0},t),i=Wu._getOptimalPosition(n),o=parseInt(i.left),r=parseInt(i.top),s=i.name;Object.assign(this,{top:r,left:o,position:s})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=(()=>{this.isVisible?this._startPinning(t):this._stopPinning()}),this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=Yu(t.target),n=t.limiter?Yu(t.limiter):qu;this.listenTo(tr.document,"scroll",(i,o)=>{const r=o.target,s=e&&r.contains(e),a=n&&r.contains(n);!s&&!a&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(tr.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(tr.document,"scroll"),this.stopListening(tr.window,"resize")}}function Yu(t){return Wn(t)?t:_s(t)?t.commonAncestorContainer:"function"==typeof t?Yu(t()):null}function $u(t,e){return t.top-e.height-Wu.arrowVerticalOffset}function Gu(t){return t.bottom+Wu.arrowVerticalOffset}Wu.arrowHorizontalOffset=25,Wu.arrowVerticalOffset=10,Wu._getOptimalPosition=Kl,Wu.defaultPositions={northArrowSouth:(t,e)=>({top:$u(t,e),left:t.left+t.width/2-e.width/2,name:"arrow_s"}),northArrowSouthEast:(t,e)=>({top:$u(t,e),left:t.left+t.width/2-e.width+Wu.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(t,e)=>({top:$u(t,e),left:t.left+t.width/2-Wu.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouth:(t,e)=>({top:$u(t,e),left:t.left-e.width/2,name:"arrow_s"}),northWestArrowSouthWest:(t,e)=>({top:$u(t,e),left:t.left-Wu.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthEast:(t,e)=>({top:$u(t,e),left:t.left-e.width+Wu.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouth:(t,e)=>({top:$u(t,e),left:t.right-e.width/2,name:"arrow_s"}),northEastArrowSouthEast:(t,e)=>({top:$u(t,e),left:t.right-e.width+Wu.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(t,e)=>({top:$u(t,e),left:t.right-Wu.arrowHorizontalOffset,name:"arrow_sw"}),southArrowNorth:(t,e)=>({top:Gu(t),left:t.left+t.width/2-e.width/2,name:"arrow_n"}),southArrowNorthEast:(t,e)=>({top:Gu(t),left:t.left+t.width/2-e.width+Wu.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(t,e)=>({top:Gu(t),left:t.left+t.width/2-Wu.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorth:(t,e)=>({top:Gu(t),left:t.left-e.width/2,name:"arrow_n"}),southWestArrowNorthWest:(t,e)=>({top:Gu(t),left:t.left-Wu.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthEast:(t,e)=>({top:Gu(t),left:t.left-e.width+Wu.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorth:(t,e)=>({top:Gu(t),left:t.right-e.width/2,name:"arrow_n"}),southEastArrowNorthEast:(t,e)=>({top:Gu(t),left:t.right-e.width+Wu.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(t,e)=>({top:Gu(t),left:t.right-Wu.arrowHorizontalOffset,name:"arrow_nw"})};var Qu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z" /></svg>\n',Ju='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>\n';n(56),n(58);const Ku=Ul("px");class Zu extends vd{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=(()=>{const t=this.editor.editing.view,e=t.document.selection.editableElement;return e?t.domConverter.mapViewToDom(e.root):null}),this.set("visibleView",null),this.view=new Wu(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new Gn.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new Gn.b("contextualballoon-remove-view-not-exist: Cannot remove the configuration of a non-existent view.",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(1===e.size?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),1===e.size?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new Gn.b("contextualballoon-showstack-stack-not-exist: Cannot show a stack that does not exist.",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Xu(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(t,e)=>!e&&t>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(t,n)=>{if(n<2)return"";const i=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("by",[i,n])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new tf(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,e)=>{return!e&&t>=2?Math.min(t-1,2):0}),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}class Xu extends Ll{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new al,this.buttonPrevView=this._createButtonView(e("bz"),Qu),this.buttonNextView=this._createButtonView(e("ca"),Ju),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",t=>t?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new id(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class tf extends Ll{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",t=>t?"":"ck-hidden")],style:{top:n.to("top",Ku),left:n.to("left",Ku),width:n.to("width",Ku),height:n.to("height",Ku)}},children:this.content}),this.on("change:numberOfPanels",(t,e,n,i)=>{n>i?this._addPanels(n-i):this._removePanels(i-n),this.updatePosition()})}_addPanels(t){for(;t--;){const t=new Ll;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(t){for(;t--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new xs(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var ef='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>';function nf(t){const e=t.editing.view,n=Wu.defaultPositions;return{target:e.domConverter.viewToDom(e.document.selection.getSelectedElement()),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}class of extends vd{static get requires(){return[Zu]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const i=t.commands.get("imageTextAlternative"),o=new id(n);return o.set({label:e("bi"),icon:ef,tooltip:!0}),o.bind("isEnabled").to(i,"isEnabled"),this.listenTo(o,"execute",()=>this._showForm()),o})}_createForm(){const t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new Uu(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(t,e)=>{this._hideForm(!0),e()}),this.listenTo(t.ui,"update",()=>{Au(e.selection)?this._isVisible&&function(t){const e=t.plugins.get("ContextualBalloon");if(Au(t.editing.view.document.selection)){const n=nf(t);e.updatePosition(n)}}(t):this._hideForm(!0)}),dd({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._isInBalloon||this._balloon.add({view:this._form,position:nf(t)}),n.value=n.inputView.element.value=e.value||"",this._form.labeledInput.select()}_hideForm(t){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class rf extends vd{static get requires(){return[Lu,of]}static get pluginName(){return"ImageTextAlternative"}}n(60);class sf extends vd{static get requires(){return[Mu,Ou,rf]}static get pluginName(){return"Image"}}class af extends Ll{constructor(t){super(t),this.buttonView=new id(t),this._fileInputView=new cf(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class cf extends Ll{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}var lf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>';function df(t){const e=t.map(t=>t.replace("+","\\+"));return new RegExp(`^image\\/(${e.join("|")})$`)}function hf(t){return new Promise((e,n)=>{const i=t.getAttribute("src");fetch(i).then(t=>t.blob()).then(t=>{const o=function(t,e){return t.type?t.type:e.match(/data:(image\/\w+);base64/)?e.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}(t,i),r=function(t,e,n){try{return new File([t],e,{type:n})}catch(t){return null}}(t,`image.${o.replace("image/","")}`,o);r?e(r):n()}).catch(n)})}class uf extends vd{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageUpload",n=>{const i=new af(n),o=t.commands.get("imageUpload"),r=t.config.get("image.upload.types"),s=df(r);return i.set({acceptedType:r.map(t=>`image/${t}`).join(","),allowMultipleFiles:!0}),i.buttonView.set({label:e("h"),icon:lf,tooltip:!0}),i.buttonView.bind("isEnabled").to(o),i.on("done",(e,n)=>{const i=Array.from(n).filter(t=>s.test(t.type));i.length&&t.execute("imageUpload",{file:i})}),i})}}var ff='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>';n(62),n(64),n(66);class gf extends vd{constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent(ff)}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){const i=this.editor,o=e.item,r=o.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const s=i.plugins.get(_h),a=r?e.attributeNewValue:null,c=this.placeholder,l=i.editing.mapper.toViewElement(o),d=n.writer;if("reading"==a)return mf(l,d),void pf(c,l,d);if("uploading"==a){const t=s.loaders.get(r);return mf(l,d),void(t?(bf(l,d),function(t,e,n,i){const o=function(t){const e=t.createUIElement("div",{class:"ck-progress-bar"});return t.setCustomProperty("progressBar",!0,e),e}(e);e.insert(e.createPositionAt(t,"end"),o),n.on("change:uploadedPercent",(t,e,n)=>{i.change(t=>{t.setStyle("width",n+"%",o)})})}(l,d,t,i.editing.view),function(t,e,n){if(n.data){const i=t.getChild(0);e.setAttribute("src",n.data,i)}}(l,d,t)):pf(c,l,d))}"complete"==a&&s.loaders.get(r)&&!go.isEdge&&function(t,e,n){const i=e.createUIElement("div",{class:"ck-image-upload-complete-icon"});e.insert(e.createPositionAt(t,"end"),i),setTimeout(()=>{n.change(t=>t.remove(t.createRangeOn(i)))},3e3)}(l,d,i.editing.view),function(t,e){kf(t,e,"progressBar")}(l,d),bf(l,d),function(t,e){e.removeClass("ck-appear",t)}(l,d)}}function mf(t,e){t.hasClass("ck-appear")||e.addClass("ck-appear",t)}function pf(t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const i=e.getChild(0);i.getAttribute("src")!==t&&n.setAttribute("src",t,i),wf(e,"placeholder")||n.insert(n.createPositionAfter(i),function(t){const e=t.createUIElement("div",{class:"ck-upload-placeholder-loader"});return t.setCustomProperty("placeholder",!0,e),e}(n))}function bf(t,e){t.hasClass("ck-image-upload-placeholder")&&e.removeClass("ck-image-upload-placeholder",t),kf(t,e,"placeholder")}function wf(t,e){for(const n of t.getChildren())if(n.getCustomProperty(e))return n}function kf(t,e,n){const i=wf(t,n);i&&e.remove(e.createRangeOn(i))}class _f extends vd{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class vf{createDocumentFragment(t){return new Ao(t)}createElement(t,e,n){return new ki(t,e,n)}createText(t){return new fi(t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new ki(t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){T(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}}class yf extends Cd{refresh(){this.isEnabled=Pu(this.editor.model)}execute(t){const e=this.editor,n=e.model,i=e.plugins.get(_h);n.change(e=>{const o=Array.isArray(t.file)?t.file:[t.file];for(const t of o)xf(e,n,i,t)})}}function xf(t,e,n,i){const o=n.createLoader(i);o&&Cu(t,e,{uploadId:o.id})}class Af extends vd{static get requires(){return[_h,_f,Td]}static get pluginName(){return"ImageUploadEditing"}constructor(t){super(t),t.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}})}init(){const t=this.editor,e=t.model.document,n=t.model.schema,i=t.conversion,o=t.plugins.get(_h),r=df(t.config.get("image.upload.types"));n.extend("image",{allowAttributes:["uploadId","uploadStatus"]}),t.commands.add("imageUpload",new yf(t)),i.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(e,n)=>{if(function(t){return Array.from(t.types).includes("text/html")&&""!==t.getData("text/html")}(n.dataTransfer))return;const i=Array.from(n.dataTransfer.files).filter(t=>!!t&&r.test(t.type)),o=n.targetRanges.map(e=>t.editing.mapper.toModelRange(e));t.model.change(n=>{n.setSelection(o),i.length&&(e.stop(),t.model.enqueueChange("default",()=>{t.execute("imageUpload",{file:i})}))})}),this.listenTo(t.plugins.get(Td),"inputTransformation",(e,n)=>{const i=Array.from(t.editing.view.createRangeIn(n.content)).filter(t=>(function(t){return!(!t.is("element","img")||!t.getAttribute("src"))&&(t.getAttribute("src").match(/^data:image\/\w+;base64,/g)||t.getAttribute("src").match(/^blob:/g))})(t.item)&&!t.item.getAttribute("uploadProcessed")).map(t=>({promise:hf(t.item),imageElement:t.item}));if(!i.length)return;const r=new vf;for(const t of i){r.setAttribute("uploadProcessed",!0,t.imageElement);const e=o.createLoader(t.promise);e&&(r.setAttribute("src","",t.imageElement),r.setAttribute("uploadId",e.id,t.imageElement))}}),t.editing.view.document.on("dragover",(t,e)=>{e.preventDefault()}),e.on("change",()=>{const n=e.differ.getChanges({includeChangesInGraveyard:!0});for(const e of n)if("insert"==e.type&&"$text"!=e.name){const n=e.position.nodeAfter,i="$graveyard"==e.position.root.rootName;for(const e of Tf(t,n)){const t=e.getAttribute("uploadId");if(!t)continue;const n=o.loaders.get(t);n&&(i?n.abort():"idle"==n.status&&this._readAndUpload(n,e))}}})}_readAndUpload(t,e){const n=this.editor,i=n.model,o=n.locale.t,r=n.plugins.get(_h),s=n.plugins.get(_f);return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",e)}),t.read().then(()=>{const o=t.upload();if(go.isSafari){const t=n.editing.mapper.toViewElement(e).getChild(0);n.editing.view.once("render",()=>{if(!t.parent)return;const e=n.editing.view.domConverter.mapViewToDom(t.parent);if(!e)return;const i=e.style.display;e.style.display="none",e._ckHack=e.offsetHeight,e.style.display=i})}return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","uploading",e)}),o}).then(t=>{i.enqueueChange("transparent",n=>{n.setAttributes({uploadStatus:"complete",src:t.default},e),this._parseAndSetSrcsetAttributeOnImage(t,e,n)}),a()}).catch(n=>{if("error"!==t.status&&"aborted"!==t.status)throw n;"error"==t.status&&n&&s.showWarning(n,{title:o("as"),namespace:"upload"}),a(),i.enqueueChange("transparent",t=>{t.remove(e)})});function a(){i.enqueueChange("transparent",t=>{t.removeAttribute("uploadId",e),t.removeAttribute("uploadStatus",e)}),r.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let i=0;const o=Object.keys(t).filter(t=>{const e=parseInt(t,10);if(!isNaN(e))return i=Math.max(i,e),!0}).map(e=>`${t[e]} ${e}w`).join(", ");""!=o&&n.setAttribute("srcset",{data:o,width:i},e)}}function Tf(t,e){return Array.from(t.model.createRangeOn(e)).filter(t=>t.item.is("image")).map(t=>t.item)}class Cf extends vd{static get pluginName(){return"ImageUpload"}static get requires(){return[Af,uf,gf]}}class Pf extends Cd{refresh(){const t=this.editor.model,e=$h(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("paragraph"),this.isEnabled=!!e&&Sf(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(i=>{const o=(t.selection||n.selection).getSelectedBlocks();for(const t of o)!t.is("paragraph")&&Sf(t,e.schema)&&i.rename(t,"paragraph")})}}function Sf(t,e){return e.checkChild(t.parent,"paragraph")&&!e.isObject(t)}class Mf extends vd{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model,n=t.data;t.commands.add("paragraph",new Pf(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(t,e)=>Mf.paragraphLikeElements.has(t.name)?t.isEmpty?null:e.createElement("paragraph"):null,converterPriority:"low"}),n.upcastDispatcher.on("element",(t,e,n)=>{n.consumable.test(e.viewItem,{name:e.viewItem.name})&&If(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,Ef(e.viewItem,e.modelCursor,n))},{priority:"low"}),n.upcastDispatcher.on("text",(t,e,n)=>{e.modelRange||If(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,Ef(e.viewItem,e.modelCursor,n))},{priority:"lowest"}),e.document.registerPostFixer(t=>this._autoparagraphEmptyRoots(t)),t.data.on("ready",()=>{e.enqueueChange("transparent",t=>this._autoparagraphEmptyRoots(t))},{priority:"lowest"})}_autoparagraphEmptyRoots(t){const e=this.editor.model;for(const n of e.document.getRootNames()){const i=e.document.getRoot(n);if(i.isEmpty&&"$graveyard"!=i.rootName&&e.schema.checkChild(i,"paragraph"))return t.insertElement("paragraph",i),!0}}}function Ef(t,e,n){const i=n.writer.createElement("paragraph");return n.writer.insert(i,e),n.convertItem(t,n.writer.createPositionAt(i,0))}function If(t,e,n){const i=n.createContext(e);return!!n.checkChild(i,"paragraph")&&!!n.checkChild(i.push("paragraph"),t)}Mf.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td"]);class Nf extends Cd{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=$h(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>Of(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,i=t.value;e.change(t=>{const o=Array.from(n.selection.getSelectedBlocks()).filter(t=>Of(t,i,e.schema));for(const e of o)e.is(i)||t.rename(e,i)})}}function Of(t,e,n){return n.checkChild(t.parent,e)&&!n.isObject(t)}const Rf="paragraph";class Df extends vd{static get pluginName(){return"HeadingEditing"}constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[Mf]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const i of e)i.model!==Rf&&(t.model.schema.register(i.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new Nf(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(e,i)=>{const o=t.model.document.selection.getFirstPosition().parent;n.some(t=>o.is(t.model))&&!o.is(Rf)&&0===o.childCount&&i.writer.rename(o,Rf)})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:Zn.get("low")+1})}}class Lf{constructor(t,e){e&&Li(this,e),t&&this.set(t)}}ci(Lf,Fi);n(10);class jf extends vd{init(){const t=this.editor,e=t.t,n=function(t){const e=t.t,n={Paragraph:e("bb"),"Heading 1":e("bc"),"Heading 2":e("bd"),"Heading 3":e("be"),"Heading 4":e("bf"),"Heading 5":e("bg"),"Heading 6":e("bh")};return t.config.get("heading.options").map(t=>{const e=n[t.title];return e&&e!=t.title&&(t.title=e),t})}(t),i=e("e"),o=e("f");t.ui.componentFactory.add("heading",e=>{const r={},s=new oo,a=t.commands.get("heading"),c=t.commands.get("paragraph"),l=[a];for(const t of n){const e={type:"button",model:new Lf({label:t.title,class:t.class,withText:!0})};"paragraph"===t.model?(e.model.bind("isOn").to(c,"value"),e.model.set("commandName","paragraph"),l.push(c)):(e.model.bind("isOn").to(a,"value",e=>e===t.model),e.model.set({commandName:"heading",commandValue:t.model})),s.add(e),r[t.model]=t.title}const d=hd(e);return fd(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:o}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...t)=>t.some(t=>t)),d.buttonView.bind("label").to(a,"value",c,"value",(t,e)=>{const n=t||e&&"paragraph";return r[n]?r[n]:i}),this.listenTo(d,"execute",e=>{t.execute(e.source.commandName,e.source.commandValue?{value:e.source.commandValue}:void 0),t.editing.view.focus()}),d})}}function Vf(t){for(const e of t.getChildren())if(e&&e.is("caption"))return e;return null}function zf(t){const e=t.parent;return"figcaption"==t.name&&e&&"figure"==e.name&&e.hasClass("image")?{name:!0}:null}class Bf extends vd{static get pluginName(){return"ImageCaptionEditing"}init(){const t=this.editor,e=t.editing.view,n=t.model.schema,i=t.data,o=t.editing,r=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(t=>this._insertMissingModelCaptionElement(t)),t.conversion.for("upcast").elementToElement({view:zf,model:"caption"});i.downcastDispatcher.on("insert:caption",Ff(t=>t.createContainerElement("figcaption"),!1));const s=function(t,e){return n=>{const i=n.createEditableElement("figcaption");return n.setCustomProperty("imageCaption",!0,i),dl({view:t,element:i,text:e}),vu(i,n)}}(e,r("at"));o.downcastDispatcher.on("insert:caption",Ff(s)),o.downcastDispatcher.on("insert",this._fixCaptionVisibility(t=>t.item),{priority:"high"}),o.downcastDispatcher.on("remove",this._fixCaptionVisibility(t=>t.position.parent),{priority:"high"}),e.document.registerPostFixer(t=>this._updateCaptionVisibility(t))}_updateCaptionVisibility(t){const e=this.editor.editing.mapper,n=this._lastSelectedCaption;let i;const o=this.editor.model.document.selection,r=o.getSelectedElement();if(r&&r.is("image")){const t=Vf(r);i=e.toViewElement(t)}const s=Uf(o.getFirstPosition().parent);if(s&&(i=e.toViewElement(s)),i)return n?n===i?qf(i,t):(Hf(n,t),this._lastSelectedCaption=i,qf(i,t)):(this._lastSelectedCaption=i,qf(i,t));if(n){const e=Hf(n,t);return this._lastSelectedCaption=null,e}return!1}_fixCaptionVisibility(t){return(e,n,i)=>{const o=Uf(t(n)),r=this.editor.editing.mapper,s=i.writer;if(o){const t=r.toViewElement(o);t&&(o.childCount?s.removeClass("ck-hidden",t):s.addClass("ck-hidden",t))}}}_insertMissingModelCaptionElement(t){const e=this.editor.model,n=e.document.differ.getChanges(),i=[];for(const t of n)if("insert"==t.type&&"$text"!=t.name){const n=t.position.nodeAfter;if(n.is("image")&&!Vf(n)&&i.push(n),!n.is("image")&&n.childCount)for(const t of e.createRangeIn(n).getItems())t.is("image")&&!Vf(t)&&i.push(t)}for(const e of i)t.appendElement("caption",e);return!!i.length}}function Ff(t,e=!0){return(n,i,o)=>{const r=i.item;if((r.childCount||e)&&Tu(r.parent)){if(!o.consumable.consume(i.item,"insert"))return;const e=o.mapper.toViewElement(i.range.start.parent),n=t(o.writer),s=o.writer;r.childCount||s.addClass("ck-hidden",n),function(t,e,n,i){const o=i.writer.createPositionAt(n,"end");i.writer.insert(o,t),i.mapper.bindElements(e,t)}(n,i.item,e,o)}}}function Uf(t){const e=t.getAncestors({includeSelf:!0}).find(t=>"caption"==t.name);return e&&e.parent&&"image"==e.parent.name?e:null}function Hf(t,e){return!t.childCount&&!t.hasClass("ck-hidden")&&(e.addClass("ck-hidden",t),!0)}function qf(t,e){return!!t.hasClass("ck-hidden")&&(e.removeClass("ck-hidden",t),!0)}n(69);class Wf extends Cd{constructor(t,e){super(t),this.defaultStyle=!1,this.styles=e.reduce((t,e)=>(t[e.name]=e,e.isDefault&&(this.defaultStyle=e.name),t),{})}refresh(){const t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=Tu(t),t)if(t.hasAttribute("imageStyle")){const e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this.defaultStyle;else this.value=!1}execute(t){const e=t.value,n=this.editor.model,i=n.document.selection.getSelectedElement();n.change(t=>{this.styles[e].isDefault?t.removeAttribute("imageStyle",i):t.setAttribute("imageStyle",e,i)})}}function Yf(t,e){for(const n of e)if(n.name===t)return n}var $f='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',Gf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',Qf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',Jf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>';const Kf={full:{name:"full",title:"Full size image",icon:$f,isDefault:!0},side:{name:"side",title:"Side image",icon:Jf,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:Gf,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:Qf,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:Jf,className:"image-style-align-right"}},Zf={full:$f,left:Gf,right:Jf,center:Qf};function Xf(t=[]){return t.map(tg)}function tg(t){if("string"==typeof t){const e=t;Kf[e]?t=Object.assign({},Kf[e]):(console.warn(Object(Gn.a)("image-style-not-found: There is no such image style of given name."),{name:e}),t={name:e})}else if(Kf[t.name]){const e=Kf[t.name],n=Object.assign({},t);for(const i in e)t.hasOwnProperty(i)||(n[i]=e[i]);t=n}return"string"==typeof t.icon&&Zf[t.icon]&&(t.icon=Zf[t.icon]),t}class eg extends vd{static get pluginName(){return"ImageStyleEditing"}init(){const t=this.editor,e=t.model.schema,n=t.data,i=t.editing;t.config.define("image.styles",["full","side"]);const o=Xf(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});const r=function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,e.name))return;const o=Yf(n.attributeNewValue,t),r=Yf(n.attributeOldValue,t),s=i.mapper.toViewElement(n.item),a=i.writer;r&&a.removeClass(r.className,s),o&&a.addClass(o.className,s)}}(o);i.downcastDispatcher.on("attribute:imageStyle:image",r),n.downcastDispatcher.on("attribute:imageStyle:image",r),n.upcastDispatcher.on("element:figure",function(t){const e=t.filter(t=>!t.isDefault);return(t,n,i)=>{if(!n.modelRange)return;const o=n.viewItem,r=$h(n.modelRange.getItems());if(i.schema.checkAttribute(r,"imageStyle"))for(const t of e)i.consumable.consume(o,{classes:t.className})&&i.writer.setAttribute("imageStyle",t.name,r)}}(o),{priority:"low"}),t.commands.add("imageStyle",new Wf(t,o))}}n(71);class ng extends vd{static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Full size image":t("l"),"Side image":t("m"),"Left aligned image":t("n"),"Centered image":t("o"),"Right aligned image":t("p")}}init(){const t=function(t,e){for(const n of t)e[n.title]&&(n.title=e[n.title]);return t}(Xf(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const e of t)this._createButton(e)}_createButton(t){const e=this.editor,n=`imageStyle:${t.name}`;e.ui.componentFactory.add(n,n=>{const i=e.commands.get("imageStyle"),o=new id(n);return o.set({label:t.title,icon:t.icon,tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(i,"isEnabled"),o.bind("isOn").to(i,"value",e=>e===t.name),this.listenTo(o,"execute",()=>e.execute("imageStyle",{value:t.name})),o})}}class ig extends vd{static get requires(){return[Zu]}static get pluginName(){return"WidgetToolbarRepository"}init(){const t=this.editor;if(t.plugins.has("BalloonToolbar")){const e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",e=>{(function(t){const e=t.getSelectedElement();return!(!e||!wu(e))})(t.editing.view.document.selection)&&e.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{ariaLabel:e,items:n,getRelatedElement:i,balloonClassName:o="ck-toolbar-container"}){const r=this.editor,s=r.t,a=new md(r.locale);if(a.ariaLabel=e||s("az"),this._toolbarDefinitions.has(t))throw new Gn.b("widget-toolbar-duplicated: Toolbar with the given id was already added.",this,{toolbarId:t});a.fillFromConfig(n,r.ui.componentFactory),this._toolbarDefinitions.set(t,{view:a,getRelatedElement:i,balloonClassName:o})}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(const i of this._toolbarDefinitions.values()){const o=i.getRelatedElement(this.editor.editing.view.document.selection);if(this.editor.ui.focusTracker.isFocused)if(o){const r=o.getAncestors().length;r>t&&(t=r,e=o,n=i)}else this._isToolbarInBalloon(i)&&this._hideToolbar(i);else this._isToolbarVisible(i)&&this._hideToolbar(i)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._balloon.remove(t.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(t,e){this._isToolbarVisible(t)?og(this.editor,e):this._isToolbarInBalloon(t)||(this._balloon.add({view:t.view,position:rg(this.editor,e),balloonClassName:t.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const t of this._toolbarDefinitions.values())if(this._isToolbarVisible(t)){const e=t.getRelatedElement(this.editor.editing.view.document.selection);og(this.editor,e)}}))}_isToolbarVisible(t){return this._balloon.visibleView===t.view}_isToolbarInBalloon(t){return this._balloon.hasView(t.view)}}function og(t,e){const n=t.plugins.get("ContextualBalloon"),i=rg(t,e);n.updatePosition(i)}function rg(t,e){const n=t.editing.view,i=Wu.defaultPositions;return{target:n.domConverter.mapViewToDom(e),positions:[i.northArrowSouth,i.northArrowSouthWest,i.northArrowSouthEast,i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast]}}class sg extends Cd{constructor(t){super(t),this._childCommands=[]}refresh(){}execute(...t){this._getFirstEnabledCommand().execute(t)}registerChildCommand(t){this._childCommands.push(t),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){return this._childCommands.find(t=>t.isEnabled)}}class ag extends vd{static get pluginName(){return"IndentEditing"}init(){const t=this.editor;t.commands.add("indent",new sg(t)),t.commands.add("outdent",new sg(t))}}var cg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5z"/><path d="M1.632 6.95L5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>\n',lg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5z"/><path d="M4.368 6.95L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>\n';class dg extends vd{static get pluginName(){return"IndentUI"}init(){const t=this.editor,e=t.locale,n=t.t,i="ltr"==e.uiLanguageDirection?cg:lg,o="ltr"==e.uiLanguageDirection?lg:cg;this._defineButton("indent",n("r"),i),this._defineButton("outdent",n("s"),o)}_defineButton(t,e,n){const i=this.editor;i.ui.componentFactory.add(t,o=>{const r=i.commands.get(t),s=new id(o);return s.set({label:e,icon:n,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>i.execute(t)),s})}}function hg(t,e,n){return n.createRange(ug(t,e,!0,n),ug(t,e,!1,n))}function ug(t,e,n,i){let o=t.textNode||(n?t.nodeBefore:t.nodeAfter),r=null;for(;o&&o.getAttribute("linkHref")==e;)r=o,o=n?o.previousSibling:o.nextSibling;return r?i.createPositionAt(r,n?"before":"after"):t}class fg extends Cd{constructor(t){super(t),this.manualDecorators=new oo}restoreManualDecoratorStates(){for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}refresh(){const t=this.editor.model,e=t.document;this.value=e.selection.getAttribute("linkHref");for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id);this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(t,e={}){const n=this.editor.model,i=n.document.selection,o=[],r=[];for(const t in e)e[t]?o.push(t):r.push(t);n.change(e=>{if(i.isCollapsed){const s=i.getFirstPosition();if(i.hasAttribute("linkHref")){const a=hg(s,i.getAttribute("linkHref"),n);e.setAttribute("linkHref",t,a),o.forEach(t=>{e.setAttribute(t,!0,a)}),r.forEach(t=>{e.removeAttribute(t,a)}),e.setSelection(a)}else if(""!==t){const r=js(i.getAttributes());r.set("linkHref",t),o.forEach(t=>{r.set(t,!0)});const a=e.createText(t,r);n.insertContent(a,s),e.setSelection(e.createRangeOn(a))}}else{const s=n.schema.getValidRanges(i.getRanges(),"linkHref");for(const n of s)e.setAttribute("linkHref",t,n),o.forEach(t=>{e.setAttribute(t,!0,n)}),r.forEach(t=>{e.removeAttribute(t,n)})}})}_getDecoratorStateFromModel(t){return this.editor.model.document.selection.getAttribute(t)||!1}}class gg extends Cd{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute("linkHref")}execute(){const t=this.editor,e=this.editor.model,n=e.document.selection,i=t.commands.get("link");e.change(t=>{const o=n.isCollapsed?[hg(n.getFirstPosition(),n.getAttribute("linkHref"),e)]:n.getRanges();for(const e of o)if(t.removeAttribute("linkHref",e),i)for(const n of i.manualDecorators)t.removeAttribute(n.id,e)})}}var mg=function(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var r=Array(o);++i<o;)r[i]=t[i+e];return r};var pg=function(t,e,n){var i=t.length;return n=void 0===n?i:n,!e&&n>=i?t:mg(t,e,n)},bg=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var wg=function(t){return bg.test(t)};var kg=function(t){return t.split("")},_g="[\\ud800-\\udfff]",vg="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",yg="\\ud83c[\\udffb-\\udfff]",xg="[^\\ud800-\\udfff]",Ag="(?:\\ud83c[\\udde6-\\uddff]){2}",Tg="[\\ud800-\\udbff][\\udc00-\\udfff]",Cg="(?:"+vg+"|"+yg+")"+"?",Pg="[\\ufe0e\\ufe0f]?"+Cg+("(?:\\u200d(?:"+[xg,Ag,Tg].join("|")+")[\\ufe0e\\ufe0f]?"+Cg+")*"),Sg="(?:"+[xg+vg+"?",vg,Ag,Tg,_g].join("|")+")",Mg=RegExp(yg+"(?="+yg+")|"+Sg+Pg,"g");var Eg=function(t){return t.match(Mg)||[]};var Ig=function(t){return wg(t)?Eg(t):kg(t)};var Ng=function(t,e){for(var n=-1,i=null==t?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o},Og=1/0,Rg=o?o.prototype:void 0,Dg=Rg?Rg.toString:void 0;var Lg=function t(e){if("string"==typeof e)return e;if(Wt(e))return Ng(e,t)+"";if(is(e))return Dg?Dg.call(e):"";var n=e+"";return"0"==n&&1/e==-Og?"-0":n};var jg=function(t){return null==t?"":Lg(t)};var Vg=function(t){return function(e){e=jg(e);var n=wg(e)?Ig(e):void 0,i=n?n[0]:e.charAt(0),o=n?pg(n,1).join(""):e.slice(1);return i[t]()+o}}("toUpperCase");const zg=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Bg=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;function Fg(t,e){const n=e.createAttributeElement("a",{href:t},{priority:5});return e.setCustomProperty("link",!0,n),n}function Ug(t){return function(t){return t.replace(zg,"").match(Bg)}(t=String(t))?t:"#"}class Hg{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(t){Array.isArray(t)?t.forEach(t=>this._definitions.add(t)):this._definitions.add(t)}getDispatcher(){return t=>{t.on("attribute:linkHref",(t,e,n)=>{if(!n.consumable.test(e.item,"attribute:linkHref"))return;const i=n.writer,o=i.document.selection;for(const t of this._definitions){const r=i.createAttributeElement("a",t.attributes,{priority:5});i.setCustomProperty("link",!0,r),t.callback(e.attributeNewValue)?e.item.is("selection")?i.wrap(o.getFirstRange(),r):i.wrap(n.mapper.toViewRange(e.range),r):i.unwrap(n.mapper.toViewRange(e.range),r)}},{priority:"high"})}}}class qg{constructor({id:t,label:e,attributes:n}){this.id=t,this.set("value"),this.label=e,this.attributes=n}}ci(qg,Fi);class Wg{constructor(t,e,n){this.model=t,this.attribute=n,this._modelSelection=t.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,e.listenTo(this._modelSelection,"change:range",(t,e)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!e.directChange&&Yg(this._modelSelection.getFirstPosition(),n)||this._restoreGravity())})}handleForwardMovement(t,e){const n=this.attribute;if(!(this._isGravityOverridden||t.isAtStart&&this._hasSelectionAttribute))return Qg(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._removeSelectionAttribute(),!0):$g(t,n)?(this._preventCaretMovement(e),this._overrideGravity(),!0):Gg(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._overrideGravity(),!0):void 0}handleBackwardMovement(t,e){const n=this.attribute;return this._isGravityOverridden?Qg(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(e),this._restoreGravity(),t.isAtStart&&this._removeSelectionAttribute(),!0):Qg(t,n)&&!this._hasSelectionAttribute?(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtEnd&&Gg(t,n)?this._hasSelectionAttribute?void(Jg(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(e),!0):void 0:void(Jg(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(t){t.preventDefault()}_removeSelectionAttribute(){this.model.change(t=>{t.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(t){const e=this.attribute;this.model.change(n=>{n.setSelectionAttribute(this.attribute,t.nodeBefore.getAttribute(e))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}function Yg(t,e){return $g(t,e)||Gg(t,e)}function $g(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);return!!i&&i.hasAttribute(e)&&(!o||n.getAttribute(e)!==i.getAttribute(e))}function Gg(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e),r=!!i&&i.hasAttribute(e);return o&&(!r||n.getAttribute(e)!==i.getAttribute(e))}function Qg(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);if(!!i&&i.hasAttribute(e)&&o)return i.getAttribute(e)!==n.getAttribute(e)}function Jg(t,e){return Yg(t.getShiftedBy(-1),e)}n(73);const Kg="ck-link_selected",Zg="automatic",Xg="manual",tm=/^(https?:)?\/\//;class em extends vd{static get pluginName(){return"LinkEditing"}constructor(t){super(t),t.config.define("link",{addTargetToExternalLinks:!1})}init(){const t=this.editor,e=t.locale;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:Fg}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(t,e)=>Fg(Ug(t),e)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:t=>t.getAttribute("href")}}),t.commands.add("link",new fg(t)),t.commands.add("unlink",new gg(t));const n=function(t,e){const n={"Open in a new tab":t("bw"),Downloadable:t("bx")};return e.forEach(t=>(t.label&&n[t.label]&&(t.label=n[t.label]),t)),e}(t.t,function(t){const e=[];if(t)for(const[n,i]of Object.entries(t)){const t=Object.assign({},i,{id:`link${Vg(n)}`});e.push(t)}return e}(t.config.get("link.decorators")));this._enableAutomaticDecorators(n.filter(t=>t.mode===Zg)),this._enableManualDecorators(n.filter(t=>t.mode===Xg)),function({view:t,model:e,emitter:n,attribute:i,locale:o}){const r=new Wg(e,n,i),s=e.document.selection;n.listenTo(t.document,"keydown",(t,e)=>{if(!s.isCollapsed)return;if(e.shiftKey||e.altKey||e.ctrlKey)return;const n=e.keyCode==bo.arrowright,i=e.keyCode==bo.arrowleft;if(!n&&!i)return;const a=s.getFirstPosition(),c=o.contentLanguageDirection;let l;(l="ltr"===c&&n||"rtl"===c&&i?r.handleForwardMovement(a,e):r.handleBackwardMovement(a,e))&&t.stop()},{priority:Zn.get("high")+1})}({view:t.editing.view,model:t.model,emitter:this,attribute:"linkHref",locale:e}),this._setupLinkHighlight()}_enableAutomaticDecorators(t){const e=this.editor,n=new Hg;e.config.get("link.addTargetToExternalLinks")&&n.add({id:"linkIsExternal",mode:Zg,callback:t=>tm.test(t),attributes:{target:"_blank",rel:"noopener noreferrer"}}),n.add(t),n.length&&e.conversion.for("downcast").add(n.getDispatcher())}_enableManualDecorators(t){if(!t.length)return;const e=this.editor,n=e.commands.get("link").manualDecorators;t.forEach(t=>{e.model.schema.extend("$text",{allowAttributes:t.id}),n.add(new qg(t)),e.conversion.for("downcast").attributeToElement({model:t.id,view:(e,i)=>{if(e){const e=n.get(t.id).attributes,o=i.createAttributeElement("a",e,{priority:5});return i.setCustomProperty("link",!0,o),o}}}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:n.get(t.id).attributes},model:{key:t.id}})})}_setupLinkHighlight(){const t=this.editor,e=t.editing.view,n=new Set;e.document.registerPostFixer(e=>{const i=t.model.document.selection;let o=!1;if(i.hasAttribute("linkHref")){const r=hg(i.getFirstPosition(),i.getAttribute("linkHref"),t.model),s=t.editing.mapper.toViewRange(r);for(const t of s.getItems())t.is("a")&&!t.hasClass(Kg)&&(e.addClass(Kg,t),n.add(t),o=!0)}return o}),t.conversion.for("editingDowncast").add(t=>{function i(){e.change(t=>{for(const e of n.values())t.removeClass(Kg,e),n.delete(e)})}t.on("insert",i,{priority:"highest"}),t.on("remove",i,{priority:"highest"}),t.on("attribute",i,{priority:"highest"}),t.on("selection",i,{priority:"highest"})})}}class nm extends Xr{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}n(75);class im extends Ll{constructor(t,e=[]){super(t);const n=t.t;this.focusTracker=new al,this.keystrokes=new Zc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("br"),Bu,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("bs"),Fu,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(e),this.children=this._createFormChildren(e),this._focusables=new pl,this._focusCycler=new Wl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const i=["ck","ck-link-form"];e.length&&i.push("ck-link-form_layout-vertical"),this.setTemplate({tag:"form",attributes:{class:i,tabindex:"-1"},children:this.children})}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((t,e)=>(t[e.name]=e.isOn,t),{})}render(){super.render(),zu({view:this}),[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const t=this.locale.t,e=new ju(this.locale,Vu);return e.label=t("bt"),e.inputView.placeholder="https://example.com",e}_createButton(t,e,n,i){const o=new id(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createManualDecoratorSwitches(t){const e=this.createCollection();for(const n of t){const t=new ld(this.locale);t.set({name:n.id,label:n.label,withText:!0}),t.bind("isOn").to(n,"value"),t.on("execute",()=>{n.set("value",!t.isOn)}),e.add(t)}return e}_createFormChildren(t){const e=this.createCollection();if(e.add(this.urlInputView),t.length){const t=new Ll;t.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(t=>({tag:"li",children:[t],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),e.add(t)}return e.add(this.saveButtonView),e.add(this.cancelButtonView),e}}var om='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',rm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>';n(77);class sm extends Ll{constructor(t){super(t);const e=t.t;this.focusTracker=new al,this.keystrokes=new Zc,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("bk"),om,"unlink"),this.editButtonView=this._createButton(e("bl"),rm,"edit"),this.set("href"),this._focusables=new pl,this._focusCycler=new Wl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const i=new id(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.delegate("execute").to(this,n),i}_createPreviewButton(){const t=new id(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("bm")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",t=>t&&Ug(t)),target:"_blank"}}),t.bind("label").to(this,"href",t=>t||n("bn")),t.bind("isEnabled").to(this,"href",t=>!!t),t.template.tag="a",t.template.eventListeners={},t}}var am='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>';const cm="Ctrl+K";class lm extends vd{static get requires(){return[Zu]}static get pluginName(){return"LinkUI"}init(){const t=this.editor;t.editing.view.addObserver(nm),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(Zu),this._createToolbarLinkButton(),this._enableUserBalloonInteractions()}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const t=this.editor,e=new sm(t.locale),n=t.commands.get("link"),i=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(i),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(t,e)=>{this._hideUI(),e()}),e.keystrokes.set(cm,(t,e)=>{this._addFormView(),e()}),e}_createFormView(){const t=this.editor,e=t.commands.get("link"),n=new im(t.locale,e.manualDecorators);return n.urlInputView.bind("value").to(e,"value"),n.urlInputView.bind("isReadOnly").to(e,"isEnabled",t=>!t),n.saveButtonView.bind("isEnabled").to(e),this.listenTo(n,"submit",()=>{t.execute("link",n.urlInputView.inputView.element.value,n.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(n,"cancel",()=>{this._closeFormView()}),n.keystrokes.set("Esc",(t,e)=>{this._closeFormView(),e()}),n}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(cm,(t,n)=>{n(),e.isEnabled&&this._showUI(!0)}),t.ui.componentFactory.add("link",t=>{const i=new id(t);return i.isEnabled=!0,i.label=n("ay"),i.icon=am,i.keystroke=cm,i.tooltip=!0,i.isToggleable=!0,i.bind("isEnabled").to(e,"isEnabled"),i.bind("isOn").to(e,"value",t=>!!t),this.listenTo(i,"execute",()=>this._showUI(!0)),i})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(t,e)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),e())},{priority:"high"}),this.editor.keystrokes.set("Esc",(t,e)=>{this._isUIVisible&&(this._hideUI(),e())}),dd({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||""}_closeFormView(){const t=this.editor.commands.get("link");t.restoreManualDecoratorStates(),void 0!==t.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus())}_showUI(t=!1){this.editor.commands.get("link").isEnabled&&(this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),t&&this._balloon.showStack("main")):(this._addActionsView(),t&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI())}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView)}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),i=r();const o=()=>{const t=this._getSelectedLinkElement(),e=r();n&&!t||!n&&e!==i?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=t,i=e};function r(){return e.selection.focus.getAncestors().reverse().find(t=>t.is("element"))}this.listenTo(t.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document,n=this._getSelectedLinkElement();return{target:n?t.domConverter.mapViewToDom(n):t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_getSelectedLinkElement(){const t=this.editor.editing.view,e=t.document.selection;if(e.isCollapsed)return dm(e.getFirstPosition());{const n=e.getFirstRange().getTrimmed(),i=dm(n.start),o=dm(n.end);return i&&i==o&&t.createRangeIn(i).getTrimmed().isEqual(n)?i:null}}}function dm(t){return t.getAncestors().find(t=>(function(t){return t.is("attributeElement")&&!!t.getCustomProperty("link")})(t))}class hm extends Cd{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks()).filter(e=>fm(e,t.schema)),i=!0===this.value;t.change(t=>{if(i){let e=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,o=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<i&&(i=t);const n=t-i;o.push({element:e,listIndent:n}),e=e.nextSibling}o=o.reverse();for(const e of o)t.setAttribute("listIndent",e.listIndent,e.element)}if(!i){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));um(n,!0,t=0===t?1:t),um(n,!1,t)}for(const e of n.reverse())i&&"listItem"==e.name?t.rename(e,"paragraph"):i||"listItem"==e.name?i||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"))})}_getValue(){const t=$h(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=$h(t.getSelectedBlocks());return!!n&&fm(n,e)}}function um(t,e,n){const i=e?t[0]:t[t.length-1];if(i.is("listItem")){let o=i[e?"previousSibling":"nextSibling"],r=i.getAttribute("listIndent");for(;o&&o.is("listItem")&&o.getAttribute("listIndent")>=n;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&t[e?"unshift":"push"](o),o=o[e?"previousSibling":"nextSibling"]}}function fm(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class gm extends Cd{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(t=>{const e=n[n.length-1];let i=e.nextSibling;for(;i&&"listItem"==i.name&&i.getAttribute("listIndent")>e.getAttribute("listIndent");)n.push(i),i=i.nextSibling;this._indentBy<0&&(n=n.reverse());for(const e of n){const n=e.getAttribute("listIndent")+this._indentBy;n<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",n,e)}})}_checkEnabled(){const t=$h(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let i=t.previousSibling;for(;i&&i.is("listItem")&&i.getAttribute("listIndent")>=e;){if(i.getAttribute("listIndent")==e)return i.getAttribute("listType")==n;i=i.previousSibling}return!1}return!0}}function mm(t,e){const n=e.mapper,i=e.writer,o="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=vm,e}(i),s=i.createContainerElement(o,null);return i.insert(i.createPositionAt(s,0),r),n.bindElements(t,r),r}function pm(t,e,n,i){const o=e.parent,r=n.mapper,s=n.writer;let a=r.toViewPosition(i.createPositionBefore(t));const c=km(t.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:t.getAttribute("listIndent")}),l=t.previousSibling;if(c&&c.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(t))}else a=l&&"listItem"==l.name?r.toViewPosition(i.createPositionAt(l,"end")):r.toViewPosition(i.createPositionBefore(t));if(a=wm(a),s.insert(a,o),l&&"listItem"==l.name){const t=r.toViewElement(l),n=s.createRange(s.createPositionAt(t,0),a).getWalker({ignoreElementEnd:!0});for(const t of n)if(t.item.is("li")){const i=s.breakContainer(s.createPositionBefore(t.item)),o=t.item.parent,r=s.createPositionAt(e,"end");bm(s,r.nodeBefore,r.nodeAfter),s.move(s.createRangeOn(o),r),n.position=i}}else{const n=o.nextSibling;if(n&&(n.is("ul")||n.is("ol"))){let i=null;for(const e of n.getChildren()){const n=r.toModelElement(e);if(!(n&&n.getAttribute("listIndent")>t.getAttribute("listIndent")))break;i=e}i&&(s.breakContainer(s.createPositionAfter(i)),s.move(s.createRangeOn(i.parent),s.createPositionAt(e,"end")))}}bm(s,o,o.nextSibling),bm(s,o.previousSibling,o)}function bm(t,e,n){return!e||!n||"ul"!=e.name&&"ol"!=e.name?null:e.name!=n.name||e.getAttribute("class")!==n.getAttribute("class")?null:t.mergeContainers(t.createPositionAfter(e))}function wm(t){return t.getLastMatchingPosition(t=>t.item.is("uiElement"))}function km(t,e){const n=!!e.sameIndent,i=!!e.smallerIndent,o=e.listIndent;let r=t;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(n&&o==t||i&&o>t)return r;r=r.previousSibling}return null}function _m(t,e,n,i){t.ui.componentFactory.add(e,o=>{const r=t.commands.get(e),s=new id(o);return s.set({label:n,icon:i,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>t.execute(e)),s})}function vm(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:xi.call(this)}function ym(t){return(e,n,i)=>{const o=i.consumable;if(!o.test(n.item,"insert")||!o.test(n.item,"attribute:listType")||!o.test(n.item,"attribute:listIndent"))return;o.consume(n.item,"insert"),o.consume(n.item,"attribute:listType"),o.consume(n.item,"attribute:listIndent");const r=n.item;pm(r,mm(r,i),i,t)}}function xm(t,e,n){if(!n.consumable.consume(e.item,"attribute:listType"))return;const i=n.mapper.toViewElement(e.item),o=n.writer;o.breakContainer(o.createPositionBefore(i)),o.breakContainer(o.createPositionAfter(i));const r=i.parent,s="numbered"==e.attributeNewValue?"ol":"ul";o.rename(s,r)}function Am(t,e,n){const i=n.mapper.toViewElement(e.item).parent,o=n.writer;bm(o,i,i.nextSibling),bm(o,i.previousSibling,i);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function Tm(t,e,n){if("listItem"!=e.item.name){let t=n.mapper.toViewPosition(e.range.start);const i=n.writer,o=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&"li"==(t=i.breakContainer(t)).parent.name;){const e=t,n=i.createPositionAt(t.parent,"end");if(!e.isEqual(n)){const t=i.remove(i.createRange(e,n));o.push(t)}t=i.createPositionAfter(t.parent)}if(o.length>0){for(let e=0;e<o.length;e++){const n=t.nodeBefore;if(t=i.insert(t,o[e]).end,e>0){const e=bm(i,n,n.nextSibling);e&&e.parent==n&&t.offset--}}bm(i,t.nodeBefore,t.nodeAfter)}}}function Cm(t,e,n){const i=n.mapper.toViewPosition(e.position),o=i.nodeBefore,r=i.nodeAfter;bm(n.writer,o,r)}function Pm(t,e,n){if(n.consumable.consume(e.viewItem,{name:!0})){const t=n.writer,i=t.createElement("listItem"),o=function(t){let e=0,n=t.parent;for(;n;){if(n.is("li"))e++;else{const t=n.previousSibling;t&&t.is("li")&&e++}n=n.parent}return e}(e.viewItem);t.setAttribute("listIndent",o,i);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";t.setAttribute("listType",r,i);const s=n.splitToAllowedParent(i,e.modelCursor);if(!s)return;t.insert(i,s.position);const a=function(t,e,n){const{writer:i,schema:o}=n;let r=i.createPositionAfter(t);for(const s of e)if("ul"==s.name||"ol"==s.name)r=n.convertItem(s,r).modelCursor;else{const e=n.convertItem(s,i.createPositionAt(t,"end")),a=e.modelRange.start.nodeAfter,c=a&&a.is("element")&&!o.checkChild(t,a.name);c&&(t=e.modelCursor.parent.is("listItem")?e.modelCursor.parent:Nm(e.modelCursor),r=i.createPositionAfter(t))}return r}(i,e.viewItem.getChildren(),n);e.modelRange=t.createRange(e.modelCursor,a),s.cursorParent?e.modelCursor=t.createPositionAt(s.cursorParent,0):e.modelCursor=e.modelRange.end}}function Sm(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t){!(e.is("li")||Rm(e))&&e._remove()}}}function Mm(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let n=!1,i=!0;for(const e of t)n&&!Rm(e)&&e._remove(),e.is("text")?(i&&(e._data=e.data.replace(/^\s+/,"")),e.nextSibling&&!Rm(e.nextSibling)||(e._data=e.data.replace(/\s+$/,""))):Rm(e)&&(n=!0),i=!1}}function Em(t){return(e,n)=>{if(n.isPhantom)return;const i=n.modelPosition.nodeBefore;if(i&&i.is("listItem")){const e=n.mapper.toViewElement(i),o=e.getAncestors().find(Rm),r=t.createPositionAt(e,0).getWalker();for(const t of r){if("elementStart"==t.type&&t.item.is("li")){n.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==o){n.viewPosition=t.nextPosition;break}}}}}function Im(t,[e,n]){let i,o=e.is("documentFragment")?e.getChild(0):e;if(i=n?this.createSelection(n):this.document.selection,o&&o.is("listItem")){const t=i.getFirstPosition();let e=null;if(t.parent.is("listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;o&&o.is("listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+t),o=o.nextSibling}}}function Nm(t){const e=new Hs({startPosition:t});let n;do{n=e.next()}while(!n.value.item.is("listItem"));return n.value.item}function Om(t,e,n,i,o,r){const s=km(e.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:t,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==t){const t=a.toViewElement(s).parent;d=c.createPositionAfter(t)}else{const t=r.createPositionAt(s,"end");d=a.toViewPosition(t)}else d=n;d=wm(d);for(const t of[...i.getChildren()])Rm(t)&&(d=c.move(c.createRangeOn(t),d).end,bm(c,t,t.nextSibling),bm(c,t.previousSibling,t))}function Rm(t){return t.is("ol")||t.is("ul")}class Dm extends vd{static get pluginName(){return"ListEditing"}static get requires(){return[Mf]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;t.model.document.registerPostFixer(e=>(function(t,e){const n=t.document.differ.getChanges(),i=new Map;let o=!1;for(const i of n)if("insert"==i.type&&"listItem"==i.name)r(i.position);else if("insert"==i.type&&"listItem"!=i.name){if("$text"!=i.name){const n=i.position.nodeAfter;n.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",n),o=!0),n.hasAttribute("listType")&&(e.removeAttribute("listType",n),o=!0);for(const e of Array.from(t.createRangeIn(n)).filter(t=>t.item.is("listItem")))r(e.previousPosition)}r(i.position.getShiftedBy(i.length))}else"remove"==i.type&&"listItem"==i.name?r(i.position):"attribute"==i.type&&"listIndent"==i.attributeKey?r(i.range.start):"attribute"==i.type&&"listType"==i.attributeKey&&r(i.range.start);for(const t of i.values())s(t),a(t);return o;function r(t){const e=t.nodeBefore;if(e&&e.is("listItem")){let n=e;if(i.has(n))return;for(;n.previousSibling&&n.previousSibling.is("listItem");)if(n=n.previousSibling,i.has(n))return;i.set(t.nodeBefore,n)}else{const e=t.nodeAfter;e&&e.is("listItem")&&i.set(e,e)}}function s(t){let n=0,i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(r>n){let s;null===i?(i=r-n,s=n):(i>r&&(i=r),s=r-i),e.setAttribute("listIndent",s,t),o=!0}else i=null,n=t.getAttribute("listIndent")+1;t=t.nextSibling}}function a(t){let n=[],i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(i&&i.getAttribute("listIndent")>r&&(n=n.slice(0,r+1)),0!=r)if(n[r]){const i=n[r];t.getAttribute("listType")!=i&&(e.setAttribute("listType",i,t),o=!0)}else n[r]=t.getAttribute("listType");i=t,t=t.nextSibling}}})(t.model,e)),n.mapper.registerViewToModelLength("li",Lm),e.mapper.registerViewToModelLength("li",Lm),n.mapper.on("modelToViewPosition",Em(n.view)),n.mapper.on("viewToModelPosition",function(t){return(e,n)=>{const i=n.viewPosition,o=i.parent,r=n.mapper;if("ul"==o.name||"ol"==o.name){if(i.isAtEnd){const e=r.toModelElement(i.nodeBefore),o=r.getModelLength(i.nodeBefore);n.modelPosition=t.createPositionBefore(e).getShiftedBy(o)}else{const e=r.toModelElement(i.nodeAfter);n.modelPosition=t.createPositionBefore(e)}e.stop()}else if("li"==o.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const s=r.toModelElement(o);let a=1,c=i.nodeBefore;for(;c&&Rm(c);)a+=r.getModelLength(c),c=c.previousSibling;n.modelPosition=t.createPositionBefore(s).getShiftedBy(a),e.stop()}}}(t.model)),e.mapper.on("modelToViewPosition",Em(n.view)),n.downcastDispatcher.on("insert",Tm,{priority:"high"}),n.downcastDispatcher.on("insert:listItem",ym(t.model)),e.downcastDispatcher.on("insert",Tm,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",ym(t.model)),n.downcastDispatcher.on("attribute:listType:listItem",xm,{priority:"high"}),n.downcastDispatcher.on("attribute:listType:listItem",Am,{priority:"low"}),n.downcastDispatcher.on("attribute:listIndent:listItem",function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,"attribute:listIndent"))return;const o=i.mapper.toViewElement(n.item),r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s);r.remove(c),a&&a.nextSibling&&bm(r,a,a.nextSibling),Om(n.attributeOldValue+1,n.range.start,c.start,o,i,t),pm(n.item,o,i,t);for(const t of n.item.getChildren())i.consumable.consume(t,"insert")}}(t.model)),n.downcastDispatcher.on("remove:listItem",function(t){return(e,n,i)=>{const o=i.mapper.toViewPosition(n.position).getLastMatchingPosition(t=>!t.item.is("li")).nodeAfter,r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s),l=r.remove(c);a&&a.nextSibling&&bm(r,a,a.nextSibling),Om(i.mapper.toModelElement(o).getAttribute("listIndent")+1,n.position,c.start,o,i,t);for(const t of r.createRangeIn(l).getItems())i.mapper.unbindViewElement(t);e.stop()}}(t.model)),n.downcastDispatcher.on("remove",Cm,{priority:"low"}),e.upcastDispatcher.on("element:ul",Sm,{priority:"high"}),e.upcastDispatcher.on("element:ol",Sm,{priority:"high"}),e.upcastDispatcher.on("element:li",Mm,{priority:"high"}),e.upcastDispatcher.on("element:li",Pm),t.model.on("insertContent",Im,{priority:"high"}),t.commands.add("numberedList",new hm(t,"numbered")),t.commands.add("bulletedList",new hm(t,"bulleted")),t.commands.add("indentList",new gm(t,"forward")),t.commands.add("outdentList",new gm(t,"backward"));const i=n.view.document;this.listenTo(i,"enter",(t,e)=>{const n=this.editor.model.document,i=n.selection.getLastPosition().parent;n.selection.isCollapsed&&"listItem"==i.name&&i.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),this.listenTo(i,"delete",(t,e)=>{if("backward"!==e.direction)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const i=n.getFirstPosition();if(!i.isAtStart)return;const o=i.parent;"listItem"===o.name&&(o.previousSibling&&"listItem"===o.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop()))},{priority:"high"});const o=t=>(e,n)=>{this.editor.commands.get(t).isEnabled&&(this.editor.execute(t),n())};t.keystrokes.set("Tab",o("indentList")),t.keystrokes.set("Shift+Tab",o("outdentList"))}afterInit(){const t=this.editor.commands,e=t.get("indent"),n=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),n&&n.registerChildCommand(t.get("outdentList"))}}function Lm(t){let e=1;for(const n of t.getChildren())if("ul"==n.name||"ol"==n.name)for(const t of n.getChildren())e+=Lm(t);return e}var jm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',Vm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>';class zm extends vd{init(){const t=this.editor.t;_m(this.editor,"numberedList",t("i"),jm),_m(this.editor,"bulletedList",t("j"),Vm)}}function Bm(t,e){return t=>{t.on("attribute:url:media",n)};function n(n,i,o){if(!o.consumable.consume(i.item,n.name))return;const r=i.attributeNewValue,s=o.writer,a=o.mapper.toViewElement(i.item);s.remove(s.createRangeIn(a));const c=t.getMediaViewElement(s,r,e);s.insert(s.createPositionAt(a,0),c)}}function Fm(t,e,n,i){const o=t.createContainerElement("figure",{class:"media"});return o.getFillerOffset=qm,t.insert(t.createPositionAt(o,0),e.getMediaViewElement(t,n,i)),o}function Um(t){const e=t.getSelectedElement();return e&&e.is("media")?e:null}function Hm(t,e,n){t.change(i=>{const o=i.createElement("media",{url:e});t.insertContent(o,n),i.setSelection(o,"on")})}function qm(){return null}class Wm extends Cd{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=e.getFirstPosition(),o=Um(e);let r=i.parent;r!=r.root&&(r=r.parent),this.value=o?o.getAttribute("url"):null,this.isEnabled=n.checkChild(r,"media")}execute(t){const e=this.editor.model,n=e.document.selection,i=Um(n);if(i)e.change(e=>{e.setAttribute("url",t,i)});else{const i=yu(n,e);Hm(e,t,i)}}}var Ym='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>';const $m="0 0 64 42";class Gm{constructor(t,e){const n=e.providers,i=e.extraProviders||[],o=new Set(e.removeProviders),r=n.concat(i).filter(t=>{const e=t.name;return e?!o.has(e):(console.warn(Object(Gn.a)("media-embed-no-provider-name: The configured media provider has no name and cannot be used."),{provider:t}),!1)});this.locale=t,this.providerDefinitions=r}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new Qm(this.locale);t=t.trim();for(const e of this.providerDefinitions){const n=e.html;let i=e.url;Array.isArray(i)||(i=[i]);for(const e of i){const i=this._getUrlMatches(t,e);if(i)return new Qm(this.locale,t,i,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let i=t.replace(/^https?:\/\//,"");return(n=i.match(e))?n:(n=(i=i.replace(/^www\./,"")).match(e))||null}}class Qm{constructor(t,e,n,i){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=i}getViewElement(t,e){const n={};if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");const i=this._getPreviewHtml(e);return t.createUIElement("div",n,function(t){const e=this.toDomElement(t);return e.innerHTML=i,e})}return this.url&&(n.url=this.url),t.createEmptyElement("oembed",n)}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const t=new nd,e=new ed;return t.text=this._t("Open media in new tab"),e.content=Ym,e.viewBox=$m,new wl({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}n(79);class Jm extends vd{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; ">'+`<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'}},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">'+`<iframe src="https://open.spotify.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'}},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://www.youtube.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'}},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://player.vimeo.com/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'}},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new Gm(t.locale,t.config.get("mediaEmbed"))}init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion,o=t.config.get("mediaEmbed.previewsInData"),r=this.registry;t.commands.add("mediaEmbed",new Wm(t)),e.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),i.for("dataDowncast").elementToElement({model:"media",view:(t,e)=>{const n=t.getAttribute("url");return Fm(e,r,n,{renderMediaPreview:n&&o})}}),i.for("dataDowncast").add(Bm(r,{renderMediaPreview:o})),i.for("editingDowncast").elementToElement({model:"media",view:(t,e)=>{const i=t.getAttribute("url");return function(t,e,n){return e.setCustomProperty("media",!0,t),ku(t,e,{label:n})}(Fm(e,r,i,{renderForEditingView:!0}),e,n("ax"))}}),i.for("editingDowncast").add(Bm(r,{renderForEditingView:!0})),i.for("upcast").elementToElement({view:{name:"oembed",attributes:{url:!0}},model:(t,e)=>{const n=t.getAttribute("url");if(r.hasMedia(n))return e.createElement("media",{url:n})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(t,e)=>{const n=t.getAttribute("data-oembed-url");if(r.hasMedia(n))return e.createElement("media",{url:n})}})}}const Km=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;class Zm extends vd{static get requires(){return[Td,bh]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){const t=this.editor,e=t.model.document;this.listenTo(t.plugins.get(Td),"inputTransformation",()=>{const t=e.selection.getFirstRange(),n=Lc.fromPosition(t.start);n.stickiness="toPrevious";const i=Lc.fromPosition(t.end);i.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(n,i),n.detach(),i.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(tr.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){const n=this.editor,i=n.plugins.get(Jm).registry,o=new oa(t,e),r=o.getWalker({ignoreElementEnd:!0});let s="";for(const t of r)t.item.is("textProxy")&&(s+=t.item.data);if(!(s=s.trim()).match(Km))return;if(!i.hasMedia(s))return;n.commands.get("mediaEmbed").isEnabled&&(this._positionToInsert=Lc.fromPosition(t),this._timeoutId=tr.window.setTimeout(()=>{n.model.change(t=>{let e;this._timeoutId=null,t.remove(o),"$graveyard"!==this._positionToInsert.root.rootName&&(e=this._positionToInsert),Hm(n.model,s,e),this._positionToInsert.detach(),this._positionToInsert=null})},100))}}n(81);class Xm extends Ll{constructor(t,e){super(e);const n=e.t;this.focusTracker=new al,this.keystrokes=new Zc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("br"),Bu,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("bs"),Fu,"ck-button-cancel","cancel"),this._focusables=new pl,this._focusCycler=new Wl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),zu({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element);const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(t,e)=>{e.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.inputView.element.value.trim()}set url(t){this.urlInputView.inputView.element.value=t.trim()}isValid(){this.resetFormStatus();for(const t of this._validators){const e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const t=this.locale.t,e=new ju(this.locale,Vu),n=e.inputView;return this._urlInputViewInfoDefault=t("cd"),this._urlInputViewInfoTip=t("ce"),e.label=t("cf"),e.infoText=this._urlInputViewInfoDefault,n.placeholder="https://example.com",n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault}),e}_createButton(t,e,n,i){const o=new id(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}}var tp='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z"/></svg>';class ep extends vd{static get requires(){return[Jm]}static get pluginName(){return"MediaEmbedUI"}init(){const t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(Jm).registry;this.form=new Xm(function(t,e){return[e=>{if(!e.url.length)return t("av")},n=>{if(!e.hasMedia(n.url))return t("aw")}]}(t.t,n),t.locale),t.ui.componentFactory.add("mediaEmbed",n=>{const i=hd(n);return this._setUpDropdown(i,this.form,e,t),this._setUpForm(this.form,i,e),i})}_setUpDropdown(t,e,n){const i=this.editor,o=i.t,r=t.buttonView;function s(){i.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),r.set({label:o("au"),icon:tp,tooltip:!0}),r.on("open",()=>{e.url=n.value||"",e.urlInputView.select(),e.focus()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(i.execute("mediaEmbed",e.url),s())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>s())}_setUpForm(t,e,n){t.delegate("submit","cancel").to(e),t.urlInputView.bind("value").to(n,"value"),t.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),t.saveButtonView.bind("isEnabled").to(n)}}n(83);function np(t,e){if(!t.childCount)return;const n=new vf,i=function(t,e){const n=e.createRangeIn(t),i=new bi({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),o=[];for(const t of n)if("elementStart"===t.type&&i.match(t.item)){const e=ip(t.item);o.push({element:t.item,id:e.id,order:e.order,indent:e.indent})}return o}(t,n);if(!i.length)return;let o=null;i.forEach((t,r)=>{if(!o||function(t,e){if(t.id!==e.id)return!0;const n=e.element.previousSibling;if(!n)return!0;return!function(t){return t.is("ol")||t.is("ul")}(n)}(i[r-1],t)){const i=function(t,e){const n=/mso-level-number-format:([^;]*);/gi,i=new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`,"gi").exec(e);let o="decimal";if(i&&i[1]){const t=n.exec(i[1]);t&&t[1]&&(o=t[1].trim())}return{type:"bullet"!==o&&"image"!==o?"ol":"ul",style:o}}(t,e);o=function(t,e,n){const i=new ki(t.type),o=e.parent.getChildIndex(e);return n.insertChild(o,i,e.parent),i}(i,t.element,n)}const s=function(t,e){return function(t,e){const n=new bi({name:"span",styles:{"mso-list":"Ignore"}}),i=e.createRangeIn(t);for(const t of i)"elementStart"===t.type&&n.match(t.item)&&e.remove(t.item)}(t,e),e.rename("li",t)}(t.element,n);n.appendChild(s,o)})}function ip(t){const e={},n=t.getStyle("mso-list");return n&&(e.id=parseInt(n.match(/(^|\s+)l(\d+)/i)[2]),e.order=parseInt(n.match(/\s*lfo(\d+)/i)[1]),e.indent=parseInt(n.match(/\s*level(\d+)/i)[1])),e}const op=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class rp{isActive(t){return op.test(t)}execute(t){const e=new vf;!function(t,e){for(const n of t.getChildren())if(n.is("b")&&"normal"===n.getStyle("font-weight")){const i=t.getChildIndex(n);e.remove(n),e.insertChild(i,n.getChildren(),t)}}(t.content,e),function(t,e){for(const n of e.createRangeIn(t)){const t=n.item;if(t.is("li")){const n=t.getChild(0);n.is("p")&&e.unwrapElement(n)}}}(t.content,e)}}function sp(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1===e.length?" ":Array(e.length+1).join("  ").substr(0,e.length))}function ap(t){const e=new DOMParser,n=function(t){return sp(sp(t)).replace(/(<span style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g,"$1$2").replace(/<span style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>(\s*[\r\n]\s*)</g,"><")}(function(t){const e=t.match(/<\/body>(.*?)(<\/html>|$)/);e&&e[1]&&(t=t.slice(0,e.index)+t.slice(e.index).replace(e[1],""));return t}(t=t.replace(/<!--\[if gte vml 1]>/g,""))),i=e.parseFromString(n,"text/html");!function(t){t.querySelectorAll("span[style*=spacerun]").forEach(t=>{const e=t.childNodes[0].data.length;t.innerHTML=Array(e+1).join("  ").substr(0,e)})}(i);const o=i.body.innerHTML,r=function(t){const e=new or({blockFillerMode:"nbsp"}),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return e.domToView(n)}(i),s=function(t){const e=[],n=[],i=Array.from(t.getElementsByTagName("style"));for(const t of i)t.sheet&&t.sheet.cssRules&&t.sheet.cssRules.length&&(e.push(t.sheet),n.push(t.innerHTML));return{styles:e,stylesString:n.join(" ")}}(i);return{body:r,bodyString:o,styles:s.styles,stylesString:s.stylesString}}function cp(t,e){if(!t.childCount)return;const n=new vf;!function(t,e,n){const i=n.createRangeIn(e),o=new bi({name:"img"}),r=[];for(const e of i)if(o.match(e.item)){const n=e.item,i=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];i.length&&i.every(e=>t.indexOf(e)>-1)?r.push(n):n.getAttribute("src")||r.push(n)}for(const t of r)n.remove(t)}(function(t,e){const n=e.createRangeIn(t),i=new bi({name:/v:(.+)/}),o=[];for(const t of n){const e=t.item,n=e.previousSibling&&e.previousSibling.name||null;i.match(e)&&e.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&o.push(t.item.getAttribute("id"))}return o}(t,n),t,n),function(t,e){const n=e.createRangeIn(t),i=new bi({name:/v:(.+)/}),o=[];for(const t of n)i.match(t.item)&&o.push(t.item);for(const t of o)e.remove(t)}(t,n);const i=function(t,e){const n=e.createRangeIn(t),i=new bi({name:"img"}),o=[];for(const t of n)i.match(t.item)&&t.item.getAttribute("src").startsWith("file://")&&o.push(t.item);return o}(t,n);i.length&&function(t,e,n){if(t.length===e.length)for(let i=0;i<t.length;i++){const o=`data:${e[i].type};base64,${lp(e[i].hex)}`;n.setAttribute("src",o,t[i])}}(i,function(t){if(!t)return[];const e=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+e.source+"))([\\da-fA-F\\s]+)\\}","g"),i=t.match(n),o=[];if(i)for(const t of i){let n=!1;t.includes("\\pngblip")?n="image/png":t.includes("\\jpegblip")&&(n="image/jpeg"),n&&o.push({hex:t.replace(e,"").replace(/[^\da-fA-F]/g,""),type:n})}return o}(e),n)}function lp(t){return btoa(t.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}const dp=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,hp=/xmlns:o="urn:schemas-microsoft-com/i;class up{isActive(t){return dp.test(t)||hp.test(t)}execute(t){const{body:e,stylesString:n}=ap(t.dataTransfer.getData("text/html"));np(e,n),cp(e,t.dataTransfer.getData("text/rtf")),t.content=e}}function fp(t,e){let n=e.parent;for(;n;){if(n.name===t)return n;n=n.parent}}function gp(t,e,n,i,o=1){e>o?i.setAttribute(t,e,n):i.removeAttribute(t,n)}function mp(t,e,n={}){const i=t.createElement("tableCell",n);t.insertElement("paragraph",i),t.insert(i,e)}function pp(){return t=>{t.on("element:table",(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const{rows:o,headingRows:r,headingColumns:s}=function(t){const e={headingRows:0,headingColumns:0},n=[],i=[];let o;for(const r of Array.from(t.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||o||(o=r);const t=Array.from(r.getChildren()).filter(t=>t.is("element","tr"));for(const r of t)if("thead"===r.parent.name&&r.parent===o)e.headingRows++,n.push(r);else{i.push(r);const t=wp(r);t>e.headingColumns&&(e.headingColumns=t)}}return e.rows=[...n,...i],e}(i),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=n.writer.createElement("table",a),l=n.splitToAllowedParent(c,e.modelCursor);if(l){if(n.writer.insert(c,l.position),n.consumable.consume(i,{name:!0}),o.length)o.forEach(t=>n.convertItem(t,n.writer.createPositionAt(c,"end")));else{const t=n.writer.createElement("tableRow");n.writer.insert(t,n.writer.createPositionAt(c,"end")),mp(n.writer,n.writer.createPositionAt(t,"end"))}e.modelRange=n.writer.createRange(n.writer.createPositionBefore(c),n.writer.createPositionAfter(c)),l.cursorParent?e.modelCursor=n.writer.createPositionAt(l.cursorParent,0):e.modelCursor=e.modelRange.end}})}}function bp(t){return e=>{e.on(`element:${t}`,(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const o=n.writer.createElement("tableCell"),r=n.splitToAllowedParent(o,e.modelCursor);if(!r)return;n.writer.insert(o,r.position),n.consumable.consume(i,{name:!0});const s=n.writer.createPositionAt(o,0);n.convertChildren(i,s),o.childCount||n.writer.insertElement("paragraph",s),e.modelRange=n.writer.createRange(n.writer.createPositionBefore(o),n.writer.createPositionAfter(o)),e.modelCursor=e.modelRange.end})}}function wp(t){let e=0,n=0;const i=Array.from(t.getChildren()).filter(t=>"th"===t.name||"td"===t.name);for(;n<i.length&&"th"===i[n].name;){const t=i[n];e+=parseInt(t.getAttribute("colspan")||1),n++}return e}class kp{constructor(t,e={}){this.table=t,this.startRow=e.startRow||0,this.endRow="number"==typeof e.endRow?e.endRow:void 0,this.includeSpanned=!!e.includeSpanned,this.column="number"==typeof e.column?e.column:void 0,this._skipRows=new Set,this._row=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const t=this.table.getChild(this._row);if(!t||this._isOverEndRow())return{done:!0};let e,n,i;if(this._isSpanned(this._row,this._column))e=this._getSpanned(this._row,this._column),n=!this.includeSpanned||this._shouldSkipRow()||this._shouldSkipColumn(),i=this._formatOutValue(e,this._column,!0);else{if(!(e=t.getChild(this._cellIndex)))return this._row++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next();const o=parseInt(e.getAttribute("colspan")||1),r=parseInt(e.getAttribute("rowspan")||1);(o>1||r>1)&&this._recordSpans(this._row,this._column,r,o,e),this._nextCellAtColumn=this._column+o,n=this._shouldSkipRow()||this._shouldSkipColumn(),i=this._formatOutValue(e,this._column,!1,r,o)}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,n?this.next():i}skipRow(t){this._skipRows.add(t)}_isOverEndRow(){return void 0!==this.endRow&&this._row>this.endRow}_formatOutValue(t,e,n,i=1,o=1){return{done:!1,value:{cell:t,row:this._row,column:e,isSpanned:n,rowspan:i,colspan:o,cellIndex:this._cellIndex}}}_shouldSkipRow(){const t=this._row<this.startRow,e=this._skipRows.has(this._row);return t||e}_shouldSkipColumn(){return void 0!==this.column&&this.column!=this._column}_isSpanned(t,e){if(!this._spannedCells.has(t))return!1;return this._spannedCells.get(t).has(e)}_getSpanned(t,e){return this._spannedCells.get(t).get(e)}_recordSpans(t,e,n,i,o){for(let n=e+1;n<=e+i-1;n++)this._markSpannedCell(t,n,o);for(let r=t+1;r<t+n;r++)for(let t=e;t<=e+i-1;t++)this._markSpannedCell(r,t,o)}_markSpannedCell(t,e,n){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,n)}}function _p(t){return!!t.getCustomProperty("table")&&wu(t)}function vp(t){const e=t.getSelectedElement();return e&&_p(e)?e:null}function yp(t){const e=fp("table",t.getFirstPosition());return e&&_p(e.parent)?e.parent:null}function xp(t={}){return e=>e.on("insert:table",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;i.consumable.consume(o,"attribute:headingRows:table"),i.consumable.consume(o,"attribute:headingColumns:table");const r=t&&t.asWidget,s=i.writer.createContainerElement("figure",{class:"table"}),a=i.writer.createContainerElement("table");let c;i.writer.insert(i.writer.createPositionAt(s,0),a),r&&(c=function(t,e){return e.setCustomProperty("table",!0,t),ku(t,e,{hasSelectionHandle:!0})}(s,i.writer));const l=new kp(o),d={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},h=new Map;for(const e of l){const{row:n,cell:r}=e,s=Rp(Op(n,d),a,i),c=o.getChild(n),l=h.get(n)||Ip(c,n,s,i);h.set(n,l),i.consumable.consume(r,"insert"),Ep(e,d,i.writer.createPositionAt(l,"end"),i,t)}const u=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(o,r?c:s),i.writer.insert(u,r?c:s)})}function Ap(t={}){return e=>e.on("insert:tableRow",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;const r=o.parent,s=Vp(i.mapper.toViewElement(r)),a=r.getChildIndex(o),c=new kp(r,{startRow:a,endRow:a}),l={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0},d=new Map;for(const e of c){const n=Rp(Op(a,l),s,i),r=d.get(a)||Ip(o,a,n,i);d.set(a,r),i.consumable.consume(e.cell,"insert"),Ep(e,l,i.writer.createPositionAt(r,"end"),i,t)}})}function Tp(t={}){return e=>e.on("insert:tableCell",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=new kp(s,{startRow:a,endRow:a}),l={headingRows:s.getAttribute("headingRows")||0,headingColumns:s.getAttribute("headingColumns")||0};for(const e of c)if(e.cell===o){const n=i.mapper.toViewElement(r);return void Ep(e,l,i.writer.createPositionAt(n,r.getChildIndex(o)),i,t)}})}function Cp(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingRows:table",(t,n,i)=>{const o=n.item;if(!i.consumable.consume(n.item,t.name))return;const r=Vp(i.mapper.toViewElement(o)),s=n.attributeOldValue,a=n.attributeNewValue;if(a>s){const t=Array.from(o.getChildren()).filter(({index:t})=>c(t,s-1,a));jp(t,Rp("thead",r,i),i,"end");for(const n of t)for(const t of n.getChildren())Sp(t,"th",i,e);Lp("tbody",r,i)}else{jp(Array.from(o.getChildren()).filter(({index:t})=>c(t,a-1,s)).reverse(),Rp("tbody",r,i),i,0);const t=new kp(o,{startRow:a?a-1:a,endRow:s-1}),n={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0};for(const o of t)Mp(o,n,i,e);Lp("thead",r,i)}function c(t,e,n){return t>e&&t<n}})}function Pp(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingColumns:table",(t,n,i)=>{const o=n.item;if(!i.consumable.consume(n.item,t.name))return;const r={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},s=n.attributeOldValue,a=n.attributeNewValue,c=(s>a?s:a)-1;for(const t of new kp(o))t.column>c||Mp(t,r,i,e)})}function Sp(t,e,n,i){const o=n.writer,r=n.mapper.toViewElement(t);if(!r)return;let s;if(i){s=vu(o.createEditableElement(e,r.getAttributes()),o),o.insert(o.createPositionAfter(r),s),o.move(o.createRangeIn(r),o.createPositionAt(s,0)),o.remove(o.createRangeOn(r))}else s=o.rename(e,r);n.mapper.unbindViewElement(r),n.mapper.bindElements(t,s)}function Mp(t,e,n,i){const{cell:o}=t,r=Np(t,e),s=n.mapper.toViewElement(o);s&&s.name!==r&&Sp(o,r,n,i)}function Ep(t,e,n,i,o){const r=o&&o.asWidget,s=Np(t,e),a=r?vu(i.writer.createEditableElement(s),i.writer):i.writer.createContainerElement(s),c=t.cell,l=c.getChild(0),d=1===c.childCount&&"paragraph"===l.name;if(i.writer.insert(n,a),d&&!function(t){return!![...t.getAttributeKeys()].length}(l)){const t=c.getChild(0),e=i.writer.createPositionAt(a,"end");if(i.consumable.consume(t,"insert"),o.asWidget){const n=i.writer.createContainerElement("span");i.mapper.bindElements(t,n),i.writer.insert(e,n),i.mapper.bindElements(c,a)}else i.mapper.bindElements(c,a),i.mapper.bindElements(t,a)}else i.mapper.bindElements(c,a)}function Ip(t,e,n,i){i.consumable.consume(t,"insert");const o=i.writer.createContainerElement("tr");i.mapper.bindElements(t,o);const r=t.parent.getAttribute("headingRows")||0,s=r>0&&e>=r?e-r:e,a=i.writer.createPositionAt(n,s);return i.writer.insert(a,o),o}function Np(t,e){const{row:n,column:i}=t,{headingColumns:o,headingRows:r}=e;return r&&r>n?"th":o&&o>i?"th":"td"}function Op(t,e){return t<e.headingRows?"thead":"tbody"}function Rp(t,e,n){const i=Dp(t,e);return i||function(t,e,n){const i=n.writer.createContainerElement(t),o=n.writer.createPositionAt(e,"tbody"==t?"end":0);return n.writer.insert(o,i),i}(t,e,n)}function Dp(t,e){for(const n of e.getChildren())if(n.name==t)return n}function Lp(t,e,n){const i=Dp(t,e);i&&0===i.childCount&&n.writer.remove(n.writer.createRangeOn(i))}function jp(t,e,n,i){for(const o of t){const t=n.mapper.toViewElement(o);t&&n.writer.move(n.writer.createRangeOn(t),n.writer.createPositionAt(e,i))}}function Vp(t){for(const e of t.getChildren())if("table"===e.name)return e}class zp extends Cd{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=function(t){const e=t.parent;return e===e.root?e:e.parent}(e.getFirstPosition());this.isEnabled=n.checkChild(i,"table")}execute(t={}){const e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),o=parseInt(t.rows)||2,r=parseInt(t.columns)||2,s=yu(n,e);e.change(t=>{const n=i.createTable(t,o,r);e.insertContent(n,s),t.setSelection(t.createPositionAt(n.getNodeByPath([0,0,0]),0))})}}class Bp extends Cd{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){const t=fp("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=fp("tableCell",e.getFirstPosition()).parent,o=i.parent,r=o.getChildIndex(i),s="below"===this.order?r+1:r;n.insertRows(o,{rows:1,at:s})}}class Fp extends Cd{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){const t=fp("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=fp("tableCell",e.getFirstPosition()),o=i.parent.parent,{column:r}=n.getCellLocation(i),s="right"===this.order?r+1:r;n.insertColumns(o,{columns:1,at:s})}}class Up extends Cd{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){const t=fp("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=fp("tableCell",this.editor.model.document.selection.getFirstPosition()),e="horizontally"===this.direction,n=this.editor.plugins.get("TableUtils");e?n.splitCellHorizontally(t,2):n.splitCellVertically(t,2)}}class Hp extends Cd{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const t=this._getMergeableCell();this.value=t,this.isEnabled=!!t}execute(){const t=this.editor.model,e=fp("tableCell",t.document.selection.getFirstPosition()),n=this.value,i=this.direction;t.change(t=>{const o="right"==i||"down"==i,r=o?e:n,s=o?n:e,a=s.parent;!function(t,e,n){qp(t)||(qp(e)&&n.remove(n.createRangeIn(e)),n.move(n.createRangeIn(t),n.createPositionAt(e,"end")));n.remove(t)}(s,r,t);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(e.getAttribute(c)||1),d=parseInt(n.getAttribute(c)||1);t.setAttribute(c,l+d,r),t.setSelection(t.createRangeIn(r)),a.childCount||function(t,e){const n=t.parent,i=n.getChildIndex(t);for(const{cell:t,row:o,rowspan:r}of new kp(n,{endRow:i})){const n=o+r-1>=i;n&&gp("rowspan",r-1,t,e)}e.remove(t)}(a,t)})}_getMergeableCell(){const t=fp("tableCell",this.editor.model.document.selection.getFirstPosition());if(!t)return;const e=this.editor.plugins.get("TableUtils"),n=this.isHorizontal?function(t,e,n){const i="right"==e?t.nextSibling:t.previousSibling;if(!i)return;const o="right"==e?t:i,r="right"==e?i:t,{column:s}=n.getCellLocation(o),{column:a}=n.getCellLocation(r),c=parseInt(o.getAttribute("colspan")||1);return s+c===a?i:void 0}(t,this.direction,e):function(t,e){const n=t.parent,i=n.parent,o=i.getChildIndex(n);if("down"==e&&o===i.childCount-1||"up"==e&&0===o)return;const r=parseInt(t.getAttribute("rowspan")||1),s=i.getAttribute("headingRows")||0;if(s&&("down"==e&&o+r===s||"up"==e&&o===s))return;const a=parseInt(t.getAttribute("rowspan")||1),c="down"==e?o+a:o,l=[...new kp(i,{endRow:c})],d=l.find(e=>e.cell===t).column,h=l.find(({row:t,rowspan:n,column:i})=>i===d&&("down"==e?t===c:c===t+n));return h&&h.cell}(t,this.direction);if(!n)return;const i=this.isHorizontal?"rowspan":"colspan",o=parseInt(t.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===o?n:void 0}}function qp(t){return 1==t.childCount&&t.getChild(0).is("paragraph")&&t.getChild(0).isEmpty}class Wp extends Cd{refresh(){const t=fp("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t&&t.parent.parent.childCount>1}execute(){const t=this.editor.model,e=fp("tableCell",t.document.selection.getFirstPosition()).parent,n=e.parent,i=n.getChildIndex(e),o=n.getAttribute("headingRows")||0;t.change(t=>{o&&i<=o&&gp("headingRows",o-1,n,t,0);const r=[...new kp(n,{endRow:i})],s=new Map;r.filter(({row:t,rowspan:e})=>t===i&&e>1).forEach(({column:t,cell:e,rowspan:n})=>s.set(t,{cell:e,rowspanToSet:n-1})),r.filter(({row:t,rowspan:e})=>t<=i-1&&t+e>i).forEach(({cell:e,rowspan:n})=>gp("rowspan",n-1,e,t));const a=i+1,c=new kp(n,{includeSpanned:!0,startRow:a,endRow:a});let l;for(const{row:e,column:i,cell:o}of[...c])if(s.has(i)){const{cell:o,rowspanToSet:r}=s.get(i),a=l?t.createPositionAfter(l):t.createPositionAt(n.getChild(e),0);t.move(t.createRangeOn(o),a),gp("rowspan",r,o,t),l=o}else l=o;t.remove(e)})}}class Yp extends Cd{refresh(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=fp("tableCell",e.getFirstPosition());this.isEnabled=!!i&&n.getColumns(i.parent.parent)>1}execute(){const t=this.editor.model,e=fp("tableCell",t.document.selection.getFirstPosition()),n=e.parent,i=n.parent,o=i.getAttribute("headingColumns")||0,r=i.getChildIndex(n),s=[...new kp(i)],a=s.find(t=>t.cell===e).column;t.change(t=>{o&&r<=o&&t.setAttribute("headingColumns",o-1,i);for(const{cell:e,column:n,colspan:i}of s)n<=a&&i>1&&n+i>a?gp("colspan",i-1,e,t):n===a&&t.remove(e)})}}class $p extends Cd{refresh(){const t=fp("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(t={}){const e=this.editor.model,n=fp("tableCell",e.document.selection.getFirstPosition()).parent,i=n.parent,o=i.getAttribute("headingRows")||0,r=n.index;if(t.forceValue===this.value)return;const s=this.value?r:r+1;e.change(t=>{if(s){const e=function(t,e,n){const i=[],o=new kp(t,{startRow:e>n?n:0,endRow:e-1});for(const{row:t,rowspan:n,cell:r}of o)n>1&&t+n>e&&i.push(r);return i}(i,s,o);for(const n of e)Gp(n,s,t)}gp("headingRows",s,i,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}function Gp(t,e,n){const i=t.parent,o=i.parent,r=e-i.index,s={},a=parseInt(t.getAttribute("rowspan"))-r;a>1&&(s.rowspan=a);const c=parseInt(t.getAttribute("colspan")||1);c>1&&(s.colspan=c);const l=o.getChildIndex(i),d=l+r,h=[...new kp(o,{startRow:l,endRow:d,includeSpanned:!0})];let u;for(const{row:e,column:i,cell:r,cellIndex:a}of h)if(r===t&&void 0===u&&(u=i),void 0!==u&&u===i&&e===d){const t=o.getChild(e);mp(n,n.createPositionAt(t,a),s)}gp("rowspan",r,t,n)}class Qp extends Cd{refresh(){const t=fp("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),o=fp("tableCell",n.getFirstPosition()),r=o.parent.parent,{column:s}=i.getCellLocation(o);if(t.forceValue===this.value)return;const a=this.value?s:s+1;e.change(t=>{gp("headingColumns",a,r,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingColumns")||0),i=this.editor.plugins.get("TableUtils"),{column:o}=i.getCellLocation(t);return!!n&&o<n}}class Jp extends vd{static get pluginName(){return"TableUtils"}getCellLocation(t){const e=t.parent,n=e.parent,i=n.getChildIndex(e),o=new kp(n,{startRow:i,endRow:i});for(const{cell:e,row:n,column:i}of o)if(e===t)return{row:n,column:i}}createTable(t,e,n){const i=t.createElement("table");return Kp(t,i,0,e,n),i}insertRows(t,e={}){const n=this.editor.model,i=e.at||0,o=e.rows||1;n.change(e=>{const n=t.getAttribute("headingRows")||0;if(n>i&&e.setAttribute("headingRows",n+o,t),0===i||i===t.childCount)return void Kp(e,t,i,o,this.getColumns(t));const r=new kp(t,{endRow:i});let s=0;for(const{row:t,rowspan:n,colspan:a,cell:c}of r){t<i&&t+n>i&&e.setAttribute("rowspan",n+o,c),t===i&&(s+=a)}Kp(e,t,i,o,s)})}insertColumns(t,e={}){const n=this.editor.model,i=e.at||0,o=e.columns||1;n.change(e=>{const n=t.getAttribute("headingColumns");i<n&&e.setAttribute("headingColumns",n+o,t);const r=this.getColumns(t);if(0===i||r===i){for(const n of t.getChildren())Zp(o,e,e.createPositionAt(n,i?"end":0));return}const s=new kp(t,{column:i,includeSpanned:!0});for(const{row:n,cell:r,cellIndex:a}of s){const c=parseInt(r.getAttribute("rowspan")||1),l=parseInt(r.getAttribute("colspan")||1);if(r.index!==i&&l>1){if(e.setAttribute("colspan",l+o,r),s.skipRow(n),c>1)for(let t=n+1;t<n+c;t++)s.skipRow(t)}else{const i=e.createPositionAt(t.getChild(n),a);Zp(o,e,i)}}})}splitCellVertically(t,e=2){const n=this.editor.model,i=t.parent.parent,o=parseInt(t.getAttribute("rowspan")||1),r=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(r>1){const{newCellsSpan:i,updatedSpan:s}=Xp(r,e);gp("colspan",s,t,n);const a={};i>1&&(a.colspan=i),o>1&&(a.rowspan=o),Zp(r>e?e-1:r-1,n,n.createPositionAfter(t),a)}if(r<e){const s=e-r,a=[...new kp(i)],{column:c}=a.find(({cell:e})=>e===t),l=a.filter(({cell:e,colspan:n,column:i})=>{return e!==t&&i===c||i<c&&i+n>c});for(const{cell:t,colspan:e}of l)n.setAttribute("colspan",e+s,t);const d={};o>1&&(d.rowspan=o),Zp(s,n,n.createPositionAfter(t),d);const h=i.getAttribute("headingColumns")||0;h>c&&gp("headingColumns",h+s,i,n)}})}splitCellHorizontally(t,e=2){const n=this.editor.model,i=t.parent,o=i.parent,r=o.getChildIndex(i),s=parseInt(t.getAttribute("rowspan")||1),a=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(s>1){const i=[...new kp(o,{startRow:r,endRow:r+s-1,includeSpanned:!0})],{newCellsSpan:c,updatedSpan:l}=Xp(s,e);gp("rowspan",l,t,n);const{column:d}=i.find(({cell:e})=>e===t),h={};c>1&&(h.rowspan=c),a>1&&(h.colspan=a);for(const{column:t,row:e,cellIndex:s}of i){if(e>=r+l&&t===d&&(e+r+l)%c==0){Zp(1,n,n.createPositionAt(o.getChild(e),s),h)}}}if(s<e){const i=e-s,c=[...new kp(o,{startRow:0,endRow:r})];for(const{cell:e,rowspan:o,row:s}of c)if(e!==t&&s+o>r){const t=o+i;n.setAttribute("rowspan",t,e)}const l={};a>1&&(l.colspan=a),Kp(n,o,r+1,i,1,l);const d=o.getAttribute("headingRows")||0;d>r&&gp("headingRows",d+i,o,n)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((t,e)=>{return t+parseInt(e.getAttribute("colspan")||1)},0)}}function Kp(t,e,n,i,o,r={}){for(let s=0;s<i;s++){const i=t.createElement("tableRow");t.insert(i,e,n),Zp(o,t,t.createPositionAt(i,"end"),r)}}function Zp(t,e,n,i={}){for(let o=0;o<t;o++)mp(e,n,i)}function Xp(t,e){if(t<e)return{newCellsSpan:1,updatedSpan:1};const n=Math.floor(t/e);return{newCellsSpan:n,updatedSpan:t-n*e+n}}function tb(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let i=!1;const o=new Set;for(const e of n){let n;"table"==e.name&&"insert"==e.type&&(n=e.position.nodeAfter),"tableRow"!=e.name&&"tableCell"!=e.name||(n=fp("table",e.position)),ib(e)&&(n=fp("table",e.range.start)),n&&!o.has(n)&&(i=eb(n,t)||i,i=nb(n,t)||i,o.add(n))}return i})(e,t))}function eb(t,e){let n=!1;const i=function(t){const e=parseInt(t.getAttribute("headingRows")||0),n=t.childCount,i=[];for(const{row:o,rowspan:r,cell:s}of new kp(t)){if(r<2)continue;const t=o<e,a=t?e:n;if(o+r>a){const t=a-o;i.push({cell:s,rowspan:t})}}return i}(t);if(i.length){n=!0;for(const t of i)gp("rowspan",t.rowspan,t.cell,e,1)}return n}function nb(t,e){let n=!1;const i=function(t){const e={};for(const{row:n}of new kp(t,{includeSpanned:!0}))e[n]||(e[n]=0),e[n]+=1;return e}(t),o=i[0];if(!Object.values(i).every(t=>t===o)){const o=Object.values(i).reduce((t,e)=>e>t?e:t,0);for(const[r,s]of Object.entries(i)){const i=o-s;if(i){for(let n=0;n<i;n++)mp(e,e.createPositionAt(t.getChild(r),"end"));n=!0}}}return n}function ib(t){const e="attribute"===t.type,n=t.attributeKey;return e&&("headingRows"===n||"colspan"===n||"rowspan"===n)}function ob(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let i=!1;for(const e of n)"insert"==e.type&&"table"==e.name&&(i=rb(e.position.nodeAfter,t)||i),"insert"==e.type&&"tableRow"==e.name&&(i=sb(e.position.nodeAfter,t)||i),"insert"==e.type&&"tableCell"==e.name&&(i=ab(e.position.nodeAfter,t)||i),cb(e)&&(i=ab(e.position.parent,t)||i);return i})(e,t))}function rb(t,e){let n=!1;for(const i of t.getChildren())n=sb(i,e)||n;return n}function sb(t,e){let n=!1;for(const i of t.getChildren())n=ab(i,e)||n;return n}function ab(t,e){if(0==t.childCount)return e.insertElement("paragraph",t),!0;const n=Array.from(t.getChildren()).filter(t=>t.is("text"));for(const t of n)e.wrap(e.createRangeOn(t),"paragraph");return!!n.length}function cb(t){return!(!t.position||!t.position.parent.is("tableCell"))&&("insert"==t.type&&"$text"==t.name||"remove"==t.type)}function lb(t){t.document.registerPostFixer(()=>(function(t){const e=t.document.differ,n=new Set;for(const t of e.getChanges()){const e="insert"==t.type||"remove"==t.type?t.position.parent:t.range.start.parent;e.is("tableCell")&&db(e,t.type)&&n.add(e)}if(n.size){for(const t of n.values())e.refreshItem(t);return!0}return!1})(t))}function db(t,e){if(!Array.from(t.getChildren()).some(t=>t.is("paragraph")))return!1;if("attribute"==e){const e=Array.from(t.getChild(0).getAttributeKeys()).length;return 1===t.childCount&&e<2}return t.childCount<=("insert"==e?2:1)}n(85);class hb extends vd{static get pluginName(){return"TableEditing"}init(){const t=this.editor,e=t.model,n=e.schema,i=t.conversion;n.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isLimit:!0,isObject:!0,isBlock:!0}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0}),n.extend("$block",{allowIn:"tableCell"}),n.addChildCheck((t,e)=>{if("table"==e.name&&Array.from(t.getNames()).includes("table"))return!1}),i.for("upcast").add(pp()),i.for("editingDowncast").add(xp({asWidget:!0})),i.for("dataDowncast").add(xp()),i.for("upcast").elementToElement({model:"tableRow",view:"tr"}),i.for("editingDowncast").add(Ap({asWidget:!0})),i.for("dataDowncast").add(Ap()),i.for("downcast").add(t=>t.on("remove:tableRow",(t,e,n)=>{t.stop();const i=n.writer,o=n.mapper,r=o.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("tr")).nodeAfter,s=r.parent,a=i.createRangeOn(r),c=i.remove(a);for(const t of i.createRangeIn(c).getItems())o.unbindViewElement(t);s.childCount||i.remove(i.createRangeOn(s))},{priority:"higher"})),i.for("upcast").add(bp("td")),i.for("upcast").add(bp("th")),i.for("editingDowncast").add(Tp({asWidget:!0})),i.for("dataDowncast").add(Tp()),i.attributeToAttribute({model:"colspan",view:"colspan"}),i.attributeToAttribute({model:"rowspan",view:"rowspan"}),i.for("editingDowncast").add(Pp({asWidget:!0})),i.for("dataDowncast").add(Pp()),i.for("editingDowncast").add(Cp({asWidget:!0})),i.for("dataDowncast").add(Cp()),t.commands.add("insertTable",new zp(t)),t.commands.add("insertTableRowAbove",new Bp(t,{order:"above"})),t.commands.add("insertTableRowBelow",new Bp(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new Fp(t,{order:"left"})),t.commands.add("insertTableColumnRight",new Fp(t,{order:"right"})),t.commands.add("removeTableRow",new Wp(t)),t.commands.add("removeTableColumn",new Yp(t)),t.commands.add("splitTableCellVertically",new Up(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new Up(t,{direction:"horizontally"})),t.commands.add("mergeTableCellRight",new Hp(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new Hp(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new Hp(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new Hp(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new Qp(t)),t.commands.add("setTableRowHeader",new $p(t)),tb(e),lb(e),ob(e),this.editor.keystrokes.set("Tab",(...t)=>this._handleTabOnSelectedTable(...t),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"})}static get requires(){return[Jp]}_handleTabOnSelectedTable(t,e){const n=this.editor,i=n.model.document.selection;if(!i.isCollapsed&&1===i.rangeCount&&i.getFirstRange().isFlat){const t=i.getSelectedElement();if(!t||!t.is("table"))return;e(),n.model.change(e=>{e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))})}}_getTabHandler(t){const e=this.editor;return(n,i)=>{const o=fp("tableCell",e.model.document.selection.getFirstPosition());if(!o)return;i();const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(o),l=0===c;if(!t&&l&&0===a)return;const d=c===r.childCount-1,h=a===s.childCount-1;if(t&&h&&d&&(e.execute("insertTableRowBelow"),a===s.childCount-1))return;let u;if(t&&d){const t=s.getChild(a+1);u=t.getChild(0)}else if(!t&&l){const t=s.getChild(a-1);u=t.getChild(t.childCount-1)}else u=r.getChild(c+(t?1:-1));e.model.change(t=>{t.setSelection(t.createRangeIn(u))})}}}n(87);class ub extends Ll{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(t,e)=>`${e} × ${t}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(()=>{this.fire("execute")})}});for(let t=0;t<100;t++){const e=new fb;e.on("over",()=>{const e=Math.floor(t/10),n=t%10;this.set("rows",e+1),this.set("columns",n+1)}),this.items.add(e)}this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const t=this.rows,e=this.columns;this.items.map((n,i)=>{const o=Math.floor(i/10)<t&&i%10<e;n.set("isOn",o)})}}class fb extends Ll{constructor(t){super(t);const e=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",e.if("isOn","ck-on")]},on:{mouseover:e.to("over")}})}}var gb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',mb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',pb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',bb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>';class wb extends vd{init(){const t=this.editor,e=this.editor.t,n="ltr"===t.locale.contentLanguageDirection;t.ui.componentFactory.add("insertTable",n=>{const i=t.commands.get("insertTable"),o=hd(n);o.bind("isEnabled").to(i),o.buttonView.set({icon:gb,label:e("aa"),tooltip:!0});const r=new ub(n);return o.panelView.children.add(r),r.delegate("execute").to(o),o.buttonView.on("open",()=>{r.rows=0,r.columns=0}),o.on("execute",()=>{t.execute("insertTable",{rows:r.rows,columns:r.columns}),t.editing.view.focus()}),o}),t.ui.componentFactory.add("tableColumn",t=>{const i=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("ab"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:n?"insertTableColumnLeft":"insertTableColumnRight",label:e("ac")}},{type:"button",model:{commandName:n?"insertTableColumnRight":"insertTableColumnLeft",label:e("ad")}},{type:"button",model:{commandName:"removeTableColumn",label:e("ae")}}];return this._prepareDropdown(e("af"),mb,i,t)}),t.ui.componentFactory.add("tableRow",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("ag"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowBelow",label:e("ah")}},{type:"button",model:{commandName:"insertTableRowAbove",label:e("ai")}},{type:"button",model:{commandName:"removeTableRow",label:e("aj")}}];return this._prepareDropdown(e("ak"),pb,n,t)}),t.ui.componentFactory.add("mergeTableCells",t=>{const i=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("al")}},{type:"button",model:{commandName:n?"mergeTableCellRight":"mergeTableCellLeft",label:e("am")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("an")}},{type:"button",model:{commandName:n?"mergeTableCellLeft":"mergeTableCellRight",label:e("ao")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("ap")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("aq")}}];return this._prepareDropdown(e("ar"),bb,i,t)})}_prepareDropdown(t,e,n,i){const o=this.editor,r=hd(i),s=[],a=new oo;for(const t of n)kb(t,o,s,a);return fd(r,a),r.buttonView.set({label:t,icon:e,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...t)=>t.some(t=>t)),this.listenTo(r,"execute",t=>{o.execute(t.source.commandName),o.editing.view.focus()}),r}}function kb(t,e,n,i){const o=t.model=new Lf(t.model),{commandName:r,bindIsOn:s}=t.model;if("separator"!==t.type){const t=e.commands.get(r);n.push(t),o.set({commandName:r}),o.bind("isEnabled").to(t),s&&o.bind("isOn").to(t,"value")}o.set({withText:!0}),i.add(t)}n(89);const _b=["left","right","center","justify"];function vb(t){return _b.includes(t)}function yb(t,e){return"rtl"==e.contentLanguageDirection?"right"===t:"left"===t}const xb="alignment";class Ab extends Cd{refresh(){const t=this.editor.locale,e=$h(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!e&&this._canBeAligned(e),this.isEnabled&&e.hasAttribute("alignment")?this.value=e.getAttribute("alignment"):this.value="rtl"===t.contentLanguageDirection?"right":"left"}execute(t={}){const e=this.editor,n=e.locale,i=e.model,o=i.document,r=t.value;i.change(t=>{const e=Array.from(o.selection.getSelectedBlocks()).filter(t=>this._canBeAligned(t)),i=e[0].getAttribute("alignment");yb(r,n)||i===r||!r?function(t,e){for(const n of t)e.removeAttribute(xb,n)}(e,t):function(t,e,n){for(const i of t)e.setAttribute(xb,n,i)}(e,t,r)})}_canBeAligned(t){return this.editor.model.schema.checkAttribute(t,xb)}}class Tb extends vd{static get pluginName(){return"AlignmentEditing"}constructor(t){super(t),t.config.define("alignment",{options:[..._b]})}init(){const t=this.editor,e=t.locale,n=t.model.schema,i=t.config.get("alignment.options").filter(vb);n.extend("$block",{allowAttributes:"alignment"}),t.model.schema.setAttributeProperties("alignment",{isFormatting:!0});const o=function(t){const e={model:{key:"alignment",values:t.slice()},view:{}};for(const n of t)e.view[n]={key:"style",value:{"text-align":n}};return e}(i.filter(t=>!yb(t,e)));t.conversion.attributeToAttribute(o),t.commands.add("alignment",new Ab(t))}}var Cb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',Pb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>';const Sb=new Map([["left",Cb],["right",Pb],["center",'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>'],["justify",'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>']]);class Mb extends vd{get localizedOptionTitles(){const t=this.editor.t;return{left:t("t"),right:t("u"),center:t("v"),justify:t("w")}}static get pluginName(){return"AlignmentUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t,i=t.config.get("alignment.options");i.filter(vb).forEach(t=>this._addButton(t)),e.add("alignment",t=>{const o=hd(t),r=i.map(t=>e.create(`alignment:${t}`));ud(o,r),o.buttonView.set({label:n("x"),tooltip:!0}),o.toolbarView.isVertical=!0,o.toolbarView.ariaLabel=n("y"),o.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const s="rtl"===t.contentLanguageDirection?Pb:Cb;return o.buttonView.bind("icon").toMany(r,"isOn",(...t)=>{const e=t.findIndex(t=>t);return e<0?s:r[e].icon}),o.bind("isEnabled").toMany(r,"isEnabled",(...t)=>t.some(t=>t)),o})}_addButton(t){const e=this.editor;e.ui.componentFactory.add(`alignment:${t}`,n=>{const i=e.commands.get("alignment"),o=new id(n);return o.set({label:this.localizedOptionTitles[t],icon:Sb.get(t),tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(i),o.bind("isOn").to(i,"value",e=>e===t),this.listenTo(o,"execute",()=>{e.execute("alignment",{value:t}),e.editing.view.focus()}),o})}}n.d(e,"default",function(){return Eb});class Eb extends _d{}Eb.builtinPlugins=[class extends vd{static get requires(){return[Td,Nd,Ld,Jd,bh]}static get pluginName(){return"Essentials"}},class extends vd{static get requires(){return[_h]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const t=this.editor.config.get("ckfinder.uploadUrl");t&&(this.editor.plugins.get(_h).createUploadAdapter=(e=>new Ch(e,t,this.editor.t)))}},class extends vd{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats()}_addListAutoformats(){const t=this.editor.commands;t.get("bulletedList")&&new Ph(this.editor,/^[*-]\s$/,"bulletedList"),t.get("numberedList")&&new Ph(this.editor,/^1[.|)]\s$/,"numberedList")}_addBasicStylesAutoformats(){const t=this.editor.commands;if(t.get("bold")){const t=Eh(this.editor,"bold");new Sh(this.editor,/(\*\*)([^*]+)(\*\*)$/g,t),new Sh(this.editor,/(__)([^_]+)(__)$/g,t)}if(t.get("italic")){const t=Eh(this.editor,"italic");new Sh(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,t),new Sh(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,t)}if(t.get("code")){const t=Eh(this.editor,"code");new Sh(this.editor,/(`)([^`]+)(`)$/g,t)}}_addHeadingAutoformats(){const t=this.editor.commands.get("heading");t&&t.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(e=>{const n=e[7],i=new RegExp(`^(#{${n}})\\s$`);new Ph(this.editor,i,()=>{if(!t.isEnabled)return!1;this.editor.execute("heading",{value:e})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&new Ph(this.editor,/^>\s$/,"blockQuote")}},class extends vd{static get requires(){return[Oh,Lh]}static get pluginName(){return"Bold"}},class extends vd{static get requires(){return[Vh,Fh]}static get pluginName(){return"Italic"}},class extends vd{static get requires(){return[Hh,Yh]}static get pluginName(){return"Underline"}},class extends vd{static get requires(){return[Zh,tu]}static get pluginName(){return"BlockQuote"}},class extends vd{static get requires(){return[au,sf,Cf]}static get pluginName(){return"EasyImage"}},class extends vd{static get requires(){return[Df,jf]}static get pluginName(){return"Heading"}},sf,class extends vd{static get requires(){return[Bf]}static get pluginName(){return"ImageCaption"}},class extends vd{static get requires(){return[eg,ng]}static get pluginName(){return"ImageStyle"}},class extends vd{static get requires(){return[ig]}static get pluginName(){return"ImageToolbar"}afterInit(){const t=this.editor,e=t.t;t.plugins.get(ig).register("image",{ariaLabel:e("b"),items:t.config.get("image.toolbar")||[],getRelatedElement:Au})}},Cf,class extends vd{static get pluginName(){return"Indent"}static get requires(){return[ag,dg]}},class extends vd{static get requires(){return[em,lm]}static get pluginName(){return"Link"}},class extends vd{static get requires(){return[Dm,zm]}static get pluginName(){return"List"}},class extends vd{static get requires(){return[Jm,ep,Zm,Ou]}static get pluginName(){return"MediaEmbed"}},Mf,class extends vd{static get pluginName(){return"PasteFromOffice"}static get requires(){return[Td]}init(){const t=this.editor,e=[];e.push(new up),e.push(new rp),t.plugins.get("Clipboard").on("inputTransformation",(t,n)=>{if(n.isTransformedWithPasteFromOffice)return;const i=n.dataTransfer.getData("text/html"),o=e.find(t=>t.isActive(i));o&&(o.execute(n),n.isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends vd{static get requires(){return[hb,wb,Ou]}static get pluginName(){return"Table"}},class extends vd{static get requires(){return[ig]}static get pluginName(){return"TableToolbar"}afterInit(){const t=this.editor,e=t.t,n=t.plugins.get(ig),i=t.config.get("table.contentToolbar"),o=t.config.get("table.tableToolbar");i&&n.register("tableContent",{ariaLabel:e("c"),items:i,getRelatedElement:yp}),o&&n.register("table",{ariaLabel:e("c"),items:o,getRelatedElement:vp})}},class extends vd{static get requires(){return[Tb,Mb]}static get pluginName(){return"Alignment"}}],Eb.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","indent","outdent","|","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}}]).default});
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},r=n(0),o="object"==typeof self&&self&&self.Object===Object&&self,u=r.a||o||Function("return this")(),a=function(){return u.Date.now()},c=u.Symbol,f=Object.prototype,s=f.hasOwnProperty,l=f.toString,d=c?c.toStringTag:void 0;var p=function(t){var e=s.call(t,d),n=t[d];try{t[d]=void 0;var i=!0}catch(t){}var r=l.call(t);return i&&(e?t[d]=n:delete t[d]),r},v=Object.prototype.toString;var y=function(t){return v.call(t)},b="[object Null]",h="[object Undefined]",m=c?c.toStringTag:void 0;var g=function(t){return null==t?void 0===t?h:b:m&&m in Object(t)?p(t):y(t)};var j=function(t){return null!=t&&"object"==typeof t},O="[object Symbol]";var w=function(t){return"symbol"==typeof t||j(t)&&g(t)==O},x=NaN,$=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,T=/^0o[0-7]+$/i,_=parseInt;var D=function(t){if("number"==typeof t)return t;if(w(t))return x;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($,"");var n=E.test(t);return n||T.test(t)?_(t.slice(2),n?2:8):S.test(t)?x:+t},M="Expected a function",P=Math.max,N=Math.min;var F=function(t,e,n){var r,o,u,c,f,s,l=0,d=!1,p=!1,v=!0;if("function"!=typeof t)throw new TypeError(M);function y(e){var n=r,i=o;return r=o=void 0,l=e,c=t.apply(i,n)}function b(t){var n=t-s;return void 0===s||n>=e||n<0||p&&t-l>=u}function h(){var t=a();if(b(t))return m(t);f=setTimeout(h,function(t){var n=e-(t-s);return p?N(n,u-(t-l)):n}(t))}function m(t){return f=void 0,v&&r?y(t):(r=o=void 0,c)}function g(){var t=a(),n=b(t);if(r=arguments,o=this,s=t,n){if(void 0===f)return function(t){return l=t,f=setTimeout(h,e),d?y(t):c}(s);if(p)return clearTimeout(f),f=setTimeout(h,e),y(s)}return void 0===f&&(f=setTimeout(h,e)),c}return e=D(e)||0,i(n)&&(d=!!n.leading,u=(p="maxWait"in n)?P(D(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),g.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=s=o=f=void 0},g.flush=function(){return void 0===f?c:m(a())},g};var U={name:"ckeditor",render(t){return t(this.tagName)},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){this.value&&Object.assign(this.config,{initialData:this.value}),this.editor.create(this.$el,this.config).then(t=>{this.instance=t,t.isReadOnly=this.disabled,this.$_setUpEditorEvents(),this.$emit("ready",t)}).catch(t=>{console.error(t)})},beforeDestroy(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{value(t,e){t!==e&&t!==this.$_lastEditorData&&this.instance.setData(t)},disabled(t){this.instance.isReadOnly=t}},methods:{$_setUpEditorEvents(){const t=this.instance;t.model.document.on("change:data",F(e=>{const n=this.$_lastEditorData=t.getData();this.$emit("input",n,e,t)},300)),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})}}};const k={install(t){t.component("ckeditor",U)},component:U};e.default=k}]).default});
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['resource', 'resourceName', 'resourceId', 'field']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormField.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormField.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova */ "./node_modules/laravel-nova/dist/index.js");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-vue */ "./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bashgeek_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bashgeek/ckeditor5-build-classic */ "./node_modules/@bashgeek/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _bashgeek_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bashgeek_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor5_upload_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ckeditor5/upload-adapter */ "./resources/js/ckeditor5/upload-adapter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_0__["FormField"], laravel_nova__WEBPACK_IMPORTED_MODULE_0__["HandlesValidationErrors"]],
  components: {
    ckeditor: _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_1___default.a.component
  },
  props: ['resourceName', 'resourceId', 'field'],
  data: function data() {
    return {
      editor: _bashgeek_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a,
      defaultEditorConfig: {
        nova: {
          resourceName: this.resourceName,
          field: this.field,
          draftId: uuidv4()
        },
        language: 'en',
        toolbar: this.field.options.toolbar,
        heading: this.field.options.heading,
        image: this.field.options.image,
        fontFamily: this.field.options.fontFamily,
        extraPlugins: [this.createUploadAdapterPlugin]
      }
    };
  },
  computed: {
    draftId: function draftId() {
      return this.defaultEditorConfig.nova.draftId;
    },
    editorConfig: function editorConfig() {
      var editorConfig = this.defaultEditorConfig;

      if (!editorConfig.nova.field.withFiles) {
        editorConfig.removePlugins = ['Image', 'ImageToolbar', 'ImageCaption', 'ImageStyle', 'ImageTextAlternate', 'ImageUpload'];
        editorConfig.image = {};
        editorConfig.extraPlugins = [];
      }

      return editorConfig;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.cleanUp();
  },
  methods: {
    /**
     * Set the initial, internal value for the field.
     */
    setInitialValue: function setInitialValue() {//
    },

    /**
     * Set the editor initial, internal value for the field when the editor is ready.
     */
    setEditorInitialValue: function setEditorInitialValue(editor) {
      this.value = this.field.value || '';
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill: function fill(formData) {
      formData.append(this.field.attribute, this.value || '');
      formData.append(this.field.attribute + 'DraftId', this.draftId);
    },

    /**
     * Update the field's internal value.
     */
    handleChange: function handleChange(value) {
      this.value = value;
    },

    /**
    * Create CKEditor upload adapter plugin.
    */
    createUploadAdapterPlugin: function createUploadAdapterPlugin(editor) {
      var novaConfig = editor.config.get('nova');

      editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
        return new _ckeditor5_upload_adapter__WEBPACK_IMPORTED_MODULE_3__["default"](loader, novaConfig.resourceName, novaConfig.field, novaConfig.draftId);
      };
    },

    /**
     * Purge pending attachments for the draft
     */
    cleanUp: function cleanUp() {
      if (this.field.withFiles) {
        Nova.request()["delete"]("/nova-vendor/ckeditor5-classic/".concat(this.resourceName, "/attachments/").concat(this.field.attribute, "/").concat(this.draftId)).then(function (response) {
          return console.log(response);
        })["catch"](function (error) {});
      }
    }
  }
});

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IndexField.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/IndexField.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['resourceName', 'field']
});

/***/ }),

/***/ "./node_modules/laravel-nova/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/laravel-nova/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(46);
var isBuffer = __webpack_require__(156);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(65);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(7);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(59);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(122);
var toPrimitive = __webpack_require__(142);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(68);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    getRawTag = __webpack_require__(188),
    objectToString = __webpack_require__(213);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(197);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isLength = __webpack_require__(73);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(109);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(42);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(42);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(113);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(65);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(170),
    getValue = __webpack_require__(189);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['1/2', '1/3', '2/3', '1/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(154);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Errors = __webpack_require__(66);

Object.defineProperty(exports, 'Errors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Errors).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(101);
var buildURL = __webpack_require__(104);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(108);
var createError = __webpack_require__(45);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(103);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(106);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(100);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardSizes = exports.SingularOrPlural = exports.Minimum = exports.Capitalize = exports.Inflector = exports.Errors = exports.TogglesTrashed = exports.PerPageable = exports.PerformsSearches = exports.Paginatable = exports.InteractsWithResourceInformation = exports.InteractsWithQueryString = exports.InteractsWithDates = exports.HasCards = exports.HandlesValidationErrors = exports.FormField = exports.Filterable = exports.Deletable = exports.BehavesAsPanel = undefined;

var _BehavesAsPanel = __webpack_require__(77);

var _BehavesAsPanel2 = _interopRequireDefault(_BehavesAsPanel);

var _Deletable = __webpack_require__(78);

var _Deletable2 = _interopRequireDefault(_Deletable);

var _Filterable = __webpack_require__(79);

var _Filterable2 = _interopRequireDefault(_Filterable);

var _FormField = __webpack_require__(80);

var _FormField2 = _interopRequireDefault(_FormField);

var _HandlesValidationErrors = __webpack_require__(81);

var _HandlesValidationErrors2 = _interopRequireDefault(_HandlesValidationErrors);

var _HasCards = __webpack_require__(82);

var _HasCards2 = _interopRequireDefault(_HasCards);

var _InteractsWithDates = __webpack_require__(83);

var _InteractsWithDates2 = _interopRequireDefault(_InteractsWithDates);

var _InteractsWithQueryString = __webpack_require__(84);

var _InteractsWithQueryString2 = _interopRequireDefault(_InteractsWithQueryString);

var _InteractsWithResourceInformation = __webpack_require__(85);

var _InteractsWithResourceInformation2 = _interopRequireDefault(_InteractsWithResourceInformation);

var _Paginatable = __webpack_require__(86);

var _Paginatable2 = _interopRequireDefault(_Paginatable);

var _PerformsSearches = __webpack_require__(88);

var _PerformsSearches2 = _interopRequireDefault(_PerformsSearches);

var _PerPageable = __webpack_require__(87);

var _PerPageable2 = _interopRequireDefault(_PerPageable);

var _TogglesTrashed = __webpack_require__(89);

var _TogglesTrashed2 = _interopRequireDefault(_TogglesTrashed);

var _inflectorJs = __webpack_require__(93);

var _inflectorJs2 = _interopRequireDefault(_inflectorJs);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

var _capitalize = __webpack_require__(90);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _minimum = __webpack_require__(91);

var _minimum2 = _interopRequireDefault(_minimum);

var _formBackendValidation = __webpack_require__(41);

var _singularOrPlural = __webpack_require__(92);

var _singularOrPlural2 = _interopRequireDefault(_singularOrPlural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util
exports.BehavesAsPanel = _BehavesAsPanel2.default;
exports.Deletable = _Deletable2.default;
exports.Filterable = _Filterable2.default;
exports.FormField = _FormField2.default;
exports.HandlesValidationErrors = _HandlesValidationErrors2.default;
exports.HasCards = _HasCards2.default;
exports.InteractsWithDates = _InteractsWithDates2.default;
exports.InteractsWithQueryString = _InteractsWithQueryString2.default;
exports.InteractsWithResourceInformation = _InteractsWithResourceInformation2.default;
exports.Paginatable = _Paginatable2.default;
exports.PerformsSearches = _PerformsSearches2.default;
exports.PerPageable = _PerPageable2.default;
exports.TogglesTrashed = _TogglesTrashed2.default;
exports.Errors = _formBackendValidation.Errors;
exports.Inflector = _inflectorJs2.default;
exports.Capitalize = _capitalize2.default;
exports.Minimum = _minimum2.default;
exports.SingularOrPlural = _singularOrPlural2.default;
exports.CardSizes = _cardSizes2.default; // Mixins

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(138);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(126);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(134);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(135);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(31);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var invoke = __webpack_require__(123);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Errors);

        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */


    _createClass(Errors, [{
        key: "all",
        value: function all() {
            return this.errors;
        }

        /**
         * Determine if any errors exists for the given field or object.
         *
         * @param {string} field
         */

    }, {
        key: "has",
        value: function has(field) {
            var hasError = this.errors.hasOwnProperty(field);

            if (!hasError) {
                var errors = Object.keys(this.errors).filter(function (e) {
                    return e.startsWith(field + ".") || e.startsWith(field + "[");
                });

                hasError = errors.length > 0;
            }

            return hasError;
        }
    }, {
        key: "first",
        value: function first(field) {
            return this.get(field)[0];
        }
    }, {
        key: "get",
        value: function get(field) {
            return this.errors[field] || [];
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record() {
            var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.errors = errors;
        }

        /**
         * Clear a specific field, object or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }

            var errors = Object.assign({}, this.errors);

            Object.keys(errors).filter(function (e) {
                return e === field || e.startsWith(field + ".") || e.startsWith(field + "[");
            }).forEach(function (e) {
                return delete errors[e];
            });

            this.errors = errors;
        }
    }]);

    return Errors;
}();

exports.default = Errors;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(177),
    isArguments = __webpack_require__(229),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(230),
    isIndex = __webpack_require__(70),
    isTypedArray = __webpack_require__(231);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(178);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['resourceName', 'resourceId', 'resource', 'panel'],

  methods: {
    /**
     * Handle the actionExecuted event and pass it up the chain.
     */
    actionExecuted: function actionExecuted() {
      this.$emit('actionExecuted');
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(114);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Open the delete menu modal.
     */
    openDeleteModal: function openDeleteModal() {
      this.deleteModalOpen = true;
    },


    /**
     * Delete the given resources.
     */
    deleteResources: function deleteResources(resources) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.viaManyToMany) {
        return this.detachResources(resources);
      }

      return Nova.request({
        url: '/nova-api/' + this.resourceName,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this.deleteModalOpen = false;
        _this.getResources();
      });
    },


    /**
     * Delete the selected resources.
     */
    deleteSelectedResources: function deleteSelectedResources() {
      this.deleteResources(this.selectedResources);
    },


    /**
     * Delete all of the matching resources.
     */
    deleteAllMatchingResources: function deleteAllMatchingResources() {
      var _this2 = this;

      if (this.viaManyToMany) {
        return this.detachAllMatchingResources();
      }

      return Nova.request({
        url: this.deleteAllMatchingResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this2.deleteModalOpen = false;
        _this2.getResources();
      });
    },


    /**
     * Detach the given resources.
     */
    detachResources: function detachResources(resources) {
      var _this3 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(function () {
        _this3.deleteModalOpen = false;
        _this3.getResources();
      });
    },


    /**
     * Detach all of the matching resources.
     */
    detachAllMatchingResources: function detachAllMatchingResources() {
      var _this4 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this4.deleteModalOpen = false;
        _this4.getResources();
      });
    },


    /**
     * Force delete the given resources.
     */
    forceDeleteResources: function forceDeleteResources(resources) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/force',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this5.deleteModalOpen = false;

        _this5.getResources();
      });
    },


    /**
     * Force delete the selected resources.
     */
    forceDeleteSelectedResources: function forceDeleteSelectedResources() {
      this.forceDeleteResources(this.selectedResources);
    },


    /**
     * Force delete all of the matching resources.
     */
    forceDeleteAllMatchingResources: function forceDeleteAllMatchingResources() {
      var _this6 = this;

      return Nova.request({
        url: this.forceDeleteSelectedResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this6.deleteModalOpen = false;
        _this6.getResources();
      });
    },


    /**
     * Restore the given resources.
     */
    restoreResources: function restoreResources(resources) {
      var _this7 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/restore',
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this7.restoreModalOpen = false;

        _this7.getResources();
      });
    },


    /**
     * Restore the selected resources.
     */
    restoreSelectedResources: function restoreSelectedResources() {
      this.restoreResources(this.selectedResources);
    },


    /**
     * Restore all of the matching resources.
     */
    restoreAllMatchingResources: function restoreAllMatchingResources() {
      var _this8 = this;

      return Nova.request({
        url: this.restoreAllMatchingResourcesEndpoint,
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this8.restoreModalOpen = false;
        _this8.getResources();
      });
    }
  },

  computed: {
    /**
     * Get the delete all matching resources endpoint.
     */
    deleteAllMatchingResourcesEndpoint: function deleteAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens;
      }

      return '/nova-api/' + this.resourceName;
    },


    /**
     * Get the force delete all of the matching resources endpoint.
     */
    forceDeleteSelectedResourcesEndpoint: function forceDeleteSelectedResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/force';
      }

      return '/nova-api/' + this.resourceName + '/force';
    },


    /**
     * Get the restore all of the matching resources endpoint.
     */
    restoreAllMatchingResourcesEndpoint: function restoreAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/restore';
      }

      return '/nova-api/' + this.resourceName + '/restore';
    },


    /**
     * Get the query string for a deletable resource request.
     */
    queryString: function queryString() {
      return {
        search: this.currentSearch,
        filters: this.encodedFilters,
        trashed: this.currentTrashed,
        viaResource: this.viaResource,
        viaResourceId: this.viaResourceId,
        viaRelationship: this.viaRelationship
      };
    }
  }
};


function mapResources(resources) {
  return _.map(resources, function (resource) {
    return resource.id.value;
  });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _each = __webpack_require__(226);

var _each2 = _interopRequireDefault(_each);

var _get = __webpack_require__(228);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Clear filters and reset the resource table
     */
    clearSelectedFilters: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lens) {
        var _updateQueryString;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lens) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName
                });

              case 7:

                this.updateQueryString((_updateQueryString = {}, (0, _defineProperty3.default)(_updateQueryString, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString, this.filterParameter, ''), _updateQueryString));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clearSelectedFilters(_x) {
        return _ref.apply(this, arguments);
      }

      return clearSelectedFilters;
    }(),


    /**
     * Handle a filter state change.
     */
    filterChanged: function filterChanged() {
      var _updateQueryString2;

      this.updateQueryString((_updateQueryString2 = {}, (0, _defineProperty3.default)(_updateQueryString2, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString2, this.filterParameter, this.$store.getters[this.resourceName + '/currentEncodedFilters']), _updateQueryString2));
    },


    /**
     * Set up filters for the current view
     */
    initializeFilters: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(lens) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Clear out the filters from the store first
                this.$store.commit(this.resourceName + '/clearFilters');

                _context2.next = 3;
                return this.$store.dispatch(this.resourceName + '/fetchFilters', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context2.next = 5;
                return this.initializeState(lens);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initializeFilters(_x2) {
        return _ref2.apply(this, arguments);
      }

      return initializeFilters;
    }(),


    /**
     * Initialize the filter state
     */
    initializeState: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(lens) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.initialEncodedFilters) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.$store.dispatch(this.resourceName + '/initializeCurrentFilterValuesFromQueryString', this.initialEncodedFilters);

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initializeState(_x3) {
        return _ref3.apply(this, arguments);
      }

      return initializeState;
    }()
  },

  computed: {
    /**
     * Get the name of the filter query string variable.
     */
    filterParameter: function filterParameter() {
      return this.resourceName + '_filter';
    }
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    resourceName: {},
    field: {}
  },

  data: function data() {
    return {
      value: ''
    };
  },

  mounted: function mounted() {
    var _this = this;

    this.setInitialValue();

    // Add a default fill method for the field
    this.field.fill = this.fill;

    // Register a global event for setting the field's value
    Nova.$on(this.field.attribute + '-value', function (value) {
      _this.value = value;
    });
  },
  destroyed: function destroyed() {
    Nova.$off(this.field.attribute + '-value');
  },


  methods: {
    /*
     * Set the initial value for the field
     */
    setInitialValue: function setInitialValue() {
      this.value = !(this.field.value === undefined || this.field.value === null) ? this.field.value : '';
    },


    /**
     * Provide a function that fills a passed FormData object with the
     * field's internal value attribute
     */
    fill: function fill(formData) {
      formData.append(this.field.attribute, String(this.value));
    },


    /**
     * Update the field's internal value
     */
    handleChange: function handleChange(value) {
      this.value = value;
    }
  },

  computed: {
    /**
     * Determine if the field is in readonly mode
     */
    isReadonly: function isReadonly() {
      return this.field.readonly || _.get(this.field, 'extraAttributes.readonly');
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formBackendValidation = __webpack_require__(41);

exports.default = {
  props: {
    errors: {
      default: function _default() {
        return new _formBackendValidation.Errors();
      }
    }
  },

  data: function data() {
    return {
      errorClass: 'border-danger'
    };
  },

  computed: {
    errorClasses: function errorClasses() {
      return this.hasError ? [this.errorClass] : [];
    },
    fieldAttribute: function fieldAttribute() {
      return this.field.attribute;
    },
    hasError: function hasError() {
      return this.errors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.errors.first(this.fieldAttribute);
      }
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        loadCards: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return { cards: [] };
    },

    /**
     * Fetch all of the metrics panels for this view
     */
    created: function created() {
        this.fetchCards();
    },


    watch: {
        cardsEndpoint: function cardsEndpoint() {
            this.fetchCards();
        }
    },

    methods: {
        fetchCards: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _ref2, cards;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.loadCards) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 3;
                                return Nova.request().get(this.cardsEndpoint, {
                                    params: this.extraCardParams
                                });

                            case 3:
                                _ref2 = _context.sent;
                                cards = _ref2.data;

                                this.cards = cards;

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchCards() {
                return _ref.apply(this, arguments);
            }

            return fetchCards;
        }()
    },

    computed: {
        /**
         * Determine whether we have cards to show on the Dashboard
         */
        shouldShowCards: function shouldShowCards() {
            return this.cards.length > 0;
        },


        /**
         * Return the small cards used for the Dashboard
         */
        smallCards: function smallCards() {
            return _.filter(this.cards, function (c) {
                return _cardSizes2.default.indexOf(c.width) !== -1;
            });
        },


        /**
         * Return the full-width cards used for the Dashboard
         */
        largeCards: function largeCards() {
            return _.filter(this.cards, function (c) {
                return c.width == 'full';
            });
        },


        /**
         * Get the extra card params to pass to the endpoint.
         */
        extraCardParams: function extraCardParams() {
            return null;
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    /**
     * Convert the given localized date time string to the application's timezone.
     */
    toAppTimezone: function toAppTimezone(value) {
      return value ? moment.tz(value, this.userTimezone).clone().tz(Nova.config.timezone).format('YYYY-MM-DD HH:mm:ss') : value;
    },


    /**
     * Convert the given application timezone date time string to the local timezone.
     */
    fromAppTimezone: function fromAppTimezone(value) {
      if (!value) {
        return value;
      }

      return moment.tz(value, Nova.config.timezone).clone().tz(this.userTimezone).format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date time for the given field.
     */
    localizeDateTimeField: function localizeDateTimeField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return this.usesTwelveHourTime ? localized.format('YYYY-MM-DD h:mm:ss A') : localized.format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date for the given field.
     */
    localizeDateField: function localizeDateField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return localized.format('YYYY-MM-DD');
    }
  },

  computed: {
    /**
     * Get the user's local timezone.
     */
    userTimezone: function userTimezone() {
      return Nova.config.userTimezone ? Nova.config.userTimezone : moment.tz.guess();
    },


    /**
     * Determine if the user is used to 12 hour time.
     */
    usesTwelveHourTime: function usesTwelveHourTime() {
      return _.endsWith(new Date().toLocaleString(), 'AM') || _.endsWith(new Date().toLocaleString(), 'PM');
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults = __webpack_require__(225);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        /**
         * Update the given query string values.
         */
        updateQueryString: function updateQueryString(value) {
            this.$router.push({ query: (0, _defaults2.default)(value, this.$route.query) });
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    /**
     * Get the resource information object for the current resource.
     */
    resourceInformation: function resourceInformation() {
      var _this = this;

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this.resourceName;
      });
    },


    /**
     * Get the resource information object for the current resource.
     */
    viaResourceInformation: function viaResourceInformation() {
      var _this2 = this;

      if (!this.viaResource) {
        return;
      }

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this2.viaResource;
      });
    },


    /**
     * Determine if the user is authorized to create the current resource.
     */
    authorizedToCreate: function authorizedToCreate() {
      return this.resourceInformation.authorizedToCreate;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Select the previous page.
     */
    selectPreviousPage: function selectPreviousPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage - 1));
    },


    /**
     * Select the next page.
     */
    selectNextPage: function selectNextPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage + 1));
    }
  },

  computed: {
    /**
     * Get the current page from the query string.
     */
    currentPage: function currentPage() {
      return parseInt(this.$route.query[this.pageParameter] || 1);
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return { perPage: 25 };
  },

  methods: {
    /**
     * Sync the per page values from the query string.
     */
    initializePerPageFromQueryString: function initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage;
    },


    /**
     * Update the desired amount of resources per page.
     */
    perPageChanged: function perPageChanged() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.perPageParameter, this.perPage));
    }
  },

  computed: {
    /**
     * Get the current per page value from the query string.
     */
    currentPerPage: function currentPerPage() {
      return this.$route.query[this.perPageParameter] || 25;
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = __webpack_require__(224);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      search: '',
      selectedResource: '',
      availableResources: []
    };
  },

  methods: {
    /**
     * Set the currently selected resource
     */
    selectResource: function selectResource(resource) {
      this.selectedResource = resource;
    },


    /**
     * Handle the search box being cleared.
     */
    handleSearchCleared: function handleSearchCleared() {
      this.availableResources = [];
    },


    /**
     * Clear the selected resource and availableResources
     */
    clearSelection: function clearSelection() {
      this.selectedResource = '';
      this.availableResources = [];
    },


    /**
     * Perform a search to get the relatable resources.
     */
    performSearch: function performSearch(search) {
      var _this = this;

      this.search = search;

      var trimmedSearch = search.trim();
      // If the user performs an empty search, it will load all the results
      // so let's just set the availableResources to an empty array to avoid
      // loading a huge result set
      if (trimmedSearch == '') {
        this.clearSelection();

        return;
      }

      this.debouncer(function () {
        _this.selectedResource = '';
        _this.getAvailableResources(trimmedSearch);
      }, 500);
    },


    /**
     * Debounce function for the search handler
     */
    debouncer: (0, _debounce2.default)(function (callback) {
      return callback();
    }, 500)
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      withTrashed: false
    };
  },

  methods: {
    /**
     * Toggle the trashed state of the search
     */
    toggleWithTrashed: function toggleWithTrashed() {
      this.withTrashed = !this.withTrashed;
    },


    /**
     * Enable searching for trashed resources
     */
    enableWithTrashed: function enableWithTrashed() {
      this.withTrashed = true;
    },


    /**
     * Disable searching for trashed resources
     */
    disableWithTrashed: function disableWithTrashed() {
      this.withTrashed = false;
    }
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string) {
    return (0, _upperFirst2.default)(string);
};

var _upperFirst = __webpack_require__(238);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (originalPromise) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return _promise2.default.all([originalPromise, new _promise2.default(function (resolve) {
        setTimeout(function () {
            return resolve();
        }, delay);
    })]).then(function (result) {
        return result[0];
    });
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = singularOrPlural;

var _ = __webpack_require__(47);

function singularOrPlural(value, suffix) {
    if (value > 1 || value == 0) return _.Inflector.pluralize(suffix);
    return _.Inflector.singularize(suffix);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Javascript inflector
 * 
 * @author Dida Nurwanda <didanurwanda@gmail.com>
 * @since 1.0
 */


var _Inflector = {

    uncountableWords : [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    pluralRules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    singularRules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    nonTitlecasedWords: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    idSuffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    spaceOrUnderbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbarPrefix: new RegExp('^_'),

    applyRules: function(str, rules, skip, override) {
        if (override) {
            str = override;
        } else {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore) {
                for (var x = 0; x < rules.length; x++) {
                    if (str.match(rules[x][0])) {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    },


    /*
    Inflector.pluralize('person')           -> 'people'
    Inflector.pluralize('octopus')          -> 'octopi'
    Inflector.pluralize('Hat')              -> 'Hats'
    Inflector.pluralize('person', 'guys')   -> 'guys'    
    */
    pluralize: function(str, plural) {
        return this.applyRules(
            str,
            this.pluralRules,
            this.uncountableWords,
            plural
        );
    },

    /*
    Inflector.singularize('person')         -> 'person'
    Inflector.singularize('octopi')         -> 'octopus'
    Inflector.singularize('hats')           -> 'hat'
    Inflector.singularize('guys', 'person') -> 'person'
    */
    singularize: function(str, singular) {
        return this.applyRules(
            str,
            this.singularRules,
            this.uncountableWords, 
            singular
        );
    },

    /*
    Inflector.camelize('message_properties')        -> 'MessageProperties'
    Inflector.camelize('message_properties', true)  -> 'messageProperties'
    */
    camelize: function(str, lowFirstLetter) {
       // var str = str.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');

        // fix 
        if (lowFirstLetter === true) {
          var first = str.charAt(0).toLowerCase();
          var last = str.slice(1);
          str = first + last;
        }

        return str;
    },

    /*
    Inflector.underscore('MessageProperties')       -> 'message_properties'
    Inflector.underscore('messageProperties')       -> 'message_properties'
    */
    underscore: function(str) { 
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(this.uppercase, '_$1');
            str_path[i] = str_path[i].replace(this.underbarPrefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    },

    /*
    Inflector.humanize('message_properties')        -> 'Message properties'
    Inflector.humanize('message_properties')        -> 'message properties'
    */
    humanize: function(str, lowFirstLetter) {
        var str = str.toLowerCase();
        str = str.replace(this.idSuffix, '');
        str = str.replace(this.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = this.capitalize(str);
        }
        return str;
    },

    /*
    Inflector.capitalize('message_properties')      -> 'Message_properties'
    Inflector.capitalize('message properties')      -> 'Message properties'
    */
    capitalize: function(str) {
        var str = str.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.dasherize('message_properties')       -> 'message-properties'
    Inflector.dasherize('message properties')       -> 'message-properties'
    */
    dasherize: function(str) {
        str = str.replace(this.spaceOrUnderbar, '-');
        return str;
    },

    /*
    Inflector.camel2words('message_properties')         -> 'Message Properties'
    Inflector.camel2words('message properties')         -> 'Message Properties'
    Inflactor.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
    */
    camel2words: function(str, allFirstUpper) {
        //var str = str.toLowerCase();
        if (allFirstUpper === true) {
            str = this.camelize(str);
            str = this.underscore(str);
        } else {
            str = str.toLowerCase();
        }

        str = str.replace(this.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this.nonTitlecasedWords.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = this.capitalize(d[i]);
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
    */
    demodulize: function(str) {
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    },

    /*
    Inflector.tableize('MessageBusProperty')    -> 'message_bus_properties'
    */
    tableize: function(str) {
        str = this.pluralize(this.underscore(str));
        return str;
    },

    /*
    Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
    */
    classify: function(str) {
        str = this.singularize(this.camelize(str));
        return str;
    },

    /*
    Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
    Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
    */   
    foreignKey: function(str, dropIdUbar) {
        str = this.underscore(this.demodulize(str)) + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    },

    /*
    Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
    */
    ordinalize: function(str) {
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    }
}

if (true) {
    module.exports = _Inflector;
} else {}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(46);
var Axios = __webpack_require__(97);
var defaults = __webpack_require__(25);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(96);
axios.isCancel = __webpack_require__(44);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(111);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(25);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(98);
var dispatchRequest = __webpack_require__(99);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(102);
var isCancel = __webpack_require__(44);
var defaults = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(107);
var combineURLs = __webpack_require__(105);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(45);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(150);
__webpack_require__(153);
__webpack_require__(149);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(63);
var toAbsoluteIndex = __webpack_require__(141);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(124);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(63);
var getIterFn = __webpack_require__(144);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(131);
var descriptor = __webpack_require__(59);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(62).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(133);
var pIE = __webpack_require__(136);
var toObject = __webpack_require__(64);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(64);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(120)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(118);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(130) });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 148 */
/***/ (function(module, exports) {



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(1);
var ctx = __webpack_require__(16);
var classof = __webpack_require__(51);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(119);
var forOf = __webpack_require__(121);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(62).set;
var microtask = __webpack_require__(129)();
var newPromiseCapabilityModule = __webpack_require__(31);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(143);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(139)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(127)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(140)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(31);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(66);

var _Errors2 = _interopRequireDefault(_Errors);

var _util = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    function Form() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Form);

        this.processing = false;
        this.successful = false;

        this.withData(data).withOptions(options).withErrors({});
    }

    _createClass(Form, [{
        key: 'withData',
        value: function withData(data) {
            if ((0, _util.isArray)(data)) {
                data = data.reduce(function (carry, element) {
                    carry[element] = '';
                    return carry;
                }, {});
            }

            this.setInitialValues(data);

            this.errors = new _Errors2.default();
            this.processing = false;
            this.successful = false;

            for (var field in data) {
                (0, _util.guardAgainstReservedFieldName)(field);

                this[field] = data[field];
            }

            return this;
        }
    }, {
        key: 'withErrors',
        value: function withErrors(errors) {
            this.errors = new _Errors2.default(errors);

            return this;
        }
    }, {
        key: 'withOptions',
        value: function withOptions(options) {
            this.__options = {
                resetOnSuccess: true
            };

            if (options.hasOwnProperty('resetOnSuccess')) {
                this.__options.resetOnSuccess = options.resetOnSuccess;
            }

            if (options.hasOwnProperty('onSuccess')) {
                this.onSuccess = options.onSuccess;
            }

            if (options.hasOwnProperty('onFail')) {
                this.onFail = options.onFail;
            }

            this.__http = options.http || window.axios || __webpack_require__(94);

            if (!this.__http) {
                throw new Error('No http library provided. Either pass an http option, or install axios.');
            }

            return this;
        }

        /**
         * Fetch all relevant data for the form.
         */

    }, {
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.initial) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Fetch specific data for the form.
         *
         * @param {array} fields
         * @return {object}
         */

    }, {
        key: 'only',
        value: function only(fields) {
            var _this = this;

            return fields.reduce(function (filtered, field) {
                filtered[field] = _this[field];
                return filtered;
            }, {});
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            (0, _util.merge)(this, this.initial);

            this.errors.clear();
        }
    }, {
        key: 'setInitialValues',
        value: function setInitialValues(values) {
            this.initial = {};

            (0, _util.merge)(this.initial, values);
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            var _this2 = this;

            Object.keys(data).forEach(function (field) {
                (0, _util.guardAgainstReservedFieldName)(field);

                if (_this2.hasOwnProperty(field)) {
                    (0, _util.merge)(_this2, _defineProperty({}, field, data[field]));
                }
            });

            return this;
        }

        /**
         * Clear the form fields.
         */

    }, {
        key: 'clear',
        value: function clear() {
            for (var field in this.initial) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this3 = this;

            this.__validateRequestType(requestType);
            this.errors.clear();
            this.processing = true;
            this.successful = false;

            return new Promise(function (resolve, reject) {
                _this3.__http[requestType](url, _this3.hasFiles() ? (0, _util.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
                    _this3.processing = false;
                    _this3.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this3.processing = false;
                    _this3.onFail(error);

                    reject(error);
                });
            });
        }
    }, {
        key: 'hasFiles',
        value: function hasFiles() {
            for (var property in this.initial) {
                if (this[property] instanceof File || this[property] instanceof FileList) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.successful = true;

            if (this.__options.resetOnSuccess) {
                this.reset();
            }
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onFail',
        value: function onFail(error) {
            this.successful = false;

            if (error.response && error.response.data.errors) {
                this.errors.record(error.response.data.errors);
            }
        }

        /**
         * Get the error message(s) for the given field.
         *
         * @param field
         */

    }, {
        key: 'hasError',
        value: function hasError(field) {
            return this.errors.has(field);
        }

        /**
         * Get the first error message for the given field.
         *
         * @param {string} field
         * @return {string}
         */

    }, {
        key: 'getError',
        value: function getError(field) {
            return this.errors.first(field);
        }

        /**
         * Get the error messages for the given field.
         *
         * @param {string} field
         * @return {array}
         */

    }, {
        key: 'getErrors',
        value: function getErrors(field) {
            return this.errors.get(field);
        }
    }, {
        key: '__validateRequestType',
        value: function __validateRequestType(requestType) {
            var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

            if (requestTypes.indexOf(requestType) === -1) {
                throw new Error('`' + requestType + '` is not a valid request type, ' + ('must be one of: `' + requestTypes.join('`, `') + '`.'));
            }
        }
    }], [{
        key: 'create',
        value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Form().withData(data);
        }
    }]);

    return Form;
}();

exports.default = Form;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.guardAgainstReservedFieldName = guardAgainstReservedFieldName;
exports.merge = merge;
exports.cloneDeep = cloneDeep;
exports.objectToFormData = objectToFormData;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

var reservedFieldNames = exports.reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];

function guardAgainstReservedFieldName(fieldName) {
    if (reservedFieldNames.indexOf(fieldName) !== -1) {
        throw new Error('Field name ' + fieldName + ' isn\'t allowed to be used in a Form or Errors instance.');
    }
}

function merge(a, b) {
    for (var key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

function cloneDeep(object) {
    if (object === null) {
        return null;
    }

    if (Array.isArray(object)) {
        return [].concat(_toConsumableArray(object));
    }

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var clone = {};

        for (var key in object) {
            clone[key] = cloneDeep(object[key]);
        }

        return clone;
    }

    return object;
}

function objectToFormData(object) {
    var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (var property in object) {
        _appendToFormData(formData, _getKey(parent, property), object[property]);
    }

    return formData;
}

function _getKey(parent, property) {
    return parent ? parent + '[' + property + ']' : property;
}

function _appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(190),
    hashDelete = __webpack_require__(191),
    hashGet = __webpack_require__(192),
    hashHas = __webpack_require__(193),
    hashSet = __webpack_require__(194);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(199),
    listCacheDelete = __webpack_require__(200),
    listCacheGet = __webpack_require__(201),
    listCacheHas = __webpack_require__(202),
    listCacheSet = __webpack_require__(203);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(204),
    mapCacheDelete = __webpack_require__(205),
    mapCacheGet = __webpack_require__(206),
    mapCacheHas = __webpack_require__(207),
    mapCacheSet = __webpack_require__(208);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(167),
    createBaseEach = __webpack_require__(184);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(185);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(166),
    keys = __webpack_require__(232);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(181),
    toKey = __webpack_require__(220);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isMasked = __webpack_require__(198),
    isObject = __webpack_require__(8),
    toSource = __webpack_require__(221);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isLength = __webpack_require__(73),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(71),
    nativeKeys = __webpack_require__(210);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isPrototype = __webpack_require__(71),
    nativeKeysIn = __webpack_require__(211);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39),
    overRest = __webpack_require__(215),
    setToString = __webpack_require__(216);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(223),
    defineProperty = __webpack_require__(187),
    identity = __webpack_require__(39);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    arrayMap = __webpack_require__(163),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(196),
    stringToPath = __webpack_require__(219),
    toString = __webpack_require__(74);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(176);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(22);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(182),
    hasUnicode = __webpack_require__(69),
    stringToArray = __webpack_require__(218),
    toString = __webpack_require__(74);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38),
    isArrayLike = __webpack_require__(22),
    isIndex = __webpack_require__(70),
    isObject = __webpack_require__(8);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(183);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(157),
    ListCache = __webpack_require__(158),
    Map = __webpack_require__(159);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(234);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(68);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(161);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(175),
    shortOut = __webpack_require__(217);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(164),
    hasUnicode = __webpack_require__(69),
    unicodeToArray = __webpack_require__(222);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(209);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    now = __webpack_require__(235),
    toNumber = __webpack_require__(237);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(174),
    eq = __webpack_require__(38),
    isIterateeCall = __webpack_require__(195),
    keysIn = __webpack_require__(233);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(162),
    baseEach = __webpack_require__(165),
    castFunction = __webpack_require__(180),
    isArray = __webpack_require__(13);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(168);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(169),
    isObjectLike = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(236);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(171),
    baseUnary = __webpack_require__(179),
    nodeUtil = __webpack_require__(212);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeys = __webpack_require__(172),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(160);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(186);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(240);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 241 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailField.vue?vue&type=template&id=0224618e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailField.vue?vue&type=template&id=0224618e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "panel-item",
    { attrs: { field: _vm.field } },
    [
      _c(
        "template",
        { slot: "value" },
        [
          _c("excerpt", {
            attrs: {
              content: _vm.field.value,
              "should-show": _vm.field.shouldShow
            }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormField.vue?vue&type=template&id=c023248a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormField.vue?vue&type=template&id=c023248a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "default-field",
    {
      attrs: {
        field: _vm.field,
        errors: _vm.errors,
        "full-width-content": true
      }
    },
    [
      _c("template", { slot: "field" }, [
        _c(
          "div",
          { staticClass: "rounded-lg form-control auto-height" },
          [
            _c("ckeditor", {
              class: _vm.errorClasses,
              attrs: {
                editor: _vm.editor,
                config: _vm.editorConfig,
                id: _vm.field.name,
                placeholder: _vm.field.name
              },
              on: { ready: _vm.setEditorInitialValue },
              model: {
                value: _vm.value,
                callback: function($$v) {
                  _vm.value = $$v
                },
                expression: "value"
              }
            })
          ],
          1
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v(_vm._s(_vm.field.value))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/ckeditor5/upload-adapter.js":
/*!**************************************************!*\
  !*** ./resources/js/ckeditor5/upload-adapter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NovaCKEditor5UploadAdapter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NovaCKEditor5UploadAdapter =
/*#__PURE__*/
function () {
  function NovaCKEditor5UploadAdapter(loader, resourceName, field, draftId) {
    _classCallCheck(this, NovaCKEditor5UploadAdapter);

    this.loader = loader;
    this.resourceName = resourceName;
    this.field = field;
    this.draftId = draftId;
  }

  _createClass(NovaCKEditor5UploadAdapter, [{
    key: "upload",
    value: function upload() {
      var _this = this;

      return this.loader.file.then(function (file) {
        var data = new FormData();
        data.append('Content-Type', file.type);
        data.append('attachment', file);
        data.append('draftId', _this.draftId);
        return Nova.request().post("/nova-vendor/ckeditor5-classic/".concat(_this.resourceName, "/upload/").concat(_this.field.attribute), data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          if (response.data.uploaded) {
            return {
              "default": response.data.url
            };
          }
        })["catch"](function (error) {
          console.log(error);
          return Promise.reject(error);
        });
      });
    }
  }, {
    key: "abort",
    value: function abort() {}
  }]);

  return NovaCKEditor5UploadAdapter;
}();



/***/ }),

/***/ "./resources/js/components/DetailField.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DetailField.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailField_vue_vue_type_template_id_0224618e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailField.vue?vue&type=template&id=0224618e& */ "./resources/js/components/DetailField.vue?vue&type=template&id=0224618e&");
/* harmony import */ var _DetailField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailField.vue?vue&type=script&lang=js& */ "./resources/js/components/DetailField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailField_vue_vue_type_template_id_0224618e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailField_vue_vue_type_template_id_0224618e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DetailField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DetailField.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DetailField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DetailField.vue?vue&type=template&id=0224618e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DetailField.vue?vue&type=template&id=0224618e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailField_vue_vue_type_template_id_0224618e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailField.vue?vue&type=template&id=0224618e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailField.vue?vue&type=template&id=0224618e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailField_vue_vue_type_template_id_0224618e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailField_vue_vue_type_template_id_0224618e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FormField.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FormField.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormField_vue_vue_type_template_id_c023248a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField.vue?vue&type=template&id=c023248a& */ "./resources/js/components/FormField.vue?vue&type=template&id=c023248a&");
/* harmony import */ var _FormField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField.vue?vue&type=script&lang=js& */ "./resources/js/components/FormField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormField_vue_vue_type_template_id_c023248a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormField_vue_vue_type_template_id_c023248a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormField.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/FormField.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormField.vue?vue&type=template&id=c023248a&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FormField.vue?vue&type=template&id=c023248a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_template_id_c023248a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormField.vue?vue&type=template&id=c023248a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormField.vue?vue&type=template&id=c023248a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_template_id_c023248a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_template_id_c023248a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/IndexField.vue":
/*!************************************************!*\
  !*** ./resources/js/components/IndexField.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexField_vue_vue_type_template_id_9e63f81a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexField.vue?vue&type=template&id=9e63f81a& */ "./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a&");
/* harmony import */ var _IndexField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexField.vue?vue&type=script&lang=js& */ "./resources/js/components/IndexField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexField_vue_vue_type_template_id_9e63f81a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexField_vue_vue_type_template_id_9e63f81a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/IndexField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/IndexField.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/IndexField.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./IndexField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IndexField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexField_vue_vue_type_template_id_9e63f81a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./IndexField.vue?vue&type=template&id=9e63f81a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexField_vue_vue_type_template_id_9e63f81a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexField_vue_vue_type_template_id_9e63f81a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/field.js":
/*!*******************************!*\
  !*** ./resources/js/field.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  Vue.component('index-ckeditor5-classic-field', __webpack_require__(/*! ./components/IndexField */ "./resources/js/components/IndexField.vue"));
  Vue.component('detail-ckeditor5-classic-field', __webpack_require__(/*! ./components/DetailField */ "./resources/js/components/DetailField.vue"));
  Vue.component('form-ckeditor5-classic-field', __webpack_require__(/*! ./components/FormField */ "./resources/js/components/FormField.vue"));
});

/***/ }),

/***/ "./resources/sass/field.scss":
/*!***********************************!*\
  !*** ./resources/sass/field.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./resources/js/field.js ./resources/sass/field.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/bashgeek/Coding/nova-ckeditor5-classic/resources/js/field.js */"./resources/js/field.js");
module.exports = __webpack_require__(/*! /Users/bashgeek/Coding/nova-ckeditor5-classic/resources/sass/field.scss */"./resources/sass/field.scss");


/***/ })

/******/ });