import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)    
    // this.selectedUser = DUMMY_USERS[randomIndex]
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
