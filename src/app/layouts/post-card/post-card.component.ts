import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() blog! : Blog

  constructor(private router : Router){}
  ngOnInit(): void { 
  }

  singlePost(blog : Blog){
    console.log(blog);
    this.router.navigate(['single-post',blog.id])
  }

}
