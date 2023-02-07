import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './context/store';
import { HomePage } from './pages';
import { Login } from './pages/login';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
