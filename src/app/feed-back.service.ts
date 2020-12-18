import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
  // property to attach feedBack/ errors to
  feedBack = new BehaviorSubject('');
  // duration
  duration;

  constructor() { }

  // give feedback
  returnFeedBack(feedBack, duration){
    this.feedBack.next(feedBack);
    this.duration = duration;
    // clear feedBack
    this.clearFeedBack();
  }

  clearFeedBack(){
    // clear the feed back after {duration}
   setTimeout(() => {
      this.feedBack.next('');
   }, this.duration);
    
  }
}
