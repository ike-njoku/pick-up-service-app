import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PickUp } from '../pick-up-interface';
import { PickUpService } from '../pick-up.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 
  // property to attach the pickups to
  pickUp: PickUp;

  // pickUps url
  pickupsUrl

  constructor(
    private route: ActivatedRoute,
    private pickupService: PickUpService
  ) { }

  getPickUp(): void {
    // take a snap shot of the url and extract the parameter <id> from it
    const id = this.route.snapshot.paramMap.get('id');
    // pass the id to the getPickUp method of the pickups service
    this.pickupService.getPickUp(this.pickupsUrl,id).subscribe((p)=>this.pickUp = p)
  }

  ngOnInit(): void {
    this.getPickUp();
  }

}
