import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { switchMap, map } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { SharedService } from './shared.service';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NotesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  newNote: string = '';
  constructor(private service: SharedService, private cdr: ChangeDetectorRef) {}
  notes: any = [];
  category: any = [];

  getData() {
    const notes$ = this.service.getNotes();
    const categories$ = this.service.getCategory();
    notes$
      .pipe(
        switchMap((notes) => {
          return categories$.pipe(
            map((categories) => {
              return { notes: notes, categories: categories };
            })
          );
        })
      )
      .subscribe((res) => {
        this.notes = res.notes;
        this.category = res.categories;
        this.cdr.markForCheck();
      });
  }
  ngOnInit() {
    this.getData();
  }
  addNotes() {
    this.service
      .addNote(this.newNote)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }

  deleteNotes(id: string) {
    this.service
      .deleteNote(id)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }

  updateNotes(editNotes: string, id: string) {
    // debugger;
    this.service
      .updateNote(editNotes, id)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }

  updateCategories(choice: string, id: string) {
    // debugger;
    // console.log('Clicked!', choice, id);
    this.service
      .updateCategory(choice, id)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }

  markDone(status: boolean, id: string) {
    this.service
      .markDone(status, id)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }
}
