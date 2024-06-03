import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, retry} from 'rxjs';

@Injectable()
export class CatchErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
        return handler.handle(request).pipe(
            retry({
                count: 2,
                delay: 1000,
            }),
        );
    }
}
