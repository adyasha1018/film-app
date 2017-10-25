var filmApp;
(function (filmApp) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/filmList");
            $stateProvider
                .state('filmList', {
                "url": "/filmList",
                templateUrl: 'views/filmList.html',
                controller: 'FilmListController as filmListVM'
            });
        };
        return Router;
    }());
    filmApp.Router = Router;
})(filmApp || (filmApp = {}));
var filmApp;
(function (filmApp) {
    var Bootstrapper = (function () {
        function Bootstrapper(module, router) {
            this.module = module;
            this.router = router;
        }
        Bootstrapper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider",
                function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider);
                }]);
        };
        Bootstrapper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
        };
        Bootstrapper.prototype.initRestangular = function (RestangularProvider) {
            RestangularProvider.setParentless(true, []);
            RestangularProvider.setBaseUrl("http://swapi.co/api");
        };
        return Bootstrapper;
    }());
    filmApp.Bootstrapper = Bootstrapper;
})(filmApp || (filmApp = {}));
var filmApp;
(function (filmApp) {
    var Controllers;
    (function (Controllers) {
        var FilmListController = (function () {
            function FilmListController(restangular) {
                var vm = this;
                init();
                function init() {
                    vm.showDetailData = false;
                    vm.loadFilmDetails = loadFilmDetails;
                    vm.filterByName = filterByName;
                    loadFilmList();
                }
                function loadFilmList() {
                    restangular.one('people').get().then(function (data) {
                        vm.filmLists = data.results;
                    }, function (error) {
                        console.log(error);
                    });
                }
                function loadFilmDetails(entity) {
                    vm.showDetailData = true;
                    var id = (entity.url).split("/")[5];
                    restangular.one('people/' + id).get().then(function (data) {
                        vm.entity = data;
                    }, function (error) {
                        console.log(error);
                    });
                }
                function filterByName(input, index) {
                    var table, tr, td, i;
                    input = input.toUpperCase();
                    table = document.getElementById("myTable");
                    tr = table.getElementsByTagName("tr");
                    for (i = 0; i < tr.length; i++) {
                        td = tr[i].getElementsByTagName("td")[index];
                        if (td) {
                            if (td.innerHTML.toUpperCase().indexOf(input) > -1) {
                                tr[i].style.display = "";
                            }
                            else {
                                tr[i].style.display = "none";
                            }
                        }
                    }
                }
            }
            FilmListController.$inject = ["Restangular"];
            return FilmListController;
        }());
        Controllers.FilmListController = FilmListController;
    })(Controllers = filmApp.Controllers || (filmApp.Controllers = {}));
})(filmApp || (filmApp = {}));
angular.module('filmApp.Controllers', []).controller(filmApp.Controllers);
var filmApp;
(function (filmApp) {
    var App = (function () {
        function App() {
            this.module = angular.module('filmApp', ['filmApp.Controllers', 'restangular', 'ui.router',
                'ngMaterial']);
            var router = new filmApp.Router();
            var bootstrapper = new filmApp.Bootstrapper(this.module, router);
            bootstrapper.bootstrap();
        }
        return App;
    }());
    filmApp.App = App;
    new App();
})(filmApp || (filmApp = {}));
//# sourceMappingURL=filmApp.js.map