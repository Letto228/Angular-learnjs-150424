import {Component, OnInit} from '@angular/core';

export type Currency = 'RUB' | 'USD' | 'EUR';

export type Product = {
    id: number;
    title: string;
    description?: string;
    price?: number;
    currency?: Currency;
    imageSource?: string;
};

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    product: Product | undefined;
    category: string | undefined;

    ngOnInit() {
        this.category = 'Компьютеры, ноутбуки и ПО';
        this.product = {
            id: 0,
            title: 'Корпус DEEPCOOL MATREXX 55 ADD-RGB WH  белый',
            description:
                'Deepcool MATREXX 55 ADD-RGB WH - корпус в формфакторе Midi-Tower, белого цвета, позволяющий использовать материнские платы типоразмера E-ATX, ATX, Micro ATX или Mini-ITX.',
            price: 71,
            currency: 'EUR',
            imageSource:
                'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/455e2ef2c9836142abd22e435dc72a9e/e81f82fc6a35cf977b21e94dc8554b2be2977d6a3c238f1789c3b1a58dcb93b0.jpg',
        };
    }
}
