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
var home_component_1 = require("../app/home/home.component");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var incasari_component_1 = require("./incasari/incasari.component");
var add_component_1 = require("./add/add.component");
var addincasare_component_1 = require("./addincasare/addincasare.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var profile_component_1 = require("./profile/profile.component");
var password_forgot_component_1 = require("./password-forgot/password-forgot.component");
var password_reset_component_1 = require("./password-reset/password-reset.component");
var board_admin_component_1 = require("./board-admin/board-admin.component");
var test_component_1 = require("./test/test.component");
var view_incasari_component_1 = require("./view-incasari/view-incasari.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'incasari', component: incasari_component_1.IncasariComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'admin', component: board_admin_component_1.BoardAdminComponent },
    { path: 'addincasare', component: addincasare_component_1.AddincasareComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'forgot', component: password_forgot_component_1.PasswordForgotComponent },
    { path: 'reset', component: password_reset_component_1.PasswordResetComponent },
    { path: 'test', component: test_component_1.TestComponent },
    { path: 'view', component: view_incasari_component_1.ViewIncasariComponent },
    { path: '**', redirectTo: '' }
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
