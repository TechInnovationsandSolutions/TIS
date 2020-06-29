import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { OurServicesComponent } from './our-services/our-services.component';

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
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
