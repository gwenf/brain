var app = angular.module('brainApp',[
    'ui.router',
    'ngAnimate',
    'ngModal'
  ]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'templates/home.html'
  });
  $stateProvider.state('cart',{
    url: '/cart',
    templateUrl: 'templates/cart.html'
  });
  $stateProvider.state('thankyou',{
    url: '/thankyou',
    templateUrl: 'templates/thankyou.html'
  });
  $stateProvider.state('terms',{
    url: '/terms',
    templateUrl: 'templates/terms.html'
  });
  $stateProvider.state('ingredients',{
    url: '/ingredients',
    templateUrl: 'templates/ingredients.html'
  });
  $stateProvider.state('privacy',{
    url: '/privacy',
    templateUrl: 'templates/privacy.html'
  });
}]);

app.controller('ScrollCtrl', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoWhy = function() {
      $location.hash('whyTake');
      $anchorScroll();
    };
    $scope.gotoHow = function() {
      $location.hash('howDoes');
      $anchorScroll();
    };
    $scope.gotoBuyNow = function() {
      $location.hash('buyNow');
      $anchorScroll();
    };
  }]);

  app.controller('FormCtrl', function($scope) {
      $scope.users = [
          {id: 1, name: 'Aaron'},
          {id: 2, name: 'David'},
          {id: 3, name: 'Moses'}
      ];

      $scope.selectedUsers = [];

      $scope.compareFn = function(obj1, obj2){
          return obj1.id === obj2.id;
      };

      $scope.checkFirst = function() {
          $scope.selectedUsers.splice(0, $scope.selectedUsers.length, $scope.users[0]);
      };

      $scope.checkAll = function() {
          $scope.selectedUsers.splice(0, $scope.selectedUsers.length);
          for (var i in $scope.users) {
               $scope.selectedUsers.push($scope.users[i]);
          }
      };

      $scope.uncheckAll = function() {
          $scope.selectedUsers.splice(0, $scope.selectedUsers.length);
      }
  });
