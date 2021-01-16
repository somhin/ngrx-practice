import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/_models/post.model';

export const ADD_POST_ACTION = '[POST] Add post';
export const UPDATE_POST_ACTION = '[POST] Update post';
export const DELETE_POST_ACTION = '[POST] Delete post';

export const LOAD_POSTS = '[POST] Loading post';
export const LOAD_POSTS_SUCCESS = '[POST] Post loaded';

//

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
