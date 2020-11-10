import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';
declare interface TableData {
    headerRow: string[];
}
@Component({
    selector: 'app-bank-account-list',
    templateUrl: './bank-account-list.component.html',
    styleUrls: ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {
    public tableHeader: TableData;
    bankAccountList: Array<{id: number, acName: string, acNo: string, acType: string, currentBalance: number, bankId: number}> = [];
    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.tableHeader = {
            headerRow: [ 'Sl', 'A/C Name', 'A/C No', 'A/C Type']};
        this.getBankList();
    }

    create() {
        this.router.navigate(['bank-account']);
    }

    getBankList() {
        this.empService.getBankAccountList().subscribe({ next: data => {
                console.log(data);
                if (data) {
                    this.makeLifeEasy(data);
                }
            }
        });
    }

    makeLifeEasy(data: any) {
        this.bankAccountList = [];
        for (let i = 0; i < data.length ; i++) {
            this.bankAccountList.push({id: data[i].id, acName: data[i].accountName, acNo: data[i].accountNo,
                acType: data[i].accountType, currentBalance: data[i].currentBalance, bankId: data[i].bank.id});
        }
    }
}
