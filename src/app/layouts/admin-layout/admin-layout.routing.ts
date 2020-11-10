import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {SalaryGradeComponent} from '../../salary-grade/salary-grade.component';
import {SalaryGradeListComponent} from '../../salary-grade-list/salary-grade-list.component';
import {SetLowestGradeBasicComponent} from '../../set-lowest-grade-basic/set-lowest-grade-basic.component';
import {BankComponent} from '../../bank/bank.component';
import {BankListComponent} from '../../bank-list/bank-list.component';
import {BankAccountComponent} from '../../bank-account/bank-account.component';
import {BankAccountListComponent} from '../../bank-account-list/bank-account-list.component';
import {EmployeeServiceService} from '../../services/employee-service.service';
import {EmployeeComponent} from '../../employee/employee.component';
import {EmployeeListComponent} from '../../employee-list/employee-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'salary-grade',   component: SalaryGradeComponent },
    { path: 'salary-grade-list',   component: SalaryGradeListComponent },
    { path: 'set-basic',      component: SetLowestGradeBasicComponent },
    { path: 'bank',           component: BankComponent },
    { path: 'bank-list',      component: BankListComponent },
    { path: 'bank-account',   component: BankAccountComponent },
    { path: 'bank-account-list',   component: BankAccountListComponent },
    { path: 'employee',   component: EmployeeComponent },
    { path: 'employee-list',   component: EmployeeListComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
