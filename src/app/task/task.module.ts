import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskExistsGuard } from './task-exists.guard';
import { TaskFormTemplateComponent } from './task-form-template/task-form-template.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task.component';
import { TASK_ROUTES } from './task.routes';
import { TaskService } from './task.service';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { EventService } from './event.service';
import { EventsExistsGuard } from './events-exists-guard.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule,
    RouterModule.forChild(TASK_ROUTES),
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    TaskDashboardComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    TaskCreateComponent,
    TaskFormTemplateComponent,
    TaskComponent
  ],
  providers: [
    TaskService,
    TaskExistsGuard,
    EventService,
    EventsExistsGuard,
  ]
})
export class TaskModule {
}
