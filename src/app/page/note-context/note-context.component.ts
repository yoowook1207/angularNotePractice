import { ChangeDetectionStrategy, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-context',
  templateUrl: './note-context.component.html',
  styleUrls: ['./note-context.component.scss'],
})
export class NoteContextComponent implements OnInit{
  noteForm!: FormGroup;
  noteFromCall$ = {};
  isChanged=false;

  constructor(public noteService: NoteService, private fb:FormBuilder) { }

  get title(): FormControl {
    return this.noteForm.get('title') as FormControl;
  }
  get content(): FormControl {
    return this.noteForm.get('content') as FormControl;
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: '',
      content: ''
    })
    this.noteService.selectedNote$.subscribe(e=> this.noteForm.setValue(e));
  }

  // if(this.title.value == '') {
  //   this.isChanged=true
  // }

  addNote() {
    if (this.title.value == '' || this.content.value =='') {
      alert("please fill up both title and content fields")
      return
    }
    this.noteService.saveNote(this.noteForm.value)
    alert('note is saved!')
    this.noteForm.setValue({title:'', content:''})
    // this.isChanged=true
  }

  undo(){
    if(this.noteForm.value.title != '') {
      this.noteService.getSingleNote(this.noteForm.value.title)
    }
  }
}
