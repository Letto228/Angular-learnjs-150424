import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {firstValueFrom, of} from 'rxjs';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ProductsListComponent} from './products-list.component';
import {ProductsListModule} from './products-list.module';
import {BrandsService} from '../../shared/brands/brands.service';
import {ApplicationState} from '../../store/reducer';
import {productsSelector} from '../../store/products/products.selectors';
import {productsMock} from '../../shared/products/products.mock';
import {loadProducts} from '../../store/products/products.actions';

describe('ProductsListComponent', () => {
    let fixture: ComponentFixture<ProductsListComponent>;
    let component: ProductsListComponent;
    let mockStore: MockStore<ApplicationState>;
    let dispatchSpy: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductsListModule, RouterTestingModule, BrowserAnimationsModule],
            providers: [
                {
                    provide: BrandsService,
                    useValue: {
                        brands$: of([]),
                        loadBrands(_subCat: string | null) {},
                    },
                },
                provideMockStore(),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        mockStore = TestBed.inject(MockStore);

        mockStore.overrideSelector(productsSelector, productsMock);

        dispatchSpy = spyOn(mockStore, 'dispatch');

        fixture = TestBed.createComponent(ProductsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        // expect(dispatchSpy).toHaveBeenCalled();
        expect(dispatchSpy).toHaveBeenCalledWith(loadProducts({subCategoryId: null}));

        const products = await firstValueFrom(component.products$);

        expect(products).toEqual(productsMock);
    });
});
