import React, { Component } from 'react';
import './Note.css';



  class Note extends Component {
    constructor(props){
      super(props);


      this.noteContent = props.noteContent;
      this.noteId = props.noteId;
    }

handleRemove(id){
  console.log('remove: ', id);

  this.props.removeNote(id);

  }
  render(){

    return (
      <div className="Note">

        <span
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={() =>  this.handleRemove(this.noteId) }
        >&times; </span>
        <p>{this.noteContent}</p>
      </div>
    );
  }
}

export default Note;
