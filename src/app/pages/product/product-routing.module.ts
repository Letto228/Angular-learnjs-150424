import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {TypeComponent} from './type/type.component';
import {DescriptionComponent} from './description/description.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        canActivateChild: [],
        children: [
            {
                path: 'type',
                component: TypeComponent,
            },
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: '',
                // redirectTo: '/product/id/description',
                redirectTo: 'description',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
