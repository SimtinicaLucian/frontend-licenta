"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalContentComponent = void 0;
var core_1 = require("@angular/core");
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(activeModal, alimService) {
        this.activeModal = activeModal;
        this.alimService = alimService;
        this.passEntry = new core_1.EventEmitter();
        this.form = {};
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        console.log(this.user);
    };
    ModalContentComponent.prototype.register = function (f) {
        this.alimService.add(f.value).subscribe(function () { });
        location.reload();
    };
    __decorate([
        core_1.Input()
    ], ModalContentComponent.prototype, "user");
    __decorate([
        core_1.Output()
    ], ModalContentComponent.prototype, "passEntry");
    ModalContentComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-content',
            templateUrl: './modal-content.component.html',
            styleUrls: ['./modal-content.component.scss']
        })
    ], ModalContentComponent);
    return ModalContentComponent;
}());
exports.ModalContentComponent = ModalContentComponent;
