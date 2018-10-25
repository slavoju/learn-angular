(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hello-world';
        this.tweet = {
            body: 'Here is the body of a tweet...',
            isLiked: false,
            likesCount: 0
        };
    }
    AppComponent.prototype.onClick = function (event) {
        this.tweet.isLiked = event.isActive;
        this.tweet.likesCount = event.likesCount;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_app_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/app-error-handler */ "./src/app/common/app-error-handler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.service */ "./src/app/courses.service.ts");
/* harmony import */ var _authors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authors.service */ "./src/app/authors.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");
/* harmony import */ var _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zippy/zippy.component */ "./src/app/zippy/zippy.component.ts");
/* harmony import */ var _courses_form_courses_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./courses-form/courses-form.component */ "./src/app/courses-form/courses-form.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _changepassword_form_changepassword_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./changepassword-form/changepassword-form.component */ "./src/app/changepassword-form/changepassword-form.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _followers_followers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./followers/followers.component */ "./src/app/followers/followers.component.ts");
/* harmony import */ var _services_followers_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/followers.service */ "./src/app/services/followers.service.ts");
/* harmony import */ var _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./archive-list/archive-list.component */ "./src/app/archive-list/archive-list.component.ts");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/archive/archive.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_9__["CourseComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
                _authors_authors_component__WEBPACK_IMPORTED_MODULE_11__["AuthorsComponent"],
                _like_like_component__WEBPACK_IMPORTED_MODULE_12__["LikeComponent"],
                _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_13__["ZippyComponent"],
                _courses_form_courses_form_component__WEBPACK_IMPORTED_MODULE_14__["CoursesFormComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_15__["SignupFormComponent"],
                _changepassword_form_changepassword_form_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordFormComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
                _followers_followers_component__WEBPACK_IMPORTED_MODULE_20__["FollowersComponent"],
                _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_22__["ArchiveListComponent"],
                _archive_archive_component__WEBPACK_IMPORTED_MODULE_23__["ArchiveComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_22__["ArchiveListComponent"] },
                    { path: 'archive/:year/:month', component: _archive_archive_component__WEBPACK_IMPORTED_MODULE_23__["ArchiveComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"] }
                ])
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_18__["DataService"],
                _services_post_service__WEBPACK_IMPORTED_MODULE_19__["PostService"],
                _services_followers_service__WEBPACK_IMPORTED_MODULE_21__["FollowersService"],
                _courses_service__WEBPACK_IMPORTED_MODULE_6__["CoursesService"],
                _authors_service__WEBPACK_IMPORTED_MODULE_7__["AuthorsService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"], useClass: _common_app_error_handler__WEBPACK_IMPORTED_MODULE_4__["AppErrorHandler"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/archive-list/archive-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/archive-list/archive-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/archive-list/archive-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/archive-list/archive-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Home Page\n</h1>\n<ul>\n  <li *ngFor=\"let archive of archiveLinks\">\n       <a [routerLink]=\"['archive',archive.year,archive.month]\">{{archive.year}}/{{archive.month}}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/archive-list/archive-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/archive-list/archive-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArchiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveListComponent", function() { return ArchiveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArchiveListComponent = /** @class */ (function () {
    function ArchiveListComponent() {
        this.archiveLinks = [{ 'year': '2017', 'month': '1' }, { 'year': '2017', 'month': '2' }, { 'year': '2017', 'month': '3' }];
    }
    ArchiveListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'archive-list',
            template: __webpack_require__(/*! ./archive-list.component.html */ "./src/app/archive-list/archive-list.component.html"),
            styles: [__webpack_require__(/*! ./archive-list.component.css */ "./src/app/archive-list/archive-list.component.css")]
        })
    ], ArchiveListComponent);
    return ArchiveListComponent;
}());



/***/ }),

