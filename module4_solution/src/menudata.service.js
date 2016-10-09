(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiCategoriesUrl', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ApiItemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http', 'ApiCategoriesUrl']
function MenuDataService($http, ApiCategoriesUrl) {

  var service = this;

  service.getAllCategories = function(){
    return $http({
        method: "GET",
        url: (ApiCategoriesUrl)
      })
    .then(function(result){
        return result.data;
    })
    .catch(function(error) {
        console.log('There was an error: ' + error);
    });
  };

}

})();
