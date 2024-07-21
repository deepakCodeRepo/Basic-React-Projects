import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import AppProvider from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;
