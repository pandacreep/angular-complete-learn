import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input<string>(); // variant 1
  name = input.required(); // variant 2

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })

  onSelectedUser() {
    
  }
}
