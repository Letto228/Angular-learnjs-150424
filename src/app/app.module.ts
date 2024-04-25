import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {CardModule} from './pages/products-list/card/card.module';
import {ProductsListModule} from './pages/products-list/products-list.module';

@NgModule({
    declarations: [AppComponent],
    exports: [],
    imports: [
        CardModule,
        HeaderModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ProductsListModule,
    ],
    // imports: [HeaderComponent, BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    //
    bootstrap: [AppComponent],
})
export class AppModule {}
