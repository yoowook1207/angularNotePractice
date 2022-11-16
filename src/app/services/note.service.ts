import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Note } from './interfaces/note.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [];

  private singleNote: any = {}
  private singleNote$ = new Subject<Note>()
  selectedNote$ = this.singleNote$.asObservable();

  constructor() { }

  saveNote (noteToAdd: Note) {
    if (this.notes.find(e => e.title == noteToAdd.title)) {
      this.notes.find(e => e.title == noteToAdd.title)!.content = noteToAdd.content;
    }
    else {
      this.notes.push(noteToAdd);
    }
    localStorage.setItem("notePractice", JSON.stringify(this.notes))
  }
  
  getAllNote () {
    let storedArray =localStorage.getItem("notePractice")
    if (typeof storedArray === 'string') {
      this.notes = JSON.parse(storedArray)
      console.log(this.notes)
    }
  }

  getSingleNote (noteTitle:string) {
    const found = this.notes.find(e => e.title == noteTitle)
    this.singleNote = found;
    this.singleNote$.next(this.singleNote);
  }

  deleteNote (noteToAdd: Note) {
    if(confirm("Delete?")) {
      let idx = this.notes.indexOf(noteToAdd)
      this.notes.splice(idx, 1);
      localStorage.setItem("notePractice", JSON.stringify(this.notes))
    }
  }
}
