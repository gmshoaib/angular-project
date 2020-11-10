import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SalaryGradeComponent } from './salary-grade/salary-grade.component';
import { SalaryGradeListComponent } from './salary-grade-list/salary-grade-list.component';
import { SetLowestGradeBasicComponent } from './set-lowest-grade-basic/set-lowest-grade-basic.component';
import { BankComponent } from './bank/bank.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SalaryGradeComponent,
    SalaryGradeListComponent,
    SetLowestGradeBasicComponent,
    BankComponent,
    BankListComponent,
    BankAccountComponent,
    BankAccountListComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
