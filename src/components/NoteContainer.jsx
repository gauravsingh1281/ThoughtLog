import { MdOutlineDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

export default function NoteContainer({
  onSetTitle,
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
            className={`w-[280px] h-[200px] p-3 rounded-lg flex flex-col justify-between transition-all duration-200 shadow-lg ${
              isEditing ? "bg-white border-2 border-red-500" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center ">
              <h2 className="break-words font-medium capitalize">
                {note.title}
              </h2>
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

            <div className="flex justify-center items-center gap-1">
              <button
                onClick={() => handleEdit(note)}
                className="w-[28px] h-[28px] flex justify-center items-center bg-yellow-200 rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
              >
                <MdEdit />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(note.uniqueId)}
                className="w-[28px] h-[28px] flex justify-center items-center bg-red-200 rounded-lg cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
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
