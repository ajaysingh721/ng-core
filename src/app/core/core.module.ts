import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from "./services/auth.service";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { ApiPrefixInterceptor } from "./interceptors/api-prefix.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

@NgModule({
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
