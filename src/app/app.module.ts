import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSidebarComponent } from './partials/profile-sidebar/profile-sidebar.component';
import { BlogSidebarComponent } from './partials/blog-sidebar/blog-sidebar.component';
import { BlogComponent } from './components/dashboard/blog/blog.component';
import { BlogDashboardComponent } from './layout/blog-dashboard/blog-dashboard.component';
import { BlogReducer } from './store/reducers/blog.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSidebarComponent,
    BlogSidebarComponent,
    BlogComponent,
    BlogDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ blog: BlogReducer }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
