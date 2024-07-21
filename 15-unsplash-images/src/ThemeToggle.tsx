import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="theme-btn" onClick={toggleDarkTheme}>
        {isDarkTheme ? <MdSunny className="light" /> : <IoMoonSharp />}
      </button>
    </section>
  );
};

export default ThemeToggle;
