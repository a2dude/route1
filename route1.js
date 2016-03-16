var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("services/AuthenticationService", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService() {
                    this._isAuthenticated = false;
                }
                AuthenticationService.prototype.ngOnInit = function () {
                    console.log(">>>> AuthenticationService Init");
                };
                AuthenticationService.prototype.ngOnDestroy = function () {
                    console.log(">>>> AuthenticationService Destroy");
                };
                Object.defineProperty(AuthenticationService.prototype, "Authenticated", {
                    get: function () {
                        return this._isAuthenticated;
                    },
                    set: function (auth) {
                        this._isAuthenticated = auth;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                ;
                AuthenticationService.prototype.Authenticate = function (userId, password) {
                    this._isAuthenticated = true;
                    return this._isAuthenticated;
                };
                ;
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
System.register("panels/menu/menuPanel", ['angular2/core', 'angular2/router', "services/AuthenticationService"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, router_1, AuthenticationService_1;
    var MenuPanel;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AuthenticationService_1_1) {
                AuthenticationService_1 = AuthenticationService_1_1;
            }],
        execute: function() {
            MenuPanel = (function () {
                function MenuPanel(_authenticationService) {
                    this._authenticationService = _authenticationService;
                    this.appVer = 4;
                }
                MenuPanel.prototype.ngOnInit = function () {
                    console.log(">>>> MenuPanel OnInit");
                };
                MenuPanel.prototype.ngOnDestroy = function () {
                    console.log(">>>> MenuPanel OnDestroy");
                };
                Object.defineProperty(MenuPanel.prototype, "Authenticated", {
                    get: function () {
                        return this._authenticationService.Authenticated;
                    },
                    enumerable: true,
                    configurable: true
                });
                MenuPanel = __decorate([
                    core_2.Component({
                        selector: 'menu',
                        templateUrl: "./app/panels/menu/menu.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
                ], MenuPanel);
                return MenuPanel;
            }());
            exports_2("MenuPanel", MenuPanel);
        }
    }
});
System.register("panels/main/anonymousHomePanel", ['angular2/core'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3;
    var AnonymousHomePanel;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            // Services
            AnonymousHomePanel = (function () {
                function AnonymousHomePanel() {
                }
                AnonymousHomePanel.prototype.ngOnInit = function () {
                    console.log(">>>> AnonymousHomePanel OnInit");
                };
                AnonymousHomePanel.prototype.ngOnDestroy = function () {
                    console.log(">>>> AnonymousHomePanel OnDestroy");
                };
                AnonymousHomePanel = __decorate([
                    core_3.Component({
                        selector: 'anonymousHome',
                        template: "<h3 class=\"content-top\">anonymousHome blah blah</h3>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AnonymousHomePanel);
                return AnonymousHomePanel;
            }());
            exports_3("AnonymousHomePanel", AnonymousHomePanel);
        }
    }
});
System.register("panels/main/authenticatedHomePanel", ['angular2/core'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4;
    var AuthenticatedHomePanel;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            // Services
            AuthenticatedHomePanel = (function () {
                function AuthenticatedHomePanel() {
                }
                AuthenticatedHomePanel.prototype.ngOnInit = function () {
                    console.log(">>>> AuthenticatedHomePanel OnInit");
                };
                AuthenticatedHomePanel.prototype.ngOnDestroy = function () {
                    console.log(">>>> AuthenticatedHomePanel OnDestroy");
                };
                AuthenticatedHomePanel = __decorate([
                    core_4.Component({
                        selector: 'authenticatedHome',
                        template: "<h3 class=\"content-top\">auth blah blah</h3>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthenticatedHomePanel);
                return AuthenticatedHomePanel;
            }());
            exports_4("AuthenticatedHomePanel", AuthenticatedHomePanel);
        }
    }
});
System.register("panels/login/LoginPanel", ['angular2/core', 'angular2/router', "services/AuthenticationService"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_5, router_2, AuthenticationService_2;
    var LoginPanel;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (AuthenticationService_2_1) {
                AuthenticationService_2 = AuthenticationService_2_1;
            }],
        execute: function() {
            LoginPanel = (function () {
                function LoginPanel(_authenticationService, _router) {
                    this._authenticationService = _authenticationService;
                    this._router = _router;
                }
                LoginPanel.prototype.ngOnInit = function () {
                    console.log(">>>> LoginPanel OnInit");
                };
                LoginPanel.prototype.ngOnDestroy = function () {
                    console.log(">>>> LoginPanel OnDestroy");
                };
                LoginPanel.prototype.authenticate = function (userId, password) {
                    this._authenticationService.Authenticate(this.userId, this.password);
                };
                ;
                LoginPanel.prototype.loginCode = function (userId, password) {
                    this._authenticationService.Authenticate(this.userId, this.password);
                    this._router.navigate(['/AuthenticatedHome']);
                };
                ;
                LoginPanel.prototype.cancel = function () {
                    this._router.navigate(["AnonymousHome"]);
                };
                ;
                LoginPanel = __decorate([
                    core_5.Component({
                        selector: 'login',
                        templateUrl: "./app/panels/login/login.html",
                        directives: [
                            router_2.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [AuthenticationService_2.AuthenticationService, router_2.Router])
                ], LoginPanel);
                return LoginPanel;
            }());
            exports_5("LoginPanel", LoginPanel);
        }
    }
});
System.register("app", ['angular2/core', 'angular2/router', "services/AuthenticationService", "panels/menu/menuPanel", "panels/main/anonymousHomePanel", "panels/main/authenticatedHomePanel", "panels/login/LoginPanel"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_6, router_3, AuthenticationService_3, menuPanel_1, anonymousHomePanel_1, authenticatedHomePanel_1, LoginPanel_1;
    var App;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (AuthenticationService_3_1) {
                AuthenticationService_3 = AuthenticationService_3_1;
            },
            function (menuPanel_1_1) {
                menuPanel_1 = menuPanel_1_1;
            },
            function (anonymousHomePanel_1_1) {
                anonymousHomePanel_1 = anonymousHomePanel_1_1;
            },
            function (authenticatedHomePanel_1_1) {
                authenticatedHomePanel_1 = authenticatedHomePanel_1_1;
            },
            function (LoginPanel_1_1) {
                LoginPanel_1 = LoginPanel_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_router) {
                    this._router = _router;
                }
                App.prototype.ngOnInit = function () {
                    console.log(">>>> App OnInit");
                    this._router.subscribe(function (path) {
                        console.log(">>>> Route Change: " + path);
                    });
                };
                App.prototype.ngOnDestroy = function () {
                    console.log(">>>> App OnDestroy");
                };
                App = __decorate([
                    core_6.Component({
                        selector: 'thisApp',
                        template: "\n    <menu></menu>\n    \n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>    \n    ",
                        directives: [
                            router_3.ROUTER_DIRECTIVES,
                            menuPanel_1.MenuPanel
                        ],
                        providers: [
                            AuthenticationService_3.AuthenticationService
                        ]
                    }),
                    router_3.RouteConfig([
                        {
                            path: '/',
                            name: 'AnonymousHome',
                            component: anonymousHomePanel_1.AnonymousHomePanel,
                            useAsDefault: true
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: LoginPanel_1.LoginPanel
                        },
                        {
                            path: '/home',
                            name: 'AuthenticatedHome',
                            component: authenticatedHomePanel_1.AuthenticatedHomePanel
                        },
                        { path: '/**', redirectTo: ['AnonymousHome'] }
                    ]), 
                    __metadata('design:paramtypes', [router_3.Router])
                ], App);
                return App;
            }());
            exports_6("App", App);
        }
    }
});
System.register("appBootstrap", ['angular2/platform/browser', 'angular2/core', 'angular2/router', "app"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var browser_1, core_7, router_4, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router_4.ROUTER_PROVIDERS,
                core_7.provide(router_4.LocationStrategy, { useClass: router_4.HashLocationStrategy })
            ]);
        }
    }
});
