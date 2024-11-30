import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { YoutubePlayer } from './components/YoutubePlayer';
import { Movies } from './components/Movies';
import { Starred } from './components/Starred';
import { WatchLater } from './components/WatchLater';
import { usePaginatedMovies } from './hooks/usePaginatedMovies';
import './app.scss';

const App = () => {
  const { movies, loading, lastMovieRef } = usePaginatedMovies();

  return (
    <div className="App">
      <Header />
      <YoutubePlayer />

      <div className="container">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Movies movies={movies} lastElementRef={lastMovieRef} />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
