///<reference path="Reference.ts"/>
module filmApp {
    export class Router {
        initialize($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/filmList");
            $stateProvider
                .state('filmList', {
                    "url": "/filmList",
                    templateUrl: 'views/filmList.html',
                    controller: 'FilmListController as filmListVM'
                });
        }
    }
}