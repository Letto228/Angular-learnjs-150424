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
    set template(tmpl: TemplateRef<unknown> | null) {
        if (tmpl) {
            this.vc?.clear();
            this.vc?.createEmbeddedView(tmpl);
            this.dialog?.nativeElement.showModal();
        } else {
            this.vc?.clear();
            this.dialog?.nativeElement.close();
        }
    }
}
