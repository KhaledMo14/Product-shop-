import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetalisComponent } from './detalis/detalis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:'' , component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:"product-list/detalis/:id" , component:DetalisComponent},
  {path:"auth",  loadChildren: () => import('./auth/auth.module').then(m => m. AuthModule)},



  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
