import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { GraphicComponent } from './components/projects/graphic/graphic.component';
import { MotionComponent } from './components/projects/motion/motion.component';
import { WebComponent } from './components/projects/web/web.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    IntroComponent,
    GraphicComponent,
    MotionComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
