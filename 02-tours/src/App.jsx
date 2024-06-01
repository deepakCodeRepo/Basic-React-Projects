import axios from "axios";
import { useEffect, useState, createContext } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

export const toursContext = createContext();

function App() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function removeTour(id) {
    const updatedTours = info.filter((tour) => tour.id !== id);
    setInfo(updatedTours);
  }

  async function fetchData() {
    try {
      const resp = await axios(url);
      setInfo(resp.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (info.length === 0) {
    return (
      <section className="refresh-container">
        <h1>No Tours Left</h1>
        <button className="refresh-btn" onClick={() => fetchData()}>
          Refresh
        </button>
      </section>
    );
  }

  return (
    <toursContext.Provider value={removeTour}>
      <section className="main-container">
        <h1>Our Tours</h1>
        <div className="underline"></div>
        <Tours info={info} />
      </section>
    </toursContext.Provider>
  );
}

export default App;
