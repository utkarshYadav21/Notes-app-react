import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NoteList({ notes,setNotes,handleAddNote,handleDeleteNote }) {
  return (
    <div className="note-list">
      {notes.map((el, index) => {
        return <Note key={index} id={el.id} title={el.title} date={el.date} handleDeleteNote={handleDeleteNote} />;
      })}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
}

export default NoteList;
