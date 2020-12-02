import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
  // property to attach feedBack/ errors to
  feedBack = '';
  // duration
  duration;

  constructor() { }

  // give feedback
  returnFeedBack(feedBack, duration){
    this.feedBack = feedBack;
    this.duration = duration;
    // clear feedBack
    this.clearFeedBack();
  }

  clearFeedBack(){
    // clear the feed back after {duration}
   setTimeout(() => {
      this.feedBack = '';
   }, this.duration);
    
  }
}
