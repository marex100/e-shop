import { OfertasComponent } from './ofertas/ofertas.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ProductsModule} from './products/products.module'; 
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',



  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
{
  path: 'ofertas',
    pathMatch: 'full',
    component: OfertasComponent
},

  {

  path: 'products',
   pathMatch: 'full',
  loadChildren: './products/products.module#ProductsModule'

},


{
  path: 'contact',
    pathMatch: 'full',
    component: ContactComponent
},

{
  path: 'login',
    pathMatch: 'full',
    component: LoginComponent
}, 

{
  path:'register',
  pathMatch: 'full',
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
