import { Movie } from './Movie';
import styles from '../styles/movies.module.scss';
import '../styles/movies.scss';

export const Movies = ({ movies }) => {
  return (
    <div className={styles.container} data-testid="movies">
      {movies.movies.results?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
