(function () {
'use strict';

angular.module('data')
.component('itemsData', {
  templateUrl: 'src/templates/itemsData.html',
  bindings: {
    items: '<'
  }
});

})();
