import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private productService:ProductServicesService) {}


  ngOnInit(): void {
    this. productService.getProduct().subscribe(
      (respone)=>{
        this.productList=respone;
        
      }
    )


  }

}
