import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (/api/i.test(req.url))
      req = req.clone({ url: environment.API_URL + req.url });
    return next.handle(req);
  }
}
