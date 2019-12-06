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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _netflixmini_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./netflixmini.component */ "./src/app/netflixmini.component.ts");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.component */ "./src/app/navbar.component.ts");
/* harmony import */ var _favorite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorite.component */ "./src/app/favorite.component.ts");
/* harmony import */ var _tvshows_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tvshows.component */ "./src/app/tvshows.component.ts");
/* harmony import */ var _details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/movie-details.component */ "./src/app/details/movie-details.component.ts");
/* harmony import */ var _details_tvshow_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/tvshow-details.component */ "./src/app/details/tvshow-details.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search.component */ "./src/app/search.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _services_tvshows_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/tvshows.service */ "./src/app/services/tvshows.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movies.component */ "./src/app/movies.component.ts");

















//api = http://www.omdbapi.com/?apikey=da0f4436&s=avengers
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _netflixmini_component__WEBPACK_IMPORTED_MODULE_5__["NetFlixMiniComponent"],
                _navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"],
                _details_tvshow_details_component__WEBPACK_IMPORTED_MODULE_10__["TvShowDetailsComponent"],
                _tvshows_component__WEBPACK_IMPORTED_MODULE_8__["TvShowsComponent"],
                _movies_component__WEBPACK_IMPORTED_MODULE_16__["MoviesComponent"],
                _search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _favorite_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteMoviesComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_15__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_services_movies_service__WEBPACK_IMPORTED_MODULE_13__["MoviesService"], _services_tvshows_service__WEBPACK_IMPORTED_MODULE_14__["TvShowsService"]],
            bootstrap: [_netflixmini_component__WEBPACK_IMPORTED_MODULE_5__["NetFlixMiniComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _favorite_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.component */ "./src/app/favorite.component.ts");
/* harmony import */ var _tvshows_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tvshows.component */ "./src/app/tvshows.component.ts");
/* harmony import */ var _details_movie_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/movie-details.component */ "./src/app/details/movie-details.component.ts");
/* harmony import */ var _details_tvshow_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/tvshow-details.component */ "./src/app/details/tvshow-details.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/search.component.ts");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies.component */ "./src/app/movies.component.ts");






