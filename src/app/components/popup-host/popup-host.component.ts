import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @Input() set template(value: TemplateRef<unknown> | null) {
        this.templateF = value;
        this.viewport?.clear();

        if (this.templateF) {
            this.viewport?.createEmbeddedView(this.templateF);
        }
    }

    get template(): TemplateRef<unknown> | null {
        return this.templateF;
    }

    private templateF: TemplateRef<unknown> | null = null;
}
