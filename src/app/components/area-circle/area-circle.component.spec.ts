import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCircleComponent } from './area-circle.component';

describe('AreaCircleComponent', () => {
  let component: AreaCircleComponent;
  let fixture: ComponentFixture<AreaCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
