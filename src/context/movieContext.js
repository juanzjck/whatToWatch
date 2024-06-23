const { createContext, useState} = require("react");

const movieContext = createContext({});


const MovieContexProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <movieContext.Provider value={
            {
                searchTerm, 
                setSearchTerm,
                movies, 
                setMovies,
                filteredMovies,
                page, 
                setPage
            }
        }>
            {children}
        </movieContext.Provider>
    );
}

export { movieContext, MovieContexProvider };
