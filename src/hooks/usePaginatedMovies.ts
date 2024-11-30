import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePagination } from '@/hooks/usePagination';
import { useMovies } from '@/hooks/useMovies';

export const usePaginatedMovies = () => {
  const [searchParams] = useSearchParams();
  const { movies, loading, currentPage, incrementPage, discoverMovies, searchMovies } = useMovies();
  const { lastElementRef } = usePagination(incrementPage);

  useEffect(() => {
    const query = searchParams.get('search');

    if (query) {
      searchMovies(query, currentPage);
    } else {
      discoverMovies(currentPage);
    }
  }, [currentPage, searchParams, searchMovies, discoverMovies]);

  return {
    movies,
    loading,
    lastMovieRef: lastElementRef,
  };
};
