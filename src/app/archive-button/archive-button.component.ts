import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';
import { CommonModule } from '@angular/common';
import { TextService } from '../text.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-archive-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive-button.component.html',
  styleUrls: ['./archive-button.component.scss'],
})
export class ArchiveButtonComponent {
  @Input() note!: string;
  // inputText: string = this.note;
  result$: any = '';

  constructor(private textService: TextService) {}

  getTextLength() {
    // this.result$ = this.textService.getTextLength(this.note);
    // console.log('results: ', this.result$);
    this.textService.getTextLength(this.note).subscribe((res) => {
      this.result$ = res;
      // console.log(res);
    });
  }
}
