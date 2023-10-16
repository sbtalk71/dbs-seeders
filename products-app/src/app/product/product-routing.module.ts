import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from '../overview/overview.component';
import {SpecsComponent} from '../specs/specs.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';

const routes: Routes = [{
        path: '',
        component: ProductDetailsComponent,
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            }, {
                path: 'specs',
                component: SpecsComponent
            }
        ]
    },];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
