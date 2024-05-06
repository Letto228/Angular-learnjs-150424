import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    private counter = 0;

    readonly aplicationConfigMock = applicationConfigMock;

    switchTemplate = false;
    closeTemplate = true;

    constructor() {
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log('Set timeout');
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 3000);
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log('Set timeout');
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 6000);
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log('Set timeout');
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 9000);
    }

    onKeyDown() {}

    getCount() {
        setTimeout(() => {
            this.counter += 1;
        });

        return this.counter;
    }

    get title(): string {
        // eslint-disable-next-line no-console
        console.log('Run CD');

        return this.aplicationConfigMock.title;
    }
}
