import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
  // invoke useNavigate
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-start place-items-center w-full h-16 z-50 px-5 text-lightest bg-dark drop-shadow-lg">
      <div className="flex-1 flex justify-center place-items-end gap-x-1.5">
        <h1 className="text-2xl font-light">Joshua G.</h1>
        <a href="https://github.com/Joshawott64" target="_blank">
          <IoLogoGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-gray-74b67930b"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
      </div>
      <div className="flex-1 flex justify-center gap-x-2 text-sm font-extralight">
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/projects")}>Projects</p>
        <p onClick={() => navigate("/prints")}>3D Prints</p>
      </div>
    </div>
  );
};

export default Navbar;
