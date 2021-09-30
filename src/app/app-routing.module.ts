import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCarComponent} from "./my-car/pages/my-car/my-car.component";
import {MyFavouritesComponent} from "./my-favourites/pages/my-favourites/my-favourites.component";
import {MyRentalsComponent} from "./my-rentals/pages/my-rentals/my-rentals.component";
import {MyReservationsComponent} from "./my-reservations/pages/my-reservations/my-reservations.component";
import {SearchCarComponent} from "./search-car/pages/search-car/search-car.component";
import {SubscriptionComponent} from "./subscription/pages/subscription/subscription.component";
import {ClientNavigationComponent} from "./client-navigation/client-navigation.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'client/:id/my-car',  component: MyCarComponent},
  {path: 'client/:id/favourites', component: MyFavouritesComponent},
  {path: 'client/:id/rentals', component: MyRentalsComponent},
  {path: 'client/:id/reservations', component: MyReservationsComponent},
  {path: 'client/:id/search', component: SearchCarComponent},
  {path: 'client/:id/subscription', component: SubscriptionComponent},
  {path: 'client/:id', component: ClientNavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
