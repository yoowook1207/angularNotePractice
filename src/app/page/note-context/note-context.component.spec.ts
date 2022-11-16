import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteContextComponent } from './note-context.component';

describe('NoteContextComponent', () => {
  let component: NoteContextComponent;
  let fixture: ComponentFixture<NoteContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