/***/ "./src/app/archive/archive.component.css":
/*!***********************************************!*\
  !*** ./src/app/archive/archive.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/archive/archive.component.html":
/*!************************************************!*\
  !*** ./src/app/archive/archive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Archive for {{year}} / {{month}}\n</h1>\n\n<button class=\"btn\" routerLink=\"\">View all</button>\n"

/***/ }),

/***/ "./src/app/archive/archive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/archive/archive.component.ts ***!
  \**********************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(route) {
        this.route = route;
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.year = params.get('year');
            _this.month = params.get('month');
        });
    };
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.css */ "./src/app/archive/archive.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/authors.service.ts":
/*!************************************!*\
  !*** ./src/app/authors.service.ts ***!
  \************************************/
/*! exports provided: AuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsService", function() { return AuthorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthorsService = /** @class */ (function () {
    function AuthorsService() {
        this.authors = ['Jan Nowak', 'Zbigniew Ziobro', 'Roman Giertych'];
    }
    AuthorsService.prototype.getAuthors = function () {
        return this.authors;
    };
    AuthorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthorsService);
    return AuthorsService;
}());



/***/ }),

/***/ "./src/app/authors/authors.component.css":
/*!***********************************************!*\
  !*** ./src/app/authors/authors.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authors/authors.component.html":
/*!************************************************!*\
  !*** ./src/app/authors/authors.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Authors\n</h1>\n<ol>\n  <li *ngFor=\"let author of authors\">{{author}}</li>\n</ol>\n"

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authors.service */ "./src/app/authors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(authorsService) {
        this.authors = authorsService.getAuthors();
    }
    AuthorsComponent.prototype.ngOnInit = function () {
    };
    AuthorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/authors/authors.component.html"),
            styles: [__webpack_require__(/*! ./authors.component.css */ "./src/app/authors/authors.component.css")]
        }),
        __metadata("design:paramtypes", [_authors_service__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/changepassword-form/changepassword-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/changepassword-form/changepassword-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/changepassword-form/changepassword-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/changepassword-form/changepassword-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"form-group\">\n        <label for=\"oldpassword\">Old password</label>\n        <input \n            formControlName=\"oldpassword\"\n            id=\"oldpassword\" \n            type=\"text\" \n            class=\"form-control\">\n        <div *ngIf=\"oldpassword.touched && oldpassword.invalid\" class=\"aletrt alert-danger\">\n            <div *ngIf=\"oldpassword.errors.required\">Old password is required.</div>\n            <div *ngIf=\"oldpassword.errors.oldPasswordInvalid\">Old password is invalid.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"newpassword\">New password</label>\n        <input \n            formControlName=\"newpassword\"\n            id=\"newpassword\" \n            type=\"text\" \n            class=\"form-control\">\n        <div *ngIf=\"newpassword.touched && newpassword.invalid\" class=\"aletrt alert-danger\">\n            <div *ngIf=\"newpassword.errors.required\">New password is required.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"confirmpassword\">Confirm password</label>\n        <input \n            formControlName=\"confirmpassword\"\n            id=\"confirmpassword\" \n            type=\"text\" \n            class=\"form-control\">\n        <div *ngIf=\"confirmpassword.touched && confirmpassword.invalid\" class=\"aletrt alert-danger\">\n            <div *ngIf=\"confirmpassword.errors.required\">Confirm password is required.</div>\n        </div>\n    </div>\n    <div *ngIf=\"confirmpassword.touched && newpassword.touched && form.errors\" class=\"aletrt alert-danger\">\n        <div *ngIf=\"form.errors?.passwordNotMatch\">Passwords do not match.</div>\n    </div>\n<button class=\"btn btn-primary\" type=\"submit\">Change password</button>\n</form>"

/***/ }),

