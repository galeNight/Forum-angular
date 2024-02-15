import { Component } from '@angular/core';
import { RolesService, RolesResponse } from '../Services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  constructor(private services: RolesService) {}

  public rolelist: RolesResponse[] = [];

  Getroleslist() {
    this.services.getRoles().subscribe(
      (response: RolesResponse[]) => {
        this.rolelist = response;
        console.log(this.rolelist);
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }
}
