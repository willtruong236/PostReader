import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  title: string = 'Posts';
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
      for (let i = 0; i < this.posts.length; i++) {
        this.posts[i].votes = 1;
      }
    });
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
  }
}
