import { MdOutlineDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

export default function NoteContainer({
  title,
  onSetTitle,
  description,
  onSetDescription,
  notes,
  onSetNotes,
}) {
  const handleDelete = (id) => {
    toast.success("Thought successfully deleted!");
    return onSetNotes(notes.filter((note) => note.uniqueId !== id));
  };
  return (
    <div className="p-4 flex justify-start gap-5 items-start flex-wrap">
      {notes.map((note) => (
        <div
          key={note.uniqueId}
          className="w-[280px] h-[200px] bg-amber-400 p-3 rounded-2xl flex flex-col justify-between"
        >
          {/* Scrollable text content */}
          <div className="overflow-y-auto mb-2 flex-1 scrollbar-none">
            <h1 className="break-words font-bold">{note.title}</h1>
            <p className="break-words">{note.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-1">
            <button className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200">
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
      ))}
    </div>
  );
}
