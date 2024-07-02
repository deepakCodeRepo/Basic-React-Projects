import { useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { pageID, setPageID } = useGlobalContext();

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageID(null);
    }
  };

  return (
    <div
      className={sublinks[pageID] ? "submenu show-menu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{sublinks[pageID]?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            sublinks[pageID]?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {sublinks[pageID]?.links?.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
