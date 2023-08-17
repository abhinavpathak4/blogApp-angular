import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  blog : Blog | null = null;
  commentsForm: FormGroup;
  constructor(private blogService : BlogsService,private formBuilder: FormBuilder){
    this.commentsForm = this.formBuilder.group({
      commentTitle: ['', Validators.required],
      commentDesc: ['', Validators.required],
      approved: [false]
    });
  }

  ngOnInit(): void {
      this.blogService.selectedBlog$.subscribe(
        (data) => {
          this.blog = data;
          console.log('inside the comment form component' , this.blog);
        },
      )
  }

  postComment(){
    const newComment = this.commentsForm.value;
    this.blog?.comments?.push(newComment);
    this.blogService.addBlogPost(this.blog).subscribe(
      (response) => 
      {
        console.log(response.status);
        console.log(response.body);
        
      }
    )
  }
}
