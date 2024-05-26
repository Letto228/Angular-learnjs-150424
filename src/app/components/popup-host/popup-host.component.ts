/* eslint-disable @typescript-eslint/member-ordering */
import {Component, Input, TemplateRef, ViewContainerRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewPopup', {read: ViewContainerRef, static: false})
    private readonly viewPopup: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        this.insertPopupTemplate(templateRef);
    }

    show = false;

    insertPopupTemplate(templateRef: TemplateRef<unknown> | null) {
        this.viewPopup?.clear();

        if (templateRef === null) {
            this.show = false;

            return;
        }

        this.show = true;
        this.viewPopup?.createEmbeddedView(templateRef);
    }
}
