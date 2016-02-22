var myModule = angular.Module('weatherApp', []);
//there is a function at the end of every controller, because its a call back

myModule.controller('weatherController', ['$scope', function($scope){
    var wc = this;
    
    wc.cities = 
    [
    {
        name:'Amarillo',
        temp: 0,
        lat:0,
        lon:0,
        url_name:'Amarillo'
    },
    
    {
        name:'New York',
        temp:0,
        lat:0,
        lon:0,
        url_name:'New_york',
    },
        ];
    
}]);
