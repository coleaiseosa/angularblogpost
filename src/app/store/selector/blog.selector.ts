import { createFeatureSelector, createSelector } from '@ngrx/store';

export const BLOG_STATE_NAME = 'blog';
const getPostsState = createFeatureSelector<any>('blog');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});

export const getCategories = createSelector(getPostsState, (state) => {
    return state.categories;
  });