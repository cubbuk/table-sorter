(function () {
    angular.module("mcTableSorter").directive("tableSorter", [tableSorter])

    function tableSorter() {
        return {
            restrict: "AE",
            scope: {
                headerTitle: "@",
                headerValue: "@",
                orderBy: "=",
                reverse: "="
            },
            templateUrl: "directives/table_sorter/table_sorter.html",
            link: function (scope, elem, attrs) {
                scope.orderObject = scope.orderObject || {};
                if (scope.headerValue && !scope.orderBy) {
                    scope.orderBy = scope.headerValue;
                    scope.reverse = true;
                }
                if (scope.headerValue) {
                    elem.bind("click", function () {
                        scope.$apply(function () {
                            if (scope.orderBy === scope.headerValue) {
                                scope.reverse = !scope.reverse;
                            } else {
                                scope.reverse = true;
                            }
                            scope.orderBy = scope.headerValue;
                        })
                    });
                }
            }
        };
    }
})();
