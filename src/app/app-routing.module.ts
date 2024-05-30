import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {ProductComponent} from './pages/product/product.component';
import {ProductModule} from './pages/product/product.module';
import {TypeComponent} from './pages/product/type/type.component';
import {DescriptionComponent} from './pages/product/description/description.component';
import {TypeModule} from './pages/product/type/type.module';
import {DescriptionModule} from './pages/product/description/description.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        // pathMatch: 'prefix',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        component: ProductsListComponent,
    },
    {
        path: 'product/:id',
        component: ProductComponent,
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
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ProductsListModule,
        ProductModule,
        TypeModule,
        DescriptionModule,
        NotFoundModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * url === http://localhost:4200/product/id
 *
 * urlSegments === /product/id
 *
 * current url segments: ['product', 'id', '']
 *
 * search indexes: 0 -> 1 -> 2 -> 3 -> ...
 */

/**
 *            _______________  undefined
 *           /               /           \
 *          /               /             \
 *      ['']       ['products-list']      ['product', 'id']
 *                                        /                 \
 *                                       /                   \
 *                                  ['type']             ['description']
 */
