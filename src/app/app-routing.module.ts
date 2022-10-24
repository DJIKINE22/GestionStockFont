import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoute: Routes = [
  {path:'produit', component:ProduitComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
