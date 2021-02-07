import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees = [
    {
      firstName: 'Diksha',
      lastname: 'Agrawal',
      DOB: '9-2-1999',
      email: 'diksha@gmail.com'
    },
    {
      firstName: 'rohith',
      lastname: 'dalvi',
      DOB: '9-3-1999',
      email: 'rohith@gmail.com'
    },
    {
      firstName: 'manas',
      lastname: 'kulkarni',
      DOB: '9-4-1999',
      email: 'manas@gmail.com'
    },
    {
      firstName: 'rahul',
      lastname: 'joshi',
      DOB: '9-5-1999',
      email: 'rahul@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
