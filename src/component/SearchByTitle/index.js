import { useContext, useEffect } from 'react';
import { movieContext } from '../../context/movieContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchByTitle = () => {
    const {
        searchTerm,
        setSearchTerm
    } = useContext(movieContext);

    const location = useLocation();
    const navigate = useNavigate();

;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        if (location.pathname !== '/') {
          navigate('/');
        }
     };
    
    return (
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 bg-gray-800 text-white flex-grow outline-none"
            />
            <button
                onClick={handleSearchClick}
                className="p-2 bg-blue-500 text-white"
            >
                Search
            </button>
        </div>
    );
}