import {Component, OnInit} from '@angular/core';
import {PostService} from '../auth/shared/post.service';
import {PostModel} from '../models/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Array<PostModel> = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
    });

  }
}
