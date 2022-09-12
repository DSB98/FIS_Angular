import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserCrudServiceService {
  url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }
  postUser(data: any) {
    return this.http.post(this.url, data);
  }
  DeleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  GetUser(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  UpdateUser(id: number,data: any) {
    return this.http.put(`${this.url}/${id}`,data);
  }
}
