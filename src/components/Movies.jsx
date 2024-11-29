import { Movie } from './Movie';
import styles from '../styles/movie-grid.module.scss';
import '../styles/movies.scss';

export const Movies = ({ movies }) => {
  return (
    <div className={styles.grid} data-testid="movies">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
