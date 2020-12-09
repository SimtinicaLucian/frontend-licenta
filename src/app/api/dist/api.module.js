"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ApiModule = void 0;
var core_1 = require("@angular/core");
var configuration_1 = require("./configuration");
var incasari_service_1 = require("./api/incasari.service");
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: configuration_1.Configuration, useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                incasari_service_1.IncasariService,
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __param(1, core_1.Optional())
    ], ApiModule);
    return ApiModule;
}());
exports.ApiModule = ApiModule;
