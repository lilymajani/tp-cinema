import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CinemaService {

  private apiKey = '7c522565b2f68f9343176988bce19cfe'
  private ressourceUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getFilms(search: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.ressourceUrl}&query=${search}&page=${page}&language=fr`);
  }


}
