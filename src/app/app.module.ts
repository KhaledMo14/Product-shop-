import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetalisComponent } from './detalis/detalis.component';


import { MypipePipe } from './mypipe.pipe';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { WishListComponent } from './wish-list/wish-list.component';
import { reducer } from './wishList.reducer';
import { InterceptorService } from './interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    ProductCardComponent,
    NotFoundComponent,
    DetalisComponent,
    MypipePipe,
    AddCartComponent,
    CartComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({wishList:reducer}),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:InterceptorService , multi :true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
