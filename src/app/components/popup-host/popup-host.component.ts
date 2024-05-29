import {
    ChangeDetectionStrategy,
    Component,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    inject,
} from '@angular/core';
import {PopupService} from 'src/app/shared/popup/popup-api.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewportViewContainer: ViewContainerRef | undefined;

    @Input() set template(template: TemplateRef<unknown> | null) {
        this.updatePopupContent(template);
    }

    private readonly popupApiService = inject(PopupService);
    readonly popupContent$ = this.popupApiService.popupSubject$;

    popupClose() {
        this.popupApiService.closePopup();
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
