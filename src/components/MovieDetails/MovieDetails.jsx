import Loader from '../../components/Loader/Loader';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Suspense } from 'react';
import {
  MovieCard,
  Poster,
  SubTitle,
  Container,
  Title,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { movieId } = useParams();

  const movieGenres = movie.genres
    ? movie.genres.map(genre => genre.name).join(' / ')
    : '';

  const from = location.state?.from;

  const goBack = () => {
    navigate(from ?? '/movies');
  };

  //const goBack = () => navigate(-1);

  return (
    <Container>
      <button onClick={goBack}>Go back</button>

      {movie && <Title>{movie.title}</Title>}
      <MovieCard>
        <Poster
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <SubTitle>User Score: {movie.popularity}</SubTitle>

          <SubTitle>Overview</SubTitle>
          <p>{movie.overview}</p>

          <SubTitle>Genres</SubTitle>
          <p>{movieGenres}</p>
        </div>
      </MovieCard>
      <div>
        <h2>Additional Information</h2>
        <NavLink state={{ from }} to={`/movies/${movieId}/reviews`}>
          <p>Reviews</p>
        </NavLink>

        <NavLink state={{ from }} to={`/movies/${movieId}/cast`}>
          <p>Cast</p>
        </NavLink>
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
