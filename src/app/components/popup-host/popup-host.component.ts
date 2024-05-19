import {Component, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnInit {
    @Input() template: TemplateRef<any> | null = null;
}
