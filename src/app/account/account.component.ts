import { Component } from '@angular/core';
import { AccountService, AccountResponse } from '../Services/account.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'] 
})

export class AccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private accountService: AccountService) {
    this.services = accountService; 
  }
  
  services: AccountService; // Add the 'services' property

  ngOnInit() {

    this.accountForm = new FormGroup({
      'accountName': new FormControl(null, Validators.required),
      'accountPassword': new FormControl(null, Validators.required),
      'accountEmail': new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  public accountlist: AccountResponse[] = [];
  public accountID: number = 0;
  public accountName: string = '';
  public accountPassword: string = ''; 
  public accountEmail: string = '';
  public roleID: number = 0;

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

}
