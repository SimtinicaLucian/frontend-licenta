"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var modal_content_component_1 = require("../modal-content/modal-content.component");
var modal_delete_incasari_component_1 = require("../modal-delete-incasari/modal-delete-incasari.component");
var modal_update_incasari_component_1 = require("../modal-update-incasari/modal-update-incasari.component");
var AddComponent = /** @class */ (function () {
    function AddComponent(modalService, formBuilder, alimService, router, excelService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.alimService = alimService;
        this.router = router;
        this.excelService = excelService;
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
        this.displayedColumns = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA', 'delete', 'update'];
        this.sorted = false;
    }
    AddComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.rows, 'incasari_data');
    };
    AddComponent.prototype.ngOnInit = function () {
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
    AddComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        // location.reload();
    };
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
    AddComponent.prototype.search = function (data) {
        var _this = this;
        this.alimService.getPetById(data.number).subscribe(function (res) {
            _this.rows = res;
            console.log(res);
        });
        // location.reload();
    };
    AddComponent.prototype.search2 = function (data1) {
        var _this = this;
        this.alimService.getPetByFurnizor(data1.furnizor).subscribe(function (res) {
            _this.rows = res;
            // this.dataSource = new MatTableDataSource(this.rows);
            console.log(res);
        });
        // location.reload();
    };
    AddComponent.prototype.search3 = function (f) {
        var _this = this;
        this.alimService.getSumaTotalaBetweenDate(f.value.firstDate, f.value.lastDate).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    AddComponent.prototype.search4 = function (g) {
        var _this = this;
        this.alimService.getSumaTotalaMonthAndYear(g.value.firstDate1, g.value.lastDate1).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    AddComponent.prototype.search5 = function (h) {
        var _this = this;
        this.alimService.getSumaTotalaPerYear(h.value.year).subscribe(function (res) {
            _this.year = res;
            console.log("res: " + res);
        });
    };
    AddComponent.prototype.search6 = function (a) {
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
    AddComponent.prototype.search7 = function (data2) {
        var _this = this;
        this.alimService.getByYear(data2.year).subscribe(function (res) {
            _this.rows = res;
            // this.dataSource = new MatTableDataSource(this.rows);
            console.log(res);
        });
        // location.reload();
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
    AddComponent.prototype.searchByMonthAndYear = function (e) {
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
    AddComponent.prototype.searchByFurnizorAndDateAndSum = function (h) {
        var _this = this;
        this.alimService.getData(h.value.furnizor, h.value.data1, h.value.data2, h.value.sumaTotala1, h.value.sumaTotala2).subscribe(function (res) {
            _this.rows = res;
            // console.log(res);
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
    AddComponent.prototype.getTotalCostTotal = function () {
        return this.rows.map(function (t) { return t.sumaTotala; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostFaraTVA = function () {
        return this.rows.map(function (t) { return t.sumaFaraTVA; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddComponent.prototype.getTotalCostTVA = function () {
        return this.rows.map(function (t) { return t.sumaTVA; }).reduce(function (acc, value) { return acc + value; }, 0);
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
                //   this.doctService.deleteData(j).subscribe(res=>
                // {
                //     this.getData()
                //     console.log("delete");
                //   // location.reload();
                // })
            }
        });
    };
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
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
