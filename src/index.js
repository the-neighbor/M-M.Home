import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import HomePage from './routes/home-page';
import AboutPage from './routes/about-page';
import DonatePage from './routes/donate-page';
import ArtPage from './routes/art-page';
import TechnologyPage from './routes/technology-page';
import StudentsPage from './routes/students-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/donate",
      element: <DonatePage />,
    },
    {
      path: "/technology",
      element: <TechnologyPage />,
    },
    {
      path: "/arts",
      element: <ArtPage />,
    },
    {
      path: "/students",
      element: <StudentsPage />
    }
  ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
