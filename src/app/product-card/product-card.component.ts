import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from '../product-services.service';
import { Store } from '@ngrx/store';
import { addWish } from '../wishList.actions';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productDate : any;
  currentCount:any;

  constructor(private _router:Router , private productService:ProductServicesService , private _wishListStore: Store<{ wishList: Array<any> }> ,public _isLoading:LoaderService ) {}
 

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

  addToWishList(productItem: any) {
    this._wishListStore.dispatch(addWish({ cardItem: productItem }));
    console.log(this.productDate)
  }

  cartFunc()
  {
    this.productService.addToCart(this.productDate);
  }
}
 