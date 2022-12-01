import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "../models/user.model";

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent {
  @Input() users!: User[];
  @Output() color = new EventEmitter<string>();

  onUserClick(user: User): void {
    this.color.emit(user?.color);
  }
}