var appRoutes = [
    { path: 'movie/:id', component: _details_movie_details_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailsComponent"] },
    { path: 'tvshow/:id', component: _details_tvshow_details_component__WEBPACK_IMPORTED_MODULE_3__["TvShowDetailsComponent"] },
    { path: 'search/:title', component: _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'movies', component: _movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"] },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'tvshows', component: _tvshows_component__WEBPACK_IMPORTED_MODULE_1__["TvShowsComponent"] },
    { path: 'favorite', component: _favorite_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteMoviesComponent"] },
];


/***/ }),

/***/ "./src/app/details/movie-details.component.html":
/*!******************************************************!*\
  !*** ./src/app/details/movie-details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"backdrop-wraper\">\r\n        <img [src]=\"baseimgUrl+movie?.backdrop_path\" alt=\"nothing\" class=\"bg-img\">\r\n        <div class=\"grid\">\r\n            <div class=\"content-wrap\">\r\n                <h1 class=\"movie-title\">{{movie?.title  | uppercase}}</h1>\r\n                <p class=\"movie-overview1\">{{movie?.overview}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"grid\"></div>\r\n    </div>\r\n    <div class=\"movie-info\">\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Aired</p><span class=\"pad-right badge\">{{movie?.release_date | date}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Length</p><span class=\"pad-right badge\">{{movie?.runtime/60 | number}}hrs</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Porpularity</p><span class=\"pad-right badge\">{{movie?.popularity | number: '1.0-0'}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Vote</p><span class=\"pad-right badge\">{{movie?.vote_average/10 | percent: '0.0-0'}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Votes</p><span class=\"pad-right badge\">{{movie?.vote_count}}</span>\r\n        </div>\r\n    </div>\r\n    <!-- Gernes -->\r\n    <div class=\"genres\">\r\n        <h2 class=\"sec-name\">Genres</h2>\r\n        <ul>\r\n            <li *ngFor=\"let genre of movie?.genres\" class=\"genre\">{{genre.name}}</li>\r\n        </ul>\r\n    </div>\r\n    <!-- Overview -->\r\n    <div class=\"overview\">\r\n        <h2 class=\"sec-name\">Overview</h2>\r\n        <p class=\"movie-overview\">{{movie?.overview}}</p>\r\n    </div>\r\n    <!-- Casts -->\r\n    <div class=\"casts\">\r\n        <h2 class=\"sec-name\">Casts</h2>\r\n        <ul>\r\n            <li *ngFor=\"let genre of movie?.genre_ids\" class=\"cast\">{{genre}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/details/movie-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/details/movie-details.component.ts ***!
  \****************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
        this.baseimgUrl = "https://image.tmdb.org/t/p/w1280";
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovie(+this.router.snapshot.params['id']).subscribe(function (movie) {
            _this.movie = movie;
            console.log(_this.movie);
        });
    };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/details/movie-details.component.html"),
            styles: ["\n        @media(min-width: 50rem){\n            .backdrop-wraper .grid .content-wrap{\n                position: absolute;\n                top: 30%;\n                left: 10%;\n            }\n            .backdrop-wraper {\n                display: grid;\n                grid-template-columns: 1fr 1fr;\n            }\n            .movie-info{\n                display: flex;\n                flex-flow: wrap;\n            }\n            .info-wrap{\n                flex: 1;\n                display: flex;\n                flex-flow: row wrap;\n                align-content: flex-end;\n                justify-content: space-around;\n            }\n        }\n        .backdrop-wraper .bg-img{\n            position: absolute;\n            left: 0px;\n            width: 100%;\n            height: 300px;\n            z-index: -1;\n            opacity: 0.5;\n        }\n        .backdrop-wraper {\n            height: 300px;\n            color: #eaeaea;\n            margin-bottom: 2em;\n        }\n        .backdrop-wraper .grid {\n            column: span 2;\n        }\n        @media all and (max-width: 515px){\n            .backdrop-wraper .grid .content-wrap{\n                position: relative;\n                top: 10%;\n                left: 10%;\n            }\n        }\n        .backdrop-wraper .grid .content-wrap{\n            padding: 1rem;\n            box-shadow: black -10px 10px 20px;\n            height: auto; \n        }\n        .movie-title{\n            color: #eaeaea;\n            font-size: 1.5em;\n            letter-spacing: 3px;\n            font-weight: bolder;\n            margin-bottom: 15px;\n        }\n        .info-wrap {\n            display: flex;\n            flex-flow: row nowrap;\n            align-content: flex-end;\n            justify-content: space-between;\n            background-color: rgba(20,20,20,0.4);\n            margin: 1em;\n            max-height: auto;\n            border-radius: 1%;\n        }\n        .info-wrap .info{\n            flex: 2  content auto;\n            text-align: left;\n            padding: 1em;\n            border-left: 1px solid lightgreen;\n            font-size: 1em;\n            color: rgb(224, 218, 218)\n        }\n        .info-wrap .pad-right{\n            flex: 1;\n            padding: 1em;\n            text-align: right;\n            font-size: 1em;\n            color: #eaeaea;\n        }\n        .movie-overview1{\n            color: #eaeaea !important;\n            font-size: .8em;\n            font-weight: 20px;\n            text-align: justify;\n            max-height: 110px;\n            max-width: 300px;\n            overflow: hidden;\n        }\n        movie-overview{\n            font-wight: normal;\n            font-size: 2em;\n            line-height: 3em;\n            letter-spacing: .04em;\n            word-spacing: normal;\n            text-align: justify;\n        }\n        .genres ul,\n        .casts ul{\n            list-style: none;\n            display: flex;\n            flex-flow: row wrap;\n        }\n        .genre,\n        .cast{ \n            flex: 1;\n            padding: 2em;\n        }\n        .sec-name{\n            margin-top: 10px;\n        }\n\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/details/tvshow-details.component.html":
/*!*******************************************************!*\
  !*** ./src/app/details/tvshow-details.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"backdrop-wraper\">\r\n        <img [src]=\"baseimgUrl+tvshow?.backdrop_path\" alt=\"nothing\" class=\"bg-img\">\r\n        <div class=\"grid\">\r\n            <div class=\"content-wrap\">\r\n                <h1 class=\"tvshow-title\">{{tvshow?.name  | uppercase}}</h1>\r\n                <p class=\"tvshow-overview1\">{{tvshow?.overview}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"grid\"></div>\r\n    </div>\r\n    <div class=\"tvshow-info\">\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Aired</p><span class=\"pad-right badge\">{{tvshow?.first_air_date | date}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Seasons</p><span class=\"pad-right badge\">{{tvshow?.seasons.length | number}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Porpularity</p><span class=\"pad-right badge\">{{tvshow?.popularity | number: '1.0-0'}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Vote</p><span class=\"pad-right badge\">{{tvshow?.vote_average/10 | percent: '0.0-0'}}</span>\r\n        </div>\r\n        <div class=\"info-wrap\">\r\n            <p class=\"info\">Votes</p><span class=\"pad-right badge\">{{tvshow?.vote_count}}</span>\r\n        </div>\r\n    </div>\r\n    <!-- Gernes -->\r\n    <div class=\"genres\">\r\n        <h2 class=\"sec-name\">Genres</h2>\r\n        <ul>\r\n            <li *ngFor=\"let genre of tvshow?.genres\" class=\"genre\">{{genre.name}}</li>\r\n        </ul>\r\n    </div>\r\n    <!-- Overview -->\r\n    <div class=\"overview\">\r\n        <h2 class=\"sec-name\">Overview</h2>\r\n        <p class=\"tvshow-overview\">{{tvshow?.overview}}</p>\r\n    </div>\r\n    <!-- Casts -->\r\n    <div class=\"casts\">\r\n        <h2 class=\"sec-name\">Casts</h2>\r\n        <ul>\r\n            <li *ngFor=\"let genre of tvshow?.genres\" class=\"cast\">{{genre.name}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/details/tvshow-details.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/details/tvshow-details.component.ts ***!
  \*****************************************************/
/*! exports provided: TvShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowDetailsComponent", function() { return TvShowDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tvshows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tvshows.service */ "./src/app/services/tvshows.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TvShowDetailsComponent = /** @class */ (function () {
    function TvShowDetailsComponent(tvshowService, router) {
        this.tvshowService = tvshowService;
        this.router = router;
        this.baseimgUrl = "https://image.tmdb.org/t/p/w1280";
    }
    TvShowDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tvshowService.getTvshow(+this.router.snapshot.params['id']).subscribe(function (tvshow) {
            _this.tvshow = tvshow;
        });
    };
    TvShowDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tvshow-details.component.html */ "./src/app/details/tvshow-details.component.html"),
            styles: ["\n    @media(min-width: 50rem){\n        .backdrop-wraper .grid .content-wrap{\n            position: absolute;\n            top: 30%;\n            left: 10%;\n        }\n        .backdrop-wraper {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n        }\n        .tvshow-info{\n            display: flex;\n            flex-flow: wrap;\n        }\n        .info-wrap{\n            flex: 1;\n            display: flex;\n            flex-flow: row wrap;\n            align-content: flex-end;\n            justify-content: space-around;\n        }\n    }\n    .backdrop-wraper .bg-img{\n        position: absolute;\n        left: 0px;\n        width: 100%;\n        height: 300px;\n        z-index: -1;\n        opacity: 0.5;\n    }\n    .backdrop-wraper {\n        height: 300px;\n        color: #eaeaea;\n        margin-bottom: 2em;\n    }\n    .backdrop-wraper .grid {\n        column: span 2;\n    }\n    @media all and (max-width: 515px){\n        .backdrop-wraper .grid .content-wrap{\n            position: relative;\n            top: 10%;\n            left: 10%;\n        }\n    }\n    .backdrop-wraper .grid .content-wrap{\n        padding: 1rem;\n        box-shadow: black -10px 10px 20px;\n        height: auto; \n    }\n    .tvshow-title{\n        color: #eaeaea;\n        font-size: 1.5em;\n        letter-spacing: 3px;\n        font-weight: bolder;\n        margin-bottom: 15px;\n    }\n    .info-wrap {\n        display: flex;\n        flex-flow: row nowrap;\n        align-content: flex-end;\n        justify-content: space-between;\n        background-color: rgba(20,20,20,0.4);\n        margin: 1em;\n        max-height: auto;\n        border-radius: 1%;\n    }\n    .info-wrap .info{\n        flex: 2  content auto;\n        text-align: left;\n        padding: 1em;\n        border-left: 1px solid lightgreen;\n        font-size: 1em;\n        color: rgb(224, 218, 218)\n    }\n    .info-wrap .pad-right{\n        flex: 1;\n        padding: 1em;\n        text-align: right;\n        font-size: 1em;\n        color: #eaeaea;\n    }\n    .tvshow-overview1{\n        color: #eaeaea !important;\n        font-size: .8em;\n        font-weight: 20px;\n        text-align: justify;\n        max-height: 110px;\n        max-width: 300px;\n        overflow: hidden;\n    }\n    tvshow-overview{\n        font-wight: normal;\n        font-size: 2em;\n        line-height: 3em;\n        letter-spacing: .04em;\n        word-spacing: normal;\n        text-align: justify;\n    }\n    .genres ul,\n    .casts ul{\n        list-style: none;\n        display: flex;\n        flex-flow: row wrap;\n    }\n    .genre,\n    .cast{ \n        flex: 1;\n        padding: 2em;\n    }\n    .sec-name{\n        margin-top: 10px;\n    }\n\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tvshows_service__WEBPACK_IMPORTED_MODULE_2__["TvShowsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TvShowDetailsComponent);
    return TvShowDetailsComponent;
}());



