import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) {}

  carts:any[]=[];
  

  wishList = new BehaviorSubject(0)
  cartArray = new BehaviorSubject(this.carts);
  
  
  
  getProduct():Observable<any>{
    return this.http.get('https://api.escuelajs.co/api/v1/products')
  }

  getId(id:number):Observable<any>{
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  
  setCount(count:number)
  {
    this.wishList.next(count)
  }

  getCount()
  {
    return this.wishList.asObservable()
  }

  addToCart(product:any)
  {
    let cart = this.carts.find((prod:any)=>{
      return prod.id==product.id
    })

    if(cart) {
      cart.quantity = cart.quantity + 1;
    }

    else {
      this.carts.push({
        id:product.id,
        quantity:1,
        title:product.title,
        price:product.price,
        image:product.images[0]
      })
    }

    this.cartArray.next(this.carts)
  }

  getCart()
  {
    return this.cartArray.asObservable()
  }



}
