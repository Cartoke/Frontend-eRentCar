import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-web-application-erentcar';
  controller: String = '/';
  itemsClient: Array<any> = [
    { name:"Search Auto", url:"/client/cars" },
    { name:"Reservations", url:"/client/reservations" },
    { name:"My Favourites",  url:"/client/favourites" },
    { name:"Sign Out", url:"/" }
  ];

  itemsOwner: Array<any> = [
    { name:"My Car", url:"/owner/my-car" },
    { name:"Rentals", url:"/owner/rentals" },
    { name:"Subscription",  url:"/owner/subscription" },
    { name:"Sign Out", url:"/" }
  ];

  constructor(private router: Router, private location: Location) {
  }

  changeTo(url: any) {
    this.controller = url;
    this.router.navigate([`${url}`]);
  }

  changeController(name: any) {
    this.controller = name;
  }

  ngOnInit(): void {
    if(this.location.path() != '') {
      this.controller = ''
    }
  }
}
