import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { productGuardGuard } from './product-guard.guard';
import { StoreComponent } from './store/store.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path:'store',component:StoreComponent,children:[
    {path:'add',component:AddProductComponent},
    {path:'update',component:UpdateProductComponent}
  ],canActivate:[productGuardGuard]},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
