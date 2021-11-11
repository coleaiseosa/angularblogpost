import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';


import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as $ from 'jquery';

import {
    getPostsStart,
    getPostsSuccess,
    getCategoriesStart,
    getCategoriesSuccess
} from '../actions/blog.action'

import { BlogService } from 'src/app/services/blog/blog.service';

@Injectable()
export class BlogEffects {
  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    private store$: Store
  ) {}

getPosts$ = createEffect(() =>
    this.actions$.pipe(
    ofType(getPostsStart),
    exhaustMap((action) => {
        console.log(action)
        return this.blogService.getPosts(action.postBefore, action.postAfter, action.perPage)
        .pipe(
            map((res: any) => {
                console.log(res)
                return getPostsSuccess({
                    posts: res.data.posts,
                    cursor: res.data.cursors,
                  });
            }),
            catchError((error) => {
                return throwError(error);
            })
        )
    })
    )
)


getCategories$ = createEffect(() =>
    this.actions$.pipe(
    ofType(getCategoriesStart),
    exhaustMap((action) => {
        return this.blogService.getPosts(action.categoryBefore, action.categoryAfter, action.perPage)
        .pipe(
            map((res: any) => {
                return getCategoriesSuccess({
                    categories: res.data.categories,
                    cursor: res.data.cursors,
                  });
            }),
            catchError((error) => {
                return throwError(error);
            })
        )
    })
    )
)



}