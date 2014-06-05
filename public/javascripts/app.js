var instaGridApp = angular.module('instaGridApp', [
  'ngRoute',
  'instaGridControllers',
  'instaGridServices'
]);

instaGridApp.config(['$routeProvider', '$locationProvider', 
  function routes($routeProvider, $locationProvider) {
    $routeProvider
    .when('/city/', {
      templateUrl: '/partials/grid.html',
      controller: 'GridCtrl'
    })
    .otherwise({
      redirectTo: '/city/'
    });
    $locationProvider.html5Mode(true);
  }
  ]);
