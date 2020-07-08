function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
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
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/charts/charts.component */
    "./src/app/components/charts/charts.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/charts/pie/pie.component */
    "./src/app/components/charts/pie/pie.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");

    var routes = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'charts',
      component: _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"],
      children: [{
        path: '',
        redirectTo: 'pie',
        pathMatch: 'full'
      }, {
        path: 'pie',
        component: _components_charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_5__["PieComponent"]
      }]
    }, {
      path: 'settings',
      component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]
    }, {
      path: '**',
      component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'money-manager-project';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 22,
      vars: 0,
      consts: [[1, "main-page"], [1, "main-page__hidden-menu", "hidden-menu"], ["type", "checkbox", "id", "hmt", 1, "hidden-menu__trigger"], ["for", "hmt", 1, "hidden-menu__button"], [1, "hidden-menu__nav"], [1, "hidden-menu__item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "hidden-menu__link"], [1, "fa", "fa-home", "fa-fw"], ["routerLink", "/charts", "routerLinkActive", "active", 1, "hidden-menu__link"], [1, "fa", "fa-bar-chart", "fa-fw"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "hidden-menu__link"], [1, "fa", "fa-cog", "fa-fw"], [1, "main-page__container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Charts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@media (min-width: 600px) {\n  .main-page__container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media (min-width: 900px) {\n  .main-page__container[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n@media (min-width: 1200px) {\n  .main-page__container[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n@media (min-width: 1600px) {\n  .main-page__container[_ngcontent-%COMP%] {\n    width: 1000px;\n  }\n}\n.main-page[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  min-height: 100%;\n  background: #a1869e;\n}\n.main-page__container[_ngcontent-%COMP%] {\n  position: relative;\n  left: 250px;\n}\n.hidden-menu__trigger[_ngcontent-%COMP%] {\n  display: none;\n}\n.hidden-menu__trigger[_ngcontent-%COMP%]:checked    ~ .hidden-menu__button[_ngcontent-%COMP%] {\n  left: 160px;\n}\n.hidden-menu__trigger[_ngcontent-%COMP%]:checked    ~ .hidden-menu__nav[_ngcontent-%COMP%] {\n  left: 0;\n}\n.hidden-menu__trigger[_ngcontent-%COMP%]:checked    ~ .hidden-menu__nav[_ngcontent-%COMP%]    > .hidden-menu__item[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.hidden-menu__trigger[_ngcontent-%COMP%]:checked    ~ .hidden-menu__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  top: 10px;\n  transform: rotate(45deg);\n}\n.hidden-menu__trigger[_ngcontent-%COMP%]:checked    ~ .hidden-menu__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2n) {\n  opacity: 0;\n}\n.hidden-menu__trigger[_ngcontent-%COMP%]:checked    ~ .hidden-menu__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  top: -10px;\n  transform: rotate(-45deg);\n}\n.hidden-menu__button[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: left 0.3s;\n}\n.hidden-menu__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: 5px;\n  margin: 5px 0 0;\n  transition: 0.3s ease-out;\n  background: #0b1d51;\n}\n.hidden-menu__button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.hidden-menu__nav[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: -200px;\n  display: block;\n  padding: 80px 30px;\n  width: 200px;\n  height: 100%;\n  transition: left 0.3s;\n  background: #797596;\n}\n.hidden-menu__item[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-bottom: 20px;\n  transform: translateX(-50%);\n  transition: opacity 0.5s 0.1s, transform 0.5s 0.1s;\n}\n.hidden-menu__item[_ngcontent-%COMP%]:nth-child(2) {\n  transition: opacity 0.5s 0.2s, transform 0.5s 0.2s;\n}\n.hidden-menu__item[_ngcontent-%COMP%]:nth-child(3) {\n  transition: opacity 0.5s 0.3s, transform 0.5s 0.3s;\n}\n.hidden-menu__link[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  transition: color 0.5s ease, padding 0.7s ease;\n  color: #0b1d51;\n  font-size: 1.6rem;\n}\n.hidden-menu__link[_ngcontent-%COMP%]:hover {\n  color: #d1c6ad;\n  padding-left: 10px;\n}\n.hidden-menu__link[_ngcontent-%COMP%]:hover::before {\n  width: 0%;\n  transition: width 0.5s ease;\n  background: #d1c6ad;\n}\n.hidden-menu__link[_ngcontent-%COMP%]:hover::after {\n  width: 0%;\n  transition: width 0s ease;\n  background: transparent;\n}\n.hidden-menu__link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: block;\n  height: 1px;\n  width: 100%;\n  transition: width 0s ease;\n}\n.hidden-menu__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  display: block;\n  height: 1px;\n  width: 100%;\n  transition: width 0.5s ease;\n  background: #a1869e;\n}\n.hidden-menu__link.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFRyYWluaW5nXFxBbmd1bGFyXFxtb25leS1tYW5hZ2VyXFxtb25leS1tYW5hZ2VyLXByb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcVUlcXGNvbG9yc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUF3QixZQUFBO0VDQTFCO0FBQ0Y7QURDQTtFQUNJO0lBQXdCLFlBQUE7RUNFMUI7QUFDRjtBRERBO0VBQ0k7SUFBd0IsWUFBQTtFQ0kxQjtBQUNGO0FESEE7RUFDSTtJQUF3QixhQUFBO0VDTTFCO0FBQ0Y7QURKQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkVuQk87QUR5Qlg7QURKSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ01SO0FEQUk7RUFDSSxhQUFBO0FDR1I7QUREUTtFQUNJLFdBQUE7QUNHWjtBREFRO0VBQ0ksT0FBQTtBQ0VaO0FEQ1E7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7QUNDWjtBREVRO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0FDQVo7QURHUTtFQUNJLFVBQUE7QUNEWjtBRElRO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FDRlo7QURNSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0pSO0FETVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJFMUVRO0FEc0VwQjtBRE1ZO0VBQ0ksYUFBQTtBQ0poQjtBRFNJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkU3Rk87QURzRmY7QURVSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0RBQUE7QUNSUjtBRFVRO0VBQ0ksa0RBQUE7QUNSWjtBRFdRO0VBQ0ksa0RBQUE7QUNUWjtBRGFJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLGNFbkhZO0VGb0haLGlCQUFBO0FDWFI7QURhUTtFQUNJLGNFcEhFO0VGcUhGLGtCQUFBO0FDWFo7QURhWTtFQUNJLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CRTFIRjtBRCtHZDtBRGNZO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUNaaEI7QURnQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDZFo7QURpQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkU1SkQ7QUQ2SVg7QURtQlE7RUFDSSxXRWxLTztBRGlKbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2NvbXBvbmVudHMvVUkvY29sb3JzL2NvbG9ycy5zY3NzJztcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1haW4tcGFnZV9fY29udGFpbmVyIHsgd2lkdGg6IDM1MHB4OyB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAubWFpbi1wYWdlX19jb250YWluZXIgeyB3aWR0aDogNjAwcHg7IH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubWFpbi1wYWdlX19jb250YWluZXIgeyB3aWR0aDogODAwcHg7IH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAubWFpbi1wYWdlX19jb250YWluZXIgeyB3aWR0aDogMTAwMHB4OyB9XHJcbn1cclxuXHJcbi5tYWluLXBhZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iZztcclxuXHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhpZGRlbi1tZW51IHtcclxuXHJcbiAgICAmX190cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAmOmNoZWNrZWQgfiAuaGlkZGVuLW1lbnVfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpjaGVja2VkIH4gLmhpZGRlbi1tZW51X19uYXYge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmNoZWNrZWQgfiAuaGlkZGVuLW1lbnVfX25hdiA+IC5oaWRkZW4tbWVudV9faXRlbSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Y2hlY2tlZCB+IC5oaWRkZW4tbWVudV9fYnV0dG9uID4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpjaGVja2VkIH4gLmhpZGRlbi1tZW51X19idXR0b24gPiBzcGFuOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpjaGVja2VkIH4gLmhpZGRlbi1tZW51X19idXR0b24gPiBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAuM3M7XHJcblxyXG4gICAgICAgICYgPiBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmctZWxlbWVudHM7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHggMzBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgLjNzO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1iZy1hZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyAuMXMsIHRyYW5zZm9ybSAuNXMgLjFzO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIC4ycywgdHJhbnNmb3JtIC41cyAuMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIC4zcywgdHJhbnNmb3JtIC41cyAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjVzIGVhc2UsIHBhZGRpbmcgLjdzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1iZy1lbGVtZW50cztcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYWRkLTE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1hZGQtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMHMgZWFzZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwcyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJnO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tcGFnZV9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAubWFpbi1wYWdlX19jb250YWluZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubWFpbi1wYWdlX19jb250YWluZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAubWFpbi1wYWdlX19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbi5tYWluLXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNhMTg2OWU7XG59XG4ubWFpbi1wYWdlX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI1MHB4O1xufVxuXG4uaGlkZGVuLW1lbnVfX3RyaWdnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhpZGRlbi1tZW51X190cmlnZ2VyOmNoZWNrZWQgfiAuaGlkZGVuLW1lbnVfX2J1dHRvbiB7XG4gIGxlZnQ6IDE2MHB4O1xufVxuLmhpZGRlbi1tZW51X190cmlnZ2VyOmNoZWNrZWQgfiAuaGlkZGVuLW1lbnVfX25hdiB7XG4gIGxlZnQ6IDA7XG59XG4uaGlkZGVuLW1lbnVfX3RyaWdnZXI6Y2hlY2tlZCB+IC5oaWRkZW4tbWVudV9fbmF2ID4gLmhpZGRlbi1tZW51X19pdGVtIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmhpZGRlbi1tZW51X190cmlnZ2VyOmNoZWNrZWQgfiAuaGlkZGVuLW1lbnVfX2J1dHRvbiA+IHNwYW46Zmlyc3QtY2hpbGQge1xuICB0b3A6IDEwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5oaWRkZW4tbWVudV9fdHJpZ2dlcjpjaGVja2VkIH4gLmhpZGRlbi1tZW51X19idXR0b24gPiBzcGFuOm50aC1jaGlsZCgybikge1xuICBvcGFjaXR5OiAwO1xufVxuLmhpZGRlbi1tZW51X190cmlnZ2VyOmNoZWNrZWQgfiAuaGlkZGVuLW1lbnVfX2J1dHRvbiA+IHNwYW46bGFzdC1jaGlsZCB7XG4gIHRvcDogLTEwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uaGlkZGVuLW1lbnVfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcztcbn1cbi5oaWRkZW4tbWVudV9fYnV0dG9uID4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW46IDVweCAwIDA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQ6ICMwYjFkNTE7XG59XG4uaGlkZGVuLW1lbnVfX2J1dHRvbiA+IHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmhpZGRlbi1tZW51X19uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogLTIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogODBweCAzMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzO1xuICBiYWNrZ3JvdW5kOiAjNzk3NTk2O1xufVxuLmhpZGRlbi1tZW51X19pdGVtIHtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgMC4xcywgdHJhbnNmb3JtIDAuNXMgMC4xcztcbn1cbi5oaWRkZW4tbWVudV9faXRlbTpudGgtY2hpbGQoMikge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgMC4ycywgdHJhbnNmb3JtIDAuNXMgMC4ycztcbn1cbi5oaWRkZW4tbWVudV9faXRlbTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgMC4zcywgdHJhbnNmb3JtIDAuNXMgMC4zcztcbn1cbi5oaWRkZW4tbWVudV9fbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlLCBwYWRkaW5nIDAuN3MgZWFzZTtcbiAgY29sb3I6ICMwYjFkNTE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuLmhpZGRlbi1tZW51X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNkMWM2YWQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5oaWRkZW4tbWVudV9fbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XG4gIGJhY2tncm91bmQ6ICNkMWM2YWQ7XG59XG4uaGlkZGVuLW1lbnVfX2xpbms6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwcyBlYXNlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5oaWRkZW4tbWVudV9fbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwcyBlYXNlO1xufVxuLmhpZGRlbi1tZW51X19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiAjYTE4NjllO1xufVxuLmhpZGRlbi1tZW51X19saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufSIsIiRjb2xvci10ZXh0LWRhcms6ICMzMzM7XHJcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItYmc6ICNhMTg2OWU7XHJcbiRjb2xvci1iZy1hZGQ6ICM3OTc1OTY7XHJcbiRjb2xvci1iZy1lbGVtZW50czogIzBiMWQ1MTtcclxuJGNvbG9yLWVsZW1lbnRzOiAjYzAzO1xyXG4kY29sb3ItYnRuOiAjRkZENkJBO1xyXG4kY29sb3ItYWRkLTE6ICNkMWM2YWQ7XHJcbiRjb2xvci1hZGQtMjogI2JiYWRhMDtcclxuJGNvbG9yLWJnLTM6ICM2NjhlYjk7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/charts/charts.component */
    "./src/app/components/charts/charts.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/charts/pie/pie.component */
    "./src/app/components/charts/pie/pie.component.ts");
    /* harmony import */


    var _components_expenses_expenses_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/expenses/expenses.module */
    "./src/app/components/expenses/expenses.module.ts");
    /* harmony import */


    var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/calendar/calendar.component */
    "./src/app/components/calendar/calendar.component.ts");
    /* harmony import */


    var _components_days_list_day_day_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/days-list/day/day.component */
    "./src/app/components/days-list/day/day.component.ts");
    /* harmony import */


    var _components_days_list_days_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/days-list/days-list.component */
    "./src/app/components/days-list/days-list.component.ts");
    /* harmony import */


    var _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pipes/app-pipes.module */
    "./src/app/pipes/app-pipes.module.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");
    /* harmony import */


    var _components_settings_category_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/settings/category/category.component */
    "./src/app/components/settings/category/category.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _components_expenses_expenses_module__WEBPACK_IMPORTED_MODULE_13__["ExpensesModule"], _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_17__["AppPipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"], _components_days_list_day_day_component__WEBPACK_IMPORTED_MODULE_15__["DayComponent"], _components_days_list_days_list_component__WEBPACK_IMPORTED_MODULE_16__["DaysListComponent"], _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_8__["ChartsComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _components_charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"], _components_settings_category_category_component__WEBPACK_IMPORTED_MODULE_19__["CategoryComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _components_expenses_expenses_module__WEBPACK_IMPORTED_MODULE_13__["ExpensesModule"], _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_17__["AppPipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"], _components_days_list_day_day_component__WEBPACK_IMPORTED_MODULE_15__["DayComponent"], _components_days_list_days_list_component__WEBPACK_IMPORTED_MODULE_16__["DaysListComponent"], _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_8__["ChartsComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _components_charts_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"], _components_settings_category_category_component__WEBPACK_IMPORTED_MODULE_19__["CategoryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _components_expenses_expenses_module__WEBPACK_IMPORTED_MODULE_13__["ExpensesModule"], _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_17__["AppPipesModule"]],
          providers: [_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = function AboutComponent() {
      _classCallCheck(this, AboutComponent);
    };

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Money-manager application was made as a final project for EPAM Training in July, 2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/calendar/calendar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/calendar/calendar.component.ts ***!
    \***********************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppComponentsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pipes/moment.pipe */
    "./src/app/pipes/moment.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CalendarComponent = /*#__PURE__*/function () {
      function CalendarComponent(dateService) {
        _classCallCheck(this, CalendarComponent);

        this.dateService = dateService;
        this.isDisabled = false;
      }

      _createClass(CalendarComponent, [{
        key: "go",
        value: function go(direction) {
          this.dateService.changeMonth(direction);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dateService.date$.subscribe(this.disableForward.bind(this));
        }
      }, {
        key: "disableForward",
        value: function disableForward(currentDate) {
          currentDate.year() === moment__WEBPACK_IMPORTED_MODULE_1__().year() && currentDate.month() === moment__WEBPACK_IMPORTED_MODULE_1__().month() ? this.isDisabled = true : this.isDisabled = false;
        }
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]));
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      decls: 7,
      vars: 6,
      consts: [[1, "calendar"], [1, "calendar__nav", "fa", "fa-chevron-left", 3, "click"], [1, "calendar__month-name"], [1, "calendar__nav", "fa", "fa-chevron-right", 3, "disabled", "click"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_1_listener() {
            return ctx.go(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "moment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_6_listener() {
            return ctx.go(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.dateService.date$)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        }
      },
      pipes: [_pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_3__["MomentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".calendar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n.calendar__nav[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  border: none;\n  background: transparent;\n  text-align: center;\n}\n.calendar__month-name[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FsZW5kYXJcXGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsZW5kYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAmX19uYXYge1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbW9udGgtbmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSIsIi5jYWxlbmRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY2FsZW5kYXJfX25hdiB7XG4gIG1hcmdpbjogMCAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FsZW5kYXJfX21vbnRoLW5hbWUge1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calendar',
          templateUrl: './calendar.component.html',
          styleUrls: ['./calendar.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/charts/charts.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/charts/charts.component.ts ***!
    \*******************************************************/

  /*! exports provided: ChartsComponent */

  /***/
  function srcAppComponentsChartsChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsComponent", function () {
      return ChartsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../calendar/calendar.component */
    "./src/app/components/calendar/calendar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ChartsComponent = function ChartsComponent() {
      _classCallCheck(this, ChartsComponent);
    };

    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
      return new (t || ChartsComponent)();
    };

    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsComponent,
      selectors: [["app-charts"]],
      decls: 2,
      vars: 0,
      template: function ChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".charts__link.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydHMvRTpcXFRyYWluaW5nXFxBbmd1bGFyXFxtb25leS1tYW5hZ2VyXFxtb25leS1tYW5hZ2VyLXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYXJ0c1xcY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcVUlcXGNvbG9yc1xcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNBLFdDTmlCO0FDQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vVUkvY29sb3JzL2NvbG9ycy5zY3NzJztcclxuXHJcbi5jaGFydHMge1xyXG5cclxuXHQmX19saW5rIHtcclxuXHRcdFxyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0Y29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIkY29sb3ItdGV4dC1kYXJrOiAjMzMzO1xyXG4kY29sb3ItdGV4dC1saWdodDogI2ZmZjtcclxuJGNvbG9yLWJnOiAjYTE4NjllO1xyXG4kY29sb3ItYmctYWRkOiAjNzk3NTk2O1xyXG4kY29sb3ItYmctZWxlbWVudHM6ICMwYjFkNTE7XHJcbiRjb2xvci1lbGVtZW50czogI2MwMztcclxuJGNvbG9yLWJ0bjogI0ZGRDZCQTtcclxuJGNvbG9yLWFkZC0xOiAjZDFjNmFkO1xyXG4kY29sb3ItYWRkLTI6ICNiYmFkYTA7XHJcbiRjb2xvci1iZy0zOiAjNjY4ZWI5O1xyXG4iLCIuY2hhcnRzX19saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-charts',
          templateUrl: './charts.component.html',
          styleUrls: ['./charts.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/charts/pie/pie.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/charts/pie/pie.component.ts ***!
    \********************************************************/

  /*! exports provided: PieComponent */

  /***/
  function srcAppComponentsChartsPiePieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieComponent", function () {
      return PieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/expenses/services/month-expenses-by-category.service */
    "./src/app/components/expenses/services/month-expenses-by-category.service.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var PieComponent = /*#__PURE__*/function () {
      function PieComponent(dateService, _monthExpensesByCategoryService) {
        _classCallCheck(this, PieComponent);

        this.dateService = dateService;
        this._monthExpensesByCategoryService = _monthExpensesByCategoryService;
        this.sub = null;
        this.colorComponentMax = 255;
        this.pieChartData = [];
        this.pieChartLabels = [];
        this.pieChartType = 'pie';
        this.pieChartColors = [{
          backgroundColor: []
        }];
        this.pieChartOptions = {
          legend: {
            position: 'left'
          }
        };
        this.monthExpensesByCategoryList = [];
      }

      _createClass(PieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.dateService.date$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (date) {
            return _this._monthExpensesByCategoryService.loadMonthExpensesByCategory(date);
          })).subscribe(function (monthExpensesByCategoryList) {
            _this.pieChartLabels.length = 0;
            _this.pieChartData.length = 0;
            _this.pieChartColors[0].backgroundColor.length = 0;
            monthExpensesByCategoryList.forEach(function (savedExpenses) {
              _this.pieChartLabels.push(savedExpenses.category);

              _this.pieChartData.push(savedExpenses.amount);

              _this.pieChartColors[0].backgroundColor.push(_this.generateColor());
            });
            _this.monthExpensesByCategoryList = monthExpensesByCategoryList;
          });
        }
      }, {
        key: "generateColorComponent",
        value: function generateColorComponent() {
          return Math.floor(Math.random() * this.colorComponentMax);
        }
      }, {
        key: "generateColor",
        value: function generateColor() {
          return "rgba(" + "".concat(this.generateColorComponent()) + "," + "".concat(this.generateColorComponent()) + "," + "".concat(this.generateColorComponent()) + "," + ".3)";
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return PieComponent;
    }();

    PieComponent.ɵfac = function PieComponent_Factory(t) {
      return new (t || PieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_3__["MonthExpensesByCategoryService"]));
    };

    PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PieComponent,
      selectors: [["app-pie"]],
      decls: 2,
      vars: 5,
      consts: [["baseChart", "", 3, "data", "labels", "chartType", "colors", "options"]],
      template: function PieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("colors", ctx.pieChartColors)("options", ctx.pieChartOptions);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pie',
          templateUrl: './pie.component.html',
          styleUrls: ['./pie.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
        }, {
          type: src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_3__["MonthExpensesByCategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/days-list/day/day.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/days-list/day/day.component.ts ***!
    \***********************************************************/

  /*! exports provided: DayComponent */

  /***/
  function srcAppComponentsDaysListDayDayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayComponent", function () {
      return DayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DayComponent = /*#__PURE__*/function () {
      function DayComponent() {
        _classCallCheck(this, DayComponent);

        this.dayForExpenses = null;
      }

      _createClass(DayComponent, [{
        key: "day",
        set: function set(day) {
          this.dayForExpenses = day;
        }
      }]);

      return DayComponent;
    }();

    DayComponent.ɵfac = function DayComponent_Factory(t) {
      return new (t || DayComponent)();
    };

    DayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DayComponent,
      selectors: [["app-day"]],
      inputs: {
        day: "day"
      },
      decls: 13,
      vars: 12,
      consts: [[1, "day"], [1, "day__date-wrapper"], [1, "day__full-date"], [1, "day__date"], [1, "day__additional"], [1, "day__month"], [1, "day__week-day"]],
      template: function DayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx.dayForExpenses.value, "dd"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.dayForExpenses.value, "MM.yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 9, ctx.dayForExpenses.value, "EEEE"), " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".day[_ngcontent-%COMP%] {\n  display: flex;\n}\n.day__date-wrapper[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.day__full-date[_ngcontent-%COMP%] {\n  display: flex;\n}\n.day__date[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.day__additional[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 0.2rem;\n  font-size: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXlzLWxpc3QvZGF5L0U6XFxUcmFpbmluZ1xcQW5ndWxhclxcbW9uZXktbWFuYWdlclxcbW9uZXktbWFuYWdlci1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxkYXlzLWxpc3RcXGRheVxcZGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RheXMtbGlzdC9kYXkvZGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEO0FEQ0M7RUFDQyxZQUFBO0FDQ0Y7QURFQztFQUNDLGFBQUE7QUNBRjtBREdDO0VBQ0MsZUFBQTtBQ0RGO0FESUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF5cy1saXN0L2RheS9kYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF5IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHQmX19kYXRlLXdyYXBwZXIge1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG5cdH1cclxuXHRcclxuXHQmX19mdWxsLWRhdGUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdCZfX2RhdGUge1xyXG5cdFx0Zm9udC1zaXplOiAycmVtO1xyXG5cdH1cclxuXHJcblx0Jl9fYWRkaXRpb25hbCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC4ycmVtO1xyXG5cdFx0Zm9udC1zaXplOiAuNnJlbTtcclxuXHR9XHJcbn0iLCIuZGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kYXlfX2RhdGUtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5kYXlfX2Z1bGwtZGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGF5X19kYXRlIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmRheV9fYWRkaXRpb25hbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICBmb250LXNpemU6IDAuNnJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-day',
          templateUrl: './day.component.html',
          styleUrls: ['./day.component.scss']
        }]
      }], null, {
        day: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/days-list/days-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/days-list/days-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: DaysListComponent */

  /***/
  function srcAppComponentsDaysListDaysListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaysListComponent", function () {
      return DaysListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _day_day_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./day/day.component */
    "./src/app/components/days-list/day/day.component.ts");

    function DaysListComponent_li_1_app_day_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-day", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DaysListComponent_li_1_app_day_1_Template_app_day_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var day_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.select(day_r1.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("day", day_r1);
      }
    }

    function DaysListComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DaysListComponent_li_1_app_day_1_Template, 1, 1, "app-day", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", day_r1.active)("selected", day_r1.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !day_r1.disabled);
      }
    }

    var DaysListComponent = /*#__PURE__*/function () {
      function DaysListComponent(dateService) {
        _classCallCheck(this, DaysListComponent);

        this.dateService = dateService;
        this.dayList = null;
      }

      _createClass(DaysListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dateService.date$.subscribe(this.generateExpensesList.bind(this));
        }
      }, {
        key: "generateExpensesList",
        value: function generateExpensesList(currentDate) {
          var startDay = currentDate.clone().startOf('month');
          var endDay = currentDate.clone().endOf('month');
          var date = startDay.clone().subtract(1, 'day');
          var dayList = [];

          while (date.isBefore(endDay, 'day')) {
            dayList.push({
              value: date.add(1, 'day').clone(),
              active: date.isSame(moment__WEBPACK_IMPORTED_MODULE_1__(), 'date'),
              disabled: date.isAfter(moment__WEBPACK_IMPORTED_MODULE_1__(), 'date'),
              selected: date.isSame(currentDate, 'date')
            });
          }

          this.dayList = dayList.reverse();
        }
      }, {
        key: "select",
        value: function select(day) {
          this.dateService.changeDate(day);
        }
      }]);

      return DaysListComponent;
    }();

    DaysListComponent.ɵfac = function DaysListComponent_Factory(t) {
      return new (t || DaysListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]));
    };

    DaysListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DaysListComponent,
      selectors: [["app-days-list"]],
      decls: 2,
      vars: 1,
      consts: [[1, "days-list"], ["class", "days-list__day", 3, "active", "selected", 4, "ngFor", "ngForOf"], [1, "days-list__day"], [3, "day", "click", 4, "ngIf"], [3, "day", "click"]],
      template: function DaysListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DaysListComponent_li_1_Template, 2, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dayList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _day_day_component__WEBPACK_IMPORTED_MODULE_4__["DayComponent"]],
      styles: [".days-list__day[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  transition: all 0.5s;\n}\n.days-list__day[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  background: #797596;\n}\n.days-list__day.active[_ngcontent-%COMP%] {\n  outline: 2px solid #797596;\n}\n.days-list__day.selected[_ngcontent-%COMP%] {\n  color: #c03;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXlzLWxpc3QvRTpcXFRyYWluaW5nXFxBbmd1bGFyXFxtb25leS1tYW5hZ2VyXFxtb25leS1tYW5hZ2VyLXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRheXMtbGlzdFxcZGF5cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RheXMtbGlzdC9kYXlzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGF5cy1saXN0L0U6XFxUcmFpbmluZ1xcQW5ndWxhclxcbW9uZXktbWFuYWdlclxcbW9uZXktbWFuYWdlci1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxVSVxcY29sb3JzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQztFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7QUNIRjtBREtFO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJFUlk7QURLZjtBRE1FO0VBQ0MsMEJBQUE7QUNKSDtBRE9FO0VBQ0MsV0VkYztBRFNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF5cy1saXN0L2RheXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9VSS9jb2xvcnMvY29sb3JzLnNjc3NcIjtcclxuXHJcbi5kYXlzLWxpc3Qge1xyXG5cclxuXHQmX19kYXkge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIC41cztcclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0XHRcdGJhY2tncm91bmQ6ICRjb2xvci1iZy1hZGQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRvdXRsaW5lOiAycHggc29saWQgJGNvbG9yLWJnLWFkZDtcclxuXHRcdH1cclxuXHJcblx0XHQmLnNlbGVjdGVkIHtcclxuXHRcdFx0Y29sb3I6ICRjb2xvci1lbGVtZW50cztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIuZGF5cy1saXN0X19kYXkge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmRheXMtbGlzdF9fZGF5OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJhY2tncm91bmQ6ICM3OTc1OTY7XG59XG4uZGF5cy1saXN0X19kYXkuYWN0aXZlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM3OTc1OTY7XG59XG4uZGF5cy1saXN0X19kYXkuc2VsZWN0ZWQge1xuICBjb2xvcjogI2MwMztcbn0iLCIkY29sb3ItdGV4dC1kYXJrOiAjMzMzO1xyXG4kY29sb3ItdGV4dC1saWdodDogI2ZmZjtcclxuJGNvbG9yLWJnOiAjYTE4NjllO1xyXG4kY29sb3ItYmctYWRkOiAjNzk3NTk2O1xyXG4kY29sb3ItYmctZWxlbWVudHM6ICMwYjFkNTE7XHJcbiRjb2xvci1lbGVtZW50czogI2MwMztcclxuJGNvbG9yLWJ0bjogI0ZGRDZCQTtcclxuJGNvbG9yLWFkZC0xOiAjZDFjNmFkO1xyXG4kY29sb3ItYWRkLTI6ICNiYmFkYTA7XHJcbiRjb2xvci1iZy0zOiAjNjY4ZWI5O1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaysListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-days-list',
          templateUrl: './days-list.component.html',
          styleUrls: ['./days-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/components/category-list/category-list.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/expenses/components/category-list/category-list.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CategoryListComponent */

  /***/
  function srcAppComponentsExpensesComponentsCategoryListCategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
      return CategoryListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/expenses/services/categories.service */
    "./src/app/components/expenses/services/categories.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CategoryListComponent_div_4_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_div_4_li_6_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var category_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.selectCategory(category_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4.name, " ");
      }
    }

    function CategoryListComponent_div_4_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_div_4_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.categoriesService.addNewCategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoryListComponent_div_4_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 16);
      }
    }

    function CategoryListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " select category ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryListComponent_div_4_li_6_Template, 2, 1, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryListComponent_div_4_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.categoriesService.newCategoryInput = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoryListComponent_div_4_button_9_Template, 1, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryListComponent_div_4_button_10_Template, 1, 0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categoriesService.savedCategories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.categoriesService.placeholder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.categoriesService.newCategoryInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.categoriesService.newCategoryInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.categoriesService.newCategoryInput);
      }
    }

    var CategoryListComponent = /*#__PURE__*/function () {
      function CategoryListComponent(categoriesService) {
        _classCallCheck(this, CategoryListComponent);

        this.categoriesService = categoriesService;
        this.isCategorySelected = false;
        this.isCategoryListOpen = false;
        this.selectedCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CategoryListComponent, [{
        key: "selectCategory",
        value: function selectCategory(category) {
          this.isCategorySelected = true;
          this.selectedCategory.emit(category);
        }
      }, {
        key: "openCategoryList",
        value: function openCategoryList() {
          this.isCategoryListOpen = !this.isCategoryListOpen;
        }
      }]);

      return CategoryListComponent;
    }();

    CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) {
      return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]));
    };

    CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryListComponent,
      selectors: [["app-category-list"]],
      outputs: {
        selectedCategory: "selectedCategory"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "category"], ["type", "checkbox", "id", "ct", 1, "category__trigger"], ["for", "ct", 1, "category__open-for-select", 3, "click"], ["class", "category__list", 4, "ngIf"], [1, "category__list"], [1, "category__select"], [1, "category__caption"], [1, "fa", "fa-angle-double-down"], [1, "category__roll"], ["class", "category__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "category__add"], ["type", "text", 1, "category__add-input", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "fa fa-plus category__add-save", 3, "click", 4, "ngIf"], ["class", "fa fa-times category__add-save", 4, "ngIf"], [1, "category__item", 3, "click"], [1, "fa", "fa-plus", "category__add-save", 3, "click"], [1, "fa", "fa-times", "category__add-save"]],
      template: function CategoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_label_click_2_listener() {
            return ctx.openCategoryList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " open list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryListComponent_div_4_Template, 11, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCategoryListOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["@-webkit-keyframes move {\n  from {\n    transform: translateY(-7px);\n    -webkit-filter: blur(3px);\n            filter: blur(3px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(7px);\n    -webkit-filter: blur(0px);\n            filter: blur(0px);\n    opacity: 1;\n  }\n}\n@keyframes move {\n  from {\n    transform: translateY(-7px);\n    -webkit-filter: blur(3px);\n            filter: blur(3px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(7px);\n    -webkit-filter: blur(0px);\n            filter: blur(0px);\n    opacity: 1;\n  }\n}\n.category[_ngcontent-%COMP%] {\n  position: relative;\n}\n.category__trigger[_ngcontent-%COMP%] {\n  display: none;\n}\n.category__trigger[_ngcontent-%COMP%]:checked    ~ .category__list[_ngcontent-%COMP%] {\n  left: 120%;\n  display: block;\n}\n.category__trigger[_ngcontent-%COMP%]:checked    ~ .category__open-for-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.category__list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  transition: 1s;\n}\n.category__open-for-select[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin-top: 30px;\n  width: 100%;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  outline: none;\n  background: none;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-size: 1.5rem;\n  line-height: 1.6;\n}\n.category__open-for-select[_ngcontent-%COMP%]:hover::before, .category__open-for-select[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n.category__open-for-select[_ngcontent-%COMP%]:hover::before {\n  transition: opacity 0s ease 0s, height 0.2s ease, width 0.4s ease 0.2s;\n}\n.category__open-for-select[_ngcontent-%COMP%]:hover::after {\n  transition: opacity 0s ease 0s, height 0.2s ease, width 0.4s ease 0.2s;\n}\n.category__open-for-select[_ngcontent-%COMP%]::before, .category__open-for-select[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: border-box;\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.category__open-for-select[_ngcontent-%COMP%]::before {\n  left: 0;\n  bottom: 0;\n  border-left: 1px solid #fff;\n  border-top: 1px solid #fff;\n  transition: opacity 0s ease 0.6s, width 0.4s ease, height 0.2s ease 0.4s;\n}\n.category__open-for-select[_ngcontent-%COMP%]::after {\n  top: 0;\n  right: 0;\n  border-right: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transition: opacity 0s ease 0.6s, width 0.4s ease, height 0.2s ease 0.4s;\n}\n.category__select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.category__select[_ngcontent-%COMP%]:hover   .category__roll[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.category__select[_ngcontent-%COMP%]:hover   .category__roll[_ngcontent-%COMP%]    > .category__item[_ngcontent-%COMP%] {\n  transform: translateX(50px);\n}\n.category__select[_ngcontent-%COMP%]:hover   .category__roll[_ngcontent-%COMP%]    > .category__item[_ngcontent-%COMP%]:nth-child(2n) {\n  transform: translateX(-50px);\n}\n.category__select[_ngcontent-%COMP%]:hover   .category__roll[_ngcontent-%COMP%]    > .category__add[_ngcontent-%COMP%] {\n  transform: translateY(-50px);\n}\n.category__caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  border: 2px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  background: #0b1d51;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.category__caption[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  -webkit-animation: move 0.8s infinite ease-out;\n          animation: move 0.8s infinite ease-out;\n}\n.category__roll[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  transition: 0.4s ease-out;\n  opacity: 0;\n}\n.category__item[_ngcontent-%COMP%] {\n  position: relative;\n  left: -50px;\n  padding: 0 10px;\n  transition: 0.4s ease-out;\n  border-bottom: 1px solid #fff;\n  background: #c03;\n  color: #fff;\n}\n.category__item[_ngcontent-%COMP%]:nth-child(2n) {\n  left: 50px;\n}\n.category__item[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #0b1d51;\n}\n.category__item[_ngcontent-%COMP%]:hover::before {\n  display: block;\n}\n.category__item[_ngcontent-%COMP%]:first-of-type {\n  border-radius: 5px 5px 0 0;\n}\n.category__add[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50px;\n  display: flex;\n  align-items: center;\n  border-radius: 0 0 5px 5px;\n  transition: 0.4s ease-out;\n  color: #fff;\n  background: #c03;\n}\n.category__add-input[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  padding: 5px 10px;\n  border: none;\n  background: transparent;\n  color: #fff;\n  font-size: 1.5rem;\n}\n.category__add-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.category__add-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #333;\n}\n.category__add-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #333;\n}\n.category__add-input[_ngcontent-%COMP%]::placeholder {\n  color: #333;\n}\n.category__add-save[_ngcontent-%COMP%] {\n  margin: 0 4px;\n  border: none;\n  background: transparent;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlcy9jb21wb25lbnRzL2NhdGVnb3J5LWxpc3QvRTpcXFRyYWluaW5nXFxBbmd1bGFyXFxtb25leS1tYW5hZ2VyXFxtb25leS1tYW5hZ2VyLXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV4cGVuc2VzXFxjb21wb25lbnRzXFxjYXRlZ29yeS1saXN0XFxjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2VzL2NvbXBvbmVudHMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2VzL2NvbXBvbmVudHMvY2F0ZWdvcnktbGlzdC9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcVUlcXGNvbG9yc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQztJQUNDLDJCQUFBO0lBQ0EseUJBQUE7WUFBQSxpQkFBQTtJQUNBLFVBQUE7RUNEQTtFREdEO0lBQ0MsMEJBQUE7SUFDQSx5QkFBQTtZQUFBLGlCQUFBO0lBQ0EsVUFBQTtFQ0RBO0FBQ0Y7QURUQTtFQUNDO0lBQ0MsMkJBQUE7SUFDQSx5QkFBQTtZQUFBLGlCQUFBO0lBQ0EsVUFBQTtFQ0RBO0VER0Q7SUFDQywwQkFBQTtJQUNBLHlCQUFBO1lBQUEsaUJBQUE7SUFDQSxVQUFBO0VDREE7QUFDRjtBRElBO0VBQ0Msa0JBQUE7QUNGRDtBRElDO0VBQ0MsYUFBQTtBQ0ZGO0FESUU7RUFDQyxVQUFBO0VBQ0EsY0FBQTtBQ0ZIO0FES0U7RUFDQyxvQ0FBQTtBQ0hIO0FET0M7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURTQztFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdFakRpQjtFRmtEakIsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDRyxpQkFBQTtFQUNILGdCQUFBO0FDUEY7QURXRztFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1ZKO0FEYUc7RUFDQyxzRUFBQTtBQ1hKO0FEY0c7RUFDQyxzRUFBQTtBQ1pKO0FEZ0JFO0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNmSDtBRGtCRTtFQUNDLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHdFQUFBO0FDaEJIO0FEbUJFO0VBQ0MsTUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0VBQUE7QUNqQkg7QURxQkM7RUFDQyxlQUFBO0FDbkJGO0FEcUJFO0VBQ0MsVUFBQTtBQ25CSDtBRHFCRztFQUNDLDJCQUFBO0FDbkJKO0FEcUJJO0VBQ0MsNEJBQUE7QUNuQkw7QUR1Qkc7RUFDQyw0QkFBQTtBQ3JCSjtBRDBCQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXRWpJaUI7RUZrSWpCLG1CRS9Ia0I7RUZnSWxCLHlCQUFBO0VBQ0EsbUJBQUE7QUN4QkY7QUQwQkU7RUFDQyw4Q0FBQTtVQUFBLHNDQUFBO0FDeEJIO0FENkJDO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDM0JGO0FEOEJDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkVySmU7RUZzSmYsV0UxSmlCO0FEOEhuQjtBRDhCRTtFQUNDLFVBQUE7QUM1Qkg7QUQrQkU7RUFDQyxnQkVqS2dCO0VGa0toQixjRS9KaUI7QURrSXBCO0FEK0JHO0VBQ0MsY0FBQTtBQzdCSjtBRGlDRTtFQUNDLDBCQUFBO0FDL0JIO0FEbUNDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdFdExpQjtFRnVMakIsZ0JFbkxlO0FEaUpqQjtBRG9DRTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdFOUxnQjtFRitMaEIsaUJBQUE7QUNsQ0g7QURvQ0c7RUFDQyxhQUFBO0FDbENKO0FEcUNHO0VBQ0MsV0V2TWM7QURvS2xCO0FEa0NHO0VBQ0MsV0V2TWM7QURvS2xCO0FEa0NHO0VBQ0MsV0V2TWM7QURvS2xCO0FEdUNFO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdFOU1nQjtBRHlLbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2VzL2NvbXBvbmVudHMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL1VJL2NvbG9ycy9jb2xvcnMuc2Nzc1wiO1xyXG5cclxuQGtleWZyYW1lcyBtb3ZlIHtcclxuXHRmcm9tIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcclxuXHRcdGZpbHRlcjogYmx1cigzcHgpO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XHJcblx0XHRmaWx0ZXI6IGJsdXIoMHB4KTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0Jl9fdHJpZ2dlciB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cclxuXHRcdCY6Y2hlY2tlZCB+IC5jYXRlZ29yeV9fbGlzdCB7XHJcblx0XHRcdGxlZnQ6IDEyMCU7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6Y2hlY2tlZCB+IC5jYXRlZ29yeV9fb3Blbi1mb3Itc2VsZWN0IHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19saXN0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAtMTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dHJhbnNpdGlvbjogMXM7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdCZfX29wZW4tZm9yLXNlbGVjdCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRjb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRsaW5lLWhlaWdodDogMS42O1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cclxuXHRcdFx0Jjo6YmVmb3JlLFxyXG5cdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwcyBlYXNlIDBzLCBoZWlnaHQgLjJzIGVhc2UsIHdpZHRoIC40cyBlYXNlIC4ycztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjo6YWZ0ZXIge1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMHMgZWFzZSAwcywgaGVpZ2h0IC4ycyBlYXNlLCB3aWR0aCAuNHMgZWFzZSAuMnM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Jjo6YmVmb3JlLFxyXG5cdFx0Jjo6YWZ0ZXIge1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Jjo6YmVmb3JlIHtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yLXRleHQtbGlnaHQ7XHJcblx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMHMgZWFzZSAuNnMsIHdpZHRoIC40cyBlYXNlLCBoZWlnaHQgLjJzIGVhc2UgLjRzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6OmFmdGVyIHtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yLXRleHQtbGlnaHQ7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItdGV4dC1saWdodDtcclxuXHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwcyBlYXNlIC42cywgd2lkdGggLjRzIGVhc2UsIGhlaWdodCAuMnMgZWFzZSAuNHM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19zZWxlY3Qge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdCY6aG92ZXIgLmNhdGVnb3J5X19yb2xsIHtcclxuXHRcdFx0b3BhY2l0eTogMTtcclxuXHRcclxuXHRcdFx0JiA+IC5jYXRlZ29yeV9faXRlbSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xyXG5cdFxyXG5cdFx0XHRcdCY6bnRoLWNoaWxkKDJuKSB7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFxyXG5cdFx0XHQmID4gLmNhdGVnb3J5X19hZGQge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2NhcHRpb24ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItdGV4dC1saWdodDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcclxuXHRcdGJhY2tncm91bmQ6ICRjb2xvci1iZy1lbGVtZW50cztcclxuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuXHRcdCYgPiBpIHtcclxuXHRcdFx0YW5pbWF0aW9uOiBtb3ZlIC44cyBpbmZpbml0ZSBlYXNlLW91dDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQmX19yb2xsIHtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRyYW5zaXRpb246IC40cyBlYXNlLW91dDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGxlZnQ6IC01MHB4O1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0dHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0YmFja2dyb3VuZDogJGNvbG9yLWVsZW1lbnRzO1xyXG5cdFx0Y29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cclxuXHRcdCY6bnRoLWNoaWxkKDJuKSB7XHJcblx0XHRcdGxlZnQ6IDUwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0XHRjb2xvcjogJGNvbG9yLWJnLWVsZW1lbnRzO1xyXG5cclxuXHRcdFx0Jjo6YmVmb3JlIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9fYWRkIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogNTBweDtcclxuXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG5cdFx0dHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG5cdFx0Y29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0YmFja2dyb3VuZDogJGNvbG9yLWVsZW1lbnRzO1xyXG5cclxuXHRcdCYtaW5wdXQge1xyXG5cdFx0XHRmbGV4LWdyb3c6IDA7XHJcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRjb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuXHRcdFx0Jjpmb2N1cyB7XHJcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xyXG5cdFx0XHRcdGNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji1zYXZlIHtcclxuXHRcdFx0bWFyZ2luOiAwIDRweDtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Y29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIkBrZXlmcmFtZXMgbW92ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY2F0ZWdvcnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2F0ZWdvcnlfX3RyaWdnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhdGVnb3J5X190cmlnZ2VyOmNoZWNrZWQgfiAuY2F0ZWdvcnlfX2xpc3Qge1xuICBsZWZ0OiAxMjAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXRlZ29yeV9fdHJpZ2dlcjpjaGVja2VkIH4gLmNhdGVnb3J5X19vcGVuLWZvci1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uY2F0ZWdvcnlfX2xpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cbi5jYXRlZ29yeV9fb3Blbi1mb3Itc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5jYXRlZ29yeV9fb3Blbi1mb3Itc2VsZWN0OmhvdmVyOjpiZWZvcmUsIC5jYXRlZ29yeV9fb3Blbi1mb3Itc2VsZWN0OmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2F0ZWdvcnlfX29wZW4tZm9yLXNlbGVjdDpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBlYXNlIDBzLCBoZWlnaHQgMC4ycyBlYXNlLCB3aWR0aCAwLjRzIGVhc2UgMC4ycztcbn1cbi5jYXRlZ29yeV9fb3Blbi1mb3Itc2VsZWN0OmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMHMgZWFzZSAwcywgaGVpZ2h0IDAuMnMgZWFzZSwgd2lkdGggMC40cyBlYXNlIDAuMnM7XG59XG4uY2F0ZWdvcnlfX29wZW4tZm9yLXNlbGVjdDo6YmVmb3JlLCAuY2F0ZWdvcnlfX29wZW4tZm9yLXNlbGVjdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2F0ZWdvcnlfX29wZW4tZm9yLXNlbGVjdDo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGVhc2UgMC42cywgd2lkdGggMC40cyBlYXNlLCBoZWlnaHQgMC4ycyBlYXNlIDAuNHM7XG59XG4uY2F0ZWdvcnlfX29wZW4tZm9yLXNlbGVjdDo6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBlYXNlIDAuNnMsIHdpZHRoIDAuNHMgZWFzZSwgaGVpZ2h0IDAuMnMgZWFzZSAwLjRzO1xufVxuLmNhdGVnb3J5X19zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2F0ZWdvcnlfX3NlbGVjdDpob3ZlciAuY2F0ZWdvcnlfX3JvbGwge1xuICBvcGFjaXR5OiAxO1xufVxuLmNhdGVnb3J5X19zZWxlY3Q6aG92ZXIgLmNhdGVnb3J5X19yb2xsID4gLmNhdGVnb3J5X19pdGVtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xufVxuLmNhdGVnb3J5X19zZWxlY3Q6aG92ZXIgLmNhdGVnb3J5X19yb2xsID4gLmNhdGVnb3J5X19pdGVtOm50aC1jaGlsZCgybikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xufVxuLmNhdGVnb3J5X19zZWxlY3Q6aG92ZXIgLmNhdGVnb3J5X19yb2xsID4gLmNhdGVnb3J5X19hZGQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuLmNhdGVnb3J5X19jYXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwYjFkNTE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uY2F0ZWdvcnlfX2NhcHRpb24gPiBpIHtcbiAgYW5pbWF0aW9uOiBtb3ZlIDAuOHMgaW5maW5pdGUgZWFzZS1vdXQ7XG59XG4uY2F0ZWdvcnlfX3JvbGwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgb3BhY2l0eTogMDtcbn1cbi5jYXRlZ29yeV9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTUwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6ICNjMDM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhdGVnb3J5X19pdGVtOm50aC1jaGlsZCgybikge1xuICBsZWZ0OiA1MHB4O1xufVxuLmNhdGVnb3J5X19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwYjFkNTE7XG59XG4uY2F0ZWdvcnlfX2l0ZW06aG92ZXI6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhdGVnb3J5X19pdGVtOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cbi5jYXRlZ29yeV9fYWRkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2MwMztcbn1cbi5jYXRlZ29yeV9fYWRkLWlucHV0IHtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmNhdGVnb3J5X19hZGQtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNhdGVnb3J5X19hZGQtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uY2F0ZWdvcnlfX2FkZC1zYXZlIHtcbiAgbWFyZ2luOiAwIDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59IiwiJGNvbG9yLXRleHQtZGFyazogIzMzMztcclxuJGNvbG9yLXRleHQtbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZzogI2ExODY5ZTtcclxuJGNvbG9yLWJnLWFkZDogIzc5NzU5NjtcclxuJGNvbG9yLWJnLWVsZW1lbnRzOiAjMGIxZDUxO1xyXG4kY29sb3ItZWxlbWVudHM6ICNjMDM7XHJcbiRjb2xvci1idG46ICNGRkQ2QkE7XHJcbiRjb2xvci1hZGQtMTogI2QxYzZhZDtcclxuJGNvbG9yLWFkZC0yOiAjYmJhZGEwO1xyXG4kY29sb3ItYmctMzogIzY2OGViOTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category-list',
          templateUrl: './category-list.component.html',
          styleUrls: ['./category-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_components_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]
        }];
      }, {
        selectedCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/components/currency/currency.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/expenses/components/currency/currency.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CurrencyComponent */

  /***/
  function srcAppComponentsExpensesComponentsCurrencyCurrencyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function () {
      return CurrencyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/currency.service */
    "./src/app/components/expenses/services/currency.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_currency_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/expenses/services/currency-data.service */
    "./src/app/components/expenses/services/currency-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrencyComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.currencyService.usd.scale, " ", ctx_r0.currencyService.usd.abbreviation, ": ", ctx_r0.currencyService.usd.officialRate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.currencyService.euro.scale, " ", ctx_r0.currencyService.euro.abbreviation, ": ", ctx_r0.currencyService.euro.officialRate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.currencyService.rub.scale, " ", ctx_r0.currencyService.rub.abbreviation, ": ", ctx_r0.currencyService.rub.officialRate, " ");
      }
    }

    function CurrencyComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading actual currency rates");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CurrencyComponent = /*#__PURE__*/function () {
      function CurrencyComponent(currencyService, _currencyDataService) {
        _classCallCheck(this, CurrencyComponent);

        this.currencyService = currencyService;
        this._currencyDataService = _currencyDataService;
        this.isCurrencyLoading = true;
      }

      _createClass(CurrencyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._currencyDataService.currencyRates$.subscribe(function () {
            _this2.isCurrencyLoading = false;
          });
        }
      }]);

      return CurrencyComponent;
    }();

    CurrencyComponent.ɵfac = function CurrencyComponent_Factory(t) {
      return new (t || CurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_expenses_services_currency_data_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyDataService"]));
    };

    CurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrencyComponent,
      selectors: [["app-currency"]],
      decls: 4,
      vars: 2,
      consts: [[1, "currency"], ["class", "currency__container", 4, "ngIf", "ngIfElse"], ["noCurrency", ""], [1, "currency__container"], [1, "currency__ticker"], [1, "fa", "fa-usd"], [1, "fa", "fa-eur"], [1, "fa", "fa-rub"], [1, "currency__no-currency"]],
      template: function CurrencyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrencyComponent_div_1_Template, 10, 9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrencyComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCurrencyLoading)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=VT323&display=swap\");\n@-webkit-keyframes ticker {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n@keyframes ticker {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n.currency[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #00ff43;\n  background: linear-gradient(#bbb, transparent 1px), linear-gradient(90deg, #bbb, transparent 1px);\n  background-size: 5px 5px;\n  background-color: #363636;\n  font-family: \"VT323\", monospace;\n  font-size: 1.1rem;\n  line-height: 2;\n}\n.currency__container[_ngcontent-%COMP%] {\n  -webkit-animation: ticker 10s infinite linear;\n          animation: ticker 10s infinite linear;\n}\n.currency__container[_ngcontent-%COMP%]:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.currency__container[_ngcontent-%COMP%]:hover   .currency__ticker[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.currency__ticker[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 33%;\n}\n.currency__no-currency[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlcy9jb21wb25lbnRzL2N1cnJlbmN5L0U6XFxUcmFpbmluZ1xcQW5ndWxhclxcbW9uZXktbWFuYWdlclxcbW9uZXktbWFuYWdlci1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxleHBlbnNlc1xcY29tcG9uZW50c1xcY3VycmVuY3lcXGN1cnJlbmN5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2VzL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFFUjtFQUNDO0lBQ0MsMkJBQUE7RUNBQTtFREVEO0lBQ0MsNEJBQUE7RUNBQTtBQUNGO0FETkE7RUFDQztJQUNDLDJCQUFBO0VDQUE7RURFRDtJQUNDLDRCQUFBO0VDQUE7QUFDRjtBREdBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUdBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNERDtBREdDO0VBQ0MsNkNBQUE7VUFBQSxxQ0FBQTtBQ0RGO0FER0U7RUFDQyxvQ0FBQTtVQUFBLDRCQUFBO0FDREg7QURJRTtFQUNDLHFCQUFBO0FDRkg7QURNQztFQUNDLHFCQUFBO0VBQ0EsVUFBQTtBQ0pGO0FET0M7RUFDQyxVQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2VzL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WVDMyMyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBrZXlmcmFtZXMgdGlja2VyIHtcclxuXHRmcm9tIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHR9XHJcbn1cclxuXHJcbi5jdXJyZW5jeSB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRjb2xvcjogIzAwZmY0MztcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoICNiYmIsIHRyYW5zcGFyZW50IDFweCksIGxpbmVhci1ncmFkaWVudCggOTBkZWcsICNiYmIsIHRyYW5zcGFyZW50IDFweCk7XHJcblx0YmFja2dyb3VuZC1zaXplOiA1cHggNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcblx0Zm9udC1mYW1pbHk6ICdWVDMyMycsIG1vbm9zcGFjZTtcclxuXHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMjtcclxuXHJcblx0Jl9fY29udGFpbmVyIHtcclxuXHRcdGFuaW1hdGlvbjogdGlja2VyIDEwcyBpbmZpbml0ZSBsaW5lYXI7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Jjpob3ZlciAuY3VycmVuY3lfX3RpY2tlciB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX3RpY2tlciB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR3aWR0aDogMzMlO1xyXG5cdH1cclxuXHJcblx0Jl9fbm8tY3VycmVuY3kge1xyXG5cdFx0Y29sb3I6IHJlZDtcclxuXHR9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMmZGlzcGxheT1zd2FwXCIpO1xuQGtleWZyYW1lcyB0aWNrZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbi5jdXJyZW5jeSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjMDBmZjQzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2JiYiwgdHJhbnNwYXJlbnQgMXB4KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYmJiLCB0cmFuc3BhcmVudCAxcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XG4gIGZvbnQtZmFtaWx5OiBcIlZUMzIzXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLmN1cnJlbmN5X19jb250YWluZXIge1xuICBhbmltYXRpb246IHRpY2tlciAxMHMgaW5maW5pdGUgbGluZWFyO1xufVxuLmN1cnJlbmN5X19jb250YWluZXI6aG92ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLmN1cnJlbmN5X19jb250YWluZXI6aG92ZXIgLmN1cnJlbmN5X190aWNrZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uY3VycmVuY3lfX3RpY2tlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMzJTtcbn1cbi5jdXJyZW5jeV9fbm8tY3VycmVuY3kge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-currency',
          templateUrl: './currency.component.html',
          styleUrls: ['./currency.component.scss']
        }]
      }], function () {
        return [{
          type: _services_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]
        }, {
          type: src_app_components_expenses_services_currency_data_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/expenses.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/expenses/expenses.component.ts ***!
    \***********************************************************/

  /*! exports provided: ExpensesComponent */

  /***/
  function srcAppComponentsExpensesExpensesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function () {
      return ExpensesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_expenses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/expenses/services/expenses.service */
    "./src/app/components/expenses/services/expenses.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/expenses/services/month-expenses-by-category.service */
    "./src/app/components/expenses/services/month-expenses-by-category.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_month_expenses_total_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/expenses/services/month-expenses-total.service */
    "./src/app/components/expenses/services/month-expenses-total.service.ts");
    /* harmony import */


    var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/category-list/category-list.component */
    "./src/app/components/expenses/components/category-list/category-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/currency/currency.component */
    "./src/app/components/expenses/components/currency/currency.component.ts");
    /* harmony import */


    var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipes/moment.pipe */
    "./src/app/pipes/moment.pipe.ts");

    function ExpensesComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExpensesComponent_div_12_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BYN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpensesComponent_div_12_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.resetSelectedCategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedCategory.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
      }
    }

    function ExpensesComponent_ul_14_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpensesComponent_ul_14_li_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var expenses_r8 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.remove(expenses_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var expenses_r8 = ctx.$implicit;
        var i_r9 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", expenses_r8.expenses.category.name, " ", expenses_r8.expenses.amount, " BYN ");
      }
    }

    function ExpensesComponent_ul_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpensesComponent_ul_14_li_1_Template, 6, 3, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.expensesList);
      }
    }

    function ExpensesComponent_ng_template_15_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExpensesComponent_ng_template_15_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No saved expenses yet...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExpensesComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExpensesComponent_ng_template_15_p_0_Template, 2, 0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpensesComponent_ng_template_15_p_1_Template, 2, 0, "p", 28);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
      }
    }

    var ExpensesComponent = /*#__PURE__*/function () {
      function ExpensesComponent(dateService, _expensesService, _monthExpensesByCategoryService, _monthExpensesTotalService) {
        _classCallCheck(this, ExpensesComponent);

        this.dateService = dateService;
        this._expensesService = _expensesService;
        this._monthExpensesByCategoryService = _monthExpensesByCategoryService;
        this._monthExpensesTotalService = _monthExpensesTotalService;
        this.isLoading = true;
        this.selectedCategory = null;
        this.minNumberForInputValidation = 0.01;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          expensesAmountInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.minNumberForInputValidation), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.expensesList = [];
        this.monthExpensesByCategoryList = [];
        this.monthExpensesTotalList = [];
        this.monthExpensesTotalAmount = 0;
        this.selectedCategoryExpensesAmount = null;
        this.selectedCategoryExpenses = null;
      }

      _createClass(ExpensesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dateService.date$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (date) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([_this3._expensesService.loadExpenses(date), _this3._monthExpensesByCategoryService.loadMonthExpensesByCategory(date), _this3._monthExpensesTotalService.loadMonthExpensesTotal(date)]);
          })).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                expensesList = _ref2[0],
                monthExpensesByCategoryList = _ref2[1],
                monthExpensesTotalList = _ref2[2];

            _this3.expensesList = expensesList;
            _this3.monthExpensesByCategoryList = monthExpensesByCategoryList;
            _this3.monthExpensesTotalList = monthExpensesTotalList;
            _this3.monthExpensesTotalAmount = monthExpensesTotalList.length > 0 ? monthExpensesTotalList[0].amount : 0;
            _this3.isLoading = false;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          // Saving daily expenses
          this.selectedCategoryExpensesAmount = this.form.value.expensesAmountInput;
          this.selectedCategoryExpenses = {
            category: this.selectedCategory,
            amount: this.selectedCategoryExpensesAmount
          };
          var expenses = {
            day: this.dateService.date$.value.format('DD-MM-YYYY'),
            expenses: this.selectedCategoryExpenses
          };
          var savedCategoriesArray = [];
          this.expensesList.forEach(function (savedExpenses) {
            savedCategoriesArray.push(savedExpenses.expenses.category.name);
          });

          if (savedCategoriesArray.indexOf(expenses.expenses.category.name) === -1) {
            this.create(expenses);
          } else {
            this.expensesList.forEach(function (savedExpenses) {
              if (savedExpenses.expenses.category.name === _this4.selectedCategory.name) {
                expenses.expenses.amount += savedExpenses.expenses.amount;

                _this4.remove(savedExpenses);

                _this4.create(expenses);
              }
            });
          } // Saving month expenses by category


          var monthExpensesByCategory = {
            month: this.dateService.date$.value.format('MMMM-YYYY'),
            category: this.selectedCategory.name,
            amount: this.selectedCategoryExpensesAmount
          };
          var savedMonthCategoriesArray = [];
          this.monthExpensesByCategoryList.forEach(function (savedMonthExpensesByCategory) {
            savedMonthCategoriesArray.push(savedMonthExpensesByCategory.category);
          });

          if (savedMonthCategoriesArray.indexOf(monthExpensesByCategory.category) === -1) {
            this.createMonthExpensesByCategory(monthExpensesByCategory);
          } else {
            this.monthExpensesByCategoryList.forEach(function (savedMonthExpensesByCategory) {
              if (savedMonthExpensesByCategory.category === _this4.selectedCategory.name) {
                monthExpensesByCategory.amount += savedMonthExpensesByCategory.amount;

                _this4.removeMonthExpensesByCategory(savedMonthExpensesByCategory);

                _this4.createMonthExpensesByCategory(monthExpensesByCategory);
              }
            });
          } // Saving total month expenses


          var monthExpensesTotal = {
            month: this.dateService.date$.value.format('MMMM-YYYY'),
            amount: this.selectedCategoryExpensesAmount
          };
          var savedMonthExpensesTotalArray = [];
          this.monthExpensesTotalList.forEach(function (savedMonthExpensesTotal) {
            savedMonthExpensesTotalArray.push(savedMonthExpensesTotal.month);
          });

          if (savedMonthExpensesTotalArray.indexOf(monthExpensesTotal.month) === -1) {
            this.createMonthExpensesTotal(monthExpensesTotal);
          } else {
            this.monthExpensesTotalList.forEach(function (savedMonthExpensesTotal) {
              if (savedMonthExpensesTotal.month === monthExpensesTotal.month) {
                monthExpensesTotal.amount += savedMonthExpensesTotal.amount;

                _this4.removeMonthExpensesTotal(savedMonthExpensesTotal);

                _this4.createMonthExpensesTotal(monthExpensesTotal);
              }
            });
          }

          this.selectedCategoryExpenses = null;
          this.selectedCategory = null;
          this.selectedCategoryExpensesAmount = null;
        }
      }, {
        key: "create",
        value: function create(expenses) {
          var _this5 = this;

          this._expensesService.saveExpenses(expenses).subscribe(function (expense) {
            _this5.expensesList.push(expense);

            _this5.form.reset();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "remove",
        value: function remove(expenses) {
          var _this6 = this;

          var newTotal = this.monthExpensesTotalAmount - expenses.expenses.amount;
          this.removeMonthExpensesTotal(this.monthExpensesTotalList[0]);
          this.createMonthExpensesTotal({
            month: this.dateService.date$.value.format('MMMM-YYYY'),
            amount: newTotal
          });

          this._expensesService.removeExpenses(expenses).subscribe(function () {
            _this6.expensesList = _this6.expensesList.filter(function (value) {
              return value.id !== expenses.id;
            });
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "createMonthExpensesByCategory",
        value: function createMonthExpensesByCategory(monthExpensesByCategory) {
          var _this7 = this;

          this._monthExpensesByCategoryService.saveMonthExpensesByCategory(monthExpensesByCategory).subscribe(function (monthExpensesByCategoryData) {
            _this7.monthExpensesByCategoryList.push(monthExpensesByCategoryData);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "removeMonthExpensesByCategory",
        value: function removeMonthExpensesByCategory(monthExpensesByCategory) {
          var _this8 = this;

          this._monthExpensesByCategoryService.removeMonthExpensesByCategory(monthExpensesByCategory).subscribe(function () {
            _this8.monthExpensesByCategoryList = _this8.monthExpensesByCategoryList.filter(function (value) {
              return value.id !== monthExpensesByCategory.id;
            });
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "createMonthExpensesTotal",
        value: function createMonthExpensesTotal(monthExpensesTotal) {
          var _this9 = this;

          this._monthExpensesTotalService.saveMonthExpensesTotal(monthExpensesTotal).subscribe(function (monthExpensesTotalData) {
            _this9.monthExpensesTotalList.push(monthExpensesTotalData);

            _this9.monthExpensesTotalAmount = monthExpensesTotalData.amount;
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "removeMonthExpensesTotal",
        value: function removeMonthExpensesTotal(monthExpensesTotal) {
          var _this10 = this;

          this._monthExpensesTotalService.removeMonthExpensesTotal(monthExpensesTotal).subscribe(function () {
            _this10.monthExpensesTotalList = _this10.monthExpensesTotalList.filter(function (value) {
              return value.id !== monthExpensesTotal.id;
            });
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "saveSelectedCategory",
        value: function saveSelectedCategory(category) {
          this.selectedCategory = category;
        }
      }, {
        key: "resetSelectedCategory",
        value: function resetSelectedCategory() {
          this.selectedCategory = null;
        }
      }]);

      return ExpensesComponent;
    }();

    ExpensesComponent.ɵfac = function ExpensesComponent_Factory(t) {
      return new (t || ExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_expenses_services_expenses_service__WEBPACK_IMPORTED_MODULE_5__["ExpensesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_6__["MonthExpensesByCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_expenses_services_month_expenses_total_service__WEBPACK_IMPORTED_MODULE_7__["MonthExpensesTotalService"]));
    };

    ExpensesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpensesComponent,
      selectors: [["app-expenses"]],
      decls: 19,
      vars: 9,
      consts: [[1, "expenses"], [1, "expenses__header"], [1, "expenses__header-text"], [1, "expenses__header-date"], [1, "fa", "fa-calendar"], [1, "expenses__select"], [1, "expenses__category-list", 3, "selectedCategory"], [1, "expenses__form-wrapper"], ["class", "expenses__enter", 4, "ngIf"], [1, "expenses__saved"], ["class", "expenses__saved-list", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "expenses__currency", "currency"], [1, "expenses__enter"], [1, "expenses__form", 3, "formGroup", "ngSubmit"], [1, "expenses__form-fields"], ["type", "number", "step", "0.01", "min", "0", "formControlName", "expensesAmountInput", 1, "expenses__form-input"], [1, "expenses__form-byn"], [1, "expenses__form-bar"], [1, "expenses__form-label"], [1, "expenses__form-buttons"], ["type", "submit", 1, "expenses__form-save", "fa", "fa-cloud", 3, "disabled"], [1, "expenses__form-close", "fa", "fa-times", 3, "click"], [1, "expenses__saved-list"], ["class", "expenses__saved-item", 4, "ngFor", "ngForOf"], [1, "expenses__saved-item"], [1, "expenses__saved-text"], [1, "expenses__saved-remove", "fa", "fa-trash-o", 3, "click"], [4, "ngIf"], [1, "fa", "fa-spinner", "fa-pulse", "fa-3x", "fa-fw"]],
      template: function ExpensesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Selected date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "moment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-category-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedCategory", function ExpensesComponent_Template_app_category_list_selectedCategory_10_listener($event) {
            return ctx.saveSelectedCategory($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExpensesComponent_div_12_Template, 12, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExpensesComponent_ul_14_Template, 2, 1, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExpensesComponent_ng_template_15_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx.dateService.date$), "DD.MM.YYYY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expensesList.length)("ngIfElse", _r2);
        }
      },
      directives: [_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_8__["CategoryListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_10__["CurrencyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [_pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_11__["MomentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: [".expenses[_ngcontent-%COMP%] {\n  padding: 30px;\n  border: 2px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  background: #0b1d51;\n}\n.expenses__header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.expenses__header-text[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #fff;\n  text-align: center;\n}\n.expenses__header-text[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  box-sizing: border-box;\n  top: -10px;\n  left: 10px;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #fff;\n}\n.expenses__header-date[_ngcontent-%COMP%] {\n  color: #c03;\n  font-weight: bold;\n}\n.expenses__header-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.expenses__form-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 50px;\n}\n.expenses__form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.expenses__form-fields[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n.expenses__form-input[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 5px 10px;\n  border: none;\n  border-bottom: 1px solid #333;\n  background: transparent;\n  color: #fff;\n}\n.expenses__form-input[_ngcontent-%COMP%]:focus    ~ .expenses__form-label[_ngcontent-%COMP%] {\n  top: -20px;\n  color: #c03;\n  font-size: 0.8rem;\n}\n.expenses__form-input[_ngcontent-%COMP%]:hover    ~ .expenses__form-bar[_ngcontent-%COMP%]::before, .expenses__form-input[_ngcontent-%COMP%]:hover    ~ .expenses__form-bar[_ngcontent-%COMP%]::after {\n  width: 50%;\n}\n.expenses__form-byn[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n.expenses__form-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 150px;\n}\n.expenses__form-bar[_ngcontent-%COMP%]::before {\n  left: 50%;\n}\n.expenses__form-bar[_ngcontent-%COMP%]::after {\n  right: 50%;\n}\n.expenses__form-bar[_ngcontent-%COMP%]::before, .expenses__form-bar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  height: 2px;\n  transition: 0.4s ease all;\n  background: #fff;\n}\n.expenses__form-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  pointer-events: none;\n  transition: 0.2s ease all;\n  font-size: 1rem;\n}\n.expenses__form-save[_ngcontent-%COMP%], .expenses__form-close[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  color: #c03;\n}\n.expenses__form-save[_ngcontent-%COMP%]:disabled, .expenses__form-close[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n.expenses__currency[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  width: 100%;\n}\n.expenses__saved[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 1rem;\n}\n.expenses__saved-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.expenses__saved-remove[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: #c03;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlcy9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXhwZW5zZXNcXGV4cGVuc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2VzL0U6XFxUcmFpbmluZ1xcQW5ndWxhclxcbW9uZXktbWFuYWdlclxcbW9uZXktbWFuYWdlci1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxVSVxcY29sb3JzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0NMa0I7RURNbEIsbUJDSG1CO0FDRXBCO0FGR0M7RUFDQyxrQkFBQTtBRURGO0FGR0U7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRURIO0FGR0c7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRURKO0FGS0U7RUFDQyxXQ3pCYztFRDBCZCxpQkFBQTtBRUhIO0FGTUU7RUFDQyxlQUFBO0FFSkg7QUZTQztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBRVBGO0FGVUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRVJGO0FGVUU7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBRVJIO0FGV0U7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdDN0RnQjtBQ29EbkI7QUZXRztFQUNDLFVBQUE7RUFDQSxXQzdEYTtFRDhEYixpQkFBQTtBRVRKO0FGWUc7RUFFQyxVQUFBO0FFWEo7QUZlRTtFQUNDLGNBQUE7QUViSDtBRmdCRTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FFZEg7QUZnQkc7RUFDQyxTQUFBO0FFZEo7QUZpQkc7RUFDQyxVQUFBO0FFZko7QUZtQkU7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JDckdnQjtBQ21GbkI7QUZxQkU7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUVuQkg7QUZzQkU7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdDbEhjO0FDOEZqQjtBRnNCRztFQUNDLFlBQUE7QUVwQko7QUZ5QkM7RUFDQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FFdkJGO0FGMEJDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FFeEJGO0FGMEJFO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FFeEJIO0FGMkJFO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdDOUljO0FDcUhqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vVUkvY29sb3JzL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4uZXhwZW5zZXMge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgJGNvbG9yLXRleHQtbGlnaHQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcclxuXHRiYWNrZ3JvdW5kOiAkY29sb3ItYmctZWxlbWVudHM7XHJcblxyXG5cdCZfX2hlYWRlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0Ji10ZXh0IHtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJGNvbG9yLXRleHQtbGlnaHQ7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0XHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHR0b3A6IC0xMHB4O1xyXG5cdFx0XHRcdGxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji1kYXRlIHtcclxuXHRcdFx0Y29sb3I6ICRjb2xvci1lbGVtZW50cztcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCYtdG90YWwge1xyXG5cdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Jl9fZm9ybS13cmFwcGVyIHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0fVxyXG5cclxuXHQmX19mb3JtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdCYtZmllbGRzIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCYtaW5wdXQge1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItdGV4dC1kYXJrO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Y29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cclxuXHRcdFx0Jjpmb2N1cyB+IC5leHBlbnNlc19fZm9ybS1sYWJlbCB7XHJcblx0XHRcdFx0dG9wOiAtMjBweDtcclxuXHRcdFx0XHRjb2xvcjogJGNvbG9yLWVsZW1lbnRzO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6aG92ZXIgfiAuZXhwZW5zZXNfX2Zvcm0tYmFyOjpiZWZvcmUsXHJcblx0XHRcdCY6aG92ZXIgfiAuZXhwZW5zZXNfX2Zvcm0tYmFyOjphZnRlciB7XHJcblx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQmLWJ5biB7XHJcblx0XHRcdHBhZGRpbmc6IDAgNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtYmFyIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblxyXG5cdFx0XHQmOjpiZWZvcmUge1xyXG5cdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjo6YWZ0ZXIge1xyXG5cdFx0XHRcdHJpZ2h0OiA1MCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmLWJhcjo6YmVmb3JlLFxyXG5cdFx0Ji1iYXI6OmFmdGVyIHtcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0dHJhbnNpdGlvbjogLjRzIGVhc2UgYWxsO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAkY29sb3ItdGV4dC1saWdodDtcclxuXHRcdH1cclxuXHJcblx0XHQmLWxhYmVsIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHR0b3A6IDEwcHg7XHJcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuMnMgZWFzZSBhbGw7XHJcblx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQmLXNhdmUsICYtY2xvc2Uge1xyXG5cdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdHBhZGRpbmc6IDAgNXB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRjb2xvcjogJGNvbG9yLWVsZW1lbnRzO1xyXG5cclxuXHRcdFx0JjpkaXNhYmxlZCB7XHJcblx0XHRcdFx0b3BhY2l0eTogMC40O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19jdXJyZW5jeSB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAzMHB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQmX19zYXZlZCB7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcblx0XHQmLWl0ZW0ge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHR9XHJcblxyXG5cdFx0Ji1yZW1vdmUge1xyXG5cdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGNvbG9yOiAkY29sb3ItZWxlbWVudHM7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufSIsIiRjb2xvci10ZXh0LWRhcms6ICMzMzM7XHJcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItYmc6ICNhMTg2OWU7XHJcbiRjb2xvci1iZy1hZGQ6ICM3OTc1OTY7XHJcbiRjb2xvci1iZy1lbGVtZW50czogIzBiMWQ1MTtcclxuJGNvbG9yLWVsZW1lbnRzOiAjYzAzO1xyXG4kY29sb3ItYnRuOiAjRkZENkJBO1xyXG4kY29sb3ItYWRkLTE6ICNkMWM2YWQ7XHJcbiRjb2xvci1hZGQtMjogI2JiYWRhMDtcclxuJGNvbG9yLWJnLTM6ICM2NjhlYjk7XHJcbiIsIi5leHBlbnNlcyB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwYjFkNTE7XG59XG4uZXhwZW5zZXNfX2hlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leHBlbnNlc19faGVhZGVyLXRleHQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXhwZW5zZXNfX2hlYWRlci10ZXh0OjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG4uZXhwZW5zZXNfX2hlYWRlci1kYXRlIHtcbiAgY29sb3I6ICNjMDM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmV4cGVuc2VzX19oZWFkZXItdG90YWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZXhwZW5zZXNfX2Zvcm0td3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5leHBlbnNlc19fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5leHBlbnNlc19fZm9ybS1maWVsZHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5leHBlbnNlc19fZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5leHBlbnNlc19fZm9ybS1pbnB1dDpmb2N1cyB+IC5leHBlbnNlc19fZm9ybS1sYWJlbCB7XG4gIHRvcDogLTIwcHg7XG4gIGNvbG9yOiAjYzAzO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5leHBlbnNlc19fZm9ybS1pbnB1dDpob3ZlciB+IC5leHBlbnNlc19fZm9ybS1iYXI6OmJlZm9yZSwgLmV4cGVuc2VzX19mb3JtLWlucHV0OmhvdmVyIH4gLmV4cGVuc2VzX19mb3JtLWJhcjo6YWZ0ZXIge1xuICB3aWR0aDogNTAlO1xufVxuLmV4cGVuc2VzX19mb3JtLWJ5biB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmV4cGVuc2VzX19mb3JtLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmV4cGVuc2VzX19mb3JtLWJhcjo6YmVmb3JlIHtcbiAgbGVmdDogNTAlO1xufVxuLmV4cGVuc2VzX19mb3JtLWJhcjo6YWZ0ZXIge1xuICByaWdodDogNTAlO1xufVxuLmV4cGVuc2VzX19mb3JtLWJhcjo6YmVmb3JlLCAuZXhwZW5zZXNfX2Zvcm0tYmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZSBhbGw7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZXhwZW5zZXNfX2Zvcm0tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5leHBlbnNlc19fZm9ybS1zYXZlLCAuZXhwZW5zZXNfX2Zvcm0tY2xvc2Uge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2MwMztcbn1cbi5leHBlbnNlc19fZm9ybS1zYXZlOmRpc2FibGVkLCAuZXhwZW5zZXNfX2Zvcm0tY2xvc2U6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uZXhwZW5zZXNfX2N1cnJlbmN5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmV4cGVuc2VzX19zYXZlZCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZXhwZW5zZXNfX3NhdmVkLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZXhwZW5zZXNfX3NhdmVkLXJlbW92ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjMDM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpensesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expenses',
          templateUrl: './expenses.component.html',
          styleUrls: ['./expenses.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }, {
          type: src_app_components_expenses_services_expenses_service__WEBPACK_IMPORTED_MODULE_5__["ExpensesService"]
        }, {
          type: src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_6__["MonthExpensesByCategoryService"]
        }, {
          type: src_app_components_expenses_services_month_expenses_total_service__WEBPACK_IMPORTED_MODULE_7__["MonthExpensesTotalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/expenses.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/expenses/expenses.module.ts ***!
    \********************************************************/

  /*! exports provided: ExpensesModule */

  /***/
  function srcAppComponentsExpensesExpensesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesModule", function () {
      return ExpensesModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/category-list/category-list.component */
    "./src/app/components/expenses/components/category-list/category-list.component.ts");
    /* harmony import */


    var _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/currency/currency.component */
    "./src/app/components/expenses/components/currency/currency.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/date.service */
    "./src/app/services/date.service.ts");
    /* harmony import */


    var _expenses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./expenses.component */
    "./src/app/components/expenses/expenses.component.ts");
    /* harmony import */


    var src_app_components_expenses_services_expenses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/expenses/services/expenses.service */
    "./src/app/components/expenses/services/expenses.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/expenses/services/month-expenses-by-category.service */
    "./src/app/components/expenses/services/month-expenses-by-category.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_month_expenses_total_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/components/expenses/services/month-expenses-total.service */
    "./src/app/components/expenses/services/month-expenses-total.service.ts");
    /* harmony import */


    var _services_currency_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/currency.service */
    "./src/app/components/expenses/services/currency.service.ts");
    /* harmony import */


    var _services_currency_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/currency-data.service */
    "./src/app/components/expenses/services/currency-data.service.ts");
    /* harmony import */


    var src_app_components_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/components/expenses/services/categories.service */
    "./src/app/components/expenses/services/categories.service.ts");
    /* harmony import */


    var src_app_pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/pipes/app-pipes.module */
    "./src/app/pipes/app-pipes.module.ts");

    var ExpensesModule = function ExpensesModule() {
      _classCallCheck(this, ExpensesModule);
    };

    ExpensesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ExpensesModule
    });
    ExpensesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ExpensesModule_Factory(t) {
        return new (t || ExpensesModule)();
      },
      providers: [src_app_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"], src_app_components_expenses_services_expenses_service__WEBPACK_IMPORTED_MODULE_8__["ExpensesService"], src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_9__["MonthExpensesByCategoryService"], src_app_components_expenses_services_month_expenses_total_service__WEBPACK_IMPORTED_MODULE_10__["MonthExpensesTotalService"], _services_currency_service__WEBPACK_IMPORTED_MODULE_11__["CurrencyService"], _services_currency_data_service__WEBPACK_IMPORTED_MODULE_12__["CurrencyDataService"], src_app_components_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_13__["CategoriesService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], src_app_pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_14__["AppPipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExpensesModule, {
        declarations: [_expenses_component__WEBPACK_IMPORTED_MODULE_7__["ExpensesComponent"], _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"], _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], src_app_pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_14__["AppPipesModule"]],
        exports: [_expenses_component__WEBPACK_IMPORTED_MODULE_7__["ExpensesComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpensesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_expenses_component__WEBPACK_IMPORTED_MODULE_7__["ExpensesComponent"], _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"], _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], src_app_pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_14__["AppPipesModule"]],
          providers: [src_app_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"], src_app_components_expenses_services_expenses_service__WEBPACK_IMPORTED_MODULE_8__["ExpensesService"], src_app_components_expenses_services_month_expenses_by_category_service__WEBPACK_IMPORTED_MODULE_9__["MonthExpensesByCategoryService"], src_app_components_expenses_services_month_expenses_total_service__WEBPACK_IMPORTED_MODULE_10__["MonthExpensesTotalService"], _services_currency_service__WEBPACK_IMPORTED_MODULE_11__["CurrencyService"], _services_currency_data_service__WEBPACK_IMPORTED_MODULE_12__["CurrencyDataService"], src_app_components_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_13__["CategoriesService"]],
          exports: [_expenses_component__WEBPACK_IMPORTED_MODULE_7__["ExpensesComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/models/category.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/expenses/models/category.model.ts ***!
    \**************************************************************/

  /*! exports provided: Category, initialCategory */

  /***/
  function srcAppComponentsExpensesModelsCategoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialCategory", function () {
      return initialCategory;
    });

    var Category = /*#__PURE__*/function () {
      function Category(name) {
        _classCallCheck(this, Category);

        this.name = name;
      }

      _createClass(Category, null, [{
        key: "fromJSON",
        value: function fromJSON(item) {
          return Boolean(item) ? new Category(item.name) : null;
        }
      }, {
        key: "toJSON",
        value: function toJSON(category) {
          return Boolean(category) ? {
            name: category.name
          } : {};
        }
      }]);

      return Category;
    }();

    var initialCategory = [new Category('Products'), new Category('Housekeeping'), new Category('Auto')];
    /***/
  },

  /***/
  "./src/app/components/expenses/models/currency.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/expenses/models/currency.model.ts ***!
    \**************************************************************/

  /*! exports provided: Currency */

  /***/
  function srcAppComponentsExpensesModelsCurrencyModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Currency", function () {
      return Currency;
    });

    var Currency = /*#__PURE__*/function () {
      function Currency(abbreviation, id, name, officialRate, scale, date) {
        _classCallCheck(this, Currency);

        this.abbreviation = abbreviation;
        this.id = id;
        this.name = name;
        this.officialRate = officialRate;
        this.scale = scale;
        this.date = date;
      }

      _createClass(Currency, null, [{
        key: "fromJSON",
        value: function fromJSON(item) {
          return Boolean(item) ? new Currency(item.Cur_Abbreviation, item.Cur_ID, item.Cur_Name, item.Cur_OfficialRate, item.Cur_Scale, item.Date) : null;
        }
      }]);

      return Currency;
    }();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/categories-data.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/expenses/services/categories-data.service.ts ***!
    \*************************************************************************/

  /*! exports provided: CategoriesDataService */

  /***/
  function srcAppComponentsExpensesServicesCategoriesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesDataService", function () {
      return CategoriesDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/category.model */
    "./src/app/components/expenses/models/category.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoriesDataService = /*#__PURE__*/function () {
      function CategoriesDataService(_httpClient) {
        _classCallCheck(this, CategoriesDataService);

        this._httpClient = _httpClient;
        this.categories$ = this.loadSavedCategories();
      }

      _createClass(CategoriesDataService, [{
        key: "loadSavedCategories",
        value: function loadSavedCategories() {
          var localStorageData = localStorage.getItem(CategoriesDataService.categoriesLocalStorageKey);

          if (localStorageData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])((JSON.parse(localStorageData) || []).filter(Boolean).map(_models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"].fromJSON));
          } else {
            return this._httpClient.get("".concat(CategoriesDataService.baseUrl, "/defaultCategories.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (json) {
              return (json || []).filter(Boolean).map(_models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"].fromJSON);
            }));
          }
        }
      }, {
        key: "saveCategoriesToStorage",
        value: function saveCategoriesToStorage(categories) {
          localStorage.setItem(CategoriesDataService.categoriesLocalStorageKey, JSON.stringify(categories.map(_models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"].toJSON)));
        }
      }]);

      return CategoriesDataService;
    }();

    CategoriesDataService.categoriesLocalStorageKey = 'savedCategories';
    CategoriesDataService.baseUrl = 'assets';

    CategoriesDataService.ɵfac = function CategoriesDataService_Factory(t) {
      return new (t || CategoriesDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    CategoriesDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriesDataService,
      factory: CategoriesDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/categories.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/expenses/services/categories.service.ts ***!
    \********************************************************************/

  /*! exports provided: CategoriesService */

  /***/
  function srcAppComponentsExpensesServicesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
      return CategoriesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/category.model */
    "./src/app/components/expenses/models/category.model.ts");
    /* harmony import */


    var _categories_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./categories-data.service */
    "./src/app/components/expenses/services/categories-data.service.ts");

    var CategoriesService = /*#__PURE__*/function () {
      function CategoriesService(_categoriesDataService) {
        var _this11 = this;

        _classCallCheck(this, CategoriesService);

        this._categoriesDataService = _categoriesDataService;
        this.selectedCategory = null;
        this.savedCategories = [];
        this.newCategoryInput = '';
        this.placeholder = 'Add new category here';
        this.timeout = 1500;

        this._categoriesDataService.categories$.subscribe(function (categories) {
          _this11.initCategories(categories);
        });
      }

      _createClass(CategoriesService, [{
        key: "initCategories",
        value: function initCategories(categories) {
          this.savedCategories = categories;
        }
      }, {
        key: "addNewCategory",
        value: function addNewCategory() {
          var _this12 = this;

          var categoriesArray = [];
          this.savedCategories.forEach(function (category) {
            categoriesArray.push(category.name);
          });

          if (categoriesArray.indexOf(this.newCategoryInput) === -1) {
            this.savedCategories.push(new _models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](this.newCategoryInput));
          } else {
            this.placeholder = 'This category already exists';
            setTimeout(function () {
              _this12.placeholder = 'Add new category here';
            }, this.timeout);
          }

          this._categoriesDataService.saveCategoriesToStorage(this.savedCategories);

          this.newCategoryInput = '';
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(category) {
          this.selectedCategory = category;
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory() {
          this.savedCategories.splice(this.savedCategories.indexOf(this.selectedCategory), 1);

          this._categoriesDataService.saveCategoriesToStorage(this.savedCategories);
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this._categoriesDataService.saveCategoriesToStorage(this.savedCategories);
        }
      }]);

      return CategoriesService;
    }();

    CategoriesService.ɵfac = function CategoriesService_Factory(t) {
      return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_categories_data_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesDataService"]));
    };

    CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriesService,
      factory: CategoriesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _categories_data_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/currency-data.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/expenses/services/currency-data.service.ts ***!
    \***********************************************************************/

  /*! exports provided: CurrencyDataService */

  /***/
  function srcAppComponentsExpensesServicesCurrencyDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyDataService", function () {
      return CurrencyDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/currency.model */
    "./src/app/components/expenses/models/currency.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CurrencyDataService = /*#__PURE__*/function () {
      function CurrencyDataService(_http) {
        _classCallCheck(this, CurrencyDataService);

        this._http = _http;
        this.currencyRates$ = this.loadCurrency();
      }

      _createClass(CurrencyDataService, [{
        key: "loadCurrency",
        value: function loadCurrency() {
          return this._http.get("".concat(CurrencyDataService.url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (json) {
            return (json || []).filter(Boolean).map(_models_currency_model__WEBPACK_IMPORTED_MODULE_2__["Currency"].fromJSON);
          }));
        }
      }]);

      return CurrencyDataService;
    }();

    CurrencyDataService.url = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

    CurrencyDataService.ɵfac = function CurrencyDataService_Factory(t) {
      return new (t || CurrencyDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CurrencyDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrencyDataService,
      factory: CurrencyDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/currency.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/expenses/services/currency.service.ts ***!
    \******************************************************************/

  /*! exports provided: CurrencyService */

  /***/
  function srcAppComponentsExpensesServicesCurrencyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyService", function () {
      return CurrencyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _currency_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./currency-data.service */
    "./src/app/components/expenses/services/currency-data.service.ts");

    var CurrencyService = /*#__PURE__*/function () {
      function CurrencyService(_currencyDataService) {
        var _this13 = this;

        _classCallCheck(this, CurrencyService);

        this._currencyDataService = _currencyDataService;
        this.usd = null;
        this.euro = null;
        this.rub = null;

        this._currencyDataService.currencyRates$.subscribe(function (currencyRates) {
          _this13.initCurrency(currencyRates);
        });
      }

      _createClass(CurrencyService, [{
        key: "initCurrency",
        value: function initCurrency(currencyRates) {
          var _this14 = this;

          currencyRates.forEach(function (currencyRate) {
            switch (currencyRate.abbreviation) {
              case 'USD':
                _this14.usd = currencyRate;
                break;

              case 'EUR':
                _this14.euro = currencyRate;
                break;

              case 'RUB':
                _this14.rub = currencyRate;
                break;
            }
          });
        }
      }]);

      return CurrencyService;
    }();

    CurrencyService.ɵfac = function CurrencyService_Factory(t) {
      return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_currency_data_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyDataService"]));
    };

    CurrencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrencyService,
      factory: CurrencyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _currency_data_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/expenses.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/expenses/services/expenses.service.ts ***!
    \******************************************************************/

  /*! exports provided: ExpensesService */

  /***/
  function srcAppComponentsExpensesServicesExpensesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesService", function () {
      return ExpensesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ExpensesService = /*#__PURE__*/function () {
      function ExpensesService(_http) {
        _classCallCheck(this, ExpensesService);

        this._http = _http;
      }

      _createClass(ExpensesService, [{
        key: "loadExpenses",
        value: function loadExpenses(date) {
          return this._http.get("".concat(ExpensesService.url, "/").concat(date.format('DD-MM-YYYY'), ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (expenses) {
            if (!expenses) {
              return [];
            }

            return Object.keys(expenses).map(function (key) {
              return Object.assign(Object.assign({}, expenses[key]), {
                id: key
              });
            });
          }));
        }
      }, {
        key: "saveExpenses",
        value: function saveExpenses(expenses) {
          return this._http.post("".concat(ExpensesService.url, "/").concat(expenses.day, ".json"), expenses).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return Object.assign(Object.assign({}, expenses), {
              id: response.name
            });
          }));
        }
      }, {
        key: "removeExpenses",
        value: function removeExpenses(expenses) {
          return this._http["delete"]("".concat(ExpensesService.url, "/").concat(expenses.day, "/").concat(expenses.id, ".json"));
        }
      }]);

      return ExpensesService;
    }();

    ExpensesService.url = 'https://money-manager-project.firebaseio.com/expenses';

    ExpensesService.ɵfac = function ExpensesService_Factory(t) {
      return new (t || ExpensesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ExpensesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExpensesService,
      factory: ExpensesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpensesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/month-expenses-by-category.service.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/expenses/services/month-expenses-by-category.service.ts ***!
    \************************************************************************************/

  /*! exports provided: MonthExpensesByCategoryService */

  /***/
  function srcAppComponentsExpensesServicesMonthExpensesByCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthExpensesByCategoryService", function () {
      return MonthExpensesByCategoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MonthExpensesByCategoryService = /*#__PURE__*/function () {
      function MonthExpensesByCategoryService(_http) {
        _classCallCheck(this, MonthExpensesByCategoryService);

        this._http = _http;
      }

      _createClass(MonthExpensesByCategoryService, [{
        key: "loadMonthExpensesByCategory",
        value: function loadMonthExpensesByCategory(date) {
          return this._http.get("".concat(MonthExpensesByCategoryService.url, "/").concat(date.format('MMMM-YYYY'), ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (monthExpensesByCategory) {
            if (!monthExpensesByCategory) {
              return [];
            }

            return Object.keys(monthExpensesByCategory).map(function (key) {
              return Object.assign(Object.assign({}, monthExpensesByCategory[key]), {
                id: key
              });
            });
          }));
        }
      }, {
        key: "saveMonthExpensesByCategory",
        value: function saveMonthExpensesByCategory(monthExpensesByCategory) {
          return this._http.post("".concat(MonthExpensesByCategoryService.url, "/").concat(monthExpensesByCategory.month, ".json"), monthExpensesByCategory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return Object.assign(Object.assign({}, monthExpensesByCategory), {
              id: response.name
            });
          }));
        }
      }, {
        key: "removeMonthExpensesByCategory",
        value: function removeMonthExpensesByCategory(monthExpensesByCategory) {
          return this._http["delete"]("".concat(MonthExpensesByCategoryService.url, "/").concat(monthExpensesByCategory.month, "/").concat(monthExpensesByCategory.id, ".json"));
        }
      }]);

      return MonthExpensesByCategoryService;
    }();

    MonthExpensesByCategoryService.url = 'https://money-manager-project.firebaseio.com/monthExpensesByCategory';

    MonthExpensesByCategoryService.ɵfac = function MonthExpensesByCategoryService_Factory(t) {
      return new (t || MonthExpensesByCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MonthExpensesByCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MonthExpensesByCategoryService,
      factory: MonthExpensesByCategoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthExpensesByCategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/expenses/services/month-expenses-total.service.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/expenses/services/month-expenses-total.service.ts ***!
    \******************************************************************************/

  /*! exports provided: MonthExpensesTotalService */

  /***/
  function srcAppComponentsExpensesServicesMonthExpensesTotalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthExpensesTotalService", function () {
      return MonthExpensesTotalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MonthExpensesTotalService = /*#__PURE__*/function () {
      function MonthExpensesTotalService(_http) {
        _classCallCheck(this, MonthExpensesTotalService);

        this._http = _http;
      }

      _createClass(MonthExpensesTotalService, [{
        key: "loadMonthExpensesTotal",
        value: function loadMonthExpensesTotal(date) {
          return this._http.get("".concat(MonthExpensesTotalService.url, "/").concat(date.format('MMMM-YYYY'), ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (monthExpensesTotal) {
            if (!monthExpensesTotal) {
              return [];
            }

            return Object.keys(monthExpensesTotal).map(function (key) {
              return Object.assign(Object.assign({}, monthExpensesTotal[key]), {
                id: key
              });
            });
          }));
        }
      }, {
        key: "saveMonthExpensesTotal",
        value: function saveMonthExpensesTotal(monthExpensesTotal) {
          return this._http.post("".concat(MonthExpensesTotalService.url, "/").concat(monthExpensesTotal.month, ".json"), monthExpensesTotal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return Object.assign(Object.assign({}, monthExpensesTotal), {
              id: response.name
            });
          }));
        }
      }, {
        key: "removeMonthExpensesTotal",
        value: function removeMonthExpensesTotal(monthExpensesTotal) {
          return this._http["delete"]("".concat(MonthExpensesTotalService.url, "/").concat(monthExpensesTotal.month, "/").concat(monthExpensesTotal.id, ".json"));
        }
      }]);

      return MonthExpensesTotalService;
    }();

    MonthExpensesTotalService.url = 'https://money-manager-project.firebaseio.com/monthExpensesTotal';

    MonthExpensesTotalService.ɵfac = function MonthExpensesTotalService_Factory(t) {
      return new (t || MonthExpensesTotalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MonthExpensesTotalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MonthExpensesTotalService,
      factory: MonthExpensesTotalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthExpensesTotalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../calendar/calendar.component */
    "./src/app/components/calendar/calendar.component.ts");
    /* harmony import */


    var _days_list_days_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../days-list/days-list.component */
    "./src/app/components/days-list/days-list.component.ts");
    /* harmony import */


    var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../expenses/expenses.component */
    "./src/app/components/expenses/expenses.component.ts");

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "home__calendar"], [1, "home__content"], [1, "home__days-list"], [1, "home__expenses"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-days-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-expenses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"], _days_list_days_list_component__WEBPACK_IMPORTED_MODULE_2__["DaysListComponent"], _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"]],
      styles: [".home__content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.home__expenses[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 400px;\n  top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0U6XFxUcmFpbmluZ1xcQW5ndWxhclxcbW9uZXktbWFuYWdlclxcbW9uZXktbWFuYWdlci1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLGFBQUE7QUNIUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL1VJL2NvbG9ycy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4uaG9tZSB7XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fZXhwZW5zZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiA0MDBweDtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhvbWVfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhvbWVfX2V4cGVuc2VzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA0MDBweDtcbiAgdG9wOiA1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/not-found/not-found.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, this page doesn't exist...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/settings/category/category.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/settings/category/category.component.ts ***!
    \********************************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppComponentsSettingsCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../expenses/services/categories.service */
    "./src/app/components/expenses/services/categories.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CategoryComponent_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryComponent_input_3_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.category.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.category.name);
      }
    }

    function CategoryComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.category.name, " ");
      }
    }

    function CategoryComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.categoriesService.deleteCategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(categoriesService) {
        _classCallCheck(this, CategoryComponent);

        this.categoriesService = categoriesService;
        this.isEditMode = false;
        this.clickedCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CategoryComponent, [{
        key: "clickCategory",
        value: function clickCategory() {
          this.categoriesService.selectCategory(this.category);
        }
      }, {
        key: "editCategory",
        value: function editCategory() {
          if (this.isEditMode) {
            this.categoriesService.saveChanges();
            this.isEditMode = false;
          } else {
            this.isEditMode = true;
          }
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["app-category"]],
      hostBindings: function CategoryComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_click_HostBindingHandler() {
            return ctx.clickCategory();
          });
        }
      },
      inputs: {
        category: "category",
        index: "index"
      },
      outputs: {
        clickedCategory: "clickedCategory"
      },
      decls: 8,
      vars: 6,
      consts: [[1, "category__content"], [1, "category__index"], ["class", "category__name-edit", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "category__name", 4, "ngIf"], [1, "settings__category-edit"], [3, "click"], ["class", "settings__category-delete fa fa-trash", 3, "click", 4, "ngIf"], ["type", "text", 1, "category__name-edit", 3, "ngModel", "ngModelChange"], [1, "category__name"], [1, "settings__category-delete", "fa", "fa-trash", 3, "click"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryComponent_input_3_Template, 1, 1, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_Template_button_click_6_listener() {
            return ctx.editCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryComponent_button_7_Template, 1, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.index + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isEditMode ? "fa fa-floppy-o" : "fa fa-pencil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".category__content[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px dashed #fff;\n  font-size: 2rem;\n}\n.category__content[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.category__index[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.category__name-edit[_ngcontent-%COMP%], .category__name[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.category__name-edit[_ngcontent-%COMP%] {\n  border: none;\n  color: #a1869e;\n  background: transparent;\n  font-size: 2rem;\n}\n.fa[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  border: none;\n  cursor: pointer;\n  color: #c03;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9jYXRlZ29yeS9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0dGluZ3NcXGNhdGVnb3J5XFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9jYXRlZ29yeS9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcVUlcXGNvbG9yc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUM7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDSEY7QURLRTtFQUNDLDBCQUFBO0FDSEg7QURPQztFQUNDLGVBQUE7QUNMRjtBRFFDO0VBRUMsWUFBQTtBQ1BGO0FEVUM7RUFDQyxZQUFBO0VBQ0EsY0V2QlM7RUZ3QlQsdUJBQUE7RUFDQSxlQUFBO0FDUkY7QURZQTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdFOUJnQjtFRitCaEIsdUJBQUE7QUNURCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9VSS9jb2xvcnMvY29sb3JzLnNjc3MnO1xyXG5cclxuLmNhdGVnb3J5IHtcclxuXHJcblx0Jl9fY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAkY29sb3ItdGV4dC1saWdodDtcclxuXHRcdGZvbnQtc2l6ZTogMnJlbTtcclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pbmRleCB7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0fVxyXG5cclxuXHQmX19uYW1lLWVkaXQsXHJcblx0Jl9fbmFtZSB7XHJcblx0XHRmbGV4LWdyb3c6IDE7XHJcblx0fVxyXG5cclxuXHQmX19uYW1lLWVkaXQge1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Y29sb3I6ICRjb2xvci1iZztcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Zm9udC1zaXplOiAycmVtO1xyXG5cdH1cclxufVxyXG5cclxuLmZhIHtcclxuXHRwYWRkaW5nOiAwIDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiAkY29sb3ItZWxlbWVudHM7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn0iLCIuY2F0ZWdvcnlfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmZmY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5jYXRlZ29yeV9fY29udGVudDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xufVxuLmNhdGVnb3J5X19pbmRleCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5jYXRlZ29yeV9fbmFtZS1lZGl0LCAuY2F0ZWdvcnlfX25hbWUge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uY2F0ZWdvcnlfX25hbWUtZWRpdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNhMTg2OWU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mYSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNjMDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsIiRjb2xvci10ZXh0LWRhcms6ICMzMzM7XHJcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZmZmO1xyXG4kY29sb3ItYmc6ICNhMTg2OWU7XHJcbiRjb2xvci1iZy1hZGQ6ICM3OTc1OTY7XHJcbiRjb2xvci1iZy1lbGVtZW50czogIzBiMWQ1MTtcclxuJGNvbG9yLWVsZW1lbnRzOiAjYzAzO1xyXG4kY29sb3ItYnRuOiAjRkZENkJBO1xyXG4kY29sb3ItYWRkLTE6ICNkMWM2YWQ7XHJcbiRjb2xvci1hZGQtMjogI2JiYWRhMDtcclxuJGNvbG9yLWJnLTM6ICM2NjhlYjk7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.scss']
        }]
      }], function () {
        return [{
          type: _expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]
        }];
      }, {
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickedCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clickCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/settings/settings.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/settings/settings.component.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../expenses/services/categories.service */
    "./src/app/components/expenses/services/categories.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/components/settings/category/category.component.ts");

    function SettingsComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.categoriesService.addNewCategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingsComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-category", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r4)("index", i_r5);
      }
    }

    var SettingsComponent = function SettingsComponent(categoriesService) {
      _classCallCheck(this, SettingsComponent);

      this.categoriesService = categoriesService;
      this.selectedCategory = null;
    };

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 8,
      vars: 4,
      consts: [[1, "settings__category-list"], [1, "settings__category-add"], ["type", "text", 1, "settings__category-input", 3, "ngModel", "ngModelChange"], [1, "settings__category-bar"], [1, "settings__category-label"], ["class", "fa fa-plus settings__category-add-save", 3, "click", 4, "ngIf"], ["class", "settings__category-item", 4, "ngFor", "ngForOf"], [1, "fa", "fa-plus", "settings__category-add-save", 3, "click"], [1, "settings__category-item"], [1, "settings__category-content"], [3, "category", "index"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.categoriesService.newCategoryInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_button_6_Template, 1, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SettingsComponent_li_7_Template, 3, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoriesService.newCategoryInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.categoriesService.placeholder, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoriesService.newCategoryInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesService.savedCategories);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"]],
      styles: [".settings__category[_ngcontent-%COMP%] {\n  display: flex;\n}\n.settings__category-list[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding: 30px;\n  border: 2px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n  background: #0b1d51;\n}\n.settings__category-add[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.settings__category-input[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 5px 10px;\n  border: none;\n  border-bottom: 1px solid #333;\n  background: transparent;\n  color: #fff;\n}\n.settings__category-input[_ngcontent-%COMP%]:focus    ~ .settings__category-label[_ngcontent-%COMP%] {\n  top: -20px;\n  color: #c03;\n  font-size: 0.8rem;\n}\n.settings__category-input[_ngcontent-%COMP%]:hover    ~ .settings__category-bar[_ngcontent-%COMP%]::before, .settings__category-input[_ngcontent-%COMP%]:hover    ~ .settings__category-bar[_ngcontent-%COMP%]::after {\n  width: 50%;\n}\n.settings__category-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 300px;\n}\n.settings__category-bar[_ngcontent-%COMP%]::before {\n  left: 50%;\n}\n.settings__category-bar[_ngcontent-%COMP%]::after {\n  right: 50%;\n}\n.settings__category-bar[_ngcontent-%COMP%]::before, .settings__category-bar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  height: 2px;\n  transition: 0.4s ease all;\n  background: #fff;\n}\n.settings__category-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  pointer-events: none;\n  transition: 0.2s ease all;\n  font-size: 1rem;\n}\n.settings__category-add-save[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  border: none;\n  background: transparent;\n  color: #c03;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9FOlxcVHJhaW5pbmdcXEFuZ3VsYXJcXG1vbmV5LW1hbmFnZXJcXG1vbmV5LW1hbmFnZXItcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL0U6XFxUcmFpbmluZ1xcQW5ndWxhclxcbW9uZXktbWFuYWdlclxcbW9uZXktbWFuYWdlci1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxVSVxcY29sb3JzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQztFQUVDLGFBQUE7QUNKRjtBRE1FO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdFWmdCO0VGYWhCLG1CRVZpQjtBRE1wQjtBRE9FO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTEg7QURRRTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0U5QmdCO0FEd0JuQjtBRFFHO0VBQ0MsVUFBQTtFQUNBLFdFOUJhO0VGK0JiLGlCQUFBO0FDTko7QURTRztFQUVDLFVBQUE7QUNSSjtBRGFFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNYSDtBRGFHO0VBQ0MsU0FBQTtBQ1hKO0FEY0c7RUFDQyxVQUFBO0FDWko7QURnQkU7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JFbkVnQjtBRG9EbkI7QURrQkU7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNoQkg7QURtQkU7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0UvRWM7RUZnRmQsZUFBQTtBQ2pCSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vVUkvY29sb3JzL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4uc2V0dGluZ3Mge1xyXG5cdFxyXG5cdCZfX2NhdGVnb3J5IHtcclxuXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdCYtbGlzdCB7XHJcblx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHg7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcclxuXHRcdFx0YmFja2dyb3VuZDogJGNvbG9yLWJnLWVsZW1lbnRzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtYWRkIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLWlucHV0IHtcclxuXHRcdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXRleHQtZGFyaztcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcclxuXHJcblx0XHRcdCY6Zm9jdXMgfiAuc2V0dGluZ3NfX2NhdGVnb3J5LWxhYmVsIHtcclxuXHRcdFx0XHR0b3A6IC0yMHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAkY29sb3ItZWxlbWVudHM7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjpob3ZlciB+IC5zZXR0aW5nc19fY2F0ZWdvcnktYmFyOjpiZWZvcmUsXHJcblx0XHRcdCY6aG92ZXIgfiAuc2V0dGluZ3NfX2NhdGVnb3J5LWJhcjo6YWZ0ZXIge1xyXG5cdFx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Ji1iYXIge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAzMDBweDtcclxuXHJcblx0XHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0cmlnaHQ6IDUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYtYmFyOjpiZWZvcmUsXHJcblx0XHQmLWJhcjo6YWZ0ZXIge1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuNHMgZWFzZSBhbGw7XHJcblx0XHRcdGJhY2tncm91bmQ6ICRjb2xvci10ZXh0LWxpZ2h0O1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtbGFiZWwge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDEwcHg7XHJcblx0XHRcdHRvcDogMTBweDtcclxuXHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0XHRcdHRyYW5zaXRpb246IC4ycyBlYXNlIGFsbDtcclxuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtYWRkLXNhdmUge1xyXG5cdFx0XHRwYWRkaW5nOiAwIDVweDtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Y29sb3I6ICRjb2xvci1lbGVtZW50cztcclxuXHRcdFx0Zm9udC1zaXplOiAycmVtO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi5zZXR0aW5nc19fY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNldHRpbmdzX19jYXRlZ29yeS1saXN0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzBiMWQ1MTtcbn1cbi5zZXR0aW5nc19fY2F0ZWdvcnktYWRkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZXR0aW5nc19fY2F0ZWdvcnktaW5wdXQge1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2V0dGluZ3NfX2NhdGVnb3J5LWlucHV0OmZvY3VzIH4gLnNldHRpbmdzX19jYXRlZ29yeS1sYWJlbCB7XG4gIHRvcDogLTIwcHg7XG4gIGNvbG9yOiAjYzAzO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5zZXR0aW5nc19fY2F0ZWdvcnktaW5wdXQ6aG92ZXIgfiAuc2V0dGluZ3NfX2NhdGVnb3J5LWJhcjo6YmVmb3JlLCAuc2V0dGluZ3NfX2NhdGVnb3J5LWlucHV0OmhvdmVyIH4gLnNldHRpbmdzX19jYXRlZ29yeS1iYXI6OmFmdGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZXR0aW5nc19fY2F0ZWdvcnktYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG59XG4uc2V0dGluZ3NfX2NhdGVnb3J5LWJhcjo6YmVmb3JlIHtcbiAgbGVmdDogNTAlO1xufVxuLnNldHRpbmdzX19jYXRlZ29yeS1iYXI6OmFmdGVyIHtcbiAgcmlnaHQ6IDUwJTtcbn1cbi5zZXR0aW5nc19fY2F0ZWdvcnktYmFyOjpiZWZvcmUsIC5zZXR0aW5nc19fY2F0ZWdvcnktYmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZSBhbGw7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2V0dGluZ3NfX2NhdGVnb3J5LWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uc2V0dGluZ3NfX2NhdGVnb3J5LWFkZC1zYXZlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjYzAzO1xuICBmb250LXNpemU6IDJyZW07XG59IiwiJGNvbG9yLXRleHQtZGFyazogIzMzMztcclxuJGNvbG9yLXRleHQtbGlnaHQ6ICNmZmY7XHJcbiRjb2xvci1iZzogI2ExODY5ZTtcclxuJGNvbG9yLWJnLWFkZDogIzc5NzU5NjtcclxuJGNvbG9yLWJnLWVsZW1lbnRzOiAjMGIxZDUxO1xyXG4kY29sb3ItZWxlbWVudHM6ICNjMDM7XHJcbiRjb2xvci1idG46ICNGRkQ2QkE7XHJcbiRjb2xvci1hZGQtMTogI2QxYzZhZDtcclxuJGNvbG9yLWFkZC0yOiAjYmJhZGEwO1xyXG4kY29sb3ItYmctMzogIzY2OGViOTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss']
        }]
      }], function () {
        return [{
          type: _expenses_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/app-pipes.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/app-pipes.module.ts ***!
    \*******************************************/

  /*! exports provided: AppPipesModule */

  /***/
  function srcAppPipesAppPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPipesModule", function () {
      return AppPipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _moment_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./moment.pipe */
    "./src/app/pipes/moment.pipe.ts");

    var AppPipesModule = function AppPipesModule() {
      _classCallCheck(this, AppPipesModule);
    };

    AppPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppPipesModule
    });
    AppPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppPipesModule_Factory(t) {
        return new (t || AppPipesModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppPipesModule, {
        declarations: [_moment_pipe__WEBPACK_IMPORTED_MODULE_1__["MomentPipe"]],
        exports: [_moment_pipe__WEBPACK_IMPORTED_MODULE_1__["MomentPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_moment_pipe__WEBPACK_IMPORTED_MODULE_1__["MomentPipe"]],
          imports: [],
          exports: [_moment_pipe__WEBPACK_IMPORTED_MODULE_1__["MomentPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/moment.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/moment.pipe.ts ***!
    \**************************************/

  /*! exports provided: MomentPipe */

  /***/
  function srcAppPipesMomentPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentPipe", function () {
      return MomentPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MomentPipe = /*#__PURE__*/function () {
      function MomentPipe() {
        _classCallCheck(this, MomentPipe);
      }

      _createClass(MomentPipe, [{
        key: "transform",
        value: function transform(value) {
          var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MMMM YYYY';
          return value.format(format);
        }
      }]);

      return MomentPipe;
    }();

    MomentPipe.ɵfac = function MomentPipe_Factory(t) {
      return new (t || MomentPipe)();
    };

    MomentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "moment",
      type: MomentPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'moment',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/date.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/date.service.ts ***!
    \******************************************/

  /*! exports provided: DateService */

  /***/
  function srcAppServicesDateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateService", function () {
      return DateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DateService = /*#__PURE__*/function () {
      function DateService() {
        _classCallCheck(this, DateService);

        this.date$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](moment__WEBPACK_IMPORTED_MODULE_1__());
      }

      _createClass(DateService, [{
        key: "changeMonth",
        value: function changeMonth(direction) {
          var value = this.date$.value.add(direction, 'month');
          this.date$.next(value);
        }
      }, {
        key: "changeDate",
        value: function changeDate(date) {
          var value = this.date$.value.set({
            date: date.date()
          });
          this.date$.next(value);
        }
      }]);

      return DateService;
    }();

    DateService.ɵfac = function DateService_Factory(t) {
      return new (t || DateService)();
    };

    DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DateService,
      factory: DateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Training\Angular\money-manager\money-manager-project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map