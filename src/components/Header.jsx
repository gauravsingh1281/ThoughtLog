import { NavLink, useNavigate } from "react-router";
import logo from "../assets/images/logo.png";
import { MdMenu } from "react-icons/md";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="flex justify-between items-center bg-white4 py-4 px-4 md:px-10 lg:px-10 font-Inter">
        <img className="w-[240px]" src={logo} alt="logo" />
        <div className="hidden lg:flex justify-center items-center gap-10 text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About</NavLink>
          <NavLink to="contactus">Contact Us</NavLink>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6">
          <button
            onClick={() => navigate("/login")}
            className="py-1 px-3 bg-white border-2 border-black rounded-lg cursor-pointer "
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="py-1 px-3 bg-black border-2 border-black text-white rounded-lg  cursor-pointer"
          >
            Signup
          </button>
        </div>
        <MdMenu className="block lg:hidden text-4xl" />
      </nav>
    </header>
  );
}
