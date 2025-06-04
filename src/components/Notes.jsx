import { Tooltip } from "react-tooltip";
import { MdOutlineDelete, MdEdit } from "react-icons/md";
import useLiveTimeStamp from "../hooks/useLiveTimeStamp";

export default function Notes({ note, isEditing, handleEdit, handleDelete }) {
  const currentTime = useLiveTimeStamp(note.lastUpdateTimeStamp);
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
        {note.editStatus ? "Last updated" : "Created"}: {currentTime}
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
}
