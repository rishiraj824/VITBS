(function() {
  'use strict';

  angular
    .module('vitbs')
    .controller('NavbarController', function($scope){
    	$(function(){
    	    $(".dropdown").hover(            
    	            function() {
    	                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
    	                $(this).toggleClass('open');              
    	            },
    	            function() {
    	                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
    	                $(this).toggleClass('open');          
    	            });
    	    });
    });

  /** @ngInject */
  function NavbarController() {
    var vm = this;

  }
})();
