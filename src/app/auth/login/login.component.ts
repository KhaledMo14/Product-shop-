import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from 'src/app/product-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validtionError:boolean= false
  constructor(private _router:Router , private productService :ProductServicesService ) { }

  ngOnInit(): void {
  
  }

  sendValue(data:any)
  {
    if(data.valid)
    {
      localStorage.setItem('token', JSON.stringify([...this.productService.isLoggedIn(), data.controls.email.value]))
      this._router.navigate([''])
    }
    else 
    {
      this.validtionError =true
    }
  }

}
