import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly router = inject(Router);

    readonly products$ = this.productsStoreService.products$;

    ngOnInit(): void {
        this.productsStoreService.loadProducts();
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
