import CartContainer from "./CartContainer";
import Navbar from "./Navbar.tsx";
import AppProvider from "./context";

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <CartContainer />
    </AppProvider>
  );
};
export default App;
