var app = angular.module('ngClass', []);
app.controller('HomeCtrl', ['$scope', function($scope){
  $scope.styles = {
    'bold': false,
    'italics': false
  };

  $scope.changeStyle = function (style) {
    $scope.styles[style] = !$scope.styles[style];
  };

  $scope.validation = {
    'error': false,
    'success': false
  };

  $scope.validateForm = function () {
    if ($scope.name.length < 4){
      $scope.validation.error = true;
      $scope.validation.success = false;
    } else {
      $scope.validation.error = false;
      $scope.validation.success = true;
    }
  };
}]);