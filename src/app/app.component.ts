import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {productsMock} from './shared/products/products.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly aplicationConfigMock = applicationConfigMock;
    readonly productsMock = productsMock;

    isSidenavOpenedStore = false;

    onMenuClick(_event: Event) {
        this.isSidenavOpenedStore = !this.isSidenavOpenedStore;
    }

    addProductToCart(num: number) {
        console.log(`товар добавлен в корзину в количестве: ${num} штук`); // eslint-disable-line
    }
}
