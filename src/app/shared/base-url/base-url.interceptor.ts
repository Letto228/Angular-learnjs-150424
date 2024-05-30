import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from './base-url';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
        const newRequest = request.clone({
            url: baseUrl + request.url,
        });

        return handler.handle(newRequest).pipe();
    }
}
