(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-image-viewer"] = factory(require("vue"));
	else
		root["vue-image-viewer"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8376":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "b1d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cb7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8376");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4e2e2a38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-viewer/index.vue?vue&type=template&id=e2e1ab28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"viewer-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"cool-image-viewer__wrapper",style:(("z-index:" + _vm.zIndex)),attrs:{"tabindex":"-1"}},[_c('div',{staticClass:"cool-image-viewer__mask",style:(("background-color:" + _vm.maskBgColor + ";")),on:{"click":_vm.handleTapClose}}),_c('span',{staticClass:"cool-image-viewer__btn cool-image-viewer__close",on:{"click":_vm.close}},[_c('i',{staticClass:"iconfont icon-close"})]),_c('span',{staticClass:"cool-image-viewer__btn cool-image-viewer__pre",on:{"click":_vm.pre}},[_c('i',{staticClass:"iconfont icon-arrow-left"})]),_c('span',{staticClass:"cool-image-viewer__btn cool-image-viewer__next",on:{"click":_vm.next}},[_c('i',{staticClass:"iconfont icon-arrow-right"})]),_c('div',{staticClass:"cool-image-viewer__image"},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.images && _vm.images.length > 0 && _vm.images[_vm.curIndex]),expression:"images && images.length > 0 && images[curIndex]"}],style:(_vm.imgStyle),attrs:{"src":_vm.images[_vm.curIndex]},on:{"mousedown":_vm.handleMouseDown}})]),_c('div',{staticClass:"cool-image-viewer__actions",style:(_vm.actionStyle)},[_c('div',{staticClass:"cool-image-viewer_actions__inner"},[_c('span',{staticClass:"iconfont icon-zoom-out",on:{"click":function($event){return _vm.handleActions('zoomOut')}}}),_c('span',{staticClass:"iconfont icon-zoom-in",on:{"click":function($event){return _vm.handleActions('zoomIn')}}}),_c('span',{staticClass:"cool-image-viewer__actions__divider"}),_c('span',{staticClass:"iconfont icon-refresh-left",on:{"click":function($event){return _vm.handleActions('anticlocelise')}}}),_c('span',{staticClass:"iconfont icon-refresh-right",on:{"click":function($event){return _vm.handleActions('clocelise')}}}),_c('span',{staticClass:"iconfont icon-mirror",on:{"click":function($event){return _vm.handleActions('mirror')}}}),_c('span',{staticClass:"cool-image-viewer__actions__divider"}),_c('span',{staticClass:"iconfont",class:_vm.mode.icon,on:{"click":_vm.toggleMode}}),(_vm.showDownload)?[_c('span',{staticClass:"cool-image-viewer__actions__divider"}),_c('span',{staticClass:"iconfont icon-download",on:{"click":_vm.download}})]:_vm._e()],2)]),_c('transition',{attrs:{"name":"thumbnail-fade"},on:{"after-enter":function($event){return _vm.change(_vm.curIndex)}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(
          _vm.thumbnailTransitionShow &&
          _vm.showThumbnail &&
          _vm.images &&
          _vm.images.length > 1
        ),expression:"\n          thumbnailTransitionShow &&\n          showThumbnail &&\n          images &&\n          images.length > 1\n        "}],ref:"thumbnail",staticClass:"cool-image-viewer__thumbnail",on:{"mouseenter":function($event){return _vm.mouseEnterThumbnail(true)},"mouseleave":function($event){return _vm.mouseEnterThumbnail(false)}}},_vm._l((_vm.images),function(image,index){return _c('div',{key:image + '_thumbnail_' + index,ref:"thumbnail",refInFor:true,staticClass:"cool-image-viewer__thumbnail__inner",class:{ current: _vm.curIndex === index },on:{"click":function($event){return _vm.change(index)}}},[_c('img',{attrs:{"src":image}})])}),0)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/image-viewer/index.vue?vue&type=template&id=e2e1ab28&

// EXTERNAL MODULE: ./packages/image-viewer/assets/iconfont.css
var iconfont = __webpack_require__("b1d6");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./packages/image-viewer/utils/util.js

const isServer = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer;
const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();

const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
})();
const isFirefox = function () {
  return (
    !external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i)
  );
};

