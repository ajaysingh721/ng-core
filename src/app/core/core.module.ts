import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from "./services/auth.service";
import { APIService } from "./services/api.service";
import { ThemeService } from "./services/theme.service";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { ApiPrefixInterceptor } from "./interceptors/api-prefix.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";

@NgModule({
  providers: [
    AuthService,
    APIService,
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
    },
    AuthGuard,
    AdminGuard,
    ThemeService
  ]
})
export class CoreModule {}
