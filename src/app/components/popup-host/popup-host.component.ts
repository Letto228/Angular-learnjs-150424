import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewPopup', {read: ViewContainerRef, static: true})
    private readonly viewPopup: ViewContainerRef | undefined;

    @ViewChild('container', {read: ViewContainerRef, static: true})
    private readonly container: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        this.insertPopupTemplate(templateRef);
    }

    insertPopupTemplate(templateRef: TemplateRef<unknown> | null) {
        if (templateRef === null) {
            this.container?.clear();
            this.viewPopup?.clear();

            return;
        }

        if (templateRef) {
            this.viewPopup?.createEmbeddedView(templateRef);
        }
    }
}
