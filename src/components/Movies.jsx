import { Movie } from './Movie';
import styles from '../styles/movie-grid.module.scss';
import '../styles/movies.scss';

export const Movies = ({ movies, lastElementRef }) => {
  return (
    <div className={styles.grid} data-testid="movies">
      {movies.map((movie, index) => (
        <Movie
          key={movie.id}
          ref={index === movies.length - 1 ? lastElementRef : null}
          movie={movie}
        />
      ))}
    </div>
  );
};
