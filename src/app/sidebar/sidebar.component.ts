import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/bank-list', title: 'Bank List',  icon:'pe-7s-graph2', class: '' },
    { path: '/bank-account-list', title: 'Bank Account List',  icon:'pe-7s-graph2', class: '' },
    { path: '/salary-grade-list', title: 'Salary Grade List',  icon:'pe-7s-graph2', class: '' },
    { path: '/employee-list', title: 'Employee List',  icon:'pe-7s-graph2', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
