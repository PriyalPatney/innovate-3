webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.toolbar {\n    margin-top: 0px;\n    width: 100%;\n    \n}\nspan {\n   margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    apiKey: "AIzaSyA5gSlf771LKcdDCNaszxdF0JM71_l6118",
    authDomain: "innovate-5d5bd.firebaseapp.com",
    databaseURL: "https://innovate-5d5bd.firebaseio.com",
    projectId: "innovate-5d5bd",
    storageBucket: "innovate-5d5bd.appspot.com",
    messagingSenderId: "881003042717"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__nav_nav_component__["a" /* NavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__core_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthService.prototype.googleLogin = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider).then(function (value) {
            console.log('sucess', value),
                _this.router.navigateByUrl('profile');
        })
            .catch(function (error) {
            console.log('Some thing went wrong', error);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n#login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n#form {\n\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 200px auto 100px;\n  padding: 45px;\n  text-align: center;\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n#form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n}\n#form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #0a1119;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  border-color: white;\n  border-style: solid;\n  border-width: 2px;\n}\n#form button:hover,#form button:active,#form button:focus {\n  background: white;\n  color: #0a1119;\n  border-color: #0a1119;\n}\n#form #message {\n  margin: 15px 0 0;\n  color: #534f4f;\n  font-size: 12px;\n}\n#form #err {\n  background: #f18484;\n  margin-top: 15px;\n}\n#form #err p {\n  margin: 15px 0 0;\n  color: #534f4f;\n  font-size: 14px;\n  display: none;\n}\n#form #message a {\n  color: #1f2833;\n  text-decoration: none;\n}\n#form #message a:hover\n{\n\ttext-decoration: underline;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"form\">\n\n    <div id=\"logInfo\">\n        <input name=\"email\" type=\"text\" placeholder=\"Email\">\n        <input name=\"password\" type=\"password\" placeholder=\"Password\">\n    </div>\n    <button id=\"submit\" (click) = \"loginGoogle()\">Login</button>\n    <div id=\"err\">\n            <p id=\"errNoUser\">Wrong email or password</p>\n            <p id=\"errServ\">Server error, try again</p>\n            <p id=\"errUser\">All fields are important</p>\n            <p id=\"loading\">Loading...</p>\n    </div>\n    <p id=\"message\">Not registered? <a href=\"signup.html\">Create an account</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.authService.googleLogin();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n    width: 100%;\n    height: 1000px;\n    position: fixed;\n   \n  }\n  \n.example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    \n}\n  \n.example-sidenav {\n    padding-top: 10%;\n    \n    background:#24292e;\n }\n  \n.toolbar {\n    margin-top: 0px;\n    width: 100%;\n    height: 80px;\n    position: fixed;\n    background: #24292e;\n    \n}\n  \nspan {\n   margin: auto;\n   color: #fff;\n}\n  \n.btn {\n   background: inherit;\n   border:none;\n   color: #fff;\n}\n  \n.links {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n  \nul {\n    list-style: none;\n}\n  \n.nav-btn{\n    width: 300px;\n    color: #fff;\n    background: #2b3137;\n    padding: 20px;\n    margin-left: 0px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-toolbar class = \"toolbar\" >\n     \n      <button type=\"button\" class =\"btn\" mat-button (click)=\"drawer.toggle()\">\n          <i class=\"material-icons md-48\">list</i>\n      </button>\n      <span>Innovate</span>\n    </mat-toolbar>\n<mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    \n  <figure class=\"figure\">\n        <span><img src=\"\"class=\"figure-img img-fluid rounded\"></span>\n        <br><span></span><br>\n        <span></span>\n      </figure>\n  <ul class =\"links\">\n  \n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">home</i>Home</button></li>\n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">event</i>Events</button></li>\n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">details</i>Details</button></li>\n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">question_answer</i>FAQ</button></li>\n    <li><button class=\"nav-btn\" mat-button (click) =\"signOut()\" ><i class=\"material-icons\">power_settings_new</i>Logout</button></li>\n  </ul>\n</mat-drawer>\n\n\n\n<div class=\"example-sidenav-content\">\n \n</div>\n\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n    width: 100%;\n    height: 1000px;\n    position: fixed;\n   \n  }\n  \n.example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    \n}\n  \n.example-sidenav {\n    padding-top: 10%;\n    \n    background:#24292e;\n }\n  \n.toolbar {\n    margin-top: 0px;\n    width: 100%;\n    height: 80px;\n    position: fixed;\n    background: #24292e;\n    \n}\n  \nspan {\n   margin: auto;\n   color: #fff;\n}\n  \n.btn {\n   background: inherit;\n   border:none;\n   color: #fff;\n}\n  \n.links {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n  \nul {\n    list-style: none;\n}\n  \n.nav-btn{\n    width: 300px;\n    color: #fff;\n    background: #2b3137;\n    padding: 20px;\n    margin-left: 0px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-toolbar class = \"toolbar\" >\n     \n      <button type=\"button\" class =\"btn\" mat-button (click)=\"drawer.toggle()\">\n          <i class=\"material-icons md-48\">list</i>\n      </button>\n      <span>Innovate</span>\n    </mat-toolbar>\n<mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    \n  <figure class=\"figure\">\n        <span><img src=\"\"class=\"figure-img img-fluid rounded\"></span>\n        <br><span></span><br>\n        <span></span>\n      </figure>\n  <ul class =\"links\">\n  \n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">home</i>Home</button></li>\n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">event</i>Events</button></li>\n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">details</i>Details</button></li>\n    <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">question_answer</i>FAQ</button></li>\n    <li><button class=\"nav-btn\" mat-button (click) =\"signOut()\" ><i class=\"material-icons\">power_settings_new</i>Logout</button></li>\n  </ul>\n</mat-drawer>\n\n\n\n<div class=\"example-sidenav-content\">\n \n</div>\n\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.showFiller = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n    width: 100%;\n    height: 1000px;\n    position: fixed;\n   \n  }\n  \n.example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    \n}\n  \n.example-sidenav {\n    padding-top: 10%;\n    \n    background:#24292e;\n }\n  \n.toolbar {\n    margin-top: 0px;\n    width: 100%;\n    height: 80px;\n    position: fixed;\n    background: #24292e;\n    \n}\n  \nspan {\n   margin: auto;\n   color: #fff;\n}\n  \n.btn {\n   background: inherit;\n   border:none;\n   color: #fff;\n}\n  \n.links {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n  \nul {\n    list-style: none;\n}\n  \n.nav-btn{\n    width: 300px;\n    color: #fff;\n    background: #2b3137;\n    padding: 20px;\n    margin-left: 0px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-drawer-container class=\"example-container\" autosize>\n    <mat-toolbar class = \"toolbar\" >\n       \n        <button type=\"button\" class =\"btn\" mat-button (click)=\"drawer.toggle()\">\n            <i class=\"material-icons md-48\">list</i>\n        </button>\n        <span>Innovate</span>\n      </mat-toolbar>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n      \n    <figure class=\"figure\">\n          <span><img src=\"{{userImage}}\"class=\"figure-img img-fluid rounded\"></span>\n          <br><span>{{userId}}</span><br>\n          <span>{{userName}}</span>\n        </figure>\n    <ul class =\"links\">\n    \n      <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">home</i>Home</button></li>\n      <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">event</i>Events</button></li>\n      <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">details</i>Details</button></li>\n      <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">question_answer</i>FAQ</button></li>\n      <li><button class=\"nav-btn\" mat-button ><i class=\"material-icons\">power_settings_new</i>Logout</button></li>\n    </ul>\n  </mat-drawer>\n\n \n\n  <div class=\"example-sidenav-content\">\n   \n  </div>\n\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
        this.showFiller = true;
        this.userImage = "http://lorempixel.com/150/150";
        this.userName = "Jane Doe";
        this.userId = "jane doe";
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-nav',
            template: __webpack_require__("../../../../../src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map