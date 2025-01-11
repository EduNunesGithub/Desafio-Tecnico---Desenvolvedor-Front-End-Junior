import { QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { queryClient } from "./lib/react-query";
import { Home } from "./pages/Home/Home";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Header />

    <Home />

    <Footer />
  </QueryClientProvider>
);

export default App;
