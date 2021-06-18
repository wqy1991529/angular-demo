app.directive("panel2",function(){
    return{
        templateUrl:"elements1/panel2.html",
        scope:{
            panelMessage2:"=",
            convertToDate:"&",
            convertToDc:"&",
            dateFormat:"@"
        },
        transclude:true  
    }
})

app.directive("panel",function(){
    return{
        templateUrl:"elements1/panel1.html",
        scope:{
            title:"@",
            panelMessage:"@",
            useFunction:"&"
        
            
        },
        transclude:true   // there is nothing in scope
    }
})