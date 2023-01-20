import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private ressourceUrl = `http://localhost:8080/api/auth`;

  constructor(
    private http: HttpClient,
  ) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.ressourceUrl}/register`, user);
  }


}
