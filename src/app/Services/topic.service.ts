import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';
import { Topic } from '../models/topic';

export interface TopicResponse {
  topicID: number;
  description: string;
}
@Injectable({
    providedIn: 'root'
})

export class TopicService {
    private readonly apiurl=enviroment.apiurl+"Topic/";//api route
    constructor(private http:HttpClient) { }

    getTopic():Observable<TopicResponse[]>{//request from the endpoint to endpoint
        const headers ={'content-type':'application/json'}//json file
        //conts body = JSON.stringify({}) //the body with input data to api in form of a json file
        let data = this.http.get<TopicResponse[]>(this.apiurl+"GetTopics"/*match with backend controller endpoint HttpName*/,{'headers':headers}) //sends a request to the api and sets data to response from the api
        console.log(data);
        return data;
    }
    addTopic():Observable<TopicResponse[]>{
        const headers ={'content-type':'application/json'}
        let data = this.http.post<TopicResponse[]>(this.apiurl+"CreateTopic"/*match with backend controller endpoint HttpName*/,{'headers':headers})
        console.log(data);
        return data;
    }
}