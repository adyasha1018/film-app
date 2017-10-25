///<reference path="Reference.ts"/>
module filmApp {
    export class Bootstrapper {
        constructor(public module: ng.IModule, public router: filmApp.Router) {
        }
        bootstrap() {
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider",
                (RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: any) =>
                    this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider)]);
        }
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
        }
        initRestangular(RestangularProvider: any) {
            RestangularProvider.setParentless(true, []);
             RestangularProvider.setBaseUrl("http://swapi.co/api");
        }
    }
}
