"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddincasareComponent = void 0;
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var core_1 = require("@angular/core");
var modal_content_component_1 = require("../modal-content/modal-content.component");
var incasari_1 = require("../api/model/incasari");
var AddincasareComponent = /** @class */ (function () {
    function AddincasareComponent(modalService, formBuilder, alimService, router, excelService, cheltuieliService, statisticsService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.alimService = alimService;
        this.router = router;
        this.excelService = excelService;
        this.cheltuieliService = cheltuieliService;
        this.statisticsService = statisticsService;
        this.incasari = new incasari_1.Incasari();
        this.homearray = [];
        this.activeindex = -1;
        this.title = 'Submit';
        this.user = {
            data: '',
            furnizor: '',
            number: 1,
            detalii: '',
            sumaTotala: 1,
            sumaFaraTVA: 1,
            sumaTva: 1
        };
        this.years = [
            { value: '2021', viewValue: '2021' },
            { value: '2020', viewValue: '2020' }
        ];
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
        this.form = {};
        this.displayedColumns = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA', 'delete', 'edit'];
        this.sorted = false;
    }
    AddincasareComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.rows, 'incasari_data');
    };
    AddincasareComponent.prototype.ngOnInit = function () {
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
        this.statisticsService.sold().subscribe((function (res) {
            return _this.SoldTotal = res;
        }));
        this.statisticsService.Profit_Total().subscribe((function (res) {
            return _this.profit_Total = res;
        }));
        this.statisticsService.Incasari_CountIntarziate().subscribe((function (res) {
            return _this.Count_Incasari_Intarziate = res;
        }));
        this.statisticsService.Cheltuieli_CountIntarziate().subscribe((function (res) {
            return _this.Count_Cheltuieli_Intarziate = res;
        }));
        this.statisticsService.Salariu_CountIntarziate().subscribe((function (res) {
            return _this.Count_Salariu_Intarziate = res;
        }));
        this.statisticsService.Incasari_Intarziate_Rest_DeIncasat().subscribe((function (res) {
            return _this.Incasari_Intarziate_RestDeIncasat = res;
        }));
        this.statisticsService.Cheltuieli_Intarziate_Rest_DeAchitat().subscribe((function (res) {
            return _this.Cheltuieli_Intarziate_RestDeAchitat = res;
        }));
        this.statisticsService.Salariu_Intarziate_Rest_DeAchitat().subscribe((function (res) {
            return _this.Salariu_Intarziate_RestDeAchitat = res;
        }));
    };
    AddincasareComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        // location.reload();
    };
    AddincasareComponent.prototype.cifraAfaceri = function (g) {
        var _this = this;
        this.statisticsService.CifraAfaceriPerYear(g.value.year).subscribe(function (res) {
            _this.cifra_Afaceri = res;
            console.log(_this.cifra_Afaceri);
        });
    };
    AddincasareComponent.prototype.Profit_lunar = function (f) {
        var _this = this;
        this.statisticsService.Profit_Lunar(f.value.month, f.value.year).subscribe(function (res) {
            _this.profit_Lunar = res;
        });
    };
    AddincasareComponent.prototype.Profit_anual = function (f) {
        var _this = this;
        this.statisticsService.Profit_Anual(f.value.year).subscribe(function (res) {
            _this.profit_Anual = res;
        });
    };
    // Profit_total(){
    //   this.statisticsService.Profit_Total().subscribe((res) => {
    //     this.profit_Total1 =res
    //   })
    // }
    AddincasareComponent.prototype.BugetulDeStat_TVA = function (f) {
        var _this = this;
        this.statisticsService.BugetulDeStat_TVA(f.value.month, f.value.year)
            .subscribe(function (res) {
            _this.Bugetul_DeStat_TVA = res;
        });
    };
    AddincasareComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AddincasareComponent.prototype.applyFilters = function () {
        this.dataSource.filter = '' + Math.random();
    };
    AddincasareComponent.prototype.search = function (data) {
        var _this = this;
        this.alimService.getPetById(data.number).subscribe(function (res) {
            _this.rows = res;
            console.log(res);
        });
        // location.reload();
    };
    AddincasareComponent.prototype.search2 = function (data1) {
        var _this = this;
        this.alimService.getPetByFurnizor(data1.furnizor).subscribe(function (res) {
            _this.rows = res;
            // this.dataSource = new MatTableDataSource(this.rows);
            console.log(res);
        });
        // location.reload();
    };
    AddincasareComponent.prototype.search3 = function (f) {
        var _this = this;
        this.alimService.getSumaTotalaBetweenDate(f.value.firstDate, f.value.lastDate).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    AddincasareComponent.prototype.search4 = function (g) {
        var _this = this;
        this.alimService.getSumaTotalaMonthAndYear(g.value.firstDate1, g.value.lastDate1).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    AddincasareComponent.prototype.search5 = function (h) {
        var _this = this;
        this.alimService.getSumaTotalaPerYear(h.value.year).subscribe(function (res) {
            _this.year = res;
            console.log("res: " + res);
        });
    };
    AddincasareComponent.prototype.search6 = function (a) {
        var _this = this;
        this.alimService.getDatesBetweenData(a.value.firstDate2, a.value.lastDate2).subscribe(function (res) {
            _this.rows = res;
            // console.log(res);
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            //  if (this.rows == "") {
            //     this.ngOnInit();
            //   }
        });
    };
    AddincasareComponent.prototype.search7 = function (data2) {
        var _this = this;
        this.alimService.getByYear(data2.year).subscribe(function (res) {
            _this.rows = res;
            // this.dataSource = new MatTableDataSource(this.rows);
            console.log(res);
        });
        // location.reload();
    };
    AddincasareComponent.prototype.reset = function () {
        var _this = this;
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddincasareComponent.prototype.searchByMonthAndYear = function (e) {
        var _this = this;
        this.alimService.getDatesAfterMonthAndYear(e.value.month1, e.value.year1).subscribe(function (res) {
            _this.rows = res;
            // console.log(res);
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            //  if (this.rows == "") {
            //     this.ngOnInit();
            //   }
        });
    };
    AddincasareComponent.prototype.searchByFurnizorAndDateAndSum = function (h) {
        var _this = this;
        this.alimService.getData(h.value.furnizor, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2).subscribe(function (res) {
            _this.rows = res;
            // console.log(res);
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddincasareComponent.prototype.SearchFurnizor = function () {
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
    AddincasareComponent.prototype.SearchData = function () {
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
    // SearchYear() {
    //   this.dataSource = new MatTableDataSource(this.rows)
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    //   if (this.year1 != "") {
    //     this.rows = this.rows.filter(res => {
    //       return res.data.toLocaleLowerCase().match(this.year1.toLocaleLowerCase());
    //     });
    //   } else if (this.year1 == "") {
    //     this.ngOnInit();
    //   }
    // }
    AddincasareComponent.prototype.SearchNumber = function () {
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
    AddincasareComponent.prototype.getTotalCostTotal = function () {
        return this.rows.map(function (t) { return t.sumaTotala; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddincasareComponent.prototype.getTotalCostFaraTVA = function () {
        return this.rows.map(function (t) { return t.sumaFaraTVA; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddincasareComponent.prototype.getTotalCostTVA = function () {
        return this.rows.map(function (t) { return t.sumaTVA; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddincasareComponent.prototype.add = function (pageName) {
        this.router.navigate(["" + pageName]);
    };
    AddincasareComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(modal_content_component_1.ModalContentComponent);
        modalRef.componentInstance.user = this.user;
        modalRef.result.then(function (result) {
            if (result) {
                console.log(result);
            }
        });
        // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
        //   console.log(receivedEntry);
        // })
    };
    //incepand de aici
    AddincasareComponent.prototype.getData = function () {
        var _this = this;
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
        });
    };
    AddincasareComponent.prototype.delete1 = function (j) {
        var _this = this;
        this.alimService.deleteId(j).subscribe(function (res) {
            _this.getData();
            console.log("delete");
            // location.reload();
        });
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], AddincasareComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], AddincasareComponent.prototype, "sort");
    AddincasareComponent = __decorate([
        core_1.Component({
            selector: 'app-addincasare',
            templateUrl: './addincasare.component.html',
            styleUrls: ['./addincasare.component.scss']
        })
    ], AddincasareComponent);
    return AddincasareComponent;
}());
exports.AddincasareComponent = AddincasareComponent;
