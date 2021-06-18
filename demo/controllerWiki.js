app.controller('startController',function($scope,wikipediaService){
    $scope.endpoints = wikipediaService.endpoints
    })
    app.controller('resultController',function($scope,$routeParams,wikipediaService){
        $scope.results={}
        $scope.characters1 = 8
        $scope.runSearch = function(keyword){
        var result = wikipediaService.query($routeParams.endpoint,keyword);
            result.then(function(data){
                $scope.results=data
            })
        }
       
    })