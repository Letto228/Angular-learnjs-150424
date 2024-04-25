import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {}
