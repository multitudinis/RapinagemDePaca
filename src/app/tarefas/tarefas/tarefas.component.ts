import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../model/tarefa';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  tarefas: Observable <Tarefa[]>;
  displayedColumns = ['name', 'category'];

  // tarefasService: TarefasService;

  constructor(private tarefasService: TarefasService) {
    // this.tarefas = [];
    // this.tarefasService = new TarefasService();
    this.tarefas = tarefasService.list();
  }

  ngOnInit(): void {
  }

}
