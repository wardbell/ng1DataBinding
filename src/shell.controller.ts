/// <reference path="../typings/tsd.d.ts" />
module app {
	'use strict';
		
	function makeViewUrl(viewName:string) {
  		return "src/" + viewName + "Demo/" + viewName + ".html"; // ugh..   
 	}
	 
 	class ShellController {
		 demo:string;
		 
		 constructor(){
			 this.demo = makeViewUrl('fullName');
		 }
	     show(demoName:string) {
			 this.demo = makeViewUrl(demoName);
		 }	  
	}
	 
	angular
	   	.module('app')   
	    .controller('ShellController', ShellController);
}