import { Component } from '@angular/core';
import { RolesService } from '../Services/roles.service';
import { response } from 'express';
import { roles } from '../models/roles';



@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  constructor(private services:RolesService){}
  public rolelist:roles[]=[];
  Getroleslist(){
    this.services.getRoles().subscribe((response:any)=>{
      this.rolelist = response.data.media;
      console.log(this.rolelist);
    });
  }
}
