app.service("cityService",function(){
    this.location = { lat: 52.1205333, lon: 11.6276237 };
    
})
app.service("wikipediaService", function($http) {
    return{
        endpoints:{
            'en': {
                title: "Englische Wikipedia",
                url: "https://en.wikipedia.org/w/api.php"
            },
            'de': {
                title: "Deusche Wikipedia",
                url: "https://de.wikipedia.org/w/api.php"
            },
            'zh': {
                title: "Chinesische Wikipedia",
                url: "https://zh.wikipedia.org/w/api.php"
            }
        },
        query: function(endpoint,keyword){
            var url = this.endpoints[endpoint].url;
            
            return $http.jsonp(url, {
                params: {
                    format: "json",
                    action: "query",
                    generator: "search",
                    gsrlimit: "5",
                    prop: "extracts",
                    exintro: 1,
                    exsentences: 10,
                    exlimit: "max",
                    gsrsearch: keyword,
                    callback: "JSON_CALLBACK"
                }
    }).then(function(data){
        return data.data.query.pages;
    })
    
        }
    } 
    
    
})