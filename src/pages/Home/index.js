
import { Movies } from '../../component/Movies';
import { Header } from '../../component/Header';
import { SearchByTitle } from '../../component/SearchByTitle';

export const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header>
                <SearchByTitle></SearchByTitle>
            </Header>
            <Movies></Movies>
        </div>
    );
}