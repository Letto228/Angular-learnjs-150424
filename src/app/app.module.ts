import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {SidenavModule} from './components/sidenav/sidenav.module';
import {PopupHostModule} from './components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {BaseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {CatchErrorInterceptor} from './shared/catch-error/catch-error.interceptor';

@NgModule({
    declarations: [AppComponent],
    exports: [],
    imports: [
        HeaderModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CatchErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
