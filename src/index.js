import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/main.scss';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Mentions from './views/Mentions';
import { ThemeProvider } from './contexts/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/mentions-légales',
    element: <Mentions />
  }
])

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
