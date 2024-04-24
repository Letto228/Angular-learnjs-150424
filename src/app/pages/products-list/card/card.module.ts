import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class CardModule {}
