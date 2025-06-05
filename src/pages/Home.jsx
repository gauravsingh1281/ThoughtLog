import { useNavigate } from "react-router";
import hero from "../assets/images/hero.png";
export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-4 px-4 md:px-10 lg:px-10 flex justify-between items-center gap-4 md:gap-0 lg:gap-0 flex-col-reverse md:flex-row lg:flex-row">
      <div className=" w-full md:w-1/2 lg:w-1/2   flex justify-center items-center md:items-start lg:items-start flex-col gap-10">
        <h1 className="text-center md:text-left lg:text-left text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-Cormorant md:leading-[40px] lg:leading-[55px]">
          Don’t let your thoughts die <br /> bring them to life by writing on
          ThoughtLog.
        </h1>
        <button
          className="py-2 px-3 md:py-2.5 md:px-4 text-lg bg-black text-white rounded-md cursor-pointer active:scale-[94%] transition-all duration-200 ease-in font-OpenSans"
          onClick={() => navigate("/signup")}
        >
          Try ThoughtLog. It's free.
        </button>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2   flex justify-center items-center">
        <img className="w-[80%] " src={hero} alt="hero-img" />
      </div>
    </section>
  );
}
