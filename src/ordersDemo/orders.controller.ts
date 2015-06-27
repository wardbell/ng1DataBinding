/// <reference path="../../typings/tsd.d.ts" />
import {Order} from '../services/model';
import {DataService} from '../services/data.service';

module app {
	'use strict';
	class OrdersController {
		orders: Order[];
		constructor(private service:DataService) {        
			this.orders = service.orders;
		}
		static $inject:string[] = ['DataService'];	
		select(order: Order) {
			this.service.currentOrder = order; 
	    }
	}		
	
	angular
		.module('app')
		.controller('OrdersController', OrdersController);	
}