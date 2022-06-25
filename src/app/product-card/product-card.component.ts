import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productDate : any;
  currentCount:any;

  constructor(private _router:Router , private productService:ProductServicesService) {}
 

  ngOnInit(): void {

    this. productService.getCount().subscribe((res:any)=> 
    {
      this.currentCount = res;
    })

  
  }

  navigateToDetails()
  {
    this._router.navigate(['/product-list/detalis/', this.productDate.id])
   

  }

  cartFunc()
  {
    this.productService.setCount(this.currentCount + 1)
    this.productService.addToCart(this.productDate)
  }
}
 