/***/ }),

/***/ "./src/app/favorite.component.ts":
/*!***************************************!*\
  !*** ./src/app/favorite.component.ts ***!
  \***************************************/
/*! exports provided: FavoriteMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteMoviesComponent", function() { return FavoriteMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoriteMoviesComponent = /** @class */ (function () {
    function FavoriteMoviesComponent() {
        this.favoriteMovies = [];
    }
    FavoriteMoviesComponent.prototype.ngOnInit = function () {
    };
    FavoriteMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorite-movies',
            template: "\n        <div class=\"row\">\n            <h1>Favorite Shows</h1>\n        </div>\n    "
        })
    ], FavoriteMoviesComponent);
    return FavoriteMoviesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.html":
/*!***************************************!*\
  !*** ./src/app/footer.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"grid-wrap\">\r\n        <div class=\"grid\">\r\n            <a href=\"faq.html\" class=\"footer-link\">FAQ</a>\r\n            <a href=\"feedback.html\" class=\"footer-link\">Feedback</a>\r\n            <a href=\"terms.html\" class=\"footer-link\">Terms Of Use</a>\r\n            <a href=\"policy.html\" class=\"footer-link\">Privacy Policy</a>\r\n        </div>\r\n        <div class=\"social\">Join us\r\n            <a href=\"shear/facebook.com\" class=\"facebook\" target=\"_blank\"><span class=\"fa fa-facebook\"></span></a>\r\n            <a href=\"shear/twitter.com\" class=\"twitter\" target=\"_blank\"><span class=\"fa fa-twitter\"></span></a>\r\n            <a href=\"shear/instergram.com\" class=\"instergram\" target=\"_blank\"><span class=\"fa fa-instagram\"></span></a>\r\n            <a href=\"shear/whatsapp.com\" class=\"whatsapp\" target=\"_blank\"><span class=\"fa fa-whatsapp\"></span></a>\r\n        </div>\r\n    </div>\r\n    <p class=\"copyright\">Copyright &copy; {{ currentYear}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/footer.component.ts":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentDate = Date.now();
        this.theDate = new Date(this.currentDate);
        this.currentYear = this.theDate.getFullYear();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-app',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer.component.html"),
            styles: ["\n        .footer .grid-wrap{\n            margin: auto;\n        }\n        @media (min-width: 720px){\n            .grid-wrap{\n                display: grid;\n                grid-template-column: 1fr 1fr 1fr 1fr;\n            }\n            .grid{\n                display: flex;\n                flex-flow: row nowrap;\n                justify-content: space-around;\n                grid-column:  1/5;\n            }\n            .grid .footer-link{\n                flex: 1;\n                display: inherit;\n                align-self: center;\n            }\n            .social{\n                grid-column: 5/6;\n            }\n        }\n        .grid{\n            text-align: center;\n        }\n        .footer-link{\n            margin: 0.2em;\n            text-align: center;\n            text-decoration: none;\n            color: rgb(224, 218, 218);\n        }\n        .footer-link:hover{\n            color: rgb(192, 186, 186);\n        } \n        .social{\n            margin: 5px;\n            text-align: center;\n        }\n        .social a{\n            margin: 0.5em;\n            text-align: center;\n            text-decoration: none;\n            color: rgb(224, 218, 218);\n        }\n        .copyright{\n            margin: 5px;\n            text-align: center;\n        }\n    "]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/movies.component.ts":
/*!*************************************!*\
  !*** ./src/app/movies.component.ts ***!
  \*************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService) {
        this.movieService = movieService;
        this.baseimgUrl = "https://image.tmdb.org/t/p/w300";
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) {
            _this.movies = movies.results;
        });
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movies-list',
            template: "\n    <div class=\"row\">\n        <h4 class=\"col-sm-5 text-white\" style=\"margin-left: 0px\">Movies</h4>\n        <div class=\"col-sm-7\"></div>\n        <div class=\"row\">\n                <div class=\"well thumbnail m-2 col-md-3\" [routerLink]=\"['/movie', movie.id]\"  *ngFor=\"let movie of movies\"> \n                            <img class=\"img-responsive img-border\" height=\"80%\" my-5 width=\"100%\"  [src]=\"baseimgUrl+movie?.poster_path\" [alt]=\"movie?.title\"/><br>\n                            <span class=\"movie-title text-white font-weight-16\">{{movie?.title}}</span><br>\n                            <span class=\"mr-1 text-white font-weight-16\">Popularity:<em class=\"badge bg-danger text-white\">{{movie?.popularity}}</em></span>\n                            <span class=\"mr-1 float-right text-white font-weight-16\">Vote:<em class=\"badge bg-success ml-1 text-white\">{{movie?.vote_count}}</em></span><br>\n                            <span class=\"clearfix mr-1 text-white font-weight-16\">Released: <em class=\"float-right\">{{movie?.release_date | date}}</em></span>\n                            \n                </div>\n        </div>\n    </div>",
            styles: ["\n        .thumbnail{ \n          cursor: pointer;\n        }\n        .thumbnail:hover{\n         background-color: rgba(25, 25, 27, 0.4);\n         \n        }\n        .thumbnail:hover > img{\n          zoom: 1;\n        }\n        .thumbnail > img{\n          margin-top: 5px;\n        }\n        .movie-title {\n          font-family: Helvertica Verdana ;\n          font-size: 1.0em;\n          text-align: center;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/navbar.component.html":
/*!***************************************!*\
  !*** ./src/app/navbar.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark container-fluid\">\r\n    <div class=\"container-fluid\">\r\n        <a href=\"\" class=\"navbar navbar-brand text-danger mr-5 name\">NETFLIX</a>\r\n        <a href=\"\" class=\"navbar navbar-brand text-danger logo\">N</a>\r\n        <form class=\"form-inline\" style=\"display:inline;\">\r\n            <input type=\"text\" size=\"15\" placeholder=\"Search Movie\" class=\"my-sm-0\" />\r\n            <button class=\"\" type=\"submit\">\r\n                <i class=\"fa fa-search\"></i></button>\r\n        </form>\r\n        <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#netresponsive\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse ml-5\" id=\"netresponsive\">\r\n            <ul class=\"navbar-nav list-inline\">\r\n                <li class=\"nav-item list-inline-item\"><a class=\"nav-link\" [routerLink]=\"['/movies']\"\r\n                        routerLinkActive=\"active\">Movies</a></li>\r\n                <li class=\"nav-item list-inline-item\"><a class=\"nav-link\" [routerLink]=\"['/tvshows']\"\r\n                        routerLinkActive=\"active\">TV/Shows</a></li>\r\n                <li class=\"nav-item list-inline-item\"><a class=\"nav-link\" [routerLink]=\"['/favorite']\"\r\n                        routerLinkActive=\"active\">Favorites</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar.component.ts":
/*!*************************************!*\
  !*** ./src/app/navbar.component.ts ***!
  \*************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.logIn = null;
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar.component.html"),
            styles: ["\n        .navbar-brand{\n            font-weight: bolder;\n            letter-spacing: 0.01em;\n            font-size: 2.0em;\n        }\n        nav{\n            display: block !important;\n            background-color: rgba(25, 25, 27, 0.8);\n            border-radius: 1%;\n        }\n        @media all and (max-width: 969px){\n            nav .name{\n                display: none;\n            }\n            nav .logo{\n                display: inline-block;\n                margin-right: 0px;\n            }\n        }\n        .logo {\n            display: none;\n        }\n        nav .form-inline>input{\n            border: none;\n            border-bottom: rgb(185, 7, 7)  1px solid;\n            border-top-left-radius: 5%;\n            border-bottom-left-radius: 5%;\n            background: none;\n            color: white;\n            text-align: center;\n            text-justify: auto;\n        }\n        nav .form-inline>input:focus{\n            outline: none;\n            border-top-left-radius: 5%;\n            border-bottom-left-radius: 5%;\n            border-right: none;\n            border-top-right-radius: none;\n            border-bottom-right-radius: none;\n            color: white;\n            text-align: center;\n            text-justify: auto;\n        }\n        nav .form-inline>button{\n            border: none;\n            outline: none;\n            color: rgb(185, 7, 7);\n            background: none;\n        }\n        nav .form-inline>button:hover{\n            border-radius: 100px;\n            background: rgba(50,50,50,0.4);\n        }\n        nav .form-inline>button>i{\n            background: none !important;\n        }\n        ul {\n            text-align: center;\n        }\n    "]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/netflixmini.component.html":
/*!********************************************!*\
  !*** ./src/app/netflixmini.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <navbar></navbar>\r\n    <hr>\r\n    <router-outlet></router-outlet>\r\n    <footer-app></footer-app>\r\n</div>"

/***/ }),

