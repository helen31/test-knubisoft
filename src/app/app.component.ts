import { Component } from '@angular/core';
import { User } from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 users: User[] = [
   { name: 'John Smith', 'color': 'red' },
   { name: 'Red Dawn', 'color': 'blue' },
   { name: 'Lee Cho', 'color': 'gray' }
 ];
 color = this.users[0].color;

  colorEmitted(color: string): void {
    this.color = color;
  }
}
