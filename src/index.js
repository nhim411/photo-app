import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import AddEditPage from './features/Photo/pages/AddEdit';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Photo = lazy(() => import('./features/Photo'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='photos' element={<Photo />}>
                <Route path='add' element={<AddEditPage />} />
                <Route path='add/:photoId' element={<AddEditPage />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
