import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/_models/post.model';
import { PostsState } from './post.state';

export const POST_STATE_NAME = 'posts';
const getPostState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostByID = createSelector(getPostState, (state, props) => {
  return state.posts.find((post: Post) => post.id === props.id);
});
