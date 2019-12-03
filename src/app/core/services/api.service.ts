import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class APIService<T> {
  private _endpoint: string;

  public get endpoint(): string {
    return this._endpoint;
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }

  constructor(private http: HttpClient) {}

  public create(payload: T): Observable<T> {
    return this.http.post<T>(`${this._endpoint}`, payload);
  }

  public update(id: any, payload: T): Observable<T> {
    return this.http.put<T>(`${this._endpoint}/${id}`, payload);
  }

  public remove(id: any): Observable<T> {
    return this.http.delete<T>(`${this._endpoint}/${id}`);
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this._endpoint, { responseType: "jso" });
  }

  public get(id: any): Observable<T> {
    return this.http.get<T>(`${this._endpoint}/${id}`);
  }
}
