"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddComponent = exports.MY_FORMATS = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var modal_content_component_1 = require("../modal-content/modal-content.component");
var modal_delete_incasari_component_1 = require("../modal-delete-incasari/modal-delete-incasari.component");
var modal_update_incasari_component_1 = require("../modal-update-incasari/modal-update-incasari.component");
var view_incasari_component_1 = require("../view-incasari/view-incasari.component");
var _moment = require("moment");
var moment_1 = require("moment");
var core_2 = require("@angular/material/core");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var moment = moment_1["default"] || _moment;
exports.MY_FORMATS = {
    parse: {
        dateInput: 'LL'
    },
    display: {
        dateInput: 'YYYY.MM.DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY'
    }
};
var AddComponent = /** @class */ (function () {
    // years: number[] =[2020,2021]
    function AddComponent(userService, token, datePip, modalService, formBuilder, alimService, router, excelService, statisticsService) {
        this.userService = userService;
        this.token = token;
        this.datePip = datePip;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.alimService = alimService;
        this.router = router;
        this.excelService = excelService;
        this.statisticsService = statisticsService;
        this.hide = true;
        this.user = {
            data: '',
            furnizor: '',
            number: 1,
            detalii: '',
            sumaTotala: 1,
            sumaFaraTVA: 1,
            sumaTva: 1
        };
        this.form = {};
        // displayedColumns: string[] = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Incasata', 'rest', 'sumaFaraTVA', 'sumaFaraTVA_Incasata' , 'sumaTVA', 'sumaTVA_Incasata', 'by_added', 'stare', 'delete', 'update'];
        this.displayedColumns = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaTotala_Incasata', 'cota_TVA', 'rest', 'by_added', 'stare', 'action'];
        this.sorted = false;
        this.toppings = new forms_1.FormControl();
        this.months = [
            { value: '01', viewValue: 'Ianuarie' },
            { value: '02', viewValue: 'Februarie' },
            { value: '03', viewValue: 'Martie' },
            { value: '04', viewValue: 'Aprilie' },
            { value: '05', viewValue: 'Mai' },
            { value: '06', viewValue: 'Iunie' },
            { value: '07', viewValue: 'Iulie' },
            { value: '08', viewValue: 'August' },
            { value: '09', viewValue: 'Septembrie' },
            { value: '10', viewValue: 'Octombrie' },
            { value: '11', viewValue: 'Noiembrie' },
            { value: '12', viewValue: 'Decembrie' }
        ];
        this.years = [
            { value: '2021', viewValue: '2021' },
            { value: '2020', viewValue: '2020' }
        ];
        this.stares = [
            { value: 'achitata', viewValue: 'achitata' },
            { value: 'neachitata', viewValue: 'neachitata' },
            { value: 'partial achitata', viewValue: 'partial achitata' },
            { value: 'intarziata', viewValue: 'intarziata' }
        ];
    }
    AddComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.rows, 'incasari_data');
    };
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.token.getUser();
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    // sold(){
    //   return this.alimService.sold().subscribe(() => { })
    // }
    AddComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AddComponent.prototype.applyFilters = function () {
        this.dataSource.filter = '' + Math.random();
    };
    AddComponent.prototype.reset = function () {
        var _this = this;
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddComponent.prototype.resetRefresh = function () {
        var _this = this;
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
        });
        location.reload();
    };
    AddComponent.prototype.searchByMonthAndYear = function (e) {
        var _this = this;
        this.alimService.getDatesAfterMonthAndYear(e.value.month, e.value.year).subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddComponent.prototype.searchByFurnizorAndDateAndSum = function (h) {
        var _this = this;
        this.alimService.getData(h.value.furnizor, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2, h.value.stare).subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddComponent.prototype.SearchFurnizor = function () {
        var _this = this;
        this.dataSource = new table_1.MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.furniz != "") {
            this.rows = this.rows.filter(function (res) {
                return res.furnizor.toLocaleLowerCase().match(_this.furniz.toLocaleLowerCase());
            });
        }
        else if (this.furniz == "") {
            this.ngOnInit();
        }
    };
    AddComponent.prototype.SearchData = function () {
        var _this = this;
        this.dataSource = new table_1.MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.dat != "") {
            this.rows = this.rows.filter(function (res) {
                return res.data.toLocaleLowerCase().match(_this.dat.toLocaleLowerCase());
            });
        }
        else if (this.dat == "") {
            this.ngOnInit();
        }
    };
    AddComponent.prototype.SearchNumber = function () {
        var _this = this;
        this.dataSource = new table_1.MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.num != "") {
            this.rows = this.rows.filter(function (res) {
                return res.number.toLocaleLowerCase().match(_this.num.toLocaleLowerCase());
            });
        }
        else if (this.num == "") {
            this.ngOnInit();
        }
    };
    AddComponent.prototype.calculareSumaTotalaCuTVAPerYear = function (f) {
        var _this = this;
        this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe(function (res) {
            _this.totalSumCuTVA_MonthAndYear_Incasari = res;
            console.log("res: " + res);
            _this.statisticsService.calculareSumaTotalaCuTVAPerYear_Cheltuieli(f.value.year).subscribe(function (res) {
                _this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
                console.log("res: " + res);
                _this.chartOptions = {
                    series: [_this.totalSumCuTVA_MonthAndYear_Incasari, _this.totalSumCuTVA_MonthAndYear_Cheltuieli],
                    chart: {
                        width: 380,
                        type: "pie"
                    },
                    labels: ["Total Incasari Per Year", "Total Cheltuieli Per Year"],
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                };
            });
        });
    };
    // calculareSumaTotalaCuTVAPerYear(f: NgForm) {
    //   console.log("f: " + f.value.year);
    //   this.statisticsService.calculareSumaTotalaCuTVAPerYear_Incasari(f.value.year).subscribe(res => {
    //     this.totalSumCuTVA_MonthAndYear_Incasari = res;
    //     console.log("res: " + res);
    //   })
    // }
    AddComponent.prototype.calculareSumaTotalaCuTVAMonthYear = function (g) {
        var _this = this;
        this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Incasari(g.value.month, g.value.year).subscribe(function (res) {
            _this.totalSumCuTVA_MonthAndYear_Incasari = res;
            console.log("res: " + res);
            _this.statisticsService.calculareSumaTotalaCuTVAMonthAndYear_Cheltuieli(g.value.month, g.value.year).subscribe(function (res) {
                _this.totalSumCuTVA_MonthAndYear_Cheltuieli = res;
                console.log("res: " + res);
                _this.chartOptions2 = {
                    series: [_this.totalSumCuTVA_MonthAndYear_Incasari, _this.totalSumCuTVA_MonthAndYear_Cheltuieli],
                    chart: {
                        width: 380,
                        type: "pie"
                    },
                    labels: ["Total Incasari Month Year", "Total Cheltuieli Month Year"],
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                };
            });
        });
    };
    AddComponent.prototype.getTotalCostTotal = function () {
        return this.rows.map(function (t) { return t.sumaTotala; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostFaraTVA = function () {
        return this.rows.map(function (t) { return t.sumaFaraTVA; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostTVA = function () {
        return this.rows.map(function (t) { return t.sumaTVA; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostTotal_Incasata = function () {
        return this.rows.map(function (t) { return t.sumaTotala_Incasata; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostFaraTVA_Incasata = function () {
        return this.rows.map(function (t) { return t.sumaFaraTVA_Incasata; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostTVA_Incasata = function () {
        return this.rows.map(function (t) { return t.sumaTVA_Incasata; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getRest = function () {
        return this.rows.map(function (t) { return t.rest; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.add = function (pageName) {
        this.router.navigate(["" + pageName]);
    };
    AddComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(modal_content_component_1.ModalContentComponent);
        modalRef.componentInstance.user = this.user;
        modalRef.result.then(function (result) {
            if (result) {
                console.log(result);
            }
        });
    };
    AddComponent.prototype.deleteModal = function (j) {
        var modalRef = this.modalService.open(modal_delete_incasari_component_1.ModalDeleteIncasariComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
            }
        });
    };
    AddComponent.prototype.updateModal = function (j) {
        console.log(j);
        var modalRef = this.modalService.open(modal_update_incasari_component_1.ModalUpdateIncasariComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
            }
        });
    };
    AddComponent.prototype.view = function (j) {
        console.log(j);
        var modalRef = this.modalService.open(view_incasari_component_1.ViewIncasariComponent);
        // const modalRef = this.view.call(ViewIncasariComponent);
        modalRef.componentInstance.j = j;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
            }
        });
    };
    __decorate([
        core_1.ViewChild("chart")
    ], AddComponent.prototype, "chart");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], AddComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], AddComponent.prototype, "sort");
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.scss'],
            providers: [
                { provide: core_2.DateAdapter, useClass: material_moment_adapter_1.MomentDateAdapter, deps: [core_2.MAT_DATE_LOCALE] },
                { provide: core_2.MAT_DATE_FORMATS, useValue: exports.MY_FORMATS },
            ],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
