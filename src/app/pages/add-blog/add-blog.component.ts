import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, filter, map, single, tap } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private blogService : BlogsService){}

  ngOnInit(): void {
      
  }

  addPost = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    category: new FormControl('', Validators.required),
    featured : new FormControl(false)
  });

  savePost():void {
    const singleBlog : Blog = {
      title: this.addPost.value.title!,
      description: this.addPost.value.description!,
      category: this.addPost.value.category!,
      comments : [],
      featured : false
    }
    this.blogService.addBlogPost(singleBlog).subscribe(
      (data) => console.log(data.body)
    );
    this.addPost.reset();  
  }
}
