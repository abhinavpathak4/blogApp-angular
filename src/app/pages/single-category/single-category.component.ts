import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  category : string | null = null;
  constructor(private blogService : BlogsService){}

  ngOnInit(): void {
      this.blogService.selectedCategory$.subscribe(
        (category) => {
          this.category = category;
          console.log(category);
          
        } 
          
      )
      this.getBlogsByCategory();
  }

  getBlogsByCategory(){
    this.blogService.getBlogs().subscribe(
      (data) => {
        data.filter((blog) => {
          this.category == blog.category
        })
        console.log(data);  
      }
    )
  }

  
}
