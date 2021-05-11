"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalDeleteIncasariComponent = void 0;
var core_1 = require("@angular/core");
var ModalDeleteIncasariComponent = /** @class */ (function () {
    function ModalDeleteIncasariComponent(activeModal, incasariService, progressBar, alertService) {
        this.activeModal = activeModal;
        this.incasariService = incasariService;
        this.progressBar = progressBar;
        this.alertService = alertService;
        this.isSuccessful = false;
    }
    ModalDeleteIncasariComponent.prototype.ngOnInit = function () {
    };
    ModalDeleteIncasariComponent.prototype.getData = function () {
        var _this = this;
        this.incasariService.incasariSearchAllGet().subscribe(function (res) {
            _this.rows = res;
        });
    };
    ModalDeleteIncasariComponent.prototype.deleteIncasari = function (id) {
        var _this = this;
        this.alertService.info('Se verifica stergerea facturii');
        this.progressBar.startLoading();
        console.log(this.j);
        this.incasariService.deleteId(this.j).subscribe(function (res) {
            _this.progressBar.setSuccess();
            _this.progressBar.completeLoading();
            _this.getData();
            _this.isSuccessful = true;
            window.location.reload();
        }, function (err) {
            _this.progressBar.setError();
            console.log(err);
            _this.alertService.danger(err.error.message);
            _this.progressBar.completeLoading();
        });
    };
    ModalDeleteIncasariComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-delete-incasari',
            templateUrl: './modal-delete-incasari.component.html',
            styleUrls: ['./modal-delete-incasari.component.scss']
        })
    ], ModalDeleteIncasariComponent);
    return ModalDeleteIncasariComponent;
}());
exports.ModalDeleteIncasariComponent = ModalDeleteIncasariComponent;
