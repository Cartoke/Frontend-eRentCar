 import { Component, OnInit } from '@angular/core';
 import {RentCarService} from "../../../search-car/services/rent-car.service";
 import {ActivatedRoute, Router} from "@angular/router";
 import {DeleteDialogComponent} from "../../../my-reservations/pages/delete-dialog/delete-dialog.component";
 import {EditDateDialogComponent} from "../../../my-reservations/pages/edit-date-dialog/edit-date-dialog.component";
 import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.css']
})
export class MyRentalsComponent implements OnInit {
  rentsData: [];
  carId: number
  displayedColumns: string[];
  clientId!: string | null;
  today: Date;
  deleted: boolean;
  changed: boolean;
  editableItem: boolean;

  menuOptions = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
  ]

  constructor(private myReservationService: RentCarService,
              private route: ActivatedRoute, private dialog: MatDialog) {
    this.rentsData = []
    this.carId = this.route.snapshot.params.carId
    this.clientId = localStorage.getItem('clientId');
    this.displayedColumns = ['rate', 'startDate','finishDate','amount','actions']
    this.today = new Date();
    this.deleted = false;
    this.changed = false;
    this.editableItem = false;
  }

  ngOnInit(): void {
    this.retrieveRentals();
  }
  retrieveRentals(){
    this.myReservationService.getAll().subscribe((response: any) => {
      console.log(this.carId)
      this.rentsData = response.content.filter((res: any) => res.carId == this.carId);
    })
  }

  compareDates(startDate: any, id: any, rent: any) {
    const tempArray = startDate.split('/');
    const formattedStartDate = new Date(tempArray[2],tempArray[1] - 1,tempArray[0]);

    if(formattedStartDate > this.today) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: {
          id: id,
          deleted: this.deleted,
          rent: rent
        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.deleted = result
        if(result){
          this.retrieveRentals()
        }
      });
    }
    else
      alert("You cannot delete this rent, because the dates are past")
  }

  changeDates(start: any, end: any, id: any, amount: any, rate: any){
    const tempArray = start.split('/');
    const formattedStartDate = new Date(tempArray[2],tempArray[1] - 1,tempArray[0]);

    if(formattedStartDate > this.today) {
      const dialogRef = this.dialog.open(EditDateDialogComponent, {
        data: {
          id: id,
          start: start,
          end: end,
          amount: amount,
          rate,
          clientId: this.clientId,
          changed: this.changed,

        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.changed = result
        console.log(result)
        if(result){
          this.retrieveRentals()
        }
      });
    }
    else
      alert("You cannot changes the dates in this rent, because is too late")
  }
}
