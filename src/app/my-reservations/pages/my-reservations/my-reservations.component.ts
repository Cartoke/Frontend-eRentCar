import { Component, OnInit } from '@angular/core';
import {MyReservations} from "../../../my-reservations/model/my-reservations";
import {MyReservationsService} from "../../services/my-reservations.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {

  rentsData: MyReservations[];
  displayedColumns: string[];
  clientId!: string | null;
  today: Date;
  deleted: boolean;

  constructor(
    private myReservationService: MyReservationsService,
    private dialog: MatDialog
  ) {
    this.rentsData = [];
    this.clientId = localStorage.getItem('clientId');
    this.displayedColumns = ['car', 'name', 'rate', 'startDate','finishDate','paymentAmount','actions']
    this.today = new Date();
    this.deleted = false;
  }

  ngOnInit(): void {
    this.retrieveRentals();
  }

  retrieveRentals(){
    this.myReservationService.getByClientId(this.clientId).subscribe((response: any) => {
      this.rentsData = response;
    })
  }

  compareDates(starDate: any, id: any) {
    const tempArray = starDate.split('/');
    const formattedStartDate = new Date(tempArray[2],tempArray[1] - 1,tempArray[0]);

    if(formattedStartDate > this.today)
    {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
                          data: {
                            id: id,
                            deleted: this.deleted
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
}
