import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, CardModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
