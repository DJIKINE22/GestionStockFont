import {Component, OnInit} from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../partager/produit'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['/produit.component.css'],

})
export class ProduitComponent implements OnInit{

  produits:Produit[];

  constructor(private produitService:ProduitMockService){

    // Initialization inside the constructor
  this.produits = [];
  }
  ngOnInit(){
    this.produits = this.produitService.getProduits();
  }

}
