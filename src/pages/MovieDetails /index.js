// src/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import NotFound from '../../component/NotFound';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetails = await getMovieDetails(id);
      if (movieDetails) {
        setMovie(movieDetails);
      } else {
        setError(true);
      }
    };

    fetchDetails();
  }, [id]);


  if (error) return <NotFound />;

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full rounded mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg mb-4">{movie.overview}</p>
        <p className="mb-2"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="mb-2"><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p className="mb-2"><strong>Rating:</strong> {movie.vote_average}</p>
        <p className="mb-2"><strong>Tagline:</strong> {movie.tagline}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
