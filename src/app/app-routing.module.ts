import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './components/general/players/players.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/players' },
  { path: 'players', component: PlayersComponent},
  { path: '**', redirectTo: '/players' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
