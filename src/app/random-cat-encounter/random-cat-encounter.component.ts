import { Component } from '@angular/core';

import { PicOrFact, RandomCatService } from '../random-cat.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-random-cat-encounter',
  templateUrl: './random-cat-encounter.component.html',
  styleUrls: ['./random-cat-encounter.component.scss']
})
export class RandomCatEncounterComponent {
  picOrFact$: Observable<PicOrFact> = new Observable<PicOrFact>();

  constructor(private randomCatService: RandomCatService) {}

  ngOnInit(): void {
    this.picOrFact$ = this.randomCatService.getCurrentFactOrPic();
  }

  getCatPictureBlob(): Observable<Blob> {
    return this.picOrFact$.pipe(map(p => p.cat.pictureBlob));
  }
}
