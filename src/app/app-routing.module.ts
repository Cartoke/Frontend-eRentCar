import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCarComponent} from "./my-car/pages/my-car/my-car.component";
import {MyFavouritesComponent} from "./my-favourites/pages/my-favourites/my-favourites.component";
import {MyRentalsComponent} from "./my-rentals/pages/my-rentals/my-rentals.component";
import {MyReservationsComponent} from "./my-reservations/pages/my-reservations/my-reservations.component";
import {SearchCarComponent} from "./search-car/pages/search-car/search-car.component";
import {SubscriptionComponent} from "./subscription/pages/subscription/subscription.component";
import {ClientNavigationComponent} from "./client-navigation/client-navigation.component";
import {CarComponent} from "./car/pages/car/car.component";
import {HomeComponent} from "./freeviews/pages/home/home.component";
import {AboutComponent} from "./freeviews/pages/about/about.component";
import {LoginComponent} from "./freeviews/pages/login/login.component";
import {RegisterComponent} from "./freeviews/pages/register/register.component";

const auxUser: any = localStorage.getItem('clientData');

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'about',  component: AboutComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'register',  component: RegisterComponent},
  {path: 'client/:clientId/my-car',  component: MyCarComponent},
  {path: 'client/:clientId/favourites', component: MyFavouritesComponent},
  {path: 'client/:clientId/rentals', component: MyRentalsComponent},
  {path: 'client/:clientId/reservations', component: MyReservationsComponent},
  {path: 'client/:clientId/search', component: SearchCarComponent},
  {path: 'client/:clientId/subscription', component: SubscriptionComponent, data: JSON.parse(auxUser)},
  {path: 'client/:clientId', component: ClientNavigationComponent},
  {path: 'client/:clientId/search/car/:carId', component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
