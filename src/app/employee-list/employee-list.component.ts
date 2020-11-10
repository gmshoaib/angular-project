import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

declare interface TableData {
    headerRow: string[];
}

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    public tableHeader: TableData;
    employeeList: Array<{
        id: number, name: string, empId: string, mobileNo: string, basic: number, medical: number,
        houseRent: number, gross: number
    }> = [];

    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.tableHeader = {
            headerRow: ['Sl', 'Name', 'Employee ID', 'Mobile No', 'Basic Salary', 'Medical Allowance', 'House Rent', 'Gross Salary']
        };
        this.getEmployeeList();
    }

    getEmployeeList() {
        this.empService.getEmployeeList().subscribe({
            next: data => {
                console.log(data);
                if (data) {
                    this.makeLifeEasy(data);
                }
            }
        });
    }

    makeLifeEasy(data: any) {
        this.employeeList = [];
        for (let i = 0; i < data.length; i++) {
            this.employeeList.push({id: data[i].id, name: data[i].name, empId: data[i].employeeId, mobileNo: data[i].mobileNo,
                basic: data[i].basicSalary, medical: data[i].medicalAllowance, houseRent: data[i].houseRent, gross: data[i].grossSalary});
        }
    }

    create() {
        this.router.navigate(['employee']);
    }
}
