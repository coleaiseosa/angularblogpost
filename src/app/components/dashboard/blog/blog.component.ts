import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  getPosts,
  getCategories
} from '../../../store/selector/blog.selector'

import {
  getPostsStart,
  getCategoriesStart
} from '../../../store/actions/blog.action'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  someArray:any[] = [1,2,3,4,5,66]

  posts$: Observable<any> | undefined;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(getPostsStart({ postAfter: '', postBefore: '' }));
   this.store$.select(getPosts).subscribe((data) => console.log(data));

  }

}
