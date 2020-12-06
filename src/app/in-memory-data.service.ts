import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const PICKUPS =[
      {id: 'OCTO-001', 
        pickUpTime:'Wed Nov 25 2020 11:23:26 GMT-0800', 
        address: {
        firstName:'David',
        lastName: 'Chimamanda', 
        phoneNumber: 7038686694,
        zip:'5445-Aba',
        street:'MungoPark Close',
        state:'Owerri',
        country: 'Nigeria',
      },pickedUp:false},
      
      {id: 2, 
        pickUpTime:'Wed Nov 25 2020 12:54:47 GMT-0800', 
        address: {
        firstName:'Chidalu',
        phoneNumber: 7038792802,
        zip:'4127-OWR',
        street:'Chukwuma Nworah'
      }
      ,
      pickedUp:false},
      {id: 3, 
        pickUpTime:'Wed Nov 25 2020 12:54:47 GMT-0800', 
        address: {
        firstName:'Ebube',
        phoneNumber: 7038799447,
        zip:'4127-OWR',
        street:'Ihiagwa'
      },pickedUp:false},
      {id: 4, 
        pickUpTime:'Wed Nov 25 2020 12:54:47 GMT-0825', 
        address: {
        firstName:'Linus',
        phoneNumber: 7038711762,
        zip:'4127-OWR',
        street:'World Bank'
      },pickedUp:false}

    ];

    return { PICKUPS}
  }

}
