import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {
  @Input() car!: Car;
  days: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getPrice(): number {
    return this.days * this.car.rentAmountDay;
  }
}
