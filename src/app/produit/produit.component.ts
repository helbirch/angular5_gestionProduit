import {Component, OnInit} from '@angular/core';
import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {ActivatedRoute} from "@angular/router";
@Component({
 selector :'app-produit',
 templateUrl :'./produit.component.html',
 styleUrls :['./produit.component.css']
    })
    export class ProduitComponent implements OnInit{
        produits:Produit[];
        produitForm:FormGroup;
        operation:string='add';
        selectProduit:Produit;
        constructor(private produitService:ProduitService,private fb:FormBuilder,private route:ActivatedRoute){
         this.creatForm();
        }
        ngOnInit(){
        this.initProduit();
        this.produits=this.route.snapshot.data.produits;
        }
        creatForm(){
            this.produitForm=this.fb.group({
                lib:['',Validators.required],
                qte:'',
                prix: ''
            })
        }
        loadProduits(){
            this.produitService.getProduits().subscribe(
                data => {this.produits=data},
                error => {console.log('An error was occured.')},
                () => {console.log('loading produits was done.')}
                );
    }
    addProduit(){
        const p=this.produitForm.value;
        this.produitService.addProduit(p).subscribe(
            res=>{
                this.initProduit();
                this.loadProduits();
            }
           
        );
}
updateProduit(){
    this.produitService.updateProduit(this.selectProduit).subscribe(
        res=>{
   
            this.loadProduits();
        }
       
    );
}
initProduit(){
    this.selectProduit=new Produit();
    this.creatForm();
}
deleteProduit(){
    this.produitService.deleteProduit(this.selectProduit.idProduit).
    subscribe(
    res=>{
     this.selectProduit=new Produit();
     this.loadProduits();
 }
    );
}
}
