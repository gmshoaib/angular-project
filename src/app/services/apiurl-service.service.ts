import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlServiceService {
    public apiUrl = 'http://localhost:9192/api/';
    public salaryGradeApi = this.apiUrl + 'salaryGrade/';
    public bankApi = this.apiUrl + 'bank/';
    public bankAccountApi = this.apiUrl + 'bankAccount/';
    public employeeApi = this.apiUrl + 'employee/';

  constructor() { }
}
