import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGradeComponent } from './salary-grade.component';

describe('SalaryGradeComponent', () => {
  let component: SalaryGradeComponent;
  let fixture: ComponentFixture<SalaryGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
