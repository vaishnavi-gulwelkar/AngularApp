import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    stdName:'jhjkh',
    stdsub:'maths'
  }

  title = 'test';

  fullName: string = 'Vaishnavi';
  senderId: number = 10;

  movies = [1, 2, 3, 4, 5];

  singer: string = 'atif aslam';

  singer2: string = 'KJDSLFJSDLJFL';

  show = true;

  hide() {
    this.show = !this.show;
    console.log('this.show', this.show)
  }

  num = true;
  switch1() {
    this.num = !this.num;
    console.log('this.num', this.num)
  }


}


class Student {
} 
