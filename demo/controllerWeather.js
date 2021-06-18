app.controller('weatherController',['$scope','$resource',"cityService",function($scope,$resource,cityService){
    $scope.location = cityService.location
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/onecall?appid=b477252420dfb672f9c013bc74f0521a",{
        callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});// in case of preventing the block data of website
    $scope.weatherResults = $scope.weatherAPI.get({lat: $scope.location.lat,lon: $scope.location.lon})
    $scope.convertToDc = function(degk){
        return Math.round(degk-273.15)
    }
    $scope.convertToDate = function(date){
        return new Date(date*1000)
    }
    
    }]);
    app.controller('weatherhomeController',['$scope',"cityService",function($scope,cityService){
        $scope.location = cityService.location
    $scope.$watch("location.lat","location.lon",function(){
        cityService.location = $scope.location
    })
    }]);