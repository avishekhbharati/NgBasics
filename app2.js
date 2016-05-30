var app2 = angular.module('app2', []);

//controller 1
app2.controller('ctrl1', function($scope){
	$scope.first = 100;
	$scope.second = 200;
	$scope.addition = $scope.first + $scope.second;

	$scope.sum = function(){
		return $scope.first + $scope.second;
	}

	$scope.updateValue = function(){
		return  $scope.first +'+'+ $scope.second + "=" +(+$scope.first + +$scope.second);
	};
});


//controller 2
app2.controller('ctrl2', function($scope){
	$scope.badFeeling = ['ugly', 'rejected', 'suspended', 'kicked out', 'break up'];
	$scope.goodFeeling = ['beauty', 'handsome', 'patchup', 'smily', 'new friends', 'support'];
	
});


//controller 3
app2.controller('ctrl3', function($scope){
	var badFeelings = ['ugly', 'rejected', 'suspended', 'kicked out', 'break up'];
	var goodFeelings = ['beauty', 'handsome', 'patchup', 'smily', 'new friends', 'support'];

	$scope.badFel = badFeelings[Math.floor((Math.random() * 5))];
	$scope.goodFel = goodFeelings[Math.floor((Math.random() * 6))];

});

app2.controller('gListCtrl', function($scope){

	$scope.groceries =	[	{item: "Tomatoes", purchased: false},
							{item: "Potatoes", purchased: false},
							{item: "Brinjal", purchased: false},
							{item: "Carrot", purchased: false}
						];

	$scope.getList = function(){
		return $scope.showList ? 'ulgrocerylist.html' : 'grocerylist.html';
	}	
});

app2.controller('partialViews', function($scope){
	$scope.n = function(){
		return $scope.showList ? 'ulgrocerylist.html' : 'grocerylist.html';
	}	

});
