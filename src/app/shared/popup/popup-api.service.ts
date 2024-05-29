import {Injectable, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PopupService {
    readonly popupSubject$ = new Subject<{
        template: TemplateRef<{$implicit: string}>;
        context: string;
    } | null>();

    openPopup(templateData: {template: TemplateRef<{$implicit: string}>; context: string}) {
        this.popupSubject$.next(templateData);
    }

    closePopup() {
        this.popupSubject$.next(null);
    }
}
