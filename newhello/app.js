/* var app = angular.module("tutor",[]);
app.controller("tutorcontro",function($scope){
$scope.price1 = 10;
$scope.count1 = 1;
}); */

var app = angular.module('myApp',['ngRoute'])
    app.controller('MyCtrl',['$scope',function($scope){
        $scope.message=''
         // count the left of text
        $scope.getCount = function (){
            if($scope.message.length > 100){
                $scope.message = $scope.message.slice(0,100)
            }
            return 100-$scope.message.length
        }
        // save the text
        $scope.save = function(){
            alert('note is saved')
            localStorage.setItem('note_key',JSON.stringify($scope.message))
            $scope.message = ""
        }
        //load the text
        $scope.read = function(){
            $scope.message = JSON.parse(localStorage.getItem('note_key')||'[]')//[] deal null problem,
         
            //cause localStorage.getItem('note_key')=null if direct load druck
            $scope.remove = function(){
                localStorage.removeItem('note_key')
                $scope.message = ''
            }
        }
       

    }]);
    app.controller('MyCtrl2',['$scope',function($scope){
        $scope.todos = [
            {name:'work', isChecked: false},
            {name:'eat', isChecked:false},
            {name:'play', isChecked: false}
        ]
        // add
        $scope.add = function(){

            // sort data
            let obj = {
                name: $scope.newTodo ,
                isChecked: false
            }
            $scope.todos.unshift(obj)
            $scope.newTodo=''
            
        }
        // delete
      /*   $scope.del = function(){

           $scope.todos.forEach(function(item,index) {
               // choosing selected
               if(item.isChecked){
                   $scope.todos.splice(index,1)
                   $scope.del()
               }
           });   // method 1
             */
        //}
           $scope.del = function (){
               let s = $scope.todos
               $scope.todos = []
               s.forEach(function(item,index) {
                   if(!item.isChecked){
                       $scope.todos.push(item)
                   }
               });
           }
        }
    ]);
    app.controller('MyCtr3',['$scope',function($scope){
        $scope.members = ["li","wq"]
        
        
    
    }]);
    app.directive("tutorialPanel",function(){
        return {
            restrict: "EAC",
            templateUrl:"newhello/panel.html"
        }
    });