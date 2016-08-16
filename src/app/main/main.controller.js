(function() {
  'use strict';

  var app = angular.module('vitbs');
  new WOW().init();

 

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
    app.controller('CarouselCtrl1', function($scope){
      
    
      $scope.myInterval = 3000;
      $scope.captionInterval = 4000;
      $scope.slides = [
          {
            image: 'http://lorempixel.com/310/300/sports',
            caption: 'The University For Leaders',
            description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
            link : '#'
          },
          {
            image: 'http://lorempixel.com/310/300/food',
             caption: 'The University For Leaders',
             description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
             link : '#'
          },
          {
            image: 'http://lorempixel.com/310/300/sports',
             caption: 'The University For Leaders',
             description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
             link : '#'
          },
          {
            image: 'http://lorempixel.com/310/300/food',
             caption: 'The University For Leaders',
             description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
             link : '#'
          }
        ];
    });
     app.controller('CarouselCtrl2', function($scope){
      
     
      $scope.myInterval = 3000;
      $scope.slides = [
          {
            image: 'http://lorempixel.com/310/300/sports',
            caption: 'The University For Leaders',
            description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
            link: "#"
          },
          {
            image: 'http://lorempixel.com/310/300/food',
             caption: 'The University For Leaders',
             description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
             link: "#"
          },
          {
            image: 'http://lorempixel.com/310/300/sports',
             caption: 'The University For Leaders',
             description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
             link: "#"
          },
          {
            image: 'http://lorempixel.com/310/300/food',
             caption: 'The University For Leaders',
             description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum',
             link: "#"
          }
        ];
    });
   
   app.controller('ModalDemoCtrl',  function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});
    
   app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

 
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
})();
