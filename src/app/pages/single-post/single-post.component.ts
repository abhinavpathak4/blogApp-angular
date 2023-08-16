import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  id : number = 0;

  constructor(private route: ActivatedRoute,){}
  ngOnInit() {
    // Retrieve the URL parameters and fetch the watch details
    this.route.params.subscribe(params => this.id = params['blog.id'])
    console.log(this.id);
    
  }

}
