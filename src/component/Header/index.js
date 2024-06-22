import { useContext } from 'react';
import './styles.css'
import { movieContext } from '../../context/movieContext';

export const Header = () => {
    const {
        searchTerm,
        setSearchTerm
    } = useContext(movieContext);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        <header className="text-center p-4">
            <h1 className="text-3xl font-bold">Popular Movies</h1>
            <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mt-4 p-2 bg-gray-800 text-white rounded"
            />
            <p className="mt-2 text-gray-400">Just filter the current result</p>
        </header>
    );
}