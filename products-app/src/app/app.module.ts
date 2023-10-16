import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { productGuardGuard } from './product-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotfoundComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OverviewComponent,
    SpecsComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log("App Module loaded successfully..")
  }
}
