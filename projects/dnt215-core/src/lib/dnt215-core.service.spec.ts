import { TestBed } from '@angular/core/testing';

import { Dnt215CoreService } from './dnt215-core.service';

describe('Dnt215CoreService', () => {
  let service: Dnt215CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dnt215CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
