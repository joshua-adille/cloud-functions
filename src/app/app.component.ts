import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, switchMap, map } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: SharedService) {}
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
      });
  }
  ngOnInit() {
    this.getData();
  }
  addNotes(newNotes: string) {
    this.service
      .addNote(newNotes)
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }
}
