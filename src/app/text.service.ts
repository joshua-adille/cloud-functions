import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private apiUrl =
    'http://127.0.0.1:5001/test-projects-aabaa/us-central1/textToLength'; // Replace with your actual URL

  constructor(private http: HttpClient) {}

  getTextLength(text: string): Observable<any> {
    return this.http.post(this.apiUrl, { text });
  }
}
