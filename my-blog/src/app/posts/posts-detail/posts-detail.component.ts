import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Post} from "../posts.model";
import {PostsFeaturedComponent} from "../posts-featured/posts-featured.component";
import {HttpClient} from "@angular/common/http";
import {Comments} from "../comments.model";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  post: Post;
  id: number;
  postUrl: string;
  loading: boolean = false;

  constructor(private postsFeaturedComponent:PostsFeaturedComponent, private route: ActivatedRoute, private http: HttpClient) {
  }
  posts: Post[] = [];
  comments: Comments[] = [];


  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.setPosts(data);
    });
    this.id = this.route.snapshot.params['id'];
  }
  setPosts(posts: Post[]) {
    this.loading = true;
    this.posts = posts;
    this.post = posts[this.id-1];
    /////// Handling comments
    /////////// Creating post url for reaching comments
    this.postUrl = 'https://jsonplaceholder.typicode.com/posts/';
    this.postUrl += this.id;
    this.postUrl += '/comments';
    /////////// Getting comments
    this.http.get<any>(this.postUrl).subscribe(dataComments => {
      this.loading = false;
      this.setComments(dataComments)
    });

  }

  setComments(comments: Comments[]) {
    this.comments = comments;
  }

}
