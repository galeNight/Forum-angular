import { Component } from '@angular/core';
import { CommentResponse, CommentService } from '../Services/comment.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  commentForm!: FormGroup;

  constructor(private commentService: CommentService) {
    this.services = commentService;
  }

  services: CommentService; // Add the 'services' property

  ngOnInit() {
    this.commentForm = new FormGroup({
      'commentID': new FormControl(null, Validators.required),
      'commentDescription': new FormControl(null, Validators.required),
    });
    this.getComment(); //call getComment on initialization
  }

  public commentlist: CommentResponse[] = [];

  getComment() {
    this.services.getComment().subscribe(
      (response: CommentResponse[]) => {
        this.commentlist = response;
        console.log(this.commentlist);
      },
      (error) => {
        console.error('Error fetching comment:', error);
      }
    );
  }
  addComment() {
    console.log('Comment form:', this.commentForm.value);
    const commentData = this.commentForm.value; // Get the form values
    this.services.createComment(commentData).subscribe(
      (response: any) => {
        console.log('Comment added:', response);
        this.getComment();
        this.commentForm.reset();
      },
      (error: any) => {
        console.error('Error adding comment:', error);
      }
    );
  }
}
