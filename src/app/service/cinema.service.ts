import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CinemaService {

  private apiKey = 'cd42fca8ef1ba1bc852d0dc870ca49ac'
  private ressourceUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getFilms(recherche: string, page: number): Observable<any> {
    console.log('recherche : ', recherche)
    return this.http.get<any>(`${this.ressourceUrl}&query=${recherche}&page=${page}&language=fr`);
  }


}