/***/ "./src/app/netflixmini.component.ts":
/*!******************************************!*\
  !*** ./src/app/netflixmini.component.ts ***!
  \******************************************/
/*! exports provided: NetFlixMiniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetFlixMiniComponent", function() { return NetFlixMiniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NetFlixMiniComponent = /** @class */ (function () {
    function NetFlixMiniComponent() {
    }
    NetFlixMiniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'netflix-mini',
            template: __webpack_require__(/*! ./netflixmini.component.html */ "./src/app/netflixmini.component.html"),
        })
    ], NetFlixMiniComponent);
    return NetFlixMiniComponent;
}());



/***/ }),

/***/ "./src/app/search.component.ts":
/*!*************************************!*\
  !*** ./src/app/search.component.ts ***!
  \*************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-result',
            template: "\n        <div class=\"row\">\n            <h1>Search Results</h1>\n        </div>\n    "
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





// "node_modules/popper.js/dist/umd/popper.js",
var apikey = "da51ab669d96ca4f1f9aa7cc589baec8";
//const baseUrl = https://api.themoviedb.org/3/
//const allMoviesUrl = https://api.themoviedb.org/3/discover/movie?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2
//const searchSample = https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//const getByIdbase = "https://api.themoviedb.org/3/movie/"
var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.getMovies = function () {
        var getByIdbase = 'https://api.themoviedb.org/3/movie/';
        // tslint:disable-next-line: max-line-length
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getMovies')));
    };
    MoviesService.prototype.getMovie = function (id) {
        // return movies.find(movie => movie.id === id)
        var getByIdbase = 'https://api.themoviedb.org/3/movie/';
        var url = "" + getByIdbase + id + "?api_key=" + apikey + "&&language=en-US";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getMovie')));
    };
    MoviesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());

var movies = [
    {
        popularity: 52.03,
        vote_count: 19972,
        video: false,
        poster_path: "/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
        id: 155,
        adult: false,
        backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
        original_language: "en",
        original_title: "The Dark Knight",
        genre_ids: [
            28,
            80,
            18,
            53
        ],
        title: "The Dark Knight",
        vote_average: 8.4,
        overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        release_date: new Date("2008-07-18")
    },
    {
        popularity: 71.733,
        vote_count: 30,
        video: false,
        poster_path: "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
        id: 338967,
        adult: false,
        backdrop_path: "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
        original_language: "en",
        original_title: "Zombieland: Double Tap",
        genre_ids: [
            28,
            35,
            27
        ],
        title: "Zombieland: Double Tap",
        vote_average: 7.1,
        overview: "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
        release_date: new Date("2019-10-18")
    },
    {
        popularity: 75.737,
        vote_count: 20,
        video: false,
        poster_path: "/jf2PkR0Yt0ZRMKqtJzwja7JV2Hk.jpg",
        id: 71805,
        adult: false,
        backdrop_path: "/rp5dh6D0MLOIIVHkugv6Z8gBLwg.jpg",
        original_language: "no",
        original_title: "Håkon Håkonsen",
        genre_ids: [
            12,
            10751
        ],
        title: "Shipwrecked",
        vote_average: 6.3,
        overview: "A young Norwegian boy in 1850s England goes to work as a cabin boy and discovers some of his shipmates are actually pirates.",
        release_date: new Date("1990-10-12")
    },
    {
        popularity: 31.429,
        vote_count: 11485,
        video: false,
        poster_path: "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
        id: 321612,
        adult: false,
        backdrop_path: "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
        original_language: "en",
        original_title: "Beauty and the Beast",
        genre_ids: [
            14,
            10749,
            10751
        ],
        title: "Beauty and the Beast",
        vote_average: 6.9,
        overview: "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
        release_date: new Date("2017-03-17")
    },
    {
        popularity: 61.647,
        vote_count: 18,
        video: false,
        poster_path: "/vS6TCG4HiUSCyX30f5wDGQDt1k3.jpg",
        id: 428045,
        adult: false,
        backdrop_path: "/5yiCqzmxYv36GGdc05egCMHedbX.jpg",
        original_language: "ru",
        original_title: "Тайна Печати Дракона",
        genre_ids: [
            12,
            14
        ],
        title: "The Mystery of the Dragon’s Seal",
        vote_average: 5,
        overview: "The Russian Czar Peter the Great commissions Jonathan Green, an English traveller, to map the Far East territories of the Russian Empire. Green sets off on yet another long journey, full of unbelievable adventures, which eventually leads him to China. On his way, the famous cartographer makes breath-taking discoveries, meets mysterious creatures, Chinese princesses, deadly masters of oriental martial arts, and even Lun Van, the King of Dragons, himself. What could be more perilous than looking into the eyes of Viy? Only meeting him again… What will prevail this time — the unflinching scepticism of the scientist or ancient black magic, which has already gained influence over the Far East Lands?",
        release_date: new Date("2019-08-16")
    },
    {
        popularity: 39.898,
        vote_count: 29,
        video: false,
        poster_path: "/w1SBqj0fn1j72ST5i1jauWo3swT.jpg",
        id: 537055,
        adult: false,
        backdrop_path: "/evBWuv3S9AOTwEop6goE3xs1MH0.jpg",
        original_language: "en",
        original_title: "Wonder Woman: Bloodlines",
        genre_ids: [
            28,
            16,
            14
        ],
        title: "Wonder Woman: Bloodlines",
        vote_average: 7.1,
        overview: "When Amazon princess Diana of Themyscira chooses to save fighter pilot Steve Trevor, it’s a choice that will change her world and ours. Fulfilling the role of both ambassador as well as protector, Diana earns the name Wonder Woman from the gracious people of Earth. But her heart is as strong as her will as she is determined to help a troubled and embittered young girl whom has fallen in with a deadly organization known only as Villainy, Inc! Get ready for an exciting adventure packed with brutal battles, myth and wonder!",
        release_date: new Date("2019-10-05")
    },
    {
        popularity: 44.007,
        vote_count: 38,
        video: false,
        poster_path: "/al0aa9WAWk25EK6zhx6fbWSc733.jpg",
        id: 614488,
        adult: false,
        backdrop_path: "/nlxA1dYA30bmKQCBCP4DxGQptel.jpg",
        original_language: "fr",
        original_title: "Banlieusards",
        genre_ids: [
            80,
            18
        ],
        title: "Street Flow",
        vote_average: 7.3,
        overview: "Noumouké, from the suburb of Paris, is about to decide which brother's foot steps to follow - the lawyer student Soulaymaan or the gangster Demba.",
        release_date: new Date("2019-10-12")
    },
    {
        popularity: 73.166,
        vote_count: 2167,
        video: false,
        poster_path: "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
        id: 320288,
        adult: false,
        backdrop_path: "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
        original_language: "en",
        original_title: "Dark Phoenix",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Dark Phoenix",
        vote_average: 6.1,
        overview: "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
        release_date: new Date("2019-06-07")
    },
    {
        popularity: 66.442,
        vote_count: 15491,
        video: false,
        poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        id: 299536,
        adult: false,
        backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
        original_language: "en",
        original_title: "Avengers: Infinity War",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Avengers: Infinity War",
        vote_average: 8.3,
        overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        release_date: new Date("2018-04-27")
    },
    {
        popularity: 36.07,
        vote_count: 14375,
        video: false,
        poster_path: "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
        id: 99861,
        adult: false,
        backdrop_path: "/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg",
        original_language: "en",
        original_title: "Avengers: Age of Ultron",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Avengers: Age of Ultron",
        vote_average: 7.3,
        overview: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        release_date: new Date("2015-05-01")
    },
    {
        popularity: 59.559,
        vote_count: 23427,
        video: false,
        poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        id: 27205,
        adult: false,
        backdrop_path: "/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
        original_language: "en",
        original_title: "Inception",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Inception",
        vote_average: 8.3,
        overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        release_date: new Date("2010-07-16")
    },
    {
        popularity: 28.172,
        vote_count: 6959,
        video: false,
        poster_path: "/3BUmvNKdPLxraqYRyniixn34UjN.jpg",
        id: 812,
        adult: false,
        backdrop_path: "/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
        original_language: "en",
        original_title: "Aladdin",
        genre_ids: [
            12,
            16,
            14,
            10749,
            10751
        ],
        title: "Aladdin",
        vote_average: 7.6,
        overview: "Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.",
        release_date: new Date("1992-11-25")
    },
    {
        popularity: 55.325,
        vote_count: 18985,
        video: false,
        poster_path: "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
        id: 118340,
        adult: false,
        backdrop_path: "/kHex2XdOmGtazk1VfJjp4bl7BIc.jpg",
        original_language: "en",
        original_title: "Guardians of the Galaxy",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Guardians of the Galaxy",
        vote_average: 7.9,
        overview: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        release_date: new Date("2014-08-01")
    },
    {
        popularity: 61.019,
        vote_count: 29,
        video: false,
        poster_path: "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
        id: 568012,
        adult: false,
        backdrop_path: "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
        original_language: "ja",
        original_title: "ワンピーススタンピード",
        genre_ids: [
            28,
            12,
            16
        ],
        title: "One Piece: Stampede",
        vote_average: 8.3,
        overview: "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
        release_date: new Date("2019-10-24")
    },
    {
        popularity: 46.734,
        vote_count: 630,
        video: false,
        poster_path: "/4WH6AZd473lRZ3hUp8TYiv2LfZW.jpg",
        id: 511987,
        adult: false,
        backdrop_path: "/lm4xH0YwFbVvTgdtau1thNK5S6J.jpg",
        original_language: "en",
        original_title: "Crawl",
        genre_ids: [
            28,
            18,
            27,
            53
        ],
        title: "Crawl",
        vote_average: 6.1,
        overview: "When a huge hurricane hits her hometown in Florida, Haley ignores evacuation orders to look for her father. After finding him badly wounded, both are trapped by the flood. With virtually no time to escape the storm, they discover that rising water levels are the least of their problems.",
        release_date: new Date("2019-07-12")
    },
    {
        popularity: 32.665,
        vote_count: 10167,
        video: false,
        poster_path: "/xWlaTLnD8NJMTT9PGOD9z5re1SL.jpg",
        id: 49521,
        adult: false,
        backdrop_path: "/jYLh4mdOqkt30i7LTFs3o02UcGF.jpg",
        original_language: "en",
        original_title: "Man of Steel",
        genre_ids: [
            28,
            12,
            14,
            878
        ],
        title: "Man of Steel",
        vote_average: 6.5,
        overview: "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
        release_date: new Date("2013-06-14")
    },
    {
        popularity: 32.591,
        id: 78,
        video: false,
        vote_count: 7990,
        vote_average: 7.9,
        title: "Blade Runner",
        release_date: new Date("1982-06-25"),
        original_language: "en",
        original_title: "Blade Runner",
        genre_ids: [
            878,
            18,
            53
        ],
        backdrop_path: "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
        adult: false,
        overview: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        poster_path: "/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg"
    },
    {
        popularity: 53.424,
        vote_count: 11022,
        video: false,
        poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
        id: 245891,
        adult: false,
        backdrop_path: "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
        original_language: "en",
        original_title: "John Wick",
        genre_ids: [
            28,
            53
        ],
        title: "John Wick",
        vote_average: 7.2,
        overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
        release_date: new Date("2014-10-24")
    },
    {
        popularity: 58.073,
        vote_count: 8686,
        video: false,
        poster_path: "/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg",
        id: 102651,
        adult: false,
        backdrop_path: "/tO4xw0P4mdia3EcS6pHkox3cOIy.jpg",
        original_language: "en",
        original_title: "Maleficent",
        genre_ids: [
            28,
            12,
            14,
            10749,
            10751
        ],
        title: "Maleficent",
        vote_average: 7.1,
        overview: "A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.",
        release_date: new Date("2014-05-30")
    },
    {
        popularity: 46.825,
        vote_count: 5377,
        video: false,
        poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        id: 324857,
        adult: false,
        backdrop_path: "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
        original_language: "en",
        original_title: "Spider-Man: Into the Spider-Verse",
        genre_ids: [
            28,
            12,
            16,
            35,
            878
        ],
        title: "Spider-Man: Into the Spider-Verse",
        vote_average: 8.4,
        overview: "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
        release_date: new Date("2018-12-14")
    }
];


/***/ }),

