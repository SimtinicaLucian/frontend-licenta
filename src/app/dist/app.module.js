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
var alim_component_1 = require("./alim/alim.component");
var home_component_1 = require("./home/home.component");
var api_1 = require("./api");
var http_1 = require("@angular/common/http");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var forms_1 = require("@angular/forms");
var filter_pipe_1 = require("./filter.pipe");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
// -----------------------------------
var core_3 = require("@agm/core");
var incasari_component_1 = require("./incasari/incasari.component");
var add_component_1 = require("./add/add.component");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var animations_1 = require("@angular/platform-browser/animations");
var addincasare_component_1 = require("./addincasare/addincasare.component");
// ------------------------------------
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                alim_component_1.AlimComponent,
                home_component_1.HomeComponent,
                filter_pipe_1.FilterPipe,
                incasari_component_1.IncasariComponent,
                add_component_1.AddComponent,
                addincasare_component_1.AddincasareComponent,
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
                datepicker_1.MatDatepickerModule
            ],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
