import {NgModule} from '@angular/core';
import {NgTemplateOutlet, CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {PopupHostComponent} from './popup-host.component';

@NgModule({
    imports: [NgTemplateOutlet, CommonModule, MatIconModule],
    declarations: [PopupHostComponent],
    exports: [PopupHostComponent],
})
export class PopupHostModule {}