/***/ "./src/app/services/tvshows.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/tvshows.service.ts ***!
  \*********************************************/
/*! exports provided: TvShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsService", function() { return TvShowsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var apikey = "da51ab669d96ca4f1f9aa7cc589baec8";
//const baseUrl = https://api.themoviedb.org/3/
//const allMoviesUrl = https://api.themoviedb.org/3/discover/movie?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
//const searchSample = https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//const getByIdbase = "https://api.themoviedb.org/3/movie/"
var TvShowsService = /** @class */ (function () {
    function TvShowsService(http) {
        this.http = http;
    }
    TvShowsService.prototype.getTvshows = function () {
        var getByIdbase = 'https://api.themoviedb.org/3/tv/';
        // tslint:disable-next-line: max-line-length
        var url = "https://api.themoviedb.org/3/discover/tv?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTvshows')));
    };
    TvShowsService.prototype.getTvshow = function (id) {
        // return movies.find(movie => movie.id === id)
        var getByIdbase = 'https://api.themoviedb.org/3/tv/';
        var url = "" + getByIdbase + id + "?api_key=" + apikey + "&&language=en-US";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTvshow')));
    };
    TvShowsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TvShowsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TvShowsService);
    return TvShowsService;
}());



/***/ }),

/***/ "./src/app/tvshows.component.ts":
/*!**************************************!*\
  !*** ./src/app/tvshows.component.ts ***!
  \**************************************/
