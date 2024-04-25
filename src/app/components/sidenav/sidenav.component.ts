import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @Input() isSidenavOpened = false;

    @Output() isSidenavOpenedChange = new EventEmitter<boolean>();

    toggleSidenavOpened() {
        this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
    }
}
