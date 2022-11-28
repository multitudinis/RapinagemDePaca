import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Tarefa } from '../model/tarefa';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  // Quando estiver usando um banco real usar esta rota para o proxy.conf.js 
  // private readonly API = 'api/tarefas
  private readonly API = '/assets/tarefas.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(),
      delay(333),
      tap(tarefas => console.log(tarefas))
    )
  }

  save(record: Tarefa){
    return this.httpClient.post<Tarefa>(this.API, record);
  }
}
