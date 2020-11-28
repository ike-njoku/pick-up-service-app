import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PickUp } from './pick-up-interface';

@Injectable({
  providedIn: 'root'
})
export class PickUpService {

  constructor(private http: HttpClient) { }

  // get pickUps
  getPickUps( url, query? ): Observable<PickUp[]>{
    return this.http.get<PickUp[]>(url);
  }
}

