import { Component, OnInit } from '@angular/core';
import {MyFavouritesService} from "../../services/my-favourites.service";
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../../../search-car/services/cars.service";
import {MyFavourites} from "../../model/my-favourites";
import {Car} from "../../../search-car/model/car";

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.css']
})
export class MyFavouritesComponent implements OnInit {
  clientId!: string;
  favouritesData: MyFavourites[];
  carsData: Car[];

  constructor(
    private favouriteService: MyFavouritesService,
    private carService: CarsService,
    private route: ActivatedRoute
  ) {
    this.clientId = this.route.snapshot.params.clientId;
    this.favouritesData = [];
    this.carsData = [];
  }

  ngOnInit(): void {
    this.retrieveFavourites();
  }

  retrieveCars() {
    this.favouritesData.map(favourite => {
      this.carService.getById(favourite.carId).subscribe((response: any) => {
        this.carsData.push(response)
      })
    })
  }

  retrieveFavourites() {
    this.favouriteService.getByClient(this.clientId).subscribe((response: any) => {
      this.favouritesData = response;
      this.retrieveCars();
    });
  }

}
