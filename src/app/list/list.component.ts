import { Component, OnInit } from '@angular/core';
import { PickUp } from '../pick-up-interface';



// DATA SOURCE
const TABLE_DATA: PickUp[] = [

  {id: 1, pickUpTime:'Wed Nov 25 2020 11:23:26 GMT-0800', address: {
    firstName:'David',
    zip:'5445-Aba',
    street:'MungoPark'
  }}

];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }



}
