import { TestBed } from '@angular/core/testing';

import { CatPicService } from './cat-pic.service';

describe('CatPicService', () => {
  let service: CatPicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatPicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
