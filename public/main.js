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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_general_players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/players/players.component */ "./src/app/components/general/players/players.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/players' },
    { path: 'players', component: _components_general_players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"] },
    { path: '**', redirectTo: '/players' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'players';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("test 123");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            /*templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']*/
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _components_general_players_players_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/players/players.component */ "./src/app/components/general/players/players.component.ts");
/* harmony import */ var _components_general_players_grid_players_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/players-grid/players-grid.component */ "./src/app/components/general/players-grid/players-grid.component.ts");
/* harmony import */ var _components_general_players_search_players_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/players-search/players-search.component */ "./src/app/components/general/players-search/players-search.component.ts");
/* harmony import */ var _services_players_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/players.interceptor */ "./src/app/services/players.interceptor.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_general_players_players_component__WEBPACK_IMPORTED_MODULE_6__["PlayersComponent"],
                _components_general_players_grid_players_grid_component__WEBPACK_IMPORTED_MODULE_7__["PlayersGridComponent"],
                _components_general_players_search_players_search_component__WEBPACK_IMPORTED_MODULE_8__["PlayersSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_players_interceptor__WEBPACK_IMPORTED_MODULE_9__["PlayersInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/general/players-grid/players-grid.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/general/players-grid/players-grid.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"grid-container\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table\">\r\n                <table class=\"table table-striped table-hover\">\r\n                    <thead>\r\n                        <tr class=\"sorter-wrapper\">\r\n                            <th (click)=\"sort('firstName')\">First Name \r\n                                <span class=\"sorter glyphicon glyphicon-sort\"></span>\r\n                            </th>\r\n                            <th (click)=\"sort('lastName')\">Last Name\r\n                                <span class=\"sorter glyphicon glyphicon-sort\"></span>\r\n                            </th>\r\n                            <th (click)=\"sort('position')\">Position\r\n                                <span class=\"sorter glyphicon glyphicon-sort\"></span>\r\n                            </th>\r\n                            <th (click)=\"sort('nationality')\">Nationality\r\n                                <span class=\"sorter glyphicon glyphicon-sort\"></span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let player of players\">\r\n                            <td>{{ player.firstName | trim }}</td>\r\n                            <td>{{ player.lastName | trim }}</td>\r\n                            <td>{{ player.position }}</td>\r\n                            <td>{{ player.nationality | trim }}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"!players.length\">\r\n                            <td colspan=\"4\">No Records Found</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/general/players-grid/players-grid.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/general/players-grid/players-grid.component.ts ***!
  \***************************************************************************/
/*! exports provided: PlayersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersGridComponent", function() { return PlayersGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sorter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/sorter.service */ "./src/app/services/sorter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersGridComponent = /** @class */ (function () {
    function PlayersGridComponent(sorterService) {
        this.sorterService = sorterService;
        this.players = [];
    }
    PlayersGridComponent.prototype.ngOnInit = function () {
    };
    PlayersGridComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.players, prop);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PlayersGridComponent.prototype, "players", void 0);
    PlayersGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players-grid',
            template: __webpack_require__(/*! ./players-grid.component.html */ "./src/app/components/general/players-grid/players-grid.component.html")
        }),
        __metadata("design:paramtypes", [_services_sorter_service__WEBPACK_IMPORTED_MODULE_1__["SorterService"]])
    ], PlayersGridComponent);
    return PlayersGridComponent;
}());



/***/ }),

/***/ "./src/app/components/general/players-search/players-search.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/general/players-search/players-search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <span class=\"obj-align spacer\" >Search Type:</span>\r\n\r\n        <span class=\"obj-align spacer\" *ngFor=\"let searchType of model.searchTypes; let idx = index\">\r\n            <input type=\"radio\" id=\"searchTypes\"\r\n                name=\"searchTypes\" \r\n                class=\"class{{idx}}\"\r\n                [checked]=\"idx === 0\" \r\n                [value]=\"searchType.value\" \r\n                (change)=\"onSelectionChange(searchType.value)\">{{searchType.description}}\r\n        </span>\r\n        \r\n        <input type=\"text\" id=\"searchText\" class=\"obj-align spacer\" name=\"searchText\" [(ngModel)]=\"model.searchText\" [hidden]=\"selectedSearchType == 1\" />\r\n\r\n        <button type=\"button\" id=\"btnSearch\" class=\"obj-align spacer btn btn-primary\" (click)=\"searchCondition()\" [disabled]=\"model.searchText.length == 0 && selectedSearchType == 2\">\r\n            <span class=\"glyphicon glyphicon-search\">&nbsp;Search</span>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/general/players-search/players-search.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/general/players-search/players-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PlayersSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersSearchComponent", function() { return PlayersSearchComponent; });
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

