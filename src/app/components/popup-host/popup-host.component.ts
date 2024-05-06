import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('modal', {read: ViewContainerRef, static: true})
    private readonly modal: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        if (templateRef) {
            this.clearModal(false);
            this.modal?.createEmbeddedView(templateRef);
        } else {
            this.clearModal(true);
        }
    }

    isHidden = false;

    clearModal(isHidden: boolean) {
        this.isHidden = isHidden;
        this.modal?.clear();
    }
}
