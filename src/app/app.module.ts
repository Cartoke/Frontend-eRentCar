import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { MyCarComponent } from './my-car/pages/my-car/my-car.component';
import { MyMessagesComponent } from './my-messages/pages/my-messages/my-messages.component';
import { CarComponent } from './car/pages/car/car.component';
import { MyFavouritesComponent } from './my-favourites/pages/my-favourites/my-favourites.component';
import { MyRentalsComponent } from './my-rentals/pages/my-rentals/my-rentals.component';
import { MyReservationsComponent } from './my-reservations/pages/my-reservations/my-reservations.component';
import { SearchCarComponent } from './search-car/pages/search-car/search-car.component';
import { SubscriptionComponent } from './subscription/pages/subscription/subscription.component';
import { AppRoutingModule } from './app-routing.module';
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import { CardCarComponent } from './search-car/pages/card-car/card-car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { ClientNavigationComponent } from './client-navigation/client-navigation.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { MyProfileComponent } from './my-profile/pages/my-profile/my-profile.component';
import { RentDialogComponent } from './search-car/pages/rent-dialog/rent-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CardMyCarComponent } from './my-car/pages/card-my-car/card-my-car.component';
import { EditCarDialogComponent} from "./my-car/pages/edit-car-dialog/edit-car-dialog.component";
import {MatRadioModule} from "@angular/material/radio";
import { CardMySubscriptionComponent } from './subscription/pages/card-my-subscription/card-my-subscription.component';
import { ShowPlansComponent } from './subscription/pages/show-plans/show-plans.component';
import { FavCardCarComponent } from './my-favourites/pages/fav-card-car/fav-card-car.component';
import { HomeComponent } from './freeviews/pages/home/home.component';
import { AboutComponent } from './freeviews/pages/about/about.component';
import {LoginComponent} from "./freeviews/pages/login/login.component";
import { RegisterComponent } from './freeviews/pages/register/register.component';
import { FreeviewComponent } from './freeviews/pages/freeview/freeview.component';
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    MyCarComponent,
    CarComponent,
    MyMessagesComponent,
    MyFavouritesComponent,
    MyRentalsComponent,
    MyReservationsComponent,
    SearchCarComponent,
    SubscriptionComponent,
    CardCarComponent,
    ClientNavigationComponent,
    MyProfileComponent,
    RentDialogComponent,
    CardMyCarComponent,
    EditCarDialogComponent,
    CardMySubscriptionComponent,
    ShowPlansComponent,
    FavCardCarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    FreeviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatStepperModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
