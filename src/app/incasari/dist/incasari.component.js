"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IncasariComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var IncasariComponent = /** @class */ (function () {
    function IncasariComponent(formBuilder, alimService, router) {
        this.formBuilder = formBuilder;
        this.alimService = alimService;
        this.router = router;
        this.form = {};
        this.displayedColumns = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
        this.sorted = false;
    }
    IncasariComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regForm = this.formBuilder.group({
            firstDate: ['', forms_1.Validators.required],
            secondDate: ['', forms_1.Validators.required]
        });
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.alimService.searchTotal().subscribe((function (res) {
            return _this.totalSum = res;
        }));
        this.alimService.searchTotalTVA().subscribe((function (res) {
            return _this.totalSumTVA = res;
        }));
        this.alimService.searchTotalFaraTVA().subscribe((function (res) {
            return _this.totalSumFaraTVA = res;
        }));
    };
    IncasariComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        // location.reload();
    };
    IncasariComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    IncasariComponent.prototype.applyFilters = function () {
        this.dataSource.filter = '' + Math.random();
    };
    IncasariComponent.prototype.search = function (data) {
        var _this = this;
        this.alimService.getPetById(data.number).subscribe(function (res) {
            _this.rows = res;
            console.log(res);
        });
        // location.reload();
    };
    IncasariComponent.prototype.search2 = function (data1) {
        var _this = this;
        this.alimService.getPetByFurnizor(data1.furnizor).subscribe(function (res) {
            _this.rows = res;
            // this.dataSource = new MatTableDataSource(this.rows);
            console.log(res);
        });
        // location.reload();
    };
    IncasariComponent.prototype.search3 = function (f) {
        var _this = this;
        this.alimService.getSumaTotalaBetweenDate(f.value.firstDate, f.value.lastDate).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    IncasariComponent.prototype.search4 = function (g) {
        var _this = this;
        this.alimService.getSumaTotalaMonthAndYear(g.value.firstDate1, g.value.lastDate1).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    IncasariComponent.prototype.search5 = function (h) {
        var _this = this;
        this.alimService.getSumaTotalaPerYear(h.value.year).subscribe(function (res) {
            _this.year = res;
            console.log("res: " + res);
        });
    };
    // getTotalCost() {
    //   return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
    // }
    IncasariComponent.prototype.add = function (pageName) {
        this.router.navigate(["" + pageName]);
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], IncasariComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], IncasariComponent.prototype, "sort");
    IncasariComponent = __decorate([
        core_1.Component({
            selector: 'app-incasari',
            templateUrl: './incasari.component.html',
            styleUrls: ['./incasari.component.scss']
        })
    ], IncasariComponent);
    return IncasariComponent;
}());
exports.IncasariComponent = IncasariComponent;
