(function () {
'use strict';

angular.module('data')
.component('categoriesData', {
  templateUrl: 'src/templates/categoriesData.html',
  bindings: {
    categories: '<'
  }
});

})();
