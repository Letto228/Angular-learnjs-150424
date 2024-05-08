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
        this.clearModal(!templateRef);

        if (templateRef) {
            this.modal?.createEmbeddedView(templateRef);
        }
    }

    isHidden = false;

    clearModal(isHidden: boolean) {
        this.isHidden = isHidden;
        this.modal?.clear();
    }
}
