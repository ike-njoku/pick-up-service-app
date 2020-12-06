import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FeedBackService } from '../feed-back.service';
import { PickUp } from '../pick-up-interface';
import { PickUpService } from '../pick-up.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pickupService: PickUpService,
    private location: Location,
    public feedBackService: FeedBackService
  ) { }

  // property to attach fetched Pickup to
  pickUp: PickUp; 

  // pickup id
  pickUpId;

  pickedUp;


  // get PickUP id from URL
  getId(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.pickUpId = id;
  }

  // go back (previous page)
  goBack(){
    this.location.back();
  }

  // fetch pickUp details
  getPickUp(){
    this.getId();
    // call the pickUpService.getPickUp to return the details of the pickup with said ID
    this.pickupService.getPickUp(this.pickUpId).subscribe((m)=>this.pickUp=m,(error)=>this.feedBackService.returnFeedBack(error, 8000));
      
  }


  // mark item as picked
  markAsPicked(): void{
    this.pickupService.markAsPicked(this.pickUpId).subscribe((p)=>this.pickedUp = p, (error)=>{
      console.log(error);
      this.feedBackService.returnFeedBack(error,800);
    })
  }

  ngOnInit(): void {
    this.getPickUp();
  }


}
