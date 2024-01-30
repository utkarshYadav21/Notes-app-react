import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({ id, title, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span> {title}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3rem"
          onClick={() => {
            handleDeleteNote(id);
          }}
        />
      </div>
    </div>
  );
}
export default Note;
