import {Component, ViewEncapsulation} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
    readonly aplicationConfigMock = applicationConfigMock;

    // isSidenavOpenedStore = false;

    // onMenuClick(_event: Event) {
    //     this.isSidenavOpenedStore = !this.isSidenavOpenedStore;
    // }
}
