(function(){
  'use strict';


  var shoppingList1 = [
    "Milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Bismol",
    "Pepto Bismol (Chocolate Flavor)","Pepto Bismol (Cookie Flavor)",
  ];

  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "12"
    },
    {
      name: "Peanut Butter",
      quantity: "32"
    },
    {
      name: "Pepto Bismol",
      quantity: "42"
    },
    {
      name: "Pepto Bismol (Chocolate Flavor)",
      quantity: "52"
    },
    {
      name: "Pepto Bismol (Cookie Flavor)",
      quantity: "26"
    }
  ];

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController);
  ShoppingListController.$inject = ['$scope', '$timeout'];

  function ShoppingListController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function(){
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.showNumberOfWatchers();
      $scope.shoppingList2.push(newItem);
    };

    $scope.showNumberOfWatchers = function () {
      console.log("# of Watchers: " +  $scope.$$watchersCount);
    };
  };

})();
