/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([279,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(0);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(20);

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = _dll_vendor;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(50);

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(49);

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(56);

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(32);

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(4);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(25);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(55);

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(27);

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 44,
	"./af.js": 44,
	"./ar": 45,
	"./ar-dz": 46,
	"./ar-dz.js": 46,
	"./ar-kw": 47,
	"./ar-kw.js": 47,
	"./ar-ly": 48,
	"./ar-ly.js": 48,
	"./ar-ma": 49,
	"./ar-ma.js": 49,
	"./ar-sa": 50,
	"./ar-sa.js": 50,
	"./ar-tn": 51,
	"./ar-tn.js": 51,
	"./ar.js": 45,
	"./az": 52,
	"./az.js": 52,
	"./be": 53,
	"./be.js": 53,
	"./bg": 54,
	"./bg.js": 54,
	"./bm": 55,
	"./bm.js": 55,
	"./bn": 56,
	"./bn-bd": 57,
	"./bn-bd.js": 57,
	"./bn.js": 56,
	"./bo": 58,
	"./bo.js": 58,
	"./br": 59,
	"./br.js": 59,
	"./bs": 60,
	"./bs.js": 60,
	"./ca": 61,
	"./ca.js": 61,
	"./cs": 62,
	"./cs.js": 62,
	"./cv": 63,
	"./cv.js": 63,
	"./cy": 64,
	"./cy.js": 64,
	"./da": 65,
	"./da.js": 65,
	"./de": 66,
	"./de-at": 67,
	"./de-at.js": 67,
	"./de-ch": 68,
	"./de-ch.js": 68,
	"./de.js": 66,
	"./dv": 69,
	"./dv.js": 69,
	"./el": 70,
	"./el.js": 70,
	"./en-au": 71,
	"./en-au.js": 71,
	"./en-ca": 72,
	"./en-ca.js": 72,
	"./en-gb": 73,
	"./en-gb.js": 73,
	"./en-ie": 74,
	"./en-ie.js": 74,
	"./en-il": 75,
	"./en-il.js": 75,
	"./en-in": 76,
	"./en-in.js": 76,
	"./en-nz": 77,
	"./en-nz.js": 77,
	"./en-sg": 78,
	"./en-sg.js": 78,
	"./eo": 79,
	"./eo.js": 79,
	"./es": 80,
	"./es-do": 81,
	"./es-do.js": 81,
	"./es-mx": 82,
	"./es-mx.js": 82,
	"./es-us": 83,
	"./es-us.js": 83,
	"./es.js": 80,
	"./et": 84,
	"./et.js": 84,
	"./eu": 85,
	"./eu.js": 85,
	"./fa": 86,
	"./fa.js": 86,
	"./fi": 87,
	"./fi.js": 87,
	"./fil": 88,
	"./fil.js": 88,
	"./fo": 89,
	"./fo.js": 89,
	"./fr": 90,
	"./fr-ca": 91,
	"./fr-ca.js": 91,
	"./fr-ch": 92,
	"./fr-ch.js": 92,
	"./fr.js": 90,
	"./fy": 93,
	"./fy.js": 93,
	"./ga": 94,
	"./ga.js": 94,
	"./gd": 95,
	"./gd.js": 95,
	"./gl": 96,
	"./gl.js": 96,
	"./gom-deva": 97,
	"./gom-deva.js": 97,
	"./gom-latn": 98,
	"./gom-latn.js": 98,
	"./gu": 99,
	"./gu.js": 99,
	"./he": 100,
	"./he.js": 100,
	"./hi": 101,
	"./hi.js": 101,
	"./hr": 102,
	"./hr.js": 102,
	"./hu": 103,
	"./hu.js": 103,
	"./hy-am": 104,
	"./hy-am.js": 104,
	"./id": 105,
	"./id.js": 105,
	"./is": 106,
	"./is.js": 106,
	"./it": 107,
	"./it-ch": 108,
	"./it-ch.js": 108,
	"./it.js": 107,
	"./ja": 109,
	"./ja.js": 109,
	"./jv": 110,
	"./jv.js": 110,
	"./ka": 111,
	"./ka.js": 111,
	"./kk": 112,
	"./kk.js": 112,
	"./km": 113,
	"./km.js": 113,
	"./kn": 114,
	"./kn.js": 114,
	"./ko": 115,
	"./ko.js": 115,
	"./ku": 116,
	"./ku.js": 116,
	"./ky": 117,
	"./ky.js": 117,
	"./lb": 118,
	"./lb.js": 118,
	"./lo": 119,
	"./lo.js": 119,
	"./lt": 120,
	"./lt.js": 120,
	"./lv": 121,
	"./lv.js": 121,
	"./me": 122,
	"./me.js": 122,
	"./mi": 123,
	"./mi.js": 123,
	"./mk": 124,
	"./mk.js": 124,
	"./ml": 125,
	"./ml.js": 125,
	"./mn": 126,
	"./mn.js": 126,
	"./mr": 127,
	"./mr.js": 127,
	"./ms": 128,
	"./ms-my": 129,
	"./ms-my.js": 129,
	"./ms.js": 128,
	"./mt": 130,
	"./mt.js": 130,
	"./my": 131,
	"./my.js": 131,
	"./nb": 132,
	"./nb.js": 132,
	"./ne": 133,
	"./ne.js": 133,
	"./nl": 134,
	"./nl-be": 135,
	"./nl-be.js": 135,
	"./nl.js": 134,
	"./nn": 136,
	"./nn.js": 136,
	"./oc-lnc": 137,
	"./oc-lnc.js": 137,
	"./pa-in": 138,
	"./pa-in.js": 138,
	"./pl": 139,
	"./pl.js": 139,
	"./pt": 140,
	"./pt-br": 141,
	"./pt-br.js": 141,
	"./pt.js": 140,
	"./ro": 142,
	"./ro.js": 142,
	"./ru": 143,
	"./ru.js": 143,
	"./sd": 144,
	"./sd.js": 144,
	"./se": 145,
	"./se.js": 145,
	"./si": 146,
	"./si.js": 146,
	"./sk": 147,
	"./sk.js": 147,
	"./sl": 148,
	"./sl.js": 148,
	"./sq": 149,
	"./sq.js": 149,
	"./sr": 150,
	"./sr-cyrl": 151,
	"./sr-cyrl.js": 151,
	"./sr.js": 150,
	"./ss": 152,
	"./ss.js": 152,
	"./sv": 153,
	"./sv.js": 153,
	"./sw": 154,
	"./sw.js": 154,
	"./ta": 155,
	"./ta.js": 155,
	"./te": 156,
	"./te.js": 156,
	"./tet": 157,
	"./tet.js": 157,
	"./tg": 158,
	"./tg.js": 158,
	"./th": 159,
	"./th.js": 159,
	"./tk": 160,
	"./tk.js": 160,
	"./tl-ph": 161,
	"./tl-ph.js": 161,
	"./tlh": 162,
	"./tlh.js": 162,
	"./tr": 163,
	"./tr.js": 163,
	"./tzl": 164,
	"./tzl.js": 164,
	"./tzm": 165,
	"./tzm-latn": 166,
	"./tzm-latn.js": 166,
	"./tzm.js": 165,
	"./ug-cn": 167,
	"./ug-cn.js": 167,
	"./uk": 168,
	"./uk.js": 168,
	"./ur": 169,
	"./ur.js": 169,
	"./uz": 170,
	"./uz-latn": 171,
	"./uz-latn.js": 171,
	"./uz.js": 170,
	"./vi": 172,
	"./vi.js": 172,
	"./x-pseudo": 173,
	"./x-pseudo.js": 173,
	"./yo": 174,
	"./yo.js": 174,
	"./zh-cn": 175,
	"./zh-cn.js": 175,
	"./zh-hk": 176,
	"./zh-hk.js": 176,
	"./zh-mo": 177,
	"./zh-mo.js": 177,
	"./zh-tw": 178,
	"./zh-tw.js": 178
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 210;

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/react/index.js from dll-reference _dll_vendor
var reactfrom_dll_reference_dll_vendor = __webpack_require__(0);
var reactfrom_dll_reference_dll_vendor_default = /*#__PURE__*/__webpack_require__.n(reactfrom_dll_reference_dll_vendor);

// EXTERNAL MODULE: delegated ./node_modules/react-dom/index.js from dll-reference _dll_vendor
var react_domfrom_dll_reference_dll_vendor = __webpack_require__(14);
var react_domfrom_dll_reference_dll_vendor_default = /*#__PURE__*/__webpack_require__.n(react_domfrom_dll_reference_dll_vendor);

// EXTERNAL MODULE: delegated ./node_modules/react-router-dom/esm/react-router-dom.js from dll-reference _dll_vendor
var react_router_domfrom_dll_reference_dll_vendor = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/redux-persist/lib/integration/react.js
var react = __webpack_require__(191);

// EXTERNAL MODULE: delegated ./node_modules/react-redux/es/index.js from dll-reference _dll_vendor
var esfrom_dll_reference_dll_vendor = __webpack_require__(192);

// EXTERNAL MODULE: delegated ./node_modules/redux/es/redux.js from dll-reference _dll_vendor
var reduxfrom_dll_reference_dll_vendor = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(193);

// CONCATENATED MODULE: ./src/store/util.js


var getKey = function getKey(str, flag) {
  var index = str.indexOf(flag);
  return str.substring(index + 1, str.length + 1);
};

var util_handleActions = function handleActions(_ref) {
  var state = _ref.state,
      action = _ref.action,
      reducers = _ref.reducers,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? '' : _ref$namespace;
  var obj = Object.keys(reducers).map(function (key) {
    return namespace + '/' + key;
  }).includes(action.type) ? Object(immer_esm["a" /* default */])(state, function (draft) {
    return reducers[getKey(action.type, '/')](draft, action);
  }) : state;
  return obj;
};
// CONCATENATED MODULE: ./src/store/modules/counter.js

var initialState = {
  count: 0
};
var counter_reducers = {
  add: function add(state, action) {
    state.count++;
    console.log(state.count);
  },
  minus: function minus(state, action) {
    state.count--;
  }
};
/* harmony default export */ var counter = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return util_handleActions({
    state: state,
    action: action,
    reducers: counter_reducers,
    namespace: 'counter'
  });
});
// CONCATENATED MODULE: ./src/store/modules/todoList.js

