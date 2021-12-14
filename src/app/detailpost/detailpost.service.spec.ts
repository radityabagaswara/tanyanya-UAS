import { TestBed } from '@angular/core/testing';

import { DetailpostService } from './detailpost.service';

describe('DetailpostService', () => {
  let service: DetailpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
