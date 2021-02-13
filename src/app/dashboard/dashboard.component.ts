import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.interface';
import { employees } from "../employees";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empList: Employee[] = employees;

  constructor() { }

  ngOnInit(): void {
  }
}
