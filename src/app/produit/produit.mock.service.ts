import{Injectable} from '@angular/core';

import {Produit} from '../partager/produit';
@Injectable()
export class ProduitMockService{
  private PRODUITS: Produit[] = [];

  constructor(){
    let p1: Produit = new Produit('Livre',50,20);
    let p2: Produit = new Produit('Cahier',100,25);
    let p3: Produit = new Produit('Stylo',90,20);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }
  public getProduits(): Produit[]{
    return this.PRODUITS;
  }
}
