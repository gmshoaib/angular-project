import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGradeListComponent } from './salary-grade-list.component';

describe('SalaryGradeListComponent', () => {
  let component: SalaryGradeListComponent;
  let fixture: ComponentFixture<SalaryGradeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryGradeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
