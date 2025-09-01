import "../css/Favorites.css";
import { useMovieContext } from "../Contexts/MovieContexts";
import MovieCard from "../components/movieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0)
    return (
      <div className="favorites">
        <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  return (
    <div className="favorites-empty">
      <h2>No Favorite movies yet</h2>
      <p>Click the like button to add more favorite movies</p>
    </div>
  );
}

export default Favorites;
