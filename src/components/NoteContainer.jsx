import { useContext } from "react";
import { MdOutlineDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { NoteDataProvider } from "../context/NoteContext";

export default function NoteContainer() {
  const { setTitle, setDescription, notes, setNotes, editNote, setEditNote } =
    useContext(NoteDataProvider);
  const handleDelete = (id) => {
    toast.success("Thought successfully deleted!");
    setNotes(notes.filter((note) => note.uniqueId !== id));
    if (editNote?.uniqueId === id) {
      setEditNote(null);
      setTitle("");
      setDescription("");
    }
  };

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
          <div
            key={note.uniqueId}
            className={`w-[280px] h-[220px] p-3 rounded-lg flex flex-col justify-between transition-all duration-200 shadow-lg ${
              isEditing ? "bg-white border-2 border-red-500" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center ">
              <h2 className="break-words font-medium">{note.title}</h2>
              <p>
                {note.editStatus && (
                  <p className="text-[12px] px-[6px] py-[2px] rounded-lg bg-lime-400 text-black">
                    Edited
                  </p>
                )}
              </p>
            </div>
            <p className="text-[12px] mt-2 text-gray-600 ">
              Last update:12 Dec,2018
            </p>
            {/* Line */}
            <div className="h-[1px] w-full bg-gray-300 my-2"></div>
            {/* Description */}
            <div className="overflow-y-auto mb-2 flex-1 scrollbar-none">
              <p className="break-words font-normal">{note.description}</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button
                data-tooltip-id="edit-note"
                data-tooltip-content="Edit"
                data-tooltip-place="top"
                onClick={() => handleEdit(note)}
                className="w-[30px] h-[30px] flex justify-center items-center bg-yellow-200 rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
              >
                <MdEdit />
              </button>
              <Tooltip id="edit-note" style={{ padding: "6px 8px" }} />
              <button
                data-tooltip-id="delete-note"
                data-tooltip-content="Delete"
                data-tooltip-place="top"
                type="button"
                onClick={() => handleDelete(note.uniqueId)}
                className="w-[30px] h-[30px] flex justify-center items-center bg-red-200 rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
              >
                <MdOutlineDelete />
              </button>
              <Tooltip id="delete-note" style={{ padding: "6px 8px" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
