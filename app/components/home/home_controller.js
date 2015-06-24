(function () {
    angular.module("mcTableSorter").controller("HomeController", ["$scope", HomeController])
    function HomeController($scope) {

        function initCtrl() {
            $scope.orderField = "name";
            $scope.reverseOrder = false;
            $scope.peopeList = [
                {name: "Ali", surname: "Veli", age: 20},
                {name: "Murat", surname: "Ayhan", age: 25},
                {name: "Mehmet", surname: "Kemal", age: 18},
                {name: "Ayşe", surname: "Hasdal", age: 30}
            ];
        }

        initCtrl();
    }
})();