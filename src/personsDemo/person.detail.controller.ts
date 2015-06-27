/// <reference path="../../typings/tsd.d.ts" />
import {Person} from '../services/model';
import {DataService} from '../services/data.service';

module app {
    'use strict';  
    class PersonDetailController {
        opened:boolean = false;
        
        constructor(private service:DataService) {           
        }
        static $inject:string[]=['DataService'];
        
        get person() {
           return this.service.currentPerson; 
        }
        
        /* DatePicker stuff */
        open($event:any) {
           $event.preventDefault();
           $event.stopPropagation();
           this.opened = true; 
        }
    }
    
    angular
        .module('app')        
        .controller('PersonDetailController', PersonDetailController);
}    
