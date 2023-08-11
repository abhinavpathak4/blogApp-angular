import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http : HttpClient) {
    this.getBlogs();
   }

  // add the blog post and later post comments to the post
  addBlogPost(post: any): Observable<HttpResponse<object>>{
    return this.http.post(environment.POST_BLOG,post, {observe: 'response'});
  }

  // method to get all the blog post 
  // then we will display them under their specific categories
  getBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(environment.GET_BLOGS)
  }
  
}
