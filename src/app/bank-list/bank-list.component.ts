import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

declare interface TableData {
    headerRow: string[];
}
@Component({
    selector: 'app-bank-list',
    templateUrl: './bank-list.component.html',
    styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
    public tableHeader: TableData;
    bankList: Array<{id: number, name: string, branchName: string, code: string}> = [];
    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
        this.tableHeader = {
            headerRow: [ 'Sl', 'Name', 'Branch Name', 'Code']};
        this.getBankList();
    }

    getBankList() {
        this.empService.getBankList().subscribe({ next: data => {
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

    create() {
        this.router.navigate(['bank']);
    }

}
