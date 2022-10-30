import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar: MatSnackBar,
    private location: Location
    ) {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
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
    .subscribe(result => this.onSuccess(), error => {
      this.onError()
    });
  }

  onCancel(){
    this.location.back();    
  }

  onSuccess(){
    this.snackBar.open("Tarefa salva com sucesso!", '', {duration: 1000})
    this.onCancel();
  }

  onError(){
    this.snackBar.open("Erro ao salvar tarefa.", '', {duration: 1000})
  }

}
