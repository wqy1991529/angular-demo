app.controller('MyCtrl',['$scope',function($scope){
    
    $scope.message=''
     // count the left of text
    $scope.getCount = function (){
        if($scope.message.length > 100){
            $scope.message = $scope.message.slice(0,100)
        }
        return 100-$scope.message.length
    }
    $scope.characters = 100
    // save the text
    $scope.save = function(){
        alert('file is saved')
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