/// <reference path="../../typings/tsd.d.ts" />
import {Person, Order, OrderItem} from './model';

export interface Cache {
    persons: Person[],
    orders: Order[],
    orderItems: OrderItem[]
}

module app {   
    'use strict';
    class Cache {
        persons: Person[];
        orders: Order[] = [];
        orderItems: OrderItem[] = [];  
             
        constructor(){       

            let persons = [
                /* 0 */ new Person('Victor', 'Savkin', '1990-3-15'),
                /* 1 */ new Person('Igor', 'Minar', '1980-3-15'),
                /* 2 */ new Person('John', 'Papa', '1974-5-24'),
                /* 3 */ new Person('Nancy', 'Duarte', '1962-8-27'),
                /* 4 */ new Person('Jack', 'Papa', '1948-6-7'),
                /* 5 */ new Person('Jill', 'Papa', '1950-7-8'),
                /* 6 */ new Person('Ward', 'Bell', '1954-4-11'),
                /* 7 */ new Person('Robert', 'Bell', '1928-12-7'),
                /* 8 */ new Person('Tracy', 'Ward', '1922-9-4'),
                /* 9 */ new Person('Dan', 'Wahlin', '1970-10-4')
            ];
            
            // Deliberately made Victor friends w/ himself
            // to see fullName propagation to friends
            persons[0].friends = [0, 1, 2, 6, 9].map(function (_) { return persons[_]; });
            persons[1].friends = [0, 2, 6, 9].map(function (_) { return persons[_]; });
            persons[2].friends = [0, 1, 6, 9].map(function (_) { return persons[_]; });
            persons[6].friends = [0, 1, 2, 9].map(function (_) { return persons[_]; });
            persons[9].friends = [0, 1, 2, 6].map(function (_) { return persons[_]; });
            
            persons[2].mom = persons[5];
            persons[2].dad = persons[4];
            persons[6].mom = persons[8];
            persons[6].dad = persons[7];
            this.persons = persons;
        }
    }
    
    class Person implements Person {
        personId:number;
        birthDate:Date;
        mom: Person;
        dad: Person;
        friends: Person[];
        
        constructor(public firstName:string, public lastName:string, bDate: string | Date) {
            this.personId = Person.nextId++;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDate = null;
            this.mom = null;
            this.dad = null;
            this.friends = [];
            this.personId = Person.nextId++;
            if (bDate) {
                this.birthDate = typeof bDate === 'string' ? new Date(bDate) : bDate;
            }           
        }
        static nextId = 1;
        static currentYear = new Date().getFullYear();
        
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        
        get age(){
             var bdt = this.birthDate;
            return bdt ? moment.duration(Date.now() - bdt.valueOf()).years() : null;           
        }
        
        get friendsNames() {
            return this.friends.map(function (f) { return f.fullName; }).join(', ');          
        }       
    }
   
    angular
        .module('app')
        .service('Cache', Cache);
}
