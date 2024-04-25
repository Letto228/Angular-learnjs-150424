import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {CardModule} from './pages/products-list/card/card.module';

// import {HeaderComponent} from './components/header/header.component';

// declaration ~ const
// export ~ module.export = {...}
// import ~ import {...} from '...'

@NgModule({
    declarations: [AppComponent],
    exports: [],
    imports: [
        HeaderModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ProductsListModule,
        CardModule,
    ],
    // imports: [HeaderComponent, BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    //
    bootstrap: [AppComponent],
})
export class AppModule {}
