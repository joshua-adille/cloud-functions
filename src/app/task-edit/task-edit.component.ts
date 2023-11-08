import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../note';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent {
  @Input() note!: Note;
  @Output() buttonData = new EventEmitter<{ value: string; id: string }>();

  pushData(value: string, id: string) {
    this.buttonData.emit({ value, id });
  }
}
