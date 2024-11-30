import { MovieType } from '@/types/MovieType';

export const addToList = <T extends MovieType>(list: T[], item: T): T[] => {
  const isAlreadyInList = list.some(({ id }) => id === item.id);
  if (isAlreadyInList) return list;

  return [item, ...list];
};

export const removeFromList = <T extends MovieType>(list: T[], itemToRemove: T): T[] => {
  return list.filter(({ id }) => id !== itemToRemove.id);
};

export const getTrailerKey = (movie: MovieType): string | null => {
  if (!movie?.videos?.results) return null;

  const videos = movie.videos.results;
  const trailer = videos.find((v) => v.type === 'Trailer');
  const trailerKey = trailer ? trailer.key : videos[0]?.key;

  return trailerKey || null;
};
