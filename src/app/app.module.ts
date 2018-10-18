import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

// custom imports
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResumeComponent } from './resume/resume.component';
import { D3LinechartComponent } from './d3-linechart/d3-linechart.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GalleryComponent,
    ResumeComponent,
    D3LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
