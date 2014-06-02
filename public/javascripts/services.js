var instaGridServices = angular.module('instaGridServices', ['ngResource']);

instaGridServices.factory('Images', ['$resource',
  function($resource) {
    return $resource('/images', {lat: 37.7750, lng: 122.4183});
  }
]);