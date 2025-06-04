import { createContext, useState } from "react";
export const NoteDataProvider = createContext(null);
export default function NoteContext({ children }) {
  console.log(children);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editNote, setEditNote] = useState(null);
  return (
    <NoteDataProvider.Provider
      value={{
        notes,
        setNotes,
        title,
        setTitle,
        description,
        setDescription,
        editNote,
        setEditNote,
      }}
    >
      {children}
    </NoteDataProvider.Provider>
  );
}