/***/ "./src/app/changepassword-form/changepassword-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/changepassword-form/changepassword-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function() { return ChangePasswordFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _changepassword_form_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changepassword-form.validators */ "./src/app/changepassword-form/changepassword-form.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordFormComponent = /** @class */ (function () {
    function ChangePasswordFormComponent(fb) {
        this.form = fb.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _changepassword_form_validators__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordFormValidators"].oldPasswordValidator],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _changepassword_form_validators__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordFormValidators"].passwordNotMatchValidator
        });
    }
    Object.defineProperty(ChangePasswordFormComponent.prototype, "oldpassword", {
        get: function () {
            return this.form.get('oldpassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordFormComponent.prototype, "newpassword", {
        get: function () {
            return this.form.get('newpassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordFormComponent.prototype, "confirmpassword", {
        get: function () {
            return this.form.get('confirmpassword');
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'changepassword-form',
            template: __webpack_require__(/*! ./changepassword-form.component.html */ "./src/app/changepassword-form/changepassword-form.component.html"),
            styles: [__webpack_require__(/*! ./changepassword-form.component.css */ "./src/app/changepassword-form/changepassword-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ChangePasswordFormComponent);
    return ChangePasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/changepassword-form/changepassword-form.validators.ts":
/*!***********************************************************************!*\
  !*** ./src/app/changepassword-form/changepassword-form.validators.ts ***!
  \***********************************************************************/
/*! exports provided: ChangePasswordFormValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormValidators", function() { return ChangePasswordFormValidators; });
var ChangePasswordFormValidators = /** @class */ (function () {
    function ChangePasswordFormValidators() {
    }
    ChangePasswordFormValidators.passwordNotMatchValidator = function (form) {
        var confirmPassword = form.get('confirmpassword');
        var newPassword = form.get('newpassword');
        return confirmPassword.value !== newPassword.value ? { 'passwordNotMatch': true } : null;
    };
    ChangePasswordFormValidators.oldPasswordValidator = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value !== '1234') {
                    resolve({ 'oldPasswordInvalid': true });
                }
                else {
                    resolve(null);
                }
            });
        });
    };
    return ChangePasswordFormValidators;
}());



/***/ }),

/***/ "./src/app/common/app-error-handler.ts":
/*!*********************************************!*\
  !*** ./src/app/common/app-error-handler.ts ***!
  \*********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An unexpected error occurred.');
        console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/bad-input.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadInput = /** @class */ (function (_super) {
    __extends(BadInput, _super);
    function BadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInput;
}(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course works!\n</p>\n"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseComponent = /** @class */ (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    CourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/courses-form/courses-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/courses-form/courses-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin: 50px;\r\n}"

/***/ }),

/***/ "./src/app/courses-form/courses-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/courses-form/courses-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Course Name</label>\n    <input \n      required\n      minlength=\"5\"\n      ngModel\n      id=\"name\"\n      name=\"name\"\n      #name=\"ngModel\" \n      type=\"text\" \n      class=\"form-control\">\n      <div class=\"alert alert-danger\" *ngIf=\"name.touched && !name.valid\">\n        <div *ngIf=\"name.errors.required\">Course Name is required!</div>\n        <div *ngIf=\"name.errors.minlength\">Course Name should be minimum {{ name.errors.minlength.requiredLength }} characters!</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"category\">Category</label>\n    <select \n      required\n      ngModel\n      name=\"category\"\n      id=\"category\"\n      #category=\"ngModel\" \n      class=\"form-control\">\n      <option value=\"\"></option>\n      <option *ngFor=\"let cat of categories\"  [value]=\"cat.id\">{{ cat.name }}</option>\n    </select>\n    <div class=\"alert alert-danger\" *ngIf=\"category.touched && !category.valid\">\n      <div *ngIf=\"category.errors.required\">Category is required!</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n      <div class=\"checkbox\">\n      <input \n        id=\"hasGuarantee\"\n        name=\"hasGuarantee\"\n        #hasGuarantee=\"ngModel\"\n        type=\"checkbox\"\n        ngModel\n        >\n        <label for=\"hasGuarantee\">30-day money-back guarantee</label>\n      </div>\n    </div>\n    <p>\n      {{ f.value | json }}\n    </p>\n  <button class=\"btn btn-primary\" [disabled]=\"f.invalid\">Create</button>\n</form>\n"

/***/ }),

