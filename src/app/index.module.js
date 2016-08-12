(function() {
  'use strict';

  angular
    .module('vitbs', ['ui.router', 'ui.bootstrap'])
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
