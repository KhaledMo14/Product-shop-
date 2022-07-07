import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Product } from '../product';
import { ProductServicesService } from '../product-services.service';
import { productData } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productList=[];
  productDestroy:any

  constructor(private productService:ProductServicesService , public _isLoading:LoaderService) {
 
  }

  ngOnInit(): void {
    this.productDestroy = this.productService.getProduct().subscribe(
      (respone)=>{
        this.productList=respone;
        
      }
    )
  }

  ngOnDestroy(): void
  {
    this.productDestroy.unsubscribe(); 
  }

}
