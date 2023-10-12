import { TestBed } from '@angular/core/testing';

import { RandomCatService } from './random-cat.service';

describe('RandomCatService', () => {
  let service: RandomCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
