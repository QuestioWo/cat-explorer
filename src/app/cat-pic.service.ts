import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatPicService {
  constructor(private http: HttpClient) { }

  getNewPic(): Observable<Blob> {
    return this.http.get("https://cataas.com/cat", { responseType: "blob" });
  }
}
