import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';

const routes: Routes = [
  {path: '', component: TarefasComponent},
  {path: 'nova', component: TarefasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
