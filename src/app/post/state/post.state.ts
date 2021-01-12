import { Post } from 'src/app/_models/post.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    {
      id: '1',
      title: 'hi there!',
      description: 'this is the first post in the initial state',
    },
  ],
};
