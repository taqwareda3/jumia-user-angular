import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'Products',component:HomeComponent},
  {path:'Products/:id',component:ProductDetailsComponent},
  {path:'Register',component:UserRegisterComponent},
  {path:'login',component:UserLoginComponent},

   {path:"**",component:ProductDetailsComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
