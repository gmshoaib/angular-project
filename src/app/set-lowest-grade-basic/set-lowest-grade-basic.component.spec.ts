import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLowestGradeBasicComponent } from './set-lowest-grade-basic.component';

describe('SetLowestGradeBasicComponent', () => {
  let component: SetLowestGradeBasicComponent;
  let fixture: ComponentFixture<SetLowestGradeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLowestGradeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLowestGradeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
