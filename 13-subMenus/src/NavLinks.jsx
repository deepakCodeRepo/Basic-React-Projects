import sublinks from "./data";
import { useGlobalContext } from "./context";

const NavLinks = () => {
  const { setPageID } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((sublink, index) => {
        const { page } = sublink;
        return (
          <button
            key={index}
            className="nav-link"
            onMouseEnter={() => setPageID(index)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
