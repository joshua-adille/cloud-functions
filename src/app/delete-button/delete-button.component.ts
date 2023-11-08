import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../note';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {
  @Input() note!: Note;
  @Output() deleteData = new EventEmitter<string>();

  pushDeleteData(value: string) {
    this.deleteData.emit(value);
  }
}
