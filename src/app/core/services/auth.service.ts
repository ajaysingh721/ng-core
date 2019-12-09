import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Credentials } from "../../models/credential.model";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Login } from "../../models/login.model";
import { map } from "rxjs/operators";
import { AuthResponse } from "../../models/auth-response.model";

const credentialsKey = "userToken";

@Injectable()
export class AuthService {
  private _credential: Credential | null;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private hasAdminAccess = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const savedCredentials =
      sessionStorage.getItem(credentialsKey) ||
      localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credential = JSON.parse(savedCredentials);
    }
  }

  /**
   * Authenticates the user.
   * @param login The login parameters.
   * @return The user credentials.
   */
  login(login: Login): Observable<AuthResponse> {
    let queryString = `username=${login.username}&password=${
      login.password
    }&grant_type=password`;
    let reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-urlencoded",
      "No-Auth": "True"
    });

    return this.http.post("/token", queryString, { headers: reqHeader }).pipe(
      map((result: AuthResponse) => {
        this.setCredentials(
          {
            username: login.username,
            token: result.access_token
          },
          login.rememberMe
        );
        if (login.username == "ajay.singh721@gmail.com")
          this.hasAdminAccess.next(true);
        this.loggedIn.next(true);
        return result;
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout() {
    // Customize credentials invalidation here
    this.setCredentials();
    this.loggedIn.next(false);
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isAdmin(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credential;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  private setCredentials(credential?: Credential, remember?: boolean) {
    this._credential = credential || null;

    if (credential) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credential));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }
}
