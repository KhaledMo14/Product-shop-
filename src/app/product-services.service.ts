import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) {}

  carts:any[]=[];
  totalPrice:number=0;
  count:number=0;
  emails:any
  setItem:[]=[];
  

  wishList = new BehaviorSubject(this.count)
  cartArray = new BehaviorSubject(this.carts);
  priceSubject= new BehaviorSubject(this.totalPrice);
  
  
  
  getProduct():Observable<any>{
    return this.http.get('https://api.escuelajs.co/api/v1/products')
  }

  getId(id:number):Observable<any>{
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  
  setCount()
  {
    this.count++
    this.wishList.next(this.count)
  }

  getCount()
  {
    return this.wishList.asObservable()
  }

  decreasrCount(quantity = 1)
  {
    this.count -= quantity
    this.wishList.next(this.count)

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
    this.setCount()
    this.productsPrice()
  }

  getCart()
  {
    return this.cartArray.asObservable()
  }

  decreaseQuntity(i:number,id:number)
  {
   
   let pro=this.carts.find((ele:any)=>{
        return id == ele.id
      })
      if(pro.quantity>1) 
      {
        this.decreasrCount()
        pro.quantity--;
      }
      else
      {
        this.removeItem(i,pro.quantity)
      }

      this.productsPrice()
    }

  increaseQuntity(id:number)
  {
    let pro  =  this.carts.find((ele:any)=>{
      return id == ele.id
    })
    this.setCount()
    pro.quantity++

    this.productsPrice()
  }

  removeItem(i:number , quantity:number)
  {

    this.carts.splice(i,1);
    this.decreasrCount(quantity)
    this.productsPrice()
 
  }
  productsPrice()
  {
    this.totalPrice=0;
    this.carts.map((ele:any)=>this.totalPrice += ele.quantity * ele.price)

    this.priceSubject.next(this.totalPrice);
    console.log(this.totalPrice)
  }

  getProductPrice():Observable<number>
  {
    return this.priceSubject.asObservable()

  }
   
  isLoggedIn()
  {
    this.emails = localStorage.getItem('token')
    if(this.emails)
    {
      this.setItem = JSON.parse(this.emails)
    }
    return this.setItem
  }
}
