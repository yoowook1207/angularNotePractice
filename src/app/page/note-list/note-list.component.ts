import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/services/interfaces/note.interfaces';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  noteList: Note[] = []

  ngOnInit(): void {
    this.noteService.getAllNote()
    this.noteList=this.noteService.notes
  }

  noteClick(noteTitle:string) {
    this.noteService.getSingleNote(noteTitle)
  }

  noteDelete(note:Note) {
    this.noteService.deleteNote(note)
  }

}
