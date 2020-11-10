import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiurlServiceService} from './apiurl-service.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient, private api: ApiurlServiceService) { }

    saveSalaryGrade(name: string, gradeLevel: number) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.salaryGradeApi + 'create';
        const data = {
            name: name,
            gradeLevel: gradeLevel
        };
        console.log(data);
        try {
            return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }

    getSalaryGradeAllList() {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.salaryGradeApi + 'getAll';
        try {
            return this.http.get(url, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }


    setBasicSalary(amount: number) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.salaryGradeApi + 'setBasic';
        const data = {
            amount: amount
        };
        console.log(data);
        try {
            return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }

    saveBank(name: string, branchName: string, code: string) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.bankApi + 'create';
        const data = {
            name: name,
            branchName: branchName,
            code: code
        };
        console.log(data);
        try {
            return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }

    getBankList() {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.bankApi + 'getAll';
        try {
            return this.http.get(url, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }


    saveBankAccount(accountNo: string, accountName: string, accType: string, bCode: string, currentBalance: number) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.bankAccountApi + 'create';
        const data = {
            accountNo: accountNo,
            accountName: accountName,
            accountType: accType,
            bankCode: bCode,
            currentBalance: currentBalance
        };
        console.log(data);
        try {
            return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }


    getBankAccountList() {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.bankAccountApi + 'getAll';
        try {
            return this.http.get(url, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }


    saveEmployee(name: string, empId: string, address: string, mobileNo: string, bankId: number, gradeId: number) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.employeeApi + 'create';
        const data = {
            name: name,
            employeeId: empId,
            address: address,
            mobileNo: mobileNo,
            accountId: bankId,
            gradeId: gradeId
        };
        console.log(data);
        try {
            return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }


    getEmployeeList() {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        const url = this.api.employeeApi + 'getAll';
        try {
            return this.http.get(url, httpOptions).pipe(map((res: any) => {
                return res;
            }));
        } catch (error) {
            console.log('some problem happen');
            console.error(error);
        }
    }
}
