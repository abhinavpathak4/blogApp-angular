import { Component, OnInit } from '@angular/core';
import { catchError, filter, map } from 'rxjs/operators';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogList: Blog[] = [];
  featuredList: Blog[] = [];

  constructor(private blogService: BlogsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.blogService.getBlogs().pipe(
      map((response: Blog[]) => {
        this.blogList = response;
        console.log(this.blogList);
        return response;
      }),
      catchError((error) => {
        console.log("API is down");
        return [];
      })
    ).subscribe(
      () =>
        this.featuredList = this.blogList.filter((blog: Blog) => blog.featured)
    );
  }
}
