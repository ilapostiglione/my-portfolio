import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { GraphicComponent } from './components/projects/graphic/graphic.component';
import { MotionComponent } from './components/projects/motion/motion.component';
import { WebComponent } from './components/projects/web/web.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'projects/graphic', component: GraphicComponent},
  {path: 'projects/motion', component: MotionComponent},
  {path: 'projects/web', component: WebComponent},
  {path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
