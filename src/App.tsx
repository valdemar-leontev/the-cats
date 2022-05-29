import Header from "./components/header/header";
import { AppDataContextProvider } from "./contexts/app-data-context";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./app-routes";

function App() {
  return (
    <AppDataContextProvider>
      <HashRouter>
        <Header />
        <AppRoutes />
      </HashRouter>
    </AppDataContextProvider>
  );
}

export default App;