var todoList_initialState = {
  inputValue: '123',
  list: []
};
var todoList_reducers = {
  add: function add(state, action) {
    state.list.push(action.data);
  },
  delete: function _delete(state, action) {
    state.list.splice(action.data, 1);
  },
  changeInput: function changeInput(state, action) {
    state.inputValue = action.data;
  }
};
/* harmony default export */ var todoList = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : todoList_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return util_handleActions({
    state: state,
    action: action,
    reducers: todoList_reducers,
    namespace: 'todo'
  });
});
// CONCATENATED MODULE: ./src/store/modules/loading.js

var loading_initialState = {
  loading: false
};
var loading_reducers = {
  open: function open(state, action) {
    state.loading = true;
  },
  closed: function closed(state, action) {
    state.loading = false;
  }
};
/* harmony default export */ var loading = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loading_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return util_handleActions({
    state: state,
    action: action,
    reducers: loading_reducers,
    namespace: 'loading'
  });
});
// EXTERNAL MODULE: ./node_modules/redux-persist/es/index.js + 11 modules
var es = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/session.js
var session = __webpack_require__(194);
var session_default = /*#__PURE__*/__webpack_require__.n(session);

// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(195);

// CONCATENATED MODULE: ./src/store/index.js
 // import thunk from 'redux-thunk';




 //  存储机制，可换成其他机制，当前使用sessionStorage机制


 // redux调试工具

