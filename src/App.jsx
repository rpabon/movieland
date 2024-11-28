import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Movies } from './components/Movies';
import { Starred } from './components/Starred';
import { WatchLater } from './components/WatchLater';
import { useMovies } from './hooks/useMovies';
import './app.scss';

const App = () => {
  const { movies, getMovies, getMoviesFromSearchParams } = useMovies();

  useEffect(() => {
    getMoviesFromSearchParams();
  }, []);

  return (
    <div className="App">
      <Header getMovies={getMovies} />

      <div className="container">
        <Routes>
          <Route path="/" element={<Movies movies={movies} />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
