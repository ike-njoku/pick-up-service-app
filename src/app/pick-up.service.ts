import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,  } from 'rxjs';
import { PickUp } from './pick-up-interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PickUpService {

  // http client
  constructor(
    private http: HttpClient,
    
    ) { }

  // pickups api url
  pickUpsUrl = 'api/PICKUPS';


  // getPickUps (get the pickups listings)
  getPickUps(): Observable<PickUp[]>{
    return this.http.get<PickUp[]>(this.pickUpsUrl)  .pipe(
      //catch and handle errors
      catchError(this.handleError)
    )
    
  }





  // handle http errors
  handleError(error){
    return throwError(error.message || "SERVER ERROR...please retry" );
  }
}

