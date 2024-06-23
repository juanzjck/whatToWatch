// src/App.js
import React from 'react';

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from './pages/Home';
import MovieDetails from './pages/MovieDetails ';
import NotFound from './component/NotFound';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />,
    },
    {
      path: "/details/:id",
      element:  <MovieDetails />,
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
