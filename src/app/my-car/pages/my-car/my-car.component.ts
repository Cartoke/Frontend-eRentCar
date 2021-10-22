import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../../search-car/model/car";
import {ClientService} from "../../../my-profile/services/client.service";
import {MatDialog} from "@angular/material/dialog";
import {EditCarDialogComponent} from "../edit-car-dialog/edit-car-dialog.component";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css']
})
export class MyCarComponent implements OnInit {
  clientId!: string | null;
  clientCars!: Car[];

  constructor(private clientService: ClientService, private editCarDialog: MatDialog) {
    this.clientId = localStorage.getItem('clientId');
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.clientService.getCarsByIdClient(this.clientId).subscribe((response: any) => {
      this.clientCars = response;
    });
  }

  openEditDialogCar(): void {
    const car: Car = {
      id: uuid(),
      address: "",
      brand: "",
      year: 2021,
      model: "",
      mileage: 0,
      seating: 4,
      manual: true,
      carValueInDollars: 0,
      extraInformation: "",
      imagePath: "car.png",
      rate: 0,
      rentAmountDay: 0,
      clientId: this.clientId
    }

    const dialogRef = this.editCarDialog.open(EditCarDialogComponent, {
      width: "400px",
      data: {
        car: car,
        clientId: this.clientId,
        edit: false
      }
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response !== undefined) {
        this.clientCars = this.clientCars.concat(response);
      }
    })
  }


}
