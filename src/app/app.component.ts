import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly aplicationConfigMock = applicationConfigMock;
    shouldShowDialog1 = false;
    shouldShowDialog2 = false;
    shouldShowDialog3 = false;
}
