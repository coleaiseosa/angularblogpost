import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/blog.state';
import {
    getPostsSuccess,
    getCategoriesSuccess
}
from '../actions/blog.action'

const _blogReducer = createReducer(
    initialState,
    on(getPostsSuccess, (state, action) => {
      console.log(action)
        return {
          ...state,
          posts: action.posts,
          cursor: action.cursor,
        };
    }),

    on(getCategoriesSuccess, (state, action) => {
        return {
          ...state,
          posts: action.categories,
          cursor: action.cursor,
        };
      }),
)

export function BlogReducer(state : any, action: any) {
    return _blogReducer(state, action);
  }
  