(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    // controller: 'CategoriesController as categories',
    // resolve: {
    //   items: ['MenuDataService', function (MenuDataService) {
    //     return MenuDataService.getAllCategories();
    //   }]
    // }
  })

  // Item detail
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/templates/item-detail.template.html',
    // controller: 'ItemDetailController as itemDetail',
    // resolve: {
    //   item: ['$stateParams', 'ShoppingListService',
    //         function ($stateParams, ShoppingListService) {
    //           return ShoppingListService.getItems()
    //             .then(function (items) {
    //               return items[$stateParams.itemId];
    //             });
    //         }]
    // }
  });

}

})();
