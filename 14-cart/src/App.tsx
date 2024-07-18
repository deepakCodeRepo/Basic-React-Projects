import CartContainer from "./CartContainer";
import Navbar from "./Navbar.tsx";
import AppProvider from "./context";
import useCustomQuery from "./queryData.ts";

const App = () => {
  const { isLoading, isError, error } = useCustomQuery();

  if (isLoading) {
    return <h3 className="loading">Loading...</h3>;
  }

  if (isError) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return <h3 className="error">Error: {errorMessage}</h3>;
  }

  return (
    <AppProvider>
      <Navbar />
      <CartContainer />
    </AppProvider>
  );
};

export default App;
