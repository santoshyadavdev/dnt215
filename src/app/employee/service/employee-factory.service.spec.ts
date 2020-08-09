import { TestBed } from '@angular/core/testing';

import { EmployeeFactoryService } from './employee-factory.service';

describe('EmployeeFactoryService', () => {
  let service: EmployeeFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
