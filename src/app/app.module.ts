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
import { AppRoutingModule } from './app-routing.module';
import { ClientNavigationComponent } from './client-navigation/client-navigation.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    MyCarComponent,
    CarComponent,
    MyFavouritesComponent,
    MyRentalsComponent,
    MyReservationsComponent,
    SearchCarComponent,
    SubscriptionComponent,
    ClientNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
