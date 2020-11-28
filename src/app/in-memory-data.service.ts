import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const PICKUPS =[
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

    return { PICKUPS}
  }

}
