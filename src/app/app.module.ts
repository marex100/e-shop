import { ProductsModule } from './products/products.module';
import { ProductsRoutingModule } from './products/products-routing.module';
import { PmMaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductDataService } from './products/product-data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ContactComponent } from './contact/contact.component';




import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    OfertasComponent,
    ContactComponent,
    ToolbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PmMaterialModule,
    ProductsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule ,
    ProductsModule,
    MatIconModule,
    MDBBootstrapModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
   
    MDBBootstrapModule.forRoot() 
      

  ],
  providers: [ProductDataService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor( ) {
  
}}
