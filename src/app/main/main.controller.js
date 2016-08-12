(function() {
  'use strict';

  var app = angular.module('vitbs');
  /*CArousel*/
    app.controller('CarouselCtrl', function($scope){
      $scope.myInterval = 3000;

      $scope.slides = [
    {
      image: 'http://lorempixel.com/1920/700/sports',
      caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/700/food',
       caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/700/sports',
       caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/700/food',
       caption: 'The University For Leaders'
    }
  ];
});

 
})();
