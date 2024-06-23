// src/App.js
import React from 'react';

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { MovieDetailsPage }from './pages/MovieDetailsPage';
import NotFound from './component/NotFound';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage />,
    },
    {
      path: "/details/:id",
      element:  <MovieDetailsPage />,
    },
    {
      path: '*',
      element: <NotFound subTitle={'The page you are looking for does not exist or an error occurred.'} title={'404 - Movie Not Found'}/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
