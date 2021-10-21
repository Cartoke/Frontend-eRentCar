import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../../../search-car/services/cars.service";
import {Car} from "../../../search-car/model/car";
import {Location} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {RentDialogComponent} from "../../../search-car/pages/rent-dialog/rent-dialog.component";
import {MyFavouritesService} from "../../../my-favourites/services/my-favourites.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carId!: string;
  carData!: Car;
  clientId!: string;
  days: number = 1;
  isFavourite = false;
  favouriteId!: string;

  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
    private location: Location,
    public rentDialog: MatDialog,
    private favouriteService: MyFavouritesService
  ) {
    this.carId = this.route.snapshot.params.carId;
    this.clientId = this.route.snapshot.params.clientId;
    this.carData = {} as Car
  }

  ngOnInit(): void {
    this.getCar();
    this.getFavourites();
  }

  getCar(): void {
    this.carService.getById(this.carId).subscribe((response: any) => {
      this.carData = response;
    });
  }

  getFavourites() {
    this.favouriteService.getByCar(this.carId, this.clientId).subscribe((response: any) => {
      if(response.length > 0){
        this.isFavourite = true;
        this.favouriteId = response[0].id
      }
    });
  }

  getPrice(): number {
    return this.days * this.carData.rentAmountDay;
  }

  goBack(): void {
    this.location.back();
  }

  openRentDialog(): void {
    this.rentDialog.open(RentDialogComponent, {
      width: '300px',
      data: {
        car: this.carData,
        clientId: this.clientId
      }
    });
  }

  async addFavourite() {
    await this.favouriteService.create({
      "carId": this.carId,
      "clientId": this.clientId
    }).subscribe((response: any) => {
      this.isFavourite = true
      this.favouriteId = response.id
      console.log(response)
    })
  }

  async deleteFavourite() {
    await this.favouriteService.delete(this.favouriteId).subscribe((response: any) => {
      this.isFavourite = false;
      this.favouriteId = "";
    })
  }
}
