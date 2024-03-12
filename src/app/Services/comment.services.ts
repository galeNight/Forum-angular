import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';

export interface CommentResponse {
    CommentID: number;
    PostID: number;
    BoddyContent: string;
    UserID: number;
}

@Injectable({
    providedIn: 'root'
})

export class CommentService {
    private readonly apiurl = enviroment.apiurl + 'Comment/'; //api route
    constructor(private http: HttpClient) { }

    //*this is a endpoint
    getComment(): Observable<CommentResponse[]> {//request from the endpoint to endpoint 
        const headers = { 'content-type': 'application/json' };//json file 
        //conts body = JSON.stringify({}) //the body with input data to api in form of a json file 
        let data = this.http.get<CommentResponse[]>(this.apiurl + 'GetComment'/*match with backend controller endpoint HttpName*/, { 'headers': headers });//sends a request to the api and sets data to response from the api 
        console.log(data);
        return data;
    }
    createComment(commentData: any): Observable<CommentResponse[]> {
        console.log(commentData);
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(commentData);
        console.log('body', body);
        let data = this.http.post<CommentResponse[]>(this.apiurl + 'CreateComment'/*match with backend controller endpoint HttpName*/, body, { 'headers': headers });
        console.log(data);
        return data;
    }
}