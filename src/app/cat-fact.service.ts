import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface CatFactREST {
  data: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  constructor(private http: HttpClient) { }

  getNewFact(): Observable<string> {
    return this.http.get<CatFactREST>("https://meowfacts.herokuapp.com").pipe(
      map((d: CatFactREST) => { return d.data[0]; })
    );
  }
}
