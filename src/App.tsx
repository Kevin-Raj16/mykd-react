import { HelmetProvider } from 'react-helmet-async';
import ContextProvider from './context/app-context';
import AppNavigation from './navigation/app-navigation';

function App() {
  return (
    <ContextProvider>
      <HelmetProvider>
        <AppNavigation />
      </HelmetProvider>
    </ContextProvider>
  )
}

export default App
