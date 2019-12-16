import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { LoaderService } from "../services/loader.service";

export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (/api/i.test(req.url))
      req = req.clone({ url: environment.API_URL + req.url });
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }
    req = req.clone({ headers: req.headers.set("Accept", "application/json") });
    return next.handle(req);
  }
}
