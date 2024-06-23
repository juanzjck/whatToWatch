// src/api.js
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODEwOGZiOTcyYTVmZGJjZjc0NzMyYTc1ZjJhOWNiZiIsInN1YiI6IjY2NzU5NmQzOTQ1ZjY0NTgxMTZjNzVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EQhlEd9FRT3CZsXYlxdIhREpZzkl90xk1FZjX8xXZu8';


const fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
};

const buildUrl = (path, params) => {
    const url = new URL(`${BASE_URL}${path}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url.toString();
};

  
const fetchInstance = async (url) => {
    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
};


export const fetchAllMovies = async (params = {}) => {
    const defaultParams = {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
    };
  
    const mergedParams = { ...defaultParams, ...params };
    const url = buildUrl(mergedParams);
    const data = await fetchInstance(url);
    return data ? data.results : [];
};
  

export const getTopRatedMovies = async (params = {}) => {

    const defaultParams = {
      language: 'en-US',
      ...params
    };
  
    const mergedParams = { ...defaultParams, ...params };
    const url = buildUrl('/movie/top_rated', mergedParams);
    const data = await fetchInstance(url);
    return data ? data : {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      };
};

export const getMovieDetails  = async (id,params = {}) => {
    const defaultParams = {
        language: 'en-US',
        ...params
      };

    const mergedParams = { ...defaultParams, ...params };
    const url = buildUrl(`/movie/${id}`, mergedParams);
    const data = await fetchInstance(url);
    return data;
}



export const getMoviesByTitle = async (title ,params = {}) => {

    const defaultParams = {
      language: 'en-US',
      query: title,
      ...params
    };
  
    const mergedParams = { ...defaultParams, ...params };
    const url = buildUrl('/search/movie', mergedParams);
    const data = await fetchInstance(url);
    return data ? data : [];
};