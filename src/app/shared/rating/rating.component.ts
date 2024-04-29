import {Component, Input, HostBinding} from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
    @Input() @HostBinding('style.--rating') rating!: number;
}
