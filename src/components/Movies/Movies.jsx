import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../services/api';

export const Movies = () => {
  const [state, setState] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getTrendingMovies();
        setState(prevState => {
          return {
            ...prevState,
            movies: [...result],
            //movies: [...prevState.movies, ...result],
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchMovies();
  }, [setState]);

  const { movies, loading, error } = state;

  //console.log(movies, 'from movies');

  return (
    <div>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <p>...load posts</p>}
      {error && <p>...Posts load failed</p>}
    </div>
  );
};
