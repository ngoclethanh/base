import { inject, Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonService } from '@services/commons.service';
import { ERROR_MESSAGE }  from '@helper';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private commonService: CommonService
  ) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if(event?.body?.error_code){
            throw {error_code: event?.body?.error_code}
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse | any) => {
        if(error?.error_code){
          let error_code = error?.error_code
          const error_const = ERROR_MESSAGE[error_code as keyof typeof ERROR_MESSAGE]
          error_code = error_const ? error_const : ERROR_MESSAGE.DEFAULT
          this.commonService.showError(error_code, '', true)
        }

        return throwError(error);
      }),
    );
  }
}
