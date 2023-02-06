import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api';
import { nanoid } from 'nanoid';
import { ImUserMinus } from 'react-icons/im';

const MovieCastPage = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await getCast(movieId);
        setCast(res);
      } catch (error) {
        setError('We`ve nothing found...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul>
        {cast.map(castItem => {
          return (
            <li key={castItem.id + nanoid()}>
              <img
                src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
              <div>
                <p>Name: {castItem.name}</p>
                <p>Character: {castItem.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCastPage;