function rafThrottle(fn) {
  let locked = false;
  return function (...args) {
    if (locked) return;
    locked = true;
    // eslint-disable-next-line no-unused-vars
    window.requestAnimationFrame((_) => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

function downImage(imgSrc) {
  var image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

    var a = document.createElement("a"); // 生成一个a元素
    var event = new MouseEvent("click"); // 创建一个单击事件
    let file = imgSrc.split("/");
    let imgName = file[file.length - 1];
    a.download = imgName || "img"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgSrc;
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-viewer/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//



const Mode = {
  CONTAIN: {
    name: "contain",
    icon: "icon-full-screen",
  },
  ORIGINAL: {
    name: "original",
    icon: "icon-c-scale-to-original",
  },
};
const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
/* harmony default export */ var image_viewervue_type_script_lang_js_ = ({
  name: "ImageViewer",
  data() {
    return {
      options: {},
      handlePosition: "top",
      mode: Mode.CONTAIN,
      visible: false,
      images: [],
      curIndex: 0,
      zIndex: 2000,
      maskBgColor: "",
      showDownload: false,
      isMouseEnterThumbnail: false,
      thumbnailTransitionShow: false,
      showThumbnail: false,
      transform: {
        scale: 1,
        deg: 0,
        rotateY: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      },
    };
  },
  computed: {
    isSingle() {
      return this.images.length <= 1;
    },
    isFirst() {
      return this.curIndex === 0;
    },
    isLast() {
      return this.curIndex === this.images.length - 1;
    },
    actionStyle() {
      if (this.handlePosition == "bottom") {
        return {
          bottom:
            this.showThumbnail && this.images && this.images.length > 1
              ? "100px"
              : "30px",
          top: "auto",
        };
      }
      return {
        top: "30px",
        bottom: "auto",
      };
    },
    imgStyle() {
      const { scale, deg, rotateY, offsetX, offsetY, enableTransition } =
        this.transform;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) rotateY(${rotateY}deg)`,
        transition: enableTransition ? "transform .3s" : "",
        "margin-left": `${offsetX}px`,
        "margin-top": `${offsetY}px`,
      };
      if (this.mode === Mode.CONTAIN) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    },
  },
  mounted() {
    this.deviceSupportInstall();
    this.visible = true;
  },
  methods: {
    mouseEnterThumbnail(e) {
      this.isMouseEnterThumbnail = e;
    },
    change(index) {
      if (!this.showThumbnail) {
        return;
      }
      this.curIndex = index;
      let vmEl = this.$refs.thumbnail;
      if (!vmEl) return;
      let width = vmEl.clientWidth;
      let scrollLeft = vmEl.scrollLeft;
      let cur = vmEl.children[index].offsetLeft;
      if (width - cur < 160) {
        if (width - cur < 0 && scrollLeft === 0) {
          this.$refs.thumbnail.scrollLeft = cur - width + 160;
        } else {
          this.$refs.thumbnail.scrollLeft = scrollLeft + 80;
        }
      } else if (cur - scrollLeft < 80) {
        this.$refs.thumbnail.scrollLeft = cur - 120;
      }
    },
    pre() {
      if (this.isFirst) return;
      const len = this.images.length;
      this.curIndex = (this.curIndex - 1 + len) % len;
      this.change(this.curIndex);
    },
    next() {
      if (this.isLast) return;
      const len = this.images.length;
      this.curIndex = (this.curIndex + 1) % len;
      this.change(this.curIndex);
    },
    handleMouseDown(e) {
      if (e.button !== 0) return;
      const { offsetX, offsetY } = this.transform;
      const startX = e.pageX;
      const startY = e.pageY;
      this._dragHandler = rafThrottle((ev) => {
        this.transform.offsetX = offsetX + ev.pageX - startX;
        this.transform.offsetY = offsetY + ev.pageY - startY;
      });
      on(document, "mousemove", this._dragHandler);
      on(document, "mouseup", () => {
        off(document, "mousemove", this._dragHandler);
      });
      e.preventDefault();
    },
    deviceSupportInstall() {
      this._keyDownHandler = (e) => {
        e.stopPropagation();
        const keyCode = e.keyCode;
        console.log(keyCode);
        switch (keyCode) {
          case 17:
            this.handleActions("mirror");
            break;
          // ESC
          case 27:
            this.close();
            break;
          // SPACE
          case 32:
            this.toggleMode();
            break;
          // LEFT_ARROW
          case 37:
            this.pre();
            break;
          // UP_ARROW
          case 38:
            this.handleActions("zoomIn");
            break;
          // RIGHT_ARROW
          case 39:
            this.next();
            break;
          // DOWN_ARROW
          case 40:
            this.handleActions("zoomOut");
            break;
        }
      };
      this._mouseWheelHandler = rafThrottle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (this.isMouseEnterThumbnail) {
          let moveForwardStep = -1;
          let moveBackStep = 1;
          let step = 0;
          step = delta > 0 ? moveForwardStep * 50 : moveBackStep * 50;
          this.$refs.thumbnail.scrollLeft =
            this.$refs.thumbnail.scrollLeft + step;
        } else {
          if (delta > 0) {
            this.handleActions("zoomIn", {
              zoomRate: 0.015,
              enableTransition: false,
            });
          } else {
            this.handleActions("zoomOut", {
              zoomRate: 0.015,
              enableTransition: false,
            });
          }
        }
      });
      on(document, "keydown", this._keyDownHandler);
      on(document, mousewheelEventName, this._mouseWheelHandler);
    },
    deviceSupportUninstall() {
      off(document, "keydown", this._keyDownHandler);
      off(document, mousewheelEventName, this._mouseWheelHandler);
      this._keyDownHandler = null;
      this._mouseWheelHandler = null;
    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        rotateY: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      };
    },
    toggleMode() {
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const index = modeValues.indexOf(this.mode);
      const nextIndex = (index + 1) % modeNames.length;
      this.mode = Mode[modeNames[nextIndex]];
      this.reset();
    },
    handleActions(action, options = {}) {
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      };
      const { transform } = this;
      switch (action) {
        case "zoomOut":
          if (transform.scale > 0.2) {
            transform.scale = parseFloat(
              (transform.scale - zoomRate).toFixed(3)
            );
          }
          break;
        case "zoomIn":
          transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3));
          break;
        case "clocelise":
          transform.deg += rotateDeg;
          break;
        case "anticlocelise":
          transform.deg -= rotateDeg;
          break;
        case "mirror":
          transform.rotateY += 180;
          break;
      }
      transform.enableTransition = enableTransition;
    },
    handleTapClose() {
      this.close();
    },
    download() {
      this.$emit("download", this.images[this.curIndex]);
    },
    close() {
      this.deviceSupportUninstall();
      this.visible = false;
      this.thumbnailTransitionShow = false;
      setTimeout(() => {
        this.$emit("close");
        this.$destroy();
        if (this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, 300);
    },
    initOptions(options) {
      this.options = options;
      this.images = options.images || [];
      this.curIndex = options.curIndex || 0;
      this.showDownload = options.showDownload;
      this.zIndex = options.zIndex;
      this.showThumbnail = options.showThumbnail;
      this.maskBgColor = options.maskBgColor;
      this.handlePosition = options.handlePosition;
      this.$nextTick(() => {
        this.thumbnailTransitionShow = true;
      });
    },
  },
});

// CONCATENATED MODULE: ./packages/image-viewer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_image_viewervue_type_script_lang_js_ = (image_viewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/image-viewer/index.vue?vue&type=style&index=0&lang=css&
var image_viewervue_type_style_index_0_lang_css_ = __webpack_require__("cb7b");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./packages/image-viewer/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_image_viewervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var image_viewer = (component.exports);
// CONCATENATED MODULE: ./packages/image-viewer/index.js



const fn = () => {
  return;
};
const defaultOptions = {
  curIndex: 0,
  images: [],
  showDownload: false,
  showThumbnail: false,
  handlePosition: 'top',
  onClose: fn,
  onDownload: fn,
  zIndex: 2000,
  maskBgColor: "rgba(0,0,0,0.5)",
};
const ImageViewerCtor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(image_viewer);
function imageViewer(options = defaultOptions) {
  let instance = new ImageViewerCtor();
  instance.initOptions({
    ...defaultOptions,
    ...options,
  });

  instance.$mount();
  document.body.appendChild(instance.$el);

  instance.$on("close", function () {
    if (options.onClose) {
      options.onClose();
    }
  });
  instance.$on("download", function (e) {
    if (options.onDownload) {
      options.onDownload(e);
    } else {
      downImage(e);
    }
  });

  return {
    $instance: instance,
    close: instance.close,
  };
}

// CONCATENATED MODULE: ./packages/index.js
// 导入组件，组件必须声明 name

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("ImageViewer", imageViewer);
}
// 为组件添加 install 方法，用于按需引入
imageViewer.install = (Vue) => {
  Vue.component("ImageViewer", imageViewer);
};

/* harmony default export */ var packages_0 = (imageViewer);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});