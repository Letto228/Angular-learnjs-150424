import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewportRef: ViewContainerRef | undefined;

    @Input() set template(template: TemplateRef<unknown> | null) {
        this.viewportRef?.clear();

        if (template) {
            this.viewportRef?.createEmbeddedView(template);
        }
    }
}
