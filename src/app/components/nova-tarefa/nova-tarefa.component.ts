import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.scss']
})
export class NovaTarefaComponent implements OnInit {

  form: FormGroup;

  tarefaFormGroup = this.fb.group({
    descricaoSintetica: ['', Validators.required],
  });
  obraFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  delegadorFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  executorFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  coordenadorFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
  }

}
