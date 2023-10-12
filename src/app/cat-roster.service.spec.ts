import { TestBed } from '@angular/core/testing';

import { CatRosterService } from './cat-roster.service';

describe('CatRosterService', () => {
  let service: CatRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
