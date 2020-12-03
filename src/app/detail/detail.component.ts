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
  pickUp;   


  // go back (previous page)
  goBack(){
    this.location.back();
  }

  // fetch pickUp details
  getPickUp(){
    // get the id from the url
    const pickUpId = this.route.snapshot.paramMap.get('id');
    // call the pickUpService.getPickUp to return the details of the pickup with said ID
    this.pickupService.getPickUp(pickUpId)
      .subscribe((p)=>this.pickUp = p, (error)=>this.feedBackService.returnFeedBack(error, 800))
  }

  ngOnInit(): void {
    this.getPickUp();
  }


}
