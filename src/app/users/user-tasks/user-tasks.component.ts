import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();
  userName = '';
  message = input.required<string>();
  private userService = inject(UsersService);

  // alternative way 
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.userService.users.find(u => u.id === this.userId())?.name
  // )

  ngOnInit(): void {
    console.log('Input data: ' + this.message());
    
    console.log(this.activatedRoute.paramMap);
    console.log(this.activatedRoute.snapshot.paramMap);
    
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.userService.users.find(
          u => u.id === paramMap.get('userId')
        )?.name || '';
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
