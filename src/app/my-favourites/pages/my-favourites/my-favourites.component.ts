import { Component, OnInit } from '@angular/core';
import {MyFavouritesService} from "../../services/my-favourites.service";
import {CarsService} from "../../../search-car/services/cars.service";
import {MyFavourites} from "../../model/my-favourites";
import {Car} from "../../../search-car/model/car";
import {ClientService} from "../../../my-profile/services/client.service";
import {CarModelsService} from "../../../search-car/services/car-models.service";
import {CarBrandsService} from "../../../search-car/services/car-brands.service";

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.css']
})
export class MyFavouritesComponent implements OnInit {
  clientId!: number;
  favouritesData: MyFavourites[];
  carsData: Car[];

  constructor(
    private clientService: ClientService,
    private favouriteService: MyFavouritesService,
    private carService: CarsService,
    private carModelsService: CarModelsService,
    private carBrandsService: CarBrandsService,
  ) {
    this.clientId = parseInt(<string>localStorage.getItem('clientId'));
    this.favouritesData = [];
    this.carsData = [];
  }

  ngOnInit(): void {
    this.retrieveFavourites();
  }

  retrieveCars() {
    this.favouritesData.map(favourite => {
      this.carService.getById(favourite.carId).subscribe((response: any) => {
        this.carsData.push(response);
      });
    });
  }

  getModelName(index: number, carModelId: number): any {
    this.carModelsService.getById(carModelId).subscribe((response: any) => {
      this.carsData[index].model = response.name;
      this.getBrandName(index, response.carBrandId);
    });
  }

  getBrandName(index: number, carBrandId: number): any {
    this.carBrandsService.getById(carBrandId).subscribe((response: any) => {
      this.carsData[index].brand = response.name;
    });
  }

  retrieveFavourites() {
    this.favouriteService.getByClientId(this.clientId).subscribe((response: any) => {
      this.favouritesData = response.content;
      this.retrieveCars();

      setTimeout(() => {
        for (let i = 0; i < this.carsData.length; i++) {
          this.getModelName(i, this.carsData[i].carModelId);
        }
      }, 500);
    });
  }
}
