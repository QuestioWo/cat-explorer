import { Injectable } from '@angular/core';
import { Cat, Stats, Base64Cat } from './cat';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export type Roster = Array<Base64Cat | null>;

@Injectable({
  providedIn: 'root'
})
export class CatRosterService {
  roster: Roster = new Array<Base64Cat | null>(6);
  rosterSubject$ = new BehaviorSubject(this.roster);
  statsSubject$ = new BehaviorSubject<Stats>({strength: 0, loudness: 0 });

  constructor() {
    const existingRoster = localStorage.getItem('roster');
    
    if (existingRoster === null) {
      localStorage.setItem('roster', JSON.stringify(this.roster));
    } else {
      this.roster = JSON.parse(existingRoster);
    }
    
    this.refreshCats();
  }

  private refreshCats() {
    localStorage.setItem('roster', JSON.stringify(this.roster));
    this.rosterSubject$.next(this.roster);
    this.computeTotalStats();
  }

  private blobToBase64(blob: Blob): Observable<any> {
    const fileReader = new FileReader();
    const observable = new Observable(observer => {
      fileReader.onloadend = () => {
        observer.next(fileReader.result);
        observer.complete();
      };
    });
    fileReader.readAsDataURL(blob);
    return observable;
  }

  setCat(index:number, cat?: Observable<Cat>) {
    if (cat) {
      cat.pipe(
        tap(
          (c: Cat) => {
            this.blobToBase64(c.pictureBlob).pipe(
              tap(
                (b64: string) => {
                  this.roster[index] = {
                    pictureBase64: b64,
                    stats: c.stats
                  };

                  this.refreshCats();
                }
              )
            ).subscribe();
          }
        )
      ).subscribe().unsubscribe(); // unsubscribe so underlying subject does not change the image
    }
  }

  getCats(): Observable<Roster> {
    return this.rosterSubject$.asObservable();
  }

  computeTotalStats(): void {
    let totalStrength = 0;
    let totalLoudness = 0;
    
    for (var i = 0; i < this.roster.length; ++i) {
      let currCat = this.roster[i]

      if (currCat) {
        totalLoudness += currCat.stats.loudness; 
        totalStrength += currCat.stats.strength; 
      }
    }

    this.statsSubject$.next({
      strength: totalStrength,
      loudness: totalLoudness
    });
  }

  getTotalStats(): Observable<Stats> {
    return this.statsSubject$.asObservable();
  }

  clearCats(): void {
    this.roster = new Array<Base64Cat | null>(6);
    this.refreshCats();
  }
}
