"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlimComponent = void 0;
var core_1 = require("@angular/core");
var AlimComponent = /** @class */ (function () {
    // ----------------------------
    function AlimComponent(alimService) {
        this.alimService = alimService;
        // ---------------------------
        this.empolyess = [];
        this.columns = [
            { name: 'data' },
            { name: 'furnizor' },
            { name: 'number' },
            { name: 'auto' },
            { name: 'sumaTotala' },
            { name: 'litri' }
        ];
    }
    AlimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alimService.alimentariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
            _this.empolyess = res;
        });
        // --------------------------------
    };
    AlimComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        location.reload();
    };
    AlimComponent.prototype["delete"] = function (test) {
        // console.log("numar: " + test.uid);
        this.alimService.deletePet(test.number).subscribe(function (res) { console.log(res); });
        location.reload();
    };
    AlimComponent.prototype.search = function (data) {
        var _this = this;
        // console.log("numar: " + data.number);
        this.alimService.getPetById(data.number).subscribe(function (res) {
            _this.auto = res;
            // this.auto = res.auto;
            // this.furnizor = res.furnizor;
            console.log(res);
        });
        // location.reload();
    };
    AlimComponent.prototype.search2 = function (data1) {
        var _this = this;
        // console.log("numar: " + data1.furnizor);
        this.alimService.getPetByFurnizor(data1.furnizor).subscribe(function (res) {
            _this.furnizor = res;
            // this.auto = res.auto;
            // this.furnizor = res.furnizor;
            console.log(res);
        });
        // location.reload();
    };
    // --------------------------------
    AlimComponent.prototype.Search = function () {
        var _this = this;
        if (this.furniz != "") {
            this.rows = this.rows.filter(function (res) {
                return res.furnizor.toLocaleLowerCase().match(_this.furniz.toLocaleLowerCase());
            });
        }
        else if (this.furniz == "") {
            this.ngOnInit();
        }
    };
    // -----------------------------
    AlimComponent.prototype.SearchAuto = function () {
        var _this = this;
        if (this.aut != "") {
            this.rows = this.rows.filter(function (res) {
                return res.auto.toLocaleLowerCase().match(_this.aut.toLocaleLowerCase());
            });
        }
        else if (this.aut == "") {
            this.ngOnInit();
        }
    };
    AlimComponent.prototype.SearchNumber = function () {
        var _this = this;
        if (this.num != this.rows) {
            this.alimService.getPetById(this.num).subscribe(function (res) {
                _this.rows = res;
            });
            this.rows = this.rows.filter(function (res) {
                return res.number.toLocaleLowerCase().match(_this.num.toLocaleLowerCase());
            });
            // this.rows=this.rows.filter(res=>{
            //   return res.num.toString().match(this.num.toString());
            // });
        }
        else if (this.num == this.rows) {
            this.ngOnInit();
        }
    };
    // this.alimService.getPetById(data.number).subscribe((res )=>{
    //   this.auto= res;
    AlimComponent.prototype.SearchData = function () {
        var _this = this;
        if (this.dat != "") {
            this.rows = this.rows.filter(function (res) {
                return res.data.toLocaleLowerCase().match(_this.dat.toLocaleLowerCase());
            });
        }
        else if (this.dat == "") {
            this.ngOnInit();
        }
    };
    AlimComponent = __decorate([
        core_1.Component({
            selector: 'app-alim',
            templateUrl: './alim.component.html',
            styleUrls: ['./alim.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AlimComponent);
    return AlimComponent;
}());
exports.AlimComponent = AlimComponent;
