import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewportViewContainer: ViewContainerRef | undefined;

    @Input() set template(template: TemplateRef<unknown> | null) {
        this.updatePopupContent(template);
    }

    get isViewportClear(): boolean {
        return !this.viewportViewContainer?.length;
    }

    private updatePopupContent(template: TemplateRef<unknown> | null) {
        this.viewportViewContainer?.clear();

        if (template) {
            this.viewportViewContainer?.createEmbeddedView(template);
        }
    }
}
