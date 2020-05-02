import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { PostsComponent } from './posts/posts.component';
import { PostsFeaturedComponent } from './posts/posts-featured/posts-featured.component';
import { PostsDetailComponent } from './posts/posts-detail/posts-detail.component';
import { PostsByCategoryComponent } from './posts/posts-by-category/posts-by-category.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from "@angular/router";
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';
import {FormsModule} from "@angular/forms";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


const appRoutes: Routes = [
  { path: '', component:PostsFeaturedComponent, pathMatch: 'full' },
  { path: 'new', component: PostsCreateComponent },
  { path: 'loading', component: LoadingSpinnerComponent },
  { path: ':id', component: PostsDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostsFeaturedComponent,
    PostsDetailComponent,
    PostsByCategoryComponent,
    PostsCreateComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
