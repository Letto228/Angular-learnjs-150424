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

    show = true;

    insertPopupTemplate(templateRef: TemplateRef<unknown> | null) {
        this.viewPopup?.clear();

        if (templateRef === null) {
            this.show = false;

            return;
        }

        if (templateRef) {
            this.show = true;

            setTimeout(() => {
                this.viewPopup?.createEmbeddedView(templateRef);
            }, 0);
        }
    }
}
