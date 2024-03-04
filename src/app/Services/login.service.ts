import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';


export interface LoginResponse{
  accountID:number;
  accountName:string;
  accountPassword:string;
  accountEmail:string;
  roleID:number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiurl=enviroment.apiurl+"Account/";//api route
  constructor(private http:HttpClient) { }

  loginAccount(accountData:any):Observable<LoginResponse[]>{//request from the endpoint to endpoint 
    const headers ={'content-type':'application/json'}//json file 
    const body = JSON.stringify(accountData) //the body with input data to api in form of a json file 
    let data = this.http.post<LoginResponse[]>(this.apiurl+"Login"/*match with backend controller endpoint HttpName*/,body,{'headers':headers}) //sends a request to the api and sets data to response from the api 
    console.log(data);
    return data;
  }
}