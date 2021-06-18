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