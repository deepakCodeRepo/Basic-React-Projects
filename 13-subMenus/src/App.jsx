import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import AppProvider from "./context";

function App() {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </main>
    </AppProvider>
  );
}

export default App;
