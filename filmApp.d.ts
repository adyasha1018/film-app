/// <reference path="node_modules/definitely-typed-jquery/jquery.d.ts" />
/// <reference path="node_modules/definitely-typed-angular/angular.d.ts" />
/// <reference path="app/scripts/Misc.d.ts" />
declare module filmApp {
    class Router {
        initialize($stateProvider: any, $urlRouteProvider: any): void;
    }
}
declare module filmApp {
    class Bootstrapper {
        module: ng.IModule;
        router: filmApp.Router;
        constructor(module: ng.IModule, router: filmApp.Router);
        bootstrap(): void;
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider): void;
        initRestangular(RestangularProvider: any): void;
    }
}
declare module filmApp.Controllers {
    class FilmListController {
        filmLists: Array<any>;
        entity: any;
        loadFilmDetails: (entity: any) => any;
        showDetailData: boolean;
        filterByName: (input, index) => void;
        static $inject: string[];
        constructor(restangular: any);
    }
}
declare module filmApp {
    class App {
        module: ng.IModule;
        constructor();
    }
}
