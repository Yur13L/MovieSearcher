angular.module('mainApp')

.config(function($routeProvider) {
    $routeProvider
    // routes
    
    .when('/viewmovie', {
        templateUrl : 'app/components/about/aboutView.html',
        controller  : 'aboutController'
    })
    
    .when('/', {
        templateUrl : 'app/components/home/homeView.html',
        controller  : 'homeController'
    });
    
});
