import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "@core/models/requests/login-request";
import { RegisterRequest } from "@core/models/requests/register-request";
import { UpdateRequest } from "@core/models/requests/update-request";
import { throwError, Observable, retry, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private apiUrl = "http://api.ignaciofp.es:9999";

  // Endpoints
  private loginURL = `${this.apiUrl}/auth/login`;
  private logoutURL = `${this.apiUrl}/auth/logout`;
  private registerURL = `${this.apiUrl}/auth/register`;
  private userOperationURL = `${this.apiUrl}/users`;

  // Injecting HttpClient
  constructor(private http: HttpClient) {}

  handleError(err: HttpErrorResponse): any {
    // TODO: Properly handle error
    console.error(`Status code: ${err.status}, ` + `Body was: ${err.error}`);
    return throwError(() => "Something went wrong! Try again later.");
  }

  // Sends a request to with a map containing the user and password
  // hoping that they're valid and returns a valid token
  authUser(loginReq: LoginRequest): Observable<any> {
    return this.http.post(this.loginURL, loginReq);
  }

  // Sends a request to attempt to login with the token
  // Returns a new valid token if successful
  authWithToken(token: string): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Token: token,
    });
    return this.http
      .post(this.loginURL, null, { headers: httpHeaders })
      .pipe(retry(3), catchError(this.handleError));
  }

  // Sends a request asking to logout (Just makes the token invalid)
  // so anyone can use anymore
  logout(token: string): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Token: token,
    });
    return this.http.post(this.logoutURL, null, { headers: httpHeaders });
  }

  // Sends a request to create a new user, returns a valid token
  // for the user
  registerUser(registerReq: RegisterRequest): Observable<any> {
    return this.http.post(this.registerURL, registerReq);
  }

  // Sends a request to remove a user's account
  removeAccount(token: string): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Token: token,
    });
    return this.http.delete(this.userOperationURL, { headers: httpHeaders });
  }

  // Sends a request to get the user information
  // who this token belongs to
  fetchUser(token: string): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Token: token,
    });
    return this.http.get(this.userOperationURL, { headers: httpHeaders });
  }

  // Sends a request to update the user points to a new value
  updateUser(updateReq: UpdateRequest, token: string): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Token: token,
    });
    return this.http.put(this.userOperationURL, updateReq, {
      headers: httpHeaders,
    });
  }
}
