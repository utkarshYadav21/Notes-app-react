import { useState } from "react";
import { nanoid } from "nanoid";
import "./components/App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "hello there",
      date: "13/4/23",
    },
    {
      id: nanoid(),
      title: "hello there 2",
      date: "1/4/21",
    },
    { id: nanoid(), title: "hello there 3", date: "12/6/20" },
  ]);
  const handleAddNote = (textTitle) => {
    if (textTitle === "") {
      return;
    } else if (textTitle === " ") {
      return;
    }
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: textTitle,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <>
      <div className="container">
        <Header />
        <NoteList
          notes={notes}
          setNotes={setNotes}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </>
  );
}

export default App;
