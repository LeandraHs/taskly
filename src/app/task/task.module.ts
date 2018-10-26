import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCalendarComponent } from './task-calendar/task-calendar.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskFormTemplateComponent } from './task-form-template/task-form-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskCalendarComponent, TaskDashboardComponent, TaskListComponent, TaskDetailsComponent, TaskEditComponent, TaskCreateComponent, TaskFormTemplateComponent]
})
export class TaskModule { }
