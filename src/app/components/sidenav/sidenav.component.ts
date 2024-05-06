import {Component, ContentChild, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: true}) private readonly drawerComponent: MatDrawer | undefined;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @ContentChild('navigationTemplate', {static: true})
    private readonly navigationTemplate: TemplateRef<unknown> | undefined;

    constructor() {
        setTimeout(() => {
            if (this.navigationTemplate) {
                this.viewport?.createEmbeddedView(this.navigationTemplate);
            }
        }, 100);
    }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
    }

    insertNavigationTemplate(templateRef: TemplateRef<unknown>) {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(templateRef);
    }
}
