!function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html"}).state("admissions",{url:"/admissions",templateUrl:"app/admission/admission-procedure.html"}).state("chancellor",{url:"/about-us/chancellor",templateUrl:"app/about-us/chancellor.html"}).state("vm",{url:"/about-us/vm",templateUrl:"app/about-us/vm.html"}).state("dm",{url:"/about-us/dm",templateUrl:"app/about-us/dm.html"}).state("philosophy",{url:"/about-us/philosophy",templateUrl:"app/about-us/philosophy.html"}).state("excellence",{url:"/about-us/excellence",templateUrl:"app/about-us/excellence.html"}).state("vision",{url:"/about-us/vision",templateUrl:"app/about-us/vision.html"}).state("advantage",{url:"/about-us/advantage",templateUrl:"app/about-us/advantage.html"}).state("cdm",{url:"/about-us/",templateUrl:"app/main/cdm.html"}).state("bschool-ranking",{url:"/about-us/bschool-ranking",templateUrl:"app/about-us/bschool-ranking.html"}).state("chennai",{url:"/faculty/chennai",templateUrl:"app/faculty/chennai.html"}).state("vellore",{url:"/faculty/vellore",templateUrl:"app/faculty/vellore.html"}).state("bba",{url:"/programs/bba",templateUrl:"app/programs/bba.html"}).state("mba",{url:"/programs/mba",templateUrl:"app/programs/mba.html"}).state("phd",{url:"/programs/phd",templateUrl:"app/programs/phd.html"}).state("mba-international",{url:"/programs/mba-international",templateUrl:"app/programs/mba-international.html"}).state("executive-mba",{url:"/programs/executive-mba",templateUrl:"app/programs/executive-mba.html"}).state("media",{url:"/events/media",templateUrl:"app/events/media.html"}).state("photo-gallery",{url:"/events/photo-gallery",templateUrl:"app/events/photo-gallery.html"}).state("placements",{url:"/placements",templateUrl:"app/placements/placements.html"}).state("placement-procedure",{url:"/placements/placement-procedure",templateUrl:"app/placements/placement-procedure.html"}).state("campus",{url:"/campus/campus-life",templateUrl:"app/campus/campus-life.html"}).state("facilities",{url:"/campus/facilities",templateUrl:"app/campus/facilities.html"}),a.otherwise("/")}angular.module("vitbs",["ui.bootstrap","ui.router","ngAnimate","ngParallax","ngMap"]).config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("vitbs").controller("NavbarController",["$scope",function(){$(function(){$(".dropdown").hover(function(){$(".dropdown-menu",this).stop(!0,!0).fadeIn("fast"),$(this).toggleClass("open")},function(){$(".dropdown-menu",this).stop(!0,!0).fadeOut("fast"),$(this).toggleClass("open")})})}])}(),function(){"use strict";var e=angular.module("vitbs");(new WOW).init(),e.controller("CarouselCtrl",["$scope",function(e){e.myInterval=3e3,e.slides=[{image:"http://lorempixel.com/1920/700/",caption:"The University For Leaders"},{image:"http://lorempixel.com/1920/700/",caption:"The University For Leaders"},{image:"http://lorempixel.com/1920/700/",caption:"The University For Leaders"},{image:"http://lorempixel.com/1920/700/",caption:"The University For Leaders"}]}]),e.controller("DescriptionCtrl",["$scope",function(e){e.description=[{image:"assets/images/worldwide.png",caption:"Internation Tie - Ups and MOUs"},{image:"assets/images/user.png",caption:"Application Based Learning"},{image:"assets/images/teamwork.png",caption:"Student Exchange Program"},{image:"assets/images/office-block1.png",caption:"State of The Art Infrastructure"}]}]),e.controller("CarouselCtrl1",["$scope",function(e){e.myInterval=3e3,e.captionInterval=4e3,e.slides=[{image:"http://lorempixel.com/210/300/",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"},{image:"http://lorempixel.com/210/300/",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"},{image:"http://lorempixel.com/210/300/",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"},{image:"http://lorempixel.com/210/300/",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"}]}]),e.controller("CarouselCtrl2",["$scope",function(e){e.myInterval=3e3,e.slides=[{image:"http://lorempixel.com/210/300/",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"},{image:"http://lorempixel.com/210/300/food",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"},{image:"http://lorempixel.com/210/300/",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"},{image:"http://lorempixel.com/210/300/food",caption:"The University For Leaders",description:"Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum",link:"#"}]}]),e.controller("ModalDemoCtrl",["$scope","$uibModal","$log",function(e,a,s){e.animationsEnabled=!0,e.open=function(i){var l=a.open({animation:e.animationsEnabled,templateUrl:"myModalContent.html",controller:"ModalInstanceCtrl",size:i,resolve:{items:function(){return e.items}}});l.result.then(function(a){e.selected=a},function(){s.info("Modal dismissed at: "+new Date)})},e.toggleAnimation=function(){e.animationsEnabled=!e.animationsEnabled}}]),e.controller("ModalInstanceCtrl",["$scope","$uibModalInstance","items",function(e,a){e.ok=function(){a.close(e.selected.item)},e.cancel=function(){a.dismiss("cancel")}}]),e.controller("MapCtrl",["NgMap",function(e){e.getMap().then(function(e){console.log(e.getCenter()),console.log("markers",e.markers),console.log("shapes",e.shapes)})}])}(),angular.module("vitbs").run(["$templateCache",function(e){e.put("app/about-us/advantage.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/about-us/bschool-ranking.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/about-us/cdm.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/about-us/chancellor.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Chancellor\'s Message</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Chancellor\'s Message</li></ol></div></div><div class="container main-content"><img class="img-responsive float-left" src="../../assets/images/chancellor.jpg"><p class="text-indent"><br><br>Business Education imparts knowledge, skills and attitudes required for business managers. Business skills are essential for budding managers, as these skills enable repeated testing and practice for ensuring success. Every skill, with practice, becomes a handy tool for faster decision making. This happens when repeated skill training and usage helps with storing the routines in subconscious memory. The ease of skill application by experienced managers is mainly due to repeated practice and experience. VIT Business School imparts prospective managers with business skills that help them in their careers. VITBS students get ample opportunities for honing business skills in the curriculum and through extracurricular activities. The VIT business school education is in tune with the Skill India initiative of the Government of India, which focuses on increasing employability quotient and consequently developing employable managers. While government efforts are targeted at lower order employability skills, VIT Business School targets the higher order skills that help in management. Managerial skills get better with a systematic learning structure rather than by trial and error. Therefore, our business school has a rigorous learning process that trains students in acquiring better managerial skills. Educated in an ambience of academic rigour and fun-filled co-curricular activities, our business school students are business ready managers. Our illustrious alumni have always been our proud ambassadors. They have been making their indelible marks of quality and integrity, in multinational companies, social enterprises and academic Institutions to the utmost satisfaction of the employers. I wish the budding professionals aspiring to join VIT Business School success in all their endeavours.<br><br><span style="color:#333;font-weight:700;">Dr. G. Viswanathan</span><br>Founder & Chancellor</p><br><br></div>'),e.put("app/about-us/dm.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Dean\'s Message</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Dean\'s Message</li></ol></div></div><div class="container main-content"><img class="img-responsive float-left" src="../../assets/images/vc.jpg"><p class="text-indent"><br><br>I have great pleasure in welcoming you to the VIT Business School! You are about to commence an important journey in your life and we are looking forward to being a part of it and contributing to your success.<br>In order to achieve our VIT Business School mission statement, we must work smart, be a sport, and have an open mind to learn whatever is taught to you by our faculty members in MBA/BBA program, attend all the classes thoughtfully, take tests and examinations on schedule and develop some working knowledge, skills and languages. “Working knowledge” means knowledge of Management which you can put into practice. ‘Working Skills’ means you must be able to ‘work’ on business related Technologies, develop business models, get exposure to functional disciplines to make higher order required skills in the fields of Securities or Commodities exchanges, Retail business, Sell a Product or Service, Business supportive Software’s like Tally ERP, Supply Chain Management or SAP, Export-Import documentation, set up web portals, etc., to qualify just be ready to do anything for your profession/ business in our highly competitive, globalizing business world.<br>We are providing the world class environment on par to many western Universities. We demonstrate our strength and opportunities in teaching, learning and training our students to become ready professionals both in terms of placement and self employment.<br>I wish them all the very best.<br><br><span style="color:#333;font-weight:700;">Dr. D. ASHOK</span><br>Professor and Dean - VITBS</p><br><br></div>'),e.put("app/about-us/excellence.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/about-us/philosophy.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/about-us/vision.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/about-us/vm.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Vice Chancellor\'s Message</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Vice Chancellor\'s Message</li></ol></div></div><div class="container main-content"><img class="img-responsive float-left" src="../../assets/images/vc.jpg"><p class="text-indent"><br><br>Business schools’ excellence depends on the extent of interaction students have with industries, the extent of exposure to the outside business world and the depth of learning taking place in the campus. The opportunities given to students to nurture their creativity, organizing skills and application of the concepts for real world scenario are also important for the progress of any business school. Application of digital tools, cross border experience with multi ethnic groups and practical experience of entrepreneurial skills are also critical. I am glad that, VIT Business School is moving ahead in the right direction in reaching the pinnacle in all these areas. Active management student clubs, conduct of continuous co & extracurricular competitions, simulation exercises, case analysis, outbound training sessions with social interactions are the integral part of VITBS. Having e-portfolio and developing the digital footprint and use of digital social media in every facet of management are part of VITBS students’ campus life. VITBS moulds the students to be industry ready, with soft skill programmes and communication training as a part of their curriculum. The academic rigor at VITBS gives strong foundation of concepts in management to students. Given an opportunity our students will excel and prove themselves to be responsible leaders of the 21st century business world.<br>I wish them all the very best.<br><br><span style="color:#333;font-weight:700;">Dr. ANAND A. SAMUEL</span><br>Vice Chancellor</p><br><br></div>'),e.put("app/admission/admission-procedure.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/campus/campus-life.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/campus/facilities.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/events/media.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/events/photo-gallery.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/faculty/chennai.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/faculty/vellore.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/main/main.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div id="slides"><div ng-controller="CarouselCtrl"><div><uib-carousel interval="myInterval"><uib-slide ng-repeat="slide in slides" active="slide.active"><img ng-src="{{slide.image}}"><div class="overlay"></div><div class="carousel-caption wow slideInLeft" data-wow-duration="1s"><h1>{{slide.caption}}</h1><div class="underline"></div></div></uib-slide></uib-carousel></div></div></div><div class="container"><div class="about-section-home wow fadeInUp" data-wow-duration="1s"><br><h2>Scripting Success through Excellence</h2><br><p>VIT Business School, is fast emerging as a premier management institution that adapts to the ever changing needs of the industry. The focus is on making the MBA graduates versatile and innovative, in line with the current and emerging industry requirements.</p><br><a href="#" class="btn-theme hvr-shutter-out-horizontal">Read More</a></div><div class="description-section-home wow fadeInUp" data-wow-duration="1s"><div ng-controller="DescriptionCtrl"><div ng-repeat="desc in description"><div class="col-sm-12 col-lg-3 col-xs-12 col-md-3"><img class="cursor-pointer hvr-float" src="{{desc.image}}"><p class="cursor-pointer">{{desc.caption}}</p><br></div></div></div></div></div><div><div ng-controller="ModalDemoCtrl"><script type="text/ng-template" id="myModalContent.html"><div class="modal-header"> <a href="#" ng-click="cancel()"><i class="fa fa-times fa-2x white" ></i></a> </div> <div class="modal-body"> <iframe id="cartoonVideo" width="800" height="500" src="//www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe> </div></script><div class="height" ng-click="open(\'lg\')" ng-parallax="" pattern="\'http://lorempixel.com/1900/900/sports\'" speed="0" reverse="false"><div class="overlay"></div><span class="play">&#9658;</span></div></div></div><div class="campuss-buzz"><br><div class="container"><h2 class="section-header">Campus Buzz</h2><br></div><div class="col-sm-12 col-lg-6 col-md-6 padding-lr-0"><div ng-controller="CarouselCtrl1" id="slides-small"><div><uib-carousel interval="myInterval" class="vertical hvr-sweep-to-right"><uib-slide ng-repeat="slide in slides" active="slide.active"><div class="small-slide"><div class="col-sm-4 col-lg-4 col-md-4 padding-lr-0"><div class="img-container grow"><img ng-src="{{slide.image}}"></div></div><div class="col-sm-8 col-lg-8 col-md-8"><div class="content-container"><h3 class="heading-carousel">Testimonials</h3><h2 class="carousel-caption-small cursor-pointer hvr-bob">{{slide.caption}}</h2><p class="carousel-caption-description">{{slide.description}}</p><a href="{{slide.link}}" class="know-more hvr-underline-from-center">Read More</a></div></div></div></uib-slide></uib-carousel></div></div></div><div class="col-sm-12 col-lg-6 col-md-6 padding-lr-0"><div ng-controller="CarouselCtrl2" id="slides-small"><div><uib-carousel interval="myInterval" class="vertical hvr-sweep-to-left"><uib-slide ng-repeat="slide in slides" active="slide.active"><div class="small-slide"><div class="col-sm-4 col-lg-4 col-md-4 padding-lr-0"><div class="img-container grow"><img ng-src="{{slide.image}}"></div></div><div class="col-sm-8 col-lg-8 col-md-8"><div class="content-container wow fadeIn" data-wow-duration="1s"><h3 class="heading-carousel">Events</h3><h2 class="carousel-caption-small cursor-pointer hvr-bob">{{slide.caption}}</h2><p class="carousel-caption-description">{{slide.description}}</p><a href="{{slide.link}}" class="know-more hvr-underline-from-center">See All Events</a></div></div></div></uib-slide></uib-carousel></div></div></div></div><div class="admission-section-home"><div class="container"><br><h2>Admission Procedure</h2><br><p>VIT Business School, is fast emerging as a premier management institution that adapts to the ever changing needs of the industry. The focus is on making the MBA graduates versatile and innovative, in line with the current and emerging industry requirements.</p><br><a href="#" class="btn-theme hvr-shutter-out-horizontal">Know More</a></div></div><div class="programs-offered"><br><div class="col-lg-3 col-sm-12 col-md-3 padding-lr-0"><div class="program-offered-card dark-blue"><h2 class="program-details">Programs offered</h2></div></div><div class="courses col-lg-6 col-sm-12 col-md-6 padding-lr-0"><a ng-href="#/programs/bba"><div class="width-20 col-lg-4 col-sm-12 col-md-4 cursor-pointer padding-lr-0"><div class="program-offered-card"><h2 class="program-details hvr-float">BBA</h2></div></div></a> <a ng-href="#/programs/mba"><div class="width-20 col-lg-4 col-sm-12 col-md-4 cursor-pointer padding-lr-0"><div class="program-offered-card"><h2 class="program-details hvr-float">MBA</h2></div></div></a> <a ng-href="#/programs/phd"><div class="width-20 col-lg-4 col-sm-12 col-md-4 cursor-pointer padding-lr-0"><div class="program-offered-card"><h2 class="program-details hvr-float">PHD</h2></div></div></a><div class="blue-overlay"></div></div><div class="col-lg-3 col-sm-12 col-md-3 cursor-pointer padding-lr-0"><div class="program-offered-card dark-blue"><h2 class="program-details hvr-float"><span class="bold">2016</span><br>Prospectus</h2><a href="#" class="btn-theme hvr-shutter-out-horizontal">Download Prospectus</a></div></div></div><div class="timeline"><ol><li><span class="details cursor-pointer hvr-float"><h4>22 Aug</h4></span></li><li><span class="details cursor-pointer hvr-float"><h4>Description of point 2</h4></span></li><li><span class="details cursor-pointer hvr-float"><h4>Description of point 3</h4></span></li><li><span class="details cursor-pointer hvr-float"><h4>Description of point 3</h4></span></li></ol></div><div class="reach-us" id="contact-us" ng-controller="MapCtrl"><br><div class="courses col-lg-12 col-sm-12 col-md-12 padding-lr-0"><div map-lazy-load="https://maps.google.com/maps/api/js"><ng-map center="41,-87" zoom="3"></ng-map></div></div></div>'),e.put("app/placements/placement-procedure.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/placements/placements.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/programs/bba.html",'<div ng-include="\'../../app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/programs/executive-mba.html",'<div ng-include="\'../../app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/programs/mba-international.html",'<div ng-include="\'../../app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/programs/mba.html",'<div ng-include="\'../../app/components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/programs/phd.html",'<div ng-include="\'../components/navbar/navbar.html\'"></div><div class="pagelanding"><h2>Admissions</h2><div class="purple-overlay"></div></div><div class="purple"><div class="container padding-lr-0"><ol class="breadcrumb purple"><li><a href="#">Home</a></li><li class="active">Admissions</li></ol></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" id="nav-new" ng-controller="NavbarController as navbar"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="/">VIT BS</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav pull-right"><li class="dropdown"><a role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">About Us</a><ul class="dropdown-menu"><li><a ng-href="#/about-us/chancellor">Chancellor\'s Message</a></li><li><a ng-href="#/about-us/vm">Vice Chancellor\'s Message</a></li><li><a ng-href="#/about-us/dm">Dean\'s Message</a></li><li><a ng-href="#/about-us/vision">Our Mission, Values And Beliefs</a></li><li><a ng-href="#/about-us/advantage">VIT Business School Advantage</a></li><li><a ng-href="#/about-us/philosophy">Our Philosophy of Learning</a></li><li><a ng-href="#/about-us/excellence">Course that\'s Designed for Excellence</a></li><li><a ng-href="#/about-us/cdm">Course Delivery Model</a></li><li><a ng-href="#/about-us/bschool-ranking">Business School Ranking</a></li></ul></li><li class="dropdown"><a role="button" data-toggle="dropdown" class="dropdown-toggle">Programs</a><ul class="dropdown-menu"><li><a ng-href="#/programs/mba-international">MBA (International Business)</a></li><li><a ng-href="#/programs/mba">MBA</a></li><li><a ng-href="#/programs/bba">BBA</a></li><li><a ng-href="#/programs/executive-mba">Executive MBA</a></li><li><a ng-href="#/programs/phd">PHD</a></li></ul></li><li class="dropdown"><a role="button" data-toggle="dropdown" class="dropdown-toggle">Admissions</a><ul class="dropdown-menu"><li><a ng-href="#/admissions">Admission Procedure</a></li><li><a ng-href="##">Information Brochure</a></li></ul></li><li class="dropdown"><a role="button" data-toggle="dropdown" class="dropdown-toggle">Faculty</a><ul class="dropdown-menu"><li><a ng-href="#/faculty/chennai">Chennai Campus</a></li><li><a ng-href="#/faculty/vellore">Vellore Campus</a></li></ul></li><li class="dropdown"><a role="button" data-toggle="dropdown" class="dropdown-toggle">Campus</a><ul class="dropdown-menu"><li><a ng-href="http://vit.ac.in/campus/hostels">Hostel</a></li><li><a ng-href="http://vit.ac.in/academics/hostels">Library</a></li><li><a ng-href="#/campus/campus-life">Campus-Life</a></li><li><a ng-href="#/campus/facilities">Facilities</a></li></ul></li><li class="dropdown"><a role="button" data-toggle="dropdown" class="dropdown-toggle">Placements</a><ul class="dropdown-menu"><li><a ng-href="#/placements">Placements</a></li><li><a ng-href="#/placements/placement-procedure">Placement Procedure</a></li></ul></li><li class="dropdown"><a role="button" data-toggle="dropdown" class="dropdown-toggle">Events</a><ul class="dropdown-menu"><li><a ng-href="#/events/media">Media</a></li><li><a ng-href="#/events/photo-gallery">Photo Gallery</a></li></ul></li><li><a href="#/home/#contact-us">Contact Us</a></li></ul></div></div></nav>')}]);