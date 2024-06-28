import { useState } from "react";
// import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./assets/react.svg";

//INFO: code I came up with
const Navbar = () => {
  const [toggleLinks, setToggleLinks] = useState(true);

  window.onresize = function () {
    if (window.innerWidth > 800) {
      setToggleLinks(true);
    } else if (window.innerWidth <= 800) {
      setToggleLinks(false);
    }
  };

  return (
    <main>
      <nav>
        <div className="header-container">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() => setToggleLinks(!toggleLinks)}
            >
              <FaBars />
            </button>
          </div>
          {toggleLinks && (
            <div className="links-container">
              <ul className="links">
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
          )}
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

//INFO: for smooth transition of the links
/* const Navbar = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  return (
    <main>
      <nav>
        <div className="header-container">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() => setToggleLinks(!toggleLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`${
              toggleLinks ? "links-container show-links" : "links-container"
            }`}
          >
            <ul className="links ">
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

export default Navbar; */

//INFO: auto-adjusting container for the height of the links using useRef hook
/* const Navbar = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  window.onresize = function () {
    if (window.innerWidth > 800) {
      linksContainerRef.current.style.height = "auto";
      setToggleLinks(false);
    } else if (window.innerWidth <= 800) {
      linksContainerRef.current.style.height = "0px";
    }
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggleLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggleLinks]);

  return (
    <main>
      <nav>
        <div className="header-container">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() => setToggleLinks(!toggleLinks)}
            >
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

export default Navbar; */
