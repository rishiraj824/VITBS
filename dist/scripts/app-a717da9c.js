!function(){"use strict";function a(a,e){a.state("home",{url:"/",templateUrl:"app/main/main.html"}),e.otherwise("/")}angular.module("vitbs",["ui.router","ui.bootstrap"]).config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function a(){}angular.module("vitbs").controller("NavbarController",a)}(),function(){"use strict";var a=angular.module("vitbs");a.controller("CarouselCtrl",["$scope",function(a){a.myInterval=3e3,a.captionInterval=4e3,a.slides=[{image:"http://lorempixel.com/1920/700/sports",caption:"The University For Leaders"},{image:"http://lorempixel.com/1920/700/food",caption:"The University For Leaders"},{image:"http://lorempixel.com/1920/700/sports",caption:"The University For Leaders"},{image:"http://lorempixel.com/1920/700/food",caption:"The University For Leaders"}]}])}(),angular.module("vitbs").run(["$templateCache",function(a){a.put("app/main/main.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div ng-controller="CarouselCtrl" id="slides"><div><carousel><slide ng-repeat="slide in slides" active="slide.active"><img ng-src="{{slide.image}}"><div class="carousel-caption" interval="captionInterval"><h1>{{slide.caption}}</h1><div class="underline"></div></div></slide></carousel></div></div><div class="container"><div class="about-section-home"><br><h3>Scripting Success through Excellence</h3><br><p>VIT Business School, is fast emerging as a premier management institution that adapts to the ever changing needs of the industry. The focus is on making the MBA graduates versatile and innovative, in line with the current and emerging industry requirements.</p><a href="#" class="btn btn-theme hvr-shutter-out-horizontal">Read More</a></div></div><div class="container"><div class="footer"></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" id="nav-new" ng-controller="NavbarController as navbar"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="#">VIT BS</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav pull-right"><li><a ng-href="#">About Us</a></li><li><a ng-href="#">Programs</a></li><li><a ng-href="#">Admissions</a></li><li><a ng-href="#">Campus</a></li><li><a ng-href="#">Placements</a></li><li><a ng-href="#">Events</a></li><li><a ng-href="#">Contact Us</a></li></ul></div></div></nav>')}]);