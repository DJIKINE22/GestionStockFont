import {Component, OnInit} from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../partager/produit'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],

})
export class ProduitComponent implements OnInit{

  produits:Produit[];
  produitForm: FormGroup;

  constructor(private produitService:ProduitMockService, private fb: FormBuilder){
    this.produitForm = this.fb.Formgroup({
      CodeBarre: ['',Validators],
      Quantité: '',
      PrixUnitaire:''
    })
    // Initialization inside the constructor
  this.produits = [];
  }
  ngOnInit(){
    this.produits = this.produitService.getProduits();
  }

}
