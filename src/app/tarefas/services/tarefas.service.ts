import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Tarefa } from '../model/tarefa';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API = '/assets/tarefas.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(tarefas => console.log(tarefas))
    )
  }
}
