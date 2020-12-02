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

  

  ngOnInit(): void {

  }


}
