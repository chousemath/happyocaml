import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleInputComponent } from './triple-input.component';

describe('TripleInputComponent', () => {
  let component: TripleInputComponent;
  let fixture: ComponentFixture<TripleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
