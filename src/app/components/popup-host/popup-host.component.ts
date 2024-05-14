import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('dialogHost', {read: ViewContainerRef, static: false})
    private readonly dialogHostViewContainer: ViewContainerRef | undefined;

    @Input() set dialogTemplate(template: TemplateRef<unknown> | null) {
        this.showDialog(template);
    }

    get isDialogHostViewEmpty(): boolean {
        return !this.dialogHostViewContainer?.length;
    }

    private showDialog(template: TemplateRef<unknown> | null) {
        this.dialogHostViewContainer?.clear();

        if (template) {
            this.dialogHostViewContainer?.createEmbeddedView(template);
        }
    }
}
