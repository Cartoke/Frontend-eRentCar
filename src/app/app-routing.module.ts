import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarComponent} from "./car/pages/car/car.component";
import {MyCarComponent} from "./my-car/pages/my-car/my-car.component";
import {MyFavouritesComponent} from "./my-favourites/pages/my-favourites/my-favourites.component";
import {MyRentalsComponent} from "./my-rentals/pages/my-rentals/my-rentals.component";
import {MyReservationsComponent} from "./my-reservations/pages/my-reservations/my-reservations.component";
import {SearchCarComponent} from "./search-car/pages/search-car/search-car.component";
import {SubscriptionComponent} from "./subscription/pages/subscription/subscription.component";
import {ClientNavigationComponent} from "./client-navigation/client-navigation.component";

const routes: Routes = [
  {path: 'cars',  component: CarComponent},
  {path: 'owner/my-car',  component: MyCarComponent},
  {path: 'client/favourites', component: MyFavouritesComponent},
  {path: 'owner/rentals', component: MyRentalsComponent},
  {path: 'client/reservations', component: MyReservationsComponent},
  {path: 'client/search', component: SearchCarComponent},
  {path: 'owner/subscription', component: SubscriptionComponent},
  {path: 'client', component: ClientNavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
