(function() {
  'use strict';

  angular
    .module('vitbs', ['ui.bootstrap','ui.router', 'ngAnimate','ngParallax'  ])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {

        url: '/',
        templateUrl: 'app/main/main.html'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
