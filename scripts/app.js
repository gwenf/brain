angular.module('brainApp',[
    'ui.router',
    'ngAnimate',
    'ngModal'
  ])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
      url: '/',
      templateUrl: '../templates/home.html'
    });
    $stateProvider.state('terms',{
      url: '/terms',
      templateUrl: '../templates/terms.html'
    });
  }])
