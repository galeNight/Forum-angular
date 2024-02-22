import { Injectable } from '@angular/core';
import { roles } from '../models/roles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';

export interface RolesResponse {
  roleID: number;
  roleName: string;
}

@Injectable({
  providedIn: 'root'
})

export class RolesService {
  private readonly apiurl=enviroment.apiurl+"Roles/";//api route
  constructor(private http:HttpClient) { }

  //*this is a endpoint
  getRoles():Observable<RolesResponse[]>{//request from the endpoint to endpoint 
    const headers ={'content-type':'application/json'}//json file 
    //conts body = JSON.stringify({}) //the body with input data to api in form of a json file 
    let data = this.http.get<RolesResponse[]>(this.apiurl+"GetRoles",{'headers':headers}) //sends a request to the api and sets data to response from the api 
    console.log(data);
    return data;
  }
}




//!sabdsa
//*sajhikdhsa
//todo:adnsadsa
//?ajsodjosaj
//dsfjgdsfljgkds