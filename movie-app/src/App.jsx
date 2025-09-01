import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./components/Navbar.jsx";
import Favorites from "./pages/favorites.jsx";
import { MovieProvider } from "./Contexts/MovieContexts.jsx";
import "./css/App.css";
import "./css/Navbar.css";

function App() {
  return (
    <MovieProvider>
      <main className="main-content">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
