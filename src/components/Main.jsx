import { IoSearchSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline, IoMdAdd } from "react-icons/io";
import { MdOutlineDelete, MdEdit } from "react-icons/md";

export default function Main() {
  return (
    <div className="w-full h-full ">
      <nav className="flex justify-between items-center bg-red-500 p-4 ">
        <h1 className="text-xl font-medium text-white">ThoughtLog</h1>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg">
            <IoSearchSharp />
          </div>
          <div className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg">
            <IoMdInformationCircleOutline />
          </div>
        </div>
      </nav>
      <CreateNote />
      <NoteContainer />
    </div>
  );
}

function CreateNote() {
  return (
    <form className="w-full h-full flex justify-center items-center flex-col gap-2 mt-2">
      <input
        type="text"
        placeholder="Title"
        className="w-[330px] p-2 text-lg rounded-md border-1  "
      />
      <textarea
        className=" w-[330px] min-h-[120px] rounded-md  p-2 text-lg border-1"
        placeholder="Write your thought here!"
      ></textarea>
      <button className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center z-10 cursor-pointer active:scale-[92%] transition-all ease-in duration-200">
        <IoMdAdd className="text-white" />
      </button>
    </form>
  );
}

function NoteContainer() {
  return (
    <div className="w-full  p-4">
      <div className="w-[300px] bg-amber-400 p-3 rounded-2xl">
        <h1>Note Title</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eveniet similique, quia alias praesentium excepturi possimus
          reprehenderit, tenetur dolore necessitatibus nobis assumenda
          consequatur natus minima quibusdam nostrum quod doloribus nemo?
        </p>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg">
            <MdEdit />
          </div>
          <div className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg">
            <MdOutlineDelete />
          </div>
        </div>
      </div>
    </div>
  );
}
