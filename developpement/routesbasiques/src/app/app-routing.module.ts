import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RueilComponent } from './rueil/rueil.component';
import { LyonComponent } from './lyon/lyon.component';
import { LilleComponent } from './lille/lille.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo : 'rueil',pathMatch: 'full' },
  { path: 'rueil', component: RueilComponent },
  { path: 'lyon', component:  LyonComponent },
  { path: 'lille', component: LilleComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
