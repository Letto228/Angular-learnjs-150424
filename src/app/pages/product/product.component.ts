import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {filter, map, switchMap, tap} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);

    // readonly product$ = of('96-planset-dexp-ursus-s290-32-gb-3g-cernyj').pipe(
    // readonly product$ = this.activatedRoute.paramMap.pipe(
    readonly product$ = this.activatedRoute.params.pipe(
        tap(params => {
            // eslint-disable-next-line no-console
            console.log(params);
        }),
        map(({id}) => id),
        // filter(value => Boolean(value)),
        filter(Boolean),
        tap(productId => {
            this.productsStoreService.loadProduct(productId);
        }),
        switchMap(() => this.productsStoreService.currentProduct$),
    );

    navigateToType() {
        this.router.navigate(['./type'], {relativeTo: this.activatedRoute});
        // const urlTree = this.router.createUrlTree(['./type'], {relativeTo: this.activatedRoute});

        // console.log(urlTree.toString());

        // this.router.navigateByUrl(urlTree);
        // this.router.navigateByUrl(urlTree.toString());
        // this.router.navigateByUrl('./type');
    }
}
