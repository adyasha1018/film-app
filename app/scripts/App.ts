///<reference path="Reference.ts"/>
module filmApp {
    export class App {
        module: ng.IModule;
        constructor() {
            this.module = angular.module('filmApp',['filmApp.Controllers','restangular','ui.router',
            'ngMaterial']);
            let router = new filmApp.Router();
            let bootstrapper = new filmApp.Bootstrapper(this.module,router);
            bootstrapper.bootstrap();
        }
    }
    new App();
}