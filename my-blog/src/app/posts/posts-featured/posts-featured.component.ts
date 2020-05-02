import {Component, Injectable, OnInit} from '@angular/core';
import {Post} from "../posts.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-posts-featured',
  templateUrl: './posts-featured.component.html',
  styleUrls: ['./posts-featured.component.css']
})
export class PostsFeaturedComponent implements OnInit {
  posts: Post[] = [];
  dataAvailable: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.setPosts(data);
      this.dataAvailable = true;
    })
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  getPost(index: number) {
    return this.posts[index];
  }

}
