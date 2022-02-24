import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';
import IProduct from '../ViewModels/Iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
  product: any;
  productObservable!:Subscription;
    add:number=-1;
    flag:boolean=false;
  constructor(
    private activateRouteServicse: ActivatedRoute,
    private productServc: ProductsService,
    private router:Router
  ) {}

  ngOnInit(): void {

    this.activateRouteServicse.paramMap.subscribe((paramMap) => {
      this.productId=paramMap.get('id');
      console.log(this.productId);
      this.productServc.getProductById(this.productId).subscribe((prod) => {
       // this.product =prod.payload.data()
        this.product =prod;
      });
    });
   }
   backToProd(){
    this.router.navigate(['/Products'])
   }
   addToCart(){
      console.log(this.productId);
      this.flag=true;
   }
   buy(qtn:any){

   }
}

