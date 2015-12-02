var app = angular.module('ngClass', ['ngAnimate']);
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

app.controller('AnimateCtrl', ['$scope', function($scope){
  $scope.names = ['Fer', 'Denis'];

  $scope.addName = function () {
    $scope.names.push($scope.nameInput);
    $scope.nameInput = '';
  };
}]);

app.controller('MyCtrl', ['$scope', function($scope){
  $scope.songs=['Sgt. Peppers Lonely Hearts Club Band','With a Little Help from My Friends','Lucy in the Sky with Diamonds','Getting Better' ,'Fixing a Hole','Shes Leaving Home','Being for the Benefit of Mr. Kite!' ,'Within You Without You','When Im Sixty-Four','Lovely Rita','Good Morning Good Morning','Sgt. Peppers Lonely Hearts Club Band (Reprise)','A Day in the Life'];
}]);