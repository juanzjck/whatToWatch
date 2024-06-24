// src/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import NotFound from '../../component/NotFound';
import Loading from '../../component/Loading';

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


  if (error) return <NotFound  subTitle={'The movie you are looking for does not exist or an error occurred.'} title={'404 - Movie Not Found'}/>;

  if (!movie) return <Loading/>;

  const getFlag = (language) => {
    switch (language) {
      case 'en':
        return '🇺🇸';
      case 'es':
        return '🇪🇸';
      case 'fr':
        return '🇫🇷';
      case 'de':
        return '🇩🇪';
      case 'it':
        return '🇮🇹';
      case 'ja':
        return '🇯🇵';
      case 'ko':
        return '🇰🇷';
      case 'zh':
        return '🇨🇳';
      // Add more languages as needed
      default:
        return '🏳️';
    }
  };

  return (
    <div className=" min-h-screen p-4">
      <div className="max-w-4xl mx-auto" >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full rounded mb-4 bg-fixed"
        />
        <div className="flex items-center mb-2">
          <strong>Status:</strong>
          <span className={`ml-2 px-2 py-1 rounded ${movie.status === 'Released' ? 'bg-green-500' : 'bg-gray-500'}`}>
            {movie.status}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg mb-4">{movie.overview}</p>
        <p className="mb-2"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="mb-2"><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p className="mb-2"><strong>Rating:</strong> {movie.vote_average}</p>
        <p className="mb-2"><strong>Tagline:</strong> {movie.tagline}</p>
        <div className="mb-2">
          <strong>Spoken Languages:</strong> 
          {movie.spoken_languages.map(lang => (
            <span key={lang.iso_639_1} className="ml-2">{getFlag(lang.iso_639_1)} {lang.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
