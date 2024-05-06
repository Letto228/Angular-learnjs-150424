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

    @Input() template: TemplateRef<unknown> | null = null;

    constructor() {
        setTimeout(() => {
            if (this.template) {
                this.openDialog(this.template);
            } else {
                this.dialog?.nativeElement.close();
            }
        }, 3000);

        setTimeout(() => {
            if (this.template) {
                this.openDialog(this.template);
            } else {
                this.dialog?.nativeElement.close();
            }
        }, 6000);

        setTimeout(() => {
            if (this.template) {
                this.openDialog(this.template);
            } else {
                this.dialog?.nativeElement.close();
            }
        }, 9000);
    }

    private openDialog(template: TemplateRef<unknown>): void {
        this.vc?.clear();
        this.vc?.createEmbeddedView(template);
        this.dialog?.nativeElement.showModal();
    }
}
