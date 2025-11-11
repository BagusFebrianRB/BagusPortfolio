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
        <GrDocumentDownload />
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
