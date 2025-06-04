import { nanoid } from "nanoid";
import { IoMdAdd } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { useContext } from "react";
import { NoteDataProvider } from "../context/NoteContext";
import { toast } from "react-toastify";
export default function CreateNote() {
  const {
    notes,
    setNotes,
    title,
    setTitle,
    description,
    setDescription,
    editNote,
    setEditNote,
  } = useContext(NoteDataProvider);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      return toast.error("Please fill all the fields");
    }
    if (editNote) {
      const updatedNotes = notes.map((note) =>
        note.uniqueId === editNote.uniqueId
          ? { ...note, title, description, editStatus: true }
          : note
      );
      setNotes(updatedNotes);
      toast.success("Thought successfully updated!");
      setEditNote(null);
    } else {
      const uniqueId = nanoid();
      const editStatus = false;
      setNotes((prevNote) => [
        ...prevNote,
        { uniqueId, title, description, editStatus },
      ]);
      toast.success("Thought successfully created!");
    }

    setTitle("");
    setDescription("");
  };
  console.log(notes);
  const handleCancelEdit = () => {
    setEditNote(null);
    setTitle("");
    setDescription("");
  };
  const isEditing = editNote?.uniqueId === notes.uniqueId;
  function toMultiSentenceCase(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  }
  return (
    <form
      className="w-full h-full flex justify-center items-center flex-col gap-2 my-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        className="w-[330px] p-2 text-lg rounded-md border-1 outline-0"
        value={title}
        onChange={(e) => {
          const value = e.target.value;
          setTitle(toMultiSentenceCase(value));
        }}
      />
      <textarea
        className=" w-[330px] min-h-[120px] rounded-md  p-2 text-lg border-1 outline-0"
        placeholder="Write your thought here!"
        value={description}
        onChange={(e) => {
          const value = e.target.value;
          setDescription(toMultiSentenceCase(value));
        }}
      ></textarea>
      <div className="flex justify-center items-center gap-3 mt-2">
        <button
          data-tooltip-id="add-thought"
          data-tooltip-content={`${
            isEditing ? "Add Thought" : "Update Thought"
          }`}
          data-tooltip-place="top"
          type="submit"
          className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
        >
          {isEditing ? (
            <IoMdAdd className="text-white font-bold text-2xl" />
          ) : (
            <FaCheck className="text-white font-bold text-2xl" />
          )}
        </button>
        <Tooltip id="add-thought" style={{ padding: "6px 8px" }} />
        {editNote && (
          <button
            data-tooltip-id="cancel-update"
            data-tooltip-content="Cancel Update"
            data-tooltip-place="top"
            onClick={handleCancelEdit}
            type="button"
            className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center cursor-pointer active:scale-[92%] transition-all ease-in duration-200"
          >
            <LiaTimesSolid className="text-white font-bold text-2xl" />
          </button>
        )}
        <Tooltip id="cancel-update" style={{ padding: "6px 8px" }} />
      </div>
    </form>
  );
}
