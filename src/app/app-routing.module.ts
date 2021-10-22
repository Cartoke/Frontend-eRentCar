import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCarComponent} from "./my-car/pages/my-car/my-car.component";
import {MyFavouritesComponent} from "./my-favourites/pages/my-favourites/my-favourites.component";
import {MyRentalsComponent} from "./my-rentals/pages/my-rentals/my-rentals.component";
import {MyReservationsComponent} from "./my-reservations/pages/my-reservations/my-reservations.component";
import {SearchCarComponent} from "./search-car/pages/search-car/search-car.component";
import {SubscriptionComponent} from "./subscription/pages/subscription/subscription.component";
import {ClientNavigationComponent} from "./client-navigation/client-navigation.component";
import {CarComponent} from "./car/pages/car/car.component";
import {MyMessagesComponent} from "./my-messages/pages/my-messages/my-messages.component";

const routes: Routes = [
  {path: 'client/:clientId/my-car',  component: MyCarComponent},
  {path: 'client/:clientId/my-messages',  component: MyMessagesComponent},
  {path: 'client/:clientId/favourites', component: MyFavouritesComponent},
  {path: 'client/:clientId/rentals', component: MyRentalsComponent},
  {path: 'client/:clientId/reservations', component: MyReservationsComponent},
  {path: 'client/:clientId/search', component: SearchCarComponent},
  {path: 'client/:clientId/subscription', component: SubscriptionComponent},
  {path: 'client/:clientId', component: ClientNavigationComponent},
  {path: 'client/:clientId/search/car/:carId', component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
