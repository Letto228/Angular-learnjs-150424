import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    // selector: 'div#root',
    templateUrl: './app.component.html',
    // template: `
    //     <h1>Hello</h1>
    // `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    // title = 'Angular-learnjs-150424';

    readonly aplicationConfigMock = applicationConfigMock;

    isSidenavOpenedStore = false;

    onMenuClick(_event: Event) {
        // console.log('Menu clicked (in AppComponent)', event);

        this.isSidenavOpenedStore = !this.isSidenavOpenedStore;
    }
}
