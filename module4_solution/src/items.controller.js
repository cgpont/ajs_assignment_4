(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryItems'];
function ItemsController(categoryItems) {
  var itemsDetail = this;
  itemsDetail.categoryItems = categoryItems;
}

})();
