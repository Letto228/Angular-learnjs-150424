import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
    inject,
} from '@angular/core';
import {PopupService} from 'src/app/shared/popup/popup-api.service';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly popupService = inject(PopupService);
    @Input() aplicationConfig: ApplicationConfig | null = null;

    @Output() readonly menuClick = new EventEmitter<Event>();

    onClick(event: Event) {
        this.menuClick.emit(event);
    }

    openPopup(template: TemplateRef<{$implicit: string}>) {
        const popupData = {template, context: this.aplicationConfig?.title || ''};

        this.popupService.openPopup(popupData);
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
