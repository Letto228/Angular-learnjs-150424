import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, retry} from 'rxjs';

// class FirstConstructor {}
// class SecondConstructor {}

// const constructorsMap = {
//     firstConstructor: FirstConstructor,
//     secondConstructor: SecondConstructor,
// };

@Injectable()
export class CatchErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
        return handler.handle(request).pipe(
            // map(event => {
            //     if (event instanceof HttpResponse) {
            //         const {constructor, data} = event.body;

            //         return event.clone({
            //             body: new constructorsMap[constructor](data),
            //         });
            //     }

            //     return event;
            // }),
            retry({
                count: 2,
                delay: 1000,
            }),
        );
    }
}
