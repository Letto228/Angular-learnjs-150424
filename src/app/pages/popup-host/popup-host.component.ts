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
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @Input() set template(tmpl: TemplateRef<any> | null) {
        this.viewport?.clear();

        this.isHidden = !tmpl;

        if (tmpl) {
            this.viewport?.createEmbeddedView(tmpl);
        }
    }

    isHidden = true;
}
