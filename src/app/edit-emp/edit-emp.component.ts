import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.interface';
import { employees } from '../employees';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  firstName = '';
  lastName = '';
  dob= '';
  email = '';
  id = 0

  constructor(
    private router: Router,//syntax for router initialization
    private active: ActivatedRoute,//syntax to take index while routing
  ) { }


  ngOnInit(): void {
    this.id = this.active.snapshot.params.id;
    this.firstName = employees[this.id].firstName;
    this.lastName=employees[this.id].lastName;
    this.dob=employees[this.dob].dob;
    this.email=employees[this.email].email;
  }

  editEmp() {
    const emp: Employee = {
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      email: this.email
    }
    employees[this.id] = emp;
    console.log('i am in edit emp')
    this.router.navigate(['/dashboard'])
  }
}
