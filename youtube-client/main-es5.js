function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


    var _youtube_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./youtube/components/not-found/not-found.component */
    "./src/app/youtube/components/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");
    /* harmony import */


    var _youtube_components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./youtube/components/admin-page/admin-page.component */
    "./src/app/youtube/components/admin-page/admin-page.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! src/app/auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (module) {
          return module.AuthModule;
        });
      }
    }, {
      path: 'search',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! src/app/youtube/youtube.module */
        "./src/app/youtube/youtube.module.ts")).then(function (module) {
          return module.YoutubeModule;
        });
      },
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'admin',
      component: _youtube_components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__["AdminPageComponent"],
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '**',
      component: _youtube_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '**',
      component: _youtube_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
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


    var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/components/header/header.component */
    "./src/app/core/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'youtube-client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./youtube/youtube.module */
    "./src/app/youtube/youtube.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _redux_reducers_youtube_client_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./redux/reducers/youtube-client.reducer */
    "./src/app/redux/reducers/youtube-client.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _redux_effects_youtube_card_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./redux/effects/youtube-card.effects */
    "./src/app/redux/effects/youtube-card.effects.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_5__["YoutubeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_redux_reducers_youtube_client_reducer__WEBPACK_IMPORTED_MODULE_8__["youtubeClientReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_redux_effects_youtube_card_effects__WEBPACK_IMPORTED_MODULE_12__["YoutubeCardEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_5__["YoutubeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_5__["YoutubeModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_redux_reducers_youtube_client_reducer__WEBPACK_IMPORTED_MODULE_8__["youtubeClientReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_redux_effects_youtube_card_effects__WEBPACK_IMPORTED_MODULE_12__["YoutubeCardEffects"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
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


    var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/login-page/login-page.component */
    "./src/app/auth/components/login-page/login-page.component.ts");

    var routes = [{
      path: '',
      component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/login-page/login-page.component */
    "./src/app/auth/components/login-page/login-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]],
        exports: [_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]],
          providers: [],
          exports: [_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/components/login-page/login-page.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/auth/components/login-page/login-page.component.ts ***!
    \********************************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppAuthComponentsLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
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


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var LoginPageComponent = /*#__PURE__*/function () {
      function LoginPageComponent(loginService, navigateService) {
        _classCallCheck(this, LoginPageComponent);

        this.loginService = loginService;
        this.navigateService = navigateService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.authName = '';
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var response = this.loginService.getAuthToken();

          if (response) {
            this.navigateService.navigateTo(['/search']);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.loginService.saveAuthToken(this.loginForm.value);
          this.navigateService.navigateTo(['/search']);
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 11,
      vars: 2,
      consts: [[1, "login-page__login-form", "login-form", 3, "formGroup", "ngSubmit"], [1, "login-form__legend"], [1, "login-form__label"], ["type", "text", "formControlName", "login", 1, "login-form__input"], ["type", "password", "formControlName", "password", 1, "login-form__input"], ["mat-raised-button", "", "color", "primary", 1, "login-form__submit", 3, "disabled"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".login-page__login-form[_ngcontent-%COMP%] {\n  margin: 220px auto 0;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  max-width: 400px;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n}\n\n.login-form__legend[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.login-form__label[_ngcontent-%COMP%] {\n  color: #888888;\n  font-size: 0.7rem;\n}\n\n.login-form__input[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #e0e0e0;\n  line-height: 20px;\n}\n\n.login-form__submit[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-top: 20px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvRTpcXFRyYWluaW5nIFJTIFNjaG9vbCBBbmd1bGFyXFx5b3V0dWJlLWNsaWVudC9zcmNcXGFwcFxcYXV0aFxcY29tcG9uZW50c1xcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvRTpcXFRyYWluaW5nIFJTIFNjaG9vbCBBbmd1bGFyXFx5b3V0dWJlLWNsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxVSVxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUM7RUFDQyxvQkFBQTtBQ0hGOztBRFFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVoQmtCO0FEV25COztBRE9DO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUM7RUFDQyxjRXZCSztFRndCTCxpQkFBQTtBQ05GOztBRFNDO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJFbENnQjtFRm1DaEIsaUJBQUE7QUNQRjs7QURVQztFQUNDLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9VSS9jb2xvcnMuc2Nzc1wiO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG5cclxuXHQmX19sb2dpbi1mb3JtIHtcclxuXHRcdG1hcmdpbjogMjIwcHggYXV0byAwO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRtYXgtd2lkdGg6IDQwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1saWdodDtcclxuXHJcblx0Jl9fbGVnZW5kIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0Jl9fbGFiZWwge1xyXG5cdFx0Y29sb3I6ICR0ZXh0O1xyXG5cdFx0Zm9udC1zaXplOiAuN3JlbTtcclxuXHR9XHJcblxyXG5cdCZfX2lucHV0IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWRhcms7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHR9XHJcblxyXG5cdCZfX3N1Ym1pdCB7XHJcblx0XHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0fVxyXG59IiwiLmxvZ2luLXBhZ2VfX2xvZ2luLWZvcm0ge1xuICBtYXJnaW46IDIyMHB4IGF1dG8gMDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4ubG9naW4tZm9ybV9fbGVnZW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2luLWZvcm1fX2xhYmVsIHtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLmxvZ2luLWZvcm1fX2lucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmxvZ2luLWZvcm1fX3N1Ym1pdCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG59IiwiJGJhY2tncm91bmQtbGlnaHQ6ICNmNWY1ZjU7XHJcbiRiYWNrZ3JvdW5kLWRhcms6ICNlMGUwZTA7XHJcbiR0ZXh0OiAjODg4ODg4O1xyXG4kcHJpbWFyeTogIzNmNTFiNTsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/services/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppAuthServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(navigateService) {
        _classCallCheck(this, LoginService);

        this.navigateService = navigateService;
        this.authName$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Your name');
        this.isUserAuthorised$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
      }

      _createClass(LoginService, [{
        key: "saveAuthToken",
        value: function saveAuthToken(loginFormValue) {
          localStorage.setItem(LoginService.authLocalStorageKey, JSON.stringify(loginFormValue));
        }
      }, {
        key: "getAuthToken",
        value: function getAuthToken() {
          var savedAuthToken = localStorage.getItem(LoginService.authLocalStorageKey);

          if (savedAuthToken) {
            var savedAuthName = JSON.parse(savedAuthToken).login;
            this.authName$.next(savedAuthName);
            this.isUserAuthorised$.next(true);
            return savedAuthToken;
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem(LoginService.authLocalStorageKey);
          this.isUserAuthorised$.next(false);
          this.authName$.next('Your name');
          this.navigateService.navigateTo(['/login']);
        }
      }]);

      return LoginService;
    }();

    LoginService.authLocalStorageKey = 'youtubeClientSavedToken';

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/header/header.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/header/header.component.ts ***!
    \************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCoreComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search-input/search-input.component */
    "./src/app/core/components/search-input/search-input.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../registration/registration.component */
    "./src/app/core/components/registration/registration.component.ts");

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);
    };

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 0,
      consts: [[1, "header"], [1, "header__container"], [1, "header__search-block"], [1, "header__registration-block"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-search-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]],
      styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  flex-wrap: wrap-reverse;\n  height: 200px;\n}\n.header__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  width: 80%;\n}\n.header__search-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9FOlxcVHJhaW5pbmcgUlMgU2Nob29sIEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNBRDtBREVDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNBRjtBREdDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcblxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0ZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHJcblx0Jl9fY29udGFpbmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcblx0XHR3aWR0aDogODAlO1xyXG5cdH1cclxuXHJcblx0Jl9fc2VhcmNoLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWdyb3c6IDE7XHJcblx0fVxyXG59IiwiLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gIHdpZHRoOiA4MCU7XG59XG4uaGVhZGVyX19zZWFyY2gtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/registration/registration.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/registration/registration.component.ts ***!
    \************************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppCoreComponentsRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function RegistrationComponent_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " person ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_mat_icon_5_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.loginService.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegistrationComponent = function RegistrationComponent(loginService) {
      _classCallCheck(this, RegistrationComponent);

      this.loginService = loginService;
    };

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 6,
      vars: 5,
      consts: [[1, "registration"], [1, "registration__name"], ["color", "primary", 4, "ngIf"], ["color", "primary", "style", "cursor: pointer", 3, "click", 4, "ngIf"], ["color", "primary"], ["color", "primary", 2, "cursor", "pointer", 3, "click"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegistrationComponent_mat_icon_4_Template, 2, 0, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_mat_icon_5_Template, 2, 0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.loginService.authName$), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginService.isUserAuthorised$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.isUserAuthorised$);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".registration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 100px;\n}\n.registration__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9FOlxcVHJhaW5pbmcgUlMgU2Nob29sIEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NEO0FEQ0M7RUFDQyxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHJcblx0Jl9fbmFtZSB7XHJcblx0XHRmb250LXNpemU6IDAuOHJlbTtcclxuXHR9XHJcbn0iLCIucmVnaXN0cmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5yZWdpc3RyYXRpb25fX25hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/search-input/search-input.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/search-input/search-input.component.ts ***!
    \************************************************************************/

  /*! exports provided: SearchInputComponent */

  /***/
  function srcAppCoreComponentsSearchInputSearchInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function () {
      return SearchInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/search-options.service */
    "./src/app/shared/services/search-options.service.ts");
    /* harmony import */


    var src_app_youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/youtube/services/youtube.service */
    "./src/app/youtube/services/youtube.service.ts");
    /* harmony import */


    var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["searchInput"];

    function SearchInputComponent_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_mat_icon_6_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.searchOptionsService.searchOptionsBarToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tune ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchInputComponent_div_7_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchInputComponent_div_7_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchInputComponent_div_7_mat_icon_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchInputComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorting by: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_div_7_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.searchOptionsService.sortByDateToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchInputComponent_div_7_mat_icon_5_Template, 2, 0, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchInputComponent_div_7_ng_template_6_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_div_7_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.searchOptionsService.sortByViewsToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " count of views ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchInputComponent_div_7_mat_icon_10_Template, 2, 0, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " by word or sentence ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_div_7_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.searchOptionsService.searchNameStr = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchOptionsService.sortByDateUp)("ngIfElse", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchOptionsService.sortByViewsUp)("ngIfElse", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchOptionsService.searchNameStr);
      }
    }

    var SearchInputComponent = /*#__PURE__*/function () {
      function SearchInputComponent(searchOptionsService, youtubeService, loginService) {
        _classCallCheck(this, SearchInputComponent);

        this.searchOptionsService = searchOptionsService;
        this.youtubeService = youtubeService;
        this.loginService = loginService;
        this.subscription = null;
      }

      _createClass(SearchInputComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            return event.target.value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (res) {
            return res.length > 2;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (searchRequest) {
            if (searchRequest) {
              _this.youtubeService.searchRequest$.emit(searchRequest);

              _this.youtubeService.startLoading();
            }
          });
          this.loginService.isUserAuthorised$.subscribe(function (isAuth) {
            if (!isAuth) {
              _this.clearInput();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "clearInput",
        value: function clearInput() {
          this.searchInput.nativeElement.value = '';
        }
      }]);

      return SearchInputComponent;
    }();

    SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) {
      return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_3__["SearchOptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]));
    };

    SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchInputComponent,
      selectors: [["app-search-input"]],
      viewQuery: function SearchInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      decls: 8,
      vars: 3,
      consts: [[1, "search-input"], [1, "search-input__search-block"], ["aria-hidden", "true", 1, "fa", "fa-youtube-play"], ["type", "search", 1, "search-input__field", 3, "disabled"], ["searchInput", ""], ["mat-raised-button", "", "color", "primary", 1, "search-input__settings-btn"], [3, "click", 4, "ngIf"], ["class", "search-input__sorting-options", 4, "ngIf"], [3, "click"], [1, "search-input__sorting-options"], [1, "search-input__sorting-by"], ["mat-button", "", "color", "primary", 1, "search-input__sorting-action", 3, "click"], [4, "ngIf", "ngIfElse"], ["down", ""], ["mat-button", "", "color", "primary", 1, "search-input__sorting-action"], ["type", "search", 1, "search-input__search-input", 3, "ngModel", "ngModelChange"]],
      template: function SearchInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchInputComponent_mat_icon_6_Template, 2, 0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchInputComponent_div_7_Template, 14, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.searchOptionsService.isInputDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchOptionsService.isInputDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOptionsService.isSearchOptionsBarOpen);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.search-input__search-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-input__field[_ngcontent-%COMP%] {\n  flex: 1 0 120px;\n  max-width: 400px;\n  margin-left: 10px;\n  border: none;\n  line-height: 26px;\n}\n\n.search-input__settings-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 0 5px;\n  min-width: 0;\n}\n\n.search-input__sorting-options[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: -50px;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n\n.search-input__search-input[_ngcontent-%COMP%] {\n  width: 100px;\n  border: none;\n  height: 20px;\n}\n\n.fa-youtube-play[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  font-size: 3rem;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  line-height: 26px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9FOlxcVHJhaW5pbmcgUlMgU2Nob29sIEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxzZWFyY2gtaW5wdXRcXHNlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBRENDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0M7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREY7O0FESUM7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE9BO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUNKRDs7QURPQTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNKRCIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdCZfX3NlYXJjaC1ibG9jayB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Jl9fZmllbGQge1xyXG5cdFx0ZmxleDogMSAwIDEyMHB4O1xyXG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0fVxyXG5cclxuXHQmX19zZXR0aW5ncy1idG4ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDVweDtcclxuXHRcdG1pbi13aWR0aDogMDtcclxuXHR9XHJcblxyXG5cdCZfX3NvcnRpbmctb3B0aW9ucyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHRib3R0b206IC01MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQmX19zZWFyY2gtaW5wdXQge1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmZhLXlvdXR1YmUtcGxheSB7XHJcblx0Y29sb3I6ICMzZjUxYjU7XHJcblx0Zm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaC1pbnB1dF9fc2VhcmNoLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoLWlucHV0X19maWVsZCB7XG4gIGZsZXg6IDEgMCAxMjBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4uc2VhcmNoLWlucHV0X19zZXR0aW5ncy1idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1pbi13aWR0aDogMDtcbn1cbi5zZWFyY2gtaW5wdXRfX3NvcnRpbmctb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IC01MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoLWlucHV0X19zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZmEteW91dHViZS1wbGF5IHtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-input',
          templateUrl: './search-input.component.html',
          styleUrls: ['./search-input.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_3__["SearchOptionsService"]
        }, {
          type: src_app_youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeService"]
        }, {
          type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }];
      }, {
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/core/components/header/header.component.ts");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/core/components/registration/registration.component.ts");
    /* harmony import */


    var _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/search-input/search-input.component */
    "./src/app/core/components/search-input/search-input.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"], _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_3__["SearchInputComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"], _components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_3__["SearchInputComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          providers: [],
          exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/redux/actions/custom-card.actions.ts":
  /*!******************************************************!*\
    !*** ./src/app/redux/actions/custom-card.actions.ts ***!
    \******************************************************/

  /*! exports provided: customCardActionsType, AddCustomCardAction */

  /***/
  function srcAppReduxActionsCustomCardActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customCardActionsType", function () {
      return customCardActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustomCardAction", function () {
      return AddCustomCardAction;
    });

    var customCardActionsType;

    (function (customCardActionsType) {
      customCardActionsType["addCustomCard"] = "[CUSTOM_CARD] Add";
    })(customCardActionsType || (customCardActionsType = {}));

    var AddCustomCardAction = function AddCustomCardAction(payload) {
      _classCallCheck(this, AddCustomCardAction);

      this.payload = payload;
      this.type = customCardActionsType.addCustomCard;
    };
    /***/

  },

  /***/
  "./src/app/redux/actions/youtube-card.actions.ts":
  /*!*******************************************************!*\
    !*** ./src/app/redux/actions/youtube-card.actions.ts ***!
    \*******************************************************/

  /*! exports provided: youtubeCardActionsType, GetYoutubeCardAction */

  /***/
  function srcAppReduxActionsYoutubeCardActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "youtubeCardActionsType", function () {
      return youtubeCardActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetYoutubeCardAction", function () {
      return GetYoutubeCardAction;
    });

    var youtubeCardActionsType;

    (function (youtubeCardActionsType) {
      youtubeCardActionsType["getYoutubeCard"] = "[YOUTUBE_CARD] Get";
    })(youtubeCardActionsType || (youtubeCardActionsType = {}));

    var GetYoutubeCardAction = function GetYoutubeCardAction(payload) {
      _classCallCheck(this, GetYoutubeCardAction);

      this.payload = payload;
      this.type = youtubeCardActionsType.getYoutubeCard;
    };
    /***/

  },

  /***/
  "./src/app/redux/effects/youtube-card.effects.ts":
  /*!*******************************************************!*\
    !*** ./src/app/redux/effects/youtube-card.effects.ts ***!
    \*******************************************************/

  /*! exports provided: YoutubeCardEffects */

  /***/
  function srcAppReduxEffectsYoutubeCardEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeCardEffects", function () {
      return YoutubeCardEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var YoutubeCardEffects = function YoutubeCardEffects() {
      _classCallCheck(this, YoutubeCardEffects);
    };

    YoutubeCardEffects.ɵfac = function YoutubeCardEffects_Factory(t) {
      return new (t || YoutubeCardEffects)();
    };

    YoutubeCardEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: YoutubeCardEffects,
      factory: YoutubeCardEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeCardEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/redux/reducers/custom-card.reducer.ts":
  /*!*******************************************************!*\
    !*** ./src/app/redux/reducers/custom-card.reducer.ts ***!
    \*******************************************************/

  /*! exports provided: customCardReducer */

  /***/
  function srcAppReduxReducersCustomCardReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customCardReducer", function () {
      return customCardReducer;
    });
    /* harmony import */


    var _actions_custom_card_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/custom-card.actions */
    "./src/app/redux/actions/custom-card.actions.ts");
    /* harmony import */


    var _state_models_custom_card_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state/models/custom-card.state */
    "./src/app/redux/state/models/custom-card.state.ts"); // tslint:disable-next-line: typedef


    var customCardReducer = function customCardReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state_models_custom_card_state__WEBPACK_IMPORTED_MODULE_1__["initialCustomCardState"];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_custom_card_actions__WEBPACK_IMPORTED_MODULE_0__["customCardActionsType"].addCustomCard:
          return Object.assign(Object.assign({}, state), {
            customCard: [].concat(_toConsumableArray(state.customCard), [action.payload])
          });

        default:
          return state;
      }
    };
    /***/

  },

  /***/
  "./src/app/redux/reducers/youtube-card.reducer.ts":
  /*!********************************************************!*\
    !*** ./src/app/redux/reducers/youtube-card.reducer.ts ***!
    \********************************************************/

  /*! exports provided: youtubeCardReducer */

  /***/
  function srcAppReduxReducersYoutubeCardReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "youtubeCardReducer", function () {
      return youtubeCardReducer;
    });
    /* harmony import */


    var _actions_youtube_card_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/youtube-card.actions */
    "./src/app/redux/actions/youtube-card.actions.ts");
    /* harmony import */


    var _state_models_youtube_card_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state/models/youtube-card.state */
    "./src/app/redux/state/models/youtube-card.state.ts"); // tslint:disable-next-line: typedef


    var youtubeCardReducer = function youtubeCardReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state_models_youtube_card_state__WEBPACK_IMPORTED_MODULE_1__["initialYoutubeCardState"];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_youtube_card_actions__WEBPACK_IMPORTED_MODULE_0__["youtubeCardActionsType"].getYoutubeCard:
          return Object.assign(Object.assign({}, state), {
            youtubeCard: action.payload
          });

        default:
          return state;
      }
    };
    /***/

  },

  /***/
  "./src/app/redux/reducers/youtube-client.reducer.ts":
  /*!**********************************************************!*\
    !*** ./src/app/redux/reducers/youtube-client.reducer.ts ***!
    \**********************************************************/

  /*! exports provided: youtubeClientReducers */

  /***/
  function srcAppReduxReducersYoutubeClientReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "youtubeClientReducers", function () {
      return youtubeClientReducers;
    });
    /* harmony import */


    var _custom_card_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./custom-card.reducer */
    "./src/app/redux/reducers/custom-card.reducer.ts");
    /* harmony import */


    var _youtube_card_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./youtube-card.reducer */
    "./src/app/redux/reducers/youtube-card.reducer.ts"); // tslint:disable-next-line: no-any


    var youtubeClientReducers = {
      customCard: _custom_card_reducer__WEBPACK_IMPORTED_MODULE_0__["customCardReducer"],
      youtubeCard: _youtube_card_reducer__WEBPACK_IMPORTED_MODULE_1__["youtubeCardReducer"]
    };
    /***/
  },

  /***/
  "./src/app/redux/selectors/custom-card.selector.ts":
  /*!*********************************************************!*\
    !*** ./src/app/redux/selectors/custom-card.selector.ts ***!
    \*********************************************************/

  /*! exports provided: selectCustomCard */

  /***/
  function srcAppReduxSelectorsCustomCardSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCustomCard", function () {
      return selectCustomCard;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js"); // tslint:disable-next-line: typedef


    var selectCustomCardFeature = function selectCustomCardFeature(state) {
      return state.customCard;
    }; // tslint:disable-next-line: typedef


    var selectCustomCard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCustomCardFeature, function (state) {
      return state.customCard;
    });
    /***/
  },

  /***/
  "./src/app/redux/state/models/custom-card.state.ts":
  /*!*********************************************************!*\
    !*** ./src/app/redux/state/models/custom-card.state.ts ***!
    \*********************************************************/

  /*! exports provided: initialCustomCardState */

  /***/
  function srcAppReduxStateModelsCustomCardStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialCustomCardState", function () {
      return initialCustomCardState;
    });

    var initialCustomCardState = {
      customCard: []
    };
    /***/
  },

  /***/
  "./src/app/redux/state/models/youtube-card.state.ts":
  /*!**********************************************************!*\
    !*** ./src/app/redux/state/models/youtube-card.state.ts ***!
    \**********************************************************/

  /*! exports provided: initialYoutubeCardState */

  /***/
  function srcAppReduxStateModelsYoutubeCardStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialYoutubeCardState", function () {
      return initialYoutubeCardState;
    });

    var initialYoutubeCardState = {
      youtubeCard: []
    };
    /***/
  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _services_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(loginService, navigateService) {
        _classCallCheck(this, AuthGuard);

        this.loginService = loginService;
        this.navigateService = navigateService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.loginService.getAuthToken()) {
            return true;
          } else {
            this.navigateService.navigateTo(['/login']);
          }

          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/can-proceed-to-detailed.guard.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/guards/can-proceed-to-detailed.guard.ts ***!
    \****************************************************************/

  /*! exports provided: CanProceedToDetailedGuard */

  /***/
  function srcAppSharedGuardsCanProceedToDetailedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToDetailedGuard", function () {
      return CanProceedToDetailedGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_youtube_services_detailed_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/youtube/services/detailed-information.service */
    "./src/app/youtube/services/detailed-information.service.ts");
    /* harmony import */


    var _services_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");

    var CanProceedToDetailedGuard = /*#__PURE__*/function () {
      function CanProceedToDetailedGuard(detailedInformationService, navigateService) {
        _classCallCheck(this, CanProceedToDetailedGuard);

        this.detailedInformationService = detailedInformationService;
        this.navigateService = navigateService;
      }

      _createClass(CanProceedToDetailedGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.detailedInformationService.selectedItem) {
            return true;
          } else {
            this.navigateService.navigateTo(['/search']);
          }

          return false;
        }
      }]);

      return CanProceedToDetailedGuard;
    }();

    CanProceedToDetailedGuard.ɵfac = function CanProceedToDetailedGuard_Factory(t) {
      return new (t || CanProceedToDetailedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_youtube_services_detailed_information_service__WEBPACK_IMPORTED_MODULE_1__["DetailedInformationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]));
    };

    CanProceedToDetailedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToDetailedGuard,
      factory: CanProceedToDetailedGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToDetailedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_youtube_services_detailed_information_service__WEBPACK_IMPORTED_MODULE_1__["DetailedInformationService"]
        }, {
          type: _services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/navigate.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/navigate.service.ts ***!
    \*****************************************************/

  /*! exports provided: NavigateService */

  /***/
  function srcAppSharedServicesNavigateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigateService", function () {
      return NavigateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavigateService = /*#__PURE__*/function () {
      function NavigateService(router) {
        _classCallCheck(this, NavigateService);

        this.router = router;
      }

      _createClass(NavigateService, [{
        key: "navigateTo",
        value: function navigateTo(path) {
          this.router.navigate(path);
        }
      }]);

      return NavigateService;
    }();

    NavigateService.ɵfac = function NavigateService_Factory(t) {
      return new (t || NavigateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavigateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigateService,
      factory: NavigateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/search-options.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/search-options.service.ts ***!
    \***********************************************************/

  /*! exports provided: SearchOptionsService */

  /***/
  function srcAppSharedServicesSearchOptionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchOptionsService", function () {
      return SearchOptionsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/services/login.service */
    "./src/app/auth/services/login.service.ts");

    var SearchOptionsService = /*#__PURE__*/function () {
      function SearchOptionsService(loginService) {
        var _this2 = this;

        _classCallCheck(this, SearchOptionsService);

        this.loginService = loginService;
        this.isSearchOptionsBarOpen = false;
        this.isSortingByDateMode = false;
        this.sortByDateUp = false;
        this.isSortingByViewsMode = false;
        this.sortByViewsUp = false;
        this.searchNameStr = '';
        this.isInputDisabled = false;
        this.loginService.isUserAuthorised$.subscribe(function (isAuth) {
          isAuth ? _this2.isInputDisabled = false : _this2.isInputDisabled = true;
        });
      }

      _createClass(SearchOptionsService, [{
        key: "searchOptionsBarToggle",
        value: function searchOptionsBarToggle() {
          this.isSearchOptionsBarOpen = !this.isSearchOptionsBarOpen;
        }
      }, {
        key: "sortByDateToggle",
        value: function sortByDateToggle() {
          this.isSortingByViewsMode = false;

          if (!this.isSortingByDateMode) {
            this.isSortingByDateMode = true;
            this.sortByDateUp = !this.sortByDateUp;
          } else {
            this.sortByDateUp = !this.sortByDateUp;
          }
        }
      }, {
        key: "sortByViewsToggle",
        value: function sortByViewsToggle() {
          this.isSortingByDateMode = false;

          if (!this.isSortingByViewsMode) {
            this.isSortingByViewsMode = true;
            this.sortByViewsUp = !this.sortByViewsUp;
          } else {
            this.sortByViewsUp = !this.sortByViewsUp;
          }
        }
      }, {
        key: "disableInput",
        value: function disableInput() {
          this.isInputDisabled = true;

          if (this.isSearchOptionsBarOpen) {
            this.isSearchOptionsBarOpen = !this.isSearchOptionsBarOpen;
          }
        }
      }, {
        key: "enableInput",
        value: function enableInput() {
          this.isInputDisabled = false;
        }
      }]);

      return SearchOptionsService;
    }();

    SearchOptionsService.ɵfac = function SearchOptionsService_Factory(t) {
      return new (t || SearchOptionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    SearchOptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchOptionsService,
      factory: SearchOptionsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchOptionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          providers: [],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/_constants/datesLag.constants.ts":
  /*!**********************************************************!*\
    !*** ./src/app/youtube/_constants/datesLag.constants.ts ***!
    \**********************************************************/

  /*! exports provided: DatesLagValue, DatesLagColor */

  /***/
  function srcAppYoutube_constantsDatesLagConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatesLagValue", function () {
      return DatesLagValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatesLagColor", function () {
      return DatesLagColor;
    });

    var DatesLagValue = function DatesLagValue() {
      _classCallCheck(this, DatesLagValue);
    };

    DatesLagValue.min = 7;
    DatesLagValue.medium = 30;
    DatesLagValue.max = 180;

    var DatesLagColor = function DatesLagColor() {
      _classCallCheck(this, DatesLagColor);
    };

    DatesLagColor.min = 'blue';
    DatesLagColor.medium = 'green';
    DatesLagColor.max = 'orange';
    DatesLagColor["default"] = 'red';
    /***/
  },

  /***/
  "./src/app/youtube/components/admin-page/admin-page.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/youtube/components/admin-page/admin-page.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminPageComponent */

  /***/
  function srcAppYoutubeComponentsAdminPageAdminPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function () {
      return AdminPageComponent;
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


    var _redux_actions_custom_card_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../redux/actions/custom-card.actions */
    "./src/app/redux/actions/custom-card.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AdminPageComponent = /*#__PURE__*/function () {
      function AdminPageComponent(store$, navigateService) {
        _classCallCheck(this, AdminPageComponent);

        this.store$ = store$;
        this.navigateService = navigateService;
        this.adminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          img: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          linkVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
      }

      _createClass(AdminPageComponent, [{
        key: "addCustomCard",
        value: function addCustomCard() {
          this.store$.dispatch(new _redux_actions_custom_card_actions__WEBPACK_IMPORTED_MODULE_2__["AddCustomCardAction"]({
            title: this.adminForm.get('title').value,
            description: this.adminForm.get('description').value,
            linkToImage: this.adminForm.get('img').value,
            linkToVideo: this.adminForm.get('linkVideo').value,
            creationDate: new Date()
          }));
          this.navigateService.navigateTo(['/search']);
        }
      }]);

      return AdminPageComponent;
    }();

    AdminPageComponent.ɵfac = function AdminPageComponent_Factory(t) {
      return new (t || AdminPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_4__["NavigateService"]));
    };

    AdminPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminPageComponent,
      selectors: [["app-admin-page"]],
      decls: 17,
      vars: 2,
      consts: [[1, "admin-page__admin-form", "admin-form", 3, "formGroup", "ngSubmit"], [1, "admin-form__legend"], [1, "admin-form__label"], ["type", "text", "formControlName", "title", 1, "admin-form__input"], ["type", "text", "formControlName", "description", 1, "admin-form__input"], ["type", "text", "formControlName", "img", 1, "admin-form__input"], ["type", "text", "formControlName", "linkVideo", 1, "admin-form__input"], ["mat-raised-button", "", "color", "primary", 1, "admin-form__submit", 3, "disabled"]],
      template: function AdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminPageComponent_Template_form_ngSubmit_0_listener() {
            return ctx.addCustomCard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "legend", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create new card ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Discription ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Img ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Link video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Create card ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.adminForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.adminForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".admin-page__admin-form[_ngcontent-%COMP%] {\n  margin: 220px auto 0;\n}\n\n.admin-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  max-width: 400px;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n}\n\n.admin-form__legend[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.admin-form__label[_ngcontent-%COMP%] {\n  color: #888888;\n  font-size: 0.7rem;\n}\n\n.admin-form__input[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #e0e0e0;\n  line-height: 20px;\n}\n\n.admin-form__submit[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-top: 20px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2FkbWluLXBhZ2UvRTpcXFRyYWluaW5nIFJTIFNjaG9vbCBBbmd1bGFyXFx5b3V0dWJlLWNsaWVudC9zcmNcXGFwcFxceW91dHViZVxcY29tcG9uZW50c1xcYWRtaW4tcGFnZVxcYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2FkbWluLXBhZ2UvRTpcXFRyYWluaW5nIFJTIFNjaG9vbCBBbmd1bGFyXFx5b3V0dWJlLWNsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxVSVxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUM7RUFDQyxvQkFBQTtBQ0hGOztBRE9BO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVma0I7QURXbkI7O0FETUM7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQztFQUNDLGNFdEJLO0VGdUJMLGlCQUFBO0FDTEY7O0FEUUM7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkVqQ2dCO0VGa0NoQixpQkFBQTtBQ05GOztBRFNDO0VBQ0Msb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL1VJL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4uYWRtaW4tcGFnZSB7XHJcblxyXG5cdCZfX2FkbWluLWZvcm0ge1xyXG5cdFx0bWFyZ2luOiAyMjBweCBhdXRvIDA7XHJcblx0fVxyXG59XHJcblxyXG4uYWRtaW4tZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0bWF4LXdpZHRoOiA0MDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XHJcblxyXG5cdCZfX2xlZ2VuZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdCZfX2xhYmVsIHtcclxuXHRcdGNvbG9yOiAkdGV4dDtcclxuXHRcdGZvbnQtc2l6ZTogLjdyZW07XHJcblx0fVxyXG5cclxuXHQmX19pbnB1dCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1kYXJrO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQmX19zdWJtaXQge1xyXG5cdFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdH1cclxufSIsIi5hZG1pbi1wYWdlX19hZG1pbi1mb3JtIHtcbiAgbWFyZ2luOiAyMjBweCBhdXRvIDA7XG59XG5cbi5hZG1pbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLmFkbWluLWZvcm1fX2xlZ2VuZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hZG1pbi1mb3JtX19sYWJlbCB7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5hZG1pbi1mb3JtX19pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5hZG1pbi1mb3JtX19zdWJtaXQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xufSIsIiRiYWNrZ3JvdW5kLWxpZ2h0OiAjZjVmNWY1O1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjZTBlMGUwO1xyXG4kdGV4dDogIzg4ODg4ODtcclxuJHByaW1hcnk6ICMzZjUxYjU7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-page',
          templateUrl: './admin-page.component.html',
          styleUrls: ['./admin-page.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_4__["NavigateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/components/custom-card/custom-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/youtube/components/custom-card/custom-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CustomCardComponent */

  /***/
  function srcAppYoutubeComponentsCustomCardCustomCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomCardComponent", function () {
      return CustomCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CustomCardComponent = function CustomCardComponent() {
      _classCallCheck(this, CustomCardComponent);
    };

    CustomCardComponent.ɵfac = function CustomCardComponent_Factory(t) {
      return new (t || CustomCardComponent)();
    };

    CustomCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomCardComponent,
      selectors: [["app-custom-card"]],
      inputs: {
        customItem: "customItem"
      },
      decls: 12,
      vars: 9,
      consts: [[1, "custom-item"], ["mat-card-image", "", 3, "src", "alt"], ["mat-raised-button", "", "color", "primary", "target", "_blank", 3, "href"]],
      template: function CustomCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Go to video... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.customItem.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.customItem.linkToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.customItem.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.customItem.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.customItem.creationDate, "fullDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.customItem.linkToVideo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".custom-item[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 350px;\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2N1c3RvbS1jYXJkL0U6XFxUcmFpbmluZyBSUyBTY2hvb2wgQW5ndWxhclxceW91dHViZS1jbGllbnQvc3JjXFxhcHBcXHlvdXR1YmVcXGNvbXBvbmVudHNcXGN1c3RvbS1jYXJkXFxjdXN0b20tY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2N1c3RvbS1jYXJkL2N1c3RvbS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2N1c3RvbS1jYXJkL2N1c3RvbS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1pdGVtIHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiAzNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59IiwiLmN1c3RvbS1pdGVtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-custom-card',
          templateUrl: './custom-card.component.html',
          styleUrls: ['./custom-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        customItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/youtube/components/detailed-information/detailed-information.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/youtube/components/detailed-information/detailed-information.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DetailedInformationComponent */

  /***/
  function srcAppYoutubeComponentsDetailedInformationDetailedInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailedInformationComponent", function () {
      return DetailedInformationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_detailed_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/detailed-information.service */
    "./src/app/youtube/services/detailed-information.service.ts");
    /* harmony import */


    var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");
    /* harmony import */


    var _directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../directives/border-bottom-color.directive */
    "./src/app/youtube/directives/border-bottom-color.directive.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DetailedInformationComponent = /*#__PURE__*/function () {
      function DetailedInformationComponent(detailedInformationService, navigateService) {
        _classCallCheck(this, DetailedInformationComponent);

        this.detailedInformationService = detailedInformationService;
        this.navigateService = navigateService;
      }

      _createClass(DetailedInformationComponent, [{
        key: "returnToSearchResults",
        value: function returnToSearchResults() {
          this.detailedInformationService.closeDetailedInformation();
          this.navigateService.navigateTo(['/search']);
        }
      }]);

      return DetailedInformationComponent;
    }();

    DetailedInformationComponent.ɵfac = function DetailedInformationComponent_Factory(t) {
      return new (t || DetailedInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detailed_information_service__WEBPACK_IMPORTED_MODULE_1__["DetailedInformationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]));
    };

    DetailedInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailedInformationComponent,
      selectors: [["app-detailed-information"]],
      decls: 40,
      vars: 14,
      consts: [["appBorderBottomColor", "", 1, "detailed-information", 3, "datesLag"], [1, "detailed-information__return", 3, "click"], [1, "detailed-information__image", 3, "src", "alt"], [1, "detailed-information__content"], [1, "detailed-information__text"], [1, "detailed-information__heading"], [1, "detailed-information__heading-title"], [1, "detailed-information__heading-published"], [1, "detailed-information__description"], [1, "detailed-information__description-header"], [1, "detailed-information__description-content"], ["mat-raised-button", "", "color", "primary", "target", "_blank", 1, "detailed-information__link", 3, "href"], [1, "detailed-information__statistics"], [1, "detailed-information__statistics-item"]],
      template: function DetailedInformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailedInformationComponent_Template_mat_icon_click_1_listener() {
            return ctx.returnToSearchResults();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " keyboard_arrow_left ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Go to video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "thumb_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "thumb_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "mode_comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datesLag", ctx.detailedInformationService.datesLag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.detailedInformationService.selectedItem.snippet.thumbnails.maxres ? ctx.detailedInformationService.selectedItem.snippet.thumbnails.maxres.url : ctx.detailedInformationService.selectedItem.snippet.thumbnails.high.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.detailedInformationService.selectedItem.snippet.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detailedInformationService.selectedItem.snippet.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, ctx.detailedInformationService.selectedItem.snippet.publishedAt, "fullDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detailedInformationService.selectedItem.snippet.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", ctx.detailedInformationService.selectedItem.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailedInformationService.selectedItem.statistics.viewCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailedInformationService.selectedItem.statistics.likeCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailedInformationService.selectedItem.statistics.dislikeCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailedInformationService.selectedItem.statistics.commentCount);
        }
      },
      directives: [_directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_3__["BorderBottomColorDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: ["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.detailed-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  top: 200px;\n  width: 90%;\n  height: calc(100% - 300px);\n  margin: 20px auto;\n  background: #f5f5f5;\n  border-radius: 5px;\n  box-shadow: 5px 5px 10px 1px rgba(63, 81, 181, 0.25);\n}\n\n.detailed-information__return[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 100%;\n  cursor: pointer;\n  color: #f5f5f5;\n  background-color: #3f51b5;\n}\n\n.detailed-information__image[_ngcontent-%COMP%] {\n  width: 70%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 0 0;\n     object-position: 0 0;\n}\n\n.detailed-information__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px;\n  width: 30%;\n}\n\n.detailed-information__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90%;\n  overflow: auto;\n}\n\n.detailed-information__heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n\n.detailed-information__heading-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.detailed-information__heading-published[_ngcontent-%COMP%] {\n  color: #888888;\n}\n\n.detailed-information__description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.detailed-information__description-header[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.detailed-information__description-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  word-break: break-all;\n  color: #888888;\n  font-size: 0.8rem;\n  line-height: 1;\n}\n\n.detailed-information__link[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.detailed-information__statistics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n\n.detailed-information__statistics-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n}\n\n.detailed-information__statistics-item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.detailed-information__statistics-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.detailed-information__statistics-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n}\n\n.detailed-information__statistics-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2RldGFpbGVkLWluZm9ybWF0aW9uL0U6XFxUcmFpbmluZyBSUyBTY2hvb2wgQW5ndWxhclxceW91dHViZS1jbGllbnQvc3JjXFxhcHBcXHlvdXR1YmVcXGNvbXBvbmVudHNcXGRldGFpbGVkLWluZm9ybWF0aW9uXFxkZXRhaWxlZC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL2RldGFpbGVkLWluZm9ybWF0aW9uL2RldGFpbGVkLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC95b3V0dWJlL2NvbXBvbmVudHMvZGV0YWlsZWQtaW5mb3JtYXRpb24vRTpcXFRyYWluaW5nIFJTIFNjaG9vbCBBbmd1bGFyXFx5b3V0dWJlLWNsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFxVSVxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxTQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRWRlO0VGZWYsa0JBQUE7RUFDQSxvREFBQTtBQ0RKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjRXZCVztFRndCWCx5QkVyQkU7QURvQlY7O0FESUk7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7QUNGUjs7QURLSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNIUjs7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSlI7O0FET0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0xSOztBRE9RO0VBQ0ksaUJBQUE7QUNMWjs7QURRUTtFQUNJLGNFMURMO0FEb0RQOztBRFVJO0VBQ0ksZ0JBQUE7QUNSUjs7QURVUTtFQUNJLGdCQUFBO0FDUlo7O0FEV1E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0V4RUw7RUZ5RUssaUJBQUE7RUFDQSxjQUFBO0FDVFo7O0FEYUk7RUFDSSxjQUFBO0FDWFI7O0FEY0k7RUFDRixhQUFBO0VBQ00sdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDWlI7O0FEY0U7RUFDQyxhQUFBO0VBQ1MsbUJBQUE7RUFDQSxjQUFBO0FDWlo7O0FEY1k7RUFDSSxjQUFBO0FDWmhCOztBRGVZO0VBQ0ksZUFBQTtBQ2JoQjs7QURnQlk7RUFDSSxxQkFBQTtBQ2RoQjs7QURpQlk7RUFDSSxnQkFBQTtBQ2ZoQiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvY29tcG9uZW50cy9kZXRhaWxlZC1pbmZvcm1hdGlvbi9kZXRhaWxlZC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvVUkvY29sb3JzLnNjc3NcIjtcclxuXHJcbmgxLCBoMywgaDUsIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGV0YWlsZWQtaW5mb3JtYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzAwcHgpO1xyXG4gICAgbWFyZ2luOiAgMjBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtbGlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMXB4IHJnYmEoNjMsODEsMTgxLC4yNSk7XHJcblxyXG4gICAgJl9fcmV0dXJuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAmX19oZWFkaW5nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAmLXB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGluayB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc3RhdGlzdGljcyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cdFx0Ji1pdGVtIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmID4gbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJoMSwgaDMsIGg1LCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGV0YWlsZWQtaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMXB4IHJnYmEoNjMsIDgxLCAxODEsIDAuMjUpO1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19yZXR1cm4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG4uZGV0YWlsZWQtaW5mb3JtYXRpb25fX2ltYWdlIHtcbiAgd2lkdGg6IDcwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogMCAwO1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzAlO1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX190ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5kZXRhaWxlZC1pbmZvcm1hdGlvbl9faGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uZGV0YWlsZWQtaW5mb3JtYXRpb25fX2hlYWRpbmctdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXRhaWxlZC1pbmZvcm1hdGlvbl9faGVhZGluZy1wdWJsaXNoZWQge1xuICBjb2xvcjogIzg4ODg4ODtcbn1cbi5kZXRhaWxlZC1pbmZvcm1hdGlvbl9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19kZXNjcmlwdGlvbi1oZWFkZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19kZXNjcmlwdGlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19saW5rIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZGV0YWlsZWQtaW5mb3JtYXRpb25fX3N0YXRpc3RpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGV0YWlsZWQtaW5mb3JtYXRpb25fX3N0YXRpc3RpY3MtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19zdGF0aXN0aWNzLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5kZXRhaWxlZC1pbmZvcm1hdGlvbl9fc3RhdGlzdGljcy1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uZGV0YWlsZWQtaW5mb3JtYXRpb25fX3N0YXRpc3RpY3MtaXRlbSA+IG1hdC1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuLmRldGFpbGVkLWluZm9ybWF0aW9uX19zdGF0aXN0aWNzLWl0ZW0gPiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iLCIkYmFja2dyb3VuZC1saWdodDogI2Y1ZjVmNTtcclxuJGJhY2tncm91bmQtZGFyazogI2UwZTBlMDtcclxuJHRleHQ6ICM4ODg4ODg7XHJcbiRwcmltYXJ5OiAjM2Y1MWI1OyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailedInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detailed-information',
          templateUrl: './detailed-information.component.html',
          styleUrls: ['./detailed-information.component.scss']
        }]
      }], function () {
        return [{
          type: _services_detailed_information_service__WEBPACK_IMPORTED_MODULE_1__["DetailedInformationService"]
        }, {
          type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/components/not-found/not-found.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/youtube/components/not-found/not-found.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppYoutubeComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 5,
      vars: 0,
      consts: [[1, "not-found"], ["color", "primary"], [1, "not-found__text"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sentiment_very_dissatisfied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sorry, smth went wrong(( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".not-found[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  position: relative;\n  top: 220px;\n}\n.not-found__text[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #858585;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\nmat-icon[_ngcontent-%COMP%] {\n  transform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL25vdC1mb3VuZC9FOlxcVHJhaW5pbmcgUlMgU2Nob29sIEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50L3NyY1xcYXBwXFx5b3V0dWJlXFxjb21wb25lbnRzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRDtBRENDO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURHQTtFQUNDLG1CQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC95b3V0dWJlL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogMjIwcHg7XHJcblxyXG5cdCZfX3RleHQge1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGNvbG9yOiAjODU4NTg1O1xyXG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdH1cclxufVxyXG5cclxubWF0LWljb24ge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbn0iLCIubm90LWZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIyMHB4O1xufVxuLm5vdC1mb3VuZF9fdGV4dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjODU4NTg1O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxubWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufSJdfQ== */"]
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
  "./src/app/youtube/components/search-item/search-item.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/youtube/components/search-item/search-item.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SearchItemComponent */

  /***/
  function srcAppYoutubeComponentsSearchItemSearchItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function () {
      return SearchItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives/border-bottom-color.directive */
    "./src/app/youtube/directives/border-bottom-color.directive.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var SearchItemComponent = /*#__PURE__*/function () {
      function SearchItemComponent() {
        _classCallCheck(this, SearchItemComponent);

        this.publishedAt = null;
        this.datesLag = null;
        this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setPublishedAt();
          this.setDatesLag();
        }
      }, {
        key: "setPublishedAt",
        value: function setPublishedAt() {
          this.publishedAt = new Date(this.item.snippet.publishedAt);
        }
      }, {
        key: "setDatesLag",
        value: function setDatesLag() {
          var today = new Date();
          this.datesLag = (today.getTime() - this.publishedAt.getTime()) / (1000 * 3600 * 24);
        }
      }, {
        key: "selectItem",
        value: function selectItem() {
          this.selectedItem.emit(this.item);
        }
      }]);

      return SearchItemComponent;
    }();

    SearchItemComponent.ɵfac = function SearchItemComponent_Factory(t) {
      return new (t || SearchItemComponent)();
    };

    SearchItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchItemComponent,
      selectors: [["app-search-item"]],
      inputs: {
        item: "item"
      },
      outputs: {
        datesLag: "datesLag",
        selectedItem: "selectedItem"
      },
      decls: 29,
      vars: 8,
      consts: [["appBorderBottomColor", "", 1, "search-item", 3, "datesLag"], [1, "search-item__content"], ["mat-card-image", "", 1, "search-item__img", 3, "src", "alt"], [1, "search-item__statistics"], [1, "search-item__statistics-item"], [1, "search-item__title"], [1, "search-item__action"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function SearchItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "thumb_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "thumb_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "mode_comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchItemComponent_Template_button_click_27_listener() {
            return ctx.selectItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " more... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datesLag", ctx.datesLag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.snippet.thumbnails.maxres ? ctx.item.snippet.thumbnails.maxres.url : ctx.item.snippet.thumbnails.high.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.item.snippet.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.viewCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.likeCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.dislikeCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.commentCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.snippet.title, " ");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_2__["BorderBottomColorDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".search-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 300px;\n  height: 350px;\n  margin-bottom: -5px;\n  background-color: #f5f5f5;\n}\n.search-item__content[_ngcontent-%COMP%] {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.search-item__img[_ngcontent-%COMP%] {\n  max-height: 186.75px;\n}\n.search-item__statistics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-item__statistics-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.search-item__statistics-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.search-item__title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.search-item__action[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL3NlYXJjaC1pdGVtL0U6XFxUcmFpbmluZyBSUyBTY2hvb2wgQW5ndWxhclxceW91dHViZS1jbGllbnQvc3JjXFxhcHBcXHlvdXR1YmVcXGNvbXBvbmVudHNcXHNlYXJjaC1pdGVtXFxzZWFyY2gtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL3NlYXJjaC1pdGVtL3NlYXJjaC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDSCxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0cseUJBQUE7QUNDSjtBRENJO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQ0NSO0FERUM7RUFDQyxvQkFBQTtBQ0FGO0FER0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFDQyxhQUFBO0VBQ1MsbUJBQUE7QUNEWjtBREdZO0VBQ0ksZ0JBQUE7QUNEaEI7QURNQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSkY7QURPQztFQUNPLGtCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC95b3V0dWJlL2NvbXBvbmVudHMvc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdGhlaWdodDogMzUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogLTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBcclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XHJcblx0fVxyXG5cdFxyXG5cdCZfX2ltZyB7XHJcblx0XHRtYXgtaGVpZ2h0OiAxODYuNzVweDtcclxuXHR9XHJcblxyXG5cdCZfX3N0YXRpc3RpY3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0Ji1pdGVtIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX3RpdGxlIHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0Jl9fYWN0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcbiIsIi5zZWFyY2gtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLnNlYXJjaC1pdGVtX19jb250ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XG59XG4uc2VhcmNoLWl0ZW1fX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDE4Ni43NXB4O1xufVxuLnNlYXJjaC1pdGVtX19zdGF0aXN0aWNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1pdGVtX19zdGF0aXN0aWNzLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1pdGVtX19zdGF0aXN0aWNzLWl0ZW0gPiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zZWFyY2gtaXRlbV9fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWFyY2gtaXRlbV9fYWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-item',
          templateUrl: './search-item.component.html',
          styleUrls: ['./search-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        datesLag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        selectedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/youtube/components/search-results/search-results.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/youtube/components/search-results/search-results.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SearchResultsComponent */

  /***/
  function srcAppYoutubeComponentsSearchResultsSearchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return SearchResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var src_app_redux_selectors_custom_card_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/redux/selectors/custom-card.selector */
    "./src/app/redux/selectors/custom-card.selector.ts");
    /* harmony import */


    var src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/search-options.service */
    "./src/app/shared/services/search-options.service.ts");
    /* harmony import */


    var _services_detailed_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/detailed-information.service */
    "./src/app/youtube/services/detailed-information.service.ts");
    /* harmony import */


    var src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/navigate.service */
    "./src/app/shared/services/navigate.service.ts");
    /* harmony import */


    var _services_youtube_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/youtube.service */
    "./src/app/youtube/services/youtube.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../custom-card/custom-card.component */
    "./src/app/youtube/components/custom-card/custom-card.component.ts");
    /* harmony import */


    var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../search-item/search-item.component */
    "./src/app/youtube/components/search-item/search-item.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipes/search.pipe */
    "./src/app/youtube/pipes/search.pipe.ts");
    /* harmony import */


    var _pipes_sortByViews_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../pipes/sortByViews.pipe */
    "./src/app/youtube/pipes/sortByViews.pipe.ts");
    /* harmony import */


    var _pipes_sortByDate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../pipes/sortByDate.pipe */
    "./src/app/youtube/pipes/sortByDate.pipe.ts");

    function SearchResultsComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customItem_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customItem", customItem_r3);
      }
    }

    function SearchResultsComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-search-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItem", function SearchResultsComponent_li_4_Template_app_search_item_selectedItem_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.selectItem($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var searchItem_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", searchItem_r4);
      }
    }

    function SearchResultsComponent_mat_spinner_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var SearchResultsComponent = /*#__PURE__*/function () {
      function SearchResultsComponent(searchOptionsService, detailedInformationService, navigateService, youtubeService, store$) {
        _classCallCheck(this, SearchResultsComponent);

        this.searchOptionsService = searchOptionsService;
        this.detailedInformationService = detailedInformationService;
        this.navigateService = navigateService;
        this.youtubeService = youtubeService;
        this.store$ = store$;
        this.customCards$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_redux_selectors_custom_card_selector__WEBPACK_IMPORTED_MODULE_2__["selectCustomCard"]));
      }

      _createClass(SearchResultsComponent, [{
        key: "selectItem",
        value: function selectItem(clickedItem) {
          this.detailedInformationService.initDetailedInformation(clickedItem);
          this.navigateService.navigateTo(['/search', this.detailedInformationService.selectedItem.id]);
        }
      }]);

      return SearchResultsComponent;
    }();

    SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) {
      return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_3__["SearchOptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detailed_information_service__WEBPACK_IMPORTED_MODULE_4__["DetailedInformationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_5__["NavigateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_youtube_service__WEBPACK_IMPORTED_MODULE_6__["YoutubeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultsComponent,
      selectors: [["app-search-results"]],
      decls: 10,
      vars: 18,
      consts: [[1, "search-results"], ["class", "search-results__item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "search-results__item"], [3, "customItem"], [3, "item", "selectedItem"]],
      template: function SearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultsComponent_li_1_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchResultsComponent_li_4_Template, 2, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "searchName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "sortByViews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "sortByDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchResultsComponent_mat_spinner_8_Template, 1, 0, "mat-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.customCards$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 12, ctx.youtubeService.searchResults, ctx.searchOptionsService.isSortingByDateMode, ctx.searchOptionsService.sortByDateUp), ctx.searchOptionsService.isSortingByViewsMode, ctx.searchOptionsService.sortByViewsUp), ctx.searchOptionsService.searchNameStr));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx.youtubeService.isLoading$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_8__["CustomCardComponent"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__["SearchItemComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchPipe"], _pipes_sortByViews_pipe__WEBPACK_IMPORTED_MODULE_12__["SortByViewsPipe"], _pipes_sortByDate_pipe__WEBPACK_IMPORTED_MODULE_13__["SortByDatePipe"]],
      styles: [".search-results[_ngcontent-%COMP%] {\n  position: relative;\n  top: 200px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 10px;\n  padding: 0;\n  list-style: none;\n}\n.search-results__item[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.search-results__sorting-options[_ngcontent-%COMP%] {\n  position: relative;\n  top: -50px;\n}\n.mat-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHRzL0U6XFxUcmFpbmluZyBSUyBTY2hvb2wgQW5ndWxhclxceW91dHViZS1jbGllbnQvc3JjXFxhcHBcXHlvdXR1YmVcXGNvbXBvbmVudHNcXHNlYXJjaC1yZXN1bHRzXFxzZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDtBRENDO0VBQ0MsWUFBQTtBQ0NGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUNBRjtBRElBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC95b3V0dWJlL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXJlc3VsdHMge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDIwMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdG1hcmdpbjogMTBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG5cdCZfX2l0ZW0ge1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9fc29ydGluZy1vcHRpb25zIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogLTUwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ubWF0LXNwaW5uZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDI1MHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7O1xyXG59IiwiLnNlYXJjaC1yZXN1bHRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc2VhcmNoLXJlc3VsdHNfX2l0ZW0ge1xuICBtYXJnaW46IDEwcHg7XG59XG4uc2VhcmNoLXJlc3VsdHNfX3NvcnRpbmctb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuLm1hdC1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-results',
          templateUrl: './search-results.component.html',
          styleUrls: ['./search-results.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_3__["SearchOptionsService"]
        }, {
          type: _services_detailed_information_service__WEBPACK_IMPORTED_MODULE_4__["DetailedInformationService"]
        }, {
          type: src_app_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_5__["NavigateService"]
        }, {
          type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_6__["YoutubeService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/directives/border-bottom-color.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/youtube/directives/border-bottom-color.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: BorderBottomColorDirective */

  /***/
  function srcAppYoutubeDirectivesBorderBottomColorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderBottomColorDirective", function () {
      return BorderBottomColorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_constants/datesLag.constants */
    "./src/app/youtube/_constants/datesLag.constants.ts");

    var BorderBottomColorDirective = /*#__PURE__*/function () {
      function BorderBottomColorDirective(elementRef, renderer2) {
        _classCallCheck(this, BorderBottomColorDirective);

        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.borderBottomColor = null;
      }

      _createClass(BorderBottomColorDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setBorderBottomColor();
          this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', "5px solid ".concat(this.borderBottomColor));
        }
      }, {
        key: "setBorderBottomColor",
        value: function setBorderBottomColor() {
          switch (true) {
            case this.datesLag < _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagValue"].min:
              this.borderBottomColor = _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagColor"].min;
              break;

            case this.datesLag < _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagValue"].medium:
              this.borderBottomColor = _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagColor"].medium;
              break;

            case this.datesLag < _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagValue"].max:
              this.borderBottomColor = _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagColor"].max;
              break;

            default:
              this.borderBottomColor = _constants_datesLag_constants__WEBPACK_IMPORTED_MODULE_1__["DatesLagColor"]["default"];
          }
        }
      }]);

      return BorderBottomColorDirective;
    }();

    BorderBottomColorDirective.ɵfac = function BorderBottomColorDirective_Factory(t) {
      return new (t || BorderBottomColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    BorderBottomColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BorderBottomColorDirective,
      selectors: [["", "appBorderBottomColor", ""]],
      inputs: {
        datesLag: "datesLag"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BorderBottomColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appBorderBottomColor]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        datesLag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/youtube/interceptors/request.interceptor.ts":
  /*!*************************************************************!*\
    !*** ./src/app/youtube/interceptors/request.interceptor.ts ***!
    \*************************************************************/

  /*! exports provided: RequestInterceptor */

  /***/
  function srcAppYoutubeInterceptorsRequestInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function () {
      return RequestInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../src/environments/environment */
    "./src/environments/environment.ts");

    var RequestInterceptor = /*#__PURE__*/function () {
      function RequestInterceptor() {
        _classCallCheck(this, RequestInterceptor);
      }

      _createClass(RequestInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var modified = request.clone({
            setParams: {
              key: _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_key
            }
          });
          return next.handle(modified).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log('error ocured');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return RequestInterceptor;
    }();

    RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) {
      return new (t || RequestInterceptor)();
    };

    RequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequestInterceptor,
      factory: RequestInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/models/response.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/youtube/models/response.model.ts ***!
    \**************************************************/

  /*! exports provided: Response */

  /***/
  function srcAppYoutubeModelsResponseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Response", function () {
      return Response;
    });

    var Response = /*#__PURE__*/function () {
      function Response(kind, etag, nextPageToken, regionCode, pageinfo, items) {
        _classCallCheck(this, Response);

        this.kind = kind;
        this.etag = etag;
        this.nextPageToken = nextPageToken;
        this.regionCode = regionCode;
        this.pageinfo = pageinfo;
        this.items = items;
      }

      _createClass(Response, null, [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new Response(json.kind, json.etag, json.nextPageToken, json.regionCode, json.pageInfo, json.items) : null;
        }
      }, {
        key: "getIdFromResponse",
        value: function getIdFromResponse(response) {
          var idArr = [];
          response.items.forEach(function (item) {
            return idArr.push(item.id.videoId);
          });
          return idArr.join(',');
        }
      }]);

      return Response;
    }();
    /***/

  },

  /***/
  "./src/app/youtube/models/search-response.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/youtube/models/search-response.model.ts ***!
    \*********************************************************/

  /*! exports provided: SearchResponse */

  /***/
  function srcAppYoutubeModelsSearchResponseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResponse", function () {
      return SearchResponse;
    });

    var SearchResponse = /*#__PURE__*/function () {
      function SearchResponse(kind, etag, pageInfo, items) {
        _classCallCheck(this, SearchResponse);

        this.kind = kind;
        this.etag = etag;
        this.pageInfo = pageInfo;
        this.items = items;
      }

      _createClass(SearchResponse, null, [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new SearchResponse(json.kind, json.etag, json.pageInfo, json.items) : null;
        }
      }]);

      return SearchResponse;
    }();
    /***/

  },

  /***/
  "./src/app/youtube/pipes/search.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/youtube/pipes/search.pipe.ts ***!
    \**********************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppYoutubePipesSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPipe = /*#__PURE__*/function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(searchResults, inputValue) {
          return searchResults.filter(function (searchItem) {
            return searchItem.snippet.title.toUpperCase().toLowerCase().includes(inputValue.toUpperCase().toLowerCase());
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe.ɵfac = function SearchPipe_Factory(t) {
      return new (t || SearchPipe)();
    };

    SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "searchName",
      type: SearchPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'searchName'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/pipes/sortByDate.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/youtube/pipes/sortByDate.pipe.ts ***!
    \**************************************************/

  /*! exports provided: SortByDatePipe */

  /***/
  function srcAppYoutubePipesSortByDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByDatePipe", function () {
      return SortByDatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortByDatePipe = /*#__PURE__*/function () {
      function SortByDatePipe() {
        _classCallCheck(this, SortByDatePipe);
      }

      _createClass(SortByDatePipe, [{
        key: "transform",
        value: function transform(searchResults, isSortingMode, sortDirection) {
          if (isSortingMode) {
            sortDirection === true ? searchResults.sort(function (a, b) {
              var start = new Date(a.snippet.publishedAt);
              var end = new Date(b.snippet.publishedAt);
              return start - end;
            }) : searchResults.sort(function (a, b) {
              var start = new Date(a.snippet.publishedAt);
              var end = new Date(b.snippet.publishedAt);
              return end - start;
            });
            var newArr = searchResults.slice();
            return newArr;
          } else {
            return searchResults;
          }
        }
      }]);

      return SortByDatePipe;
    }();

    SortByDatePipe.ɵfac = function SortByDatePipe_Factory(t) {
      return new (t || SortByDatePipe)();
    };

    SortByDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sortByDate",
      type: SortByDatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'sortByDate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/pipes/sortByViews.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/youtube/pipes/sortByViews.pipe.ts ***!
    \***************************************************/

  /*! exports provided: SortByViewsPipe */

  /***/
  function srcAppYoutubePipesSortByViewsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortByViewsPipe", function () {
      return SortByViewsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortByViewsPipe = /*#__PURE__*/function () {
      function SortByViewsPipe() {
        _classCallCheck(this, SortByViewsPipe);
      }

      _createClass(SortByViewsPipe, [{
        key: "transform",
        value: function transform(searchResults, isSortingMode, sortDirection) {
          if (isSortingMode) {
            sortDirection === true ? searchResults.sort(function (a, b) {
              return +a.statistics.viewCount - +b.statistics.viewCount;
            }) : searchResults.sort(function (a, b) {
              return +b.statistics.viewCount - +a.statistics.viewCount;
            });
            var newArr = searchResults.slice();
            return newArr;
          } else {
            return searchResults;
          }
        }
      }]);

      return SortByViewsPipe;
    }();

    SortByViewsPipe.ɵfac = function SortByViewsPipe_Factory(t) {
      return new (t || SortByViewsPipe)();
    };

    SortByViewsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sortByViews",
      type: SortByViewsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortByViewsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'sortByViews'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/services/detailed-information.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/youtube/services/detailed-information.service.ts ***!
    \******************************************************************/

  /*! exports provided: DetailedInformationService */

  /***/
  function srcAppYoutubeServicesDetailedInformationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailedInformationService", function () {
      return DetailedInformationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/search-options.service */
    "./src/app/shared/services/search-options.service.ts");

    var DetailedInformationService = /*#__PURE__*/function () {
      function DetailedInformationService(searchOptionsService) {
        _classCallCheck(this, DetailedInformationService);

        this.searchOptionsService = searchOptionsService;
        this.selectedItem = null;
        this.datesLag = null;
      }

      _createClass(DetailedInformationService, [{
        key: "initDetailedInformation",
        value: function initDetailedInformation(clickedItem) {
          this.selectedItem = clickedItem;
          this.initDatesLag(clickedItem);
          this.searchOptionsService.disableInput();
        }
      }, {
        key: "initDatesLag",
        value: function initDatesLag(clickedItem) {
          var today = new Date();
          this.datesLag = (today.getTime() - new Date(clickedItem.snippet.publishedAt).getTime()) / (1000 * 3600 * 24);
        }
      }, {
        key: "closeDetailedInformation",
        value: function closeDetailedInformation() {
          this.searchOptionsService.enableInput();
        }
      }]);

      return DetailedInformationService;
    }();

    DetailedInformationService.ɵfac = function DetailedInformationService_Factory(t) {
      return new (t || DetailedInformationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_1__["SearchOptionsService"]));
    };

    DetailedInformationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DetailedInformationService,
      factory: DetailedInformationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailedInformationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_shared_services_search_options_service__WEBPACK_IMPORTED_MODULE_1__["SearchOptionsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/services/youtube-data.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/youtube/services/youtube-data.service.ts ***!
    \**********************************************************/

  /*! exports provided: YoutubeDataService */

  /***/
  function srcAppYoutubeServicesYoutubeDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeDataService", function () {
      return YoutubeDataService;
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


    var _models_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/response.model */
    "./src/app/youtube/models/response.model.ts");
    /* harmony import */


    var _models_search_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/search-response.model */
    "./src/app/youtube/models/search-response.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var YoutubeDataService = /*#__PURE__*/function () {
      function YoutubeDataService(httpClient) {
        _classCallCheck(this, YoutubeDataService);

        this.httpClient = httpClient;
        this.searchRequestParameters = {
          baseUrl: 'https://www.googleapis.com/youtube/v3/search',
          part: 'snippet',
          type: 'video',
          maxResults: '50'
        };
        this.videoRequestParameters = {
          baseUrl: 'https://www.googleapis.com/youtube/v3/videos',
          part: 'snippet,statistics'
        };
      }

      _createClass(YoutubeDataService, [{
        key: "getVideoIdFromSearchRequest",
        value: function getVideoIdFromSearchRequest(searchRequest) {
          return this.httpClient.get("".concat(this.searchRequestParameters.baseUrl, "?part=").concat(this.searchRequestParameters.part, "&type=").concat(this.searchRequestParameters.type, "&maxResults=").concat(this.searchRequestParameters.maxResults, "&q=") + searchRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (json) {
            return Boolean(json) ? _models_response_model__WEBPACK_IMPORTED_MODULE_2__["Response"].fromJSON(json) : [];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (array) {
            return _models_response_model__WEBPACK_IMPORTED_MODULE_2__["Response"].getIdFromResponse(array);
          }));
        }
      }, {
        key: "loadYoutubeData",
        value: function loadYoutubeData(searchRequest) {
          var _this3 = this;

          return this.getVideoIdFromSearchRequest(searchRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (idForVideoRequest) {
            return _this3.httpClient.get("".concat(_this3.videoRequestParameters.baseUrl, "?part=").concat(_this3.videoRequestParameters.part, "&id=").concat(idForVideoRequest)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return Boolean(response) ? _models_search_response_model__WEBPACK_IMPORTED_MODULE_3__["SearchResponse"].fromJSON(response).items : [];
            }));
          }));
        }
      }]);

      return YoutubeDataService;
    }();

    YoutubeDataService.ɵfac = function YoutubeDataService_Factory(t) {
      return new (t || YoutubeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    YoutubeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: YoutubeDataService,
      factory: YoutubeDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeDataService, [{
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
  "./src/app/youtube/services/youtube.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/youtube/services/youtube.service.ts ***!
    \*****************************************************/

  /*! exports provided: YoutubeService */

  /***/
  function srcAppYoutubeServicesYoutubeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeService", function () {
      return YoutubeService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _youtube_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./youtube-data.service */
    "./src/app/youtube/services/youtube-data.service.ts");
    /* harmony import */


    var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/services/login.service */
    "./src/app/auth/services/login.service.ts");

    var YoutubeService = /*#__PURE__*/function () {
      function YoutubeService(youtubeDataService, loginService) {
        var _this4 = this;

        _classCallCheck(this, YoutubeService);

        this.youtubeDataService = youtubeDataService;
        this.loginService = loginService;
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchRequest$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSearchResultLoading = true;
        this.searchResults = [];
        this.searchRequest$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (searchRequest) {
          return _this4.youtubeDataService.loadYoutubeData(searchRequest);
        })).subscribe(function (searchResult) {
          return _this4.initSearchResults(searchResult);
        });
        this.loginService.isUserAuthorised$.subscribe(function (isAuth) {
          if (!isAuth) {
            _this4.searchResults = [];
          }
        });
      }

      _createClass(YoutubeService, [{
        key: "initSearchResults",
        value: function initSearchResults(searchResults) {
          this.searchResults = searchResults;
          this.isLoading$.next(false);
        }
      }, {
        key: "startLoading",
        value: function startLoading() {
          this.isLoading$.next(true);
        }
      }]);

      return YoutubeService;
    }();

    YoutubeService.ɵfac = function YoutubeService_Factory(t) {
      return new (t || YoutubeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_youtube_data_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]));
    };

    YoutubeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: YoutubeService,
      factory: YoutubeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _youtube_data_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeDataService"]
        }, {
          type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/youtube-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/youtube/youtube-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: YoutubeRoutingModule */

  /***/
  function srcAppYoutubeYoutubeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeRoutingModule", function () {
      return YoutubeRoutingModule;
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


    var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/search-results/search-results.component */
    "./src/app/youtube/components/search-results/search-results.component.ts");
    /* harmony import */


    var _components_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/detailed-information/detailed-information.component */
    "./src/app/youtube/components/detailed-information/detailed-information.component.ts");
    /* harmony import */


    var _shared_guards_can_proceed_to_detailed_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/guards/can-proceed-to-detailed.guard */
    "./src/app/shared/guards/can-proceed-to-detailed.guard.ts");

    var routes = [{
      path: '',
      component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultsComponent"]
    }, {
      path: ':id',
      component: _components_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_3__["DetailedInformationComponent"],
      canActivate: [_shared_guards_can_proceed_to_detailed_guard__WEBPACK_IMPORTED_MODULE_4__["CanProceedToDetailedGuard"]]
    }];

    var YoutubeRoutingModule = function YoutubeRoutingModule() {
      _classCallCheck(this, YoutubeRoutingModule);
    };

    YoutubeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: YoutubeRoutingModule
    });
    YoutubeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function YoutubeRoutingModule_Factory(t) {
        return new (t || YoutubeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YoutubeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/youtube/youtube.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/youtube/youtube.module.ts ***!
    \*******************************************/

  /*! exports provided: YoutubeModule */

  /***/
  function srcAppYoutubeYoutubeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeModule", function () {
      return YoutubeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/search-results/search-results.component */
    "./src/app/youtube/components/search-results/search-results.component.ts");
    /* harmony import */


    var _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/search-item/search-item.component */
    "./src/app/youtube/components/search-item/search-item.component.ts");
    /* harmony import */


    var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pipes/search.pipe */
    "./src/app/youtube/pipes/search.pipe.ts");
    /* harmony import */


    var _pipes_sortByViews_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pipes/sortByViews.pipe */
    "./src/app/youtube/pipes/sortByViews.pipe.ts");
    /* harmony import */


    var _pipes_sortByDate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pipes/sortByDate.pipe */
    "./src/app/youtube/pipes/sortByDate.pipe.ts");
    /* harmony import */


    var _directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directives/border-bottom-color.directive */
    "./src/app/youtube/directives/border-bottom-color.directive.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/youtube/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/detailed-information/detailed-information.component */
    "./src/app/youtube/components/detailed-information/detailed-information.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _youtube_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./youtube-routing.module */
    "./src/app/youtube/youtube-routing.module.ts");
    /* harmony import */


    var _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./interceptors/request.interceptor */
    "./src/app/youtube/interceptors/request.interceptor.ts");
    /* harmony import */


    var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/admin-page/admin-page.component */
    "./src/app/youtube/components/admin-page/admin-page.component.ts");
    /* harmony import */


    var _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/custom-card/custom-card.component */
    "./src/app/youtube/components/custom-card/custom-card.component.ts");

    var YoutubeModule = function YoutubeModule() {
      _classCallCheck(this, YoutubeModule);
    };

    YoutubeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: YoutubeModule
    });
    YoutubeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function YoutubeModule_Factory(t) {
        return new (t || YoutubeModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_12__["RequestInterceptor"],
        multi: true
      }],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _youtube_routing_module__WEBPACK_IMPORTED_MODULE_11__["YoutubeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YoutubeModule, {
        declarations: [_components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultsComponent"], _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_2__["SearchItemComponent"], _pipes_sortByViews_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByViewsPipe"], _pipes_sortByDate_pipe__WEBPACK_IMPORTED_MODULE_5__["SortByDatePipe"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_6__["BorderBottomColorDirective"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _components_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_8__["DetailedInformationComponent"], _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"], _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_14__["CustomCardComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _youtube_routing_module__WEBPACK_IMPORTED_MODULE_11__["YoutubeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        exports: [_components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultsComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultsComponent"], _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_2__["SearchItemComponent"], _pipes_sortByViews_pipe__WEBPACK_IMPORTED_MODULE_4__["SortByViewsPipe"], _pipes_sortByDate_pipe__WEBPACK_IMPORTED_MODULE_5__["SortByDatePipe"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _directives_border_bottom_color_directive__WEBPACK_IMPORTED_MODULE_6__["BorderBottomColorDirective"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _components_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_8__["DetailedInformationComponent"], _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"], _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_14__["CustomCardComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _youtube_routing_module__WEBPACK_IMPORTED_MODULE_11__["YoutubeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_12__["RequestInterceptor"],
            multi: true
          }],
          exports: [_components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultsComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]]
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
      production: false,
      api_key: 'AIzaSyD_9dpznUMdzn-tDiVIzlFvt3UrBFlUqB8'
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
    /*! E:\Training RS School Angular\youtube-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map