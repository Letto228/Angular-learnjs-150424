import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly aplicationConfigMock = applicationConfigMock;

    switchTemplate = false;
    closeTemplate = true;
    constructor() {
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 3000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 6000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 9000);
    }
}
