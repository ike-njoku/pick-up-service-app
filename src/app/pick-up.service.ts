import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,  } from 'rxjs';
import { PickUp } from './pick-up-interface';
import { catchError } from 'rxjs/operators';
import { Address } from './address-interface';



@Injectable({
  providedIn: 'root'
})
export class PickUpService {

  // http client
  constructor(
    private http: HttpClient,
    ) { }

  // pickups api url
  pickUpsUrl = 'http://localhost:3000/pick_ups';
 
  // getPickUps (get the pickups listings)
  getPickUps(): Observable<PickUp[]>{
    return this.http.get<PickUp[]>(this.pickUpsUrl)  .pipe(
      //catch and handle errors
      catchError(this.handleError)
    )
    
  }

  // delete after
  getAddresses(): Observable<Address[]>{
    return this.http.get<Address[]>('http://localhost:3000/addresses').pipe(
      catchError(this.handleError)
    )
  }


  // get PickUp (single pickUp , confer detailComponent)
  getPickUp(id): Observable<PickUp>{
    // define the pickUp to fetch
    const url = `${this.pickUpsUrl}/${id}`;
    return this.http.get<PickUp>(url).pipe(
      // catch error
      catchError(this.handleError)
    )
  }

  // mark an item as picked Up
  markAsPicked(id): Observable<PickUp[]>{
    const url = `${this.pickUpsUrl}/${id}`;
    return this.http.patch<PickUp[]>(url, {
      pickedUp: true
    }).pipe(
      catchError(this.handleError)
    );
  }


  // handle http errors
  handleError(error){
    debugger;
    return throwError(error.message || "SERVER ERROR...please retry" );
  }
}

