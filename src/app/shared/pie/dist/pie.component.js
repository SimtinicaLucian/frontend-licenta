"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PieComponent = void 0;
var core_1 = require("@angular/core");
var Highcharts = require("highcharts");
var exporting_1 = require("highcharts/modules/exporting");
var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.Highcharts = Highcharts;
        this.chartOptions = {};
        this.data = [];
    }
    PieComponent.prototype.ngOnInit = function () {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'RANDOM DATA'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data
                }]
        };
        exporting_1["default"](Highcharts);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    __decorate([
        core_1.Input()
    ], PieComponent.prototype, "data");
    PieComponent = __decorate([
        core_1.Component({
            selector: 'app-pie',
            templateUrl: './pie.component.html',
            styleUrls: ['./pie.component.scss']
        })
    ], PieComponent);
    return PieComponent;
}());
exports.PieComponent = PieComponent;
