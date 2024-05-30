import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {productsResolver} from './shared/test-guards/products.resolver';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        // pathMatch: 'prefix',
        pathMatch: 'full',
    },
    // {
    //     path: 'products-list',
    //     component: NotFoundComponent,
    //     // canMatch: [canMatchQuestionGuard],
    // },
    // Lazy navigation
    {
        path: 'products-list',
        loadChildren: () =>
            import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
        resolve: {
            products: productsResolver,
        },
        // children: [
        //     {
        //         path: '',
        //         component: ProductsListComponent,
        //     },
        // ],
    },
    // Lazy navigation
    {
        path: 'product/:id',
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
        // canActivate: [canActivateQuestionGuard],
        // canDeactivate: [canDeactivateQuestionGuard],
        // canLoad: [() => question('Можно ли загрузить чанк?')],
        // ----
        // canActivate: [TestGuard],
        // canActivateChild: [TestGuard],
        // canActivate: [
        //     (...args: Parameters<CanActivateFn>) => inject(TestGuard).canActivate(...args),
        // ],
        // canActivateChild: [
        //     (...args: Parameters<CanActivateChildFn>) =>
        //         inject(TestGuard).canActivateChild(...args),
        // ],
        // children: [
        //     {
        //         path: '',
        //         component: ProductComponent,
        //         children: [
        //             {
        //                 path: 'type',
        //                 component: TypeComponent,
        //             },
        //             {
        //                 path: 'description',
        //                 component: DescriptionComponent,
        //             },
        //             {
        //                 path: '',
        //                 // redirectTo: '/product/id/description',
        //                 redirectTo: 'description',
        //                 pathMatch: 'full',
        //             },
        //         ],
        //     },
        // ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NotFoundModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

// class TestGuard implements CanActivate, CanActivateChild {
//     canActivate(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot,
//     ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {}

//     canActivateChild(
//         childRoute: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot,
//     ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {}
// }

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
