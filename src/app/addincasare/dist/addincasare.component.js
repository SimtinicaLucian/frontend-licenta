"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddincasareComponent = void 0;
var core_1 = require("@angular/core");
var AddincasareComponent = /** @class */ (function () {
    function AddincasareComponent(alimService, router) {
        this.alimService = alimService;
        this.router = router;
        this.form = {};
    }
    AddincasareComponent.prototype.ngOnInit = function () {
    };
    AddincasareComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        // location.reload();
        location.href = "\add";
    };
    AddincasareComponent.prototype.update = function (number) {
        var _this = this;
        this.alimService.updateNumber(number.number).subscribe(function (res) {
            _this.rows = res;
        });
    };
    // onSubmit() {
    //   this.alimService.add(this.form).subscribe(
    //     data => {
    //     }
    //   );
    // }
    AddincasareComponent.prototype.add = function (pageName) {
        this.router.navigate(["" + pageName]);
    };
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
