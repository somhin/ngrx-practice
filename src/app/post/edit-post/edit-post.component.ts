import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/_models/post.model';
import { AppState } from 'src/app/_store/app.state';
import { updatePost } from '../state/post.actions';
import { getPostByID } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styles: [],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  postForm: FormGroup;
  postSubScription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createForm();
    this.postSubScription = this.store.select(getPostByID).subscribe((post) => {
      if (post) {
        this.post = post;
        this.postForm.patchValue({
          title: post.title,
          description: post.description,
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.postSubScription) {
      this.postSubScription.unsubscribe();
    }
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  updatePost() {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post: Post = {
      id: this.post.id,
      title,
      description,
    };

    this.store.dispatch(updatePost({ post }));
  }
}
