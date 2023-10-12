import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './power.pipe';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    InterpolationComponent,
    BindingComponent,
    DirectivesComponent,
    PipesComponent,
    PowerPipe,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
