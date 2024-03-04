import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';

export interface profileResponse{
  accountID:number;
  accountName:string;
  accountPassword:string;
  accountEmail:string;
  roleID:number;
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly apiurl=enviroment.apiurl+"Account/";//api route
  constructor(private http:HttpClient) { }


  
  updateAccount(accountData:profileResponse):Observable<profileResponse[]>{
    console.log(accountData)
    const headers ={'content-type':'application/json'}
    const body = JSON.stringify(accountData)
    console.log("body",body)
    let data = this.http.post<profileResponse[]>(this.apiurl+"UpdateAccount"/*match with backend controller endpoint HttpName*/,body,{'headers':headers})
    console.log(data);
    return data;
}
}
