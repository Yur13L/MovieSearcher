angular.module('mainApp',['ui.router', 'ui.bootstrap'])


.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise("/");
                 
                $stateProvider
                        .state('home', {
                            url: "/",
                            templateUrl: "app/components/home/homeView.html",
                            controller: 'homeController'
                        })


            }]);