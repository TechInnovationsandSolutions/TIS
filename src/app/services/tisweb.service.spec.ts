import { TestBed } from '@angular/core/testing';

import { TiswebService } from './tisweb.service';

describe('TiswebService', () => {
  let service: TiswebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiswebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
