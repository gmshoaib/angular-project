import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

declare interface TableData {
    headerRow: string[];
}
@Component({
  selector: 'app-salary-grade-list',
  templateUrl: './salary-grade-list.component.html',
  styleUrls: ['./salary-grade-list.component.css']
})
export class SalaryGradeListComponent implements OnInit {
    public tableHeader: TableData;
    gradeList: Array<{id: number, name: string, gradeLevel: string, basic: number}> = [];

  constructor(private empService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
      this.tableHeader = {
          headerRow: [ 'Sl', 'Name', 'Grade Level', 'Basic Salary']};
      this.getSalaryGradeList();
  }
  getSalaryGradeList() {
      this.empService.getSalaryGradeAllList().subscribe({ next: data => {
              console.log(data);
              if (data) {
                this.makeLifeEasy(data);
              }
          }
      });
  }
  makeLifeEasy(data: any) {
    this.gradeList = [];
      for (let i = 0; i < data.length ; i++) {
        this.gradeList.push({id: data[i].id, name: data[i].name, gradeLevel: data[i].gradeLevel, basic: data[i].basicSalary});
      }
  }
  create() {
      this.router.navigate(['salary-grade']);
  }
  setBasic() {
      this.router.navigate(['set-basic']);
  }

}
