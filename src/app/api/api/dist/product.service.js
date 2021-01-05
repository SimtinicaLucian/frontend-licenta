"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'http://localhost:8080'; // URL to REST API
    }
    /** GET products from the server */
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl + '/products');
    };
    /** DELETE: delete the product from the server */
    ProductService.prototype.deleteProducts = function (ids) {
        if (confirm("Are you sure to delete?")) {
            var data = { 'ids': ids };
            var url = this.productUrl + "/delete/products";
            var options = {
                headers: new http_1.HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                responseType: 'text'
            };
            var resp = this.http.post(url, data, options); //.map(resp => {return resp;}).catch(err => {console.log(err);});
            //console.log('resp: ' + resp);
            return resp;
        }
        return rxjs_1.of({});
    };
    ProductService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
