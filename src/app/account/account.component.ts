import { Component } from '@angular/core';
import { AccountService, AccountResponse } from '../Services/account.services';
import { response } from 'express';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'] 
})
export class AccountComponent {
  constructor(private services: AccountService) {

  }

  public accountlist: AccountResponse[] = [];

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
