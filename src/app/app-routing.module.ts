import { NgModule } from '@angular/core';
import { SearchCarComponent } from "./search-car/pages/search-car/search-car.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  { path: "client/search", component: SearchCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
