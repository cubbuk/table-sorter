"use strict";
angular
    .module("mcTableSorter", [
        "ui.router",
        "ui.bootstrap"
    ])
    .config(["$urlRouterProvider", "$locationProvider", "$logProvider", function ($urlRouterProvider, $locationProvider, $logProvider) {
        console.log("Application initialized.. " + new Date());
        $logProvider.debugEnabled(true);
        $urlRouterProvider.otherwise("/");
    }])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "components/home/home.html",
                controller: "HomeController"
            })
    }])
    .run(["$rootScope", "$state", function ($rootScope, $state) {
    }]);
