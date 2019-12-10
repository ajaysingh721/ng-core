import { ErrorHandler } from "@angular/core";
class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
  }
}
