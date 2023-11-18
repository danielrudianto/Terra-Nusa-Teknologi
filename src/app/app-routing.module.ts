import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailPageComponent } from './page/blog-detail-page/blog-detail-page.component';
import { BlogPageTagComponent } from './page/blog-page-tag/blog-page-tag.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { CareerPageComponent } from './page/career-page/career-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { animationState: 1 },
  },
  {
    path: 'Blog',
    component: BlogPageComponent,
    data: { animationState: 2 },
  },
  {
    path: 'Blog/Tag/:tag',
    component: BlogPageTagComponent,
    data: { animationState: 3 },
  },
  {
    path: 'Blog/:id/:title',
    component: BlogDetailPageComponent,
    data: { animationState: 4 },
  },
  {
    path: 'Career',
    component: CareerPageComponent,
    data: { animationState: 5 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
