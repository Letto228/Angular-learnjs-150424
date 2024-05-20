import {Component, TemplateRef, ViewChild} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @ViewChild('dialog1', {static: true}) dialog1Template: TemplateRef<unknown> | null = null;
    @ViewChild('dialog2', {static: true}) dialog2Template: TemplateRef<unknown> | null = null;
    @ViewChild('dialog3', {static: true}) dialog3Template: TemplateRef<unknown> | null = null;
    readonly aplicationConfigMock = applicationConfigMock;
    shouldShowDialog1 = false;
    shouldShowDialog2 = false;
    shouldShowDialog3 = false;

    getDialogToShow() {
        if (this.shouldShowDialog1) {
            return this.dialog1Template;
        }

        if (this.shouldShowDialog2) {
            return this.dialog2Template;
        }

        if (this.shouldShowDialog3) {
            return this.dialog3Template;
        }

        return null;
    }
}
