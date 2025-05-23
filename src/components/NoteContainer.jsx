import { MdOutlineDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

export default function NoteContainer({
  title,
  onSetTitle,
  description,
  onSetDescription,
  notes,
  onSetNotes,
  editNote,
  onSetEditNote,
}) {
  const handleDelete = (id) => {
    toast.success("Thought successfully deleted!");
    onSetNotes(notes.filter((note) => note.uniqueId !== id));
    if (editNote?.uniqueId === id) {
      onSetEditNote(null);
      onSetTitle("");
      onSetDescription("");
    }
  };

  const handleEdit = (note) => {
    onSetEditNote(note);
    onSetTitle(note.title);
    onSetDescription(note.description);
  };

  return (
    <div className="p-4 flex justify-start gap-5 items-start flex-wrap">
      {notes.map((note) => {
        const isEditing = editNote?.uniqueId === note.uniqueId;
        return (
          <div
            key={note.uniqueId}
            className={`w-[280px] h-[200px] p-3 rounded-2xl flex flex-col justify-between transition-all duration-200 ${
              isEditing
                ? "bg-yellow-300 border-4 border-red-500"
                : "bg-amber-400"
            }`}
          >
            <div className="flex justify-between items-center ">
              <div>
                <p>{note.editStatus ? "Edited" : ""}</p>
              </div>
            </div>

            <div className="overflow-y-auto mb-2 flex-1 scrollbar-none">
              <h1 className="break-words font-bold">{note.title}</h1>
              <p className="break-words">{note.description}</p>
            </div>

            <div className="flex justify-center items-center gap-1">
              <button
                onClick={() => handleEdit(note)}
                className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
              >
                <MdEdit />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(note.uniqueId)}
                className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
              >
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
