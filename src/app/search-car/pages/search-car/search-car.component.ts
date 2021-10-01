import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../model/car";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatDrawer} from "@angular/material/sidenav";
import {FormGroup, FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent implements OnInit {
  rangePrices: number[] = [60, 160, 300, 500, 650];
  specifications: string[] = ["Air conditioning", "4+ doors"];
  transmissions: string[] = ["Manual", "Transmission"];
  categoriesOfCars: string[] = ["Little", "Medium", "Large", "Premium", "Minivan", "SUVs"];
  carsData: Car[];
  clientId: string;
  date: FormGroup;
  today: Date;

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private carsService: CarsService, private observer: BreakpointObserver, private route: ActivatedRoute) {
    this.carsData = [];
    this.clientId = route.snapshot.params.clientId;

    this.today = new Date();
    const day = this.today.getDate();
    const month = this.today.getMonth();
    const year = this.today.getFullYear();

    this.date = new FormGroup({
      start: new FormControl(new Date(year, month, day)),
      end: new FormControl(new Date(year, month, day))
    });
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 1150px)'])
        .subscribe(response => {
          if (response.matches) {
            this.drawer.mode = 'over';
            this.drawer.close();
          } else {
            this.drawer.mode = 'side';
            this.drawer.open();
          }
        });
    }, 0);
  }

  getAllCars() {
    this.carsService.getAll().subscribe((response: any) => {
      this.carsData = response;
    });
  }
}
