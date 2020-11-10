import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    name: string;
    empId: string;
    address: string;
    mobileNo: string;
    bankId: number;
    gradeId: number;
    gradeList: Array<{id: number, name: string, gradeLevel: string, basic: number}> = [];
    bankAccountList: Array<{id: number, acName: string, acNo: string, acType: string, currentBalance: number, bankId: number}> = [];

    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.getSalaryGradeList();
        this.getBankList();
    }

    listPage() {
        this.router.navigate(['employee-list']);
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

    getBankList() {
        this.empService.getBankAccountList().subscribe({ next: data => {
                console.log(data);
                if (data) {
                    this.makeLifeEasyForAccount(data);
                }
            }
        });
    }

    makeLifeEasyForAccount(data: any) {
        this.bankAccountList = [];
        for (let i = 0; i < data.length ; i++) {
            this.bankAccountList.push({id: data[i].id, acName: data[i].accountName, acNo: data[i].accountNo,
                acType: data[i].accountType, currentBalance: data[i].currentBalance, bankId: data[i].bank.id});
        }
    }

    save() {
        this.empService.saveEmployee(this.name, this.empId, this.address, this.mobileNo, this.bankId, this.gradeId).subscribe({
            next: data => {
                console.log(data);
                if (data.id !== 0) {
                    this.router.navigate(['employee-list']);
                }
            }
        });
    }

}
