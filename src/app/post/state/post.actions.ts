import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/_models/post.model';

export const ADD_POST_ACTION = '[POST] Add post';
export const ADD_POST_SUCCESS = '[POST] Add post success';
export const UPDATE_POST_ACTION = '[POST] Update post';
export const UPDATE_POST_SUCCESS = '[POST] Update post success';
export const DELETE_POST_ACTION = '[POST] Delete post';
export const DELETE_POST_SUCCESS = '[POST] Delet post success';

export const LOAD_POSTS = '[POST] Loading post';
export const LOAD_POSTS_SUCCESS = '[POST] Post loaded';

//

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Post; redirect: boolean }>()
);

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: Post; redirect: boolean }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);
export const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>()
);

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
