import logo from "../assets/logo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-1 flex items-center justify-between py-4 ">
      <div className="flex items-center shrink-0">
        <img src={logo} alt="logo" className="mx-2 w-18" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl text-white">
        <a
          href="https://drive.google.com/file/d/1nXZ2FBNUcL3eZsiOMnCapjpMGihZbk3X/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition-colors duration-400"
        >
          <GrDocumentDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/bagusfebrian/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition-colors duration-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/BagusFebrianRB"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition-colors duration-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/bagusfebrian_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition-colors duration-400"
        >
          {" "}
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
