import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import {Container} from './MoviePage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
 
  useEffect(() => {
    if (!query) {
       return;
    }
     setStatus('pending');

    searchMovies(query)
      .then(response => {
        setMovies([...response]);
        setStatus('resolved');

        if (response.length === 0) {
          setMovies([]);

          return toast.error('it`s nothing have found, try again', {
            theme: 'colored',
          });
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query,error]);

  const handleSearch = value => {

    setSearchParams({ query: value });
    setMovies([]);
  };

  return (
    <Container>
     
      <SearchBar onSearch={handleSearch} />
      {status === 'pending' && <Loader/>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </Container>
  );
};
export default MoviesPage;
