import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api';
import { nanoid } from 'nanoid';
import { ImUserMinus } from 'react-icons/im';
import Loader from '../../components/Loader/Loader';
import {Container, CastList, SubTitle} from './MovieCastPage.styled';

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
    <Container>
      {loading && <Loader/>}
      {error && <div>{error}</div>}
      <CastList>
        {cast.map(castItem => {
          return (
            <li key={castItem.id + nanoid()}>
              <img
                src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
              <div>
                <SubTitle>Name: {castItem.name}</SubTitle>
                <SubTitle>Character: {castItem.character}</SubTitle>
              </div>
            </li>
          );
        })}
      </CastList>
    </Container>
  );
};

export default MovieCastPage;
