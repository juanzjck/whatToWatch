// src/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import NotFound from '../../component/NotFound';
import Loading from '../../component/LoadingPage';
import MovieDetails from '../../component/MovieDetails';
import { Header } from '../../component/Header';
import { Footer } from '../../component/Footer';

export const MovieDetailsPage = () => {
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

  return (
    <>
      <Header></Header>
      <MovieDetails></MovieDetails>
      <Footer/>
    </>
  );
};

