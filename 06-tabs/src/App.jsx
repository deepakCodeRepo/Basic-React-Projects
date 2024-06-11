import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "react-query";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [tabs, setTabs] = useState([]);
  const [tabInfo, setTabInfo] = useState([]);

  const { data, isLoading, error } = useQuery(
    "tabs",
    async () => {
      const resp = await axios(url);
      return resp.data;
    },
    {
      onSuccess: (data) => {
        setTabs(data);
        setTabInfo([data[0]]);
      },
    }
  );

  const selectTab = (tab_info) => {
    const selectedTab = tabs.filter((tab) => tab.company === tab_info);
    setTabInfo(selectedTab);
  };

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 style={{ color: "red" }}>An Error Has Occurred: {error.message}</h1>
    );
  }

  return (
    <main>
      <section className="main-container">
        <article className="tabs">
          {tabs.map((tab) => {
            return (
              <button
                className={`tab ${
                  tab.company === tabInfo[0].company && "tab-active"
                }`}
                key={tab.id}
                onClick={() => selectTab(tab.company)}
              >
                {tab.company}
              </button>
            );
          })}
        </article>

        {tabInfo.map((info, index) => {
          return (
            <article key={index} className="tab-info">
              <p className="title">{info.title}</p>
              <p className="company">{info.company}</p>
              <p className="dates">{info.dates}</p>
              {info.duties.map((duty, index) => {
                return (
                  <div className="duties" key={index}>
                    <FaAngleDoubleRight />
                    <p className="duty">{duty}</p>
                  </div>
                );
              })}
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
