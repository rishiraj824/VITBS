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
      })
      .state('admissions',{
        url: '/admissions',
        templateUrl: 'app/admission/admission-procedure.html'
      })
       .state('chancellor',{
        url: '/about-us/chancellor',
        templateUrl: 'app/about-us/chancellor.html'
      })
       .state('vm',{
         url: '/about-us/vm',
         templateUrl: 'app/about-us/vm.html'
       })
       .state('dm',{
         url: '/about-us/dm',
         templateUrl: 'app/about-us/dm.html'
       })
       .state('philosophy',{
         url: '/about-us/philosophy',
         templateUrl: 'app/about-us/philosophy.html'
       })
       .state('excellence',{
         url: '/about-us/excellence',
         templateUrl: 'app/about-us/excellence.html'
       })
       .state('vision',{
         url: '/about-us/vision',
         templateUrl: 'app/about-us/vision.html'
       })
       .state('advantage',{
         url: '/about-us/advantage',
         templateUrl: 'app/about-us/advantage.html'
       })
       .state('cdm',{
         url: '/about-us/',
         templateUrl: 'app/main/cdm.html'
       })
       .state('bschool-ranking',{
         url: '/about-us/bschool-ranking',
         templateUrl: 'app/about-us/bschool-ranking.html'
       })

      .state('chennai',{
        url: '/faculty/chennai',
        templateUrl: 'app/faculty/chennai.html'
      })
      .state('vellore',{
        url: '/faculty/vellore',
        templateUrl: 'app/faculty/vellore.html'
      })

      .state('bba',{
        url: '/programs/bba',
        templateUrl: 'app/programs/bba.html'
      })
      .state('mba',{
        url: '/programs/mba',
        templateUrl: 'app/programs/mba.html'
      })
      .state('phd',{
        url: '/programs/phd',
        templateUrl: 'app/programs/phd.html'
      })
      .state('mba-international',{
        url: '/programs/mba-international',
        templateUrl: 'app/programs/mba-international.html'
      })
      .state('executive-mba',{
        url: '/programs/executive-mba',
        templateUrl: 'app/programs/executive-mba.html'
      })
      .state('media',{
        url: '/events/media',
        templateUrl: 'app/events/media.html'
      })
      .state('photo-gallery',{
        url: '/events/photo-gallery',
        templateUrl: 'app/events/photo-gallery.html'
      })
      .state('placements',{
        url: '/placements',
        templateUrl: 'app/placements/placements.html'
      })
      .state('placement-procedure',{
        url: '/placements/placement-procedure',
        templateUrl: 'app/placements/placement-procedure.html'
      })
      .state('campus',{
        url: '/campus/campus-life',
        templateUrl: 'app/campus/campus-life.html'
      })
      .state('facilities',{
        url: '/campus/facilities',
        templateUrl: 'app/campus/facilities.html'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
