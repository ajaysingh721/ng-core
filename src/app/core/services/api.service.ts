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

  create(payload: T): Observable<T> {
    return this.http.post<T>(`${this._endpoint}`, payload);
  }

  update(id: any, payload: T): Observable<T> {
    return this.http.put<T>(`${this._endpoint}/${id}`, payload);
  }

  remove(id: any): Observable<T> {
    return this.http.delete<T>(`${this._endpoint}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this._endpoint);
  }

  get(id: any): Observable<T> {
    return this.http.get<T>(`${this._endpoint}/${id}`);
  }
}
