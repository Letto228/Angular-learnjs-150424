import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './components/sidenav/sidenav.module';
import {PopupHostModule} from './components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';

@NgModule({
    declarations: [AppComponent],
    exports: [],
    imports: [
        HeaderModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ProductsListModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
    ],
    // providers: [ProductsStoreService, ProductsApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
