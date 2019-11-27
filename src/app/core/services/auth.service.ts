import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  getToken(): string {
    return "";
  }
  isAuthenticated(): boolean {
    return true;
  }
  hasAdminAccess(): boolean {
    return false;
  }
}
