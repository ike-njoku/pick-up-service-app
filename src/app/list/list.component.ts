import { Component, OnInit } from '@angular/core';
import { Address } from '../address-interface';
import { FeedBackService } from '../feed-back.service';
import { PickUp } from '../pick-up-interface';
import { PickUpService } from '../pick-up.service';


// DATA SOURCE (replace using http client and a url)

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // the data source from where the table is populated
  dataSource: PickUp[];

  // addresses (delete after)
  addresses: Address[];
  
  // defining the columns to be displayed
  displayedColumns: string[]=['id', 'clientName', 'pickUpLocation', 'time', 'link'];

  constructor(
    private pickupService: PickUpService,
    public feedBackService: FeedBackService
    ) { }

  // get pickups from server , catch error 
  getPickUps(){
    this.pickupService.getPickUps().subscribe(
      (p)=>{this.dataSource = p }, (error)=>{
        let duration = 70000
        // call the feedBack service to display the error;
        this.feedBackService.returnFeedBack(error, duration);
      } )
  }

  getAddresses(){
    this.pickupService.getAddresses().subscribe(
      (addresses)=> this.addresses = addresses , (error)=>{
        this.feedBackService.returnFeedBack(error, 100000);
      }
    )
  }
  
  ngOnInit(): void {
    this.getPickUps();

    this.getAddresses();
  }



}
