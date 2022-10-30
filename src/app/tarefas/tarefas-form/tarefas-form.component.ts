import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.scss']
})
export class TarefasFormComponent implements OnInit {

form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TarefasService,
    private snackBar: MatSnackBar
    ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
      descricaoSintetica: [null],
      descricaoAnalitica: [null],
      descricaoTermino: [null],
      caminhoDocumento: [null],
      coordenador: [null],
      executor: [null],
      delegador: [null],
      recorrencia: [null],
      prioridade: [null],
      etapa: [null],
      visibilidade: [null],
      agenteFinal: [null],
      duracao: [null],
      dataInicio: [null],
      envolverCliente: [null],
      interdependencias: [null]
    })
   }

  ngOnInit(): void {

  }
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => {
      this.onError()
    });
  }

  onCancel(){
    
  }

  onError(){
    this.snackBar.open("Erro ao salvar tarefa", '', {duration: 1000})
  }

}
