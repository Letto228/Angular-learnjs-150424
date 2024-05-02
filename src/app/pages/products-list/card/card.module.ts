import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './card.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, BrowserModule],
    exports: [CardComponent],
})
export class CardModule {}
