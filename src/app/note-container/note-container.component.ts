import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteContainerComponent implements OnInit {

  notesList: Array<{title: string, text: string}> = [];
  
  constructor() {
  }

  ngOnInit(): void {
  	let componentClass = this;

  	componentClass.notesList.push( {title:"Заметка 1", text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pretium nisi, quis consequat tortor. Sed laoreet fermentum augue non.`} );
  	componentClass.notesList.push( {title:"Заметка 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pretium nisi, quis consequat tortor. Sed laoreet fermentum augue non."} );
  	componentClass.notesList.push( {title:"Заметка 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pretium nisi, quis consequat tortor. Sed laoreet fermentum augue non."} );

  	let noteContainer = document.querySelector(".note-app__menu") as HTMLElement;

  	for (let i = 0; i < componentClass.notesList.length; i++) {
  	let note = document.createElement('div')
  	note.classList.add('note-app__note');
  	note.id = "n" + i;
  	let noteHeading = document.createElement('h2');
  	noteHeading.append(componentClass.notesList[i]['title']);
  	note.append(noteHeading);
  	note.addEventListener("click", activateNote);
  	note.addEventListener("click", showActiveNote);
  	noteContainer.append(note);
  	}

  	function showActiveNote() {
  		let notes = document.querySelectorAll(".note-app__note");
  		let noteId = "";

  		for (let i = 0; i < notes.length; i++) {
  			if ( notes[i].classList.contains("active") ) {
  				noteId = notes[i].id[1];
  				break;
  			}
  		}

  		let title = document.querySelector(".note-app_viewing-area-title") as HTMLElement;
  		title.innerHTML = componentClass.notesList[+noteId]['title'];
  		let text = document.querySelector(".note-app_viewing-area-text") as HTMLElement;
  		text.innerHTML = componentClass.notesList[+noteId]['text'];
  	}
  	function activateNote(this: HTMLElement) {
  		let notes = document.querySelectorAll(".note-app__note");
  		for (let i = 0; i < notes.length; i++) {
  			if ( notes[i].classList.contains("active") ) { 
  				notes[i].classList.remove("active");
  			}
  		}
  		this.classList.add('active');
  	}
  }
}
