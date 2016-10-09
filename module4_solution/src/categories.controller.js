(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['allCategories'];
function CategoriesController(allCategories) {
  var categoriesList = this;
  categoriesList.allCategories = allCategories;
}

})();
