import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from '../product-services.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss']
})

export class DetalisComponent implements OnInit {
  productId:any;
  product:any;
  currentCount:any;
  destroy:any;

  
  constructor(private activatedRoute: ActivatedRoute , private  productService:ProductServicesService) {
    
    this.productId = this.activatedRoute.snapshot.paramMap.get("id")
    }
   
  
    ngOnDestroy(): void
    {
      this.destroy.unsubscribe(); 
    }
  

  ngOnInit(): void {
    this.destroy = this.productService.getId(this.productId).subscribe(
      (respone)=>{
        this.product=respone;
        
      }
    )

    this. productService.getCount().subscribe((res:any)=> 
    {
      this.currentCount = res;
    })
    

  }

  cartFunc(product:any)
  {
    this.productService.addToCart(product)
  }


   

}
