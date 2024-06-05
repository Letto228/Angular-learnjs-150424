import {TestBed} from '@angular/core/testing';

import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductsApiService} from './products-api.service';
import {productsMock} from './products.mock';
import {ProductsDto} from './products.dto';

// const httpClientMock = {
//     get<T>(_url: string): Observable<T> {
//         return EMPTY;
//     },
// } as HttpClient;

describe('ProductsApiService', () => {
    let service: ProductsApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductsApiService,
                // {
                //     provide: HttpClient,
                //     useValue: httpClientMock,
                // },
            ],
            imports: [HttpClientTestingModule],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    // it('should be created', done => {
    //     spyOn(httpClientMock, 'get').and.returnValue(
    //         of<ProductsDto>({data: {items: productsMock}}),
    //     );

    //     service.getProducts$().subscribe(products => {
    //         expect(products).toEqual(productsMock);

    //         done();
    //     });
    // });

    // it('should be created', async () => {
    //     spyOn(httpClientMock, 'get').and.returnValue(
    //         of<ProductsDto>({data: {items: productsMock}}),
    //     );

    //     const products = await firstValueFrom(service.getProducts$());

    //     expect(products).toEqual(productsMock);
    // });

    it('should be created', done => {
        service.getProducts$().subscribe(products => {
            expect(products).toEqual(productsMock);

            done();
        });

        httpMock.expectOne('/products').flush({data: {items: productsMock}} as ProductsDto);
    });
});
