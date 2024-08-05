import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './shared/component/form/form.component';
import { ComponentOneComponent } from './shared/component/component-one/component-one.component';
import { ComponentTwoComponent } from './shared/component/component-two/component-two.component';
import { ComponentThreeComponent } from './shared/component/component-three/component-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    FormComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
