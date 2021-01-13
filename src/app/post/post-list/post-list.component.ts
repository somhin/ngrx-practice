import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/_models/post.model';
import { AppState } from 'src/app/_store/app.state';
import { deletePost } from '../state/post.actions';
import { getPosts } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  deletePost(id: string) {
    if (confirm('delete post?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
