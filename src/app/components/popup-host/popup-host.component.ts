import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewPort', {read: ViewContainerRef, static: true})
    private readonly viewPort: ViewContainerRef | undefined;

    @Input() set popupTemplate(templateRef: TemplateRef<unknown> | null) {
        if (templateRef) {
            this.insertPopupTemplate(templateRef);

            return;
        }

        this.onClose();
    }

    isHidden = true;

    insertPopupTemplate(templateRef: TemplateRef<unknown>) {
        this.togglePopup(false);
        this.viewPort?.createEmbeddedView(templateRef);
    }

    onClose() {
        this.togglePopup(true);
    }

    private togglePopup(isHidden: boolean) {
        this.viewPort?.clear();
        this.isHidden = isHidden;
    }
}
