import { Injectable } from "@angular/core";
import { account } from "../models/account";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../enviroment/enviroment";

export interface AccountResponse{
    accountID:number;
    accountName:string;
    accountPassword:string;
    accountEmail:string;
    roleID:number;
}

@Injectable({
    providedIn: 'root'
})

export class AccountService{
    private readonly apiurl=enviroment.apiurl+"Account/";//api route
    constructor(private http:HttpClient) { }

    //*this is a endpoint
    getAccount():Observable<AccountResponse[]>{//request from the endpoint to endpoint 
        const headers ={'content-type':'application/json'}//json file 
        //conts body = JSON.stringify({}) //the body with input data to api in form of a json file 
        let data = this.http.get<AccountResponse[]>(this.apiurl+"GetAccounts"/*match with backend controller endpoint HttpName*/,{'headers':headers}) //sends a request to the api and sets data to response from the api 
        console.log(data);
        return data;
    }   
    addAccount(accountData:any):Observable<AccountResponse[]>{
        console.log(accountData)
        const headers ={'content-type':'application/json'}
        const body = JSON.stringify(accountData)
        console.log("body",body)
        let data = this.http.post<AccountResponse[]>(this.apiurl+"CreateAccount"/*match with backend controller endpoint HttpName*/,body,{'headers':headers})
        console.log(data);
        return data;
    } 
}