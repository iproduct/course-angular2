System.register(['@angular/core', '@angular/router', '../selective-preload-strategy', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, selective_preload_strategy_1;
    var AdminDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (selective_preload_strategy_1_1) {
                selective_preload_strategy_1 = selective_preload_strategy_1_1;
            },
            function (_1) {}],
        execute: function() {
            AdminDashboardComponent = (function () {
                function AdminDashboardComponent(route, preloadStrategy) {
                    this.route = route;
                    this.preloadStrategy = preloadStrategy;
                    this.modules = preloadStrategy.preloadedModules;
                }
                AdminDashboardComponent.prototype.ngOnInit = function () {
                    // Capture the session ID if available
                    this.sessionId = this.route
                        .queryParams
                        .map(function (params) { return params['session_id'] || 'None'; });
                    // Capture the fragment if available
                    this.token = this.route
                        .fragment
                        .map(function (fragment) { return fragment || 'None'; });
                };
                AdminDashboardComponent = __decorate([
                    core_1.Component({
                        template: "\n    <p>Dashboard</p>\n\n    <p>Session ID: {{ sessionId | async }}</p>\n    <a id=\"anchor\"></a>\n    <p>Token: {{ token | async }}</p>\n\n    Preloaded Modules\n    <ul>\n      <li *ngFor=\"let module of modules\">{{ module }}</li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, selective_preload_strategy_1.PreloadSelectedModules])
                ], AdminDashboardComponent);
                return AdminDashboardComponent;
            }());
            exports_1("AdminDashboardComponent", AdminDashboardComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=admin-dashboard.component.js.map