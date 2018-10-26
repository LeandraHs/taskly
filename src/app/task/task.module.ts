import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskCalendarComponent } from './task-calendar/task-calendar.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskFormTemplateComponent } from './task-form-template/task-form-template.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TASK_ROUTES } from './task.routes';
import { TaskService } from './task.service';
import { TaskComponent } from './task.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TASK_ROUTES)
  ],
  declarations: [
    TaskCalendarComponent,
    TaskDashboardComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    TaskCreateComponent,
    TaskFormTemplateComponent,
    TaskComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule {
}
