import { LoadTasksAction, SelectTaskAction } from './../../state/task/task.actions';
import { Task } from 'src/app/task/models/task';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/state/app.state';
import { TasksQuery } from 'src/app/state/task/task.reducer';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task$: Observable<Task>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.task$ = this.store.pipe(select(TasksQuery.getSelectedTask));
  }
}
