import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";
import {ClientService} from "../../../my-profile/services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {
  @Input() car !: Car;
  @Input() clientId !: number;
  moreInformation !: string;

  constructor(private clientService: ClientService, private router: Router) {

  }

  ngOnInit(): void {
    this.moreInformation = `${this.router.url}/car/${this.car.id}`;
  }
}
