import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/scss/main.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeProvider';
import Loading from './components/Loading';

// Lazy load des composants
const App = lazy(() => import('./App'));
const Mentions = lazy(() => import('./views/Mentions'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    )
  },
  {
    path: '/mentions-légales',
    element: (
      <Suspense fallback={<Loading />}>
        <Mentions />
      </Suspense>
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
