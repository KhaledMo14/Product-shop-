import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { DetalisComponent } from './detalis/detalis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:'' , component:ProductListComponent , canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent , canActivate:[AuthGuard]},
  {path:"product-list/detalis/:id" , component:DetalisComponent , canActivate:[AuthGuard]},
  {path:"auth",  loadChildren: () => import('./auth/auth.module').then(m => m. AuthModule)},



  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
