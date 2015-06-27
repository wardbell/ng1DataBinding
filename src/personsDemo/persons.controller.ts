/// <reference path="../../typings/tsd.d.ts" />
import {Person} from '../services/model';
import {DataService} from '../services/data.service';
 
module app {
	'use strict';
	class PersonsController {
		persons: Person[];
		constructor(private service:DataService) {        
			this.persons = service.persons;
		}
		static $inject:string[] = ['DataService'];	
		select(person: Person) {
			this.service.currentPerson = person; 
	    }
	}
	
	angular
		.module('app')
		.controller('PersonsController', PersonsController);
}