/*! exports provided: TvShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsComponent", function() { return TvShowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tvshows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tvshows.service */ "./src/app/services/tvshows.service.ts");



var TvShowsComponent = /** @class */ (function () {
    function TvShowsComponent(tvshowsService) {
        this.tvshowsService = tvshowsService;
        this.baseimgUrl = "https://image.tmdb.org/t/p/w300";
    }
    TvShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tvshowsService.getTvshows().subscribe(function (tvshows) {
            _this.tvshows = tvshows.results;
        });
    };
    TvShowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tv-shows',
            template: "\n    <div class=\"row\">\n        <h4 class=\"col-sm-5 text-white\" style=\"margin-left: 0px\">TV Shows</h4>\n        <div class=\"col-sm-7\"></div>\n        <div class=\"row\">\n                <div class=\"well thumbnail m-2 col-md-3\" [routerLink]=\"['/tvshow', tvshow.id]\"  *ngFor=\"let tvshow of tvshows\"> \n                            <img class=\"img-responsive img-border\" height=\"80%\" my-5 width=\"100%\"  [src]=\"baseimgUrl+tvshow?.poster_path\" [alt]=\"tvshow?.name\"/><br>\n                            <span class=\"movie-title text-align-center text-white font-weight-16\">{{tvshow?.name}}</span><br>\n                            <span class=\"mr-1 text-white font-weight-16\">Popularity:<em class=\"badge bg-danger text-white\">{{tvshow?.popularity}}</em></span>\n                            <span class=\"mr-1 float-right text-white font-weight-16\">Vote:<em class=\"badge bg-success text-white\">{{tvshow?.vote_count}}</em></span><br>\n                            <span class=\"clearfix mr-1 text-white font-weight-16\">Released: <em class=\"float-right\">{{tvshow?.first_air_date | date}}</em></span>\n                            \n                </div>\n        </div>\n    </div>",
            styles: ["\n        .thumbnail{ \n          cursor: pointer;\n        }\n        .thumbnail:hover{\n          background-color: rgba(20,20,20,0.5);\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tvshows_service__WEBPACK_IMPORTED_MODULE_2__["TvShowsService"]])
    ], TvShowsComponent);
    return TvShowsComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alhaji-Barrie\ng-netflixMiniApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map