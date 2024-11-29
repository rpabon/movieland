import React from 'react';
import { Movie } from './Movie';
import styles from '../styles/movie-grid.module.scss';

export const MovieGrid = ({ movies, lastElementRef = null }) => {
  return (
    <div className={styles.grid}>
      {movies.map((movie, index) => (
        <Movie
          key={movie.id}
          ref={lastElementRef && index === movies.length - 1 ? lastElementRef : null}
          movie={movie}
        />
      ))}
    </div>
  );
};
