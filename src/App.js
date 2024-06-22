// src/App.js
import React from 'react';
import { Header } from './component/Header';
import { MovieContexProvider } from './context/movieContext';
import { Movies } from './component/Movies';

function App() {


  return (
    <MovieContexProvider>
      <div className="bg-gray-900 text-white min-h-screen">
      <Header>

      </Header>
      <Movies></Movies>
      </div>
    </MovieContexProvider>
   
  );
}

export default App;
