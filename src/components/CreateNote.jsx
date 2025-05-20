import { nanoid } from "nanoid";
import { IoMdAdd } from "react-icons/io";
export default function CreateNote({
  title,
  onSetTitle,
  description,
  onSetDescription,
  onSetNotes,
  toast,
}) {
  const handleSubmit = (e) => {
    const uniqueId = nanoid();
    e.preventDefault();
    if (!title || !description) {
      return toast.error("Please fill all the fields");
    }
    onSetNotes((prevNote) => [...prevNote, { uniqueId, title, description }]);
    toast.success("Thought successfully created!");
    onSetTitle("");
    onSetDescription("");
  };

  return (
    <form
      className="w-full h-full flex justify-center items-center flex-col gap-2 mt-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        className="w-[330px] p-2 text-lg rounded-md border-1"
        value={title}
        onChange={(e) => onSetTitle(e.target.value)}
      />
      <textarea
        className=" w-[330px] min-h-[120px] rounded-md  p-2 text-lg border-1 "
        placeholder="Write your thought here!"
        value={description}
        onChange={(e) => onSetDescription(e.target.value)}
      ></textarea>
      <button className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center cursor-pointer active:scale-[92%] transition-all ease-in duration-200">
        <IoMdAdd className="text-white" />
      </button>
    </form>
  );
}
