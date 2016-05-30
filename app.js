var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope){
	$scope.first = 100;
	$scope.second = 200;
	$scope.addition = $scope.first + $scope.second;

	$sum = function(){
		return $scope.first + $scope.second;
	}


	$scope.updateValue = function(){
		$scope.calculation =  $scope.first +'+'+ $scope.second + "=" +(+$scope.first + +$scope.second);
	};
});