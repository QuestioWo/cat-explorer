import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRosterComponent } from './cat-roster.component';

describe('CatRosterComponent', () => {
  let component: CatRosterComponent;
  let fixture: ComponentFixture<CatRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatRosterComponent]
    });
    fixture = TestBed.createComponent(CatRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
