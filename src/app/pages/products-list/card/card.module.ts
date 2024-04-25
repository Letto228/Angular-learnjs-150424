import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CardComponent} from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule],
    exports: [CardComponent],
})
export class CardModule {}
