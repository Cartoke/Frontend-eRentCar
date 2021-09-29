import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { MyCarComponent } from './my-car/pages/my-car/my-car.component';
import { CarComponent } from './car/pages/car/car.component';
import { MyFavouritesComponent } from './my-favourites/pages/my-favourites/my-favourites.component';
import { MyRentalsComponent } from './my-rentals/pages/my-rentals/my-rentals.component';
import { MyReservationsComponent } from './my-reservations/pages/my-reservations/my-reservations.component';
import { SearchCarComponent } from './search-car/pages/search-car/search-car.component';
import { SubscriptionComponent } from './subscription/pages/subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCarComponent,
    CarComponent,
    MyFavouritesComponent,
    MyRentalsComponent,
    MyReservationsComponent,
    SearchCarComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
