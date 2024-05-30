import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {tap} from 'rxjs';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    private readonly popupService = inject(PopupService);

    @HostBinding('class.empty') isEmpty = true;

    readonly templateContent$ = this.popupService.popupTemplate$.pipe(
        tap(templateOptions => {
            this.isEmpty = !templateOptions?.template;
        }),
    );

    onPopupClose() {
        this.popupService.closePopup();
    }
}
