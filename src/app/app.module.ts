import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import{ProduitMockService} from './produit/produit.mock.service';
import {Produit} from './partager/produit';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContenuComponent } from './contenu/contenu.component';
import { LogoComponent } from './logo/logo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContenuComponent,
    LogoComponent,
    DashboardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
