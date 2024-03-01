import { Component } from '@angular/core';
import { AccountService, AccountResponse } from '../Services/account.services';
import { response } from 'express';
import { account } from '../models/account';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'] 
})

export class AccountComponent implements OnInit {
  accountForm!: FormGroup;
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
    this.accountForm = new FormGroup({
      'accountName': new FormControl(null, Validators.required),
      'accountPassword': new FormControl(null, Validators.required),
      'accountEmail': new FormControl(null, [Validators.required, Validators.email]),
      'roleID': new FormControl(null, Validators.required)
    });
  }
  public accountlist: AccountResponse[] = [];
  public accountName: string = '';
  public accountPassword: string = ''; 
  public accountEmail: string = '';
  public roleID: number = 0;

  services: AccountService; // Add the 'services' property

  constructor(private accountService: AccountService) {
    this.services = accountService; 
  }

  addAccount() {
    console.log('Account form:', this.accountForm.value);
    const accountData = this.accountForm.value; // Get the form values
    this.services.addAccount(accountData).subscribe(
      (response: any) => {
        console.log('Account added:', response);
        this.Getaccountlist();
        this.accountForm.reset();
      },
      (error: any) => {
        console.error('Error adding account:', error);
      }
    );
  }
  Getaccountlist() {
    this.services.getAccount().subscribe(
      (response: AccountResponse[]) => {
        this.accountlist = response;
        console.log(this.accountlist);
      },
      (error) => {
        console.error('Error fetching account:', error);
      }
    );
  }
  deleteAccount(accountID: number) {
    this.services.deleteAccount(accountID).subscribe(
      (response: any) => {
        console.log('Account deleted:', response);
        this.Getaccountlist();
        this.accountForm.reset();
      },
      (error: any) => {
        console.error('Error deleting account:', error);
        this.Getaccountlist();
        
      }
    );
  }
  accountLogin() {
    console.log('Login form:', this.loginForm.value);
    const accountData = this.loginForm.value; // Get the form values
    this.services.loginAccount(accountData).subscribe(
      (response: any) => {
        console.log('logged in with id:', response);
        this.Getaccountlist();
        this.loginForm.reset();
      },
      (error: any) => {
        console.error('Error Login failed', error);
      }
    );
  }
  UpdateAccount(accountID: number) {
    console.log('Account form:', this.accountForm.value);
    const accountData = this.accountForm.value; // Get the form values
    this.services.updateAccount(accountID, accountData).subscribe(
      (response: any) => {
        console.log('Account updated:', response);
        this.Getaccountlist();
        this.accountForm.reset();
      },
      (error: any) => {
        console.error('Error updating account:', error);
      }
    );
  }
}
