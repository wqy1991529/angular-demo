/* var app = angular.module("tutor",[]);
app.controller("tutorcontro",function($scope){
$scope.price1 = 10;
$scope.count1 = 1;
}); */

var app = angular.module('wang',[])
   app.controller('w1',['$scope',function($scope){
    $scope.title = "wqwkg"
    $scope.op =0

   

 
    
    

        
    }])
    app.factory("notify",function($timeout){
      return function (message){
         $timeout(function(){
            alert(message)
         },2000)
        
      }
   })
    app.controller("w2",["$scope","notify",function($scope,notify){
       notify("hello welt")
    }])
    