/***/ "./src/app/courses-form/courses-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/courses-form/courses-form.component.ts ***!
  \********************************************************/
/*! exports provided: CoursesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesFormComponent", function() { return CoursesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoursesFormComponent = /** @class */ (function () {
    function CoursesFormComponent() {
        this.categories = [
            { id: 1, name: 'Development' },
            { id: 2, name: 'Art' },
            { id: 3, name: 'Languages' }
        ];
    }
    CoursesFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'courses-form',
            template: __webpack_require__(/*! ./courses-form.component.html */ "./src/app/courses-form/courses-form.component.html"),
            styles: [__webpack_require__(/*! ./courses-form.component.css */ "./src/app/courses-form/courses-form.component.css")]
        })
    ], CoursesFormComponent);
    return CoursesFormComponent;
}());



/***/ }),

/***/ "./src/app/courses.service.ts":
/*!************************************!*\
  !*** ./src/app/courses.service.ts ***!
  \************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursesService = /** @class */ (function () {
    function CoursesService() {
    }
    CoursesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  courses works!\n</p>\n"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/followers/followers.component.css":
/*!***************************************************!*\
  !*** ./src/app/followers/followers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n}"

/***/ }),

/***/ "./src/app/followers/followers.component.html":
/*!****************************************************!*\
  !*** ./src/app/followers/followers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My followers</h1>\r\n<div *ngFor=\"let follower of followers\" class=\"media\">\r\n  <div class=\"media-left\">\r\n    <img class=\"media-object avatar\" src=\"{{follower.avatar_url}}\" alt=\"Generic placeholder image\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n    <h4 class=\"media-heading\">{{follower.login}}</h4>\r\n    <p><a href=\"{{follower.html_url}}\">{{follower.html_url}}</a></p>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/followers/followers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/followers/followers.component.ts ***!
  \**************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_followers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/followers.service */ "./src/app/services/followers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(service) {
        this.service = service;
    }
    FollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (followers) { return _this.followers = followers; });
    };
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.css */ "./src/app/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_followers_service__WEBPACK_IMPORTED_MODULE_1__["FollowersService"]])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/*!*****************************************!*\
  !*** ./src/app/like/like.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    padding: 30px;\r\n}\r\nspan {\r\n    color: #ccc;\r\n    cursor: pointer;\r\n}\r\nspan.isLiked {\r\n    color: deeppink;\r\n}"

/***/ }),

/***/ "./src/app/like/like.component.html":
/*!******************************************!*\
  !*** ./src/app/like/like.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  <span class=\"glyphicon glyphicon-heart\" [class.isLiked]=\"isActive\" (click)=\"onClicked()\"></span>  {{likesCount}}\n</h2>\n"

/***/ }),

