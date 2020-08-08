import { TestBed } from '@angular/core/testing';

import { OndestroyService } from './ondestroy.service';

describe('OndestroyService', () => {
  let service: OndestroyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OndestroyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
