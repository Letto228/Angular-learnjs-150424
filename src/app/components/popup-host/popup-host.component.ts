import {
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        templateRef ? this.insertModalTemplate(templateRef) : this.onClose();
    }

    @Output() readonly closeModal = new EventEmitter<void>();

    closeTemplate = false;

    insertModalTemplate(templateRef: TemplateRef<unknown>) {
        this.closeTemplate = true;
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(templateRef);
    }

    onClose(): void {
        this.viewport?.clear();
        this.closeTemplate = false;
    }
}