/***/ "./src/app/like/like.component.ts":
/*!****************************************!*\
  !*** ./src/app/like/like.component.ts ***!
  \****************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LikeComponent.prototype.onClicked = function () {
        this.isActive = !this.isActive;
        if (this.isActive) {
            this.likesCount++;
        }
        else {
            this.likesCount--;
        }
        this.change.emit({ isActive: this.isActive, likesCount: this.likesCount });
    };
    LikeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LikeComponent.prototype, "likesCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "change", void 0);
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.css */ "./src/app/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input \r\n  (keyup.enter)=\"createPost(title)\" #title\r\n  type=\"text\" class=\"form-control\">\r\n<ul class=\"list-group\">\r\n  <li \r\n    *ngFor=\"let post of posts\"\r\n    class=\"list-group-item\">\r\n    <button \r\n      (click)=\"deletePost(post)\"\r\n      class=\"btn btn-default btn-sm\">Delete</button>\r\n    {{ post.title }}\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        input.value = '';
        this.service.create(post)
            .subscribe(function (newPost) {
            post['id'] = newPost.id;
            _this.posts.splice(0, 0, post);
        }, function (error) {
            if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_1__["BadInput"]) {
                // this.form.setErrors(error.originalError);
            }
            else
                throw error;
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.update(post)
            .subscribe(function (updatedPost) {
            console.log(updatedPost);
        });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.service.delete(post.id)
            .subscribe(function () {
            var index = _this.posts.indexOf(post);
            _this.posts.splice(index, 1);
        }, function (error) {
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_0__["NotFoundError"])
                alert('This post has already been deleted.');
            else
                throw error;
        });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.get = function (id) {
        return this.http.get(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 400)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_0__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_1__["NotFoundError"]());
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_2__["AppError"](error));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [String, _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/followers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/followers.service.ts ***!
  \***********************************************/
/*! exports provided: FollowersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersService", function() { return FollowersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowersService = /** @class */ (function (_super) {
    __extends(FollowersService, _super);
    function FollowersService(http) {
        return _super.call(this, 'https://api.github.com/users/mosh-hamedani/followers', http) || this;
    }
    FollowersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], FollowersService);
    return FollowersService;
}(_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function (_super) {
    __extends(PostService, _super);
    function PostService(http) {
        return _super.call(this, 'http://jsonplaceholder.typicode.com/posts', http) || this;
    }
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PostService);
    return PostService;
}(_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]));



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input \n            formControlName=\"username\"\n            id=\"username\" \n            type=\"text\" \n            class=\"form-control\">\n        <div *ngIf=\"username.touched && username.invalid\" class=\"aletrt alert-danger\">\n            <div *ngIf=\"username.errors.required\">Username is required</div>\n            <div *ngIf=\"username.errors.minlength\">Username should be minimum {{ username.errors.minlength.requiredLength }} characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input \n            formControlName=\"password\"\n            id=\"password\" \n            type=\"text\" \n            class=\"form-control\">\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n</form>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/zippy/zippy.component.css":
/*!*******************************************!*\
  !*** ./src/app/zippy/zippy.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-group {\r\n    margin: 0px 20px 0px 50px;\r\n    width: 300px;\r\n    font-size: 20px;\r\n}\r\n.panel-heading {\r\n    width: 100%;\r\n    position: relative;\r\n    font-weight: bold;\r\n}\r\nspan{\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 20px;\r\n}"

/***/ }),

/***/ "./src/app/zippy/zippy.component.html":
/*!********************************************!*\
  !*** ./src/app/zippy/zippy.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-group\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\"\n    (click)=\"onClick()\"\n    [ngStyle]=\"{'backgroundColor': !unfolded ? '#fff' : ''}\">\n    <span class=\"glyphicon\"\n    [ngClass]=\"{\n      'glyphicon-chevron-up': unfolded,\n      'glyphicon-chevron-down': !unfolded\n    }\"\n    ></span>{{title}}</div>\n    <div class=\"panel-body\" *ngIf=\"unfolded\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/zippy/zippy.component.ts":
/*!******************************************!*\
  !*** ./src/app/zippy/zippy.component.ts ***!
  \******************************************/
/*! exports provided: ZippyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZippyComponent", function() { return ZippyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZippyComponent = /** @class */ (function () {
    function ZippyComponent() {
        this.unfolded = false;
        this.title = "test title";
    }
    ZippyComponent.prototype.onClick = function () {
        this.unfolded = !this.unfolded;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], ZippyComponent.prototype, "title", void 0);
    ZippyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'zippy',
            template: __webpack_require__(/*! ./zippy.component.html */ "./src/app/zippy/zippy.component.html"),
            styles: [__webpack_require__(/*! ./zippy.component.css */ "./src/app/zippy/zippy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZippyComponent);
    return ZippyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\nauka\angular\learn-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map