import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import{ ProfileService, } from '../Services/profile.service';
import { account } from '../models/account';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class profileComponent implements OnInit {
  updateForm!: FormGroup;
  
  constructor(private ProfileService: ProfileService) {
    this.services = ProfileService; 
  }
  services: ProfileService; // Add the 'services' property

  ngOnInit() {

    this.updateForm = new FormGroup({
      'accountID': new FormControl(null, Validators.required),
      'accountName': new FormControl(null, Validators.required),
      'accountPassword': new FormControl(null, Validators.required),
      'accountEmail': new FormControl(null, [Validators.required, Validators.email]),
      'roleID': new FormControl(null, Validators.required)
    });
  }
  
  UpdateAccount() {
    console.log('Account form:', this.updateForm.value);
    const accountData = this.updateForm.value; // Get the form values
    this.services.updateAccount(accountData).subscribe(
      (response: any) => {
        console.log('Account updated:', response);
        this.updateForm.reset();
      },
      (error: any) => {
        console.error('Error updating account:', error);
      }
    );
  }
  deleteAccount() {
    let stringAccountID = sessionStorage.getItem('accountID');
    let accountID = parseInt(stringAccountID!);
    console.log('Account ID:', accountID);
    this.services.deleteAccount(accountID).subscribe(
      (response: any) => {
        console.log('Account deleted:', response);
      },
      (error: any) => {
        console.error('Error deleting account:', error);
      }
    );
  }
  logout(){
    sessionStorage.removeItem('accountID');
    window.location.href = '/Login';
  }
}
