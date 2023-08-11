import { Component } from '@angular/core';
import { map, catchError } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  blogList : Blog[] = [];
  constructor(private blogService : BlogsService){}
  ngOnInit(): void {
    this.blogService.getBlogs().pipe(
      map(
        (response : Blog[]) => {
          this.blogList = response;
          console.log(this.blogList);  
          return response;          
        }
      ),
      catchError((error) => {
        console.log("api is down");
        return []; 
      })

    ).subscribe(
      (data) => {
        console.log("some error occured");
      }
    )
}
}
