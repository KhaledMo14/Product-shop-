import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  counter:number = 0;
  constructor(private  productService:ProductServicesService , public _isLoading:LoaderService ) { }

  ngOnInit(): void {
        this.productService.getCount().subscribe(
      (res:any)=>{
        this.counter=res
      }
    )
  }

}
