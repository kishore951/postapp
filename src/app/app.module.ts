import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostappComponent } from './postapp/postapp.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes:Routes=[
  {
    path:"",component:PostappComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
