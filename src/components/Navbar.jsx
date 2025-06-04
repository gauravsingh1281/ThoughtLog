import { IoSearchSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-red-500 p-4 ">
      <h1 className="text-xl font-medium text-white">ThoughtLog</h1>
      <div>
        <input
          type="search"
          placeholder="Search "
          className="bg-white py-2 px-4 outline-0 w-[300px] rounded-2xl "
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg">
          <IoSearchSharp />
        </div>
        <div className="w-[28px] h-[28px] flex justify-center items-center bg-white rounded-lg">
          <IoMdInformationCircleOutline />
        </div>
      </div>
    </nav>
  );
}
