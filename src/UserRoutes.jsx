import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const MovieSinglePage = lazy(() =>
  import('./pages/MovieSinglePage/MovieSinglePage')
);

const MovieCastPage = lazy(() => import('./pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() =>
  import('./pages/MovieReviewsPage/MovieReviewsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieSinglePage />}>
          <Route path="cast" element={<MovieCastPage />} />
          <Route path="reviews" element={<MovieReviewsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

        {/* /movies/:movieId */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
