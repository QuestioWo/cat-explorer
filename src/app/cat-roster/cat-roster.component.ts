import { Component } from '@angular/core';
import { CatRosterService, Roster } from '../cat-roster.service';
import { Observable } from 'rxjs';
import { Stats } from '../cat';

@Component({
  selector: 'app-cat-roster',
  templateUrl: './cat-roster.component.html',
  styleUrls: ['./cat-roster.component.scss']
})
export class CatRosterComponent {
  roster$: Observable<Roster> = new Observable<Roster>();
  stats$: Observable<Stats> = new Observable<Stats>();
  
  constructor(private catRosterService: CatRosterService) {};

  ngOnInit() {
    this.roster$ = this.catRosterService.getCats();
    this.stats$ = this.catRosterService.getTotalStats();
  }

  clearCats(): void {
    this.catRosterService.clearCats();
  }
}
