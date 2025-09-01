import { Link } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./movieCard";
function Navbar() {
  const [movies, setMovies] = useState([]);

  const mapMovies = (e)=>{
    e.preventDefault()
    return movies.map(
            (movie) =>
              <MovieCard movie={movie} key={movie.id} />
          )
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie Rulz</Link>
      </div>
      <div className="navbar-links">
            <Link to="/" className="nav-link" onClick={()=>mapMovies(e)} >Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}
export default Navbar;