var store_reducers = Object(reduxfrom_dll_reference_dll_vendor["combineReducers"])({
  counter: counter,
  todoList: todoList,
  loading: loading
});
var persistConfig = {
  key: 'root',
  storage: session_default.a // navigation不会被存入缓存中，其他会，适用于少部分数据需要实时更新
  // blacklist: ['navigation']
  // navigation会存入缓存，其他不会存，适用于大多数数据并不会实时从后台拿数据
  // whitelist: ['navigation']

};
var myPersistReducer = Object(es["a" /* persistReducer */])(persistConfig, store_reducers);
var store = Object(reduxfrom_dll_reference_dll_vendor["createStore"])(myPersistReducer, Object(redux_devtools_extension["devToolsEnhancer"])());
var persistor = Object(es["b" /* persistStore */])(store); // const _dispatch = store.dispatch;
// store.dispatch = (type, data) => _dispatch({type, data});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./node_modules/antd/es/slider/style/css.js + 1 modules
var css = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/antd/es/slider/index.js + 60 modules
var slider = __webpack_require__(205);

// EXTERNAL MODULE: ./src/assets/css/app.css
var app = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(1);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/pages/App.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var App_App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      firstAlarmTime: 1645759500000,
      // 最初告警时间
      recentAlarmTime: 1646116470000,
      // 最近告警时间
      eventCreateTime: 1645759541000 // 上盯屏时间

    });

    _defineProperty(_assertThisInitialized(_this), "formatter", function (value, pointNum, obj) {
      var _this$state = _this.state,
          firstAlarmTime = _this$state.firstAlarmTime,
          recentAlarmTime = _this$state.recentAlarmTime,
          eventCreateTime = _this$state.eventCreateTime;
      var scales = Object.keys(obj).map(function (key) {
        return Number(key);
      });
      var interval = scales[1] - scales[0]; // 每个区间平均的多少个点

      var totalArea = scales.length - 1; // 总区间

      var timePoints;
      var index = Math.floor(value / interval); // 滑块当前所在区间的索引 = Math.floor(当前拖动的值 / 当前区间的平均值)
      // 故障前时间 = 最初的时间 - 10分钟

      var failureBefore = moment_default()(firstAlarmTime).subtract(10, 'm').valueOf();
      var totalTime = 0; // 保存四个时间点顺序

      if (recentAlarmTime > eventCreateTime) {
        timePoints = [failureBefore, firstAlarmTime, eventCreateTime, recentAlarmTime];
        totalTime = recentAlarmTime;
      } else {
        timePoints = [failureBefore, firstAlarmTime, recentAlarmTime, eventCreateTime];
        totalTime = eventCreateTime;
      } // 时间差 = 滑块所在区间右侧时间 - 滑块所在区间左侧时间


      var diffTime = timePoints[index == totalArea ? totalArea : index + 1] - timePoints[index]; // 获取拖动占用多少毫秒时间 = (当前区间已经拖动的刻度 / 当前区间总刻度) * 时间差

      var time = Math.floor(diffTime * (pointNum - value - interval * (index === totalArea ? 0 : totalArea - index - 1)) / interval); // 当滑块走完一个区间之后，需要加上走完区间的时间差

      if (index < totalArea - 1) {
        time += timePoints[totalArea] - timePoints[index + 1];
      }

      var diffTotalTime = totalTime - time;
      return moment_default()(diffTotalTime).format('YYYY-MM-DD HH:mm:ss');
    });

    _defineProperty(_assertThisInitialized(_this), "rangeFunc", function (value, pointNum, obj) {
      console.log('----rangeFunc----', value);
      console.log('----pointNum---', pointNum);
      console.log('---obj----', obj);
      var _this$state2 = _this.state,
          firstAlarmTime = _this$state2.firstAlarmTime,
          eventCreateTime = _this$state2.eventCreateTime,
          recentAlarmTime = _this$state2.recentAlarmTime;
      var scales = Object.keys(obj).map(function (key) {
        return Number(key);
      });
      console.log('----scales---', scales);
      var interval = scales[1] - scales[0]; // 每个区间平均的多少个点

      var totalArea = scales.length - 1; // 总区间

      var timePoints;
      var totalTime = 0;
      var index = Math.floor(value / interval); // 滑块当前所在区间
      // 故障前时间 = 最初的时间 - 10分钟

      var failureBefore = moment_default()(firstAlarmTime).subtract(10, 'm').valueOf(); // 保存四个时间点顺序

      if (recentAlarmTime > eventCreateTime) {
        timePoints = [failureBefore, firstAlarmTime, eventCreateTime, recentAlarmTime];
        totalTime = recentAlarmTime;
      } else {
        timePoints = [failureBefore, firstAlarmTime, recentAlarmTime, eventCreateTime];
        totalTime = eventCreateTime;
      } // 时间差 = 滑块所在区间右侧时间 - 滑块所在区间左侧时间


      var diffTime = timePoints[index == totalArea ? totalArea : index + 1] - timePoints[index]; // 获取拖动占用多少毫秒时间(当前区间已经拖动的刻度 / 当前区间总刻度 * 时间差)

      var time = Math.floor(diffTime * (pointNum - value - interval * (index === totalArea ? 0 : totalArea - index - 1)) / interval); // 当滑块走完一个区间之后，需要加上走完区间的时间差

      if (index < totalArea - 1) {
        time += timePoints[totalArea] - timePoints[index + 1];
      }

      var diffTotalTime = totalTime - time;
      console.log('---diffTotalTime---', diffTotalTime);

      _this.setState({
        rangeValue: value
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _obj,
          _this2 = this;

      var _this$state3 = this.state,
          firstAlarmTime = _this$state3.firstAlarmTime,
          recentAlarmTime = _this$state3.recentAlarmTime,
          eventCreateTime = _this$state3.eventCreateTime,
          rangeValue = _this$state3.rangeValue; // 故障前时间 = 最初告警时间的前十分钟

      var failureBefore = moment_default()(firstAlarmTime).subtract(10, 'm').format('YYYY-MM-DD HH:mm:ss'); // 最初告警时间

      var firstTime = moment_default()(firstAlarmTime).format('YYYY-MM-DD HH:mm:ss'); // 上盯屏时间

      var eventTime2 = moment_default()(eventCreateTime).format('YYYY-MM-DD HH:mm:ss'); // 最近告警时间

      var recentTime = moment_default()(recentAlarmTime).format('YYYY-MM-DD HH:mm:ss');
      var failureDesc = "\u6545\u969C\u524D (".concat(failureBefore, ")");
      var firstDesc = "\u6700\u521D\u544A\u8B66 (".concat(firstTime, ")");
      var eventDesc = "\u4E0A\u76EF\u5C4F (".concat(eventTime2, ")");
      var recentDesc = "\u6700\u8FD1\u544A\u8B66 (".concat(recentTime, ")"); // 上盯屏时间 和 最近告警时间 先后顺序的问题

      var isRecentLast = recentAlarmTime >= eventCreateTime ? true : false; // 获取最近告警时间 到 故障前时间的时间差 单位是秒, 也就是说 获取 起始 和 终点的距离(单位是秒)

      var diff = moment_default()(recentTime).diff(moment_default()(failureBefore), 's'); // 10秒一个间隔，获取时间轴上有多少个点

      var pointNum = Math.floor(diff / 10); // 分段
      // 第一个点的间隔是 1/3

      var firstPoint = Math.floor(pointNum / 3); // 第二个点间隔是 2/3

      var secondPoint = Math.floor(pointNum / 3 * 2);
      var currentRangeValue = '';
      var obj = (_obj = {
        0: failureDesc
      }, _defineProperty(_obj, firstPoint, firstDesc), _defineProperty(_obj, secondPoint, eventDesc), _defineProperty(_obj, pointNum, recentDesc), _obj);

      if (rangeValue || rangeValue === 0) {
        currentRangeValue = rangeValue;
      } else {
        currentRangeValue = eventCreateTime > recentAlarmTime ? secondPoint : pointNum;
      }

      return /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement("div", null, /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement("div", {
        className: "alarm-range",
        style: {
          width: '800px',
          margin: '0 auto'
        }
      }, /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement(slider["a" /* default */], {
        marks: obj,
        min: 0,
        max: pointNum,
        tipFormatter: function tipFormatter(value) {
          return _this2.formatter(value, pointNum, obj);
        },
        value: currentRangeValue,
        onChange: function onChange(v) {
          _this2.rangeFunc(v, pointNum, obj);
        }
      })));
    }
  }]);

  return App;
}(reactfrom_dll_reference_dll_vendor_default.a.Component);

/* harmony default export */ var pages_App = (App_App);
// CONCATENATED MODULE: ./src/index.js








react_domfrom_dll_reference_dll_vendor_default.a.render( /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement(react_router_domfrom_dll_reference_dll_vendor["BrowserRouter"], null, /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement(esfrom_dll_reference_dll_vendor["Provider"], {
  store: src_store
}, /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement(react["PersistGate"], {
  persistor: persistor,
  loading: null
}, /*#__PURE__*/reactfrom_dll_reference_dll_vendor_default.a.createElement(pages_App, null)))), document.getElementById('root'));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(36);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(15))(1);

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.c70acb4e.js.map