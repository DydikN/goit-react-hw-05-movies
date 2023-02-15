import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails } from 'api/films';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMovieDetails(movieId);
        setMovieInfo(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    production_countries,
    overview,
    release_date,
    runtime,
  } = movieInfo;

  let popular;
  if (popularity) {
    popular = Math.round(popularity);

    let vote;
    if (vote_average) {
      vote = Math.round(vote_count);
      let xVC = String(vote);
      let sVC = xVC.split('');
      let indexVC = xVC.length - 1;
      let wVC = Math.floor(indexVC / 3);
      for (let i = 1; i <= wVC; i += 1) {
        indexVC = indexVC - 1 - i;
        sVC.splice(indexVC, 0, ' ');
        let rVC = sVC.join('');
        vote = rVC;
      }
    }

    return (
      <div>
        {loading && <p>...loading</p>}
        {error && <p>{error}</p>}
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
          }
          alt={title}
        />
        <h1>{title}</h1>
        <p>
          Vote / Votes: {Number(vote_average).toFixed(1)} / {vote}
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    );
  }
};

export default MovieDetails;