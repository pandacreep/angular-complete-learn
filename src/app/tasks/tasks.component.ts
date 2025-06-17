import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userId = input.required<string>();
  // order = input<'asc' | 'desc' | undefined>();
  order?: 'asc' | 'desc';
  private taskService = inject(TasksService);
  userTasks = computed(() =>
    this.taskService.allTasks().filter((task) => task.userId === this.userId())
  );
  private activateRoute = inject(ActivatedRoute);
  private destrayRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activateRoute.queryParams.subscribe({
      next: params => this.order = params['order']
    })

    this.destrayRef.onDestroy(() => subscription.unsubscribe());
  }

}
