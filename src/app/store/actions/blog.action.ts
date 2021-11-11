import { createAction, props } from '@ngrx/store';
import * as fromBlogInterface from '../../interfaces/blog.interface'

export const GET_POST_START = '[Post] get post Start';
export const GET_POST_SUCCESS = '[Post] get post Success';

export const GET_CATEGORIES_START = '[Post] get categories Start';
export const GET_CATEGORIES_SUCCESS = '[Post] get categories Success';

export const getPostsStart = createAction(
    GET_POST_START,
    props<{ postAfter?: string; postBefore?: string; perPage?: number }>()
  );
export const getPostsSuccess = createAction(
    GET_POST_SUCCESS,
    props<{ posts: any[]; cursor: any }>()
);

export const getCategoriesStart = createAction(
    GET_CATEGORIES_START,
    props<{ categoryAfter?: string; categoryBefore?: string; perPage?: number }>()
  );
  export const getCategoriesSuccess = createAction(
    GET_CATEGORIES_SUCCESS,
    props<{ categories: any[]; cursor: any }>()
  );
  
  