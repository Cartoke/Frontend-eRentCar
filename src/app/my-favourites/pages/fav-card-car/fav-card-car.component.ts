import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fav-card-car',
  templateUrl: './fav-card-car.component.html',
  styleUrls: ['./fav-card-car.component.css']
})
export class FavCardCarComponent implements OnInit {
  @Input() car!: Car;
  moreInformationUrl!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.router.navigate([`/client${this.car.clientId}/search/car/${this.car.id}`])
    this.moreInformationUrl = `/client/${this.car.clientId}/search/car/${this.car.id}`;
  }
//http://localhost:4200/client/1/search/car/1
}
