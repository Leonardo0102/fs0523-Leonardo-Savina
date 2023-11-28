import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { PostAttiviComponent } from './navbar/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './navbar/post-inattivi/post-inattivi.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'post-attivi',
    component:PostAttiviComponent
  },
  {
    path:'post-inattivi',
    component:PostInattiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
