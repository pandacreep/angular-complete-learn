import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';

@NgModule({
	declarations: [
		TasksComponent,
		TaskComponent,
		NewTaskComponent,
	],
	exports: [TasksComponent],
	imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}