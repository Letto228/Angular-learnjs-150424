import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './card.component';
// import {CurrencyModule} from '../../../shared/currency/currency.module';
// import { CurrencyPipe } from '../../../shared/currency/currency.pipe';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
    // providers: [CurrencyPipe],
    exports: [CardComponent],
})
export class CardModule {}
