import {
    Component,
    ContentChild,
    ElementRef,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // @ViewChild('drawer') private readonly drawerComponent: MatDrawer | undefined;
    @ViewChild(MatDrawer) private readonly drawerComponent: MatDrawer | undefined;
    @ViewChild(MatDrawer, {read: ElementRef})
    private readonly drawerElement: ElementRef<HTMLElement> | undefined;
    // @ViewChild(MatButton) private readonly buttonComponent: MatButton | undefined;
    // @ViewChild('directive', {read: DirectiveClass}) private readonly buttonComponent: MatButton | undefined;

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

    // @Input() isSidenavOpened = false;

    // @Output() isSidenavOpenedChange = new EventEmitter<boolean>();

    // navigationTemplateStore: TemplateRef<unknown> | undefined;

    // @Input() set navigationTemplate(templateRef: TemplateRef<unknown>) {
    //     // this.navigationTemplateStore = templateRef;
    //     this.insertNavigationTemplate(templateRef);
    // }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        // eslint-disable-next-line no-console
        console.log(this.drawerElement?.nativeElement);
        // console.log(this.buttonComponent);
        // this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
    }

    insertNavigationTemplate(templateRef: TemplateRef<unknown>) {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(templateRef);
    }
}
