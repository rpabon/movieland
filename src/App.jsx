import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { YoutubePlayer } from './components/YoutubePlayer';
import { Movies } from './components/Movies';
import { Starred } from './components/Starred';
import { WatchLater } from './components/WatchLater';
import './app.scss';

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* Rendered in a modal */}
      <YoutubePlayer />

      <div className="container">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
