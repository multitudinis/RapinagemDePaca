import { HomeComponent } from './components/home/home.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'tarefas',component:TarefasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
