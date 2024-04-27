import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input() aplicationConfig: ApplicationConfig | null = null;

    @Output() menuClick = new EventEmitter<Event>();

    onClick(event: Event) {
        this.menuClick.emit(event);
    }
}
