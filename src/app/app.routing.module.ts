import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: WorkComponent
  },
  {
    path: 'services',
    component: OurServicesComponent
  }
  ,
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
