import { useState, useEffect, use } from "react";
import MovieCard from "../components/movieCard.jsx";
import { searchMovies, getPopularMovies } from "../services/api.js";
import Navbar from "../components/Navbar.jsx";
import "../css/Home.css";
import Favorites from "./favorites.jsx";
function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("falied to load movies.....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!search.trim()) return;
    if (loading) return;
    setLoading(true);
    setSubmittedSearch(search);
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  const mapMovies = () => {
    return movies.map((movie) => <MovieCard movie={movie} key={movie.id} />);
  };
  const favMovies = () => {
    return Favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={search}
          placeholder="Search your favorite movie...."
          onChange={(event) => setSearch(event.target.value)}
          className="search-input"
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading....</div>
      ) : submittedSearch== "" ? (
        <div>
          <h2 className="context">Popular Movies</h2>
          <div className="movies-grid">{mapMovies()}</div>
        </div>
      ) : (
        <div>
          <h2 className="context" >Showing results for  <span className="search-result">"{submittedSearch}"</span></h2>
          <div className="movies-grid">{mapMovies()}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
