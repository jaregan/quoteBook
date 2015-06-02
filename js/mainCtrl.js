var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainQuotes) {

	$scope.getQuotes = function() {
		$scope.quotes = mainQuotes.getData();
	}
	$scope.getQuotes();

	$scope.addQuote = mainQuotes.addData;

	$scope.newQuote = {
		text: "",
		author: ""
	};

	$scope.removeQuote = mainQuotes.removeData;

	$scope.delQuote = "";

	$scope.quoteFilter = "";

	$scope.toggle = "";

	// unoptimized version of toggle code
	// $scope.toggleAdd = false;
	// $scope.toggleRem = false;
	// $scope.toggleFilter = false;

	$scope.tog = function(str) {
		$scope.toggle = str;
	};

	// unoptimized version of toggle code

	// $scope.addTog = function() {
	// 	if ($scope.toggleAdd === false && $scope.toggleRem === false && $scope.toggleFilter === false) {
	// 		$scope.toggleAdd = true;
	// 	}
	// 	else if ($scope.toggleAdd === true) {
	// 		$scope.toggleAdd = false;
	// 	}
	// 	else {
	// 		alert("Only one option can be expanded at a time! Please close other Add/Remove/Filter options first by click on them again.");
	// 	}
	// };

	// $scope.remTog = function() {
	// 	if ($scope.toggleAdd === false && $scope.toggleRem === false && $scope.toggleFilter === false) {
	// 		$scope.toggleRem = true;
	// 	}
	// 	else if ($scope.toggleRem === true) {
	// 		$scope.toggleRem = false;
	// 	}
	// 	else {
	// 		alert("Only one option can be expanded at a time! Please close other Add/Remove/Filter options first by click on them again.");
	// 	}
	// };

	// $scope.filterTog = function() {
	// 	if ($scope.toggleAdd === false && $scope.toggleRem === false && $scope.toggleFilter === false) {
	// 		$scope.toggleFilter = true;
	// 	}
	// 	else if ($scope.toggleFilter === true) {
	// 		$scope.toggleFilter = false;
	// 	}
	// 	else {
	// 		alert("Only one option can be expanded at a time! Please close other Add/Remove/Filter options first by click on them again.");
	// 	}
	// };
});