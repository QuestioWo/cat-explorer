import { Component } from '@angular/core';
import { PicOrFact, RandomCatService } from '../random-cat.service';
import { CatRosterService } from '../cat-roster.service';
import { Observable, map } from 'rxjs';
import { Cat } from '../cat';

@Component({
  selector: 'app-encounter-buttons',
  templateUrl: './encounter-buttons.component.html',
  styleUrls: ['./encounter-buttons.component.scss']
})
export class EncounterButtonsComponent {
  picOrFact$: Observable<PicOrFact> = new Observable<PicOrFact>();

  constructor(private randomCatService: RandomCatService, private catRosterService: CatRosterService) {}
  
  ngOnInit() {
    this.randomCatService.generateNewCat();
    this.picOrFact$ = this.randomCatService.getCurrentFactOrPic();
  }

  accept(index: number) {
    this.catRosterService.setCat(index, this.picOrFact$.pipe(
      map((data: PicOrFact) => { return data.cat; })  
    ));
    this.randomCatService.generateNewCat();
  }

  canAccept(): Observable<boolean> {
    return this.picOrFact$.pipe(
      map((data: PicOrFact) => !data.generatedPic)  
    );
  }

  reject(): void {
    this.randomCatService.generateNewCat();
  }
}
