import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";
import {ClientService} from "../../../my-profile/services/client.service";

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {
  @Input() userCar !: Car;
  @Input() userId !: string;

  constructor() {
    this.userCar = {} as Car;
  }

  ngOnInit(): void {

  }


}
