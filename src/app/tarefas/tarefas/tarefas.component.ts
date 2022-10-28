import { Component, OnInit } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Tarefa } from '../model/tarefa';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { TarefasService } from '../services/tarefas.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  tarefas: Observable <Tarefa[]>;
  displayedColumns = ['name', 'category', 'actions'];

  // tarefasService: TarefasService;

  constructor(
    private tarefasService: TarefasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    // this.tarefas = [];
    // this.tarefasService = new TarefasService();
    this.tarefas = tarefasService.list()
    .pipe(
      delay(1000),
      catchError(error => {
        this.onError('Erro ao carregar tarefas');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }


  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['nova'], {relativeTo: this.route});
  }
}
