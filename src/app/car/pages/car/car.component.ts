import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../../../search-car/services/cars.service";
import {Car} from "../../../search-car/model/car";
import {Location} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {RentDialogComponent} from "../../../search-car/pages/rent-dialog/rent-dialog.component";

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

  constructor(private route: ActivatedRoute, private carService: CarsService, private location: Location, public rentDialog: MatDialog) {
    this.carId = this.route.snapshot.params.carId;
    this.clientId = this.route.snapshot.params.clientId;
    this.carData = {} as Car
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    this.carService.getById(this.carId).subscribe((response: any) => {
      this.carData = response;
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
}
