import { Component, OnInit } from '@angular/core';
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

  // defining the columns to be displayed
  displayedColumns: string[]=['id', 'clientName', 'pickUpLocation', 'time', 'link'];


  // pickups url
  private pickUpsUrl = 'api/PICKUPS';

  
  constructor(private pickupService: PickUpService) { }

  // get pickups from server
  getPickUps(){
    this.pickupService.getPickUps(this.pickUpsUrl).subscribe((p)=>{this.dataSource = p })
  }
  
  ngOnInit(): void {
    this.getPickUps();
  }



}
