import React, { useContext } from "react";
import { movieContext } from "../../context/movieContext";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";
import { Pagination } from "../Pagination";


export const Movies = ()=> {
    const {
        movies,
        page, 
        setPage,
        searchTerm,
        setSearchTerm
    } = useContext(movieContext);

    const handlePageChange = (newPage) => {
        if (newPage < 1) return;
        setPage(newPage);
    };


    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1;
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(<span key={i} className="star">&#9733;</span>); // Full star
        }
    
        if (halfStar) {
          stars.push(<span key="half" className="star">&#9733;</span>); // Full star for simplicity
        }
    
        return stars;
      };
    
    if(movies.results.length === 0 && searchTerm != '') {
        return (
            <NotFound 
                title={`There are't any movie with the title "${searchTerm}"`}
                subTitle='Try with other title.'
                onClickTryAgain={()=> setSearchTerm('')}
            >
            </NotFound>)
    }

    return (
        <>
            <main className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.results.map(movie => (
                    <Link key={movie.id} to={`/details/${movie.id}`} className="bg-gray-800 p-4 rounded block hover:drop-shadow-2xl">
                        <div key={movie.id} className="bg-gray-800 text-white p-4 rounded ">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded mb-2"/>
                            <h2 className="text-xl font-bold">{movie.title}</h2>
                            <p className="text-sm">{movie.release_date}</p>
                            {renderStars(movie.vote_average)}
                        </div>
                    </Link>
     
                ))}
                </div>
            </main>
            <Pagination
                currentPage={page}
                totalPages={movies.total_pages}
                onPageChange={handlePageChange}
            >

            </Pagination>
        </>
 

    );
}