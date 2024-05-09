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
        if (!templateRef) {
            this.initViewport(true);
        }

        this.insertModalTemplate(templateRef);
    }

    @Output() readonly closeModal = new EventEmitter<void>();

    isHidden = true;

    insertModalTemplate(templateRef: TemplateRef<unknown> | null): void {
        if (!templateRef) {
            return;
        }

        this.initViewport(false);
        this.viewport?.createEmbeddedView(templateRef);
    }

    /**
     * состояние модального окна
     * @param isViewportHidden: скрыть/показать модальное окно
     */
    initViewport(isViewportHidden: boolean): void {
        this.isHidden = isViewportHidden;
        this.viewport?.clear();
    }
}
