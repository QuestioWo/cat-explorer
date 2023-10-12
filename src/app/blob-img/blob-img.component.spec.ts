import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobImgComponent } from './blob-img.component';

describe('BlobImgComponent', () => {
  let component: BlobImgComponent;
  let fixture: ComponentFixture<BlobImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlobImgComponent]
    });
    fixture = TestBed.createComponent(BlobImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
