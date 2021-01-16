import { Post } from 'src/app/_models/post.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: null
};
