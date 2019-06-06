import React, {Component} from 'react';
import './App.css';

import Note from './Note/Note.jsx';
import NoteForm from './NoteForm/NoteForm.jsx';
class App extends Component {

constructor(){
  super();
      this.state = {
    notes: [
      {noteId: 1, noteContent: 'note 1'},
      {noteId: 2, noteContent: 'note 2'}
      ]
    };
      this.addNote = this.addNote.bind(this);
}
removeNote(){

  }

addNote(note){
    let { notes } = this.state;
      notes.push({
    noteId: notes.length + 1,
    noteContent: note
      
  });
      this.setState({
    notes: notes
  });

  }
render(){
  return (
    <div className="notesContainer">


        <div className = "notesHeader">
            <h1>React y firebase </h1>


        </div>

        <div className = "notesBody">

          <ul>
          {
          this.state.notes.map(note => {
            return (

                  <Note
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                  />
                )
            })
          }
          </ul>


        </div>
        <div className = "notesFooter">

          <NoteForm addNote={this.addNote}/>

        </div>
    </div>
  );
}
}

export default App;
