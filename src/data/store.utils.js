export const addToList = (list, item) => {
  const isAlreadyInList = list.some(({ id }) => id === item.id);
  if (isAlreadyInList) return list;

  return [item, ...list];
};

export const removeFromList = (list, itemToRemove) => {
  return list.filter(({ id }) => id !== itemToRemove.id);
};

export const clearList = () => [];

export const getTrailerKey = (movie) => {
  if (!movie?.videos?.results) return null;

  const videos = movie.videos?.results;
  const trailer = videos.find((v) => v.type === 'Trailer');
  const trailerKey = trailer ? trailer.key : videos[0].key;

  return trailerKey;
};
