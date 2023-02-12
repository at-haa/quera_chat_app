import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './context/store';
import { HomePage } from './pages';
import { Login } from './pages/login';
import { Provider } from 'react-redux';
// import { ReduxStore } from './redux/store'; oooold
import { ReduxStore } from './new-redux/store';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <AppContextProvider>
    // <Provider store={ReduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </Provider>
    </AppContextProvider>
  );
}

export default App;
