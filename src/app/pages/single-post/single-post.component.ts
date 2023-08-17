import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
 
  constructor(private blogService : BlogsService){}
  selectedBlog: Blog | null = null;
  blogsList : Blog[] | null = null;

  ngOnInit() {
    // Subscribe to the selectedBlog$ observable to get the selected blog data
    this.blogService.selectedBlog$.subscribe(blog => {
      this.selectedBlog = blog;
      console.log(this.selectedBlog);
    });
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().pipe(
      map((resp) => resp.slice(0, 3)), // Take only the first 3 items from the response
      tap((resp) => {
        this.blogsList = resp;
        console.log('inside the single-post-component', resp);
      })
    ).subscribe((resp) => {
      console.log('inside the single-post-component after take', resp);
    });
  }
  
}  