import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('content', {read: ViewContainerRef, static: true})
    private readonly content: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        this.content?.clear();

        if (templateRef) {
            this.insertTemplate(templateRef);

            return;
        }

        this.closePopup();
    }

    isClosed = true;

    insertTemplate(templateRef: TemplateRef<unknown>) {
        this.isClosed = false;
        this.content?.createEmbeddedView(templateRef);
    }

    closePopup() {
        this.isClosed = true;
    }
}
