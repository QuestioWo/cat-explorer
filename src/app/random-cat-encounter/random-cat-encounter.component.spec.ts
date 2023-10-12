import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatEncounterComponent } from './random-cat-encounter.component';

describe('RandomCatEncounterComponent', () => {
  let component: RandomCatEncounterComponent;
  let fixture: ComponentFixture<RandomCatEncounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCatEncounterComponent]
    });
    fixture = TestBed.createComponent(RandomCatEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
