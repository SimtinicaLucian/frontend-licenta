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
var AddComponent = /** @class */ (function () {
    //   filterForm = new FormGroup({
    //     fromDate: new FormControl(),
    //     toDate: new FormControl(),
    // });
    // get fromDate() { return this.filterForm.get('fromDate').value; }
    // get toDate() { return this.filterForm.get('toDate').value; }
    // ----------chart
    // ----------chart
    function AddComponent(formBuilder, alimService, router, dashboardService) {
        this.formBuilder = formBuilder;
        this.alimService = alimService;
        this.router = router;
        this.dashboardService = dashboardService;
        this.form = {};
        this.displayedColumns = ['id', 'data', 'furnizor', 'number', 'detalii', 'sumaTotala', 'sumaFaraTVA', 'sumaTVA'];
        // data : any;
        this.sorted = false;
        this.pieChart = [];
        //   filterForm = new FormGroup({
        //     fromDate: new FormControl(),
        //     toDate: new FormControl(),
        // });
        // get fromDate() { return this.filterForm.get('fromDate').value; }
        // get toDate() { return this.filterForm.get('toDate').value; }
        this.dataList = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regForm = this.formBuilder.group({
            firstDate: ['', forms_1.Validators.required],
            secondDate: ['', forms_1.Validators.required]
        });
        this.alimService.incasariSearchAllGet().subscribe(function (res) {
            //  this.dateFromBackend = res.map(object => object.data)
            // console.log(this.dateFromBackend)
            _this.rows = res;
            // console.log(this.rows);
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.pieChart = _this.dashboardService.pieChart();
            // this.pipe = new DatePipe('en');
            // this.dataSource.filterPredicate = (data, filter) =>{
            //   if (this.fromDate && this.toDate) {
            //     console.log(data.data);
            //     return data.data >= this.fromDate && data.data <= this.toDate;
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
        // ----------chart
        // ----------chart
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
    AddComponent.prototype.search2 = function (data1) {
        var _this = this;
        // console.log("numar: " + data1.furnizor);
        this.alimService.getPetByFurnizor(data1.furnizor).subscribe(function (res) {
            _this.rows = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.rows);
            // this.auto = res.auto;
            // this.furnizor = res.furnizor;
            console.log(res);
        });
        // location.reload();
    };
    AddComponent.prototype.search3 = function (f) {
        var _this = this;
        this.alimService.getBetweenDate(f.value.firstDate, f.value.lastDate).subscribe(function (res) {
            _this.between = res;
            console.log("res: " + res);
        });
    };
    // getTotalCost() {
    //   return this.rows.map(t => t.sumaTotala).reduce((acc, value) => acc + value, 0);
    // }
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
    AddComponent.prototype.add = function (pageName) {
        this.router.navigate(["" + pageName]);
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], AddComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], AddComponent.prototype, "sort");
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-widget-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.scss']
        })
        // export class AddComponent implements OnInit , AfterViewInit  {
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
