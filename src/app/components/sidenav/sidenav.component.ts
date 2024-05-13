import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ViewChild,
    inject,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// implements
//     OnChanges,
//     OnInit,
//     DoCheck,
//     AfterContentInit,
//     AfterContentChecked,
//     AfterViewInit,
//     AfterViewChecked,
//     OnDestroy
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: true}) private readonly drawerComponent: MatDrawer | undefined;

    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    // @Input() testText: string | null = null;
    // @Input() testText1 = '';
    // @Input() testText2 = '';
    // @Input() testText3 = '';

    // constructor() {
    //     // eslint-disable-next-line no-console
    //     console.log('constructor SidenavComponent', this.testText);
    // }

    // ngOnChanges({testText, testText2}: SimpleChanges): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngOnChanges SidenavComponent');

    //     if (testText) {
    //         // eslint-disable-next-line no-console
    //         console.log(
    //             'is @Input() testText changed',
    //             testText.previousValue,
    //             testText.currentValue,
    //             this.testText,
    //             this.testText === testText.currentValue,
    //         );
    //     }

    //     if (testText2) {
    //         // eslint-disable-next-line no-console
    //         console.log('is @Input() testText2 changed', testText2);
    //     }
    // }

    // ngOnInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('OnInit SidenavComponent', this.testText);
    // }

    // ngDoCheck(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngDoCheck SidenavComponent');
    // }

    // ngAfterContentInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngAfterContentInit SidenavComponent');
    // }

    // ngAfterContentChecked(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngAfterContentChecked SidenavComponent');
    // }

    // ngAfterViewInit(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngAfterViewInit SidenavComponent');
    // }

    // ngAfterViewChecked(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngAfterViewChecked SidenavComponent');
    // }

    // ngOnDestroy(): void {
    //     // eslint-disable-next-line no-console
    //     console.log('ngOnDestroy SidenavComponent');
    // }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        this.changeDetectorRef.markForCheck();
    }
}
