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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");



//import { HttpClient } from '@angular/common/http';






var AppComponent = /** @class */ (function () {
    function AppComponent(http, mainService) {
        var _this = this;
        this.http = http;
        this.mainService = mainService;
        this.title = 'COVID';
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        window["obj"] = this;
        this.http.get('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise').subscribe(function (data) {
            console.log(data);
            _this.completeData = data['data'];
            _this.stateWise = _this.completeData.statewise;
            _this.total = _this.completeData.total;
            window['stateWise'] = _this.completeData.statewise;
            window['stateName'] = _this.stateName;
            window['stateConfirm'] = _this.stateConfirm;
            window['stateActive'] = _this.stateActive;
            window['stateRecover'] = _this.stateRecover;
            window['stateDeath'] = _this.stateDeath;
            _this.http.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history")
                .subscribe(function (d) {
                console.log(d);
                var l = d['data'].history.length;
                var p;
                if (l >= 2) {
                    p = l - 2;
                }
                else {
                    p = l - 1;
                }
                _this.oldData = d['data'].history[p];
                _this.getCalc(_this.total, _this.oldData.total);
            });
            _this.drawStateWiseChart(_this.stateWise);
            mainService.drawStateWiseChart();
            _this.drawIndiaMap();
        }, (function (err) {
            console.log(err);
        }));
    }
    AppComponent.prototype.drawStateWiseChart = function (actualStateWiseData) {
        var stateWiseData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, actualStateWiseData);
        var sortedData = [];
        for (var d in stateWiseData) {
            sortedData.push(stateWiseData[d]);
        }
        sortedData.sort(function (a, b) {
            return b["active"] - a["active"];
        });
        var filteredSortedData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(sortedData);
        filteredSortedData = underscore__WEBPACK_IMPORTED_MODULE_3__["reject"](filteredSortedData, function (d) { return d["active"] === 0; });
        var categories = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](filteredSortedData, 'state');
        var activeCases = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](filteredSortedData, 'active');
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Current active COVID-19 cases'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Active cases'
                }
            },
            tooltip: {
                pointFormat: 'Active cases: <b>{point.y:.0f}</b>'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: true
            },
            series: [{
                    name: 'States',
                    data: activeCases
                }]
        };
    };
    AppComponent.prototype.drawIndiaMap = function () {
        var data = [
            ['madhya pradesh', 10, 4],
            ['uttar pradesh', 1],
            ['karnataka', 2],
            ['nagaland', 3],
            ['bihar', 4],
            ['lakshadweep', 5],
            ['andaman and nicobar', 6],
            ['assam', 7],
            ['west bengal', 8],
            ['puducherry', 9],
            ['daman and diu', 10],
            ['gujarat', 11],
            ['rajasthan', 12],
            ['dadara and nagar havelli', 13],
            ['chhattisgarh', 14],
            ['tamil nadu', 15],
            ['chandigarh', 16],
            ['punjab', 17],
            ['haryana', 18],
            ['andhra pradesh', 19],
            ['maharashtra', 20],
            ['himachal pradesh', 21],
            ['meghalaya', 22],
            ['kerala', 23],
            ['telangana', 24],
            ['mizoram', 25],
            ['tripura', 26],
            ['manipur', 27],
            ['arunanchal pradesh', 28],
            ['jharkhand', 29],
            ['goa', 30],
            ['nct of delhi', 31],
            ['odisha', 32],
            ['jammu and kashmir', 33],
            ['sikkim', 34],
            ['uttarakhand', 35]
        ];
        var data1 = JSON.parse(JSON.stringify(this.stateWise));
        underscore__WEBPACK_IMPORTED_MODULE_3__["each"](data1, function (e) { e['state'] = e['state'].toLowerCase(); });
        var mapData = [];
        var l = underscore__WEBPACK_IMPORTED_MODULE_3__["findWhere"](this.stateWise, { state: "Ladakh" });
        for (var i = 0; i < data1.length; i++) {
            if (data1[i]['state'] === 'delhi') {
                mapData.push(['nct of delhi', data1[i]['confirmed']]);
            }
            else if (data1[i]['state'] === "jammu and kashmir") {
                mapData.push(['jammu and kashmir', (data1[i]['confirmed'] + l['confirmed'])]);
            }
            else if (data1[i]['state'] === "arunachal pradesh") {
                mapData.push(["arunanchal pradesh", data1[i]['confirmed']]);
            }
            else {
                mapData.push([data1[i]['state'], data1[i]['confirmed']]);
            }
        }
        var maxValue = mapData[0][1];
        var map = __webpack_require__(/*! @highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json */ "./node_modules/@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json");
        var Highcharts1 = __webpack_require__(/*! highcharts/highmaps */ "./node_modules/highcharts/highmaps.js");
        var chart1 = Highcharts1.mapChart('container1', {
            chart: {
                map: map
            },
            title: {
                text: ''
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                // tickInterval: 2.5,
                // max: 5,
                // min: -5,
                stops: [
                    [0, "#fafafa"],
                    [0.05, "#fcd2d2"],
                    [0.1, "#fabebe"],
                    [0.15, "#fcb1b1"],
                    [0.2, "#fca4a4"],
                    [0.25, "#fa9696"],
                    [0.3, "#fa8787"],
                    [0.35, "#fc7979"],
                    [0.4, "#fa6e6e"],
                    [0.45, "#fa6464"],
                    [0.5, "#fc5656"],
                    [0.65, "#fa4646"],
                    [0.7, "#fc3a3a"],
                    [0.75, "#fa2d2d"],
                    [0.8, "#ff2424"],
                    [0.85, "#fc1717"],
                    [0.9, "#fc0f0f"],
                    [0.95, "#fc0a0a"],
                    [1, "#ff0000"]
                ],
                labels: {
                    style: {
                        color: "#dffcff"
                    }
                },
                gridLineWidth: 0
            },
            series: [{
                    data: mapData,
                    name: 'Active cases',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                }],
            tooltip: {
                style: { opacity: 0 },
                // test: this.stateConfirm =  window['stateName'],
                formatter: function () {
                    var point = this.point;
                    var s = {};
                    var t = {};
                    // _.findWhere(window['stateWise'],{state.to:point.name.toLowerCase()});
                    for (var i = 0; i < window['stateWise'].length; i++) {
                        if (point.name.toLowerCase() === window['stateWise'][i].state.toLowerCase()) {
                            s = window['stateWise'][i];
                        }
                        if (point.name.toUpperCase() === "JAMMU AND KASHMIR") {
                            t = underscore__WEBPACK_IMPORTED_MODULE_3__["findWhere"](window['stateWise'], { state: "Ladakh" });
                        }
                        if (point.name === 'NCT of Delhi') {
                            s = underscore__WEBPACK_IMPORTED_MODULE_3__["findWhere"](window['stateWise'], { state: "Delhi" });
                        }
                        if (point.name.toLowerCase() === 'arunanchal pradesh') {
                            s = underscore__WEBPACK_IMPORTED_MODULE_3__["findWhere"](window['stateWise'], { state: "Arunachal Pradesh" });
                        }
                    }
                    if (t['state']) {
                        window['obj']['stateName'] = "J & K and LADAKH";
                        window['obj']['stateConfirm'] = s['confirmed'] + t['confirmed'];
                        window['obj']['stateActive'] = s['active'] + t['active'];
                        window['obj']['stateRecover'] = s['recovered'] + t['recovered'];
                        window['obj']['stateDeath'] = s['deaths'] + t['deaths'];
                    }
                    else {
                        window['obj']['stateName'] = s['state'].toUpperCase();
                        window['obj']['stateConfirm'] = s['confirmed'];
                        window['obj']['stateActive'] = s['active'];
                        window['obj']['stateRecover'] = s['recovered'];
                        window['obj']['stateDeath'] = s['deaths'];
                    }
                }
            }
        });
        var x = underscore__WEBPACK_IMPORTED_MODULE_3__["findWhere"](window['stateWise'], { state: "Maharashtra" });
        window['obj']['stateName'] = x['state'].toUpperCase();
        window['obj']['stateConfirm'] = x['confirmed'];
        window['obj']['stateActive'] = x['active'];
        window['obj']['stateRecover'] = x['recovered'];
        window['obj']['stateDeath'] = x['deaths'];
    };
    AppComponent.prototype.getCalc = function (total, oldData) {
        this.totalConfimed = total.confirmed;
        this.totalRecoverd = total.recovered;
        this.totalDeath = total.deaths;
        this.totalActive = total.active;
        this.recoveredPercent = ((this.totalRecoverd / this.totalConfimed) * 100).toFixed(2);
        this.activePercent = ((this.totalActive / this.totalConfimed) * 100).toFixed(2);
        this.deathPercent = ((this.totalDeath / this.totalConfimed) * 100).toFixed(2);
        this.diffConfirmed = (total.confirmed - oldData.confirmed > -1) ? "(+" + (total.confirmed - oldData.confirmed) + ")" : "(" + (total.recovered - oldData.recovered) + ")";
        this.diffRecovered = (total.recovered - oldData.recovered > -1) ? "(+" + (total.recovered - oldData.recovered) + ")" : "(" + (total.recovered - oldData.recovered) + ")";
        ;
        this.diffActive = (total.active - oldData.active > -1) ? "(+" + (total.active - oldData.active) + ")" : "(" + (total.active - oldData.active) + ")";
        ;
        this.diffDeath = (total.deaths - oldData.deaths > -1) ? "(+" + (total.deaths - oldData.deaths) + ")" : "(" + (total.deaths - oldData.deaths) + ")";
        ;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 82, vars: 20, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], [1, "main-sidenav-container", 3, "backdropClick"], [3, "opened", "fixedInViewport"], ["mat-button", "", 3, "click"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-md-3"], ["label", "Confirmed Cases", 3, "total", "diff"], ["label", "Active Cases", 3, "total", "percent", "diff"], [1, "text"], [2, "color", "#05b025"], [2, "font-size", "12px", "vertical-align", "middle"], [2, "font-size", "12px"], ["id", "recoveredCase", 2, "width", "100%", "height", "60px", "display", "block"], [2, "color", "#5c5c5c"], ["id", "death", 2, "width", "100%", "height", "60px", "display", "block"], [1, "col-sm-12", "col-md-6"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"], [2, "position", "absolute", "z-index", "999"], [2, "color", "#E53935", "font-size", "70%", "font-weight", "700"], [2, "background-color", "#FFCDD2", "border-radius", "5px", "width", "80%", "margin-bottom", "5px", "min-width", "60px", "max-width", "70px"], [2, "padding", "0.25rem"], [2, "font-size", "50%", "padding-left", "0.25rem", "color", "#E53935", "margin-bottom", "0"], [2, "font-size", "90%", "font-weight", "bold", "padding-left", "0.25rem", "margin-bottom", "0", "color", "#E53935"], [2, "background-color", "#E3F2FD", "border-radius", "5px", "width", "80%", "margin-bottom", "5px", "min-width", "60px", "max-width", "70px"], [2, "font-size", "50%", "padding-left", "0.25rem", "color", "#2962FF", "margin-bottom", "0"], [2, "font-size", "90%", "font-weight", "bold", "margin-bottom", "0", "color", "#2962FF", "padding-left", "0.25rem"], [2, "background-color", "#B9F6CA", "border-radius", "5px", "width", "80%", "margin-bottom", "5px", "min-width", "60px", "max-width", "70px"], [2, "font-size", "50%", "padding-left", "0.25rem", "color", "#388E3C", "margin-bottom", "0"], [2, "font-size", "90%", "font-weight", "bold", "margin-bottom", "0", "color", "#388E3C", "padding-left", "0.25rem"], [2, "background-color", "#EEEEEE", "border-radius", "5px", "width", "80%", "margin-bottom", "5px", "min-width", "60px", "max-width", "70px"], [2, "font-size", "50%", "padding-left", "0.25rem", "color", "#9E9E9E", "margin-bottom", "0"], [2, "font-size", "90%", "font-weight", "bold", "margin-bottom", "0", "color", "#9E9E9E", "padding-left", "0.25rem"], ["id", "container1", 2, "width", "100%", "height", "100%", "display", "block"], [1, "w-100"], [1, "col"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.opened = !ctx.opened; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " COVID-19 India Status ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-sidenav-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("backdropClick", function AppComponent_Template_mat_sidenav_container_backdropClick_5_listener() { return ctx.opened = !ctx.opened; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-sidenav", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.opened = !ctx.opened; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Hello from Sidenav-Content ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-divider");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-card", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-card2", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Recovered Cases");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Deasced Cases");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "highcharts-chart", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "CONFIRMED");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "ACTIVE");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h5", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "RECOVERED");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h5", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "DEATHS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened)("fixedInViewport", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("total", ctx.totalConfimed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("diff", ctx.diffConfirmed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("total", ctx.totalActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("percent", ctx.activePercent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("diff", ctx.diffActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalRecoverd);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.diffRecovered);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.recoveredPercent, "% of total");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalDeath);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.diffDeath);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.deathPercent, "% of total");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stateName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stateConfirm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stateActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stateRecover);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.stateDeath);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm5/highcharts-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _card2_card2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card2/card2.component */ "./src/app/card2/card2.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/bidi.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/grid.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_main_service__WEBPACK_IMPORTED_MODULE_15__["MainService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
        _card2_card2_component__WEBPACK_IMPORTED_MODULE_17__["Card2Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
                    _card2_card2_component__WEBPACK_IMPORTED_MODULE_17__["Card2Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]
                ],
                providers: [_main_service__WEBPACK_IMPORTED_MODULE_15__["MainService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Dir"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexOrderDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexOffsetDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultShowHideDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultImgSrcDirective"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatec"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatef"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatei"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatel"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privateo"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privater"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privateu"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privateba"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatebd"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["ɵgrid_privatebg"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridAvatarCssMatStyler"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardAvatar"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
    _card2_card2_component__WEBPACK_IMPORTED_MODULE_17__["Card2Component"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.chartOptions = {};
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.drawCards = function () {
        var Highcharts = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
        var chart1 = Highcharts.chart('test', {
            chart: {
                type: 'area',
                backgroundColor: null,
                brderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#ff0000'],
                            [1, '#f4f4f4']
                        ]
                    }, lineColor: "#ff0000",
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [{
                    name: '',
                    data: [3, 10, 25, 60, 54, 80]
                }]
        });
        var chart2 = Highcharts.chart('activeCases', {
            chart: {
                type: 'area',
                backgroundColor: null,
                brderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [{
                    name: '',
                    data: [3, 10, 15, 30, 44, 50]
                }]
        });
        var chart3 = Highcharts.chart('recoveredCase', {
            chart: {
                type: 'area',
                backgroundColor: null,
                brderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#05b025'],
                            [1, '#f4f4f4']
                        ]
                    }, lineColor: "#05b025",
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [{
                    name: '',
                    data: [3, 5, 7, 15, 25, 37]
                }]
        });
        var chart4 = Highcharts.chart('death', {
            chart: {
                type: 'area',
                backgroundColor: null,
                brderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#5c5c5c'],
                            [1, '#f4f4f4']
                        ]
                    }, lineColor: "#5c5c5c",
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [{
                    name: '',
                    data: [1, 4, 6, 8, 13, 25]
                }]
        });
        // HC_exporting(this.Highcharts);
    };
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { label: "label", total: "total", diff: "diff" }, decls: 9, vars: 3, consts: [[1, "text"], [2, "color", "#ff0000"], [2, "font-size", "12px", "vertical-align", "middle"], ["id", "test", 2, "width", "100%", "height", "60px", "display", "block"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.diff);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
    return CardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], diff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/card2/card2.component.ts":
/*!******************************************!*\
  !*** ./src/app/card2/card2.component.ts ***!
  \******************************************/
/*! exports provided: Card2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card2Component", function() { return Card2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Card2Component = /** @class */ (function () {
    function Card2Component() {
        this.chartOptions = {};
    }
    Card2Component.prototype.ngOnInit = function () {
    };
    Card2Component.prototype.drawCards = function () {
        var Highcharts = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
        ;
        // HC_exporting(this.Highcharts);
    };
    Card2Component.ɵfac = function Card2Component_Factory(t) { return new (t || Card2Component)(); };
    Card2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Card2Component, selectors: [["app-card2"]], inputs: { label: "label", total: "total", percent: "percent", diff: "diff" }, decls: 10, vars: 4, consts: [[1, "text"], [2, "color", "rgb(124, 181, 236)"], [2, "font-size", "12px", "vertical-align", "middle"], [2, "font-size", "12px"], ["id", "activeCases", 2, "width", "100%", "height", "60px", "display", "block"]], template: function Card2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.diff);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.percent, "% of total");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQyL2NhcmQyLmNvbXBvbmVudC5jc3MifQ== */"] });
    return Card2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card2',
                templateUrl: './card2.component.html',
                styleUrls: ['./card2.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], diff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");






var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    MainService.prototype.drawStateWiseChart = function () {
        var FirstComponentObject = new _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]();
        FirstComponentObject.drawCards();
    };
    MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
    return MainService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sandi\Documents\workspace\COVID\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map