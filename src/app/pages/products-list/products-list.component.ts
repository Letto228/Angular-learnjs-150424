import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    // private readonly productsStoreService = inject(ProductsStoreService);
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);

    // readonly products$ = this.productsStoreService.products$;
    // eslint-disable-next-line dot-notation
    readonly products$ = this.activatedRoute.data.pipe(map(data => data['products']));

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log('ProductsListComponent Created!', this.activatedRoute.snapshot.data);

        // this.productsStoreService.loadProducts();

        // this.router.navigate(['/products-list'], {
        //     queryParams: {
        //         name: 'Egor',
        //     },
        // });

        // this.activatedRoute.queryParams.subscribe(console.log);

        // setTimeout(() => {
        //     this.router.navigate(['/products-list'], {
        //         queryParams: {
        //             name: 'Test',
        //         },
        //     });
        // }, 3000);
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackBy(_index: number, item: Product): string {
        return item._id;
    }

    navigateToProduct() {
        // this.router.navigate(['/product', 'id']);
        // this.router.navigate(['/product/id']);
        this.router.navigateByUrl('/product/id');
    }
}
