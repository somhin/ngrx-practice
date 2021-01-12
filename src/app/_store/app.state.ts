import { counterReducer } from '../counter/_state/counter.reducer';
import { CounterState } from '../counter/_state/counter.state';
import { postsReducer } from '../post/state/post.reducers';
import { PostsState } from '../post/state/post.state';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
