var instaGridControllers = angular.module('instaGridControllers', []);

var locations = {
  chi: {lat: '41.8376', long: '-87.6818',  name: 'Chicago'},
  dal: {lat: '32.7757', long: '-96.7967',  name: 'Dallas'},
  hou: {lat: '29.7805', long: '-95.3863',  name: 'Houston'},
  lax: {lat: '34.0194', long: '-118.4108', name: 'Los Angeles'},
  nyc: {lat: '40.6643', long: '-73.9385',  name: 'New York'},
  phi: {lat: '40.0094', long: '-75.1333',  name: 'Philadelphia'},
  phx: {lat: '33.5722', long: '-112.0880', name: 'Phoenix'},
  sad: {lat: '32.8153', long: '-117.1350', name: 'San Diego'},
  saf: {lat: '37.7751', long: '-122.4193', name: 'San Francisco'},
  saj: {lat: '37.2969', long: '-121.8193', name: 'San Jose'},
  sat: {lat: '29.4724', long: '-98.5251',  name: 'San Antonio'}
};

instaGridControllers.controller('GridCtrl', ['$scope', 'Images',
  function GridCtrl($scope, Images) {
    $scope.locations = locations;
    $scope.currLocation = locations.saf;

    $scope.loadGrid = function loadGrid() {
      $scope.images = Images.query({lat: $scope.currLocation.lat, lng: $scope.currLocation.long});
    };

    $scope.loadGrid();
  }
]);