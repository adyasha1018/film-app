/// <reference path="Reference.ts" />
module filmApp.Controllers {
    export class FilmListController {
        filmLists: Array<any>;
        entity: any;
        loadFilmDetails: (entity: any) => any;
        showDetailData: boolean;
        filterByName: (input,index) => void;
        static $inject = ["Restangular"];
        constructor(restangular) {
            var vm = this;
            init();
            function init() {
                vm.showDetailData = false;
                vm.loadFilmDetails = loadFilmDetails;
                vm.filterByName = filterByName;
                loadFilmList();
            }
            function loadFilmList() {
                restangular.one('people').get().then((data) => {
                    vm.filmLists = data.results;
                }, error => {
                    console.log(error);
                });
            }
            function loadFilmDetails(entity: any) {
                vm.showDetailData = true;
                let id = (entity.url).split("/")[5];
                restangular.one('people/' + id).get().then((data) => {
                    vm.entity = data;
                }, error => {
                    console.log(error);
                });
            }
            function filterByName(input,index) {
                var table, tr, td, i;
                // input = document.getElementById("myInput");
                // filter = input.value.toUpperCase();
                input = input.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");

                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[index];
                    if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(input) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        }
    }
}