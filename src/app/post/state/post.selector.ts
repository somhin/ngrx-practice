import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/router/custom-serializer';
import { getCurrentRoute } from 'src/app/router/router.selector';
import { PostsState } from './post.state';

export const POST_STATE_NAME = 'posts';
const getPostState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostByID = createSelector(
  getPosts,
  getCurrentRoute,
  (posts, route: RouterStateUrl) => {
    return posts ? posts.find((post) => post.id === route.params['id']) : null;
  }
);

// export const getPostByID = createSelector(getPostState, (state, props) => {
//   return state.posts.find((post: Post) => post.id === props.id);
// });
