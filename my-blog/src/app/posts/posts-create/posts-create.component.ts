import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Post} from "../posts.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    const value = form.value;
    let newPost: Post = new Post(value.userid, 1, value.title, value.content);

    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        newPost
      )
      .subscribe(response => {
        console.log(response);
      });
  }

}
