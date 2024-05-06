import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    inject,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: true}) private readonly drawerComponent: MatDrawer | undefined;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @ContentChild('navigationTemplate', {static: true})
    private readonly navigationTemplate: TemplateRef<unknown> | undefined;

    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    selectChildrenView = 'mat-list';

    // constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    constructor() {
        setTimeout(() => {
            if (this.navigationTemplate) {
                this.viewport?.createEmbeddedView(this.navigationTemplate);
            }
        }, 100);
    }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        this.changeDetectorRef.markForCheck();
    }

    insertNavigationTemplate(templateRef: TemplateRef<unknown>) {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(templateRef);
    }
}
