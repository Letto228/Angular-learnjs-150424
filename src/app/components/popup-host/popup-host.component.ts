import {
    Component,
    ElementRef,
    Input,
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
    @ViewChild('dialog', {read: ElementRef})
    private readonly dialog: ElementRef | undefined;

    @ViewChild('vc', {read: ViewContainerRef})
    private readonly vc: ViewContainerRef | undefined;

    @Input()
    set template(templateRef: TemplateRef<unknown> | null) {
        this.vc?.clear();

        if (templateRef) {
            this.insertPopupTemplate(templateRef);
            this.dialog?.nativeElement.showModal();

            return;
        }

        this.dialog?.nativeElement.close();
    }

    insertPopupTemplate(templateRef: TemplateRef<unknown>) {
        this.vc?.createEmbeddedView(templateRef);
    }
}