var PlayersSearchComponent = /** @class */ (function () {
    function PlayersSearchComponent() {
        this.model = { searchTypes: [{ value: 1, description: 'All' }, { value: 2, description: 'Criteria' }], searchText: '' };
        this.selectedSearchType = 1;
        this.seachCriteria = { type: 1, searchText: '' };
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PlayersSearchComponent.prototype.ngOnInit = function () {
    };
    PlayersSearchComponent.prototype.searchCondition = function () {
        this.seachCriteria = { type: this.selectedSearchType, searchText: this.model.searchText };
        this.searchChanged.emit(this.seachCriteria);
    };
    PlayersSearchComponent.prototype.onSelectionChange = function (type) {
        this.selectedSearchType = type;
        if (type === 1) {
            this.model.searchText = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlayersSearchComponent.prototype, "searchChanged", void 0);
    PlayersSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players-search',
            template: __webpack_require__(/*! ./players-search.component.html */ "./src/app/components/general/players-search/players-search.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PlayersSearchComponent);
    return PlayersSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/general/players/players.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/general/players/players.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <h1>List of Players</h1>\r\n        </div>\r\n    </div>\r\n    <fieldset class=\"fieldset-formated\">\r\n        <legend class=\"legend-formated\">Database Search</legend>\r\n        <br>\r\n        <app-players-search (searchChanged)=\"searchData($event)\"></app-players-search>\r\n        <br>\r\n    </fieldset>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"navbar\">\r\n                <br><br>\r\n                <fieldset class=\"fieldset-formated\">\r\n                    <legend class=\"legend-formated\">Grid Filter</legend>\r\n                    <br>\r\n                    <app-filter-text [label]=\"label\" \r\n                            [recordsFound]=\"recordsFound\" \r\n                            [newSaerch]=\"newSaerch\" \r\n                            (changed)=\"filterChanged($event)\"></app-filter-text>\r\n                    <br>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-players-grid [players]=\"filteredPlayers\"></app-players-grid>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <app-pagination [totalItems]=\"totalRecords\" \r\n            [pageSize]=\"pageSize\" \r\n            (pageChanged)=\"pageChanged($event)\"></app-pagination>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/general/players/players.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/general/players/players.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data-filter.service */ "./src/app/services/data-filter.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(router, playerService, dataFilter, storageService) {
        this.router = router;
        this.playerService = playerService;
        this.dataFilter = dataFilter;
        this.storageService = storageService;
        this.players = [];
        this.filteredPlayers = [];
        this.searchFilter = { type: 1, searchText: '' };
        this.totalRecords = 0;
        this.pageSize = 10;
        this.grandTotalRecords = 0;
        this.label = 'Filter table';
        this.recordsFound = false;
        this.newSaerch = 0;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        this.title = 'Players';
        this.storageService.setUserName('admin');
        this.storageService.setUserPassword('test123');
    };
    PlayersComponent.prototype.getPlayersWithPagination = function (page) {
        var _this = this;
        this.playerService.getPlayersWithPagination((page - 1) * this.pageSize, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (response) {
            _this.players = _this.filteredPlayers = response.results;
            _this.totalRecords = response.totalRecords;
            _this.grandTotalRecords = response.totalRecords;
            _this.recordsFound = _this.grandTotalRecords > 0;
        }, function (err) { return console.log(err); }, function () { return console.log('getPlayersWithPagination() retrieved players'); });
    };
    PlayersComponent.prototype.findPlayersWithPagination = function (searchCriteria, page) {
        var _this = this;
        this.playerService.findPlayersWithPagination(searchCriteria, (page - 1) * this.pageSize, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (response) {
            _this.players = _this.filteredPlayers = response.results;
            _this.totalRecords = response.totalRecords;
            _this.grandTotalRecords = response.totalRecords;
            _this.recordsFound = _this.grandTotalRecords > 0;
        }, function (err) { return console.log(err); }, function () { return console.log('getPlayersWithPagination() retrieved players'); });
    };
    PlayersComponent.prototype.filterChanged = function (filterText) {
        if (filterText && this.players) {
            var props = ['firstName', 'lastName', 'position', 'nationality'];
            this.filteredPlayers = this.dataFilter.filter(this.players, props, filterText);
            this.totalRecords = this.filteredPlayers.length;
        }
        else {
            this.filteredPlayers = this.players;
            this.totalRecords = this.grandTotalRecords;
        }
    };
    PlayersComponent.prototype.pageChanged = function (page) {
        if (this.searchFilter.type === 1) {
            this.getPlayersWithPagination(page);
        }
        else {
            this.findPlayersWithPagination(this.searchFilter.searchText, page);
        }
    };
    PlayersComponent.prototype.searchData = function (criteria) {
        this.searchFilter = criteria;
        this.newSaerch++;
        if (criteria.type === 1) {
            this.getPlayersWithPagination(1);
        }
        else {
            this.findPlayersWithPagination(criteria.searchText, 1);
        }
    };
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/components/general/players/players.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _services_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/filterText/filter-text.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/shared/filterText/filter-text.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spacer\">\n    {{label}}:\n    <input type=\"text\" name=\"filter\" id=\"txtFilter\"\n            [(ngModel)]=\"model.filter\" \n            (keyup)=\"filterChanged($event)\" [disabled]=\"!recordsFound\" />\n    \n</div>"

/***/ }),

/***/ "./src/app/components/shared/filterText/filter-text.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/shared/filterText/filter-text.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2ZpbHRlclRleHQvZmlsdGVyLXRleHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shared/filterText/filter-text.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/shared/filterText/filter-text.component.ts ***!
  \***********************************************************************/
/*! exports provided: FilterTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextComponent", function() { return FilterTextComponent; });
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

var FilterTextComponent = /** @class */ (function () {
    function FilterTextComponent() {
        this.model = { filter: null };
        this.label = 'Filter';
        this.recordsFound = false;
        this.newSaerch = 0;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterTextComponent.prototype.ngOnChanges = function () {
        this.resetFilter();
    };
    FilterTextComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter);
    };
    FilterTextComponent.prototype.resetFilter = function () {
        this.model.filter = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterTextComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FilterTextComponent.prototype, "recordsFound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FilterTextComponent.prototype, "newSaerch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterTextComponent.prototype, "changed", void 0);
    FilterTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-text',
            template: __webpack_require__(/*! ./filter-text.component.html */ "./src/app/components/shared/filterText/filter-text.component.html"),
            styles: [__webpack_require__(/*! ./filter-text.component.scss */ "./src/app/components/shared/filterText/filter-text.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterTextComponent);
    return FilterTextComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/pagination/pagination.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/pagination/pagination.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"!isVisible\">\n    <ul class=\"pagination\">\n      <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\n        <a aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\n        <a>{{ page }}</a>\n      </li>\n      <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\n        <a aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/shared/pagination/pagination.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/pagination/pagination.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n  background-color: #027FF4;\n  border-color: #027FF4; }\n\n.pagination a {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcGFnaW5hdGlvbi9DOlxcRGV2ZWxvcG1lbnRcXHBsYXllcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxccGFnaW5hdGlvblxccGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmZvY3VzLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZGNDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyN0ZGNDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gYSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/shared/pagination/pagination.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this.pagerPageSize;
        },
        set: function (size) {
            this.pagerPageSize = size;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: function () {
            return this.pagerTotalItems;
        },
        set: function (itemCount) {
            this.pagerTotalItems = itemCount;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.update = function () {
        this.pages = [];
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (var i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    };
    PaginationComponent.prototype.previousNext = function (direction, event) {
        var page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    };
    PaginationComponent.prototype.changePage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "pageSize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "totalItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/components/shared/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/pipes/trim.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/components/shared/pipes/trim.pipe.ts ***!
  \******************************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.trim();
    };
    TrimPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'trim' })
    ], TrimPipe);
    return TrimPipe;
}());



/***/ }),

