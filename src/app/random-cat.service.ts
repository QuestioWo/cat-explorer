import { Injectable } from '@angular/core';
import { CatFactService } from './cat-fact.service';
import { CatPicService } from './cat-pic.service';

import { Observable, BehaviorSubject, of, map } from 'rxjs';
import { Cat } from './cat';

export interface PicOrFact {
  cat: Cat;
  fact: string;
  generatedPic: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RandomCatService {
  private picOrFact$: BehaviorSubject<PicOrFact> = new BehaviorSubject<PicOrFact>({
    cat: this.genericCatData(),
    fact: "",
    generatedPic: false
  });

  genericCatData(): Cat {
    return {
      pictureBlob: new Blob(),
      stats: {
        strength: 0,
        loudness: 0
      }
    };
  }

  constructor(private catPicService: CatPicService, private catFactService: CatFactService) { }

  ngOnInit(): void {}

  generateNewCat(): void {
    let retreivePic = (Math.floor(Math.random() * 2) == 0);

    if (retreivePic) {
      this.catPicService.getNewPic().pipe(
        map((picData: Blob) => {
          this.picOrFact$.next({
            cat: {
              pictureBlob: picData,
              stats: {
                strength: Math.ceil(Math.random() * 100),
                loudness: Math.ceil(Math.random() * 100)
              }
            },
            fact: "",
            generatedPic: true
          });
        })
      ).subscribe(); // must subscribe so the pipe is fired with data
    } else {
      this.catFactService.getNewFact().pipe(
        map((fact: string) => {
          this.picOrFact$.next({
            cat: this.genericCatData(),
            fact: fact,
            generatedPic: false
          });
        })
      ).subscribe(); // must subscribe so the pipe is fired with data
    }
  }

  getCurrentFactOrPic(): Observable<PicOrFact> {
    return this.picOrFact$.asObservable();
  }
}
