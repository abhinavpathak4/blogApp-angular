import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() blog! : Blog
date : Date = new Date();
  constructor(private router : Router,private blogService : BlogsService){}
  ngOnInit(): void { 
  }

  navigateToSinglePost(blog: Blog) {
    // Save the selected blog to the shared service
    this.blogService.setSelectedBlog(blog);

    // Navigate to the single post component
    this.router.navigate(['/single-post']);
  }

}
