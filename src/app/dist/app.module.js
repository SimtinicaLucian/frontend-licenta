"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var api_1 = require("../app/services/api");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var forms_1 = require("@angular/forms");
var filter_pipe_1 = require("./filter.pipe");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var core_3 = require("@agm/core");
var incasari_component_1 = require("./incasari/incasari.component");
var add_component_1 = require("./add/add.component");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var animations_1 = require("@angular/platform-browser/animations");
var addincasare_component_1 = require("./addincasare/addincasare.component");
// --------------
var button_1 = require("@angular/material/button");
var select_1 = require("@angular/material/select");
var form_field_1 = require("@angular/material/form-field");
var checkbox_1 = require("@angular/material/checkbox");
var input_1 = require("@angular/material/input");
var excel_service_1 = require("./services/excel.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var modal_content_component_1 = require("./modal-content/modal-content.component");
var modal_delete_incasari_component_1 = require("./modal-delete-incasari/modal-delete-incasari.component");
var modal_update_incasari_component_1 = require("./modal-update-incasari/modal-update-incasari.component");
var ng2_charts_1 = require("ng2-charts");
var icon_1 = require("@angular/material/icon");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var common_1 = require("@angular/common");
var list_1 = require("@angular/material/list");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var profile_component_1 = require("./profile/profile.component");
var http_1 = require("@angular/common/http");
var auth_interceptor_1 = require("../app/helpers/auth.interceptor");
var password_forgot_component_1 = require("./password-forgot/password-forgot.component");
var password_reset_component_1 = require("./password-reset/password-reset.component");
var router_1 = require("@angular/router");
var core_4 = require("@ngx-progressbar/core");
var ngx_alerts_1 = require("ngx-alerts");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var common_2 = require("@angular/common");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var board_admin_component_1 = require("./board-admin/board-admin.component");
var test_component_1 = require("./test/test.component");
var modal_delete_user_component_1 = require("./modal-delete-user/modal-delete-user.component");
var modal_update_user_component_1 = require("./modal-update-user/modal-update-user.component");
var ng_apexcharts_1 = require("ng-apexcharts");
var highcharts_angular_1 = require("highcharts-angular");
var view_incasari_component_1 = require("./view-incasari/view-incasari.component");
var cheltuieli_component_1 = require("./cheltuieli/cheltuieli.component");
var modal_delete_cheltuieli_component_1 = require("./modal-delete-cheltuieli/modal-delete-cheltuieli.component");
var modal_update_cheltuieli_component_1 = require("./modal-update-cheltuieli/modal-update-cheltuieli.component");
var modal_add_cheltuieli_component_1 = require("./modal-add-cheltuieli/modal-add-cheltuieli.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                filter_pipe_1.FilterPipe,
                incasari_component_1.IncasariComponent,
                add_component_1.AddComponent,
                addincasare_component_1.AddincasareComponent,
                modal_content_component_1.ModalContentComponent,
                modal_delete_incasari_component_1.ModalDeleteIncasariComponent,
                modal_update_incasari_component_1.ModalUpdateIncasariComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                profile_component_1.ProfileComponent,
                password_forgot_component_1.PasswordForgotComponent,
                password_reset_component_1.PasswordResetComponent,
                board_admin_component_1.BoardAdminComponent,
                test_component_1.TestComponent,
                modal_delete_user_component_1.ModalDeleteUserComponent,
                modal_update_user_component_1.ModalUpdateUserComponent,
                view_incasari_component_1.ViewIncasariComponent,
                cheltuieli_component_1.CheltuieliComponent,
                modal_delete_cheltuieli_component_1.ModalDeleteCheltuieliComponent,
                modal_update_cheltuieli_component_1.ModalUpdateCheltuieliComponent,
                modal_add_cheltuieli_component_1.ModalAddCheltuieliComponent,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                api_1.ApiModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ngx_datatable_1.NgxDatatableModule,
                core_3.AgmCoreModule.forRoot({}),
                animations_1.BrowserAnimationsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                core_2.MatNativeDateModule,
                forms_1.ReactiveFormsModule,
                datepicker_1.MatDatepickerModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                form_field_1.MatFormFieldModule,
                checkbox_1.MatCheckboxModule,
                input_1.MatInputModule,
                ng_bootstrap_1.NgbModule,
                ng2_charts_1.ChartsModule,
                icon_1.MatIconModule,
                material_moment_adapter_1.MatMomentDateModule,
                list_1.MatListModule,
                common_2.CommonModule,
                router_1.RouterModule,
                core_4.NgProgressModule,
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                angular_fontawesome_1.FontAwesomeModule,
                dropdown_1.BsDropdownModule.forRoot(),
                // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
                ngx_alerts_1.AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
                ng_apexcharts_1.NgApexchartsModule,
                highcharts_angular_1.HighchartsChartModule
            ],
            entryComponents: [app_component_1.AppComponent],
            // providers: [ExcelService, MatDatepickerModule, DatePipe,
            // ]
            // })
            providers: [{
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                },
                excel_service_1.ExcelService, datepicker_1.MatDatepickerModule, common_1.DatePipe,],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
