import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {getSingleMovie} from '../../services/api';
import { useLocation } from 'react-router-dom';
import {MovieDetails} from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';

const MovieSinglePage = () => {

    const {movieId}= useParams();
       const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

      useEffect(() => {
        const fetchMovie = async () => {
          try {
            setLoading(true);
            
            const result = await getSingleMovie(movieId);
            setMovie(result);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchMovie();
      }, [movieId]);
      

return(
<div>
{loading && <Loader/>}
<MovieDetails  movie={movie} id = {movieId}/>
</div>
)
}

export default MovieSinglePage;