import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterButtonsComponent } from './encounter-buttons.component';

describe('EncounterButtonsComponent', () => {
  let component: EncounterButtonsComponent;
  let fixture: ComponentFixture<EncounterButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncounterButtonsComponent]
    });
    fixture = TestBed.createComponent(EncounterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
