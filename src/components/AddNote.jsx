import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";

function AddNote({ handleAddNote }) {
  const [textNote, setTextNote] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit >= e.target.value.length) {
      setTextNote(e.target.value);
    }
  };
  const handleClick = () => {
    handleAddNote(textNote);
    setTextNote("");
  };
  return (
    <div className="add-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        className="input-note"
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{characterLimit - textNote.length} Remaining</small>
        <button className="save-btn" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}
export default AddNote;
