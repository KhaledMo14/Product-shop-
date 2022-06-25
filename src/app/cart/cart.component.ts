
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
 
  constructor(private http:ProductServicesService) { }

  ngOnInit(): void {

    this.http.getCart().subscribe((res:any)=> {
      this.productItem = res;
      
    })

    this.http.getCount().subscribe(
      (res:any)=>{
        this.currentCount=res;
      }
    )
    
  }

  removeitem(i:number) 
    {
      this.productItem.splice(i,1);
      // console.log(this.productItem[i].quantity)
    }

    addQuntity(i:number) 
    {
      (this.productItem[i].quantity) ++;

     this.http.setCount(this.currentCount +1)

    }

    removeQuntity(i:number)
    {
      
      if(this.productItem[i].quantity > 0) {

        (this.productItem[i].quantity) --;
        this.http.setCount(this.currentCount -1)
       }
        
    }

}
