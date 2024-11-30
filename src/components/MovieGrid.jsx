import React from 'react';
import { Movie } from './Movie';
import styles from '../styles/movie-grid.module.scss';

export const MovieGrid = ({ movies, lastMovieRef = null }) => {
  return (
    <div className={styles.grid}>
      {movies.map((movie, index) => (
        <Movie
          key={movie.id}
          ref={lastMovieRef && index === movies.length - 1 ? lastMovieRef : null}
          movie={movie}
        />
      ))}
    </div>
  );
};
