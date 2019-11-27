import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  getAccessToken(): string {
    return "";
  }
  getRefreshToken(): string {
    return "";
  }
  isAuthenticated(): boolean {
    return false;
  }
  hasAdminAccess(): boolean {
    return false;
  }
}
