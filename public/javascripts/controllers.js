var instaGridControllers = angular.module('instaGridControllers', []);

var locations = [
  {lat: '41.8376', long: '-87.6818',  id: 'chi', name: 'Chicago'},
  {lat: '32.7757', long: '-96.7967',  id: 'dal', name: 'Dallas'},
  {lat: '29.7805', long: '-95.3863',  id: 'hou', name: 'Houston'},
  {lat: '34.0194', long: '-118.4108', id: 'lax', name: 'Los Angeles'},
  {lat: '40.6643', long: '-73.9385',  id: 'nyc', name: 'New York'},
  {lat: '40.0094', long: '-75.1333',  id: 'phi', name: 'Philadelphia'},
  {lat: '33.5722', long: '-112.0880', id: 'phx', name: 'Phoenix'},
  {lat: '32.8153', long: '-117.1350', id: 'sad', name: 'San Diego'},
  {lat: '37.7751', long: '-122.4193', id: 'sfo', name: 'San Francisco'},
  {lat: '37.2969', long: '-121.8193', id: 'saj', name: 'San Jose'},
  {lat: '29.4724', long: '-98.5251',  id: 'sat', name: 'San Antonio'}
];

instaGridControllers.controller('GridCtrl', ['$scope', '$routeParams', '$location', 'Images',
  function GridCtrl($scope, $routeParams, $location, Images) {
    if ($location.hash() == '') {
      $location.hash('sfo');
    }

    $scope.locations = locations;

    var cityId = $location.hash();
    $scope.currLocation = _.find(locations, {id: cityId});
    $scope.images = Images.query({lat: $scope.currLocation.lat, lng: $scope.currLocation.long});

    $scope.loadGrid = function loadGrid() {
      // Causes the controller to reload
      $location.hash($scope.currLocation.id);
    };
  }
]);