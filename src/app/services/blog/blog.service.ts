import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category, Post } from '../../interfaces/blog.interface'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor (private http: HttpClient) { }

  private BASE_URL = environment.BASE_URL;

  getPosts(next = '', prev = '', per_page = 10) {
    let query = `next=${next}&prev=${prev}`;
    return this.http.get(
      `${this.BASE_URL}/blogs?per_page=${per_page}&${query}`
    );
  }

  getCategories(next = '', prev = '', per_page = 10) {
    let query = `next=${next}&prev=${prev}`;
    return this.http.get(
      `${this.BASE_URL}/blog-categories?per_page=${per_page}&${query}`
    );
  }

}
