import logo from "./assets/react.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { setSidebarOpen, setPageID } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageID(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <img src={logo} alt="logo" />
        <NavLinks />
        <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
