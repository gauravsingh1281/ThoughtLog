import { useContext } from "react";
import { toast } from "react-toastify";
import Notes from "./Notes";
import { NoteDataProvider } from "../context/NoteContext";

export default function NoteContainer() {
  const { setTitle, setDescription, notes, setNotes, editNote, setEditNote } =
    useContext(NoteDataProvider);

  // handle delete
  const handleDelete = (id) => {
    toast.success("Thought successfully deleted!");
    setNotes(notes.filter((note) => note.uniqueId !== id));
    if (editNote?.uniqueId === id) {
      setEditNote(null);
      setTitle("");
      setDescription("");
    }
  };

  // handle edit
  const handleEdit = (note) => {
    setEditNote(note);
    setTitle(note.title);
    setDescription(note.description);
  };

  return (
    <div className="p-4 flex justify-start gap-5 items-start flex-wrap">
      {notes.map((note) => {
        const isEditing = editNote?.uniqueId === note.uniqueId;
        return (
          <Notes
            note={note}
            isEditing={isEditing}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}
