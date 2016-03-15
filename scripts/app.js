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
  $stateProvider.state('why', {
      url: '/why',
      template: '<h1>This Is A State</h1>'
  });
  $stateProvider.state('how', {
      url: '/how',
      template: '<h1>This Is A State</h1>'
  });
}]);
