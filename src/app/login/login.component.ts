import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  istyping1 = true;
  istyping2 = true;
  isInvalid = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.warn('Clicked')

    if (this.email == 'admin' && this.password == 'admin') {
      console.warn('inside if')
      alert('login success');
      this.router.navigate(['/dashboard']);
    }
    else if (this.email == '' && this.password == '') {
      alert('please enter emaild id and password');
    }
    else if (this.email == '') {
      alert('please enter email id')
    }
    else if (this.password == '') {
      alert('please enter password');
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
}
