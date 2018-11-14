import {Component, OnInit} from '@angular/core';
import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
 selector :'app-produit',
 templateUrl :'./produit.component.html',
 styleUrls :['./produit.component.css']
    })
    export class ProduitComponent implements OnInit{
        produits:Produit[];
        produitForm:FormGroup;
        constructor(private produitService:ProduitService,private fb:FormBuilder){
         this.produitForm=this.fb.group({
             lib:['',Validators.required],
             qte:'',
             prix: ''
         })
        }
        ngOnInit(){
        this.loadProduits();
        }
        loadProduits(){
            this.produitService.getProduits().subscribe(
                data => {this.produits=data},
                error => {console.log('An error was occured.')},
                () => {console.log('loading produits was done.')}
                );
    }
}
