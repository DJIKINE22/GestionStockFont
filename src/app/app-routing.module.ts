import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {ProduitComponent } from './produit/produit.component';
import {DashboardComponent } from './dashboard/dashboard.component';


export const routes = [
  {path: 'produit', component: ProduitComponent},
  {path: 'dashboard', component: DashboardComponent},
=======
import {FormsModule} from '@angular/forms';
import {ProduitComponent} from './produit/produit.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoute: Routes = [
  {path:'produit', component:ProduitComponent},
  {path:'dashboard', component:DashboardComponent}
>>>>>>> navside_Bar
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
