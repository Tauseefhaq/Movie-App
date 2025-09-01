import "../css/MovieCard.css";
import { useMovieContext } from "../Contexts/MovieContexts";
import Favorites from "../pages/favorites";

function MovieCard({ movie }) {

  const {addToFavorites , removeFavorites , isFavorites} = useMovieContext()
  const favorite = isFavorites(movie.id)

  function handleFavorite(e) {
    e.preventDefault()
    if(favorite) removeFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
        <div className="movie-card">
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
            <div className="movie-overlay">
              <button className={`favorite-btn ${favorite? "active" : ""}`} onClick={handleFavorite}>
                &hearts;
              </button>
            </div>
          </div>
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <h5>{movie.release_date?.split("-")[0]}</h5>
          </div>
        </div>
  );
}

export default MovieCard;
