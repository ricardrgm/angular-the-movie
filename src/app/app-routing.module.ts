import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyhomeComponent } from './myhome/myhome.component';
import { MymovieComponent } from './mymovie/mymovie.component';

const routes: Routes = [
  {path:'home', component:MyhomeComponent},
  {path:'movie/:id', component:MymovieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
