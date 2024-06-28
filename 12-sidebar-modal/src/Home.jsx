import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { setShowSidebar, setShowModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-btn" onClick={() => setShowSidebar(true)}>
        <FaBars />
      </button>
      <div>
        <button className="modal-btn" onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      </div>
    </main>
  );
};

export default Home;
