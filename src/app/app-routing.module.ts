import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent} from './gallery/gallery.component'
import { ResumeComponent} from './resume/resume.component'
import { D3LinechartComponent} from './d3-linechart/d3-linechart.component'


const routes: Routes = [
  {
    path:'',
    component: GalleryComponent
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
  {
    path:'resume',
    component: ResumeComponent
  },
  {
    path:'d3-linechart',
    component: D3LinechartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
