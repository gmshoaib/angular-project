import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-set-lowest-grade-basic',
    templateUrl: './set-lowest-grade-basic.component.html',
    styleUrls: ['./set-lowest-grade-basic.component.css']
})
export class SetLowestGradeBasicComponent implements OnInit {

    amount: number;

    constructor(private empService: EmployeeServiceService, private router: Router) {
    }

    ngOnInit(): void {
    }

    save() {
        console.log('Called');
        this.empService.setBasicSalary(this.amount).subscribe({
            next: data => {
                console.log(data);
                this.router.navigate(['salary-grade-list']);
            }
        });
    }
    listPage() {
        this.router.navigate(['salary-grade-list']);
    }

}
