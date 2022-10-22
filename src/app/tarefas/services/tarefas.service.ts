import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API = '/assets/tarefas.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Tarefa[]>(this.API);
  }
}
