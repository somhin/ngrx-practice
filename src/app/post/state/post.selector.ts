import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './post.state';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});
