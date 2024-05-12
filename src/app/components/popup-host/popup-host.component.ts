import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        this.viewport?.clear();
        this.isPopupHidden = !templateRef;

        if (templateRef) {
            this.viewport?.createEmbeddedView(templateRef);
        }
    }

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    isPopupHidden = true;
}
