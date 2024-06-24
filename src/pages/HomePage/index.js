import React from 'react';
import { Movies } from '../../component/Movies';
import { Header } from '../../component/Header';
import { SearchByTitle } from '../../component/SearchByTitle';
import { useContext } from 'react';
import Loading from '../../component/Loading';
import { movieContext } from '../../context/movieContext';
import { Footer } from '../../component/Footer';

export const HomePage = () => {
    const {
        loadingMovie
    } = useContext(movieContext);

    
    if (loadingMovie) return <Loading/>;

    return (
        <>
            <Header>
                <SearchByTitle></SearchByTitle>
            </Header>
            <Movies></Movies>
            <Footer/>
        </>
           
    );
}