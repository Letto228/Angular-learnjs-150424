import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from './card.component';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [MatCardModule, MatButtonModule],
})
export class CardModule {}
