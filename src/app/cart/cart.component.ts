
import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productItem:any;
  counter:any;
  currentCount:number=0;
  totalPrice:number=0;
 
  constructor(private productService:ProductServicesService) { }

  ngOnInit(): void {

    this.productService.getCart().subscribe((res:any)=> {
      this.productItem = res;
      
    })

    this.productService.getCount().subscribe(
      (res:any)=>{
        this.currentCount=res;
      }
    )

    this.productService.getProductPrice().subscribe(
      (res:any)=> {
        this.totalPrice=res
      }
    )

   
    
  }

  removeitem(i:number , prodQuntity:number) 
    {
     this.productService.removeItem(i,prodQuntity)
    }

    addQuntity(id:number) 
    {
     this.productService.increaseQuntity(id)
    }

    removeQuntity(i:number,id:number)
    {
      this.productService.decreaseQuntity(i,id);
      
    
      }

    }



  



