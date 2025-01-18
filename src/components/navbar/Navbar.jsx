import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
  // invoke useNavigate
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-start place-items-center w-full h-16 xl:h-20 z-50 px-5 lg:px-10 xl:px-16 2xl:px-20 text-lightest bg-dark drop-shadow-lg">
      <div className="flex-1 flex justify-start place-items-end gap-x-1.5 sm:gap-x-3">
        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-light drop-shadow-lg">
          Joshua Gray
        </h1>
        <a href="https://github.com/Joshawott64" target="_blank">
          <IoLogoGithub className="md:text-lg 2xl:text-xl drop-shadow-lg hover:text-light transition-colors duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-gray-74b67930b"
          target="_blank"
        >
          <IoLogoLinkedin className="md:text-lg 2xl:text-xl drop-shadow-lg hover:text-light transition-colors duration-200" />
        </a>
      </div>
      <div className="flex-1 flex justify-end gap-x-2 sm:gap-x-4 lg:gap-x-8 text-sm md:text-base 2xl:text-lg font-extralight">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer drop-shadow-lg underline-offset-[6px] hover:underline"
        >
          Home
        </p>
        <p
          onClick={() => navigate("/projects")}
          className="cursor-pointer drop-shadow-lg underline-offset-[6px] hover:underline"
        >
          Projects
        </p>
        <p
          onClick={() => navigate("/prints")}
          className="cursor-pointer drop-shadow-lg underline-offset-[6px] hover:underline"
        >
          3D Prints
        </p>
      </div>
    </div>
  );
};

export default Navbar;
