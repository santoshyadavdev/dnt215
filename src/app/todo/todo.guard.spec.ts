import { TestBed } from '@angular/core/testing';

import { TodoGuard } from './todo.guard';

describe('TodoGuard', () => {
  let guard: TodoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
