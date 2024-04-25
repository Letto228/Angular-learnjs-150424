import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
// import { interval } from 'rxjs';

@Component({
    selector: 'app-header',
    // standalone: true,
    // imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    // styles: [],
})
export class HeaderComponent {
    // @Input({
    //     alias: 'aplicationConfig',
    //     required: true,
    // })
    @Input() aplicationConfig: ApplicationConfig | null = null;

    // @Output() menuClick = new EventEmitter<void>();
    @Output() menuClick = new EventEmitter<Event>();
    // @Output() menuClick = interval(1000);

    readonly title = 'Angular-learnjs-150424';
    readonly imageSrc = '../../../favicon.ico';
    // readonly imageSrc =
    //     'https://avatars.mds.yandex.net/i?id=f66969ea0a0ef7ccf3c71137f90f9713e06bb3de-9843573-images-thumbs&n=13';

    readonly window = window;

    getTitle(): string {
        return this.title;
    }

    onClick(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Clicked', event);

        this.menuClick.emit(event);
    }
}
