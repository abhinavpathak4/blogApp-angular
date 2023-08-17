import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  dateToday : Date = new Date();
  selectedComments : any = null;

  constructor(private blogService : BlogsService){
  }
  
  ngOnInit(): void {
      this.blogService.selectedBlog$.subscribe(
        (response) => {
          this.selectedComments = response?.comments;
          console.log(this.selectedComments);  
        }
      )
  }
}
