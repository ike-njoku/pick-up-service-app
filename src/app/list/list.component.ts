import { Component, OnInit } from '@angular/core';
import { PickUp } from '../pick-up-interface';



// DATA SOURCE (replace using http client and a url)
const TABLE_DATA: PickUp[] = [

  {id: 1, 
    pickUpTime:'Wed Nov 25 2020 11:23:26 GMT-0800', 
    address: {
    firstName:'David',
    phoneNumber: 7038686694,
    zip:'5445-Aba',
    street:'MungoPark'
  }},
  
  {id: 2, 
    pickUpTime:'Wed Nov 25 2020 12:54:47 GMT-0800', 
    address: {
    firstName:'Chidalu',
    phoneNumber: 7038792802,
    zip:'4127-OWR',
    street:'Chukwuma Nworah'
  }}

];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // the data source from where the table is populated
  dataSource = TABLE_DATA;

  // defining the columns to be displayed
  displayedColumns: string[]=['id', 'clientName', 'pickUpLocation', 'time'];

  constructor() { }
  
  ngOnInit(): void {
    
  }



}
