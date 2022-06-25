import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  counter:number = 0;
  constructor(private  productService:ProductServicesService) { }

  ngOnInit(): void {
        this.productService.getCount().subscribe(
      (res:any)=>{
        this.counter=res
      }
    )
  }

}
