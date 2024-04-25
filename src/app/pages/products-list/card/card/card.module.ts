import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [MatCardModule, MatButtonModule],
})
export class CardModule {}
