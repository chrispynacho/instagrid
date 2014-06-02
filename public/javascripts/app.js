var instaGridApp = angular.module('instaGridApp', [
  'ngRoute',
  'instaGridControllers',
  'instaGridServices'
]);

instaGridApp.config(['$routeProvider', '$locationProvider', 
  function routes($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/grid.html',
      controller: 'GridCtrl'
    })
    .when('/city/:cityId', {
      templateUrl: 'partials/grid.html',
      controller: 'GridCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }
  ]);
