import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnt215CoreComponent } from './dnt215-core.component';

describe('Dnt215CoreComponent', () => {
  let component: Dnt215CoreComponent;
  let fixture: ComponentFixture<Dnt215CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dnt215CoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dnt215CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
