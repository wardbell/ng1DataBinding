/// <reference path="../../typings/tsd.d.ts" />
import {DataService} from '../services/data.service';
 
module app {
	'use strict';
	class FullNameController {
		constructor(private service:DataService) {
		}
		static $inject:string[] = ['DataService'];
			
        get person() {
           return this.service.currentPerson; 
        }
	}
	
	angular
		.module('app')
		.controller('FullNameController', FullNameController);
}