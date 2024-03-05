import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//this file is devided in 3 parts
//1. import statements "getting code from other files"
//2. component decorator = "line 10-14"
//3. component class


@Component({
  selector: 'app-root',
 // standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forum.Angular';

  gotoProfile() {
    window.location.href = '/Profile';
  }
  gotoLogin() {
    window.location.href = '/Login';
  }
  gotoaccount() {
    window.location.href = '/Account';
  }
  gotohome() {
    window.location.href = '/';
  }
  gotoRoles() {
    window.location.href = '/Roles';
  }
  gotoSideMenu() {
    window.location.href = '/Side-menu';
  }
  gotoTopic() {
    window.location.href = '/Topic';
  }
}