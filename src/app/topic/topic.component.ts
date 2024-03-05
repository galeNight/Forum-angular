import { Component } from '@angular/core';
import { TopicService, TopicResponse} from '../Services/topic.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent implements OnInit {
  topicForm!: FormGroup;

  constructor(private topicService: TopicService) {
    this.services = topicService;
  }

  services: TopicService; // Add the 'services' property

  ngOnInit() {
    this.topicForm = new FormGroup({
      'topicID': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
    });
  }

  public topiclist: TopicResponse[] = [];
  public topicID: number = 0;
  public description: string = '';

  getTopic() {
    this.services.getTopic().subscribe(
      (response: TopicResponse[]) => {
        this.topiclist = response;
        console.log(this.topiclist);
      },
      (error) => {
        console.error('Error fetching topic:', error);
      }
    );
  }
}
