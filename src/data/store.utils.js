export const addToList = (list, item) => {
  const isAlreadyInList = list.some(({ id }) => id === item.id);
  if (isAlreadyInList) return list;

  return [item, ...list];
};

export const removeFromList = (list, itemToRemove) => {
  return list.filter(({ id }) => id !== itemToRemove.id);
};

export const clearList = () => [];
