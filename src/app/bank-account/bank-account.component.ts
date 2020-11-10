import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bank-account',
    templateUrl: './bank-account.component.html',
    styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

    accountType: string;
    bankCode: string;
    accountNo: string;
    accountName: string;
    currentBalance: number;
    accountTypeList: Array<{ name: string }> = [];
    bankList: Array<{id: number, name: string, branchName: string, code: string}> = [];

    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.accountTypeList = [];
        this.accountTypeList.push({name: 'Savings'}, {name: 'Current'});
        this.getBankList();
    }

    getBankList() {
        this.empService.getBankList().subscribe({
            next: data => {
                console.log(data);
                if (data) {
                    this.makeLifeEasy(data);
                }
            }
        });
    }
    makeLifeEasy(data: any) {
        this.bankList = [];
        for (let i = 0; i < data.length ; i++) {
            this.bankList.push({id: data[i].id, name: data[i].name, branchName: data[i].branchName, code: data[i].code});
        }
    }
    save() {
        console.log('Clicked');
        console.log(this.accountNo);
        console.log(this.accountName);
        console.log(this.accountType);
        console.log(this.bankCode);
        console.log(this.currentBalance);
        this.empService.saveBankAccount(this.accountNo, this.accountName, this.accountType.trim(), this.bankCode.trim(),
            this.currentBalance).subscribe({
            next: data => {
                console.log(data);
                if (data.id !== 0) {
                    this.router.navigate(['bank-account-list']);
                }
            }
        });
    }
    listPage() {
        this.router.navigate(['bank-account-list']);
    }

}
