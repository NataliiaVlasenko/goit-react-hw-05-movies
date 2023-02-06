
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieDetails = ({ movie }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const {movieId} = useParams();
  
  
  const movieGenres = movie.genres
    ? movie.genres.map(genre => genre.name).join(' / ')
    : '';

    const from = location.state?.from;

    const goBack = () => {navigate(from ?? '/movies')};

    //const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>
          Go back
        </button>

      {movie && <h2>{movie.title}</h2>}
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <p>User Score: {movie.popularity}</p>

        <p>Overview</p>
        <p>{movie.overview}</p>

        <p>Genres</p>
        <p>{movieGenres}</p>
      </div>
      <div>
        <h2>Additional Information</h2>
        <NavLink state={{from}} to={`/movies/${movieId}/reviews`}>
          <p >Reviews</p>
        </NavLink>

        <NavLink state={{from}} to={`/movies/${movieId}/cast`}>

          <p >Cast</p>
        </NavLink>
        <hr />
        <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </div>
    </div>
  );
};
