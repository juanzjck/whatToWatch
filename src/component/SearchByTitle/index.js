import { useContext } from 'react';
import { movieContext } from '../../context/movieContext';

export const SearchByTitle = () => {
    const {
        searchTerm,
        setSearchTerm
    } = useContext(movieContext);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        < >
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearchChange}
                className="mt-4 p-2 bg-gray-800 text-white rounded"
            />
            <p className="mt-2 text-gray-400">Just filter the current result</p>
        </>
    );
}