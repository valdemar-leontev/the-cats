import Header from './components/header/header';
import { AppDataContextProvider } from './contexts/app-data-context';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';

function App() {
  return (
    <AppDataContextProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </AppDataContextProvider>
  );
}

export default App;
