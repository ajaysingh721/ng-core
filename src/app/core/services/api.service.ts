import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class APIService {
  apiSuffix: string;
  constructor(apiSuffix: string, private http: HttpClient) {
    this.apiSuffix = `${environment.API_URL}/${apiSuffix}`;
  }

  create(payload: any): any {
    return this.http.post(`${this.apiSuffix}`, payload);
  }

  update(id: any, payload: any): any {
    return this.http.put(`${this.apiSuffix}/${id}`, payload);
  }

  remove(id: any): any {
    return this.http.delete(`${this.apiSuffix}/${id}`);
  }

  getAll(): any {
    return this.http.get(this.apiSuffix);
  }

  get(id: any): any {
    return this.http.get(`${this.apiSuffix}/${id}`);
  }
}
