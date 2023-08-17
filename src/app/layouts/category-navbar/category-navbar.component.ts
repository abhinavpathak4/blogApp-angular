import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  constructor(private blogService : BlogsService){}
  ngOnInit(): void {
  }


  setCategory(category : string){
    this.blogService.setSelectedCategory(category);
  }
  
}
