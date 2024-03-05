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
    this.getTopic(); //call getTopic on initialization
  }

  public topiclist: TopicResponse[] = [];

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
  addTopic() {
    console.log('Topic form:', this.topicForm.value);
    const topicData = this.topicForm.value; // Get the form values
    this.services.createTopic(topicData).subscribe(
      (response: any) => {
        console.log('Topic added:', response);
        this.getTopic();
        this.topicForm.reset();
      },
      (error: any) => {
        console.error('Error adding topic:', error);
      }
    );
  }
}
