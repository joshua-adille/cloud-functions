import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../note';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TaskEditComponent,
    DeleteButtonComponent,
    CategorySelectorComponent,
  ],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  @Input() i: any;
  @Input() notes: any = [];
  @Input() note!: Note;
  @Input() category: any = [];
  @Output() updateData = new EventEmitter<{ value: string; id: string }>();
  @Output() deleteData = new EventEmitter<string>();
  @Output() categoryData = new EventEmitter<{ data: string; id: string }>();
  @Output() checkboxData = new EventEmitter<{ data: boolean; id: string }>();

  pushUpdateData(data: { value: string; id: string }) {
    this.updateData.emit(data);
  }

  pushDeleteData(value: string) {
    this.deleteData.emit(value);
  }

  pushCategoryData(data: { data: string; id: string }) {
    this.categoryData.emit(data);
  }
  pushCheckboxData(data: { data: boolean; id: string }) {
    this.checkboxData.emit(data);
  }
}
