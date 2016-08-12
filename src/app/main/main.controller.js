(function() {
  'use strict';

  var app = angular.module('vitbs');
  /*CArousel*/
    app.controller('CarouselCtrl', function($scope){
      $scope.myInterval = 3000;
      $scope.captionInterval = 4000;
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
    app.controller('DescriptionCtrl', function($scope){
     
      $scope.description = [
    {
      image: 'assets/images/worldwide.png',
      caption: 'Internation Tie - Ups and MOUs'
    },
    {
      image: 'assets/images/user.png',
       caption: 'Application Based Learning'
    },
    {
      image: 'assets/images/teamwork.png',
       caption: 'Student Exchange Program'
    },
    {
      image: 'assets/images/office-block1.png',
       caption: 'State of The Art Infrastructure'
    }
  ];
});
/*  app.controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      'type': 'video',
      'url': 'https://www.youtube.com/watch?v=N7TkK2joi4I',
      'thumbUrl': 'https://i.ytimg.com/vi/N7TkK2joi4I/1.jpg'
    }
  ];

  $scope.Lightbox = Lightbox;
});*/

 
   
})();
