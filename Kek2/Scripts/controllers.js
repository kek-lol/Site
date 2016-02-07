var model = {
	woods: [
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"},
		{kind:"Сосна", product:"Доска", grade:"1--5", thickness:"50", width:"180", length:"3985", photo:"dgsdgdfg.img", date:"12.02.2016", volume:"3000", place:"Усть-Илимск", brand:"Леспром"}
		   ]
	
};

var nameListApp = angular.module("nameListApp", []);

nameListApp.controller("nameListCtrl", function($scope){
	$scope.data = model;
	var date = new Date();
	
	$scope.addNewOrder = function() {
		$scope.data.woods.push({
			kind: $scope.kindValue,
			product: $scope.productValue,
			grade: $scope.gradeValue,
			thickness: $scope.thicknessValue,		
			width: $scope.widthValue,	
			length: $scope.lengthValue,		
			photo: $scope.photoValue,	
			date: date.toUTCString(),
			volume: $scope.volumeValue,	
			place: $scope.placeValue,
			brand: $scope.brandValue
		});
		$scope.kindValue = "";
		$scope.productValue = "";
		$scope.gradeValue = "";
		$scope.thicknessValue = "";
		$scope.widthValue = "";
		$scope.lengthValue = "";
		$scope.photoValue = "";
		$scope.dateValue = "";
		$scope.volumeValue = "";
		$scope.placeValue = "";
		$scope.brandValue = "";
	};
});