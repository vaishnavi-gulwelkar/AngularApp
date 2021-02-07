import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  firstname=''
  lastname=''
  dob=''
  email=''
  istyping1 = true;
  istyping2 = true;
  istyping3 = true;
  
  isInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    console.warn('Clicked')

    if (this.firstname == '') {
      alert('please enter first name')
    }
    else if(this.firstname.length<1){
      alert('First name should contain atleast one character')
    }
    else if(this.firstname.length>=15){
      alert('First Name could not be so lengthy')
    }
    else if (this.lastname == '') {
      alert('please enter last name');
    }
    else if(this.lastname.length<1){
      alert('Last name should contain atleast one character')
    }
    else if(this.lastname.length>=15){
      alert('Last Name could not be so lengthy')
    }
    else if (this.dob == '') {
      alert('please enter date of birth');
    }
    else if (this.email == '') {
      alert('please enter email');
    }
    else {
      this.isInvalid = true;
    }
  }

  typing1() {
    console.warn('inside typing1 method')
    this.istyping1 = false;
  }
  typing2() {
    console.warn('inside typing2 method')
    this.istyping2 = false;
  }
  typing3() {
    console.warn('inside typing4 method')
    this.istyping3 = false;
  }

}
