import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  repassword = '';
  istyping1 = true;
  istyping2 = true;
  istyping3 = true;
  isInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.warn('Clicked')

    if (this.email == '' && this.password == '' && this.repassword == '') {
      alert('please enter emaild id, password and confirmation password');
    }
    else if (this.email == '') {
      alert('please enter email id')
    }
    else if (this.password == '') {
      alert('please enter password');
    }
    else if (this.repassword == '') {
      alert('please enter password again');
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
    console.warn('inside typing1 method')
    this.istyping2 = false;
  }
  typing3() {
    console.warn('inside typing1 method')
    this.istyping3 = false;
  }

}
