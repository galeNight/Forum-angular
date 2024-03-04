import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import{ LoginService } from '../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
services:LoginService;
constructor(private LoginService: LoginService) {
  this.services = LoginService; 
}
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }
  accountLogin() {
    console.log('Login form:', this.loginForm.value);
    const accountData = this.loginForm.value; // Get the form values
    this.services.loginAccount(accountData).subscribe(
      (response: any) => {
        console.log('logged in with id:', response);
        sessionStorage.setItem('accountID', response);
        this.loginForm.reset();
        this.gotoprofile();
      },
      (error: any) => {
        console.error('Error Login failed', error);
      }
    );
  }
  gotoprofile(){
    window.location.href = '/Profile';
  }
}

