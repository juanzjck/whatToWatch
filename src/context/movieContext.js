import { getMoviesByTitle, getTopRatedMovies } from "../api";
import React from 'react';
const { createContext, useState, useEffect, useRef} = require("react");

const movieContext = createContext({});


const MovieContexProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState({
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      });
    const [page, setPage] = useState(1);
    const [loadingMovie, setLoadingMovie] = useState(false);

    const previousSearchTerm = useRef(searchTerm);

  

    const getMovies = async () => {
        setLoadingMovie(true);
        const movies = await getTopRatedMovies({ page: String(page) });
        setMovies(movies);
    };


    const fetMoviesByTitle = async (title) => {
        setLoadingMovie(true);
        const movies = await getMoviesByTitle(title,{ page: String(page) });
        setMovies(movies);
    };
    
    useEffect(()=> {
        try {
            if(searchTerm !== '') {
                if(searchTerm !== previousSearchTerm.current){
                    setPage(1);
                }
              
                fetMoviesByTitle(searchTerm);
            } else {
                setPage(1);
                getMovies();
            }
        } catch (error) {
            console.error('fetch movies error', error);
        } finally {
            setLoadingMovie(false);
        }
    
    },[searchTerm]);
    
    useEffect(()=> {
        try {
            if(searchTerm !== '') {
                fetMoviesByTitle(searchTerm);
            } else {
                getMovies();
            }
        } catch (error) {
            console.error('fetch movies error', error);
        } finally {
            setLoadingMovie(false);
        }

    },[page]);

    return (
        <movieContext.Provider value={
            {
                searchTerm, 
                setSearchTerm,
                movies, 
                setMovies,
                page, 
                setPage,
                loadingMovie, 
                setLoadingMovie
            }
        }>
            {children}
        </movieContext.Provider>
    );
}

export { movieContext, MovieContexProvider };
