
import { Movies } from '../../component/Movies';
import { Header } from '../../component/Header';
import { SearchByTitle } from '../../component/SearchByTitle';
import { useContext } from 'react';
import Loading from '../../component/LoadingPage';
import { movieContext } from '../../context/movieContext';

export const HomePage = () => {
    const {
        movies,
        loadingMovie
    } = useContext(movieContext);

    
    if (loadingMovie) return <Loading/>;

    return (
        <>
            <Header>
                <SearchByTitle></SearchByTitle>
            </Header>
            <Movies></Movies>
        </>
           
    );
}