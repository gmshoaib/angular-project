import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

    branchName: string;
    name: string;
    code: string;

    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
    }

    save() {
        console.log(this.name);
        console.log('Called');
        this.empService.saveBank(this.name, this.branchName, this.code).subscribe({
            next: data => {
                console.log(data);
                if (data.id !== 0) {
                    this.router.navigate(['bank-list']);
                }
            }
        });
    }
    listPage() {
        this.router.navigate(['bank-list']);
    }

}
