/// <reference path="../../typings/tsd.d.ts" />
import {Person, Order} from './model';
import {Cache} from './cache';

export interface DataService {
    persons: Person[],
    currentPerson: Person
    orders: Order[],
    currentOrder: Order
}

module app {   
    'use strict';
    
    class DataService implements DataService {
       private _currentPerson:Person;
       private _currentOrder:Order;
       persons:Person[];
       orders:Order[];
       
       constructor(private cache: Cache){
           this.persons = cache.persons;
           this._currentPerson = this.persons[0];
           this.orders = cache.orders;
           this._currentOrder = this.orders[0];
       }
       static $inject:string[] = ['Cache']; 
            
       get currentPerson() {
           return this._currentPerson; 
       } 
       set currentPerson(value) {
           this._currentPerson = value;
       }
       get currentOrder() {
           return this._currentOrder; 
       } 
       set currentOrder(value) {
           this._currentOrder = value;
       }
    }
    
    angular
        .module('app')
        .service('DataService', DataService);
}