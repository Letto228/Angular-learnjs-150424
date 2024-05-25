import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() aplicationConfig: ApplicationConfig | null = null;

    @Output() readonly menuClick = new EventEmitter<Event>();

    onClick(event: Event) {
        this.menuClick.emit(event);
    }

    openPopup(_template: TemplateRef<{$implicit: string}>) {
        // this.popupService.openPopup(template, context);
    }

    closePopup() {
        // this.popupService.closePopup();
    }
}
