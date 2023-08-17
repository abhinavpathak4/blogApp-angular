import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component : SingleCategoryComponent},
  {path : 'post/:blog' , component : SinglePostComponent},
  {path: 'post-card', component: PostCardComponent},
  {path : 'about', component:AboutUsComponent},
  {path : 'contact', component: ContactUsComponent},
  {path: 'term-conditions', component: TermsAndConditionsComponent},
  {path:'add-post', component : AddBlogComponent},
  {path : 'single-post', component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
