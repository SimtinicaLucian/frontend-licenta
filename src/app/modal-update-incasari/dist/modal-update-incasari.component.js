"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalUpdateIncasariComponent = void 0;
var core_1 = require("@angular/core");
var ModalUpdateIncasariComponent = /** @class */ (function () {
    function ModalUpdateIncasariComponent(activeModal, incasariService, progressBar, alertService) {
        this.activeModal = activeModal;
        this.incasariService = incasariService;
        this.progressBar = progressBar;
        this.alertService = alertService;
        this.form = {};
        this.isSuccessful = false;
        this.isaddFailed = false;
        this.errorMessage = '';
    }
    ModalUpdateIncasariComponent.prototype.ngOnInit = function () {
    };
    ModalUpdateIncasariComponent.prototype.getData = function () {
        var _this = this;
        this.incasariService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
        });
    };
    ModalUpdateIncasariComponent.prototype.close = function () {
        this.activeModal.dismiss('Cross click');
        location.reload();
    };
    // updateIncasari(j, f: NgForm) {
    //   console.log(this.j.id);
    //   this.incasariService.updateIncasari(this.j.id, f.value).subscribe(() => { })
    //   location.reload();
    // }
    ModalUpdateIncasariComponent.prototype.updateIncasari = function (j, f) {
        var _this = this;
        console.log(this.j.id);
        this.alertService.info('Checking update invoice');
        this.progressBar.startLoading();
        this.incasariService.updateIncasari(this.j.id, f.value).subscribe(function (value) {
            console.log(f.value);
            if (f.value) {
                _this.progressBar.setSuccess();
                _this.progressBar.completeLoading();
                _this.isSuccessful = true;
                _this.isaddFailed = false;
                console.log("Succesful?: " + _this.isSuccessful);
                console.log("Failed?: " + _this.isaddFailed);
                // window.alert("You was successfully log-in!");
                _this.progressBar.completeLoading();
                location.reload();
            }
            else {
                _this.isSuccessful = false;
                _this.isaddFailed = true;
            }
        }, function (err) {
            _this.progressBar.setError();
            console.log(err);
            _this.alertService.danger(err.error.message);
            _this.progressBar.completeLoading();
            // this.errorMessage = err.error.message;
            _this.isaddFailed = true;
            console.log("Succesful?: " + _this.errorMessage);
            console.log("Failed?: " + _this.isaddFailed);
        });
    };
    ModalUpdateIncasariComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-update-incasari',
            templateUrl: './modal-update-incasari.component.html',
            styleUrls: ['./modal-update-incasari.component.scss']
        })
    ], ModalUpdateIncasariComponent);
    return ModalUpdateIncasariComponent;
}());
exports.ModalUpdateIncasariComponent = ModalUpdateIncasariComponent;
