import { useState } from "react";
import Main from "./components/Main";
import CreateNote from "./components/CreateNote";
import NoteContainer from "./components/NoteContainer";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editNote, setEditNote] = useState(null);
  console.log(notes);
  return (
    <Main>
      <Navbar />
      <CreateNote
        title={title}
        onSetTitle={setTitle}
        description={description}
        onSetDescription={setDescription}
        notes={notes}
        onSetNotes={setNotes}
        toast={toast}
        editNote={editNote}
        onSetEditNote={setEditNote}
      />
      <NoteContainer
        title={title}
        onSetTitle={setTitle}
        description={description}
        onSetDescription={setDescription}
        notes={notes}
        onSetNotes={setNotes}
        editNote={editNote}
        onSetEditNote={setEditNote}
      />
      <ToastContainer />
    </Main>
  );
}

export default App;
