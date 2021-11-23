import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";
import {MatDialog} from "@angular/material/dialog";
import {EditCarDialogComponent} from "../edit-car-dialog/edit-car-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-my-car',
  templateUrl: './card-my-car.component.html',
  styleUrls: ['./card-my-car.component.css']
})
export class CardMyCarComponent implements OnInit {
  @Input() car!: Car;
  @Input() clientId!: number;
  rentalsUrl!: string;

  constructor(public editCarDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.rentalsUrl = `${this.router.url}/${this.car.id}/my-rentals`;
  }

  openEditDialogCar(): void {
    this.editCarDialog.open(EditCarDialogComponent, {
      width: "400px",
      data: {
        car: this.car,
        clientId: this.clientId,
        edit: true
      }
    })
  }
}
