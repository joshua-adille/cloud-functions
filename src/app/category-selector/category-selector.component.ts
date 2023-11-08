import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../note';

@Component({
  selector: 'app-category-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss'],
})
export class CategorySelectorComponent {
  @Input() note!: Note;
  @Input() category: any = [];
  @Output() categoryData = new EventEmitter<{ data: string; id: string }>();

  pushCategoryData(data: string, id: string) {
    this.categoryData.emit({ data, id });
  }
}
