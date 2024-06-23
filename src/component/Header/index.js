import { Link } from 'react-router-dom';
import './styles.css'
import { SearchByTitle } from '../SearchByTitle';

export const Header = ({children}) => {

    return (
        <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-2xl font-bold mb-4 md:mb-0">
            <Link to="/">What To Watch</Link>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/" className="text-white hover:text-gray-400">Top Movies</Link>
            <SearchByTitle />
          </div>
        </nav>
      </header>
    );
}