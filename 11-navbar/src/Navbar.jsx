import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./assets/react.svg";

const Navbar = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggle = () => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggleLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
    setToggleLinks(!toggleLinks);
  };

  return (
    <main>
      <nav>
        <div className="header-container">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle" onClick={toggle}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links " ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
