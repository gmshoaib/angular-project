import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-salary-grade',
  templateUrl: './salary-grade.component.html',
  styleUrls: ['./salary-grade.component.css']
})
export class SalaryGradeComponent implements OnInit {

  name: string;
  gradeLevel: number;
  constructor(private empService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.name);
    console.log(this.gradeLevel);
    console.log('Called');
    this.empService.saveSalaryGrade(this.name, this.gradeLevel).subscribe({ next: data => {
            console.log(data);
            if (data.id !== 0) {
                this.router.navigate(['salary-grade-list']);
            }
        }
    });
  }
  listPage() {
      this.router.navigate(['salary-grade-list']);
  }

}
