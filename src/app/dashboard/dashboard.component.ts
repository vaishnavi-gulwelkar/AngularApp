import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.interface';
import { employees } from "../employees";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empList: Employee[] = employees;

  constructor(private router: Router) { }

  editEmp(index: number) {
    console.log('index', index)
    this.router.navigate([`/edit-emp/${index}`])
  }

  deleteEmp(index: number) {
    if (employees.length > 0) {
      employees.splice(index, 1);
      this.empList = employees;
    }


  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);

  }

  ngOnInit(): void {
    if (localStorage.getItem('email')) {

    } else {
      this.router.navigate(['/login'])
    }
  }
}
