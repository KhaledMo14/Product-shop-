import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductServicesService } from './product-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _productServ:ProductServicesService , private _router:Router){}
  canActivate()
     {
      if(this._productServ.isLoggedIn().length==0){
        alert("You Must login")
        this._router.navigate(['/auth/login']) 
        return false

      }

        return true
      


   
     
  }
  
}
