/// <reference path="../../typings/tsd.d.ts" />
export interface Person {
 	personId:number,
	firstName:string,
	lastName: string,
	fullname: string,
	birthDate: Date,
	age: number,
	mom:Person,
	dad:Person,
	friends: Person[],
	friendsNames: string
}

export interface Order {

}

export interface OrderItem {

}