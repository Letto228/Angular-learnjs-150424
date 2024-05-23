import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    // private readonly productsStoreService = new ProductsStoreService(new ProductsApiService());
    // private readonly productsStoreService = new ProductsStoreService();
    // private readonly productsStoreService: ProductsStoreService;
    private readonly productsStoreService = inject(ProductsStoreService);

    // readonly products$: Observable<Product[] | null> = merge(
    //     of(null),
    //     timer(3000).pipe(map(() => productsMock)),
    // );
    readonly products$ = this.productsStoreService.products$;
    // readonly products$: Observable<Product[] | null>;

    // constructor() {
    //     // const name = {};
    //     const name = new InjectionToken('User name');

    //     const parentInjector = Injector.create({
    //         providers: [
    //             // {
    //             //     provide: 'name',
    //             //     useValue: 'Alex',
    //             // },
    //             // {
    //             //     provide: name,
    //             //     useValue: 'Alex',
    //             // },
    //         ],
    //     });
    //     const injector = Injector.create({
    //         parent: parentInjector,
    //         providers: [
    //             // {
    //             //     provide: name, // token
    //             //     useValue: 'Egor',
    //             // },
    //             // {
    //             //     provide: name, // token
    //             //     useValue: 'Igor',
    //             // },
    //             // {
    //             //     provide: 'name', // token
    //             //     useValue: 'Egor',
    //             // },
    //             // {
    //             //     provide: 'my-name',
    //             //     useExisting: 'name',
    //             // },
    //             // {
    //             //     provide: ProductsStoreService,
    //             //     useClass: ProductsStoreService,
    //             // },
    //             // {
    //             //     provide: 'ProductsStoreService',
    //             //     // useExisting: ProductsStoreService,
    //             //     useClass: ProductsStoreService,
    //             // },
    //             // {
    //             //     provide: 'my-name',
    //             //     // useFactory: () => inject('name' as any as ProviderToken<any>),
    //             //     useFactory: (name: string) => name,
    //             //     deps: ['name'],
    //             // },
    //             // {
    //             //     provide: ProductsStoreService,
    //             //     useFactory: () => (
    //             //         console.log('ProductsStoreService Create'), new ProductsStoreService()
    //             //     ),
    //             // },
    //             ProductsApiService,
    //             ProductsStoreService,
    //         ],
    //     });

    //     console.log(injector.get(name));
    //     // console.log(injector.get('my-name'));
    //     // console.log(injector.get(ProductsStoreService) === injector.get('ProductsStoreService'));
    //     // console.log(injector.get(ProductsStoreService));
    //     // console.log(injector.get(ProductsStoreService));
    //     console.log(injector.get(ProductsStoreService));

    //     // setTimeout(() => {
    //     //     console.log(injector.get(ProductsStoreService));
    //     //     console.log(injector.get(ProductsStoreService));
    //     //     console.log(injector.get(ProductsStoreService));
    //     // }, 3000);

    //     this.productsStoreService = injector.get(ProductsStoreService);
    //     this.products$ = this.productsStoreService.products$;
    // }

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
}
