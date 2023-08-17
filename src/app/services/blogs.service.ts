import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
 
  private selectedBlogSource = new BehaviorSubject<Blog | null>(null);
  selectedBlog$ = this.selectedBlogSource.asObservable();
  setSelectedBlog(blog: Blog) {
    this.selectedBlogSource.next(blog);
  }

  private selectedCategorySource = new BehaviorSubject<string | null>(null);
  selectedCategory$ = this.selectedCategorySource.asObservable();
  setSelectedCategory(category : string){
    this.selectedCategorySource.next(category);
  }


  constructor(private http : HttpClient) {
   }

  // add the blog post and later post comments to the post
  addBlogPost(post: any): Observable<HttpResponse<string>>{
    return this.http.post(environment.POST_BLOG,post, {observe: 'response', responseType: 'text'});
  }

  // method to get all the blog post 
  // then we will display them under their specific categories
  getBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(environment.GET_BLOGS)
  }
  
  getBlogById(id : number){
    const options = {
      headers: { 'Content-Type': 'application/json' },
      body: id // Send the student data in the request body
    };
    console.log(environment.GET_BLOGS , options);
    return this.http.get<Blog>(environment.GET_BLOGS_BY_ID , options);
  }
}
