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
var AddComponent = /** @class */ (function () {
    //   filterForm = new FormGroup({
    //     fromDate: new FormControl(),
    //     toDate: new FormControl(),
    // });
    // get fromDate() { return this.filterForm.get('fromDate').value; }
    // get toDate() { return this.filterForm.get('toDate').value; }
    function AddComponent(alimService) {
        this.alimService = alimService;
        this.form = {};
        this.displayedColumns = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
        // data : any;
        this.sorted = false;
        this.filterForm = new forms_1.FormGroup({
            fromDate: new forms_1.FormControl(),
            toDate: new forms_1.FormControl()
        });
        this.dataList = [];
    }
    Object.defineProperty(AddComponent.prototype, "fromDate", {
        get: function () { return this.filterForm.get('fromDate').value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddComponent.prototype, "toDate", {
        get: function () { return this.filterForm.get('toDate').value; },
        enumerable: false,
        configurable: true
    });
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            _this.dateFromBackend = res.map(function (object) { return object.data; });
            console.log(_this.dateFromBackend);
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // this.pipe = new DatePipe('en');
            // this.dataSource.filterPredicate = (date, filter) =>{
            //   if (this.fromDate && this.toDate) {
            //     return date.data >= this.fromDate && date.data <= this.toDate;
            //   }
            //   return true;
            // }
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
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
    // total(){
    //    return this.alimService.searchTotal().subscribe((res)=> {
    //      this.rows = res;
    //     console.log("Sum is: " + this.rows);
    //   })
    // }
    AddComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        // location.reload();
    };
    AddComponent.prototype["delete"] = function (test) {
        this.alimService.deleteIncasari(test.number).subscribe(function (res) { });
        // location.reload();
    };
    AddComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        // --------------
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        // ---------------
    };
    AddComponent.prototype.applyFilters = function () {
        this.dataSource.filter = '' + Math.random();
    };
    AddComponent.prototype.removeAll = function () {
        this.dataSource.data = [];
    };
    AddComponent.prototype.removeAt = function (index) {
        var data = this.dataSource.data;
        data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
        this.dataSource.data = data;
    };
    AddComponent.prototype.search = function (data) {
        var _this = this;
        // console.log("numar: " + data.number);
        this.alimService.getPetById(data.number).subscribe(function (res) {
            _this.auto = res;
            console.log(res);
        });
        // location.reload();
    };
    // update(data1){
    //   this.alimService.updateNumber(data1.number).subscribe((res )=>{
    //     this.furniz= res;
    //   })
    // }
    AddComponent.prototype.update = function (data, f) {
        var _this = this;
        this.alimService.getPetById(data.number).subscribe(function (res) {
            _this.auto = res;
            console.log(res);
            _this.alimService.updateNumber(f.value);
            // location.reload();
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
            styleUrls: ['./add.component.scss']
        })
        // export class AddComponent implements OnInit , AfterViewInit  {
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
