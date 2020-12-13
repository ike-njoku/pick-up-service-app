import { Component, OnInit } from '@angular/core';
import { FeedBackService } from '../feed-back.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})

export class FeedBackComponent implements OnInit {
  constructor(private feedBackService: FeedBackService) {
  }

  ngOnInit(): void {
  }

  
}