/***/ "./src/app/services/data-filter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data-filter.service.ts ***!
  \*************************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataFilterService = /** @class */ (function () {
    function DataFilterService() {
    }
    DataFilterService.prototype.filter = function (datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            var filtered = datasource.filter(function (item) {
                var match = false;
                for (var _i = 0, filterProperties_1 = filterProperties; _i < filterProperties_1.length; _i++) {
                    var prop = filterProperties_1[_i];
                    var propVal = '';
                    if (item[prop]) {
                        propVal = item[prop].toString().toUpperCase();
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    };
    DataFilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataFilterService);
    return DataFilterService;
}());



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.getPlayersWithPagination = function (page, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/" + page + "/" + pageSize, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var totalRecords = +res.headers.get('X-PlayerCount');
            var players = res.body;
            return {
                results: players,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.findPlayersWithPagination = function (searchText, page, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/" + searchText + "/" + page + "/" + pageSize, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var totalRecords = +res.headers.get('X-PlayerCount');
            var players = res.body;
            return {
                results: players,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.getPlayers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (customers) {
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'Node.js server error');
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/players.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/services/players.interceptor.ts ***!
  \*************************************************/
/*! exports provided: PlayersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersInterceptor", function() { return PlayersInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersInterceptor = /** @class */ (function () {
    function PlayersInterceptor(storageService) {
        this.storageService = storageService;
    }
    PlayersInterceptor.prototype.intercept = function (request, next) {
        console.log('user credentials', btoa(this.storageService.getUserName() + ':' + this.storageService.getUserPassword()));
        request = request.clone({
            setHeaders: {
                'x-access-token': btoa(this.storageService.getUserName() + ':' + this.storageService.getUserPassword())
            }
        });
        return next.handle(request);
    };
    PlayersInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], PlayersInterceptor);
    return PlayersInterceptor;
}());



/***/ }),

/***/ "./src/app/services/sorter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sorter.service.ts ***!
  \********************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SorterService = /** @class */ (function () {
    function SorterService() {
        this.property = null;
        this.direction = 1;
    }
    SorterService.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            aVal = a[prop];
            bVal = b[prop];
            if (_this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (_this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    SorterService.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    SorterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
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

//import { environment } from 'src/environments/environment';
//import { Recipient, Product, ProductOrder } from '../Model/data.model';
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.userName = 'USER_NAME';
        this.userPassword = 'USER_PASSWORD';
        this.hasClientStorage = false;
        this.hasClientStorage = window.localStorage !== undefined;
    }
    /*public getHeader(): null | string {
      if (!this.hasClientStorage) {
        return null;
      }
      return localStorage.getItem(environment.header);
    }
  
    public setHeader(): void {
      localStorage.setItem(environment.header, environment.headerValue);
    }
  
    public resetHeader(): void {
      localStorage.removeItem(environment.header);
    }*/
    StorageService.prototype.getUserName = function () {
        if (!this.hasClientStorage) {
            return null;
        }
        return localStorage.getItem(this.userName);
    };
    StorageService.prototype.setUserName = function (user) {
        localStorage.setItem(this.userName, user);
    };
    StorageService.prototype.getUserPassword = function () {
        if (!this.hasClientStorage) {
            return null;
        }
        return localStorage.getItem(this.userPassword);
    };
    StorageService.prototype.setUserPassword = function (pwd) {
        localStorage.setItem(this.userPassword, pwd);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/pagination/pagination.component */ "./src/app/components/shared/pagination/pagination.component.ts");
/* harmony import */ var _components_shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/pipes/trim.pipe */ "./src/app/components/shared/pipes/trim.pipe.ts");
/* harmony import */ var _components_shared_filterText_filter_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/filterText/filter-text.component */ "./src/app/components/shared/filterText/filter-text.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: [_components_shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_4__["TrimPipe"], _components_shared_filterText_filter_text_component__WEBPACK_IMPORTED_MODULE_5__["FilterTextComponent"], _components_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components_shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_4__["TrimPipe"], _components_shared_filterText_filter_text_component__WEBPACK_IMPORTED_MODULE_5__["FilterTextComponent"], _components_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
        })
    ], SharedModule);
    return SharedModule;
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
    production: false,
    baseUrl: '/api/players',
    securityToken: 'xxxjsk-sdss-ddd-wsre-dsfsdfd'
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

module.exports = __webpack_require__(/*! C:\Development\players\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map