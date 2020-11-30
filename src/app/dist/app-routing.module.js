"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var alim_component_1 = require("../app/alim/alim.component");
var home_component_1 = require("../app/home/home.component");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var incasari_component_1 = require("./incasari/incasari.component");
var add_component_1 = require("./add/add.component");
var addincasare_component_1 = require("./addincasare/addincasare.component");
// -----------------------------------------------------------
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'alim', component: alim_component_1.AlimComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'incasari', component: incasari_component_1.IncasariComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'addincasare', component: addincasare_component_1.AddincasareComponent }
    // -----------------------------------------------------
    // {path: '', redirectTo: '/home'}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules }), ngx_datatable_1.NgxDatatableModule],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
